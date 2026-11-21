import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { drawScene, height, width } from "@/components/nile/scene";
import { profile } from "@/content/profile";

const chrome = process.env.CHROME ?? "chromium";
const dir = mkdtempSync(join(tmpdir(), "og-"));

function png(pixels: Uint8ClampedArray, size: string, out: string) {
  writeFileSync(join(dir, "raw.rgba"), pixels);
  execFileSync("magick", ["-size", size, "-depth", "8", `rgba:${join(dir, "raw.rgba")}`, out]);
}

const scene = new Uint8ClampedArray(width * height * 4);

drawScene(scene, 17.6, 10 / 3);

png(scene, `${width}x${height}`, join(dir, "scene.png"));

const font = readFileSync(
  "node_modules/@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2",
).toString("base64");

const sceneData = readFileSync(join(dir, "scene.png")).toString("base64");

writeFileSync(
  join(dir, "card.html"),
  `<!doctype html><meta charset="utf-8"><style>
@font-face { font-family: Schibsted; src: url(data:font/woff2;base64,${font}) format("woff2"); font-weight: 100 900; }
* { margin: 0; }
body { width: 1200px; height: 630px; box-sizing: border-box; padding: 48px 60px; background: #141413; color: #ededea; font-family: Schibsted; }
img { display: block; width: ${width * 6}px; height: ${height * 6}px; image-rendering: pixelated; border-radius: 20px; }
h1 { margin-top: 34px; font-size: 64px; font-weight: 750; letter-spacing: -0.035em; line-height: 1; display: flex; justify-content: space-between; align-items: baseline; }
span { font-size: 30px; font-weight: 400; letter-spacing: 0; color: #9a9a95; }
</style>
<img src="data:image/png;base64,${sceneData}">
<h1>${profile.name}<span>${profile.role} · ${new URL(profile.url).hostname.replace("www.", "")}</span></h1>`,
);

execFileSync(
  chrome,
  [
    "--headless=new",
    "--hide-scrollbars",
    "--window-size=1200,630",
    `--screenshot=${join(process.cwd(), "public/opengraph-image.png")}`,
    `file://${join(dir, "card.html")}`,
  ],
  { stdio: "ignore" },
);

const crown = ["..XXX..", ".XXXXX.", "XX.X.XX", "X..X..X"];

const bands = [
  "#2a1f5c",
  "#2a1f5c",
  "#4a2c6c",
  "#4a2c6c",
  "#7a3a6e",
  "#a84c6a",
  "#d0645f",
  "#e8785c",
  "#f2905c",
  "#f2a060",
];

const icon = Array.from({ length: 16 }, (_, y) =>
  Array.from({ length: 16 }, (_, x) => {
    const palm = (x === 5 && y >= 5 && y <= 9) || (y >= 2 && y <= 5 && crown[y - 2][x - 2] === "X");

    if (palm || y === 10) return "#0a0812";

    if (y < 10) return Math.hypot(x - 11.5, y - 9.5) <= 3.2 ? "#ffd680" : bands[y];

    return y < 14 && Math.abs(x - 11.5) <= 4 - (y - 11) && (x + y) % 2 === 0 ? "#f2a060" : "#1a1530";
  }),
);

const rects = icon.flatMap((row, y) =>
  row.map((color, x) => `<rect x="${x}" y="${y}" width="1" height="1" fill="${color}"/>`),
);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" shape-rendering="crispEdges"><clipPath id="c"><rect width="16" height="16" rx="3" shape-rendering="geometricPrecision"/></clipPath><g clip-path="url(#c)">${rects.join("")}</g></svg>`;

writeFileSync("public/favicon.svg", svg);

writeFileSync(join(dir, "icon.svg"), svg);

for (const [density, size] of [
  [96, 16],
  [192, 32],
]) {
  execFileSync("magick", [
    "-background",
    "none",
    "-density",
    `${density}`,
    join(dir, "icon.svg"),
    join(dir, `${size}.png`),
  ]);
}

execFileSync("magick", [join(dir, "16.png"), join(dir, "32.png"), "public/favicon.ico"]);

rmSync(dir, { recursive: true });
