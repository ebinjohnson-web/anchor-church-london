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

const servingAreas = [
  "Worship and music",
  "Hospitality",
  "Children’s and youth activities",
  "Community outreach",
  "Communications and social media",
  "Photography and video",
  "Event support",
  "Administration",
];

const emailNote = "This opens an email draft. Review it and send it from your email app.";

export default function OpportunitiesPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="opportunities-page">
        <PageHero
          index="PARTICIPATE"
          label="Opportunities and internships"
          title={<>Participate.<br /><em>Make a difference.</em></>}
          intro="Whether you would like to volunteer, develop your skills, or explore an internship, we would love to hear from you."
        />
        <section className="content-section page-shell" aria-labelledby="serving-title">
          <p className="kicker"><span /> Find your place</p>
          <h2 id="serving-title">Find Your Place to Serve</h2>
          <div className="content-columns">
            <div>
              <p>Anchor Church London offers opportunities to participate and engage in different areas of church life. Whether you would like to volunteer, develop your skills, or explore an internship, we would love to hear from you.</p>
              <p className="serving-list-intro">Areas of interest may include:</p>
              <ul className="serving-areas">
                {servingAreas.map((area) => <li key={area}>{area}</li>)}
              </ul>
              <p>Tell us about your interests, experience, and availability so we can discuss suitable opportunities.</p>
              <a className="opportunity-button" href={enquiryEmail("Serving")}>Ask About Serving</a>
              <p className="enquiry-note">{emailNote}</p>
            </div>
            <div id="internships" className="internship-panel">
              <h3>Explore an internship</h3>
              <p>If you are a student or would like practical experience in a church setting, contact us about potential internships.</p>
              <p className="internship-list-intro">Tell us about your:</p>
              <ul className="internship-details">
                <li>Area of study or interest</li>
                <li>Learning goals</li>
                <li>Preferred dates</li>
                <li>Placement requirements</li>
              </ul>
              <p>Opportunities depend on current needs and available supervision.</p>
              <a className="opportunity-button" href={enquiryEmail("Internships")}>Enquire About Internships</a>
              <p className="enquiry-note">{emailNote}</p>
            </div>
          </div>
          <div className="opportunities-closing">
            <Link className="opportunity-button opportunity-button-outline" href="/next-steps">Explore All Next Steps</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
