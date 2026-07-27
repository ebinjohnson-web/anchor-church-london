import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { assetPath } from "./lib/assets";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=2179%20Highbury%20Ave%20N%2C%20London%2C%20ON%20N5X%204N4%2C%20Canada";

type IconName = "visit" | "worship" | "prayer" | "bible" | "family" | "connect";

function InterestIcon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const icons: Record<IconName, ReactNode> = {
    visit: <><path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z" /><circle cx="12" cy="9" r="2.4" /><path d="M4.2 22h15.6" /></>,
    worship: <><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /><path d="M9 9l10-2" /></>,
    prayer: <><path d="M12 21S3.8 16.4 3.8 9.7A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.2 2.7C20.2 16.4 12 21 12 21Z" /><path d="M12 3v4M10 5h4" /></>,
    bible: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" /><path d="M4 19a2.5 2.5 0 0 1 2.5-2H20M12 6v7M9.5 8.5h5" /></>,
    family: <><circle cx="12" cy="7" r="3" /><circle cx="5" cy="11" r="2.3" /><circle cx="19" cy="11" r="2.3" /><path d="M7.2 21v-2.5a4.8 4.8 0 0 1 9.6 0V21M1.8 21v-1.8a3.2 3.2 0 0 1 4.5-2.9M22.2 21v-1.8a3.2 3.2 0 0 0-4.5-2.9" /></>,
    connect: <><path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8.5 8.5 0 1 1 21 12Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{icons[name]}</svg>;
}

const interests: Array<{ href: string; icon: IconName; title: string; copy: string }> = [
  { href: "/visit", icon: "visit", title: "Planning a Visit", copy: "Everything you need for your first Sunday" },
  { href: "/ministries", icon: "worship", title: "Worshipping Together", copy: "Gather with us to honour Jesus Christ" },
  { href: "/contact", icon: "prayer", title: "Prayer & Care", copy: "Share a need and let us stand with you" },
  { href: "/ministries", icon: "bible", title: "Growing in the Word", copy: "Know Jesus through Scripture and teaching" },
  { href: "/church-life", icon: "family", title: "Finding Family", copy: "Experience life together across generations" },
  { href: "/contact", icon: "connect", title: "Connecting with Us", copy: "Start a conversation with Anchor Church" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="cnbc-home">
        <section className="cnbc-hero" aria-label="Welcome to Anchor Church London">
          <Image src={assetPath("/images/family-banner.jpg")} alt="Anchor Church London family moments" fill sizes="100vw" priority className="cnbc-hero-image" />
          <div className="cnbc-hero-wash" />
          <div className="cnbc-hero-content page-shell">
            <div className="cnbc-hero-title">
              <p>A church family in London, Ontario</p>
              <h1>Anchored in Jesus.</h1>
            </div>
            <div className="cnbc-hero-action">
              <span>Come as you are. There is a place for you here.</span>
              <Link href="/visit">Plan your visit <b aria-hidden="true">→</b></Link>
            </div>
          </div>
          <div className="cnbc-slider-dots" aria-hidden="true"><span className="active" /><span /><span /></div>
        </section>

        <section className="interest-heading">
          <div className="interest-shape" aria-hidden="true" />
          <h2>I&apos;m <strong>interested</strong> in...</h2>
        </section>

        <section className="interest-section" aria-label="Explore Anchor Church">
          <div className="interest-grid page-shell">
            {interests.map((item) => (
              <Link className="interest-card reveal" href={item.href} key={item.title}>
                <InterestIcon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-shape mission-shape-one" aria-hidden="true" />
          <div className="mission-shape mission-shape-two" aria-hidden="true" />
          <div className="mission-content">
            <h2>With confidence we say...<strong>It&apos;s all about Jesus.</strong></h2>
            <div className="mission-copy">
              <p><b>Jesus Christ is our Anchor.</b><br />Our hope is secure in who He is and what He has done.</p>
              <p><b>Jesus&apos; Gospel is our Message.</b><br />The wonderful news of God&apos;s grace is for every person.</p>
              <p><b>Jesus&apos; Mission is our Mandate.</b><br />We are called to love God, love people, and make disciples.</p>
              <p>Anchor Church London is a Christian church family that worships together, grows together, and shares the good news of Jesus Christ. Whether you are new to church, returning after time away, or searching for a church family, you are welcome here.</p>
              <p>We believe the local church is God&apos;s family at work—praying, serving, encouraging, and helping people grow in faith together.</p>
              <p>Because, after all, it&apos;s really not about us.</p>
              <p>Together, anchored in Christ.</p>
            </div>
            <p className="mission-signature">Anchor Church London</p>
            <div className="mission-actions">
              <Link className="cnbc-button" href="/about">Learn more about us</Link>
              <a className="cnbc-text-link" href={mapUrl} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
