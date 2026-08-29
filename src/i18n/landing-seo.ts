import type { Lang } from './translations'
import { LANDING_PHUKET_PATH, LANDING_SURIN_PATH } from '../lib/landing-paths'

export type LandingVariant = 'phuket' | 'surin'

export type LandingSeoFields = {
  documentTitle: string
  metaDescription: string
  pageH1: string
  lead: string
  breadcrumbCurrent: string
  bodyHtml: string
  jsonLdName: string
}

type LandingCopy = Record<Lang, LandingSeoFields>

const phuket: LandingCopy = {
  fr: {
    documentTitle: 'Assurance santé Phuket Thaïlande | Souscription en ligne & agence Surin',
    metaDescription:
      'Assurance santé Thaïlande pour expatriés : Bangkok, Chiang Mai, Phuket, Pattaya, Hua Hin, Koh Samui. Hospitalisation, devis en français. Surin sur place, ailleurs en visio avec Tammy (AXA).',
    pageH1: 'Assurance santé Phuket Thaïlande',
    lead:
      'Assurance santé Thaïlande : Phuket à distance ou avec une collaboratrice, Surin sur place, Bangkok et Chiang Mai en visio pour comparer hospitalisation et plafonds AXA.',
    breadcrumbCurrent: 'Assurance santé Phuket Thaïlande',
    jsonLdName: 'Assurance santé Phuket Thaïlande et agence Surin',
    bodyHtml: `
<article class="landing-seo-body">
<p>Vous nous connaissiez à <strong>Phuket</strong> ? Cette page <strong>assurance santé Phuket Thaïlande</strong> reste votre point d’entrée : même interlocutrice, même ligne WhatsApp. À <strong>Phuket</strong>, Tammy vous accompagne <strong>à distance ou avec une collaboratrice locale</strong> selon le dossier. À <strong>Surin</strong>, <strong>tous les services</strong> (assurance, interprète, visas, admin) se font <strong>sur place</strong>. Ailleurs en Thaïlande (<strong>Bangkok</strong>, <strong>Chiang Mai</strong>, <strong>Pattaya</strong>, <strong>Hua Hin</strong>, <strong>Koh Samui</strong>) : téléphone, WhatsApp et visio, avec souscription via les outils <strong>Krungthai AXA</strong>.</p>

<h2>Phuket : à distance ou avec une collaboratrice</h2>
<p>Sur l’île, pas besoin de venir à Surin pour souscrire. Tammy propose des rendez-vous en <strong>visio</strong> (WhatsApp, Google Meet) ou fait intervenir une <strong>collaboratrice locale</strong> quand la situation le demande. Comparaison des garanties hospitalisation, plafonds annuels et options visa ou famille.</p>
<p>Le devis arrive par <strong>e-mail en français</strong>, avec le détail des franchises et des hôpitaux partenaires. La signature et le paiement passent par le portail AXA : vous gardez vos documents sur votre téléphone. C’est la formule la plus fluide pour les expatriés occupés, les retraités qui voyagent ou les nomades qui changent souvent de quartier.</p>
<ul>
<li>Comparaison des formules iHealthy et hospitalisation</li>
<li>Conseil en français sur les exigences immigration</li>
<li>Suivi des sinistres et relances par e-mail</li>
<li>Pas de déplacement obligatoire sur l’île</li>
</ul>

<h2>Surin : tous les services sur place</h2>
<p>Quand la situation devient concrète (admission à l’hôpital, commissariat, rendez-vous immigration), la présence sur place change tout. L’<a href="${LANDING_SURIN_PATH}">agence de Surin</a> accueille tous les dossiers : assurance, interprète, visas et admin. Tammy parle thaï, français et anglais.</p>
<p>Beaucoup de clients à Bangkok, Chiang Mai, Pattaya ou sur Koh Samui souscrivent à distance, puis passent par Surin le jour où ils ont besoin d’un interprète sur place.</p>

<h2>Assurance santé Bangkok, Chiang Mai, Pattaya, Hua Hin…</h2>
<p>Vous cherchez une <strong>assurance santé en Thaïlande</strong> depuis Bangkok, Chiang Mai, Pattaya, Hua Hin ou Koh Samui ? Même WhatsApp, même interlocutrice. On compare souvent les garanties en visio depuis Silom, Nimman ou une villa à Hua Hin : hospitalisation, ambulatoire, plafonds visa. Pas besoin de voler jusqu’à Surin pour souscrire.</p>

<p><a href="#devis-assurance">Devis assurance santé</a> · <a href="${LANDING_SURIN_PATH}">Découvrir l’agence Surin</a> · <a href="/interprete-thai-francais-anglais-a-phuket/">Interprète thaï français anglais en Thaïlande</a></p>
</article>`,
  },
  en: {
    documentTitle: 'Phuket Thailand Health Insurance | Online & Surin Office',
    metaDescription:
      'Thailand health insurance for expats: Bangkok, Chiang Mai, Phuket, Pattaya, Hua Hin, Koh Samui. Hospital cover, quotes in French. Surin on site, elsewhere by video with Tammy (AXA).',
    pageH1: 'Phuket Thailand health insurance',
    lead:
      'Thailand health insurance: Phuket remotely or with a collaborator, Surin on site, Bangkok and Chiang Mai by video to compare hospital cover and AXA limits.',
    breadcrumbCurrent: 'Phuket Thailand health insurance',
    jsonLdName: 'Phuket Thailand health insurance and Surin branch',
    bodyHtml: `
<article class="landing-seo-body">
<p>Used to work with us in <strong>Phuket</strong>? This <strong>Phuket Thailand health insurance</strong> page is still your entry point: same contact, same WhatsApp. In <strong>Phuket</strong>, Tammy supports you <strong>remotely or with a local collaborator</strong> depending on the case. In <strong>Surin</strong>, <strong>all services</strong> (insurance, interpreter, visas, admin) are <strong>on site</strong>. Elsewhere in Thailand (<strong>Bangkok</strong>, <strong>Chiang Mai</strong>, <strong>Pattaya</strong>, <strong>Hua Hin</strong>, <strong>Koh Samui</strong>): phone, WhatsApp and video, with subscription through <strong>Krungthai AXA</strong> tools.</p>

<h2>Phuket: remote or with a collaborator</h2>
<p>On the island, no need to travel to Surin to subscribe. Tammy books <strong>video appointments</strong> (WhatsApp or Google Meet) or brings in a <strong>local collaborator</strong> when needed. Compare hospital cover, annual limits and family or visa options.</p>
<p>Quotes land in your inbox <strong>in French or English</strong>, with excess and partner hospital details. Signing and payment go through the AXA portal. Ideal for busy expats, retirees who travel or anyone who wants paperwork without office visits.</p>
<ul>
<li>Compare iHealthy and inpatient plans</li>
<li>French advice on immigration requirements</li>
<li>Claims follow-up by e-mail</li>
<li>No mandatory trip across the island</li>
</ul>

<h2>Surin: all services on site</h2>
<p>When things get real (hospital admission, police station, immigration appointment), on-site support matters. The <a href="/en/agence-surin/">Surin branch</a> handles everything: insurance, interpreting, visas and admin. Tammy speaks Thai, French and English.</p>
<p>Many clients in Bangkok, Chiang Mai, Pattaya or on Koh Samui subscribe remotely, then reach out to Surin the day they need an interpreter on site.</p>

<h2>Health insurance in Bangkok, Chiang Mai, Pattaya, Hua Hin…</h2>
<p>Searching for <strong>health insurance in Thailand</strong> from Bangkok, Chiang Mai, Pattaya, Hua Hin or Koh Samui? Same WhatsApp, same contact. We often compare cover by video from Silom, Nimman or a house in Hua Hin: inpatient, outpatient, visa limits. No need to fly to Surin to subscribe.</p>

<p><a href="#devis-assurance">Insurance quote</a> · <a href="/en/agence-surin/">Surin branch</a> · <a href="/en/interprete-thai-francais-anglais-a-phuket/">Thai French English interpreter in Thailand</a></p>
</article>`,
  },
  th: {
    documentTitle: 'ประกันสุขภาพภูเก็ตไทย | ออนไลน์ & สาขาสุรินทร์',
    metaDescription:
      'ประกันสุขภาพภูเก็ตไทย: สำหรับลูกค้าเก่าภูเก็ตและทุกที่ในไทย สมัครระยะไกล (วิดีโอ อีเมล AXA) หรือประกันสุขภาพสุรินทร์หน้างาน',
    pageH1: 'ประกันสุขภาพภูเก็ตไทย',
    lead:
      'หน้าสำหรับลูกค้าเก่าภูเก็ตและทุกที่ในไทย: สมัครระยะไกล (วิดีโอ อีเมล) หรือมาสาขาสุรินทร์สำหรับประกันสุขภาพสุรินทร์',
    breadcrumbCurrent: 'ประกันสุขภาพภูเก็ตไทย',
    jsonLdName: 'ประกันสุขภาพภูเก็ตไทยและสาขาสุรินทร์',
    bodyHtml: `
<article class="landing-seo-body">
<p>เคยใช้บริการที่<strong>ภูเก็ต</strong>? หน้า<strong>ประกันสุขภาพภูเก็ตไทย</strong>นี้ยังเป็นช่องทางเดิม: แทมมี่คนเดิม วอทส์แอปเดิม วันนี้<strong>สมัครประกันสุขภาพไทยระยะไกลกับแทมมี่ได้จากทุกที่ในประเทศ</strong> กรุงเทพ เชียงใหม่ พัทยา หัวหิน ฯลฯ วิดีโอคอล อีเมล ใบเสนอราคา และสมัครผ่านระบบดิจิทัล <strong>Krungthai AXA</strong> ที่ <strong>สุรินทร์</strong> แทมมี่รับที่สาขาเมื่อต้องการผู้ช่วยหน้างาน</p>

<h2>ประกันสุขภาพไทยระยะไกล</h2>
<p>อยู่ราไวย์ สีลม นิมมาน หรือกำลังย้ายมา? ไม่ต้องเดินทางมาสุรินทร์เพื่อสมัคร <strong>ประกันสุขภาพไทย</strong> นัด <strong>วิดีโอคอล</strong> เปรียบเทียบความคุ้มครองโรงพยาบาล วงเงิน และแผนครอบครัว/วีซ่า</p>
<p>ใบเสนอราคาทางอีเมล อธิบายภาษาฝรั่งเศสหรืออังกฤษ ลงนามและชำระผ่านพอร์ทัล AXA เหมาะกับชาวต่างชาติที่ไม่สะดวกเดินทาง</p>
<ul>
<li>เปรียบเทียบแผน iHealthy และการนอนโรงพยาบาล</li>
<li>คำแนะนำเรื่องตรวจคนเข้าเมือง</li>
<li>ติดตามเคลมทางอีเมล</li>
<li>ไม่บังคับมาที่สำนักงาน</li>
</ul>

<h2>สุรินทร์: สาขาและล่าม</h2>
<p>เรื่องโรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง การมีคนที่พูดไทย ฝรั่งเศส อังกฤษสำคัญ <a href="/th/agence-surin/">สาขาสุรินทร์</a> รับเคสที่ต้องไปด้วย</p>
<p>ลูกค้าหลายคนสมัครระยะไกลจากเมืองที่อยู่ แล้วติดต่อสุรินทร์เมื่อต้องการล่ามไทย ฝรั่งเศส อังกฤษในไทย ใช้วอทส์แอปเบอร์เดียวกัน</p>

<p><a href="#devis-assurance">ใบเสนอราคาประกัน</a> · <a href="/th/agence-surin/">สาขาสุรินทร์</a> · <a href="/th/interprete-thai-francais-anglais-a-phuket/">ล่ามไทย ฝรั่งเศส อังกฤษในไทย</a></p>
</article>`,
  },
}

