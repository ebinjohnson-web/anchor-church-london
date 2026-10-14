"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

export default function AnniversaryBanner({ onNavigate }: { onNavigate?: () => void }) {
  const banner = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const header = banner.current?.closest("header");
    if (!header) return;
    function measure() {
      if (header) document.documentElement.style.setProperty("--anniversary-header-height", `${header.getBoundingClientRect().height}px`);
    }
    measure();
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    observer?.observe(header);
    window.addEventListener("resize", measure);
    return () => { observer?.disconnect(); window.removeEventListener("resize", measure); };
  }, []);
  const message = <><strong>Celebrate Anchor Church&apos;s 5th Anniversary</strong><span aria-hidden="true">✦</span><span>November 1, 2026</span><span aria-hidden="true">✦</span><span>2:00 p.m.</span><span aria-hidden="true">✦</span><strong>ROOM FOR MORE</strong><span aria-hidden="true">✦</span><span>View Details →</span></>;
  return <div className="anniversary-banner" ref={banner}><Link href="/events#anniversary-heading" className="anniversary-banner-link" onClick={onNavigate} aria-label="Celebrate Anchor Church's fifth anniversary, November 1, 2026 at 2 p.m. View event details."><div className="anniversary-banner-track" aria-hidden="true"><div className="anniversary-banner-copy">{message}</div><div className="anniversary-banner-copy">{message}</div></div></Link></div>;
}
