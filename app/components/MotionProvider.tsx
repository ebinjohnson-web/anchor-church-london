"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionProvider() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const selector = ".reveal, [data-motion], main h2, main h3, main .content-columns, main .visitor-faq, main .life-photo, main .contact-form-wrap";
    const items = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(item => !item.parentElement?.closest(selector));
    const mobile = window.matchMedia("(max-width: 820px)");
    if (!("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const pending = new Map<HTMLElement, string>();
    const intro = document.getElementById("church-intro");
    const opening = Boolean(intro && !intro.hidden);

    function inView(element: HTMLElement) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function release(element: HTMLElement) {
      const original = pending.get(element);
      if (original === undefined) return;
      element.style.visibility = original;
      pending.delete(element);
    }

    // Prepare the opening targets before the panel exposes any of the page.
    // The remaining content keeps its usual scroll-triggered behaviour.
    if (opening) {
      items.filter(inView).forEach(element => {
        pending.set(element, element.style.visibility);
        element.style.visibility = "hidden";
      });
    }

    function animateIn(element: HTMLElement) {
      // Restore visibility and start at opacity zero in the same frame.
      release(element);
      if (typeof element.animate !== "function") return;
      const hero = element.getAttribute("data-motion") === "hero";
      const distance = mobile.matches ? (hero ? 240 : 200) : (hero ? 160 : 120);
      const duration = mobile.matches ? (hero ? 1800 : 1600) : (hero ? 1400 : 1200);
      const animation = element.animate([
        { opacity: 0, transform: `translateY(${distance}px)` },
        { opacity: 1, transform: "translateY(0)" },
      ], { duration, easing: "cubic-bezier(.25,.8,.25,1)" });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateIn(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      items.forEach(item => {
        if (opening && inView(item)) {
          // Begin immediately on panel completion, without an observer delay.
          animateIn(item);
        } else {
          observer.observe(item);
        }
      });
    };
    let introFallback: ReturnType<typeof setTimeout> | undefined;
    if (opening) {
      window.addEventListener("church-intro-complete", start, { once: true });
      introFallback = setTimeout(start, 4200);
    } else {
      start();
    }
    return () => {
      window.removeEventListener("church-intro-complete", start);
      clearTimeout(introFallback);
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      pending.forEach((_, element) => release(element));
    };
  }, [pathname]);

  return null;
}
