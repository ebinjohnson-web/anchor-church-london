import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import BaptismPhotoStack from "../components/BaptismPhotoStack";
import { baptismPhotos } from "../lib/baptism-photos";
import { enquiryEmail } from "../lib/enquiries";

export const metadata: Metadata = {
  title: "Next Steps — Your Journey of Faith",
  description: "Explore Jesus, baptism, membership, Bible studies, and serving with Anchor Church London.",
};
const steps = [
  {
    id: "baptism", title: "Baptism", subtitle: "A Public Declaration of Faith",
    copy: [
      "Baptism is an important step of faith and obedience to Jesus Christ. Through immersion in water, believers publicly declare their faith in Him, symbolizing His death, burial, and resurrection and the new life we receive through Him.",
      "At Anchor Church London, we celebrate baptism as a meaningful step in the journey of following Jesus.",
      "Whether you are ready to be baptized or simply have questions about its meaning, we would love to guide you.",
    ], scripture: "Romans 6:3–4 | Matthew 28:19–20", action: "Ask About Baptism", topic: "Baptism",
  },
  {
    id: "membership", title: "Membership", subtitle: "Belonging, Growing, and Serving Together",
    copy: [
      "Church membership is more than attending Sunday services. It is a commitment to belong to a local church family, grow as disciples of Jesus Christ, care for one another, and participate together in God's mission.",
      "At Anchor Church London, we value meaningful relationships, biblical teaching, prayer, and serving together as one body in Christ.",
      "Whether you are exploring membership or considering Anchor Church as your spiritual home, we would love to connect with you and guide you through the membership process.",
    ], scripture: "1 Corinthians 12:12–27 | Hebrews 10:24–25", action: "Ask About Membership", topic: "Membership",
  },
  {
    id: "groups", title: "Grow With Others", subtitle: "Growing in Faith. Learning Together.",
    copy: [
      "Following Jesus is a lifelong journey, and we grow stronger when we walk together.",
      "At Anchor Church London, we encourage spiritual growth through Bible study, prayer, meaningful conversations, and supportive relationships. We welcome thoughtful questions as we explore Scripture and learn to apply God's Word in everyday life.",
      "Whether you are new to faith or seeking to grow deeper, we invite you to connect, learn, and grow with us.",
    ], scripture: "Acts 2:42 | Colossians 3:16", action: "Explore Bible Studies & Small Groups", topic: "Groups",
  },
];
const ministries = [
  { title: "Worship & Music", copy: "Use your musical and creative gifts to help lead our church family in meaningful worship." },
  { title: "Children & Families", copy: "Help create a safe, caring, and engaging environment where children and families can discover God's love and grow in faith." },
  { title: "Welcome & Hospitality", copy: "Help visitors and members feel welcomed, valued, and connected through hospitality, fellowship, and practical support." },
  { title: "Media & Technology", copy: "Support worship services and church communication through sound, presentations, photography, video, and digital media." },
  { title: "Outreach & Community Care", copy: "Participate in sharing the hope of Jesus through community engagement, compassionate service, and practical support for others." },
];
export default function NextStepsPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="next-steps-page next-steps-revised">
    <PageHero index="NEXT STEPS" label="Your Journey of Faith" title={<>Everyone Has a Next Step.<br /><em>Take Yours With Us.</em></>} intro="Whether you are exploring Christianity, growing in your faith, or looking for a church family, we welcome you to take your next step with us." />
    <nav className="section-links page-shell" aria-label="Next Steps sections">
      <a href="#explore-jesus">Explore Jesus</a><a href="#baptism">Baptism</a><a href="#membership">Membership</a><a href="#groups">Groups</a><a href="#serving">Serve</a>
    </nav>
    <p className="next-steps-introduction page-shell">At Anchor Church London, we believe faith is a lifelong journey of knowing Jesus, growing together, and participating in God&apos;s Kingdom.</p>
    <section className="content-section page-shell" id="explore-jesus">
      <div className="next-step-row"><div className="next-step-heading reveal"><p className="kicker"><span /> 01</p><h2>Explore Jesus</h2><p className="next-step-subtitle">Discover the Hope and Good News of Jesus Christ</p></div>
      <div className="next-step-copy reveal">
        <p>Christian faith begins with God&apos;s love. He created us to know Him, but sin separates us from Him.</p>
        <p>Jesus Christ, the Son of God, came into the world, died for our sins, and rose again so that we may receive forgiveness, new life, and a restored relationship with God.</p>
        <p>Salvation is God&apos;s gift of grace, received through faith in Jesus Christ—not something we can earn. Through the Holy Spirit, we are empowered to grow in faith and follow Him in everyday life.</p>
        <p className="scripture-reference">John 3:16–17 | Romans 3:23–24 | 1 Corinthians 15:3–4 | Ephesians 2:8–10</p>
        <h3>Your Questions Are Welcome</h3><p>Exploring faith often begins with questions. Whether you are curious about Jesus, searching for meaning, or seeking a deeper understanding of Scripture, we would love to walk alongside you.</p>
        <a className="cnbc-button" href={enquiryEmail("Exploring Jesus")}>Talk With Someone About Jesus</a>
        <p className="enquiry-note">Enquiry buttons open your email app. Review your message and press Send there.</p>
      </div></div>
    </section>
    {steps.map((step, index) => <section className="content-section page-shell" id={step.id} key={step.id}>
      <div className="next-step-row"><div className="next-step-heading reveal"><p className="kicker"><span /> 0{index + 2}</p><h2>{step.title}</h2><p className="next-step-subtitle">{step.subtitle}</p></div>
      <div className="next-step-copy reveal">{step.copy.map(copy => <p key={copy}>{copy}</p>)}<p className="scripture-reference">{step.scripture}</p><a className="cnbc-button" href={enquiryEmail(step.topic)}>{step.action}</a></div></div>
      {step.id === "baptism" && <BaptismPhotoStack photos={baptismPhotos} />}
    </section>)}
    <section className="content-section page-shell" id="serving">
      <div className="next-step-row"><div className="next-step-heading reveal"><p className="kicker"><span /> 05</p><h2>Serve With Us</h2><p className="next-step-subtitle">Serving God. Making a Difference.</p></div>
      <div className="next-step-copy reveal"><p>We believe everyone has unique, God-given gifts and abilities that can be used to serve others, strengthen our church family, and participate in God&apos;s Kingdom.</p><p>At Anchor Church London, we encourage individuals to discover their gifts, grow in faith, and serve meaningfully through our ministries and community initiatives.</p><p>Whether you have experience or are simply willing to learn, we welcome you to explore opportunities to serve and grow together.</p><p className="scripture-reference">1 Peter 4:10 | Galatians 5:13</p></div></div>
      <div className="serving-areas"><h3>Discover Where You Can Serve</h3><div className="serving-card-grid">{ministries.map((ministry, index) => <article className="serving-area-card reveal" key={ministry.title}><span className="serving-card-number" aria-hidden="true">0{index + 1}</span><h4>{ministry.title}</h4><p>{ministry.copy}</p></article>)}</div></div>
      <div className="serving-invitation reveal"><h3>Your Gifts Can Make a Difference</h3><p>Serving is more than volunteering. It is an opportunity to grow spiritually, build meaningful relationships, and participate in God&apos;s work.</p><Link className="cnbc-button" href="/opportunities">Explore Serving Opportunities <span aria-hidden="true">→</span></Link></div>
    </section>
  </main><Footer /></>;
}
