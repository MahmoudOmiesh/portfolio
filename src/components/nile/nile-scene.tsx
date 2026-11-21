import { useEffect, useRef } from "react";

import { localHour } from "@/components/local-time";

import { drawScene, height, width } from "./scene";

function hourUnder(fraction: number) {
  if (fraction < 0.08) return 6 - ((0.08 - fraction) / 0.08) * 2;

  if (fraction > 0.92) return 18 + ((fraction - 0.92) / 0.08) * 2;

  return 6 + (Math.acos((0.5 - fraction) / 0.42) / Math.PI) * 12;
}

export function NileScene({ className }: { className?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");

    if (!element || !context) return;
    const image = context.createImageData(width, height);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hour = localHour();
    let scrub: number | undefined;
    let frame = 0;
    let last = 0;

    function draw(now: number) {
      const goal = scrub ?? localHour();
      const gap = ((goal - hour + 36) % 24) - 12;

      hour = still ? goal : (hour + gap * (1 - Math.exp(-Math.min(64, now - last) / 180)) + 24) % 24;
      last = now;
      drawScene(image.data, hour, still ? 0 : Date.now() / 1000);
      context?.putImageData(image, 0, 0);
    }

    function loop(now: number) {
      const settled = Math.abs((((scrub ?? localHour()) - hour + 36) % 24) - 12) < 0.01;

      if (!settled || now - last >= 80) draw(now);
      frame = requestAnimationFrame(loop);
    }

    function move(event: PointerEvent) {
      if (!element) return;
      const box = element.getBoundingClientRect();

      const visible = Math.min(1, box.width / box.height / (width / height));

      scrub = hourUnder(0.5 + ((event.clientX - box.left) / box.width - 0.5) * visible);

      if (still) draw(performance.now());
    }

    function leave() {
      scrub = undefined;

      if (still) draw(performance.now());
    }

    draw(performance.now());
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", leave);

    const observer = new IntersectionObserver((entries) => {
      cancelAnimationFrame(frame);

      if (entries.at(-1)?.isIntersecting && !still) frame = requestAnimationFrame(loop);
    });

    observer.observe(element);
    const minute = still ? setInterval(() => draw(performance.now()), 60_000) : undefined;

    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearInterval(minute);
    };
  }, []);

  return <canvas ref={canvas} width={width} height={height} aria-hidden className={className} />;
}
