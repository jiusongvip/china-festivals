import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, "..", "public", "images");
const files = [
  "china-festival-hero.webp",
  "lhasa-thangka.webp",
  "nanning-san-yue-san.webp",
  "xishuangbanna-water-festival.webp",
];

const MAX = 150 * 1024; // 150KB

for (const f of files) {
  const p = join(imgDir, f);
  // 先完整读入内存，避免对原文件直接 .toFile 导致的句柄冲突
  const input = readFileSync(p);
  const orig = input.length;
  let out = null;
  let q = null;
  let resized = false;

  // 1) 纯 quality 压缩
  for (let quality = 80; quality >= 50; quality -= 5) {
    const buf = await sharp(input).webp({ quality }).toBuffer();
    if (buf.length <= MAX) {
      out = buf;
      q = quality;
      break;
    }
  }

  // 2) 若仍超限，resize 到 85% 宽度再压
  if (!out) {
    const meta = await sharp(input).metadata();
    const w = Math.round((meta.width || 900) * 0.85);
    for (let quality = 75; quality >= 50; quality -= 5) {
      const buf = await sharp(input).resize({ width: w }).webp({ quality }).toBuffer();
      if (buf.length <= MAX) {
        out = buf;
        q = quality;
        resized = true;
        break;
      }
    }
  }

  if (out) {
    writeFileSync(p, out);
    console.log(
      `${f}: ${(orig / 1024).toFixed(1)}KB -> ${(out.length / 1024).toFixed(1)}KB` +
        `${resized ? " (resized)" : ""} q=${q}`
    );
  } else {
    console.log(`${f}: FAILED to compress below 150KB`);
  }
}
