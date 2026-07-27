import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Explore worship, prayer, Bible teaching, and fellowship at Anchor Church London.",
};

const ministries = [
  { number: "01", symbol: "✦", title: "Worship", copy: "Gathering to honour Jesus Christ together through praise and a shared response to His goodness." },
  { number: "02", symbol: "⌁", title: "Prayer", copy: "Seeking God together and supporting one another by carrying needs, hopes, and thanksgiving in prayer." },
  { number: "03", symbol: "◫", title: "Bible Teaching", copy: "Learning the good news of Jesus Christ through Scripture and growing in a faith that shapes everyday life." },
  { number: "04", symbol: "◎", title: "Fellowship", copy: "Growing as a spiritual family through community, meals, encouragement, and practical care for one another." },
];

export default function MinistriesPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <PageHero
          index="03 / 05"
          label="Ministries"
          title={<>Growing together.<br /><em>Serving together.</em></>}
          intro="Our shared life is built around worship, prayer, Scripture, and caring community."
        />

        <section className="ministries-intro page-shell reveal">
          <p className="section-index">A SHARED LIFE</p>
          <h2>Every gathering is an invitation<br />to know Jesus <em>more deeply.</em></h2>
          <p>Ministry details and schedules will be added as they are confirmed. For now, these are the central rhythms that shape our life together.</p>
        </section>

        <section className="ministry-list page-shell">
          {ministries.map((ministry) => (
            <article className="ministry-row reveal" key={ministry.number}>
              <span className="ministry-number">{ministry.number}</span>
              <span className="ministry-symbol" aria-hidden="true">{ministry.symbol}</span>
              <h3>{ministry.title}</h3>
              <p>{ministry.copy}</p>
            </article>
          ))}
        </section>

        <section className="ministry-note">
          <div className="page-shell reveal">
            <p className="kicker light-kicker"><span /> Find your place</p>
            <h2>Want to know where<br /><em>you can connect?</em></h2>
            <p>Send us a message and we will help you find the latest information.</p>
            <Link className="button button-light" href="/contact">Contact Anchor Church <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
