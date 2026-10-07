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
  </main><Footer /></>;
}