const surin: LandingCopy = {
  fr: {
    documentTitle: 'Agence Surin, assurance santé Surin et interprète thaï français anglais Surin',
    metaDescription:
      'Agence Surin : assurance santé Thaïlande sur place (AXA). Expatriés Bangkok, Chiang Mai, Phuket, Pattaya : devis hospitalisation en visio avec Tammy.',
    pageH1: 'Agence Thailande-services à Surin : visas, assurance santé Surin, interprète thaï français anglais Surin en Thaïlande',
    lead:
      'Tammy reçoit sur place à Surin pour tous les services (assurance, interprète, visas, admin). À Phuket, à distance ou avec une collaboratrice. Partout en Thaïlande, au téléphone et en visio.',
    breadcrumbCurrent: 'Agence Surin',
    jsonLdName: 'Agence Thailande-services Surin',
    bodyHtml: `
<article class="landing-seo-body">
<p>L’antenne <strong>Surin</strong> est l’adresse physique de Thailande-services : <strong>tous les services sur place</strong>, assurance, interprète, visas, admin. Hospitalisation, dépôt de plainte, rendez-vous immigration, lecture d’un contrat en thaï. Tammy est agent <strong>Krungthai AXA</strong> et <strong>interprète thaï français anglais Surin en Thaïlande</strong>.</p>

<h2>Surin : tous les services sur place</h2>
<p>À l’agence, on prend le temps de comprendre votre dossier avant d’aller quelque part. Tammy a vécu sept ans en France : elle sait où les malentendus culturels bloquent une admission ou un visa. Elle peut se déplacer avec vous à l’hôpital de Surin ou dans la région.</p>
<ul>
<li>Interprète thaï français anglais Surin en Thaïlande : hôpital, police, accident</li>
<li>Aide visa, immigration, formulaires administratifs</li>
<li>Assurance santé Surin : conseil et souscription AXA</li>
<li>Rendez-vous sur place ou déplacement planifié</li>
</ul>
<p>Le premier contact se fait par WhatsApp ou le <a href="/formulaire-de-contact/">formulaire</a>. On fixe ensuite un créneau à l’agence ou sur le lieu de la démarche.</p>

<h2>Assurance santé Thaïlande depuis Bangkok, Chiang Mai, Pattaya…</h2>
<p>Beaucoup de clients souscrivent leur <strong>assurance santé en Thaïlande</strong> à distance depuis Bangkok, Chiang Mai, Pattaya, Hua Hin ou Koh Samui, puis passent par Surin le jour où il faut un interprète à l’hôpital. Même ligne WhatsApp : visio pour le devis, présence sur place quand ça compte.</p>

<p><a href="#devis-assurance">Devis assurance santé</a> · <a href="/formulaire-de-contact/">Nous écrire (autres demandes)</a> · <a href="${LANDING_PHUKET_PATH}">Assurance santé Phuket Thaïlande</a></p>
</article>`,
  },
  en: {
    documentTitle: 'Surin Branch Office, Surin Health Insurance & Thai French English interpreter Surin',
    metaDescription:
      'Thailande-services Surin office: Tammy for Surin health insurance (AXA), FR/EN/TH interpreting (hospital, police, immigration).',
    pageH1: 'Thailande-services Surin office: visas, Surin health insurance, Thai French English interpreter Surin in Thailand',
    lead:
      'Tammy meets clients in Surin for all services (insurance, interpreter, visas, admin). In Phuket, remotely or with a collaborator. All of Thailand, by phone and video.',
    breadcrumbCurrent: 'Surin branch',
    jsonLdName: 'Thailande-services Surin branch office',
    bodyHtml: `
<article class="landing-seo-body">
<p>The <strong>Surin</strong> branch is Thailande-services’ physical address: <strong>all services on site</strong>, insurance, interpreting, visas, admin. Hospital admissions, police reports, immigration appointments, Thai contracts read aloud. Tammy is a <strong>Krungthai AXA</strong> agent and <strong>Thai French English interpreter Surin in Thailand</strong>.</p>

<h2>Surin: all services on site</h2>
<p>At the office we review your file before going anywhere. Tammy spent seven years in France and knows where cultural gaps stall a medical or visa case. She can accompany you to local hospitals or arrange a trip to Phuket when needed.</p>
<ul>
<li>Thai French English interpreter Surin in Thailand: hospital, police, accidents</li>
<li>Visa, immigration and admin forms</li>
<li>Surin health insurance: advice and AXA subscription</li>
<li>Office appointments or planned site visits</li>
</ul>
<p>First contact via WhatsApp or the <a href="/en/contact/">contact form</a>, then we book a slot at the office or on location.</p>

<h2>Phuket and all of Thailand: remote</h2>
<p>In <strong>Phuket</strong>, Tammy works remotely or with a local collaborator. <strong>Everywhere else in Thailand</strong>, same WhatsApp line: phone, video, e-mail, AXA portal. Use the <a href="#devis-assurance">insurance quote</a> or <a href="/en/contact/">contact form</a>.</p>

<p><a href="#devis-assurance">Insurance quote</a> · <a href="/en/contact/">Contact (other requests)</a> · <a href="/en/assurance-sante-phuket/">Phuket Thailand health insurance</a></p>
</article>`,
  },
  th: {
    documentTitle: 'สาขาสุรินทร์ ประกันสุขภาพสุรินทร์และล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์',
    metaDescription:
      'สาขา Thailande-services สุรินทร์ แทมมี่ ตัวแทน AXA ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย โรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง',
    pageH1: 'สาขา Thailande-services สุรินทร์: วีซ่า ประกันสุขภาพสุรินทร์ ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย',
    lead:
      'แทมมี่รับลูกค้าที่สุรินทร์ครบทุกบริการ (ประกัน ล่าม วีซ่า ธุรการ) ที่ภูเก็ต ระยะไกลหรือผู้ร่วมงาน ทั่วไทย โทรและวิดีโอ',
    breadcrumbCurrent: 'สาขาสุรินทร์',
    jsonLdName: 'สาขา Thailande-services สุรินทร์',
    bodyHtml: `
<article class="landing-seo-body">
<p>สาขา <strong>สุรินทร์</strong> คือจุดบริการหน้างานของ Thailande-services: โรงพยาบาล แจ้งความ ตรวจคนเข้าเมือง อ่านสัญญาภาษาไทย แทมมี่เป็นตัวแทน <strong>Krungthai AXA</strong> และ <strong>ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย</strong></p>

<h2>สุรินทร์: ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทยหน้างาน</h2>
<p>ที่สาขาจะทำความเข้าใจเคสก่อนออกไปไหน แทมมี่อยู่ฝรั่งเศสเจ็ดปี รู้จุดที่วัฒนธรรมต่างกันทำให้งานค้าง</p>
<ul>
<li>ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย: โรงพยาบาล ตำรวจ อุบัติเหตุ</li>
<li>ช่วยวีซ่า ตรวจคนเข้าเมือง เอกสารราชการ</li>
<li>ประกันสุขภาพสุรินทร์: คำปรึกษาและสมัคร AXA</li>
<li>นัดที่สาขาหรือไปพร้อมลูกค้า</li>
</ul>
<p>ติดต่อครั้งแรกทางวอทส์แอปหรือ <a href="/th/contact/">แบบฟอร์ม</a></p>

<h2>ประกันสุขภาพไทยระยะไกล</h2>
<p>ต้องการแค่ประกันสุขภาพไทยหรือใบเสนอราคา? ใช้ <a href="#devis-assurance">ใบเสนอราคาประกัน</a> (แชทด้านล่าง) แทมมี่ติดต่อกลับหลังตอบคำถาม</p>
<p>เรื่องล่าม ธุรการ อสังหาฯ ใช้ <a href="/th/contact/">แบบฟอร์มติดต่อ</a></p>

<p><a href="#devis-assurance">ใบเสนอราคาประกัน</a> · <a href="/th/contact/">ติดต่อ (เรื่องอื่น)</a> · <a href="/th/assurance-sante-phuket/">ประกันสุขภาพภูเก็ตไทย</a></p>
</article>`,
  },
}

const BY_VARIANT: Record<LandingVariant, LandingCopy> = { phuket, surin }

export function getLandingSeoFields(
  variant: LandingVariant,
  lang: Lang,
): LandingSeoFields {
  return BY_VARIANT[variant][lang]
}
