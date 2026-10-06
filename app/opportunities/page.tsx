import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { enquiryEmail } from "../lib/enquiries";

export const metadata: Metadata = {
  title: "Opportunities and Internships",
  description: "Explore ways to volunteer, develop your skills, or enquire about potential internships at Anchor Church London.",
};
export default function OpportunitiesPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">
    <PageHero index="PARTICIPATE" label="Opportunities and internships" title={<>Participate.<br /><em>Make a difference.</em></>} intro="Whether you would like to volunteer, develop your skills, or explore an internship, we would love to hear from you." />
    <section className="content-section page-shell"><p className="kicker"><span /> Find your place</p><h2>Participate and make a difference</h2><div className="content-columns"><div><p>Anchor Church London offers opportunities to participate and engage in different areas of church life. Whether you would like to volunteer, develop your skills, or explore an internship, we would love to hear from you.</p><p>Areas of interest may include worship and music, hospitality, children’s and youth activities, community outreach, communications and social media, photography and video, event support, and administration. Tell us about your interests, experience, and availability so we can discuss suitable opportunities.</p><a className="cnbc-button" href={enquiryEmail("Serving")}>Ask About Serving</a></div><div id="internships"><h3>Explore an internship</h3><p>If you are a student or would like practical experience in a church setting, contact us about potential internships. Tell us your area of study or interest, learning goals, preferred dates, and placement requirements. Opportunities depend on current needs and available supervision.</p><a className="cnbc-button" href={enquiryEmail("Internships")}>Enquire About Internships</a></div></div></section>
    <section className="pastor-welcome-section"><div className="page-shell pastor-welcome-grid"><div className="pastor-welcome-heading"><p>Take your next step</p><h2>Get in touch</h2></div><div className="pastor-welcome-copy"><p>Tell us how you would like to participate, and share your interests and availability.</p><p className="enquiry-note">The buttons open your email app with the enquiry subject filled in. Review your message and press Send there.</p><Link className="cnbc-text-link" href="/next-steps">Explore All Next Steps →</Link></div></div></section>
  </main><Footer /></>;
}
