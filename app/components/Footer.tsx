import { church } from "../lib/church";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "../lib/assets";


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-shell">
        <Link
          className="footer-brand"
          href="/"
          aria-label="Anchor Church London home"
        >
          <Image
            src={assetPath("/images/anchor-church-logo.jpg")}
            alt=""
            width={80}
            height={80}
          />

          <span>
            <strong>Anchor Church</strong>
            <small>Anchored in Jesus. Sharing His hope in London and beyond.</small>
          </span>
        </Link>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/visit">I&apos;m New</Link>
          <Link href="/next-steps">Next Steps</Link>
          <Link href="/ministries">Ministries</Link>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/church-life">Church Life</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="footer-contact">
          <p>{church.service}</p>
          <a href={church.mapUrl} target="_blank" rel="noreferrer">
            {church.venue}<br />{church.street}<br />{church.city}
          </a>

          <a href="mailto:anchorchurchlc1@gmail.com">
            anchorchurchlc1@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom page-shell">
        <p>
          © {new Date().getFullYear()} Anchor Church London · Website designed
          &amp; developed by{" "}
          <a
            href="https://ebinjohnson.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ebin Johnson
          </a>
        </p>

        <p>Jesus Christ is our anchor.</p>
      </div>
    </footer>
  );
}