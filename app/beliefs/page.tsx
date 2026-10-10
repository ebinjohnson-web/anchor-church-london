import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { enquiryEmail } from "../lib/enquiries";

export const metadata: Metadata = {
  title: "What We Believe",
  description: "Explore the Christian beliefs that shape worship, discipleship, and life together at Anchor Church London.",
};
const beliefs = [["The Bible", "Scripture is God’s trustworthy Word and our authority for belief and daily life."], ["God", "There is one God, eternally Father, Son, and Holy Spirit."], ["Jesus", "Jesus is fully God and fully human. He lived without sin, died for our sins, rose bodily, and will return."], ["The Holy Spirit", "The Spirit brings new life, helps believers grow in holiness, and equips them to serve."], ["Salvation", "We are reconciled to God by His grace through repentance and faith in Jesus, rather than by earning His acceptance."], ["The Church", "Believers gather under Christ’s authority for worship, discipleship, fellowship, and mission."], ["Baptism and Communion", "Believer’s baptism by immersion expresses faith in Christ; the Lord’s Supper remembers His saving death."], ["Christian Living", "Following Jesus calls us to love others, pursue holiness, practise generosity, and share the gospel."], ["Our Hope", "Jesus will return, raise the dead, judge justly, and bring His people into everlasting life with Him."]];
export default function BeliefsPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="beliefs-page">
    <PageHero index="OUR FAITH" label="What we believe" title={<>Anchored<br /><em>in Jesus.</em></>} intro="The Christian beliefs that shape our life together." />
    <section className="content-section page-shell" aria-labelledby="beliefs-title">
      <p className="kicker"><span /> Our beliefs</p><h2 id="beliefs-title">What we believe</h2>
      <div className="belief-summary">{beliefs.map(([title,copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <div className="content-actions"><Link className="belief-button" href="/next-steps#explore-jesus">Explore Jesus</Link><a className="belief-button belief-button-outline" href={enquiryEmail("Questions about our beliefs")}>Ask About Our Beliefs</a></div>
      <p className="enquiry-note">Ask About Our Beliefs opens an email draft. Review it and send it from your email app.</p>
    </section>
  </main><Footer /></>;
}
