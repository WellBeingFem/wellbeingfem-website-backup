type ResearchResource = {
  title: string;
  citation: string;
  description: string;
  linkText: string;
  href: string;
};

const ondamedResources: ResearchResource[] = [
  {
    title: "ONDAMED-Focused PEMF and Gene-Expression Research",
    citation:
      "Panja, A., Binder, R., & Binder, S. (2021). Focused-pulsed electromagnetic field treatment reverses lipopolysaccharide-induced alterations in gene expression profile in human gastrointestinal epithelial cells. International Journal of Health & Allied Sciences, 10, 55–69.",
    description:
      "This ONDAMED-focused paper explores how focused pulsed electromagnetic field exposure was associated with changes in gene-expression patterns in human gastrointestinal epithelial cells in a laboratory setting. It is included as early-stage mechanistic research and should not be read as clinical proof or a treatment claim.",
    linkText: "PDF version",
    href: "https://ondamed.net/wp-content/uploads/2022/10/IJHAS_Publication_Gene_Expression_and_OM.pdf",
  },
  {
    title: "PEMF and Inflammation-Resolution Pathway Markers",
    citation:
      "Kubat, N. J., Moffett, J., & Fray, L. M. (2015). Effect of pulsed electromagnetic field treatment on programmed resolution of inflammation pathway markers in human cells in culture. Journal of Inflammation Research, 8, 59–69.",
    description:
      "This peer-reviewed article explores how pulsed electromagnetic field exposure was associated with changes in gene-expression markers involved in inflammation and resolution pathways in human cells in culture. It is included as mechanistic PEMF background research, not as a clinical claim for WellBeingFem sessions.",
    linkText: "Full article",
    href: "https://www.dovepress.com/effect-of-pulsed-electromagnetic-field-treatment-on-programmed-resolut-peer-reviewed-fulltext-article-JIR",
  },
  {
    title: "Electromagnetic Fields and Bone Remodelling",
    citation:
      "Liu, J., Ren, W., Wang, S., Yang, J., Zhang, H., Zeng, Y., Yin, D., & Shang, P. (2025). The effects and mechanisms of electromagnetic fields on bone remodeling: From clinical to laboratory. Journal of Orthopaedic Translation, 52, 14–26.",
    description:
      "This open-access review explores research into electromagnetic fields and bone remodelling, including biological mechanisms and clinical research areas related to bone health. It is included as wider PEMF / electromagnetic-field background reading and is not ONDAMED-specific.",
    linkText: "Full article",
    href: "https://www.sciencedirect.com/science/article/pii/S2214031X25000348",
  },
];

const healyResources: ResearchResource[] = [
  {
    title: "Official Healy Scientific-Basis Information",
    citation: "Healy World. Scientific Basis of the Healy.",
    description:
      "This official Healy resource provides background information on Healy’s frequency-based wellbeing technology and how the company explains its approach to bioenergetic wellbeing. As this is manufacturer-provided information, it is best understood as product background rather than independent clinical evidence.",
    linkText: "Read more",
    href: "https://us.healy.shop/the-scientific-basis-of-the-healy/",
  },
  {
    title: "Healy / Healy Coil Randomized Wellbeing Trial",
    citation:
      "Walach, H., & Marmann, P. (2021). Self-Treatment to Improve Mental and Physical Health Using Two Bioenergetic Devices: A Randomized Controlled Trial. Journal of Psychiatry and Psychiatric Disorders, 5(4), 107–119.",
    description:
      "This randomized controlled trial explored self-treatment with Healy and Healy Coil devices in medically healthy volunteers over a short two-week period. The authors reported improvements in general wellbeing measures, while noting that the study was not blinded and that device effects cannot be clearly separated from expectation or placebo effects. It is included here as Healy-specific wellbeing research, not as proof that Healy treats medical conditions or as evidence for remote sessions.",
    linkText: "PDF version",
    href: "https://www.fortunejournals.com/articles/selftreatment-to-improve-mental-and-physical-health-using-two-bioenergetic-devices-a-randomized-controlled-trial.pdf",
  },
  {
    title: "Healy and Wellbeing Meta-Analysis",
    citation:
      "Walach, H., & Marmann, P. (2023). Bioenergy Treatment for Improving Well-Being: A Meta-Analysis. Complementary Medicine Research, 30(3), 258–269.",
    description:
      "This meta-analysis reviewed several studies involving the Healy device and general wellbeing in healthy individuals. The authors reported positive findings for wellbeing, while also noting that the available studies came from the producer’s research and development department, that independent confirmation would be desirable, and that the mechanism of effect remains unclear. It is included here as background reading on Healy and wellbeing, not as clinical proof or a treatment claim.",
    linkText: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/36696891/",
  },
];

