import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactComposer from "../components/ContactComposer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Anchor Church London or get directions for your visit.",
};

const mapUrl = "https://www.google.com/maps/search/?api=1&query=2179%20Highbury%20Ave%20N%2C%20London%2C%20ON%20N5X%204N4%2C%20Canada";

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <PageHero
          index="05 / 05"
          label="Contact"
          title={<>Let’s start a<br /><em>conversation.</em></>}
          intro="Questions about visiting or church life? We would be glad to hear from you."
        />

        <section className="contact-layout page-shell">
          <div className="contact-details reveal">
            <p className="kicker"><span /> Reach out</p>
            <h2>We would love<br />to hear from <em>you.</em></h2>
            <div className="contact-method"><span>Email</span><a href="mailto:anchorchurchlc1@gmail.com">anchorchurchlc1@gmail.com ↗</a></div>
            <div className="contact-method"><span>Location</span><a href={mapUrl} target="_blank" rel="noreferrer">2179 Highbury Ave N<br />London, ON N5X 4N4 ↗</a></div>
            <div className="contact-method"><span>Website</span><a href="https://anchorchurchlondonca.com">anchorchurchlondonca.com ↗</a></div>
          </div>
          <div className="contact-form-wrap reveal">
            <p>Send a message</p>
            <ContactComposer />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
