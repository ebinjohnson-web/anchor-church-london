import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { enquiryEmail } from "../lib/enquiries";

export const metadata: Metadata = {
  title: "Events and Stories",
  description: "Connect with Anchor Church London and ask about opportunities to worship, learn, serve, and gather with our church family.",
};
export default function EventsPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">
    <PageHero index="LIFE TOGETHER" label="Events and stories" title={<>Gather<br /><em>with us.</em></>} intro="Find opportunities to worship, learn, serve, and connect with our church family." />
    <section className="content-section page-shell"><div className="content-columns"><div><h2>Connect with our church family</h2><p>Ask the church about upcoming gatherings, including dates, times, location, and any registration arrangements.</p><a className="cnbc-button" href={enquiryEmail("Upcoming events")}>Ask About Upcoming Events →</a><p className="enquiry-note">This opens a draft in your email app.</p></div><div><h3>Life in our church family</h3><p>Church life includes gathering for worship and learning to follow Jesus throughout the week. We would love to help you find a way to connect.</p><div className="content-actions"><Link className="cnbc-text-link" href="/church-life">Explore Church Life →</Link><Link className="cnbc-text-link" href="/visit">Plan Your Visit →</Link></div></div></div></section>
  </main><Footer /></>;
}
