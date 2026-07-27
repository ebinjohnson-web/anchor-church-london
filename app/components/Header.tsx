"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { assetPath } from "../lib/assets";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "I’m New" },
  { href: "/ministries", label: "Ministries" },
  { href: "/church-life", label: "Church Life" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand" href="/" aria-label="Anchor Church London home">
          <Image src={assetPath("/images/anchor-church-logo.jpg")} alt="Anchor Church London" width={66} height={66} priority />
          <span><strong>Anchor Church</strong><small>London, Ontario</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <Link className="header-cta" href="/visit">Plan a Visit <span aria-hidden="true">→</span></Link>
        <button className={`menu-toggle${open ? " is-open" : ""}`} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span />
        </button>
      </div>
      <div className="brand-stripes" aria-hidden="true"><span /><span /><span /></div>
      <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}<span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="mailto:anchorchurchlc1@gmail.com">anchorchurchlc1@gmail.com</a>
          <p>2179 Highbury Ave N, London, ON</p>
        </div>
      </div>
    </header>
  );
}
