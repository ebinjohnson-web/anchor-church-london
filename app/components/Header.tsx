"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { assetPath } from "../lib/assets";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/visit", label: "I’m New" },
  { href: "/ministries", label: "Ministries" },
  { href: "/church-life", label: "Church Life" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 30);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-shell">
        <Link className="brand" href="/" aria-label="Anchor Church London home">
          <Image src={assetPath("/images/anchor-church-logo.jpg")} alt="" width={52} height={52} priority />
          <span>
            <strong>Anchor Church</strong>
            <small>London, Ontario</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/visit">
          Plan a visit <span aria-hidden="true">↗</span>
        </Link>

        <button
          className={`menu-toggle${open ? " is-open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          {navItems.map((item, index) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{item.label}
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
