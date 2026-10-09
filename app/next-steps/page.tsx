import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { enquiryEmail } from "../lib/enquiries";

export const metadata: Metadata = {
  title: "Explore Faith and Get Connected",
  description: "Explore faith in Jesus and ask about baptism, membership, groups, and serving at Anchor Church London.",
};
const steps = [
  { id: "baptism", title: "Baptism", copy: ["Baptism is a public expression of faith in Jesus Christ. Through immersion in water, a believer identifies with Jesus’ death, burial, and resurrection, celebrating the new life He gives.", "If you have begun following Jesus or would like to understand baptism, contact us. We can explain its meaning and the preparation involved."], scripture: "Romans 6:3–4", action: "Ask About Baptism" },
  { id: "membership", title: "Membership", copy: ["Church membership is a commitment to follow Jesus alongside a local church family. It involves sharing in worship, growing in faith, caring for one another, and participating in the church’s mission.", "If you are considering Anchor as your church home, we would be glad to discuss our beliefs, expectations, and membership process with you."], action: "Ask About Membership" },
  { id: "groups", title: "Grow with others", copy: ["Faith grows as we learn Scripture, pray, and practise what we learn. Ask about current Bible studies, small groups, and opportunities for learning together."], action: "Ask About Groups" },
  { id: "serving", title: "Serve with us", copy: ["Your time and abilities can encourage someone else. Ask about opportunities in hospitality, worship, practical support, media, and other areas of church life. We will help you understand the role and any preparation required."], action: "Ask About Serving" },
];
export default function NextStepsPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="next-steps-page">
    <PageHero index="NEXT STEPS" label="Explore Jesus and get connected" title={<>Bring your questions.<br /><em>Take your next step.</em></>} intro="Explore faith in Jesus, build friendships, and find your place in church life." />
    <nav className="section-links page-shell" aria-label="Next Steps sections"><a href="#explore-jesus">Explore Jesus</a>{steps.map(step => <a href={`#${step.id}`} key={step.id}>{step.id === "groups" ? "Groups" : step.id === "serving" ? "Serve" : step.title}</a>)}<Link href="/opportunities">Opportunities</Link></nav>
    <section className="content-section page-shell" id="explore-jesus">
      <p className="kicker"><span /> Explore Jesus</p><h2>What is the good news of Jesus?</h2>
      <div className="content-columns"><div>
        <p>Christian faith begins with God’s love and His invitation to be reconciled to Him. God created us to know Him, but sin has broken that relationship and affects the way we live with one another.</p>
        <p>Jesus Christ, the Son of God, entered our world, died for our sins, and rose again. Through Him, forgiveness and new life are offered to everyone who turns to God and trusts in Jesus. We receive this gift by grace; we cannot earn it through religious activity or good deeds.</p>
        <p>Following Jesus means learning to trust Him as Lord, receiving His forgiveness, and growing in a new way of life with the help of the Holy Spirit.</p>
        <p className="scripture-reference">John 3:16–17; Romans 3:23–24; 1 Corinthians 15:3–4; Ephesians 2:8–10.</p>
      </div><div><h3>Bring your questions</h3><p>You may be wondering whether God is real, what the Bible means, or how faith relates to your life. We would welcome a conversation. You do not need to pretend that you have everything settled.</p><a className="cnbc-button" href={enquiryEmail("Exploring Jesus")}>Talk With Someone About Jesus</a><p className="enquiry-note">Enquiry buttons open your email app with the subject filled in. Review your message and press Send there.</p></div></div>
    </section>
    <div className="next-step-sections">{steps.map(step => <section className="content-section page-shell" id={step.id} key={step.id}><div className="content-columns"><div><h2>{step.title}</h2></div><div>{step.copy.map(copy => <p key={copy}>{copy}</p>)}{step.scripture && <p className="scripture-reference">{step.scripture}</p>}<a className="cnbc-button" href={enquiryEmail(step.title)}>{step.action}</a></div></div></section>)}</div>
    <section className="simple-cta"><div className="page-shell"><p className="kicker light-kicker"><span /> Participate</p><h2>Explore opportunities<br /><em>to serve and learn.</em></h2><Link className="button button-light" href="/opportunities">Opportunities and Internships →</Link></div></section>
  </main><Footer /></>;
}
