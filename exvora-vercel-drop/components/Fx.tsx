"use client";
import { useEffect } from "react";

/* Page-level motion: gold scroll-progress hairline, scroll parallax
   for [data-parallax] elements, and the cursor spotlight that follows
   the pointer across [data-spot] cards. */
export default function Fx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);

    const parallax = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        bar.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;
        if (!reduced) {
          for (const el of parallax) {
            const rate = parseFloat(el.dataset.parallax || "0.1");
            el.style.setProperty("--par", `${doc.scrollTop * rate}px`);
          }
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const spots = Array.from(
      document.querySelectorAll<HTMLElement>("[data-spot]")
    );
    const onMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    spots.forEach((el) =>
      el.addEventListener("pointermove", onMove as EventListener, { passive: true })
    );

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      spots.forEach((el) =>
        el.removeEventListener("pointermove", onMove as EventListener)
      );
      bar.remove();
    };
  }, []);
  return null;
}
