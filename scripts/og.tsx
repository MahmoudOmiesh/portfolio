import { readFileSync, writeFileSync } from "node:fs";

import { Resvg } from "@resvg/resvg-js";
import { encode } from "fast-png";
import satori from "satori";

import { drawScene, height, width } from "@/components/nile/scene";
import { profile } from "@/content/profile";

const scale = 6;
const pixels = new Uint8ClampedArray(width * height * 4);
const scene = new Uint8ClampedArray(pixels.length * scale * scale);

drawScene(pixels, 17.6, 10 / 3);

for (let index = 0; index < scene.length / 4; index++) {
  const x = Math.floor((index % (width * scale)) / scale);
  const y = Math.floor(index / (width * scale) / scale);
  const source = (y * width + x) * 4;

  scene.set(pixels.subarray(source, source + 4), index * 4);
}

const font = (weight: 400 | 700) => ({
  name: "Schibsted Grotesk",
  weight,
  data: readFileSync(`node_modules/@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-${weight}-normal.woff`),
});

const card = await satori(
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      padding: "48px 60px",
      background: "#141413",
      color: "#ededea",
      fontFamily: "Schibsted Grotesk",
    }}
  >
    <img
      alt=""
      src={`data:image/png;base64,${Buffer.from(encode({ width: width * scale, height: height * scale, data: scene })).toString("base64")}`}
      width={width * scale}
      height={height * scale}
      style={{ borderRadius: 20 }}
    />
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 40 }}>
      <span style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.035em" }}>{profile.name}</span>
      <span style={{ fontSize: 30, color: "#9a9a95" }}>
        {profile.role} · {new URL(profile.url).hostname.replace("www.", "")}
      </span>
    </div>
  </div>,
  { width: 1200, height: 630, fonts: [font(400), font(700)] },
);

writeFileSync("src/assets/opengraph-image.png", new Resvg(card).render().asPng());

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

function iconColor(x: number, y: number) {
  const palm = (x === 5 && y >= 5 && y <= 9) || (y >= 2 && y <= 5 && crown[y - 2][x - 2] === "X");

  if (palm || y === 10) return "#0a0812";

  if (y < 10) return Math.hypot(x - 11.5, y - 9.5) <= 3.2 ? "#ffd680" : bands[y];

  return y < 14 && Math.abs(x - 11.5) <= 4 - (y - 11) && (x + y) % 2 === 0 ? "#f2a060" : "#1a1530";
}

const rects = Array.from({ length: 256 }, (_, index) => {
  const x = index % 16;
  const y = Math.floor(index / 16);

  return `<rect x="${x}" y="${y}" width="1" height="1" fill="${iconColor(x, y)}"/>`;
});

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" shape-rendering="crispEdges"><clipPath id="c"><rect width="16" height="16" rx="3" shape-rendering="geometricPrecision"/></clipPath><g clip-path="url(#c)">${rects.join("")}</g></svg>`;

writeFileSync("public/favicon.svg", icon);

const sizes = [16, 32, 48];
const images = sizes.map((size) => new Resvg(icon, { fitTo: { mode: "width", value: size } }).render().asPng());
const header = Buffer.alloc(6 + 16 * sizes.length);
let offset = header.length;

header.writeUInt16LE(1, 2);

header.writeUInt16LE(sizes.length, 4);

sizes.forEach((size, index) => {
  const entry = 6 + 16 * index;

  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[index].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[index].length;
});

writeFileSync("public/favicon.ico", Buffer.concat([header, ...images]));
