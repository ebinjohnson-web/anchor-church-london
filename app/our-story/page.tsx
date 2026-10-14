import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FaithJourneyGallery from "../components/FaithJourneyGallery";
import { faithJourneyPhotos } from "../lib/faith-journey-photos";

export const metadata: Metadata = {
  title: "Our Journey of Faith",
  description: "Follow Anchor Church London’s journey from a family gathering in November 2021 to a new chapter in 2026.",
};

const milestones = [
  [
    "2021 — A Family Gathering",
    "Our journey began in a home with prayer, worship, and fellowship."
  ],
  [
    "Growing Together — Basement",
    "Continuing to gather, study Scripture, and build relationships."
  ],
  [
    "A Season of Faith — Garage",
    "Persevering in worship, discipleship, and community."
  ],
  [
    "2026 — A New Chapter",
    "Celebrating five years and moving to East West Event Centre."
  ]
] as const;

export default function OurStoryPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header />
    <main id="main" className="our-story-page journey-photo-page">
      <PageHero index="OUR STORY" label="Our Journey of Faith" title={<>Growing together.<br /><em>Through every season.</em></>} intro="From a family gathering in a home to a new chapter at East West Event Centre, God’s faithfulness has sustained our church family." />
      <section className="journey-section page-shell" aria-labelledby="journey-title">
        <h2 id="journey-title">Our Journey of Faith</h2>
        <div className="journey-visual-layout">
          <div className="journey-chapters">
            <p className="journey-eyebrow">Through every season</p>
            <ol className="journey-timeline">
              {milestones.map(([title, copy], index) => <li className="reveal" key={title}><span className="journey-number" aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
            </ol>
          </div>
          <FaithJourneyGallery photos={faithJourneyPhotos} />
        </div>
        <Link className="about-content-button about-content-button-outline" href="/about#meet-pastor">Meet Our Pastor &amp; Family</Link>
      </section>
    </main><Footer /></>;
}
