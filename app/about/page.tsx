import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/assets";

export const metadata: Metadata = {
  title: "Our Story and Leadership",
  description: "Learn about Anchor Church London, our pastor, our mission, and the Christian beliefs that shape our life together.",
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="about-page">
        <PageHero
          index="01 / 05"
          label="About Anchor Church"
          title={<>A family anchored<br /><em>in Christ.</em></>}
          intro="We worship Jesus, grow together, and share His good news in London, Ontario."
        />

        <section id="our-story" className="story-layout page-shell">
          <div className="story-sticky reveal">
            <p className="section-index">WHO WE ARE</p>
            <h2>A church family<br /><em>growing in faith.</em></h2>
          </div>
          <div className="story-body reveal">
            <p className="story-lead">Anchor Church London began in 2021 with a desire to help people know Jesus and grow together as His followers.</p>
            <p>From our early gatherings, our purpose has been to worship God, teach His Word, and care for people.</p>
            <p>As we begin a new chapter at East West Event Centre, we look forward to welcoming more people and building new friendships. Our prayer is that Anchor will be a church where faith is expressed in the way we love and serve.</p>
            <div className="about-purpose">
              <div><h3>Our mission</h3><p>To help people know Jesus, grow as His disciples, and share His love in London and beyond.</p></div>
              <div><h3>Our vision</h3><p>A growing church family rooted in Scripture, strengthened by prayer, and serving our city with the hope of Jesus.</p></div>
            </div>
          </div>
        </section>

        <section className="about-image-band reveal">
          <Image src={assetPath("/images/wide-congregation.jpg")} alt="Anchor Church London congregation gathered together" width={1444} height={640} sizes="(max-width: 820px) 95vw, 90vw" />
        </section>

        <section className="about-values page-shell">
          <div className="about-values-heading reveal">
            <p className="kicker"><span /> What shapes our life</p>
            <h2>Simple truths.<br /><em>A shared life.</em></h2>
          </div>
          <div className="principle-list">
            {[
              ["01", "Jesus at the centre", "Our worship and message point to who Jesus is and what He has done."],
              ["02", "The Bible shaping our lives", "We seek to understand Scripture and respond through faithful choices."],
              ["03", "Prayerful dependence", "We bring our needs before God and seek His wisdom together."],
              ["04", "A caring church family", "We build friendships across generations and backgrounds and seek to carry one another’s burdens."],
              ["05", "Everyday discipleship", "We encourage one another to follow Jesus beyond Sunday gatherings."],
              ["06", "Service and generosity", "We offer our time, abilities, and resources for the good of others."],
            ].map(([number, title, copy]) => (
              <article className="principle reveal" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pastor-welcome-section" aria-labelledby="meet-pastor">
          <div className="pastor-welcome-shape" aria-hidden="true" />
          <div className="page-shell pastor-welcome-grid about-pastor-grid">
            <div className="about-pastor-photo reveal">
              <Image src={assetPath("/images/pastor-sudhir-family.jpeg")} alt="Pastor Sudhir Basumatary with his family" width={1121} height={1403} sizes="(max-width: 820px) 280px, 320px" />
            </div>
            <div className="pastor-welcome-heading reveal"><p>Meet our pastor</p><h2 id="meet-pastor">Sudhir Basumatary <em className="about-family-label">and family</em></h2><span>Founder and Lead Pastor</span></div>
            <div className="pastor-welcome-copy reveal">
              <p>Sudhir immigrated to Canada in 2015 and founded Anchor Church London in 2021. He is passionate about developing people and being part of God’s Kingdom work. His desire is to help people understand Scripture, grow in their relationship with Jesus, and put their faith into practice. His background in social work and human resources brings experience in supporting people and their development. Sudhir lives in London, Ontario, with his family.</p>
              <blockquote>“Thank you for taking the time to learn about Anchor Church. My prayer is that you will discover the hope of Jesus and find people who will walk alongside you as you grow in faith. Wherever you are on that journey, I would be glad to welcome you.”</blockquote>
              <Link className="cnbc-text-link" href="/contact">Connect With Our Church →</Link>
            </div>
          </div>
        </section>
        <section className="content-section page-shell" aria-labelledby="partnerships">
          <p className="kicker"><span /> Mission and partnerships</p><h2 id="partnerships">Sharing the hope of Jesus</h2>
          <div className="content-columns">
            <div><p>Our mission begins with the people God has placed around us. We want to listen well, care for practical needs, and speak about Jesus with humility and clarity. We also value cooperation with other churches so that the gospel reaches beyond our own congregation.</p><p>We invite our church family to pray for people who do not yet know Jesus, learn to share their faith, and explore opportunities to serve locally and beyond.</p><Link className="cnbc-text-link" href="/next-steps#serving">Ask About Mission and Outreach →</Link></div>
            <div><h3 id="affiliations-heading">Our affiliations</h3><p>Anchor Church London is affiliated with the organizations below.</p><p>We value these relationships as we grow in discipleship, serve others, and share the good news of Jesus.</p><p>Learn more about discipleship and cooperative mission through CNBC, and explore NAMB’s resources for evangelism, church planting, and compassionate ministry, including Send Network and Send Relief.</p><div className="content-actions"><a className="cnbc-text-link" href="https://www.cnbc.ca/" target="_blank" rel="noreferrer">Explore CNBC ↗</a><a className="cnbc-text-link" href="https://www.namb.net/" target="_blank" rel="noreferrer">Explore NAMB ↗</a></div></div>
          </div>
          <ul className="affiliation-logos" aria-labelledby="affiliations-heading">
            {[
              { name: "Southern Baptist Convention", logo: "sbc.svg", href: "https://www.sbc.net/", dark: false },
              { name: "Canadian National Baptist Convention", logo: "cnbc.png", href: "https://www.cnbc.ca/", dark: true },
              { name: "North American Mission Board", logo: "namb.svg", href: "https://www.namb.net/", dark: true },
              { name: "Gospel Trend Church", logo: "gospel-trend.png", href: "https://www.gospeltrendlondon.org/", dark: false },
              { name: "CPMI", logo: "cpmi.jpg", href: "https://churchplanting.ca/", dark: false },
            ].map((partner) => (
              <li key={partner.name}>
                <a className="affiliation-card" aria-label={`${partner.name} (opens in a new tab)`} href={partner.href} target="_blank" rel="noreferrer">
                  <span className={`affiliation-logo-stage${partner.dark ? " affiliation-logo-dark" : ""}`}>
                    <Image src={assetPath(`/images/affiliations/${partner.logo}`)} alt="" fill sizes="(max-width: 600px) 40vw, (max-width: 1100px) 28vw, 18vw" />
                  </span>
                  <span className="affiliation-name">{partner.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="simple-cta">
          <div className="page-shell reveal">
            <p className="kicker light-kicker"><span /> Come meet us</p>
            <h2>The best way to know us<br />is to <em>worship with us.</em></h2>
            <Link className="button button-light about-visit-button" href="/visit">Plan your visit <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
