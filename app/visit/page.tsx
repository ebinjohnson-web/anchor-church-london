import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "I’m New",
  description: "Plan your first visit to Anchor Church London.",
};

const mapUrl = "https://www.google.com/maps/search/?api=1&query=2179%20Highbury%20Ave%20N%2C%20London%2C%20ON%20N5X%204N4%2C%20Canada";

export default function VisitPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <PageHero
          index="02 / 05"
          label="I’m New"
          title={<>Your first Sunday<br /><em>starts here.</em></>}
          intro="We want your first visit to feel simple, clear, and welcoming."
        />

        <section className="visit-overview page-shell">
          <div className="visit-intro reveal">
            <p className="kicker"><span /> The essentials</p>
            <h2>Come as<br /><em>you are.</em></h2>
            <p>There is no special preparation required. We would be glad to welcome you and your family.</p>
          </div>
          <div className="visit-detail-grid">
            <article className="visit-detail reveal"><span>01</span><h3>Sunday Worship</h3><p>Our regular Sunday service time is still being confirmed. Contact us before your visit and we will gladly share the latest details.</p></article>
            <article className="visit-detail reveal"><span>02</span><h3>Our Location</h3><p>2179 Highbury Ave N<br />London, ON N5X 4N4<br />Canada</p><a href={mapUrl} target="_blank" rel="noreferrer">Get directions ↗</a></article>
            <article className="visit-detail reveal"><span>03</span><h3>What to Expect</h3><p>A warm welcome, worship centred on Jesus, prayer, Bible teaching, and time together as a church family.</p></article>
            <article className="visit-detail reveal"><span>04</span><h3>Have a Question?</h3><p>If there is anything that would help you feel prepared, send us an email before Sunday.</p><a href="mailto:anchorchurchlc1@gmail.com">Email the church ↗</a></article>
          </div>
        </section>

        <section className="expect-section">
          <div className="page-shell expect-grid">
            <div className="reveal">
              <p className="section-index light-index">YOUR FIRST VISIT</p>
              <h2>A Sunday<br />with <em>family.</em></h2>
            </div>
            <ol className="expect-list">
              <li className="reveal"><span>01</span><div><h3>Arrive</h3><p>Use the address above and come in. If you are unsure where to go, someone will be happy to help.</p></div></li>
              <li className="reveal"><span>02</span><div><h3>Worship</h3><p>Join us as we sing, pray, listen to Scripture, and honour Jesus together.</p></div></li>
              <li className="reveal"><span>03</span><div><h3>Connect</h3><p>Stay afterward, meet the church family, and ask any questions you may have.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="location-cta page-shell reveal">
          <div><p className="kicker"><span /> Find us</p><h2>2179 Highbury Ave N<br /><em>London, Ontario</em></h2></div>
          <div><a className="button button-dark" href={mapUrl} target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a><Link className="text-link" href="/contact">Contact us <span aria-hidden="true">→</span></Link></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
