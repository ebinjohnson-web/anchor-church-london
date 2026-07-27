import Link from "next/link";
import Image from "next/image";
import { assetPath } from "../lib/assets";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=2179%20Highbury%20Ave%20N%2C%20London%2C%20ON%20N5X%204N4%2C%20Canada";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-shell">
        <Link className="footer-brand" href="/" aria-label="Anchor Church London home">
          <Image src={assetPath("/images/anchor-church-logo.jpg")} alt="" width={80} height={80} />
          <span><strong>Anchor Church</strong><small>Anchored in Jesus · Growing as family</small></span>
        </Link>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link><Link href="/visit">I&apos;m New</Link><Link href="/ministries">Ministries</Link><Link href="/church-life">Church Life</Link><Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-contact">
          <a href={mapUrl} target="_blank" rel="noreferrer">2179 Highbury Ave N<br />London, ON N5X 4N4</a>
          <a href="mailto:anchorchurchlc1@gmail.com">anchorchurchlc1@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom page-shell">
        <p>© {new Date().getFullYear()} Anchor Church London</p>
        <p>Jesus Christ is our anchor.</p>
      </div>
    </footer>
  );
}
