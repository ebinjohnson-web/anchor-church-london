import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { enquiryEmail } from "../lib/enquiries";

export const metadata: Metadata = {
  title: "Prayer and Pastoral Care",
  description: "Reach out to Anchor Church London for prayer, spiritual encouragement, and a conversation with the pastoral team.",
};
export default function PrayerCarePage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="prayer-care-page">
    <PageHero index="PRAYER AND CARE" label="You are welcome here" title={<>You do not have to<br /><em>carry every burden alone.</em></>} intro="If you are facing a difficult season, grieving a loss, or looking for spiritual encouragement, we invite you to reach out." />
    <section className="content-section page-shell" aria-labelledby="care-title">
      <div className="content-columns"><div><p className="kicker"><span /> Reach out</p><h2 id="care-title">Prayer and encouragement</h2><p>Our church would be glad to pray with you and discuss what pastoral support may be available.</p><p>To request prayer or a conversation, contact the church and ask to speak with the pastoral team. Before sharing sensitive details, ask who will receive your message and how it will be handled.</p><div className="content-actions"><a className="care-button" href={enquiryEmail("Request prayer contact")}>Request Prayer</a><a className="care-button care-button-outline" href={enquiryEmail("Request pastoral contact")}>Request Pastoral Contact</a></div><p className="enquiry-note">These links open a draft to the church’s general email address. Ask the team to contact you; you can share personal details directly with them. Review the draft and send it from your email app.</p></div>
      <div><h3>Speak with the pastoral team</h3><p>Request a conversation about faith, a personal concern, or a difficult season. Include your preferred contact method and a suitable time to reach you. A member of the team will respond as availability allows.</p><aside className="care-urgent" aria-labelledby="care-urgent-title"><h3 id="care-urgent-title">A note about urgent needs</h3><p>This inbox is not monitored continuously and is not an emergency service. If someone is in immediate danger, call 911.</p></aside></div></div>
    </section>
    <section className="content-section page-shell care-details" aria-labelledby="care-questions"><h2 id="care-questions">Care, with discretion.</h2><div className="visitor-faq">
      <details><summary>Sharing a prayer request</summary><p>Tell us as much or as little as you feel comfortable sharing. Please avoid including another person’s private information without their permission.</p><p>Speak with the pastoral team about whether your request is for them only or may be shared with a designated prayer team. Prayer requests will not be published online without your separate permission.</p></details>
      <details><summary>What pastoral care means</summary><p>Pastoral care may include prayer, spiritual conversation, and encouragement from Scripture. If your needs call for professional services, we can discuss appropriate next steps and available community resources.</p></details>
      <details><summary>Privacy and discretion</summary><p>We seek to handle personal concerns with care. We cannot promise absolute confidentiality, including where safety or reporting duties require action. Before you share sensitive details, you may ask how your information will be handled and who will have access to it.</p></details>
    </div></section>
  </main><Footer /></>;
}
