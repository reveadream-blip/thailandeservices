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
    documentTitle: 'Assurance Santé Phuket (En ligne) & Agence Physique Surin',
    metaDescription:
      'Assurance santé à Phuket en visio et par e-mail (Krungthai AXA). Agence physique à Surin avec Tammy : interprète FR/EN/TH sur place.',
    pageH1:
      'Votre assurance santé en Thaïlande : à distance à Phuket ou en agence à Surin',
    lead:
      'Deux façons de travailler avec nous : le service digital pour Phuket, l’accueil sur place à Surin.',
    breadcrumbCurrent: 'Assurance santé Phuket',
    jsonLdName: 'Assurance santé Phuket (en ligne) et agence Surin',
    bodyHtml: `
<article class="landing-seo-body">
<p>Thailande-services couvre aujourd’hui deux réalités très différentes pour les francophones et anglophones en Thaïlande. À <strong>Phuket</strong>, tout se fait à distance : visioconférence, échanges par e-mail, devis détaillés et souscription via les outils numériques <strong>Krungthai AXA</strong>. À <strong>Surin</strong>, Tammy vous reçoit en agence pour les dossiers qui demandent un interlocuteur physique.</p>

<h2>Phuket : assurance 100 % digital</h2>
<p>Vous habitez Rawai, Chalong, Patong ou vous préparez votre installation sur l’île ? Inutile de vous déplacer jusqu’à Bangkok. Tammy propose des rendez-vous en <strong>visio</strong> (WhatsApp, Google Meet selon votre connexion) pour comparer les garanties hospitalisation, le plafond annuel et les options visa ou famille.</p>
<p>Le devis arrive par <strong>e-mail en français</strong>, avec le détail des franchises et des hôpitaux partenaires. La signature et le paiement passent par le portail AXA : vous gardez vos documents sur votre téléphone. C’est la formule la plus fluide pour les expatriés occupés, les retraités qui voyagent ou les nomades qui changent souvent de quartier.</p>
<ul>
<li>Comparaison des formules iHealthy et hospitalisation</li>
<li>Conseil en français sur les exigences immigration</li>
<li>Suivi des sinistres et relances par e-mail</li>
<li>Pas de déplacement obligatoire sur l’île</li>
</ul>

<h2>Surin : agence physique et interprétariat</h2>
<p>Quand la situation devient concrète (admission à l’hôpital, commissariat, rendez-vous immigration), la présence sur place change tout. L’<a href="${LANDING_SURIN_PATH}">agence de Surin</a> accueille les dossiers complexes : Tammy parle thaï, français et anglais, et peut vous accompagner dans la salle d’attente ou face à un officier.</p>
<p>Beaucoup de clients choisissent Phuket pour souscrire en ligne, puis appellent Surin le jour où ils ont besoin d’un interprète. Les deux antennes partagent le même numéro WhatsApp et la même expertise AXA.</p>

<p><a href="/formulaire-de-contact/">Formulaire de contact</a> · <a href="${LANDING_SURIN_PATH}">Découvrir l’agence Surin</a> · <a href="/interprete-thai-francais-anglais-a-phuket/">Service d’interprète</a></p>
</article>`,
  },
  en: {
    documentTitle: 'Phuket Health Insurance (Online) & Surin Branch Office',
    metaDescription:
      'Remote health insurance in Phuket (video calls, AXA e-mail quotes). Surin branch with Tammy: on-site interpreter FR/EN/TH.',
    pageH1:
      'Your health insurance in Thailand: remote in Phuket or on-site in Surin',
    lead:
      'Two ways to work with us: digital service for Phuket, face-to-face support in Surin.',
    breadcrumbCurrent: 'Phuket health insurance',
    jsonLdName: 'Phuket health insurance (online) and Surin branch',
    bodyHtml: `
<article class="landing-seo-body">
<p>Thailande-services now reflects two distinct needs for French and English speakers in Thailand. In <strong>Phuket</strong>, everything is remote: video calls, e-mail, detailed quotes and subscription through <strong>Krungthai AXA</strong> digital tools. In <strong>Surin</strong>, Tammy welcomes you at the office when a file needs someone in the room.</p>

<h2>Phuket: fully digital insurance</h2>
<p>Living in Rawai, Chalong, Patong or planning your move? No need to drive to Bangkok. Tammy books <strong>video appointments</strong> (WhatsApp or Google Meet) to compare hospital cover, annual limits and family or visa options.</p>
<p>Quotes land in your inbox <strong>in French or English</strong>, with excess and partner hospital details. Signing and payment go through the AXA portal. Ideal for busy expats, retirees who travel or anyone who wants paperwork without office visits.</p>
<ul>
<li>Compare iHealthy and inpatient plans</li>
<li>French advice on immigration requirements</li>
<li>Claims follow-up by e-mail</li>
<li>No mandatory trip across the island</li>
</ul>

<h2>Surin: branch office and interpreting</h2>
<p>When things get real (hospital admission, police station, immigration appointment), on-site support matters. The <a href="/en/agence-surin/">Surin branch</a> handles complex cases: Tammy speaks Thai, French and English and can join you in the waiting room or at the counter.</p>
<p>Many clients subscribe online from Phuket, then call Surin the day they need an interpreter. Both offices share the same WhatsApp line and AXA expertise.</p>

<p><a href="/en/contact/">Contact form</a> · <a href="/en/agence-surin/">Surin branch</a> · <a href="/en/interprete-thai-francais-anglais-a-phuket/">Interpreter service</a></p>
</article>`,
  },
  th: {
    documentTitle: 'ประกันสุขภาพภูเก็ต (ออนไลน์) & สาขาสุรินทร์',
    metaDescription:
      'ประกันสุขภาพภูเก็ตผ่านวิดีโอคอลและอีเมล (Krungthai AXA) สาขาสุรินทร์ แทมมี่ล่ามและให้คำปรึกษาหน้างาน FR/EN/TH',
    pageH1:
      'ประกันสุขภาพในไทย: ทำงานระยะไกลที่ภูเก็ต หรือมาที่สาขาสุรินทร์',
    lead:
      'สองช่องทาง: บริการดิจิทัลสำหรับภูเก็ต และรับบริการหน้างานที่สุรินทร์',
    breadcrumbCurrent: 'ประกันสุขภาพภูเก็ต',
    jsonLdName: 'ประกันสุขภาพภูเก็ตออนไลน์และสาขาสุรินทร์',
    bodyHtml: `
<article class="landing-seo-body">
<p>Thailande-services แยกบริการตามพื้นที่: <strong>ภูเก็ต</strong> ทำงานระยะไกล วิดีโอคอล อีเมล ใบเสนอราคา และสมัครผ่านระบบดิจิทัล <strong>Krungthai AXA</strong> ที่ <strong>สุรินทร์</strong> แทมมี่รับที่สาขาเมื่อต้องการผู้ช่วยหน้างาน</p>

<h2>ภูเก็ต: ประกันแบบดิจิทัลเต็มรูปแบบ</h2>
<p>อยู่ราไวย์ ฉลอง ป่าตอง หรือกำลังย้ายมา? นัด <strong>วิดีโอคอล</strong> เปรียบเทียบความคุ้มครองโรงพยาบาล วงเงิน และแผนครอบครัว/วีซ่า</p>
<p>ใบเสนอราคาทางอีเมล อธิบายภาษาฝรั่งเศสหรืออังกฤษ ลงนามและชำระผ่านพอร์ทัล AXA เหมาะกับชาวต่างชาติที่ไม่สะดวกเดินทาง</p>
<ul>
<li>เปรียบเทียบแผน iHealthy และการนอนโรงพยาบาล</li>
<li>คำแนะนำเรื่องตรวจคนเข้าเมือง</li>
<li>ติดตามเคลมทางอีเมล</li>
<li>ไม่บังคับมาที่สำนักงาน</li>
</ul>

<h2>สุรินทร์: สาขาและล่าม</h2>
<p>เรื่องโรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง การมีคนที่พูดไทย ฝรั่งเศส อังกฤษสำคัญ <a href="/th/agence-surin/">สาขาสุรินทร์</a> รับเคสที่ต้องไปด้วย</p>
<p>ลูกค้าหลายคนสมัครออนไลน์จากภูเก็ต แล้วติดต่อสุรินทร์เมื่อต้องการล่าม ใช้วอทส์แอปเบอร์เดียวกัน</p>

<p><a href="/th/contact/">แบบฟอร์มติดต่อ</a> · <a href="/th/agence-surin/">สาขาสุรินทร์</a> · <a href="/th/interprete-thai-francais-anglais-a-phuket/">บริการล่าม</a></p>
</article>`,
  },
}

