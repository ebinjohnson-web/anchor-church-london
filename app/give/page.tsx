import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Giving",
  description: "Contact Anchor Church London for giving information.",
};

export default function GivingPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">
    <section className="giving-intro page-shell" data-motion="hero" aria-labelledby="giving-title">
      <h1 id="giving-title">Give</h1>
      <p>For giving information, please contact the church.</p>
      <Link className="home-visit-button giving-contact-button" href="/contact">Contact the Church <span aria-hidden="true">→</span></Link>
    </section>
    <section className="content-section page-shell giving-questions" aria-labelledby="giving-questions-title">
      <h2 id="giving-questions-title">Giving questions</h2>
      <p>If you are visiting, there is no expectation to give. We are glad you are here.</p>
      <div className="visitor-faq">
        <details><summary>How will my gift be used?</summary><p>Gifts support the church’s approved purposes. Contact the finance team if you have questions about a particular appeal or designation.</p></details>
        <details><summary>Can I give regularly?</summary><p>Please contact the church about options for regular giving.</p></details>
        <details><summary>Will I receive a receipt?</summary><p>Please contact the church finance team for information about receipts and the details needed to process your gift.</p></details>
      </div>
    </section>
  </main><Footer /></>;
}
