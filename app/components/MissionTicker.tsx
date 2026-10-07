"use client";

import { useState } from "react";

export default function MissionTicker() {
  const [paused, setPaused] = useState(false);
  const copy = <><span>Anchored in Jesus</span><b>✦</b><span>Growing in faith</span><b>✦</b><em>Sharing His hope</em><b>✦</b></>;
  return <section className={`mission-ticker${paused ? " is-paused" : ""}`} aria-label="Our shared purpose">
    <p className="motion-sr-only">Anchored in Jesus. Growing in faith. Sharing His hope.</p>
    <div className="mission-ticker-track" aria-hidden="true">
      <div className="mission-ticker-copy">{copy}</div>
      <div className="mission-ticker-copy">{copy}</div>
    </div>
    <button className="mission-ticker-control" type="button" aria-label={paused ? "Resume scrolling text" : "Pause scrolling text"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Play" : "Pause"}</button>
  </section>;
}
