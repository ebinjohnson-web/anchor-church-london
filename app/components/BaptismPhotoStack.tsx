"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { assetPath } from "../lib/assets";

type Photo = { src: string; alt: string };
export default function BaptismPhotoStack({ photos }: { photos: readonly Photo[] }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const positions = useRef<DOMRect[]>([]);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  function rememberPositions() {
    positions.current = Array.from(gallery.current?.querySelectorAll<HTMLElement>(".baptism-photo") ?? []).map(el => el.getBoundingClientRect());
  }
  function toggle() { rememberPositions(); setExpanded(value => !value); }
  useEffect(() => {
    function openForBaptism() {
      if (window.location.hash === "#baptism") {
        positions.current = Array.from(gallery.current?.querySelectorAll<HTMLElement>(".baptism-photo") ?? []).map(el => el.getBoundingClientRect());
        setExpanded(true);
      }
    }
    function onClick(event: MouseEvent) {
      const link = (event.target as Element).closest?.("a");
      if (link && new URL(link.href, window.location.href).pathname.replace(/\/$/, "") === window.location.pathname.replace(/\/$/, "") && new URL(link.href).hash === "#baptism") {
        positions.current = Array.from(gallery.current?.querySelectorAll<HTMLElement>(".baptism-photo") ?? []).map(el => el.getBoundingClientRect());
        setExpanded(true);
      }
    }
    openForBaptism();
    window.addEventListener("hashchange", openForBaptism);
    document.addEventListener("click", onClick);
    return () => { window.removeEventListener("hashchange", openForBaptism); document.removeEventListener("click", onClick); };
  }, []);
  useLayoutEffect(() => {
    const elements = Array.from(gallery.current?.querySelectorAll<HTMLElement>(".baptism-photo") ?? []);
    elements.forEach((element, index) => {
      const previous = positions.current[index];
      if (!previous) return;
      const next = element.getBoundingClientRect();
      element.animate([
        { transform: `translate(${previous.left - next.left}px, ${previous.top - next.top}px) rotate(${expanded ? (index - 1.5) * 7 : 0}deg) scale(${previous.width / next.width})` },
        { transform: "none" },
      ], { duration: 800, delay: index * 45, easing: "cubic-bezier(.22,.8,.3,1)", fill: "backwards" });
    });
    positions.current = [];
  }, [expanded]);
  useEffect(() => {
    if (selected !== null) dialog.current?.showModal();
  }, [selected]);
  if (!photos.length) return null;
  return <div className={`baptism-gallery ${expanded ? "is-expanded" : ""}`}>
    <div className="baptism-gallery-heading"><div><h3>Celebrating New Life</h3><p>Moments of baptism with our church family.</p></div><button type="button" className="baptism-stack-toggle" onClick={toggle} aria-expanded={expanded} aria-controls="baptism-photo-stack">{expanded ? "Close Photo Stack" : "View Baptism Photos"} <span aria-hidden="true">{expanded ? "−" : "+"}</span></button></div>
    <div className="baptism-photo-stack" id="baptism-photo-stack" ref={gallery}>{photos.map((photo, index) => <button key={photo.src} className="baptism-photo" type="button" aria-label={expanded ? `Enlarge baptism photo ${index + 1}` : "Open baptism photo stack"} tabIndex={expanded || index === photos.length - 1 ? 0 : -1} onClick={event => { if (!expanded) toggle(); else { lastTrigger.current = event.currentTarget; setSelected(index); } }}><span className="baptism-photo-image"><Image src={assetPath(photo.src)} alt={photo.alt} fill sizes="(max-width: 600px) 45vw, (max-width: 900px) 40vw, 24vw" /></span></button>)}</div>
    {selected !== null && <dialog className="baptism-lightbox" ref={dialog} onClose={() => { setSelected(null); lastTrigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><div className="baptism-lightbox-content"><button className="baptism-lightbox-close" type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close baptism photo">×</button><div className="baptism-lightbox-image"><Image src={assetPath(photos[selected].src)} alt={photos[selected].alt} fill sizes="90vw" /></div></div></dialog>}
  </div>;
}
