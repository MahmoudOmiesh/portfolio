import { useEffect, useRef } from "react";

export type Frame<Props> = {
  now: number;
  elapsed: number;
  pointer: { x: number; y: number } | undefined;
  props: Props;
};

type Painter<Props> = { frame: (frame: Frame<Props>) => void; resize?: () => void };

export const ease = (elapsed: number, duration: number) => 1 - Math.exp(-elapsed / duration);

export function useCanvas<Props>(
  setup: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => Painter<Props>,
  props: Props,
) {
  const ref = useRef<HTMLCanvasElement>(null);
  const init = useRef(setup);
  const latest = useRef(props);
  const redraw = useRef<() => void>(undefined);

  useEffect(() => {
    latest.current = props;
    redraw.current?.();
  }, [props]);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { frame, resize } = init.current(canvas, context);
    let pointer: Frame<Props>["pointer"];
    let handle = 0;
    let last = 0;

    function draw(now: number) {
      frame(
        still
          ? { now: 0, elapsed: Infinity, pointer, props: latest.current }
          : { now, elapsed: Math.min(64, now - last), pointer, props: latest.current },
      );
      last = now;
    }

    function loop(now: number) {
      draw(now);
      handle = requestAnimationFrame(loop);
    }

    function redrawStill() {
      if (still) draw(performance.now());
    }

    function move(event: PointerEvent) {
      pointer = { x: event.offsetX, y: event.offsetY };
      redrawStill();
    }

    function leave() {
      pointer = undefined;
      redrawStill();
    }

    const intersection = new IntersectionObserver((entries) => {
      cancelAnimationFrame(handle);

      if (entries.at(-1)?.isIntersecting && !still) handle = requestAnimationFrame(loop);
    });

    const resizer = new ResizeObserver(() => {
      resize?.();
      draw(performance.now());
    });

    const minute = still ? setInterval(redrawStill, 60_000) : undefined;

    redraw.current = redrawStill;
    intersection.observe(canvas);
    resizer.observe(canvas);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);

    return () => {
      intersection.disconnect();
      resizer.disconnect();
      cancelAnimationFrame(handle);
      clearInterval(minute);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
      redraw.current = undefined;
    };
  }, []);

  return ref;
}
