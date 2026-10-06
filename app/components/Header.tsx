"use client";

import { church } from "../lib/church";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { assetPath } from "../lib/assets";

type SubItem = { label: string; href?: string };
type NavItem = { href: string; label: string; children?: SubItem[] };
const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/visit", label: "I’m New" },
  { href: "/about", label: "About", children: [
    { label: "Our Story and Leadership", href: "/about#our-story" },
    { label: "What We Believe" },
    { label: "Mission and Partnerships", href: "/about#partnerships" },
  ] },
  { href: "/next-steps", label: "Next Steps", children: [
    { label: "Explore Jesus", href: "/next-steps#explore-jesus" },
    { label: "Baptism", href: "/next-steps#baptism" },
    { label: "Membership", href: "/next-steps#membership" },
    { label: "Groups", href: "/next-steps#groups" },
    { label: "Serve", href: "/next-steps#serving" },
    { label: "Opportunities and Internships", href: "/opportunities" },
  ] },
  { href: "/church-life", label: "Church Life", children: [
    { label: "Ministries", href: "/ministries" },
    { label: "Prayer and Care" },
    { label: "Messages" },
    { label: "Events and Stories" },
  ] },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  function closeNavigation() {
    setOpen(false);
    setExpanded(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setExpanded(null);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (expanded) {
          const trigger = headerRef.current?.querySelector<HTMLButtonElement>(`button[aria-controls="${expanded}"]`);
          setExpanded(null);
          trigger?.focus();
        } else if (open) {
          setOpen(false);
          menuRef.current?.focus();
        }
      }
      if (event.key === "Tab" && open) {
        const controls = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []).filter(el => el.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [expanded, open]);

  function navigation(surface: "desktop" | "mobile") {
    return navItems.map(item => {
      const id = `${surface}-submenu-${item.href.slice(1)}`;
      const isExpanded = expanded === id;
      return <div className="nav-group" key={item.href} onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null) && isExpanded) setExpanded(null);
      }}>
        <Link className="nav-primary" href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeNavigation}>{item.label}</Link>
        {item.children && <>
          <button className="submenu-toggle" type="button" aria-label={`${isExpanded ? "Close" : "Open"} ${item.label} submenu`} aria-expanded={isExpanded} aria-controls={id} onClick={() => setExpanded(isExpanded ? null : id)}><span aria-hidden="true">⌄</span></button>
          <div className="nav-submenu" id={id} hidden={!isExpanded}>
            {item.children.map(child => child.href ? <Link key={child.label} href={child.href} onClick={closeNavigation}>{child.label}</Link> : <span className="nav-pending" key={child.label} aria-disabled="true">{child.label}<small>Not available yet</small></span>)}
          </div>
        </>}
      </div>;
    });
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-shell">
        <Link className="brand" href="/" aria-label="Anchor Church London home" onClick={closeNavigation}>
          <Image src={assetPath("/images/anchor-church-logo.jpg")} alt="Anchor Church London" width={66} height={66} priority />
          <span><strong>Anchor Church</strong><small>London, Ontario</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation("desktop")}</nav>
        <Link className="header-cta" href="/visit" onClick={closeNavigation}>Plan Your Visit <span aria-hidden="true">→</span></Link>
        <button ref={menuRef} className={`menu-toggle${open ? " is-open" : ""}`} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { setOpen(!open); setExpanded(null); }}><span /><span /></button>
      </div>
      <div className="brand-stripes" aria-hidden="true"><span /><span /><span /></div>
      <div id="mobile-navigation" className={`mobile-menu${open ? " is-open" : ""}`} inert={!open}>
        <nav aria-label="Mobile navigation">{navigation("mobile")}</nav>
        <div className="mobile-menu-footer">
          <a href={`mailto:${church.email}`}>{church.email}</a>
          <p>{church.venue}<br />{church.street}<br />{church.service}</p>
        </div>
      </div>
    </header>
  );
}
