import type { ReactNode } from "react";
import type { Metadata } from "next";
import { church } from "./lib/church";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MissionTicker from "./components/MissionTicker";
import { assetPath } from "./lib/assets";

export const metadata: Metadata = {
  title: { absolute: "Anchor Church London | Christian Church in London Ontario" },
  description: "Discover Anchor Church London, a Christian church family in London, Ontario. Learn about Sunday worship, explore faith, and plan your first visit.",
};

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
  { href: "/visit", icon: "visit", title: "Plan Your Visit", copy: "Everything you need for your first Sunday" },
  { href: "/next-steps#explore-jesus", icon: "bible", title: "Explore Jesus", copy: "Bring your questions and discover the good news" },
  { href: "/next-steps#baptism", icon: "worship", title: "Ask About Baptism", copy: "Understand baptism and the preparation involved" },
  { href: "/next-steps#groups", icon: "family", title: "Ask About Groups", copy: "Learn Scripture, pray, and grow with others" },
  { href: "/next-steps#serving", icon: "prayer", title: "Ask About Serving", copy: "Find ways to offer your time and abilities" },
  { href: "/opportunities", icon: "connect", title: "Enquire About Internships", copy: "Explore potential opportunities and practical experience" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="cnbc-home">
        <section className="home-photo-intro" aria-labelledby="home-welcome-title">
          <div className="home-congregation-photo">
            <Image src={assetPath("/images/london-skyline.jpg")} alt="London, Ontario skyline with downtown high-rise buildings" width={3852} height={1961} sizes="100vw" priority />
          </div>
          <div className="home-photo-corners" aria-hidden="true" />
          <div className="home-photo-heading page-shell">
            <div className="hero-title-motion" data-motion="hero">
              <p>A Church Family in London, Ontario</p>
              <h1 id="home-welcome-title"><span>Anchored in</span>{" "}<span>Jesus</span></h1>
            </div>
          </div>
        </section>

        <section className="home-sunday-invitation" aria-label="Plan your Sunday visit">
          <div className="page-shell home-sunday-grid">
            <div className="home-welcome-buttons" data-motion="rise">
              <Link className="home-visit-button" href="/visit">Plan Your Visit <span aria-hidden="true">→</span></Link>
              <a className="home-directions-button" href={church.mapUrl} target="_blank" rel="noreferrer">Get Directions <span aria-hidden="true">↗</span></a>
            </div>
            <p className="home-invitation-copy">Find hope in Jesus and a church family to grow with. Wherever you are on your journey, you’re welcome here.</p>
          </div>
        </section>

        <section className="pastor-welcome-section" aria-labelledby="pastor-welcome-title">
          <div className="pastor-welcome-shape" aria-hidden="true" />
          <div className="page-shell pastor-welcome-grid">
            <div className="pastor-welcome-heading home-pastor-heading">
              <div className="home-pastor-portrait" data-motion="rise"><Image src={assetPath("/images/pastor-sudhir.jpg")} alt="Pastor Sudhir Basumatary, Founder and Lead Pastor of Anchor Church London" fill sizes="(max-width: 820px) 200px, 240px" /></div>
              <p>A welcome from</p>
              <h2 id="pastor-welcome-title">Pastor Sudhir</h2>
              <span>Founder and Lead Pastor</span>
            </div>
            <div className="pastor-welcome-copy" data-motion="rise">
              <p>Welcome to Anchor Church London. My prayer is that you will discover the hope of Jesus and find a church family where you can grow in faith and build meaningful friendships. Whether you are exploring faith or looking for a church home, your questions are welcome. Join us this Sunday—I look forward to meeting you.</p>
              <p className="pastor-welcome-signature">Pastor Sudhir Basumatary</p>
              <Link className="cnbc-text-link" href="/visit">Plan Your Visit →</Link>
            </div>
          </div>
        </section>

        <section className="interest-heading">
          <div className="interest-shape" aria-hidden="true" />
          <div><h2 data-motion="rise">Take your <strong>next step.</strong></h2><p>Bring your questions, build friendships, and discover ways to participate in church life. We would love to help you find your next step.</p></div>
        </section>

        <section className="interest-section" aria-label="Explore Anchor Church">
          <div className="interest-grid page-shell">
            {interests.map((item) => (
              <Link className="interest-card" data-motion="rise" href={item.href} key={item.title}>
                <InterestIcon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <MissionTicker />

        <section className="mission-section">
          <div className="mission-shape mission-shape-one" aria-hidden="true" />
          <div className="mission-shape mission-shape-two" aria-hidden="true" />
          <div className="mission-content">
            <h2>Come as you are.<strong>Join us this Sunday.</strong></h2>
            <div className="mission-copy">
              <p>Come as you are. Our Sunday service runs from 10:45 a.m. to 12:30 p.m., and parking is available at the rear of the building. We look forward to meeting you.</p>
              <p>{church.venue}<br />{church.street}<br />{church.city}</p>
            </div>
            <p className="mission-signature">Anchor Church London</p>
            <div className="mission-actions">
              <Link className="cnbc-button" href="/visit">Plan Your Visit</Link>
              <a className="cnbc-text-link" href={church.mapUrl} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
