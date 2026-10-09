import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Explore worship, prayer, Bible teaching, and fellowship at Anchor Church London.",
};

const ministries = [
  {
    "title": "Worship and prayer",
    "copy": "We gather to honour God through singing, prayer, and reflection on Scripture. Our desire is to worship with sincerity and respond to God with our lives.",
    "href": "/visit",
    "action": "Join Us on Sunday"
  },
  {
    "title": "Bible teaching and discipleship",
    "copy": "We want to understand the Bible in its context and apply its teaching thoughtfully. Whether you are new to Scripture or have studied it for years, there is always more to learn about following Jesus.",
    "href": "/next-steps#groups",
    "action": "Ask About Current Studies"
  },
  {
    "title": "Fellowship and practical care",
    "copy": "Friendships grow as people spend time together, listen, and care for one another. Ask how you can connect with our church family or offer practical help.",
    "href": "/contact",
    "action": "Ask About Fellowship"
  }
];

export default function MinistriesPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="ministries-page">
        <PageHero
          index="03 / 05"
          label="Ministries"
          title={<>Growing together.<br /><em>Serving together.</em></>}
          intro="Church life includes gathering for worship and learning to follow Jesus throughout the week. We would love to help you find a way to connect."
        />

        <section className="ministries-intro page-shell reveal">
          <p className="section-index">A SHARED LIFE</p>
          <h2>Every gathering is an invitation<br />to know Jesus <em>more deeply.</em></h2>
          <p>Grow in faith and build meaningful relationships. Ask us about current opportunities to connect.</p>
        </section>

        <section className="ministry-list page-shell">
          {ministries.map((ministry) => (
            <article className="ministry-row reveal" key={ministry.title}>
              <h3>{ministry.title}</h3>
              <div className="ministry-description"><p>{ministry.copy}</p><Link className="ministry-button" href={ministry.href}>{ministry.action}</Link></div>
            </article>
          ))}
        </section>

        <section className="ministry-note">
          <div className="page-shell reveal">
            <p className="kicker light-kicker"><span /> Find your place</p>
            <h2>Want to know where<br /><em>you can connect?</em></h2>
            <p>Send us a message and we will help you find the latest information.</p>
            <Link className="ministry-button ministry-button-light" href="/contact">Contact Anchor Church</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
