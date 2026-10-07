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
    if (!("IntersectionObserver" in window) || preference.matches) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        if (!preference.matches && typeof element.animate === "function") {
          const hero = element.getAttribute("data-motion") === "hero";
          const animation = element.animate([
            { opacity: 0, transform: `translateY(${hero ? 96 : 48}px)` },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: hero ? 1100 : 850, easing: "cubic-bezier(.16,1,.3,1)" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
        observer.unobserve(element);
      });
    }, { threshold: 0.08 });
    const cancelMotion = () => {
      if (preference.matches) {
        animations.forEach(animation => animation.cancel());
        animations.clear();
      }
    };
    preference.addEventListener("change", cancelMotion);
    items.forEach(item => observer.observe(item));
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", cancelMotion);
      animations.forEach(animation => animation.cancel());
    };
  }, [pathname]);

  return null;
}
