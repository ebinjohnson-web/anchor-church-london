import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import EventYearGallery from "../components/EventYearGallery";
import { getEventAlbums, getAnniversaryPoster } from "../lib/event-photos";
import { assetPath } from "../lib/assets";
import { church } from "../lib/church";
import { enquiryEmail } from "../lib/enquiries";

export const metadata: Metadata = {
  title: "Events and Stories",
  description: "Celebrate Anchor Church London's fifth anniversary on November 1, 2026 at 2:00 p.m., and explore photo galleries of life in our church family.",
};
export default function EventsPage() {
  const albums = getEventAlbums();
  const poster = getAnniversaryPoster();
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="events-page events-stories-revised">
    <PageHero index="LIFE TOGETHER" label="Events and Stories" title={<>Celebrate.<br /><em>Remember. Belong.</em></>} intro="Gather with our Anchor Church family and discover the moments that bring us together." />
    <section className="content-section page-shell" aria-labelledby="anniversary-heading">
      <div className="anniversary-heading reveal"><p className="kicker"><span /> You Are Invited</p><h2 id="anniversary-heading">Anchor Church&apos;s<br /><em>5th Anniversary</em></h2></div>
      <div className="anniversary-details reveal"><dl><div><dt>Date</dt><dd><time dateTime="2026-11-01">November 1, 2026</time></dd></div><div><dt>Time</dt><dd><time dateTime="2026-11-01T14:00:00-05:00">2:00 p.m.</time></dd></div><div><dt>Location</dt><dd>530 Clarke Road, Unit 1<br />London, ON N5V 2C7</dd></div></dl><div className="anniversary-actions"><a className="event-button" href={church.mapUrl} target="_blank" rel="noreferrer">Get Directions <span aria-hidden="true">↗</span></a><a className="event-button event-button-outline" href={enquiryEmail("5th Anniversary Celebration")}>Contact the Church</a></div></div>
      <div className="anniversary-layout"><div className="anniversary-invitation reveal"><h3>Come celebrate with our Anchor Church family!</h3><p>For five years, we have witnessed God&apos;s grace, provision, and faithfulness — and this November, we&apos;re gathering together to celebrate!</p><p>Whether you&apos;ve been with us from the beginning, joined us along the way, or will be visiting for the first time, there&apos;s room for you.</p><p className="anniversary-join">Join us for Anchor Church&apos;s 5th Anniversary!</p><div className="anniversary-theme"><p className="anniversary-theme-label">ROOM FOR MORE</p><p>Thus Far by Grace,<br /><em>Forward by Faith.</em></p><span>Isaiah 54:2</span></div></div>
      <div className="anniversary-feature reveal">{poster && <div className="anniversary-poster"><Image src={assetPath(poster)} alt="Anchor Church fifth anniversary invitation: Room for More. Thus Far by Grace, Forward by Faith." fill sizes="(max-width: 820px) 95vw, 50vw" /></div>}</div></div>
      <p className="anniversary-closing reveal">Invite someone and come expectant. We can&apos;t wait to celebrate with you!</p>
    </section>
    {albums.length > 0 && <section className="event-memories-section" aria-labelledby="memories-heading"><div className="page-shell"><div className="event-memories-intro reveal"><p className="kicker"><span /> Our Shared Story</p><h2 id="memories-heading">Life in Our<br /><em>Church Family.</em></h2><p>Explore our gatherings, celebrations, and moments together, year by year.</p></div><EventYearGallery albums={albums} /></div></section>}
  </main><Footer /></>;
}
