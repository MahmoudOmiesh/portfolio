import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { parseArgs } from "node:util";

import { chromium, type Page } from "playwright-core";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    base: { type: "string", default: `http://localhost:${process.env.PORT ?? 4317}` },
    out: { type: "string", default: ".shots" },
    name: { type: "string" },
    width: { type: "string", default: "1440" },
    scheme: { type: "string", default: "light" },
    scale: { type: "string", default: "1" },
    element: { type: "string" },
    hover: { type: "string" },
    focus: { type: "string" },
    click: { type: "string" },
    frames: { type: "string" },
    full: { type: "boolean", default: false },
    still: { type: "boolean", default: false },
    help: { type: "boolean", default: false },
  },
});

if (values.help) {
  console.log(`bun run shot [path...] [options]   screenshots of a running build (bun run build && bun run start)

  --width 1440,390        viewport widths
  --scheme light,dark     color schemes
  --element <selector>    capture only this element instead of the viewport
  --hover|--focus|--click <selector>
                          act on an element before capturing
  --frames 0,150,300,600  capture at these ms after the action and join them into one strip
  --full                  capture the full page
  --still                 emulate prefers-reduced-motion
  --scale 2               device scale factor
  --base <url>            defaults to http://localhost:$PORT or :4317
  --out <dir>             defaults to .shots
  --name <prefix>         defaults to the page path`);
  process.exit(0);
}

const list = (value: string) => value.split(",").filter(Boolean);
const paths = positionals.length ? positionals : ["/"];
const frames = values.frames ? list(values.frames).map(Number) : [];
const out = resolve(values.out);

mkdirSync(out, { recursive: true });

const browsers = join(homedir(), ".cache/ms-playwright");

const chrome =
  process.env.CHROME ??
  readdirSync(browsers, { withFileTypes: true })
    .filter((entry) => entry.name.startsWith("chromium-"))
    .map((entry) => join(browsers, entry.name, "chrome-linux64/chrome"))
    .filter((path) => existsSync(path))
    .sort()
    .at(-1);

if (!chrome) throw new Error("No Chromium found. Set CHROME or run `bunx playwright install chromium`.");

const browser = await chromium.launch({ executablePath: chrome });
const written: string[] = [];
let errors = 0;

async function act(page: Page) {
  if (values.hover) await page.locator(values.hover).first().hover();

  if (values.focus) await page.locator(values.focus).first().focus();

  if (values.click) await page.locator(values.click).first().click();
}

async function capture(page: Page, file: string) {
  const path = join(out, `${file}.png`);
  const target = values.element ? page.locator(values.element).first() : page;

  await target.screenshot({ path, fullPage: values.full && !values.element });
  written.push(path);

  return path;
}

for (const path of paths)
  for (const width of list(values.width).map(Number))
    for (const scheme of list(values.scheme)) {
      if (scheme !== "light" && scheme !== "dark") throw new Error(`Unknown scheme ${scheme}`);

      const page = await browser.newPage({
        viewport: { width, height: width < 640 ? 844 : 900 },
        colorScheme: scheme,
        deviceScaleFactor: Number(values.scale),
        reducedMotion: values.still ? "reduce" : "no-preference",
      });

      page.on("pageerror", (error) => {
        errors++;
        console.error(`pageerror ${path}: ${error.message}`);
      });

      await page.goto(values.base + path, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);

      if (values.element) await page.locator(values.element).first().scrollIntoViewIfNeeded();

      await page.waitForTimeout(300);

      const name = `${values.name ?? (path.replace(/^\/|\/$/g, "").replace(/\W+/g, "-") || "home")}-${width}-${scheme}`;

      if (!frames.length) {
        await act(page);
        await page.waitForTimeout(values.hover || values.focus || values.click ? 600 : 0);
        await capture(page, name);
      } else {
        const start = performance.now();
        const strip: string[] = [];

        await act(page);

        for (const at of frames) {
          await page.waitForTimeout(Math.max(0, at - (performance.now() - start)));
          strip.push(await capture(page, `${name}-${Math.round(performance.now() - start)}ms`));
        }

        const joined = join(out, `${name}-frames.png`);

        execFileSync("magick", [...strip, "-background", "none", "-splice", "8x0", "+append", "-chop", "8x0", joined]);
        written.push(joined);
      }

      await page.close();
    }

await browser.close();

console.log(written.join("\n"));

if (errors) process.exit(1);
