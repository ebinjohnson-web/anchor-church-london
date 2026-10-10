import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { enquiryEmail } from "../lib/enquiries";

export const metadata: Metadata = {
  title: "Messages",
  description: "Explore Bible teaching and ask about the latest message or online service from Anchor Church London.",
};
export default function MessagesPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="messages-page">
    <PageHero index="MESSAGES" label="Bible teaching" title={<>Learn from<br /><em>Scripture.</em></>} intro="Explore Bible teaching from Anchor Church London and reflect on what following Jesus means in daily life." />
    <section className="content-section page-shell"><div className="content-columns"><div><h2>Grow through God’s Word</h2><p>Whether you missed a Sunday or want to revisit a message, we would be glad to help you connect with our Bible teaching.</p><p>Contact the church for the latest message or the current online service link.</p><a className="message-button" href={enquiryEmail("Latest message and online service")}>Ask About the Latest Message</a><p className="enquiry-note">This opens an email draft. Review it and send it from your email app.</p></div><div><div className="message-reflection"><h3>Reflect on the message</h3><ol className="reflection-prompts"><li>What does this passage reveal about God?</li><li>What challenges or encourages you?</li><li>What step of obedience could you take this week?</li></ol></div><Link className="message-button message-button-outline" href="/visit">Join Us on Sunday</Link></div></div></section>
  </main><Footer /></>;
}
