import { enquiryEmail } from "../lib/enquiries";
import { church } from "../lib/church";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "Find Sunday service details, directions, and answers to common questions before visiting Anchor Church London, Ontario.",
};


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
          intro="Visiting a church for the first time can bring questions. Here is what you need to know about a Sunday at Anchor Church London."
        />

        <section className="visit-overview page-shell">
          <div className="visit-intro reveal">
            <p className="kicker"><span /> The essentials</p>
            <h2>Come as<br /><em>you are.</em></h2>
            <p>You are welcome to come without registering. We would be glad to welcome you and your family.</p><p>{church.parking} {church.floor}</p>
          </div>
          <div className="visit-detail-grid">
            <article className="visit-detail reveal"><span>01</span><h3>Sunday Worship</h3><p>{church.service} Our service lasts 1 hour and 45 minutes.</p></article>
            <article className="visit-detail reveal"><span>02</span><h3>Our Location</h3><p>{church.venue}<br />{church.street}<br />{church.city}</p><a href={church.mapUrl} target="_blank" rel="noreferrer">Get directions ↗</a></article>
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
              <li className="reveal"><span>01</span><div><h3>Arrive</h3><p>{church.parking} {church.floor} If you are unsure where to go, ask our welcome team for help.</p></div></li>
              <li className="reveal"><span>02</span><div><h3>Worship</h3><p>Join us as we sing, pray, listen to Scripture, and honour Jesus together.</p></div></li>
              <li className="reveal"><span>03</span><div><h3>Connect</h3><p>Stay afterward, meet the church family, and ask any questions you may have.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="pastor-welcome-section" aria-labelledby="full-welcome">
          <div className="pastor-welcome-shape" aria-hidden="true" />
          <div className="page-shell pastor-welcome-grid">
            <div className="pastor-welcome-heading"><p>A welcome from</p><h2 id="full-welcome">Pastor Sudhir</h2><span>Founder and Lead Pastor</span></div>
            <div className="pastor-welcome-copy">
              <p>Welcome to Anchor Church London. I’m Sudhir, the founder and lead pastor, and I am glad you are taking the time to get to know our church.</p>
              <p>I immigrated to Canada in 2015 and live in London, Ontario, with my family. I am passionate about developing people and being part of God’s Kingdom work. At Anchor, we want to help people know Jesus, grow as His disciples, and share His love in London and beyond.</p>
              <p>Whether you are exploring Christianity, returning to church, or looking for a church home, you are welcome here. You do not need to have every answer before you come. Bring your questions and get to know our church family.</p>
              <p>Join us on Sundays from 10:45 a.m. to 12:30 p.m. at East West Event Centre, 530 Clarke Road, Unit #1, London, Ontario N5V 2C7. Parking is available at the rear of the building, and we meet on the first floor.</p>
              <p>We gather to sing, pray, and learn from the Bible. After the service, please introduce yourself and spend some time with us. I look forward to welcoming you.</p>
              <p className="pastor-welcome-signature">Pastor Sudhir Basumatary</p>
              <div className="content-actions"><a className="cnbc-button" href={enquiryEmail("Plan Your Visit")}>Let Us Know You’re Coming</a><a className="cnbc-text-link" href={church.mapUrl} target="_blank" rel="noreferrer">Get Directions ↗</a></div>
              <p className="enquiry-note">The visit link opens your email app. You are welcome to come without sending an enquiry.</p>
            </div>
          </div>
        </section>
        <section className="content-section page-shell" aria-labelledby="visitor-questions">
          <p className="kicker"><span /> Before you arrive</p><h2 id="visitor-questions">Your questions, answered.</h2>
          <div className="visitor-faq">
            <details><summary>How long is the service?</summary><p>Our Sunday service begins at 10:45 a.m. and ends at 12:30 p.m., lasting 1 hour and 45 minutes.</p></details>
            <details><summary>What happens during the service?</summary><p>We worship through singing, prayer, and Bible teaching. You are welcome to listen and observe as you get to know our church. After the service, introduce yourself, spend time with the church family, and ask any questions you may have.</p></details>
            <details><summary>Do I need to be a Christian to attend?</summary><p>No. You are welcome to attend if you are curious about faith, unsure what you believe, or returning after time away. We will be glad to meet you.</p></details>
            <details><summary>What should I wear?</summary><p>Wear something comfortable. You do not need special clothing to join us for worship.</p></details>
            <details><summary>Do I need to register?</summary><p>You do not need to register for a regular Sunday service. You may email us with questions before you arrive. Special events may have separate registration.</p></details>
            <details><summary>Can I bring my children?</summary><p>Yes, families are welcome. Contact us before your visit to learn about current children’s activities, age groups, supervision, and check-in arrangements.</p></details>
            <details><summary>Will I be expected to give money?</summary><p>No. As our guest, please feel free to attend without giving. Financial contributions are voluntary.</p></details>
            <details><summary>What if I need prayer or someone to talk to?</summary><p>Ask to speak with a member of the pastoral team after the service.</p></details>
            <details><summary>What language is the service in?</summary><p>Our services are in English.</p></details>
            <details><summary>Can I watch online?</summary><p>Yes, you can join our service online. If you are in London, we would love to welcome you in person. Contact us for the current broadcast link.</p></details>
          </div>
        </section>

        <section className="location-cta page-shell reveal">
          <div><p className="kicker"><span /> Find us</p><h2>{church.venue}<br /><em>{church.street}</em></h2></div>
          <div><a className="button button-dark" href={church.mapUrl} target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a><Link className="text-link" href="/contact">Contact us <span aria-hidden="true">→</span></Link></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