const reikiResources: ResearchResource[] = [
  {
    title: "Reiki Therapy for Pain and Anxiety in Adults",
    citation:
      "Thrane, S., & Cohen, S. M. (2014). Effect of Reiki Therapy on Pain and Anxiety in Adults: An In-Depth Literature Review of Randomized Trials with Effect Size Calculations. Pain Management Nursing, 15(4), 897–908.",
    description:
      "This literature review examined randomized trials of Reiki therapy in relation to pain and anxiety in adults. It is included as background reading on Reiki as a complementary support, while recognising that research quality, study design and clinical context vary.",
    linkText: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/24582620/",
  },
  {
    title: "Reiki Therapy for Pain, Anxiety and Quality of Life",
    citation:
      "Billot, M., Daycard, M., Wood, C., & Tchalla, A. (2019). Reiki therapy for pain, anxiety and quality of life. BMJ Supportive & Palliative Care, 9(4), 434–438.",
    description:
      "This review explored Reiki therapy in relation to pain, anxiety, depression and quality of life. It is included here as useful background on Reiki as a complementary approach to comfort and wellbeing, not as proof that Reiki treats or cures medical or psychological conditions.",
    linkText: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/30948444/",
  },
  {
    title: "Reiki and Mental Health Symptoms Above Placebo",
    citation:
      "Zadro, S., & Stapleton, P. (2022). Does Reiki Benefit Mental Health Symptoms Above Placebo? Frontiers in Psychology, 13, 897312.",
    description:
      "This review examined Reiki research in relation to mental health symptoms and placebo comparison. The authors reported that Reiki may offer benefits in some contexts, particularly where stress, anxiety or depression symptoms are clinically relevant, while also recognising that the evidence remains developing. It is included here as cautious background reading on Reiki and emotional wellbeing.",
    linkText: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/35911042/",
  },
];

