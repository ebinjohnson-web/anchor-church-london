import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found page-shell">
        <p className="kicker"><span /> Page not found</p>
        <h1>Let’s get you<br /><em>back home.</em></h1>
        <Link className="button button-dark" href="/">Return to home <span aria-hidden="true">→</span></Link>
      </main>
      <Footer />
    </>
  );
}
