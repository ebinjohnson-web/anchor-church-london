"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { assetPath } from "../lib/assets";
import styles from "./ChurchIntro.module.css";

let hasPlayed = false;

export default function ChurchIntro() {
  const screenRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const screen = screenRef.current;
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    if (!screen || !panel || !backdrop) return;
    if (hasPlayed || typeof panel.animate !== "function") {
      screen.hidden = true;
      return;
    }
    hasPlayed = true;
    screen.hidden = false;
    // The server-rendered navy backdrop covers the page before hydration.
    screen.style.animation = "none";
    document.documentElement.setAttribute("data-church-intro", "active");
    const content = Array.from(document.querySelectorAll<HTMLElement>(
      "body > header, body > main, body > footer, body > .skip-link"
    ));
    const previousInert = content.map(element => element.inert);
    content.forEach(element => { element.inert = true; });
    const animations: Animation[] = [];
    let complete = false;

    function finish() {
      if (complete) return;
      complete = true;
      clearTimeout(timeout);
      animations.forEach(animation => animation.cancel());
      screen!.hidden = true;
      document.documentElement.removeAttribute("data-church-intro");
      content.forEach((element, index) => { element.inert = previousInert[index]; });
      window.dispatchEvent(new Event("church-intro-complete"));
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") finish();
    }

    const timeout = setTimeout(finish, 4000);
    const timing = { duration: 3400, easing: "cubic-bezier(.45,0,.55,1)", fill: "forwards" as const };
    try {
      // Rise into view, hold the centred logo, then lift the panel away.
      const rise = panel.animate([
        { transform: "translateY(100%)", offset: 0 },
        { transform: "translateY(0)", offset: .25 },
        { transform: "translateY(0)", offset: .7 },
        { transform: "translateY(-100%)", offset: 1 },
      ], timing);
      // Keep Home covered during the rise; lift both layers together on exit.
      const reveal = backdrop.animate([
        { transform: "translateY(0)", offset: 0 },
        { transform: "translateY(0)", offset: .7 },
        { transform: "translateY(-100%)", offset: 1 },
      ], timing);
      animations.push(rise, reveal);
      rise.onfinish = finish;
    } catch {
      finish();
    }
    window.addEventListener("keydown", onKeyDown);
    screen.addEventListener("click", finish);

    return () => {
      const interrupted = !complete;
      window.removeEventListener("keydown", onKeyDown);
      screen.removeEventListener("click", finish);
      finish();
      if (interrupted) hasPlayed = false;
    };
  }, []);

  return (
    <>
      <noscript><style>{"#church-intro { display: none !important; }"}</style></noscript>
      <div id="church-intro" ref={screenRef} className={styles.screen} aria-hidden="true">
        <div ref={backdropRef} className={styles.backdrop} />
        <div ref={panelRef} className={styles.panel}>
          <div className={styles.brand}>
            <Image src={assetPath("/images/anchor-church-logo.jpg")} alt="" width={624} height={624} priority className={styles.logo} />
            <p className={styles.name}>Anchor Church</p>
            <p className={styles.location}>London, Ontario</p>
          </div>
        </div>
      </div>
    </>
  );
}
