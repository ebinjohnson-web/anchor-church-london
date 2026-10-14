import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Give",
  description: "Giving with love and stewarding with faithfulness at Anchor Church London. Learn how gifts support church ministry and contact the church about giving.",
};
export default function GivingPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" className="giving-revised-page">
    <section className="giving-revised-hero"><div className="page-shell" data-motion="hero"><p className="kicker light-kicker"><span /> Give</p><h1>Giving with Love.<br /><em>Stewarding with Faithfulness.</em></h1><p className="giving-scripture-quote"><em>“God loves a cheerful giver.” — 2 Corinthians 9:7 (NIV)</em></p></div></section>
    <div className="giving-revised-content page-shell">
      <section className="giving-revised-welcome reveal" aria-label="Giving at Anchor Church"><p>At Anchor Church London, giving is an expression of love, gratitude, and worship to God. <strong>Giving is voluntary, never an obligation.</strong> Visitors are always welcome without any expectation to give.</p></section>
      <div className="giving-purpose-grid"><section className="giving-purpose-card reveal" aria-labelledby="giving-purpose-heading"><h2 id="giving-purpose-heading">Where Your Giving Goes</h2><p>Your generosity supports worship, discipleship, children and families, community outreach, missions, Kingdom work, and essential church operations.</p><p className="giving-scripture-reference"><em>Matthew 6:33 | Galatians 6:10</em></p></section>
      <section className="giving-purpose-card reveal" aria-labelledby="giving-stewardship-heading"><h2 id="giving-stewardship-heading">Stewardship &amp; Accountability</h2><p>We are committed to managing every gift with integrity, transparency, and financial accountability, ensuring faithful stewardship of the resources entrusted to us.</p><p className="giving-scripture-reference"><em>1 Corinthians 4:2 | 2 Corinthians 8:20–21</em></p></section></div>
      <section className="giving-methods-section reveal" aria-labelledby="giving-methods-heading"><p className="kicker"><span /> Giving Options</p><h2 id="giving-methods-heading">Ways to Give</h2><p>Please contact the church for e-transfer details or cheque instructions.</p><ul className="giving-methods-list"><li><strong>Interac e-Transfer</strong></li><li><strong>Cheque</strong></li><li><strong>Cash:</strong> During Sunday worship services.</li></ul><p className="giving-tax-receipts"><strong>Tax Receipts:</strong> Official charitable tax receipts are available for eligible donations through an authorized registered charity, subject to CRA requirements. Please provide your full legal name and mailing address.</p><Link className="giving-revised-contact" href="/contact">Contact the Church <span aria-hidden="true">→</span></Link></section>
      <section className="giving-revised-closing reveal" aria-label="Our heart for giving"><h2>Give Freely. Serve Faithfully.<br /><em>Advance God&apos;s Kingdom.</em></h2></section>
    </div>
  </main><Footer /></>;
}
