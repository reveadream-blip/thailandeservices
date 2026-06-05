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
      'Souscrivez une assurance santé à distance avec Tammy depuis partout en Thaïlande (visio, e-mail Krungthai AXA). Agence physique à Surin : interprète FR/EN/TH sur place.',
    pageH1:
      'Votre assurance santé en Thaïlande : à distance avec Tammy ou en agence à Surin',
    lead:
      'Où que vous soyez en Thaïlande, Tammy accompagne la souscription à distance (visio, e-mail). L’agence Surin accueille sur place quand il faut un interlocuteur physique.',
    breadcrumbCurrent: 'Assurance santé Phuket',
    jsonLdName: 'Assurance santé Phuket (en ligne) et agence Surin',
    bodyHtml: `
<article class="landing-seo-body">
<p>Thailande-services couvre deux façons de travailler pour les francophones et anglophones en Thaïlande. Vous pouvez <strong>souscrire une assurance à distance avec Tammy depuis n’importe où dans le pays</strong> : Bangkok, Chiang Mai, Pattaya, Phuket, Hua Hin ou ailleurs. Visioconférence, échanges par e-mail, devis détaillés et souscription via les outils numériques <strong>Krungthai AXA</strong>. À <strong>Surin</strong>, Tammy vous reçoit en agence pour les dossiers qui demandent un interlocuteur physique.</p>

<h2>Assurance à distance, partout en Thaïlande</h2>
<p>Vous habitez Rawai, Silom, Nimman ou vous préparez votre installation ? Inutile de venir à Surin pour souscrire. Tammy propose des rendez-vous en <strong>visio</strong> (WhatsApp, Google Meet selon votre connexion) pour comparer les garanties hospitalisation, le plafond annuel et les options visa ou famille.</p>
<p>Le devis arrive par <strong>e-mail en français</strong>, avec le détail des franchises et des hôpitaux partenaires. La signature et le paiement passent par le portail AXA : vous gardez vos documents sur votre téléphone. C’est la formule la plus fluide pour les expatriés occupés, les retraités qui voyagent ou les nomades qui changent souvent de quartier.</p>
<ul>
<li>Comparaison des formules iHealthy et hospitalisation</li>
<li>Conseil en français sur les exigences immigration</li>
<li>Suivi des sinistres et relances par e-mail</li>
<li>Pas de déplacement obligatoire sur l’île</li>
</ul>

<h2>Surin : agence physique et interprétariat</h2>
<p>Quand la situation devient concrète (admission à l’hôpital, commissariat, rendez-vous immigration), la présence sur place change tout. L’<a href="${LANDING_SURIN_PATH}">agence de Surin</a> accueille les dossiers complexes : Tammy parle thaï, français et anglais, et peut vous accompagner dans la salle d’attente ou face à un officier.</p>
<p>Beaucoup de clients souscrivent à distance depuis leur ville, puis appellent Surin le jour où ils ont besoin d’un interprète. Les deux antennes partagent le même numéro WhatsApp et la même expertise AXA.</p>

<p><a href="/formulaire-de-contact/">Formulaire de contact</a> · <a href="${LANDING_SURIN_PATH}">Découvrir l’agence Surin</a> · <a href="/interprete-thai-francais-anglais-a-phuket/">Service d’interprète</a></p>
</article>`,
  },
  en: {
    documentTitle: 'Phuket Health Insurance (Online) & Surin Branch Office',
    metaDescription:
      'Subscribe to health insurance remotely with Tammy from anywhere in Thailand (video calls, AXA e-mail). Surin branch: on-site interpreter FR/EN/TH.',
    pageH1:
      'Your health insurance in Thailand: remote with Tammy or on-site in Surin',
    lead:
      'Wherever you are in Thailand, Tammy handles remote subscription (video, e-mail). The Surin office welcomes you when a face-to-face contact is needed.',
    breadcrumbCurrent: 'Phuket health insurance',
    jsonLdName: 'Phuket health insurance (online) and Surin branch',
    bodyHtml: `
<article class="landing-seo-body">
<p>Thailande-services offers two ways to work for French and English speakers in Thailand. You can <strong>subscribe to health insurance remotely with Tammy from anywhere in the country</strong>: Bangkok, Chiang Mai, Pattaya, Phuket, Hua Hin and beyond. Video calls, e-mail, detailed quotes and subscription through <strong>Krungthai AXA</strong> digital tools. In <strong>Surin</strong>, Tammy welcomes you at the office when a file needs someone in the room.</p>

<h2>Remote insurance, anywhere in Thailand</h2>
<p>Living in Rawai, Silom, Nimman or planning your move? No need to travel to Surin to subscribe. Tammy books <strong>video appointments</strong> (WhatsApp or Google Meet) to compare hospital cover, annual limits and family or visa options.</p>
<p>Quotes land in your inbox <strong>in French or English</strong>, with excess and partner hospital details. Signing and payment go through the AXA portal. Ideal for busy expats, retirees who travel or anyone who wants paperwork without office visits.</p>
<ul>
<li>Compare iHealthy and inpatient plans</li>
<li>French advice on immigration requirements</li>
<li>Claims follow-up by e-mail</li>
<li>No mandatory trip across the island</li>
</ul>

<h2>Surin: branch office and interpreting</h2>
<p>When things get real (hospital admission, police station, immigration appointment), on-site support matters. The <a href="/en/agence-surin/">Surin branch</a> handles complex cases: Tammy speaks Thai, French and English and can join you in the waiting room or at the counter.</p>
<p>Many clients subscribe remotely from their city, then call Surin the day they need an interpreter. Both offices share the same WhatsApp line and AXA expertise.</p>

<p><a href="/en/contact/">Contact form</a> · <a href="/en/agence-surin/">Surin branch</a> · <a href="/en/interprete-thai-francais-anglais-a-phuket/">Interpreter service</a></p>
</article>`,
  },
  th: {
    documentTitle: 'ประกันสุขภาพภูเก็ต (ออนไลน์) & สาขาสุรินทร์',
    metaDescription:
      'สมัครประกันสุขภาพระยะไกลกับแทมมี่ได้จากทุกที่ในไทย (วิดีโอคอล อีเมล Krungthai AXA) สาขาสุรินทร์ ล่ามและให้คำปรึกษาหน้างาน FR/EN/TH',
    pageH1:
      'ประกันสุขภาพในไทย: ทำงานระยะไกลกับแทมมี่ หรือมาที่สาขาสุรินทร์',
    lead:
      'ไม่ว่าคุณอยู่ที่ไหนในไทย แทมมี่ช่วยสมัครประกันระยะไกล (วิดีโอ อีเมล) สาขาสุรินทร์รับหน้างานเมื่อต้องการผู้ช่วยตัวจริง',
    breadcrumbCurrent: 'ประกันสุขภาพภูเก็ต',
    jsonLdName: 'ประกันสุขภาพภูเก็ตออนไลน์และสาขาสุรินทร์',
    bodyHtml: `
<article class="landing-seo-body">
<p>Thailande-services มีสองช่องทางสำหรับผู้พูดภาษาฝรั่งเศสและอังกฤษในไทย <strong>สมัครประกันสุขภาพระยะไกลกับแทมมี่ได้จากทุกที่ในประเทศ</strong> กรุงเทพ เชียงใหม่ พัทยา ภูเก็ต หัวหิน ฯลฯ วิดีโอคอล อีเมล ใบเสนอราคา และสมัครผ่านระบบดิจิทัล <strong>Krungthai AXA</strong> ที่ <strong>สุรินทร์</strong> แทมมี่รับที่สาขาเมื่อต้องการผู้ช่วยหน้างาน</p>

<h2>ประกันระยะไกล ทุกที่ในไทย</h2>
<p>อยู่ราไวย์ สีลม นิมมาน หรือกำลังย้ายมา? ไม่ต้องเดินทางมาสุรินทร์เพื่อสมัคร นัด <strong>วิดีโอคอล</strong> เปรียบเทียบความคุ้มครองโรงพยาบาล วงเงิน และแผนครอบครัว/วีซ่า</p>
<p>ใบเสนอราคาทางอีเมล อธิบายภาษาฝรั่งเศสหรืออังกฤษ ลงนามและชำระผ่านพอร์ทัล AXA เหมาะกับชาวต่างชาติที่ไม่สะดวกเดินทาง</p>
<ul>
<li>เปรียบเทียบแผน iHealthy และการนอนโรงพยาบาล</li>
<li>คำแนะนำเรื่องตรวจคนเข้าเมือง</li>
<li>ติดตามเคลมทางอีเมล</li>
<li>ไม่บังคับมาที่สำนักงาน</li>
</ul>

<h2>สุรินทร์: สาขาและล่าม</h2>
<p>เรื่องโรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง การมีคนที่พูดไทย ฝรั่งเศส อังกฤษสำคัญ <a href="/th/agence-surin/">สาขาสุรินทร์</a> รับเคสที่ต้องไปด้วย</p>
<p>ลูกค้าหลายคนสมัครระยะไกลจากเมืองที่อยู่ แล้วติดต่อสุรินทร์เมื่อต้องการล่าม ใช้วอทส์แอปเบอร์เดียวกัน</p>

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
      'Tammy reçoit sur place à Surin. L’assurance se souscrit aussi à distance, depuis n’importe où en Thaïlande.',
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

<h2>Assurance à distance, partout en Thaïlande</h2>
<p>Votre besoin se limite à une assurance ou un devis ? Vous pouvez souscrire à distance avec Tammy depuis n’importe où en Thaïlande via l’antenne <a href="${LANDING_PHUKET_PATH}">en ligne</a> : visio, e-mail, portail AXA. Pas de trajet jusqu’à Surin sauf si vous préférez un rendez-vous physique.</p>
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
      'Tammy meets clients in Surin. Health insurance can also be subscribed remotely from anywhere in Thailand.',
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

<h2>Remote insurance, anywhere in Thailand</h2>
<p>Only need insurance or a quote? Subscribe remotely with Tammy from anywhere in Thailand via the <a href="/en/assurance-sante-phuket/">online desk</a>: video, e-mail, AXA portal. No trip to Surin unless you want an in-person meeting.</p>
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
      'แทมมี่รับลูกค้าที่สุรินทร์ สมัครประกันสุขภาพระยะไกลได้จากทุกที่ในไทย',
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

<h2>ประกันระยะไกล ทุกที่ในไทย</h2>
<p>ต้องการแค่ประกันหรือใบเสนอราคา? สมัครระยะไกลกับแทมมี่ได้จากทุกที่ในไทยผ่าน <a href="/th/assurance-sante-phuket/">ช่องทางออนไลน์</a> วิดีโอ อีเมล พอร์ทัล AXA</p>

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
