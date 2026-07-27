import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/assets";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the heart and community of Anchor Church London.",
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <PageHero
          index="01 / 05"
          label="About Anchor Church"
          title={<>A family anchored<br /><em>in Christ.</em></>}
          intro="We worship Jesus, grow together, and share His good news in London, Ontario."
        />

        <section className="story-layout page-shell">
          <div className="story-sticky reveal">
            <p className="section-index">WHO WE ARE</p>
            <h2>There is room<br />at the table.</h2>
          </div>
          <div className="story-body reveal">
            <p className="story-lead">
              Anchor Church London is a Christian church family in London, Ontario.
              We believe church should feel like a place where people can encounter
              Jesus and genuinely belong.
            </p>
            <p>
              Whether you are new to church, returning after some time away, or
              looking for a church family, you are welcome here. We gather around
              worship, prayer, Scripture, fellowship, and the good news of Jesus Christ.
            </p>
            <p>
              We are still growing, and so is this website. As more details about
              our story and leadership are confirmed, they will be added here.
            </p>
          </div>
        </section>

        <section className="about-image-band reveal">
          <Image src={assetPath("/images/family-banner.jpg")} alt="Church family moments" fill sizes="100vw" />
          <div className="about-image-overlay">
            <span>We are</span>
            <strong>family.</strong>
          </div>
        </section>

        <section className="about-values page-shell">
          <div className="about-values-heading reveal">
            <p className="kicker"><span /> What shapes our life</p>
            <h2>Simple truths.<br /><em>A shared life.</em></h2>
          </div>
          <div className="principle-list">
            {[
              ["01", "Jesus", "Jesus Christ is at the centre of our worship, our hope, and our life together."],
              ["02", "Scripture", "We grow by learning and living the good news found in God’s Word."],
              ["03", "Prayer", "We seek God together and carry one another’s needs in prayer."],
              ["04", "Family", "We choose community, care, and fellowship across generations."],
              ["05", "Good News", "We want the hope of Jesus to be known in London and beyond."],
            ].map(([number, title, copy]) => (
              <article className="principle reveal" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="simple-cta">
          <div className="page-shell reveal">
            <p className="kicker light-kicker"><span /> Come meet us</p>
            <h2>The best way to know us<br />is to <em>worship with us.</em></h2>
            <Link className="button button-light" href="/visit">Plan your visit <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
