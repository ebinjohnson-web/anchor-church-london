import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/assets";
import { aboutCongregationPhoto } from "../lib/about-congregation-photo";

export const metadata: Metadata = {
  title: "Our Story and Leadership",
  description: "Learn about Anchor Church London, our journey of faith, Pastor Sudhir and family, and our mission and ministry partnerships.",
};

const values = [
  [
    "01",
    "Jesus at the Centre",
    "Jesus Christ is the foundation of our faith. Our worship, teaching, and daily lives are centred on who He is, what He has done, and His call to follow Him.",
    "Colossians 1:17–18"
  ],
  [
    "02",
    "Rooted in God's Word",
    "We value faithful biblical teaching, thoughtful questions, and a deeper understanding of Scripture, seeking to apply God's truth with wisdom and integrity in everyday life.",
    "2 Timothy 3:16–17"
  ],
  [
    "03",
    "Empowered by the Holy Spirit",
    "We believe the Holy Spirit dwells within believers, guides us into truth, transforms our character, and empowers us to live faithfully and participate in God's mission.",
    "John 14:26 | Acts 1:8"
  ],
  [
    "04",
    "A Life of Prayer",
    "We depend on God through prayer, seeking His wisdom, guidance, and strength while trusting Him in every season of life.",
    "Philippians 4:6–7"
  ],
  [
    "05",
    "A Caring Church Family",
    "We welcome individuals and families across generations, cultures, and backgrounds, building meaningful relationships, encouraging one another, and sharing life's joys and burdens.",
    "Acts 2:42–47 | Galatians 6:2"
  ],
  [
    "06",
    "Growing as Disciples",
    "We believe following Jesus is a lifelong journey of spiritual growth, transformed character, and faithful living. We encourage one another to grow in Christ beyond Sunday gatherings.",
    "Matthew 28:19–20 | Romans 12:2"
  ],
  [
    "07",
    "Serving God's Kingdom",
    "We participate in God's Kingdom mission by sharing the good news of Jesus Christ, serving our communities, and generously using our gifts, time, and resources to demonstrate God's love.",
    "Matthew 6:33 | 1 Peter 4:10"
  ]
] as const;

