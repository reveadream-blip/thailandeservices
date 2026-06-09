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
      'Assurance santé Phuket Thaïlande : anciens clients de l’île et nouveaux expatriés. Souscription à distance (visio, e-mail AXA) ou assurance santé Surin sur place avec Tammy.',
    pageH1: 'Assurance santé Phuket Thaïlande',
    lead:
      'Page dédiée aux anciens clients de Phuket et à toute la Thaïlande : souscription à distance (visio, e-mail) ou accueil à l’agence Surin pour l’assurance santé Surin.',
    breadcrumbCurrent: 'Assurance santé Phuket Thaïlande',
    jsonLdName: 'Assurance santé Phuket Thaïlande et agence Surin',
    bodyHtml: `
<article class="landing-seo-body">
<p>Vous nous connaissiez à <strong>Phuket</strong> ? Cette page <strong>assurance santé Phuket Thaïlande</strong> reste votre point d’entrée : même interlocutrice, même ligne WhatsApp. Aujourd’hui vous pouvez aussi <strong>souscrire une assurance santé Thaïlande à distance avec Tammy depuis n’importe où dans le pays</strong> : Bangkok, Chiang Mai, Pattaya, Hua Hin ou ailleurs. Visioconférence, échanges par e-mail, devis détaillés et souscription via les outils numériques <strong>Krungthai AXA</strong>. À <strong>Surin</strong>, Tammy vous reçoit en agence pour l’<strong>assurance santé Surin</strong> et les dossiers qui demandent un interlocuteur physique.</p>

<h2>Assurance santé Thaïlande à distance</h2>
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
<p>Beaucoup de clients souscrivent à distance depuis leur ville, puis appellent Surin le jour où ils ont besoin d’un interprète thaï français anglais en Thaïlande. Les deux antennes partagent le même numéro WhatsApp et la même expertise AXA.</p>

<p><a href="#devis-assurance">Devis assurance santé</a> · <a href="${LANDING_SURIN_PATH}">Découvrir l’agence Surin</a> · <a href="/interprete-thai-francais-anglais-a-phuket/">Interprète thaï français anglais en Thaïlande</a></p>
</article>`,
  },
  en: {
    documentTitle: 'Phuket Thailand Health Insurance | Online & Surin Office',
    metaDescription:
      'Phuket Thailand health insurance: for former island clients and all of Thailand. Remote subscription (video, AXA e-mail) or Surin health insurance on site with Tammy.',
    pageH1: 'Phuket Thailand health insurance',
    lead:
      'Dedicated page for former Phuket clients and all of Thailand: remote subscription (video, e-mail) or Surin office for on-site Surin health insurance.',
    breadcrumbCurrent: 'Phuket Thailand health insurance',
    jsonLdName: 'Phuket Thailand health insurance and Surin branch',
    bodyHtml: `
<article class="landing-seo-body">
<p>Used to work with us in <strong>Phuket</strong>? This <strong>Phuket Thailand health insurance</strong> page is still your entry point: same contact, same WhatsApp. You can also <strong>subscribe to Thailand health insurance remotely with Tammy from anywhere in the country</strong>: Bangkok, Chiang Mai, Pattaya, Hua Hin and beyond. Video calls, e-mail, detailed quotes and subscription through <strong>Krungthai AXA</strong> digital tools. In <strong>Surin</strong>, Tammy welcomes you at the office when a file needs someone in the room.</p>

<h2>Thailand health insurance remotely</h2>
<p>Living in Rawai, Silom, Nimman or planning your move? No need to travel to Surin to subscribe. Tammy books <strong>video appointments</strong> (WhatsApp or Google Meet) for <strong>Thailand health insurance</strong>: compare hospital cover, annual limits and family or visa options.</p>
<p>Quotes land in your inbox <strong>in French or English</strong>, with excess and partner hospital details. Signing and payment go through the AXA portal. Ideal for busy expats, retirees who travel or anyone who wants paperwork without office visits.</p>
<ul>
<li>Compare iHealthy and inpatient plans</li>
<li>French advice on immigration requirements</li>
<li>Claims follow-up by e-mail</li>
<li>No mandatory trip across the island</li>
</ul>

<h2>Surin: branch office and interpreting</h2>
<p>When things get real (hospital admission, police station, immigration appointment), on-site support matters. The <a href="/en/agence-surin/">Surin branch</a> handles complex cases: Tammy speaks Thai, French and English and can join you in the waiting room or at the counter.</p>
<p>Many clients subscribe remotely from their city, then call Surin the day they need a Thai French English interpreter in Thailand. Both offices share the same WhatsApp line and AXA expertise.</p>

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
      'Agence Thailande-services à Surin : Tammy vous accueille pour l’assurance santé Surin (AXA), l’interprétariat FR/EN/TH (hôpital, police, immigration).',
    pageH1: 'Agence Thailande-services à Surin : visas, assurance santé Surin, interprète thaï français anglais Surin en Thaïlande',
    lead:
      'Tammy reçoit sur place à Surin. L’assurance santé Thaïlande se souscrit aussi à distance, depuis n’importe où dans le pays.',
    breadcrumbCurrent: 'Agence Surin',
    jsonLdName: 'Agence Thailande-services Surin',
    bodyHtml: `
<article class="landing-seo-body">
<p>L’antenne <strong>Surin</strong> est l’adresse physique de Thailande-services pour tout ce qui ne se règle pas derrière un écran : hospitalisation, dépôt de plainte, rendez-vous à l’immigration, lecture d’un contrat en thaï. Tammy est agent <strong>Krungthai AXA</strong> et <strong>interprète thaï français anglais Surin en Thaïlande</strong>.</p>

<h2>Surin : accueil direct et interprète thaï français anglais Surin en Thaïlande</h2>
<p>À l’agence, on prend le temps de comprendre votre dossier avant d’aller quelque part. Tammy a vécu sept ans en France : elle sait où les malentendus culturels bloquent une admission ou un visa. Elle peut se déplacer avec vous à l’hôpital de Surin ou dans la région.</p>
<ul>
<li>Interprète thaï français anglais Surin en Thaïlande : hôpital, police, accident</li>
<li>Aide visa, immigration, formulaires administratifs</li>
<li>Assurance santé Surin : conseil et souscription AXA</li>
<li>Rendez-vous sur place ou déplacement planifié</li>
</ul>
<p>Le premier contact se fait par WhatsApp ou le <a href="/formulaire-de-contact/">formulaire</a>. On fixe ensuite un créneau à l’agence ou sur le lieu de la démarche.</p>

<h2>Assurance santé Thaïlande à distance</h2>
<p>Votre besoin se limite à une assurance santé Thaïlande ou un devis ? Utilisez le <a href="#devis-assurance">devis assurance santé</a> (chat en bas de page) : Tammy vous rappelle après vos réponses. Souscription à distance depuis n’importe où : visio, e-mail, portail AXA.</p>
<p>Pour l’interprète, l’admin ou l’immo, le <a href="/formulaire-de-contact/">formulaire de contact</a> reste le bon canal.</p>

<p><a href="#devis-assurance">Devis assurance santé</a> · <a href="/formulaire-de-contact/">Nous écrire (autres demandes)</a> · <a href="${LANDING_PHUKET_PATH}">Assurance santé Phuket Thaïlande</a></p>
</article>`,
  },
  en: {
    documentTitle: 'Surin Branch Office, Surin Health Insurance & Thai French English interpreter Surin',
    metaDescription:
      'Thailande-services Surin office: Tammy for Surin health insurance (AXA), FR/EN/TH interpreting (hospital, police, immigration).',
    pageH1: 'Thailande-services Surin office: visas, Surin health insurance, Thai French English interpreter Surin in Thailand',
    lead:
      'Tammy meets clients in Surin. Thailand health insurance can also be subscribed remotely from anywhere in the country.',
    breadcrumbCurrent: 'Surin branch',
    jsonLdName: 'Thailande-services Surin branch office',
    bodyHtml: `
<article class="landing-seo-body">
<p>The <strong>Surin</strong> branch is where Thailande-services handles what screens cannot fix: hospital admissions, police reports, immigration appointments, Thai contracts read aloud. Tammy is a <strong>Krungthai AXA</strong> agent and <strong>Thai French English interpreter Surin in Thailand</strong>.</p>

<h2>Surin: Thai French English interpreter Surin in Thailand on site</h2>
<p>At the office we review your file before going anywhere. Tammy spent seven years in France and knows where cultural gaps stall a medical or visa case. She can accompany you to local hospitals or arrange a trip to Phuket when needed.</p>
<ul>
<li>Thai French English interpreter Surin in Thailand: hospital, police, accidents</li>
<li>Visa, immigration and admin forms</li>
<li>Surin health insurance: advice and AXA subscription</li>
<li>Office appointments or planned site visits</li>
</ul>
<p>First contact via WhatsApp or the <a href="/en/contact/">contact form</a>, then we book a slot at the office or on location.</p>

<h2>Thailand health insurance remotely</h2>
<p>Only need Thailand health insurance or a quote? Use the <a href="#devis-assurance">insurance quote</a> chat at the bottom of the page. Tammy calls you back after your answers.</p>
<p>For interpreting, admin or property, use the <a href="/en/contact/">contact form</a>.</p>

<p><a href="#devis-assurance">Insurance quote</a> · <a href="/en/contact/">Contact (other requests)</a> · <a href="/en/assurance-sante-phuket/">Phuket Thailand health insurance</a></p>
</article>`,
  },
  th: {
    documentTitle: 'สาขาสุรินทร์ ประกันสุขภาพสุรินทร์และล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์',
    metaDescription:
      'สาขา Thailande-services สุรินทร์ แทมมี่ ตัวแทน AXA ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย โรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง',
    pageH1: 'สาขา Thailande-services สุรินทร์: วีซ่า ประกันสุขภาพสุรินทร์ ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย',
    lead:
      'แทมมี่รับลูกค้าที่สุรินทร์ ประกันสุขภาพไทยสมัครระยะไกลได้จากทุกที่ในประเทศ',
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
