"use client";
import { useEffect, useRef } from "react";

type Speck = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  p: number;
  s: number;
};

/* Gold dust drifting in candlelight. Pauses when off-screen or the tab
   is hidden; skipped entirely under prefers-reduced-motion. */
export default function GoldDust({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let specks: Speck[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(44, Math.max(16, Math.round(w / 30)));
      specks = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.4,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(0.05 + Math.random() * 0.16),
        p: Math.random() * Math.PI * 2,
        s: 0.004 + Math.random() * 0.009,
      }));
    };

    const tick = () => {
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      for (const d of specks) {
        d.x += d.vx;
        d.y += d.vy;
        d.p += d.s;
        if (d.y < -4) {
          d.y = h + 4;
          d.x = Math.random() * w;
        }
        if (d.x < -4) d.x = w + 4;
        else if (d.x > w + 4) d.x = -4;
        const a = 0.1 + 0.3 * (0.5 + 0.5 * Math.sin(d.p));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 200, 122, ${a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const restart = () => {
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && !document.hidden;
      restart();
    });
    const onVis = () => {
      visible = !document.hidden;
      restart();
    };

    resize();
    io.observe(canvas);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