const guidedMeditationResources: ResearchResource[] = [
  {
    title: "Heart Coherence, Self-Regulation and Emotional Balance",
    citation:
      "McCraty, R., & Zayas, M. A. (2014). Cardiac coherence, self-regulation, autonomic stability, and psychosocial well-being. Frontiers in Psychology, 5, 1090.",
    description:
      "This paper explores cardiac coherence, emotional self-regulation, autonomic stability and psychosocial wellbeing. It is included as background reading on heart coherence and heart-brain communication, which are relevant to the WellBeingFem focus on breath, emotional health, self-regulation and inner balance. It should not be read as a treatment claim.",
    linkText: "PDF version",
    href: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2014.01090/pdf",
  },
  {
    title: "Intensive Meditation and Mind-Body Biological Pathways",
    citation:
      "Zuniga-Hertz, J. P., Chitteti, R., Dispenza, J., Cuomo, R., Bonds, J. A., Kopp, E. L., Simpson, S., et al. (2023). Meditation-induced bloodborne factors as an adjuvant treatment to COVID-19 disease. Brain, Behavior, & Immunity - Health, 32, 100675.",
    description:
      "This study explored intensive meditation practice and biological / plasma measures. It is included because it supports the wider research idea that intensive mind-body meditation may be associated with measurable biological changes across pathways linked with stress response, immune function and wellbeing. This was not a simple guided visualisation study and should be framed as emerging mind-body research, not as a treatment claim or as proof that meditation prevents or treats illness.",
    linkText: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/37600600/",
  },
  {
    title: "Guided Imagery, Stress, Brain Activity and Attention",
    citation:
      "Zemla, K., Sedek, G., Wróbel, K., Postepski, F., & Wojcik, G. M. (2023). Investigating the Impact of Guided Imagery on Stress, Brain Functions, and Attention: A Randomized Trial. Sensors, 23(13), 6210.",
    description:
      "This randomised trial explored guided imagery in relation to stress, alpha brainwave activity and attentional control. The authors reported that guided imagery showed potential for reducing stress and supporting attentional control. It is included as research background for guided imagery as a structured mind-body practice, not as proof that guided meditation treats medical or psychological conditions.",
    linkText: "Full article",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10346678/",
  },
  {
    title: "Guided Imagery, Comfort, Anxiety and Stress",
    citation:
      "Apostolo, J. L. A., & Kolcaba, K. (2009). The Effects of Guided Imagery on Comfort, Depression, Anxiety, and Stress of Psychiatric Inpatients with Depressive Disorders. Archives of Psychiatric Nursing, 23(6), 403–411.",
    description:
      "This study explored guided imagery recordings in relation to comfort, depression, anxiety and stress in psychiatric inpatients. It is included because it is directly relevant to guided imagery as an accessible reflective practice. It should be read carefully and not presented as evidence that WellBeingFem guided meditation journeys treat anxiety, depression or any psychological condition.",
    linkText: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/19926022/",
  },
  {
    title: "Nature-Based Guided Imagery and State Anxiety",
    citation:
      "Nguyen, J., & Brymer, E. (2018). Nature-Based Guided Imagery as an Intervention for State Anxiety. Frontiers in Psychology, 9, 1858.",
    description:
      "This study explored nature-based guided imagery and state anxiety. It is useful background reading for WellBeingFem because many guided meditation journeys use nature, symbolic landscapes and inner imagery. It should be understood as educational background only, not as a treatment claim.",
    linkText: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/30333777/",
  },
];

function ResourceList({ resources }: { resources: ResearchResource[] }) {
  return (
    <div className="research-resource-list">
      {resources.map((resource) => (
        <article className="research-resource" key={resource.title}>
          <h3>{resource.title}</h3>
          <p className="research-resource__citation">{resource.citation}</p>
          <p>{resource.description}</p>
          <a href={resource.href} target="_blank" rel="noreferrer">
            {resource.linkText}
          </a>
        </article>
      ))}
    </div>
  );
}

