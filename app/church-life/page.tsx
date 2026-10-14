import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/assets";
import { getChurchLifeMedia } from "../lib/church-life-media";

export const metadata: Metadata = {
  title: "Church Life",
  description: "More than a gathering: a family in Christ. Discover ministries, prayer and care, sermons, and events with Anchor Church London.",
};
export default function ChurchLifePage() {
  const media = getChurchLifeMedia();
  const areas = [
    { title: "Ministries", copy: "Discover opportunities to grow spiritually, develop your gifts, and participate in the life and mission of our church.", href: "/ministries", action: "Explore Ministries", photo: media.ministries },
    { title: "Prayer & Care", copy: "Life brings both joys and challenges. We are here to pray with you, encourage you, and walk alongside you through different seasons of life.", href: "/prayer-care", action: "Explore Prayer & Care", photo: media.care },
    { title: "Sermons & Messages", copy: "Explore Christ-centred, biblically grounded sermons that encourage thoughtful reflection, deepen our understanding of Scripture, and inspire us to live out our faith in everyday life.", href: "/messages", action: "Watch Sermons", photo: media.messages },
    { title: "Events & Stories", copy: "Celebrate moments of faith, fellowship, and community through church gatherings, special events, and stories from our church family.", href: "/events", action: "Explore Events & Stories", photo: media.events },
  ];
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="church-life-page church-life-revised">
    <PageHero index="LIFE TOGETHER" label="Church Life" title={<>More Than a Gathering.<br /><em>A Family in Christ.</em></>} intro="We Worship Together. We Grow Together. We Serve Together." />
    <section className="church-family-intro page-shell"><div className="reveal"><p className="kicker"><span /> Our Church Family</p><h2>More Than a Gathering.<br /><em>A Family in Christ.</em></h2></div><div className="church-family-copy reveal"><p>At Anchor Church London, we believe church is more than a Sunday service. It is a community where people from different generations, cultures, and backgrounds come together to worship God, grow in biblical faith, build meaningful friendships, and care for one another.</p><p>We share life&apos;s joys and challenges, encourage one another, and seek to live out our faith in everyday life.</p><p className="church-family-statement">We Worship Together. We Grow Together. We Serve Together.</p><p className="scripture-reference"><em>Acts 2:42–47 | Hebrews 10:24–25</em></p></div></section>
    {media.gallery.length > 0 && <section className="church-family-photo-gallery page-shell" aria-label="Photographs of our church community">{media.gallery.map(photo => <div className="church-family-photo reveal" key={photo.src}><Image src={assetPath(photo.src)} alt={photo.alt} fill sizes="(max-width: 600px) 45vw, (max-width: 900px) 45vw, 25vw" /></div>)}</section>}
    <section className="church-family-areas page-shell" aria-labelledby="church-life-heading"><div className="reveal"><p className="kicker"><span /> Life Together</p><h2 id="church-life-heading">Find Your Place<br /><em>in Our Church Family.</em></h2></div><div className="church-family-card-grid">{areas.map((area, index) => <article className="church-family-card reveal" key={area.href}>{area.photo && <div className="church-family-card-photo"><Image src={assetPath(area.photo.src)} alt={area.photo.alt} fill sizes="(max-width: 700px) 95vw, 45vw" /></div>}<div className="church-family-card-body"><p className="church-family-card-index">0{index + 1}</p><h3>{area.title}</h3><p>{area.copy}</p><Link className="church-life-button church-life-button-outline" href={area.href}>{area.action} <span aria-hidden="true">→</span></Link></div></article>)}</div></section>
    <section className="church-life-closing page-shell reveal"><div><h2>Grow in Faith.<br /><em>Build Meaningful Relationships.</em></h2><p>Whether you are new to Christianity, new to London, or looking for a church family, there is a place for you at Anchor Church London.</p></div><Link className="church-life-button" href="/next-steps">Take Your Next Step <span aria-hidden="true">→</span></Link></section>
  </main><Footer /></>;
}
