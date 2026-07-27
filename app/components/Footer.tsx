import Link from "next/link";
import Image from "next/image";
import { assetPath } from "../lib/assets";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=2179%20Highbury%20Ave%20N%2C%20London%2C%20ON%20N5X%204N4%2C%20Canada";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top page-shell">
        <div className="footer-callout">
          <p className="kicker light-kicker"><span /> You are welcome here</p>
          <h2>There is a place<br /><em>for you.</em></h2>
          <Link className="button button-light" href="/visit">Plan your visit <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="footer-nav">
          <div>
            <span>Explore</span>
            <Link href="/about">About</Link>
            <Link href="/visit">I’m New</Link>
            <Link href="/ministries">Ministries</Link>
            <Link href="/church-life">Church Life</Link>
          </div>
          <div>
            <span>Connect</span>
            <Link href="/contact">Contact</Link>
            <a href="mailto:anchorchurchlc1@gmail.com">Email us</a>
            <a href={mapUrl} target="_blank" rel="noreferrer">Directions ↗</a>
          </div>
          <div>
            <span>Visit</span>
            <p>2179 Highbury Ave N<br />London, ON N5X 4N4</p>
            <p>Sunday service time<br />to be confirmed</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom page-shell">
        <Link className="footer-brand" href="/">
          <Image src={assetPath("/images/anchor-church-logo.jpg")} alt="" width={42} height={42} />
          <span>Anchor Church London</span>
        </Link>
        <p>© {new Date().getFullYear()} Anchor Church London</p>
        <a href="https://anchorchurchlondonca.com">anchorchurchlondonca.com</a>
      </div>
    </footer>
  );
}
