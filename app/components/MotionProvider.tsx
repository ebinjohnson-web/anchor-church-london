"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Content stays visible by default, including before JS loads and in screenshots.
    const selector = ".reveal, [data-motion], main h2, main h3, main .content-columns, main .visitor-faq, main .life-photo, main .contact-form-wrap";
    // Animate the outer target once rather than moving nested blocks twice.
    const items = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(item => !item.parentElement?.closest(selector));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        if (typeof element.animate === "function") {
          const hero = element.getAttribute("data-motion") === "hero";
          // Keep the requested entrance on phones using Reduce Motion,
          // with a shorter travel distance and no repeating movement.
          const distance = preference.matches ? (hero ? 24 : 16) : (hero ? 96 : 48);
          const animation = element.animate([
            { opacity: 0, transform: `translateY(${distance}px)` },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: hero ? 1100 : 850, easing: "cubic-bezier(.16,1,.3,1)" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
        observer.unobserve(element);
      });
    }, { threshold: 0.08 });
    items.forEach(item => observer.observe(item));
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
    };
  }, [pathname]);

  return null;
}
