import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/assets";
import { churchLifePhotos } from "../lib/church-life-photos";

export const metadata: Metadata = {
  title: "Church Life",
  description: "Explore ministries, prayer and care, messages, and events at Anchor Church London.",
};

const areas = [
  { title: "Ministries", copy: "Discover ways to grow in faith and participate in church life.", href: "/ministries", action: "Explore Ministries" },
  { title: "Prayer and Care", copy: "Find prayer, pastoral contact, and support from our church team.", href: "/prayer-care", action: "Explore Prayer and Care" },
  { title: "Messages", copy: "Learn about our messages and how to join the service online.", href: "/messages", action: "Explore Messages" },
  { title: "Events and Stories", copy: "Find out about church gatherings and stories from our church family.", href: "/events", action: "Explore Events and Stories" },
];

export default function ChurchLifePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="church-life-page">
        <PageHero
          index="04 / 05"
          label="Church Life"
          title={<>Faith lived<br /><em>together.</em></>}
          intro="Worship. Prayer. Joy. Friendship. Ordinary moments made meaningful in Christ."
        />
        <section className="life-intro page-shell">
          <div className="reveal"><p className="section-index">OUR CHURCH FAMILY</p><h2>More than a crowd.<br /><em>A community.</em></h2></div>
          <p className="reveal">Church life includes gathering for worship and learning to follow Jesus throughout the week. We would love to help you find a way to connect.</p>
        </section>
        <section className="church-life-gallery page-shell" aria-label="Life in our church family">
          {churchLifePhotos.map((photo) => (
            <div className="church-life-photo reveal" key={photo.src}>
              <Image src={assetPath(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 820px) 95vw, 45vw" />
            </div>
          ))}
          <p className="church-life-family-statement reveal">We worship together. We grow together. <em>We are family.</em></p>
        </section>
        <section className="church-life-areas page-shell" aria-labelledby="church-life-heading">
          <div className="reveal"><p className="kicker"><span /> Life together</p><h2 id="church-life-heading">Find your place<br /><em>in church life.</em></h2></div>
          <div className="church-life-card-grid">
            {areas.map((area) => (
              <article className="church-life-card reveal" key={area.href}>
                <h3>{area.title}</h3><p>{area.copy}</p>
                <Link className="church-life-button church-life-button-outline" href={area.href}>{area.action} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </section>
        <section className="church-life-closing page-shell reveal">
          <div><h2>Grow in faith.<br /><em>Build friendships.</em></h2><p>Bring your questions and discover your next step with Anchor Church.</p></div>
          <Link className="church-life-button" href="/next-steps">Take Your Next Step <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
