import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const GUIDED_MEDITATIONS_IMAGE = "/manus-storage/GuidedMedsite_26b6689f.png";
const WELLBEINGFEM_YOUTUBE_URL = "https://www.youtube.com/@wellbeingfem";

export default function GuidedMeditations() {
  return (
    <div className="site-shell guided-meditations-route">
      <SiteHeader />
      <main className="page-main guided-meditations-page" aria-label="Guided Meditation Journeys">
        <div className="page-main__inner guided-meditations-page__inner">
          <article className="guided-meditations-page__content">
            <figure className="guided-meditations-page__figure">
              <img
                src={GUIDED_MEDITATIONS_IMAGE}
                alt="WellBeingFem Guided Meditations — Rest, Reflect, Renew"
                width={1672}
                height={941}
              />
              <figcaption>
                <a
                  className="guided-meditations-page__youtube-button"
                  href={WELLBEINGFEM_YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  WellBeingFem YouTube Channel
                </a>
              </figcaption>
            </figure>

            <header className="guided-meditations-page__heading">
              <h1>GUIDED MEDITATION JOURNEYS</h1>
              <p>Women’s Wisdom &amp; Mind–Body–Spirit Wellbeing</p>
            </header>

            <p>Women carry deep wisdom through every stage of life. At times it feels close and familiar; at others, it can become obscured beneath responsibility, change, grief, uncertainty or the demands of everyday life.</p>
            <p>WellBeingFem Guided Meditation Journeys create a doorway inward. Through imagined landscapes, archetypal symbols, evocative imagery and the creative intelligence of the imagination, each journey invites deeper awareness, reconnection with inner wisdom and discovery of aspects of the self that may have been forgotten, hidden from view or not yet fully known.</p>
            <p>These journeys are more than relaxation recordings. They are structured meditation and guided visualisation experiences designed to support rest, reflection, emotional regulation and inner renewal. The imagination becomes a bridge between the familiar and the unseen, opening pathways into deeper layers of awareness where unacknowledged needs, emerging insights and intuitive knowing can begin to take form.</p>
            <p>Each meditation unfolds as an inner journey. A path may lead through an ancient forest, a corridor may open onto unexpected doors, or a mountain summit may reveal a wider horizon. The journey becomes an exploration of the inner world, allowing pathways, symbols and landscapes to unfold and reveal deeper layers of personal experience and story. Light, colour, sound, symbolic thresholds, archetypal figures and other images become part of the landscape, emerging naturally within the journey. Nothing is fixed and nothing has only one meaning. The symbols become invitations into reflection, opening space for personal meaning, new perspectives and insight into what may be ready to enter conscious awareness — or to be released.</p>

            <section className="guided-meditations-page__section" aria-labelledby="personal-transformation-heading">
              <h2 id="personal-transformation-heading">PERSONAL TRANSFORMATION &amp; WELLBEING</h2>
              <p>Research into meditation and guided imagery suggests that structured inner practices may support stress regulation, emotional balance, body awareness, resilience and overall wellbeing. WellBeingFem Meditation Journeys draw on this research-informed understanding while remaining rooted in women’s wisdom, symbolic reflection and mind–body–spirit awareness.</p>
              <p>Each journey is personal. There is simply an invitation to relax, listen and allow the images, symbols and inner landscape to unfold in their own way.</p>
              <p>There is no right or wrong experience.</p>
              <p>No two journeys are ever quite the same. Returning to a meditation can open a different pathway each time — perhaps revealing a new perspective, offering a deeper sense of calm or bringing forward an aspect of the self that is ready to be rediscovered.</p>
              <p>Begin with a free WellBeingFem Guided Meditation and allow yourself time to step away from the outer world, journey inward and return with whatever insight, stillness or renewed awareness the experience may offer.</p>
            </section>

            <section className="guided-meditations-page__section guided-meditations-page__renewal" aria-labelledby="rest-reflect-renew-heading">
              <h2 id="rest-reflect-renew-heading">REST • REFLECT • RENEW</h2>
              <div className="guided-meditations-page__renewal-items">
                <div>
                  <h3>REST</h3>
                  <p>Step away from the noise of everyday life and enter a space created for rest, sleep, restoration and emotional renewal.</p>
                </div>
                <div>
                  <h3>REFLECT</h3>
                  <p>Create space for stillness, perspective and deeper reflection, allowing the mind to quieten and inner wisdom to become easier to hear.</p>
                </div>
                <div>
                  <h3>RENEW</h3>
                  <p>Reconnect with energy, confidence and a renewed sense of possibility through times of change, personal challenge, perimenopause or menopause.</p>
                </div>
              </div>
            </section>

            <section className="guided-meditations-page__section guided-meditations-page__wellbeing-note" aria-labelledby="guided-meditations-wellbeing-note-heading">
              <h2 id="guided-meditations-wellbeing-note-heading">WELLBEING NOTE</h2>
              <p><em>WellBeingFem Guided Meditations are offered as reflective wellbeing and self-development support. They are not a replacement for medical care, psychotherapy, trauma therapy, diagnosis or treatment from a qualified healthcare professional.</em></p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
