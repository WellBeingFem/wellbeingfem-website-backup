/**
 * WellBeingFem restoration reminder: this component renders only the complete,
 * approved policy wording supplied by the client. Do not rewrite, condense, or
 * add legal text; preserve the cream, dark-green serif-led presentation.
 */
type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "details"; lines: string[] };

type PolicySection = {
  heading?: string;
  blocks: ContentBlock[];
};

function PolicyBody({ intro, sections }: { intro: string[]; sections: PolicySection[] }) {
  return (
    <div className="policy-document">
      {intro.map((paragraph) => (
        <p className="policy-document__intro" key={paragraph}>{paragraph}</p>
      ))}
      {sections.map((section) => (
        <section className="policy-document__section" key={section.heading ?? section.blocks[0]?.type}>
          {section.heading ? <h4>{section.heading}</h4> : null}
          {section.blocks.map((block, index) => {
            if (block.type === "list") {
              return (
                <ul key={`${section.heading}-list-${index}`}>
                  {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              );
            }
            if (block.type === "details") {
              return (
                <div className="policy-document__details" key={`${section.heading}-details-${index}`}>
                  {block.lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              );
            }
            return <p key={`${section.heading}-paragraph-${index}`}>{block.text}</p>;
          })}
        </section>
      ))}
    </div>
  );
}

const privacySections: PolicySection[] = [
  {
    heading: "1. Who We Are",
    blocks: [
      { type: "paragraph", text: "WellBeingFem is operated by:" },
      { type: "details", lines: ["Business name: WellBeingFem", "Owner / practitioner: Dr Suzanne Nolan", "Location: Dublin, Ireland / Remote sessions available", "Email: WellBeingFem@gmail.com", "Website: wellbeingfem.com"] },
      { type: "paragraph", text: "For the purposes of data protection law, WellBeingFem is the data controller for the personal data collected and used in connection with its services, website, bookings, communications and client records." },
    ],
  },
  {
    heading: "2. What Personal Data We May Collect",
    blocks: [
      { type: "paragraph", text: "WellBeingFem may collect and process the following types of personal data, depending on how you use the website or services:" },
      { type: "list", items: ["Name and contact details, including email address and phone number", "Booking and appointment details", "Payment and purchase information", "Gift card purchase or redemption information", "Communication records, including emails, messages and enquiry forms", "Information provided in client intake, consent or screening forms", "Relevant wellbeing, health, lifestyle, stress, sleep, emotional or personal information that you choose to share for session preparation or suitability screening", "Notes connected with sessions, intentions, client preferences, follow-up, resources or support provided", "Website usage data, where cookies or analytics tools are used", "Marketing preferences, where you choose to join a mailing list or receive updates"] },
      { type: "paragraph", text: "WellBeingFem asks clients to provide only information that is relevant and necessary for booking, session suitability, client care, communication and administration." },
    ],
  },
  {
    heading: "3. Special Category Data",
    blocks: [
      { type: "paragraph", text: "Some information you provide may relate to health, wellbeing, emotional state, menstrual or hormonal wellbeing, medical history, medication, mental health, trauma history, pregnancy, implanted devices or other sensitive matters. Where this information relates to health or other sensitive areas, it may be treated as special category data under GDPR. WellBeingFem will only collect this type of information where it is relevant to the service, where you choose to provide it, and where there is an appropriate lawful basis and special category condition for processing, such as your explicit consent." },
      { type: "paragraph", text: "You do not have to provide sensitive information. However, if important suitability or safety information is not provided, WellBeingFem may not be able to offer, adapt or proceed with a service." },
    ],
  },
  {
    heading: "4. Why We Use Personal Data",
    blocks: [
      { type: "paragraph", text: "WellBeingFem may use personal data for the following purposes:" },
      { type: "list", items: ["To respond to enquiries", "To arrange, confirm and manage bookings", "To provide ONDAMED, Healy, Reiki, distant Reiki, guided meditation, workshop, membership, digital resource, gift card or related services", "To assess whether a service appears suitable or whether it should be adapted, postponed or declined", "To prepare for sessions and provide appropriate follow-up resources", "To process payments, receipts, refunds and accounting records", "To manage gift cards, memberships or digital content access", "To keep reasonable client records", "To communicate service information, changes, reminders or follow-up details", "To send newsletters or updates where you have chosen to receive them", "To maintain website security and improve website functionality", "To comply with legal, tax, accounting, insurance or regulatory obligations", "To protect the rights, safety and legitimate interests of WellBeingFem, clients and others"] },
    ],
  },
  {
    heading: "5. Lawful Bases for Processing",
    blocks: [
      { type: "paragraph", text: "WellBeingFem relies on different lawful bases depending on the type of data and purpose of processing. These may include:" },
      { type: "details", lines: ["Contract: to provide a service, booking, purchase, gift card, membership or digital resource you have requested.", "Consent: where you choose to provide certain information, join a mailing list, receive updates, accept non-essential cookies, or give consent for specific processing.", "Explicit consent: where health, wellbeing or other special category data is collected for session suitability, client care or service preparation.", "Legal obligation: where WellBeingFem must keep certain records for tax, accounting, consumer rights, legal or regulatory reasons.", "Legitimate interests: where processing is necessary for reasonable business administration, responding to enquiries, managing appointments, keeping appropriate records, protecting legal rights, website security or service improvement, provided your rights and freedoms are not overridden."] },
    ],
  },
  {
    heading: "6. Consent and Withdrawal of Consent",
    blocks: [
      { type: "paragraph", text: "Where WellBeingFem relies on consent, you may withdraw your consent at any time by contacting WellBeingFem. Withdrawing consent will not affect processing that has already taken place before withdrawal. It may also not require WellBeingFem to delete information that must be kept for legal, accounting, insurance, dispute resolution or legitimate business record purposes." },
      { type: "paragraph", text: "Where consent is withdrawn for information that is necessary to provide a service safely or appropriately, WellBeingFem may be unable to continue that service." },
    ],
  },
  {
    heading: "7. How We Collect Personal Data",
    blocks: [
      { type: "paragraph", text: "Personal data may be collected when you:" },
      { type: "list", items: ["Visit the website", "Send an email or message", "Complete an enquiry, booking, intake, consent or screening form", "Book or attend a session", "Purchase a service, gift card, membership, workshop or digital resource", "Take part in a remote session by Zoom, WhatsApp or another agreed communication method", "Subscribe to updates or a mailing list", "Share information during a consultation or follow-up communication"] },
    ],
  },
  {
    heading: "8. Client Records and Session Notes",
    blocks: [
      { type: "paragraph", text: "WellBeingFem may keep brief client records, consent forms, intake information, screening information, session notes, session dates, agreed intentions, resources provided and relevant communication history." },
      { type: "paragraph", text: "These records are kept to support continuity of care, client safety, service quality, administration, accountability and legal protection." },
      { type: "paragraph", text: "WellBeingFem does not create medical records and does not provide diagnosis, medical treatment, psychotherapy or mental health care." },
    ],
  },
  {
    heading: "9. Sharing Personal Data",
    blocks: [
      { type: "paragraph", text: "WellBeingFem will not sell personal data." },
      { type: "paragraph", text: "Personal data may be shared only where necessary and appropriate, such as with:" },
      { type: "list", items: ["Booking, payment, email, website hosting, cloud storage, video call, messaging or IT service providers", "Accountants, bookkeepers, insurers, legal advisers or professional advisers", "Regulatory, legal, tax, safeguarding or public authorities where required by law or where there is a serious risk of harm", "Service providers involved in maintaining secure business systems"] },
      { type: "paragraph", text: "Where third-party providers are used, they are expected to process data securely and only for appropriate purposes." },
    ],
  },
  {
    heading: "10. Remote Communication Tools",
    blocks: [
      { type: "paragraph", text: "WellBeingFem may use email, WhatsApp, Zoom or other agreed communication tools for enquiries, bookings, remote sessions, session links, reminders or follow-up." },
      { type: "paragraph", text: "Please be aware that no online communication method can be guaranteed to be completely secure. Avoid sending highly sensitive information by message unless necessary. If you would prefer to provide information another way, please contact WellBeingFem." },
    ],
  },
  {
    heading: "11. Payments",
    blocks: [
      { type: "paragraph", text: "WellBeingFem may collect payment information for services, workshops, gift cards, memberships or digital resources. Where payment is made by cash, bank transfer, online payment link, card payment or another agreed method, WellBeingFem will keep appropriate payment and accounting records. Full card details are not intentionally stored by WellBeingFem where a third-party payment provider is used." },
    ],
  },
  {
    heading: "12. Email Updates and Marketing",
    blocks: [
      { type: "paragraph", text: "WellBeingFem will only send marketing emails, newsletters or promotional updates where you have chosen to receive them or where otherwise permitted by law." },
      { type: "paragraph", text: "You can unsubscribe from marketing communications at any time by using the unsubscribe option where available or by contacting WellBeingFem directly." },
      { type: "paragraph", text: "Service-related emails, such as booking confirmations, appointment changes, payment information or essential client communications, may still be sent where necessary." },
    ],
  },
  {
    heading: "13. Cookies and Website Data",
    blocks: [
      { type: "paragraph", text: "The WellBeingFem website may use strictly necessary cookies to make the website work properly." },
      { type: "paragraph", text: "If analytics, marketing cookies, embedded media, pixels, tracking tools or similar technologies are used, WellBeingFem will aim to provide appropriate cookie information and, where required, ask for consent before using non-essential cookies." },
      { type: "paragraph", text: "You can usually manage or disable cookies through your browser settings. Where a cookie banner or cookie management tool is used, you should be able to change your preferences through that tool." },
    ],
  },
  {
    heading: "14. How Long We Keep Data",
    blocks: [
      { type: "paragraph", text: "WellBeingFem keeps personal data only for as long as necessary for the purpose for which it was collected, unless a longer retention period is required or justified by law, accounting rules, insurance, dispute resolution or legitimate business needs." },
      { type: "paragraph", text: "Typical retention periods may include:" },
      { type: "list", items: ["Enquiry records where no booking follows: normally up to 12 months after the last contact", "Client intake forms, consent forms and session records: normally up to 7 years after the last client contact, unless a longer or shorter period is appropriate", "Financial, payment and accounting records: as required for tax and accounting purposes", "Mailing list records: until you unsubscribe or ask to be removed", "Website analytics and cookie data: according to the settings and retention periods of the relevant website or analytics tools"] },
      { type: "paragraph", text: "These periods may be reviewed and adjusted where necessary." },
    ],
  },
  {
    heading: "15. How We Protect Personal Data",
    blocks: [
      { type: "paragraph", text: "WellBeingFem takes reasonable steps to protect personal data from loss, misuse, unauthorised access, disclosure, alteration or destruction." },
      { type: "paragraph", text: "Measures may include password protection, secure devices, restricted access, secure storage, careful handling of client records, and use of reputable service providers." },
      { type: "paragraph", text: "No method of electronic storage or transmission is completely risk-free, but WellBeingFem aims to handle personal information with care and appropriate safeguards." },
    ],
  },
  {
    heading: "16. International Transfers",
    blocks: [
      { type: "paragraph", text: "Some third-party tools, platforms or service providers used by WellBeingFem may process or store data outside Ireland or the European Economic Area. Where this happens, WellBeingFem will aim to use providers and safeguards that support GDPR compliance, such as adequacy decisions, standard contractual clauses or equivalent protections where required." },
    ],
  },
  {
    heading: "17. Your Data Protection Rights",
    blocks: [
      { type: "paragraph", text: "Subject to applicable law, you may have the right to:" },
      { type: "list", items: ["Be informed about how your data is used", "Access a copy of your personal data", "Correct inaccurate or incomplete data", "Request deletion of your data", "Restrict certain processing", "Object to certain processing", "Request data portability where applicable", "Withdraw consent where processing is based on consent", "Complain to the Data Protection Commission"] },
      { type: "paragraph", text: "These rights are not always absolute. For example, WellBeingFem may need to keep certain information for legal, accounting, insurance, dispute resolution or legitimate business reasons." },
    ],
  },
  {
    heading: "18. How to Make a Data Request",
    blocks: [
      { type: "paragraph", text: "To make a data protection request, contact:" },
      { type: "details", lines: ["Email: WellBeingFem@gmail.com"] },
      { type: "paragraph", text: "Please provide enough information to identify you and understand your request. WellBeingFem may need to verify your identity before responding." },
      { type: "paragraph", text: "WellBeingFem will aim to respond within the timeframe required by data protection law." },
    ],
  },
  {
    heading: "19. Complaints",
    blocks: [
      { type: "paragraph", text: "If you have a concern about how WellBeingFem handles your personal data, please contact WellBeingFem first so the issue can be reviewed and addressed." },
      { type: "paragraph", text: "You also have the right to contact the Irish Data Protection Commission:" },
      { type: "details", lines: ["Data Protection Commission", "Website: www.dataprotection.ie"] },
    ],
  },
  {
    heading: "20. Children",
    blocks: [{ type: "paragraph", text: "WellBeingFem services are intended for adults aged 18 and over unless expressly agreed otherwise. WellBeingFem does not knowingly collect personal data from children for online services, memberships or digital resources without appropriate consent and safeguards." }],
  },
  {
    heading: "21. Links to Other Websites",
    blocks: [{ type: "paragraph", text: "The WellBeingFem website may include links to external websites, research pages, articles, payment providers, video platforms or other third-party services. WellBeingFem is not responsible for the privacy practices, content or security of external websites. You should review the privacy policies of any external sites you visit." }],
  },
  {
    heading: "22. Changes to This Privacy Policy / GDPR Notice",
    blocks: [
      { type: "paragraph", text: "WellBeingFem may update this Privacy Policy / GDPR Notice from time to time." },
      { type: "paragraph", text: "The latest version will be published on the website with the updated date." },
      { type: "paragraph", text: "Continued use of the website or services after changes are published means you accept the updated notice." },
    ],
  },
  {
    heading: "Closing Note",
    blocks: [{ type: "paragraph", text: "This Privacy Policy / GDPR Notice should be read together with the WellBeingFem Terms & Conditions, Cookie Policy where applicable, and any Client Consent & Intake Form completed before a session." }],
  },
];

const termsSections: PolicySection[] = [
  {
    heading: "1. Business Information",
    blocks: [
      { type: "details", lines: ["Business name: WellBeingFem", "Owner / practitioner: Dr Suzanne Nolan", "Location: Dublin, Ireland / Remote sessions available", "Email: WellBeingFem@gmail.com", "Website: wellbeingfem.com"] },
      { type: "paragraph", text: "WellBeingFem provides complementary wellbeing services, including ONDAMED, Healy frequency sessions, Reiki, distant Reiki, guided meditation journeys, reflective resources and related wellbeing supports." },
    ],
  },
  {
    heading: "2. Nature of Services",
    blocks: [
      { type: "paragraph", text: "WellBeingFem services are offered as complementary wellbeing supports." },
      { type: "paragraph", text: "Services may include:" },
      { type: "list", items: ["In-person ONDAMED sessions", "Remote Healy frequency sessions", "Reiki and distant Reiki sessions", "Healy / Reiki combination sessions", "Guided meditation journeys", "Reflective wellbeing resources", "Chakra, aura, affirmation and journalling materials", "Gift cards and membership resources"] },
      { type: "paragraph", text: "WellBeingFem services are designed to support rest, reflection, relaxation, self-awareness, emotional balance, energetic wellbeing and personal renewal." },
      { type: "paragraph", text: "They are not medical, psychological, psychiatric, diagnostic or emergency services." },
    ],
  },
  {
    heading: "3. Medical and Wellbeing Disclaimer",
    blocks: [
      { type: "paragraph", text: "WellBeingFem does not diagnose, treat, cure or prevent any medical, psychological or psychiatric condition." },
      { type: "paragraph", text: "WellBeingFem services are not a replacement for:" },
      { type: "list", items: ["Medical advice", "Diagnosis", "Medical treatment", "Psychotherapy", "Counselling", "Trauma therapy", "Psychiatric care", "Emergency support", "Medication or prescribed treatment from a qualified healthcare professional"] },
      { type: "paragraph", text: "You should consult your GP, consultant, psychologist, psychotherapist or other qualified healthcare professional for any medical or mental health concern." },
      { type: "paragraph", text: "Do not stop, alter or delay prescribed medication, medical treatment or professional care because of anything discussed or experienced through WellBeingFem." },
      { type: "paragraph", text: "If you are experiencing a medical emergency or mental health crisis, contact emergency services or an appropriate crisis support service immediately." },
    ],
  },
  {
    heading: "4. Client Responsibility",
    blocks: [
      { type: "paragraph", text: "By booking a session, you confirm that:" },
      { type: "list", items: ["You are responsible for your own health, wellbeing and choices.", "You will provide accurate information before your session.", "You will inform WellBeingFem of any relevant medical conditions, pregnancy, implanted devices, medication, recent surgery, active treatment, mental health concerns or other factors that may affect your suitability for a session.", "You understand that outcomes and experiences vary.", "You understand that no specific result is promised or guaranteed."] },
      { type: "paragraph", text: "WellBeingFem reserves the right to decline, postpone or adapt a session where it appears unsuitable or where referral to a qualified healthcare professional may be more appropriate." },
    ],
  },
  {
    heading: "5. ONDAMED Sessions",
    blocks: [
      { type: "paragraph", text: "ONDAMED sessions are offered in person only." },
      { type: "paragraph", text: "Before an ONDAMED session, you may be asked to complete an intake or screening form. This helps identify any relevant precautions or contraindications." },
      { type: "paragraph", text: "You must inform WellBeingFem before booking or attending an ONDAMED session if you:" },
      { type: "list", items: ["Have a pacemaker or implanted electronic device", "Are pregnant or may be pregnant", "Have epilepsy or seizures", "Have active cancer or are undergoing cancer treatment", "Have had recent surgery", "Have a serious heart condition", "Have any significant medical condition", "Are unsure whether ONDAMED is suitable for you"] },
      { type: "paragraph", text: "This list is not exhaustive. WellBeingFem may ask further questions before confirming your appointment." },
    ],
  },
  {
    heading: "6. Healy, Remote Frequency and Reiki Sessions",
    blocks: [
      { type: "paragraph", text: "Remote Healy, Reiki and distant Reiki sessions are offered as complementary wellbeing and reflective supports." },
      { type: "paragraph", text: "You understand that remote Healy sessions are not presented as clinically proven medical treatment. Research references provided on the website are for educational background only and should not be understood as clinical proof for remote Healy sessions." },
      { type: "paragraph", text: "For remote sessions, you are responsible for choosing a quiet, safe and comfortable place where you can relax without interruption. Do not listen to guided meditation or take part in a remote session while driving, operating machinery or doing anything requiring full attention." },
    ],
  },
  {
    heading: "7. Guided Meditation Journeys",
    blocks: [
      { type: "paragraph", text: "Guided Meditation Journeys are reflective wellbeing and self-development resources." },
      { type: "paragraph", text: "They may support relaxation, self-reflection, emotional awareness and inner stillness. However, meditation and inner imagery can sometimes bring up emotions, memories or personal material." },
      { type: "paragraph", text: "If you have significant trauma symptoms, severe anxiety, psychosis, suicidal thoughts, unstable mental health, persistent sleep disturbance or any serious medical or psychological concern, please seek advice from a qualified healthcare or mental health professional before using guided meditation resources." },
    ],
  },
  {
    heading: "8. Booking and Payment",
    blocks: [
      { type: "paragraph", text: "Bookings are confirmed only when WellBeingFem has confirmed the appointment in writing and payment arrangements have been agreed." },
      { type: "paragraph", text: "Prices may not be listed on the website. Session prices, workshop prices, gift card values, membership fees or digital resource prices will be provided clearly before booking or purchase." },
      { type: "paragraph", text: "Payment methods may include cash, bank transfer, online payment link, card payment or another agreed method." },
      { type: "paragraph", text: "WellBeingFem reserves the right to update prices at any time. Price changes will not affect bookings already confirmed and paid for." },
    ],
  },
  {
    heading: "9. Cancellations, Rescheduling and Refunds",
    blocks: [
      { type: "paragraph", text: "Please give at least 24 hours' notice if you need to cancel or reschedule a one-to-one session." },
      { type: "paragraph", text: "If you cancel or reschedule with at least 24 hours' notice, you may reschedule your session or request a refund where applicable." },
      { type: "paragraph", text: "If you cancel with less than 24 hours' notice, 50% of the session fee may be retained and 50% may be refunded." },
      { type: "paragraph", text: "If you do not attend a booked appointment without notice, the full session fee may be retained." },
      { type: "paragraph", text: "Where a session must be cancelled by WellBeingFem, you will be offered a rescheduled appointment or a refund." },
      { type: "paragraph", text: "For workshops, cancellations made at least 24 hours before the workshop will be refunded in full. If a client chooses not to attend with less than 24 hours' notice, the workshop fee may be retained." },
      { type: "paragraph", text: "This cancellation policy does not affect any statutory consumer rights that apply under Irish or EU consumer law." },
    ],
  },
  {
    heading: "10. Online / Distance Purchases, Services and Digital Materials",
    blocks: [
      { type: "paragraph", text: "Where you purchase a service online, by phone, by email or at a distance, you may have a 14-day cooling-off period under Irish/EU consumer law." },
      { type: "paragraph", text: "If you ask WellBeingFem to provide a session, workshop, digital resource, meditation, PDF, recording or other material within the 14-day cooling-off period, you acknowledge that the service or digital content may begin before the cooling-off period has ended." },
      { type: "paragraph", text: "Where a service has been fully provided, or digital materials have been supplied and accessed, the transaction may be considered complete, subject to applicable consumer law." },
      { type: "paragraph", text: "If a session or service has partly begun and is cancelled within any applicable cooling-off period, a proportionate charge may apply for the part of the service already provided." },
      { type: "paragraph", text: "Digital materials, PDFs, guides, meditations, recordings and downloadable resources are generally non-refundable once they have been supplied or accessed, unless required otherwise by law." },
    ],
  },
  {
    heading: "11. Late Arrival and Missed Appointments",
    blocks: [
      { type: "paragraph", text: "If you arrive late for an appointment, the session may still need to end at the scheduled time." },
      { type: "paragraph", text: "If you do not attend a booked appointment without notice, the session may be treated as completed and no refund may be provided." },
    ],
  },
  {
    heading: "12. Digital Resources and Session Materials",
    blocks: [
      { type: "paragraph", text: "WellBeingFem may provide PDFs, journalling pages, guides, meditation recordings, affirmation materials, chakra reflection resources, aura analysis materials or other digital resources." },
      { type: "paragraph", text: "These materials are provided for personal use only." },
      { type: "paragraph", text: "You may not copy, reproduce, share, sell, distribute, upload, modify or commercially use WellBeingFem materials without written permission." },
    ],
  },
  {
    heading: "13. Gift Cards",
    blocks: [
      { type: "paragraph", text: "Gift cards may be used towards eligible WellBeingFem services." },
      { type: "paragraph", text: "Gift cards are not exchangeable for cash." },
      { type: "paragraph", text: "Gift cards are valid for 5 years from the date of purchase, unless a longer period is stated." },
      { type: "paragraph", text: "Where a service costs more than the value of the gift card, the remaining balance must be paid by the client." },
      { type: "paragraph", text: "If a gift card is lost, misplaced or cannot be located, the purchaser or recipient should contact WellBeingFem. Where the purchase can be reasonably verified using the purchaser's name, recipient's name, reference code, date of purchase, payment record or other relevant details, WellBeingFem will aim to support the client in a fair and flexible manner." },
      { type: "paragraph", text: "If WellBeingFem decides to stop offering services or closes voluntarily, clients with verified unused gift cards should contact WellBeingFem. Where services can no longer be provided, WellBeingFem will aim to resolve the matter in a fair, supportive and reasonable way, which may include arranging use of the gift card before closure, offering an alternative arrangement or providing a refund where appropriate and possible, subject to applicable law." },
      { type: "paragraph", text: "Any queries about gift cards, expiry, transfer or use can be directed to WellBeingFem and will be dealt with in a supportive and reasonable way." },
    ],
  },
  {
    heading: "14. Memberships and Online Content",
    blocks: [
      { type: "paragraph", text: "Where WellBeingFem offers memberships, online libraries, paid meditation content or subscription services, separate membership terms may apply." },
      { type: "paragraph", text: "Memberships may be cancelled at any time. When a membership is cancelled, access will continue until the end of the current paid membership period and will then end." },
      { type: "paragraph", text: "Membership fees already paid for the current month are generally non-refundable, unless required otherwise by law." },
      { type: "paragraph", text: "Membership content is for personal use only and must not be copied, shared, downloaded without permission, distributed, resold or used commercially." },
      { type: "paragraph", text: "Digital resources, meditations, recordings, PDFs or downloadable materials purchased separately are generally considered complete once supplied or accessed, unless required otherwise by law." },
      { type: "paragraph", text: "Subscription payments, cancellation terms and access periods will be clearly explained before purchase." },
    ],
  },
  {
    heading: "15. Confidentiality",
    blocks: [
      { type: "paragraph", text: "WellBeingFem treats client information with care and confidentiality." },
      { type: "paragraph", text: "However, confidentiality may be limited where disclosure is required by law, where there is a serious risk of harm, or where safeguarding concerns arise." },
      { type: "paragraph", text: "WellBeingFem is not an emergency, crisis, medical or mental health service." },
    ],
  },
  {
    heading: "16. Privacy and Data Protection",
    blocks: [
      { type: "paragraph", text: "WellBeingFem processes personal data in accordance with applicable data protection law." },
      { type: "paragraph", text: "Please read the separate Privacy Policy / GDPR Notice for information about what data is collected, why it is collected, how it is stored, how long it is kept, and your rights." },
      { type: "paragraph", text: "You may be asked to provide personal information for booking, communication, session preparation, payment, consent and follow-up." },
      { type: "paragraph", text: "Where health or wellbeing information is provided, this may be treated as sensitive personal data and will be handled with additional care." },
    ],
  },
  {
    heading: "17. Website Information and Research References",
    blocks: [
      { type: "paragraph", text: "Information on the WellBeingFem website is provided for general educational and wellbeing purposes only." },
      { type: "paragraph", text: "Research references are included for background reading and should not be understood as medical claims, treatment claims, guarantees or proof that a particular service will produce a particular result." },
      { type: "paragraph", text: "External links are provided for convenience. WellBeingFem is not responsible for the content, accuracy or availability of external websites." },
    ],
  },
  {
    heading: "18. Results and Client Experience",
    blocks: [
      { type: "paragraph", text: "Every client's experience is individual." },
      { type: "paragraph", text: "WellBeingFem does not guarantee specific outcomes, results, improvements, emotional responses, physical changes or wellbeing effects from any session, resource or service." },
      { type: "paragraph", text: "Testimonials reflect individual experiences only and do not guarantee that another person will have the same experience." },
    ],
  },
  {
    heading: "19. Refusal or Discontinuation of Service",
    blocks: [
      { type: "paragraph", text: "WellBeingFem reserves the right to refuse, pause or discontinue a service where:" },
      { type: "list", items: ["The service appears unsuitable for the client.", "The client requires medical, psychological or emergency support beyond the scope of WellBeingFem.", "The client behaves in a disrespectful, abusive or inappropriate manner.", "Required consent or intake information has not been provided.", "Payment has not been completed.", "Continuing the service would be inappropriate or unsafe."] },
    ],
  },
  {
    heading: "20. Intellectual Property",
    blocks: [
      { type: "paragraph", text: "All WellBeingFem text, images, meditations, recordings, PDFs, guides, journals, website content, branding and digital materials are owned by WellBeingFem unless otherwise stated." },
      { type: "paragraph", text: "You may use purchased or downloaded materials for your own personal wellbeing and reflection only." },
      { type: "paragraph", text: "You may not reproduce, publish, teach from, adapt, resell, distribute or commercially use WellBeingFem materials without written permission." },
    ],
  },
  {
    heading: "21. Limitation of Liability",
    blocks: [
      { type: "paragraph", text: "To the fullest extent permitted by law, WellBeingFem is not liable for indirect, incidental or consequential loss arising from use of the website, services, digital materials or resources." },
      { type: "paragraph", text: "Nothing in these Terms & Conditions excludes liability where it cannot legally be excluded." },
      { type: "paragraph", text: "Your statutory consumer rights are not affected." },
    ],
  },
  {
    heading: "22. Complaints and Contact",
    blocks: [
      { type: "paragraph", text: "If you have a concern or complaint, please contact:" },
      { type: "details", lines: ["Email: WellBeingFem@gmail.com"] },
      { type: "paragraph", text: "WellBeingFem will aim to respond within a reasonable timeframe and to resolve concerns respectfully." },
    ],
  },
  {
    heading: "23. Changes to These Terms",
    blocks: [
      { type: "paragraph", text: "WellBeingFem may update these Terms & Conditions from time to time." },
      { type: "paragraph", text: "The latest version will be published on the website with the updated date." },
      { type: "paragraph", text: "Continued use of the website or services after changes are published means you accept the updated Terms & Conditions." },
    ],
  },
  {
    heading: "24. Governing Law",
    blocks: [
      { type: "paragraph", text: "These Terms & Conditions are governed by the laws of Ireland." },
      { type: "paragraph", text: "Any disputes will be subject to the jurisdiction of the Irish courts, unless otherwise required by applicable consumer law." },
    ],
  },
];

export function PrivacyPolicyDocument() {
  return (
    <PolicyBody
      intro={[
        "WellBeingFem Privacy Policy / GDPR Notice",
        "Last updated: 1st August, 2026",
        "This Privacy Policy / GDPR Notice explains how WellBeingFem collects, uses, stores and protects personal data. It applies to website visitors, enquirers, clients, purchasers, gift card users, membership users and anyone who communicates with WellBeingFem.",
        "WellBeingFem is committed to handling personal information carefully, respectfully and lawfully. Some information provided for wellbeing sessions may be personal or sensitive. This notice explains what is collected, why it is used, how long it is kept, and the rights you have under data protection law.",
      ]}
      sections={privacySections}
    />
  );
}

export function TermsAndConditionsDocument() {
  return (
    <PolicyBody
      intro={[
        "WellBeingFem Terms & Conditions",
        "Last updated: 26th July, 2026",
        "These Terms & Conditions apply to all bookings, purchases, website use, consultations, remote sessions, in-person sessions, digital resources and services offered by WellBeingFem.",
        "By booking a session, purchasing a service, using this website, or accessing WellBeingFem materials, you agree to these Terms & Conditions.",
      ]}
      sections={termsSections}
    />
  );
}
