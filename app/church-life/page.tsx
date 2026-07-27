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
          <p className="reveal">Church life happens in the gathered moments and the small ones: worship, fellowship, prayer, children, baptism, youth, meals, and the moments when family simply shows up for family.</p>
        </section>

        <section className="life-collage page-shell" aria-label="Anchor Church family photo collage">
          <div className="life-photo life-photo-wide reveal"><Image src={assetPath("/images/family-banner.jpg")} alt="Anchor Church family moments" fill sizes="(max-width: 820px) 100vw, 66vw" /></div>
          <div className="life-quote reveal"><span>“</span><p>We worship together.<br />We grow together.<br /><em>We are family.</em></p></div>
          <div className="life-photo life-photo-detail-one reveal"><Image src={assetPath("/images/family-banner.jpg")} alt="Church fellowship moments" fill sizes="(max-width: 820px) 100vw, 33vw" /></div>
          <div className="life-photo life-photo-detail-two reveal"><Image src={assetPath("/images/family-banner.jpg")} alt="Church worship and community moments" fill sizes="(max-width: 820px) 100vw, 33vw" /></div>
        </section>

        <section className="photos-coming page-shell reveal">
          <span>Gallery update</span>
          <h2>More stories<br /><em>coming soon.</em></h2>
          <p>Selected photos from worship, fellowship, prayer, children, baptism, youth, meals, and church family moments can be added here as the church approves them.</p>
          <Link className="button button-dark" href="/contact">Connect with us <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
