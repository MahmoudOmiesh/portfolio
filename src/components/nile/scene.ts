import { threshold } from "@/components/dither";

export const width = 180;
export const height = 60;

const horizon = 42;

type Rgb = [number, number, number];

const channel = (value: string, index: number) => parseInt(value.slice(index, index + 2), 16);
const hex = (value: string): Rgb => [channel(value, 1), channel(value, 3), channel(value, 5)];
const lerp = (a: number, b: number, amount: number) => a + (b - a) * amount;

const mix = (a: Rgb, b: Rgb, amount: number): Rgb => [
  lerp(a[0], b[0], amount),
  lerp(a[1], b[1], amount),
  lerp(a[2], b[2], amount),
];

const clamp = (value: number) => Math.max(0, Math.min(1, value));

function dither(color: Rgb, x: number, y: number, levels: number): Rgb {
  const step = (value: number) => Math.min(255, (Math.floor((value / 255) * levels + threshold(x, y)) * 255) / levels);

  return [step(color[0]), step(color[1]), step(color[2])];
}

const skies = {
  night: [hex("#05061a"), hex("#1d1b45")],
  dusk: [hex("#2a1f5c"), hex("#f2845c")],
  day: [hex("#3b78d8"), hex("#b9def5")],
} satisfies Record<string, [Rgb, Rgb]>;

function sky(elevation: number): [Rgb, Rgb] {
  if (elevation > 0.3) return skies.day;
  const [from, amount] = elevation > 0 ? [skies.day, elevation / 0.3] : [skies.night, Math.min(1, -elevation / 0.25)];

  return [mix(skies.dusk[0], from[0], amount), mix(skies.dusk[1], from[1], amount)];
}

const random = (() => {
  let seed = 7;

  return () => (seed = (seed * 16807) % 2147483647) / 2147483647;
})();

const stars = Array.from({ length: 40 }, () => ({
  x: Math.floor(random() * width),
  y: Math.floor(random() * (horizon - 8)),
  phase: random() * 6,
}));

const crown = ["....XXX....", "..XXXXXXX..", ".XX.XXX.XX.", "XX..XXX..XX", "X..X.X.X..X", "..X..X..X.."];

const houses = [
  [6, 6, 5],
  [14, 9, 4],
  [22, 5, 3],
  [96, 7, 6],
  [106, 4, 5],
  [112, 6, 4],
  [150, 8, 5],
  [160, 5, 4],
];

const palms = [
  [34, 9, 1],
  [46, 12, -1],
  [66, 8, 1],
  [82, 11, 1],
  [142, 10, -1],
  [174, 8, 1],
];

const deep = hex("#06060d");
const hull = hex("#2a1d12");

export function drawScene(pixels: Uint8ClampedArray, hour: number, seconds: number) {
  function plot(x: number, y: number, [r, g, b]: Rgb) {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const index = (y * width + x) * 4;
    pixels[index] = r;
    pixels[index + 1] = g;
    pixels[index + 2] = b;
    pixels[index + 3] = 255;
  }

  function disc(cx: number, cy: number, radius: number, color: Rgb) {
    for (let y = -radius; y <= radius; y++)
      for (let x = -radius; x <= radius; x++)
        if (x * x + y * y <= radius * radius + radius && cy + y < horizon) plot(cx + x, cy + y, color);
  }

  function palm(x: number, base: number, size: number, lean: number, color: Rgb) {
    for (let step = 0; step < size; step++)
      plot(x + Math.round(Math.sin((step / size) * 1.2) * 2 * lean), base - step, color);
    const left = x + Math.round(Math.sin(1.2) * 2 * lean) - 5;
    crown.forEach((row, dy) =>
      [...row].forEach((cell, dx) => cell === "X" && plot(left + dx, base - size - 2 + dy, color)),
    );
  }

  const angle = ((hour - 6) / 12) * Math.PI;
  const elevation = Math.sin(angle);
  const [top, bottom] = sky(elevation);

  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      if (y < horizon) plot(x, y, dither(mix(top, bottom, (y / horizon) ** 1.6), x, y, 14));
      else {
        const depth = (y - horizon) / (height - horizon);
        const water = mix(mix(top, bottom, 0.55), deep, 0.45 + depth * 0.45);

        const glint =
          Math.sin(x * 0.5 + seconds * 1.6 + y * 2.3) * Math.sin(x * 0.13 - seconds * 0.7) > 0.6 + depth * 0.3;

        plot(x, y, dither(glint ? mix(water, bottom, 0.6) : water, x, y, 10));
      }
    }

  if (elevation < 0.05)
    for (const star of stars) {
      const twinkle = Math.sin(seconds * 1.5 + star.phase * 5);

      if (twinkle > -0.2) plot(star.x, star.y, twinkle > 0.7 ? [255, 255, 240] : [170, 170, 200]);
    }

  const sun = { x: Math.round(width / 2 - Math.cos(angle) * width * 0.42), y: Math.round(horizon - elevation * 34) };
  const moon = { x: Math.round(width / 2 + Math.cos(angle) * width * 0.42), y: Math.round(horizon + elevation * 34) };
  disc(sun.x, sun.y, 5, [255, 214, 128]);
  disc(moon.x, moon.y, 3, [236, 236, 220]);

  if (moon.y < horizon) disc(moon.x + 1, moon.y - 1, 2, top);

  if (sun.y < horizon)
    for (let row = 0; row < 3; row++)
      for (let x = row - 4; x <= 4 - row; x++)
        if (Math.sin(seconds * 3 + x + row) > 0) plot(sun.x + x, horizon + 3 + row * 3, [255, 200, 120]);

  const ink = mix(hex("#020207"), hex("#231d33"), clamp(elevation * 2));

  for (let x = 0; x < width; x++) {
    plot(x, horizon, ink);

    if (Math.sin(x * 0.4) > 0.2) plot(x, horizon - 1, ink);
  }

  for (const [x, tall, wide] of houses) {
    for (let dx = 0; dx < wide; dx++) for (let dy = 0; dy < tall; dy++) plot(x + dx, horizon - dy, ink);
    plot(x + 1, horizon - tall - 1, ink);
    plot(x + 2, horizon - tall - 1, ink);
  }

  for (let dy = 0; dy < 21; dy++) {
    plot(127, horizon - dy, ink);
    plot(128, horizon - dy, ink);
  }

  for (let dx = -1; dx <= 2; dx++) plot(127 + dx, horizon - 12, ink);
  plot(128, horizon - 22, ink);

  for (const [x, size, lean] of palms) palm(x, horizon, size, lean, ink);

  const boat = Math.round(((seconds * 3 + 70) % (width + 40)) - 20);

  for (let dx = -5; dx <= 5; dx++) plot(boat + dx, 51, hull);

  for (let dx = -3; dx <= 4; dx++) plot(boat + dx, 52, hull);
  const sail: Rgb = elevation > -0.1 ? [245, 236, 215] : [150, 150, 170];

  for (let dy = 1; dy < 14; dy++)
    for (let dx = 0; dx <= Math.floor(dy * 0.55); dx++) plot(boat + 1 - dx + Math.floor(dy * 0.2), 51 - dy, sail);

  for (let dy = 0; dy < 15; dy++) plot(boat + 2, 51 - dy, hull);
}
