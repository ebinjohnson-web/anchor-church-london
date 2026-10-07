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
    const mobile = window.matchMedia("(max-width: 820px)");
    if (!("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        if (typeof element.animate === "function") {
          const hero = element.getAttribute("data-motion") === "hero";
          // Full upward entrances requested for mobile, including Reduce Motion.
          const distance = mobile.matches ? (hero ? 240 : 200) : (hero ? 160 : 120);
          const duration = mobile.matches ? (hero ? 1800 : 1600) : (hero ? 1400 : 1200);
          const animation = element.animate([
            { opacity: 0, transform: `translateY(${distance}px)` },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration, easing: "cubic-bezier(.25,.8,.25,1)" });
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
