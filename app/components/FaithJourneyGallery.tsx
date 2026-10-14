"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { assetPath } from "../lib/assets";

type JourneyPhoto = { src: string; alt: string };

export default function FaithJourneyGallery({ photos }: { photos: readonly JourneyPhoto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function syncPosition() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const index = Math.max(0, Math.min(photos.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
    setActive(index);
  }

  function selectPhoto(index: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
    const thumbnails = thumbnailsRef.current;
    const thumb = thumbnails?.children[index] as HTMLElement | undefined;
    if (thumbnails && thumb) {
      thumbnails.scrollTo({ left: thumb.offsetLeft - thumbnails.clientWidth / 2 + thumb.clientWidth / 2, behavior: "smooth" });
    }
  }

  if (photos.length === 0) return null;

  return (
    <section className="journey-gallery reveal" aria-labelledby="journey-gallery-title" aria-roledescription="carousel">
      <div className="journey-gallery-heading">
        <p className="journey-eyebrow">Our life together</p>
        <h2 id="journey-gallery-title">A family.<br /><em>A journey of faith.</em></h2>
        <p>Moments of worship, fellowship, and life together at Anchor Church London.</p>
      </div>
      <div id="faith-journey-gallery" className="journey-gallery-track" ref={trackRef} onScroll={syncPosition} tabIndex={0} aria-label="Church journey photographs. Swipe or use the arrow buttons to browse.">
        {photos.map((photo, index) => (
          <div className="journey-gallery-slide" key={photo.src} role="group" aria-roledescription="slide" aria-label={`Photo ${index + 1} of ${photos.length}`} aria-hidden={index !== active}>
            <div className="journey-photo-stage">
              <Image src={assetPath(photo.src)} alt={photo.alt} fill sizes="(max-width: 820px) 92vw, 58vw" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
      <div className="journey-gallery-controls">
        <button type="button" onClick={() => selectPhoto(active - 1)} disabled={active === 0} aria-label="Previous photograph" aria-controls="faith-journey-gallery"><span aria-hidden="true">←</span></button>
        <p aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} <span>/ {String(photos.length).padStart(2, "0")}</span></p>
        <button type="button" onClick={() => selectPhoto(active + 1)} disabled={active === photos.length - 1} aria-label="Next photograph" aria-controls="faith-journey-gallery"><span aria-hidden="true">→</span></button>
      </div>
      <div className="journey-gallery-thumbnails" ref={thumbnailsRef} aria-label="Choose a photograph">
        {photos.map((photo, index) => <button type="button" key={photo.src} onClick={() => selectPhoto(index)} aria-label={`Show photograph ${index + 1}`} aria-pressed={active === index}><Image src={assetPath(photo.src)} alt="" fill sizes="64px" loading="lazy" /></button>)}
      </div>
      <p className="journey-gallery-hint">Swipe to explore our journey</p>
    </section>
  );
}