const partners = [
  {
    "name": "Southern Baptist Convention",
    "logo": "sbc.svg",
    "href": "https://www.sbc.net/",
    "dark": false
  },
  {
    "name": "Canadian National Baptist Convention",
    "logo": "cnbc.png",
    "href": "https://www.cnbc.ca/",
    "dark": true
  },
  {
    "name": "North American Mission Board",
    "logo": "namb.svg",
    "href": "https://www.namb.net/",
    "dark": true
  },
  {
    "name": "Gospel Trend Church — Toronto",
    "logo": "gospel-trend-toronto.jpg",
    "href": "https://www.facebook.com/thegospeltrendchurch/",
    "dark": false
  },
  {
    "name": "Church Planting Ministries Inc.",
    "logo": "cpmi.jpg",
    "href": "https://churchplanting.ca/",
    "dark": false
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="about-page about-pastor-update">
        <PageHero index="01 / 05" label="About Anchor Church" title={<>A family anchored<br /><em>in Christ.</em></>}
          intro="We worship God, grow together in Christ, and share His love and good news in London, Ontario, and beyond." />
        <section id="our-story" className="story-layout page-shell">
          <div className="story-sticky reveal">
            <p className="section-index">WHO WE ARE</p>
            <h2>A church family<br /><em>growing in faith.</em></h2>
          </div>
          <div className="story-body reveal">
            <p>Anchor Church London began in November 2021 as a small family gathering in a home, united by a desire to worship God, study His Word, and grow together in faith.</p>
            <p>What started in a house continued in a basement and later in a garage. Through each season, God&apos;s faithfulness sustained us as we grew together in prayer, biblical understanding, fellowship, and service.</p>
            <p>Now, as we celebrate our fifth anniversary in 2026, we are entering a new chapter—moving into a larger gathering space at East West Event Centre in London, Ontario.</p>
            <p>While our gathering place has changed, our heart remains the same: to know Jesus, grow as His disciples, build strong families, and participate in God&apos;s Kingdom by sharing His love and serving others.</p>
            <p>We believe the church is more than a building. It is a family of believers growing together in Christ and extending His hope to our community.</p>
            <Link className="about-content-button about-content-button-outline" href="/our-story">Our Journey of Faith</Link>
            <div className="about-purpose">
              <div><h3>Our Mission</h3><p>To help people know Jesus, grow as His disciples, and participate in God&apos;s Kingdom by sharing His love and serving others.</p></div>
              <div><h3>Our Vision</h3><p>A growing church family rooted in Scripture, strengthened by prayer, and serving our city and beyond with the hope of Jesus.</p></div>
            </div>
          </div>
        </section>
        <section className="about-image-band reveal">
          <Image src={assetPath(aboutCongregationPhoto.src)} alt="Anchor Church London congregation gathered together" width={aboutCongregationPhoto.width} height={aboutCongregationPhoto.height} sizes="(max-width: 820px) 95vw, 90vw" />
        </section>
        <section className="about-values page-shell">
          <div className="about-values-heading reveal">
            <p className="kicker"><span /> What Shapes Our Life</p>
            <h2>Rooted in Truth.<br /><em>Growing Together in Faith.</em></h2>
          </div>
          <div className="principle-list">
            {values.map(([number, title, copy, scripture]) => (
              <article className="principle reveal" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
                <p className="about-scripture">{scripture}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="pastor-welcome-section" aria-labelledby="meet-pastor">
          <div className="pastor-welcome-shape" aria-hidden="true" />
          <div className="page-shell pastor-welcome-grid about-pastor-grid">
            <div className="about-pastor-photo reveal">
              <Image src={assetPath("/images/pastor-sudhir-family.jpeg")} alt="Pastor Sudhir with his family" width={1121} height={1403} sizes="(max-width: 820px) 280px, 320px" />
            </div>
            <div className="pastor-welcome-heading reveal">
              <p>Meet Our Pastor</p><h2 id="meet-pastor">Pastor Sudhir <em className="about-family-label">&amp; Family</em></h2>
              <span>Founder &amp; Lead Pastor | Anchor Church London</span>
            </div>
            <div className="pastor-welcome-copy reveal">
              <p>For Pastor Sudhir, ministry is about more than leading a church—it is about walking alongside people, strengthening families, and helping individuals discover the transforming hope of Jesus Christ.</p>
              <p>Having made Canada his home in 2015, Sudhir founded Anchor Church London in November 2021, together with his family and a small group of friends and well-wishers who shared a desire to worship God, study His Word, and grow together in faith. What began as a humble family gathering in a home continued through seasons of meeting in a basement and later a garage. Some of those who were part of the early journey continue to faithfully worship, serve, and grow alongside the church family today.</p>
              <p>As Anchor Church celebrates its fifth anniversary in 2026 and moves into a larger gathering space, its heart remains unchanged: to build a Christ-centred community rooted in Scripture, strengthened by prayer, empowered by the Holy Spirit, and committed to participating in God&apos;s Kingdom.</p>
              <p>With a background in social work, counselling, human resources, and leadership development, Sudhir brings a passion for biblical teaching, thoughtful engagement with faith, and a deep commitment to the growth and well-being of individuals and families.</p>
              <p>Together with his family, he desires to see Anchor Church become a welcoming community where people across generations, cultures, and backgrounds can belong, ask meaningful questions, grow as disciples of Jesus, and live out their faith in everyday life.</p>
            </div>
          </div>
          <div className="page-shell about-personal-welcome reveal">
            <h3>A Personal Welcome</h3>
            <blockquote>
              <p>Thank you for taking the time to learn about Anchor Church London. My prayer is that you and your family will encounter the love of Jesus, discover the truth of God&apos;s Word, and find a community where you can belong and grow.</p>
              <p>Whether you are exploring Christianity, seeking a deeper understanding of Scripture, or looking for a church family, your questions are welcome, your journey matters, and there is a place for you here.</p>
              <p>My family and I look forward to welcoming you personally and walking alongside you in your journey of faith.</p>
            </blockquote>
            <p>With love and blessings,</p>
            <p className="about-welcome-signature"><strong><em>Pastor Sudhir &amp; Family</em></strong><br />Anchor Church London</p>
            <p className="about-anchor-verse">“We have this hope as an anchor for the soul, firm and secure.”<br /><span>— Hebrews 6:19 (NIV)</span></p>
            <Link className="about-content-button about-content-button-outline" href="/contact">Connect With Our Church</Link>
          </div>
        </section>
        <section className="content-section page-shell about-partnerships" aria-labelledby="partnerships">
          <p className="kicker"><span /> Mission &amp; Partnerships</p>
          <h2 id="partnerships">Sharing the Hope of Jesus.<br /><em>Serving God&apos;s Kingdom.</em></h2>
          <div className="about-mission-copy reveal">
            <p>At Anchor Church London, we believe the church is called not only to worship together but also to actively participate in God&apos;s mission.</p>
            <p>Rooted in Scripture and empowered by the Holy Spirit, we seek to share the good news of Jesus Christ, strengthen families, serve our communities, and demonstrate God&apos;s love through meaningful action.</p>
            <p>We believe God&apos;s Kingdom extends beyond any single congregation. Through collaboration with churches and Christian organizations, we seek to advance the gospel, nurture discipleship, and serve people locally and beyond.</p>
            <p className="about-scripture">Matthew 28:19–20 | Acts 1:8</p>
            <Link className="about-content-button" href="/next-steps#serving">Get Involved in Mission &amp; Outreach</Link>
          </div>
          <div className="about-affiliation-intro reveal">
            <h3 id="affiliations-heading">Our Affiliations &amp; Ministry Partnerships</h3>
            <h4>Connected in Faith. United in Mission.</h4>
            <p>We value relationships with churches and Christian organizations that share our commitment to biblical teaching, discipleship, evangelism, and compassionate service.</p>
            <div className="about-affiliation-groups">
              <div><h4>Denominational &amp; Mission Relationships</h4><ul><li>Southern Baptist Convention (SBC)</li><li>Canadian National Baptist Convention (CNBC)</li><li>North American Mission Board (NAMB)</li></ul></div>
              <div><h4>Church &amp; Ministry Partnerships</h4><ul><li>Gospel Trend Church</li><li>Church Planting Ministries Inc. (CPMI)</li></ul></div>
            </div>
          </div>
          <ul className="affiliation-logos" aria-labelledby="affiliations-heading">
            {partners.map((partner) => (
              <li key={partner.name}>
                <a className="affiliation-card" aria-label={`${partner.name} (opens in a new tab)`} href={partner.href} target="_blank" rel="noreferrer">
                  <span className={`affiliation-logo-stage${partner.dark ? " affiliation-logo-dark" : ""}`}>
                    <Image src={assetPath(`/images/affiliations/${partner.logo}`)} alt="" fill sizes="(max-width: 600px) 40vw, (max-width: 1100px) 28vw, 18vw" />
                  </span>
                  <span className="affiliation-name">{partner.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="simple-cta">
          <div className="page-shell reveal">
            <p className="kicker light-kicker"><span /> Come meet us</p>
            <h2>The best way to know us<br />is to <em>worship with us.</em></h2>
            <Link className="button button-light about-visit-button" href="/visit">Plan Your Visit <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
