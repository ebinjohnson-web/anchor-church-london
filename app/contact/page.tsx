import { church } from "../lib/church";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactComposer from "../components/ContactComposer";

export const metadata: Metadata = {
  title: "Contact and Directions",
  description: "Get in touch with Anchor Church London for visit enquiries, church information, prayer, or pastoral contact.",
};


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
          intro="Whether you have a question about visiting, want to learn more about faith, or would like to connect with the church, send us a message."
        />

        <section className="contact-layout page-shell">
          <div className="contact-details reveal">
            <p className="kicker"><span /> Reach out</p>
            <h2>We would love<br />to hear from <em>you.</em></h2>
            <div className="contact-method"><span>Email</span><a href="mailto:anchorchurchlc1@gmail.com">anchorchurchlc1@gmail.com ↗</a></div>
            <div className="contact-method"><span>Location</span><a href={church.mapUrl} target="_blank" rel="noreferrer">{church.venue}<br />{church.street}<br />{church.city} ↗</a></div>
            <div className="contact-method"><span>Sunday gathering</span><p>{church.service}<br />{church.parking} {church.floor}</p></div>
            <div className="contact-method"><span>Website</span><a href="https://anchorchurchlondonca.com">anchorchurchlondonca.com ↗</a></div>
          </div>
          <div className="contact-form-wrap reveal">
            <p>Send a message</p>
            <p className="enquiry-note">This opens a draft in your email app. Review it and press Send there. If your message is urgent, do not rely on this page for an immediate response. For personal pastoral concerns, ask to speak with the pastoral team after the service.</p>
            <ContactComposer />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
