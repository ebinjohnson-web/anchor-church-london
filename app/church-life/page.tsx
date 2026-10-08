import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/assets";

export const metadata: Metadata = {
  title: "Church Life",
  description: "Life together as the Anchor Church London family.",
};

export default function ChurchLifePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
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

        <section className="life-collage page-shell" aria-label="Anchor Church family photo collage">
          <div className="life-photo life-photo-wide reveal"><Image src={assetPath("/images/family-banner.jpg")} alt="Anchor Church family moments" fill sizes="(max-width: 820px) 100vw, 66vw" /></div>
          <div className="life-quote reveal"><span>“</span><p>We worship together.<br />We grow together.<br /><em>We are family.</em></p></div>
          <div className="life-photo life-photo-detail-one reveal"><Image src={assetPath("/images/family-banner.jpg")} alt="Church fellowship moments" fill sizes="(max-width: 820px) 100vw, 33vw" /></div>
          <div className="life-photo life-photo-detail-two reveal"><Image src={assetPath("/images/family-banner.jpg")} alt="Church worship and community moments" fill sizes="(max-width: 820px) 100vw, 33vw" /></div>
        </section>

        <section className="photos-coming page-shell reveal">
          <span>Life together</span><h2>Grow in faith.<br /><em>Build friendships.</em></h2>
          <p>Bring your questions, build friendships, and discover ways to participate in church life. We would love to help you find your next step.</p>
          <div className="content-actions"><Link className="button button-dark" href="/ministries">Explore Ministries →</Link><Link className="text-link" href="/next-steps">Take Your Next Step →</Link><Link className="text-link" href="/prayer-care">Prayer and Care →</Link><Link className="text-link" href="/messages">Messages →</Link><Link className="text-link" href="/events">Events and Stories →</Link></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
