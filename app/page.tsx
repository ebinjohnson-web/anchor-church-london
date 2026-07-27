import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { assetPath } from "./lib/assets";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=2179%20Highbury%20Ave%20N%2C%20London%2C%20ON%20N5X%204N4%2C%20Canada";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="home-hero">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="kicker light-kicker">
                <span /> A church family in London, Ontario
              </p>
              <h1>
                Anchored
                <em>in Jesus.</em>
              </h1>
              <p className="hero-lede">
                A place to worship Jesus, grow in His Word, and find family.
                You are welcome here.
              </p>
              <div className="hero-actions">
                <Link className="button button-light" href="/visit">
                  Plan your visit <span aria-hidden="true">↗</span>
                </Link>
                <a className="text-link light-link" href={mapUrl} target="_blank" rel="noreferrer">
                  Get directions <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Anchor Church London family moments">
              <div className="hero-image-wrap">
                <Image
                  src={assetPath("/images/family-banner.jpg")}
                  alt="Church family moments at Anchor Church London"
                  fill
                  sizes="(max-width: 820px) 100vw, 48vw"
                  priority
                />
              </div>
              <div className="family-seal" aria-hidden="true">
                <span>ONE CHURCH · ONE FAMILY · </span>
                <strong>AC</strong>
              </div>
              <p className="hero-script">we are family</p>
            </div>
          </div>

          <div className="service-bar page-shell">
            <div>
              <span className="service-number">01</span>
              <p>Sunday worship</p>
              <strong>Time to be confirmed</strong>
            </div>
            <div>
              <span className="service-number">02</span>
              <p>Our location</p>
              <strong>2179 Highbury Ave N</strong>
            </div>
            <Link href="/visit" className="service-arrow" aria-label="See visitor information">
              <span>Visitor information</span>
              <b aria-hidden="true">↗</b>
            </Link>
          </div>
        </section>

        <div className="marquee" aria-label="Worship, word, prayer, community">
          <div className="marquee-track">
            <span>Worship</span><i>✦</i><span>Word</span><i>✦</i><span>Prayer</span><i>✦</i><span>Community</span><i>✦</i>
            <span aria-hidden="true">Worship</span><i aria-hidden="true">✦</i><span aria-hidden="true">Word</span><i aria-hidden="true">✦</i><span aria-hidden="true">Prayer</span><i aria-hidden="true">✦</i><span aria-hidden="true">Community</span><i aria-hidden="true">✦</i>
          </div>
        </div>

        <section className="intro-preview page-shell">
          <p className="section-index">01 / WELCOME</p>
          <div>
            <p className="kicker"><span /> This is home</p>
            <h2>Come as you are.<br /><em>Meet Jesus with us.</em></h2>
          </div>
          <p className="intro-copy">
            Anchor Church London is a family that worships together, grows
            together, and learns the good news of Jesus Christ.
          </p>
        </section>

        <section className="values-section">
          <div className="page-shell values-heading reveal">
            <p className="section-index light-index">02 / OUR HEART</p>
            <div>
              <p className="kicker light-kicker"><span /> What brings us together</p>
              <h2>Jesus at the centre.<br /><em>Family all around.</em></h2>
            </div>
          </div>
          <div className="page-shell values-grid">
            <article className="value-card reveal">
              <span className="value-icon" aria-hidden="true">✦</span>
              <p>01</p>
              <h3>Worship Jesus</h3>
              <div className="card-rule" />
              <p>We gather to honour Jesus Christ and respond to His goodness together.</p>
            </article>
            <article className="value-card featured-card reveal">
              <span className="value-icon" aria-hidden="true">⌁</span>
              <p>02</p>
              <h3>Grow in the Word</h3>
              <div className="card-rule" />
              <p>We learn the good news of Jesus Christ through Scripture and prayer.</p>
            </article>
            <article className="value-card reveal">
              <span className="value-icon" aria-hidden="true">◎</span>
              <p>03</p>
              <h3>Live as Family</h3>
              <div className="card-rule" />
              <p>We share life, care for one another, and grow as a spiritual family.</p>
            </article>
          </div>
          <div className="values-link page-shell reveal">
            <Link className="text-link light-link" href="/about">Learn more about Anchor Church <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="family-story page-shell">
          <div className="family-story-image reveal">
            <Image src={assetPath("/images/family-banner.jpg")} alt="Anchor Church London family collage" fill sizes="(max-width: 820px) 100vw, 48vw" />
            <span>We are<br /><em>family.</em></span>
          </div>
          <div className="family-story-copy reveal">
            <p className="section-index">03 / CHURCH LIFE</p>
            <p className="kicker"><span /> Life together in Christ</p>
            <h2>Church is more<br />than a <em>Sunday.</em></h2>
            <p>
              It is worship, prayer, learning, laughter, meals, and everyday care.
              At Anchor Church London, we want people of every age and background
              to find a family growing together in Jesus.
            </p>
            <Link className="button button-dark" href="/church-life">Discover church life <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="home-visit">
          <div className="page-shell home-visit-grid">
            <div className="reveal">
              <p className="kicker"><span /> Your first Sunday</p>
              <h2>New here?<br /><em>We saved you a seat.</em></h2>
            </div>
            <div className="visit-facts reveal">
              <div><span>When</span><strong>Sunday worship<br />Time to be confirmed</strong></div>
              <div><span>Where</span><strong>2179 Highbury Ave N<br />London, Ontario</strong></div>
            </div>
            <div className="visit-actions reveal">
              <Link className="button button-dark" href="/visit">What to expect <span aria-hidden="true">↗</span></Link>
              <a className="text-link" href={mapUrl} target="_blank" rel="noreferrer">Open in maps <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