const surin: LandingCopy = {
  fr: {
    documentTitle: 'Agence Surin, assurance et interprète sur place',
    metaDescription:
      'Agence Thailande-services à Surin : Tammy vous accueille pour l’assurance AXA, l’interprétariat FR/EN/TH (hôpital, police, immigration).',
    pageH1: 'Agence Thailande-services à Surin : visas, assurance, interprète',
    lead:
      'Tammy reçoit sur place à Surin. Pour Phuket, le même accompagnement assurance se fait en ligne.',
    breadcrumbCurrent: 'Agence Surin',
    jsonLdName: 'Agence Thailande-services Surin',
    bodyHtml: `
<article class="landing-seo-body">
<p>L’antenne <strong>Surin</strong> est l’adresse physique de Thailande-services pour tout ce qui ne se règle pas derrière un écran : hospitalisation, dépôt de plainte, rendez-vous à l’immigration, lecture d’un contrat en thaï. Tammy est agent <strong>Krungthai AXA</strong> et interprète trilingue (français, anglais, thaï).</p>

<h2>Surin : accueil direct et interprétariat</h2>
<p>À l’agence, on prend le temps de comprendre votre dossier avant d’aller quelque part. Tammy a vécu sept ans en France : elle sait où les malentendus culturels bloquent une admission ou un visa. Elle peut se déplacer avec vous à l’hôpital de Surin ou dans la région, ou organiser un passage à Phuket si vous y résidez encore.</p>
<ul>
<li>Interprète hôpital, police, accident de la route</li>
<li>Aide visa, immigration, formulaires administratifs</li>
<li>Conseil assurance santé et souscription AXA</li>
<li>Rendez-vous sur place ou déplacement planifié</li>
</ul>
<p>Le premier contact se fait par WhatsApp ou le <a href="/formulaire-de-contact/">formulaire</a>. On fixe ensuite un créneau à l’agence ou sur le lieu de la démarche.</p>

<h2>Phuket : même expertise, 100 % digital</h2>
<p>Vous êtes installé à Phuket et votre besoin se limite à une assurance ou un devis ? Utilisez l’antenne <a href="${LANDING_PHUKET_PATH}">Phuket en ligne</a> : visio, e-mail, portail AXA. Pas de trajet jusqu’à Surin sauf si vous préférez un rendez-vous physique.</p>
<p>Les deux antennes partagent le même standard de conseil. La différence, c’est le canal : écran ou bureau.</p>

<p><a href="/formulaire-de-contact/">Nous écrire</a> · <a href="${LANDING_PHUKET_PATH}">Assurance Phuket en ligne</a> · <a href="/interprete-thai-francais-anglais-a-phuket/">Fiche interprète</a></p>
</article>`,
  },
  en: {
    documentTitle: 'Surin Branch Office, Insurance & On-site Interpreter',
    metaDescription:
      'Thailande-services Surin office: Tammy for AXA insurance, FR/EN/TH interpreting (hospital, police, immigration).',
    pageH1: 'Thailande-services Surin office: visas, insurance, interpreter',
    lead:
      'Tammy meets clients in Surin. For Phuket, the same insurance advice is available online.',
    breadcrumbCurrent: 'Surin branch',
    jsonLdName: 'Thailande-services Surin branch office',
    bodyHtml: `
<article class="landing-seo-body">
<p>The <strong>Surin</strong> branch is where Thailande-services handles what screens cannot fix: hospital admissions, police reports, immigration appointments, Thai contracts read aloud. Tammy is a <strong>Krungthai AXA</strong> agent and trilingual interpreter (French, English, Thai).</p>

<h2>Surin: face-to-face support</h2>
<p>At the office we review your file before going anywhere. Tammy spent seven years in France and knows where cultural gaps stall a medical or visa case. She can accompany you to local hospitals or arrange a trip to Phuket when needed.</p>
<ul>
<li>Hospital, police and road accident interpreting</li>
<li>Visa, immigration and admin forms</li>
<li>Health insurance advice and AXA subscription</li>
<li>Office appointments or planned site visits</li>
</ul>
<p>First contact via WhatsApp or the <a href="/en/contact/">contact form</a>, then we book a slot at the office or on location.</p>

<h2>Phuket: same expertise, fully online</h2>
<p>Based in Phuket and only need insurance or a quote? Use the <a href="/en/assurance-sante-phuket/">online Phuket desk</a>: video, e-mail, AXA portal. No drive to Surin unless you want an in-person meeting.</p>
<p>Both offices share the same advice standard. The channel differs: screen or desk.</p>

<p><a href="/en/contact/">Contact us</a> · <a href="/en/assurance-sante-phuket/">Phuket online insurance</a> · <a href="/en/interprete-thai-francais-anglais-a-phuket/">Interpreter page</a></p>
</article>`,
  },
  th: {
    documentTitle: 'สาขาสุรินทร์ ประกันและล่ามหน้างาน',
    metaDescription:
      'สาขา Thailande-services สุรินทร์ แทมมี่ ตัวแทน AXA ล่าม FR/EN/TH โรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง',
    pageH1: 'สาขา Thailande-services สุรินทร์: วีซ่า ประกัน ล่าม',
    lead:
      'แทมมี่รับลูกค้าที่สุรินทร์ สำหรับภูเก็ต ให้คำปรึกษาประกันออนไลน์ได้เช่นกัน',
    breadcrumbCurrent: 'สาขาสุรินทร์',
    jsonLdName: 'สาขา Thailande-services สุรินทร์',
    bodyHtml: `
<article class="landing-seo-body">
<p>สาขา <strong>สุรินทร์</strong> คือจุดบริการหน้างานของ Thailande-services: โรงพยาบาล แจ้งความ ตรวจคนเข้าเมือง อ่านสัญญาภาษาไทย แทมมี่เป็นตัวแทน <strong>Krungthai AXA</strong> และล่ามสามภาษา</p>

<h2>สุรินทร์: รับตัวและล่าม</h2>
<p>ที่สาขาจะทำความเข้าใจเคสก่อนออกไปไหน แทมมี่อยู่ฝรั่งเศสเจ็ดปี รู้จุดที่วัฒนธรรมต่างกันทำให้งานค้าง</p>
<ul>
<li>ล่ามโรงพยาบาล ตำรวจ อุบัติเหตุ</li>
<li>ช่วยวีซ่า ตรวจคนเข้าเมือง เอกสารราชการ</li>
<li>คำปรึกษาประกันสุขภาพ AXA</li>
<li>นัดที่สาขาหรือไปพร้อมลูกค้า</li>
</ul>
<p>ติดต่อครั้งแรกทางวอทส์แอปหรือ <a href="/th/contact/">แบบฟอร์ม</a></p>

<h2>ภูเก็ต: ความเชี่ยวชาญเดียวกัน ออนไลน์เต็มรูปแบบ</h2>
<p>อยู่ภูเก็ตและต้องการแค่ประกันหรือใบเสนอราคา? ใช้ <a href="/th/assurance-sante-phuket/">ช่องทางออนไลน์ภูเก็ต</a> วิดีโอ อีเมล พอร์ทัล AXA</p>

<p><a href="/th/contact/">ติดต่อเรา</a> · <a href="/th/assurance-sante-phuket/">ประกันภูเก็ตออนไลน์</a> · <a href="/th/interprete-thai-francais-anglais-a-phuket/">หน้าล่าม</a></p>
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
