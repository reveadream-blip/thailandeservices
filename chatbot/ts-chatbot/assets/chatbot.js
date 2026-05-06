/* Thailande Services — assistant assurance (WordPress), logique alignée sur Chatbot.tsx du site Astro */
;(function () {
  'use strict'

  var CONFIG = window.tsAssuranceChatbot || {}
  var STORAGE_KEY = 'ts_wp_chatbot_v2_state'
  var WELCOME =
    "Bonjour ! Je suis votre assistant virtuel pour les demandes d'assurance en Thaïlande. Appuyez sur 'Commencer' pour démarrer."

  var PERSON_FIELDS = ['nom', 'prenom', 'age', 'taille', 'poids', 'antecedents']

  var SHARED_LABELS = {
    email: 'Quelle est votre adresse e-mail pour recevoir les informations ?',
    adresse:
      'Quelle est votre adresse actuelle en Thaïlande ou avez-vous prévu de vous expatrier en Thaïlande ?',
    visa: 'Quel type de visa avez-vous ou prévoyez-vous (pour le foyer / la situation principale) ?',
  }

  function personKeys(personIndex, field) {
    return 'p' + personIndex + '_' + field
  }

  function questionForPerson(nb, personIndex, field) {
    var n = personIndex + 1
    var prefix = nb > 1 ? 'Personne ' + n + ' sur ' + nb + ' — ' : ''
    switch (field) {
      case 'nom':
        return prefix + 'Quel est le nom de famille ?'
      case 'prenom':
        return prefix + 'Quel est le prénom ?'
      case 'age':
        return prefix + 'Quel âge avez-vous ?'
      case 'taille':
        return prefix + 'Quelle est votre taille ? (ex. 175 cm ou 1,75 m)'
      case 'poids':
        return prefix + 'Quel est votre poids ? (ex. 70 kg)'
      case 'antecedents':
        return prefix + 'Avez-vous des antécédents médicaux ? Si oui, veuillez les décrire.'
      default:
        return ''
    }
  }

  function parseWeb3FormsSubmitResponse(raw) {
    try {
      var j = JSON.parse(raw)
      var success = j.success === true || j.success === 'true'
      var message
      if (typeof j.message === 'string' && j.message.trim()) message = j.message.trim()
      if (j.body && typeof j.body === 'object' && j.body !== null) {
        var b = j.body
        if (!success && (b.success === true || b.success === 'true')) success = true
        if (!message && typeof b.message === 'string' && b.message.trim()) message = b.message.trim()
      }
      return { success: success, message: message }
    } catch (e) {
      return { success: false, message: undefined }
    }
  }

  function isConfiguredKey(key) {
    if (!key || typeof key !== 'string') return false
    var t = key.trim()
    return t.length > 0 && t !== 'YOUR-WEB3FORMS-ACCESS-KEY'
  }

  function readWeb3Key() {
    if (isConfiguredKey(CONFIG.accessKey)) return CONFIG.accessKey
    var el = document.querySelector('#ts-contact-form input[name="access_key"], form.ts-contact-form input[name="access_key"]')
    if (el && el.value && isConfiguredKey(el.value)) return el.value.trim()
    var meta = document.querySelector('meta[name="web3forms-access-key"]')
    if (meta) {
      var c = (meta.getAttribute('content') || '').trim()
      if (isConfiguredKey(c)) return c
    }
    return CONFIG.accessKey || ''
  }

  function keyMissingBlock() {
    var wa = CONFIG.waMeUrl || 'https://wa.me/'
    return [
      'WhatsApp : ' + wa,
      '',
      'Formulaire de contact sur le site.',
      '',
      'Si vous gérez le site : WordPress → Réglages → Assistant assurance — renseignez la clé Web3Forms, puis enregistrez.',
    ].join('\n')
  }

  function missingKeyAtStartText() {
    return "L’assistant ne peut pas encore envoyer une demande automatiquement.\n\n" + keyMissingBlock()
  }

  function missingKeyAfterFlowText() {
    return "Merci pour vos réponses ! Nous n’avons pas pu envoyer le dossier depuis l’assistant.\n\n" + keyMissingBlock()
  }

  function buildChatbotMessage(answers, nbPersonnes) {
    var lines = ["Nouvelle demande d'assurance (chatbot)", '', 'Nombre de personnes à assurer : ' + nbPersonnes, '']
    lines.push('— Coordonnées et situation —')
    lines.push('Email : ' + (answers.email || ''))
    lines.push('Adresse / expatriation : ' + (answers.adresse || ''))
    lines.push('Visa : ' + (answers.visa || ''))
    lines.push('')
    for (var i = 0; i < nbPersonnes; i++) {
      lines.push('— Personne ' + (i + 1) + ' —')
      lines.push('Nom : ' + (answers[personKeys(i, 'nom')] || ''))
      lines.push('Prénom : ' + (answers[personKeys(i, 'prenom')] || ''))
      lines.push('Âge : ' + (answers[personKeys(i, 'age')] || ''))
      lines.push('Taille : ' + (answers[personKeys(i, 'taille')] || ''))
      lines.push('Poids : ' + (answers[personKeys(i, 'poids')] || ''))
      lines.push('Antécédents : ' + (answers[personKeys(i, 'antecedents')] || ''))
      lines.push('')
    }
    return lines.join('\n').replace(/\n+$/, '')
  }

  function displayNameFromAnswers(answers, nb) {
    var prenom = answers[personKeys(0, 'prenom')] || ''
    var nom = answers[personKeys(0, 'nom')] || ''
    var joined = (prenom + ' ' + nom).trim()
    if (joined) return joined
    if (nb > 1) return 'Demande ' + nb + ' personnes'
    return 'Chatbot'
  }

  function mount(root) {
    var web3AccessKey = readWeb3Key()

    var state = {
      phase: 'choose_household',
      nbPersonnes: 1,
      currentPersonIndex: 0,
      currentPersonField: 'nom',
      answers: {},
      messages: [{ text: WELCOME, sender: 'bot' }],
      isStarted: false,
      isSending: false,
      minimized: false,
    }

    function persist() {
      if (!state.isStarted) return
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            phase: state.phase,
            nbPersonnes: state.nbPersonnes,
            currentPersonIndex: state.currentPersonIndex,
            currentPersonField: state.currentPersonField,
            answers: state.answers,
            messages: state.messages,
            isStarted: state.isStarted,
          })
        )
      } catch (e) {}
    }

    function loadPersisted() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return
        var s = JSON.parse(raw)
        if (s.messages && s.messages.length) state.messages = s.messages
        if (s.answers && typeof s.answers === 'object') state.answers = s.answers
        if (typeof s.isStarted === 'boolean') state.isStarted = s.isStarted
        if (s.phase) state.phase = s.phase
        if (typeof s.nbPersonnes === 'number' && s.nbPersonnes >= 1) state.nbPersonnes = s.nbPersonnes
        if (typeof s.currentPersonIndex === 'number') state.currentPersonIndex = s.currentPersonIndex
        if (s.currentPersonField) state.currentPersonField = s.currentPersonField
      } catch (e) {}
    }

    function needsTextInput() {
      return (
        state.isStarted &&
        (state.phase === 'ask_count_many' ||
          state.phase === 'shared_email' ||
          state.phase === 'shared_adresse' ||
          state.phase === 'shared_visa' ||
          state.phase === 'person_fields')
      )
    }

    function isLastQuestion() {
      return (
        state.phase === 'person_fields' &&
        state.currentPersonIndex === state.nbPersonnes - 1 &&
        state.currentPersonField === 'antecedents'
      )
    }

    function scrollMessages(el) {
      if (el) el.scrollTop = el.scrollHeight
    }

    function renderMessages(container) {
      if (!container) return
      container.innerHTML = ''
      state.messages.forEach(function (msg) {
        var row = document.createElement('div')
        row.className = 'chatbot-msg-row' + (msg.sender === 'user' ? ' chatbot-msg-row--user' : '')
        var bubble = document.createElement('div')
        bubble.className = 'chatbot-bubble ' + (msg.sender === 'user' ? 'chatbot-bubble--user' : 'chatbot-bubble--bot')
        var p = document.createElement('p')
        p.textContent = msg.text
        bubble.appendChild(p)
        row.appendChild(bubble)
        container.appendChild(row)
      })
    }

    function setMinimized(m) {
      state.minimized = !!m
      renderAll()
    }

    function appendBot(text) {
      state.messages = state.messages.concat([{ text: text, sender: 'bot' }])
      persist()
      renderAll()
    }

    function appendUser(text) {
      state.messages = state.messages.concat([{ text: text, sender: 'user' }])
      persist()
      renderAll()
    }

    function startSharedQuestions(n, newAnswers) {
      state.nbPersonnes = n
      state.phase = 'shared_email'
      state.answers = newAnswers
      var intro =
        n > 1
          ? "Très bien. Nous allons d’abord recueillir l’e-mail, l’adresse et le type de visa (communs au dossier), puis pour chacune des " +
            n +
            ' personnes : nom, prénom, âge, taille, poids et antécédents médicaux.'
          : 'Parfait. Nous allons d’abord recueillir vos coordonnées (e-mail, adresse, visa), puis votre nom, prénom, âge, taille, poids et antécédents médicaux.'
      state.messages = state.messages.concat([
        { text: intro, sender: 'bot' },
        { text: SHARED_LABELS.email, sender: 'bot' },
      ])
      persist()
      renderAll()
    }

    function advancePersonField(newAnswers) {
      state.answers = newAnswers
      var fieldIdx = PERSON_FIELDS.indexOf(state.currentPersonField)
      if (fieldIdx < PERSON_FIELDS.length - 1) {
        var nextField = PERSON_FIELDS[fieldIdx + 1]
        state.currentPersonField = nextField
        appendBot(questionForPerson(state.nbPersonnes, state.currentPersonIndex, nextField))
        return
      }
      if (state.currentPersonIndex < state.nbPersonnes - 1) {
        var nextPi = state.currentPersonIndex + 1
        state.currentPersonIndex = nextPi
        state.currentPersonField = 'nom'
        appendBot(questionForPerson(state.nbPersonnes, nextPi, 'nom'))
        return
      }
      finishWithSubmit(newAnswers)
    }

    function finishWithSubmit(newAnswers) {
      state.answers = newAnswers
      state.phase = 'done'
      persist()
      web3AccessKey = readWeb3Key()
      if (!isConfiguredKey(web3AccessKey)) {
        appendBot(missingKeyAfterFlowText())
        setTimeout(function () {
          setMinimized(true)
        }, 1200)
        return
      }
      state.isSending = true
      renderAll()
      var fd = new FormData()
      fd.append('access_key', web3AccessKey)
      fd.append('name', displayNameFromAnswers(newAnswers, state.nbPersonnes))
      fd.append('email', newAnswers.email || '')
      fd.append('subject', "Demande d'assurance — assistant chatbot")
      fd.append('from_name', (CONFIG.fromName || 'WordPress — chatbot assurance').toString())
      fd.append('message', buildChatbotMessage(newAnswers, state.nbPersonnes))

      fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
        .then(function (res) {
          return res.text().then(function (text) {
            return { res: res, text: text }
          })
        })
        .then(function (_ref) {
          var res = _ref.res
          var text = _ref.text
          var parsed = parseWeb3FormsSubmitResponse(text)
          if (parsed.success) {
            appendBot(
              "✅ Merci pour vos réponses ! Nous avons bien reçu votre demande d'assurance. Nous vous contacterons bientôt. Vous pouvez réduire cette fenêtre."
            )
            setTimeout(function () {
              setMinimized(true)
            }, 1800)
          } else {
            var parts = []
            if (parsed.message) parts.push(parsed.message)
            if (!res.ok) parts.push('HTTP ' + res.status)
            else if (!parsed.message && text.trim()) parts.push(text.trim().slice(0, 120))
            var detail = parts.length ? ' (' + parts.join(' — ') + ')' : ''
            appendBot("⚠️ L'envoi a échoué." + detail + ' Merci de réessayer ou de nous écrire sur WhatsApp.')
          }
        })
        .catch(function () {
          appendBot('⚠️ Erreur réseau. Merci de réessayer ou de nous contacter via WhatsApp.')
        })
        .finally(function () {
          state.isSending = false
          renderAll()
        })
    }

    function handleHouseholdChoice(choice) {
      if (choice === 'one') {
        appendUser('Une seule personne')
        startSharedQuestions(1, state.answers)
        return
      }
      if (choice === 'two') {
        appendUser('Deux personnes')
        startSharedQuestions(2, state.answers)
        return
      }
      appendUser('Trois personnes ou plus')
      state.phase = 'ask_count_many'
      appendBot('Combien de personnes souhaitez-vous assurer au total ? (indiquez un nombre, minimum 3)')
      persist()
      renderAll()
    }

    function handleStart() {
      web3AccessKey = readWeb3Key()
      if (!isConfiguredKey(web3AccessKey)) {
        state.isStarted = true
        state.phase = 'missing_key'
        appendBot(missingKeyAtStartText())
        return
      }
      state.isStarted = true
      state.phase = 'choose_household'
      appendBot('Souhaitez-vous une assurance pour une seule personne ou pour plusieurs personnes ?')
    }

    function handleReset() {
      state.phase = 'choose_household'
      state.nbPersonnes = 1
      state.currentPersonIndex = 0
      state.currentPersonField = 'nom'
      state.answers = {}
      state.messages = [{ text: WELCOME, sender: 'bot' }]
      state.isStarted = false
      state.isSending = false
      state.minimized = false
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch (e) {}
      renderAll()
    }

    function handleSubmit(userText) {
      if (!userText.trim() || !needsTextInput() || state.isSending) return
      var text = userText.trim()

      if (state.phase === 'ask_count_many') {
        var n = parseInt(text, 10)
        if (isNaN(n) || n < 3) {
          appendUser(text)
          appendBot('Merci d’indiquer un nombre entier au moins égal à 3.')
          return
        }
        appendUser(text)
        startSharedQuestions(n, state.answers)
        return
      }

      if (state.phase === 'shared_email') {
        if (text.indexOf('@') === -1) {
          appendUser(text)
          appendBot('Cette adresse ne semble pas valide. Merci d’indiquer une adresse e-mail correcte.')
          return
        }
        var na = Object.assign({}, state.answers, { email: text })
        appendUser(text)
        state.answers = na
        state.phase = 'shared_adresse'
        appendBot(SHARED_LABELS.adresse)
        return
      }

      if (state.phase === 'shared_adresse') {
        var na2 = Object.assign({}, state.answers, { adresse: text })
        appendUser(text)
        state.answers = na2
        state.phase = 'shared_visa'
        appendBot(SHARED_LABELS.visa)
        return
      }

      if (state.phase === 'shared_visa') {
        var na3 = Object.assign({}, state.answers, { visa: text })
        appendUser(text)
        state.answers = na3
        state.phase = 'person_fields'
        state.currentPersonIndex = 0
        state.currentPersonField = 'nom'
        appendBot(questionForPerson(state.nbPersonnes, 0, 'nom'))
        return
      }

      if (state.phase === 'person_fields') {
        var key = personKeys(state.currentPersonIndex, state.currentPersonField)
        var na4 = Object.assign({}, state.answers)
        na4[key] = text
        appendUser(text)
        advancePersonField(na4)
      }
    }

    function renderAll() {
      root.innerHTML = ''
      if (state.minimized) {
        var launch = document.createElement('button')
        launch.type = 'button'
        launch.className = 'chatbot-launcher'
        launch.setAttribute('aria-expanded', 'false')
        launch.setAttribute('aria-label', 'Ouvrir l’assistant assurance')
        launch.innerHTML = '<span aria-hidden="true">💬</span> Assistant assurance'
        launch.addEventListener('click', function () {
          setMinimized(false)
        })
        root.appendChild(launch)
        return
      }

      var panel = document.createElement('div')
      panel.className = 'chatbot-panel'

      var header = document.createElement('div')
      header.className = 'chatbot-panel-header'
      var title = document.createElement('strong')
      title.textContent = 'Assistant Assurance'
      var minBtn = document.createElement('button')
      minBtn.type = 'button'
      minBtn.className = 'chatbot-minimize'
      minBtn.setAttribute('aria-label', 'Réduire le chat')
      minBtn.title = 'Réduire'
      minBtn.textContent = '−'
      minBtn.addEventListener('click', function () {
        setMinimized(true)
      })
      header.appendChild(title)
      header.appendChild(minBtn)
      panel.appendChild(header)

      var msgWrap = document.createElement('div')
      msgWrap.className = 'chatbot-messages'
      renderMessages(msgWrap)
      panel.appendChild(msgWrap)
      setTimeout(function () {
        scrollMessages(msgWrap)
      }, 0)

      if (!state.isStarted) {
        var foot = document.createElement('div')
        foot.className = 'chatbot-footer'
        var startBtn = document.createElement('button')
        startBtn.type = 'button'
        startBtn.className = 'chatbot-btn-primary'
        startBtn.textContent = 'Commencer'
        startBtn.addEventListener('click', handleStart)
        foot.appendChild(startBtn)
        panel.appendChild(foot)
      } else if (state.phase === 'choose_household') {
        var foot2 = document.createElement('div')
        foot2.className = 'chatbot-footer chatbot-stack'
        ;[
          ['one', 'Une seule personne'],
          ['two', 'Deux personnes'],
          ['three_plus', 'Trois personnes ou plus'],
        ].forEach(function (item) {
          var b = document.createElement('button')
          b.type = 'button'
          b.className = 'chatbot-btn-choice'
          b.textContent = item[1]
          b.addEventListener('click', function () {
            handleHouseholdChoice(item[0])
          })
          foot2.appendChild(b)
        })
        panel.appendChild(foot2)
      } else if (needsTextInput()) {
        var foot3 = document.createElement('div')
        foot3.className = 'chatbot-footer'
        var form = document.createElement('form')
        form.className = 'chatbot-form'
        var useTextarea =
          state.phase === 'shared_adresse' ||
          (state.phase === 'person_fields' && state.currentPersonField === 'antecedents')
        var inputType =
          state.phase === 'shared_email'
            ? 'email'
            : state.phase === 'person_fields' && state.currentPersonField === 'age'
              ? 'number'
              : 'text'
        var field
        if (useTextarea) {
          field = document.createElement('textarea')
        } else {
          field = document.createElement('input')
          field.type = inputType
        }
        field.placeholder = 'Votre réponse...'
        field.disabled = !!state.isSending
        var submit = document.createElement('button')
        submit.type = 'submit'
        submit.className = 'chatbot-btn-primary'
        submit.textContent = state.isSending ? 'Envoi…' : isLastQuestion() ? 'Envoyer' : 'Suivant'
        submit.disabled = true
        var refreshSubmitState = function () {
          var hasValue = !!String(field.value || '').trim()
          submit.disabled = !!state.isSending || !hasValue
        }
        field.addEventListener('input', refreshSubmitState)
        refreshSubmitState()
        form.addEventListener('submit', function (e) {
          e.preventDefault()
          var v = field.value || ''
          handleSubmit(v)
          field.value = ''
        })
        form.appendChild(field)
        form.appendChild(submit)
        foot3.appendChild(form)
        panel.appendChild(foot3)
        setTimeout(function () {
          try {
            field.focus()
          } catch (e) {}
        }, 50)
      } else if (state.phase === 'done' || state.phase === 'missing_key') {
        var foot4 = document.createElement('div')
        foot4.className = 'chatbot-footer chatbot-stack'
        var min2 = document.createElement('button')
        min2.type = 'button'
        min2.className = 'chatbot-btn-choice'
        min2.style.background = '#1e293b'
        min2.style.color = '#f8fafc'
        min2.textContent = 'Réduire la fenêtre'
        min2.addEventListener('click', function () {
          setMinimized(true)
        })
        var reset = document.createElement('button')
        reset.type = 'button'
        reset.className = 'chatbot-btn-primary'
        reset.textContent = 'Recommencer'
        reset.addEventListener('click', handleReset)
        foot4.appendChild(min2)
        foot4.appendChild(reset)
        panel.appendChild(foot4)
      }

      root.appendChild(panel)
    }

    loadPersisted()
    renderAll()
  }

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.getElementById('ts-assurance-chatbot')
    if (!root) return
    mount(root)
  })
})()
