import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description: "Serving together and growing together: meet the people who serve, lead, and contribute to Anchor Church London.",
};
export default function MeetOurTeamPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="meet-team-page">
    <PageHero index="ABOUT US" label="Meet Our Team" title={<>Meet<br /><em>Our Team.</em></>} intro="Serving Together. Growing Together." />
    <section className="meet-team-intro page-shell"><div className="reveal"><p>At Anchor Church London, ministry is a shared calling. We are grateful for the dedicated individuals and families who faithfully serve, lead, and contribute to our church community.</p></div><div className="meet-team-coming-soon reveal"><p className="kicker"><span /> Our Church Team</p><h2>Team Profiles Coming Soon</h2><p>We will add photographs and individual profiles as they become available.</p></div></section>
  </main><Footer /></>;
}