export default function ResearchResources() {
  return (
    <div id="research-content" className="research-content-anchor">
      <nav className="research-category-navigation" aria-label="Research categories">
        <a href="#ondamed">ONDAMED</a>
        <a href="#healy">Healy</a>
        <a href="#guided-meditations">Guided Meditations</a>
      </nav>

      <header className="research-content-heading">
        <p>Resources &amp; Further Reading</p>
        <p>
          Explore research, background reading and educational references related to the services offered at
          WellBeingFem. These resources are provided for educational interest only and should not be read as
          medical claims.
        </p>
      </header>

      <section id="ondamed" className="research-anchor-section" aria-labelledby="ondamed-heading">
        <h2 id="ondamed-heading">ONDAMED / PEMF Research</h2>
        <ResourceList resources={ondamedResources} />
        <aside className="research-note" aria-labelledby="ondamed-note-heading">
          <h3 id="ondamed-note-heading">ONDAMED / PEMF Note</h3>
          <p>
            These resources are provided for educational background only. PEMF research varies by device,
            frequency, intensity, treatment protocol and research setting. WellBeingFem does not claim that
            ONDAMED diagnoses, treats, cures or prevents any medical condition. ONDAMED sessions are offered as
            complementary wellbeing support only and are not a replacement for medical advice, diagnosis or
            treatment from a qualified healthcare professional.
          </p>
        </aside>
      </section>

      <section id="healy" className="research-anchor-section" aria-labelledby="healy-heading">
        <h2 id="healy-heading">Healy &amp; Frequency-Based Wellbeing Resources</h2>
        <aside className="research-note" aria-label="Healy opening note">
          <p>
            The following resources are offered for educational interest only. They explore Healy device research,
            frequency-based wellbeing concepts, bioenergetic self-treatment and related wellbeing studies. They
            should not be read as clinical proof for remote Healy sessions. Healy sessions at WellBeingFem are
            offered as complementary wellbeing and reflective support only, not as diagnosis, medical treatment or
            medical care.
          </p>
        </aside>
        <ResourceList resources={healyResources} />
        <aside className="research-note" aria-labelledby="healy-closing-note-heading">
          <h3 id="healy-closing-note-heading">Healy Closing Note</h3>
          <p>
            Healy-specific published research is still limited and should be read with care. These resources are
            provided for educational background only and should not be understood as clinical proof for remote Healy
            sessions. WellBeingFem does not claim that Healy diagnoses, treats, cures or prevents any medical
            condition. Remote Healy sessions are offered as complementary wellbeing and reflective support only and
            are not a replacement for medical advice, diagnosis, psychotherapy or treatment from a qualified
            healthcare professional.
          </p>
        </aside>

        <div className="research-subsection" role="group" aria-labelledby="reiki-research">
          <h3 id="reiki-research">Reiki &amp; Distant Reiki Research</h3>
          <aside className="research-note" aria-label="Reiki and Distant Reiki opening note">
            <p>
              The following resources are offered for educational interest only. They explore Reiki as a
              complementary wellbeing practice and include research relating to pain, anxiety, stress, mood,
              comfort and quality of life. They should not be read as medical claims for Reiki or distant Reiki
              sessions. Reiki at WellBeingFem is offered as complementary wellbeing and reflective support only,
              not as diagnosis, medical treatment or medical care.
            </p>
          </aside>
          <ResourceList resources={reikiResources} />
          <aside className="research-note" aria-labelledby="reiki-closing-note-heading">
            <h4 id="reiki-closing-note-heading">Reiki Closing Note</h4>
            <p>
              Reiki research is developing and should be read with care. These resources are provided for
              educational background only and should not be understood as clinical proof for Reiki or distant Reiki
              sessions. WellBeingFem does not claim that Reiki diagnoses, treats, cures or prevents any medical or
              psychological condition. Reiki and distant Reiki sessions are offered as complementary wellbeing and
              reflective support only and are not a replacement for medical advice, diagnosis, psychotherapy, trauma
              therapy or treatment from a qualified healthcare professional.
            </p>
          </aside>
        </div>
      </section>

      <section
        id="guided-meditations"
        className="research-anchor-section"
        aria-labelledby="guided-meditations-heading"
      >
        <h2 id="guided-meditations-heading">Guided Meditation Journeys &amp; Inner Imagery Research</h2>
        <aside className="research-note" aria-labelledby="guided-opening-note-heading">
          <h3 id="guided-opening-note-heading">Opening Note</h3>
          <p>
            The following resources are offered for educational interest only. They explore meditation, guided
            imagery, heart coherence, mental imagery, stress regulation, attention, emotional balance and related
            mind-body research. They should not be read as medical or psychological treatment claims for
            WellBeingFem Guided Meditation Journeys.
          </p>
          <p>
            WellBeingFem Guided Meditation Journeys are offered as reflective wellbeing and self-development
            support. They are not a replacement for medical care, psychotherapy, trauma therapy, diagnosis or
            treatment from a qualified healthcare professional.
          </p>
        </aside>
        <ResourceList resources={guidedMeditationResources} />
        <aside className="research-note" aria-labelledby="guided-closing-note-heading">
          <h3 id="guided-closing-note-heading">Guided Meditation Closing Note</h3>
          <p>
            Guided meditation journeys and inner imagery practices can be supportive, but experiences vary. Some
            people may find that strong emotions, memories or personal material arise during reflective practices.
            Anyone experiencing significant distress, trauma symptoms, mental health concerns, persistent sleep
            difficulties or medical symptoms should seek appropriate support from a qualified healthcare or mental
            health professional. The inclusion of these resources is for educational purposes only and does not imply
            that guided meditation journeys diagnose, treat, cure or prevent any medical or psychological condition.
          </p>
        </aside>
      </section>
    </div>
  );
}
