// KPSS Arena — PWA ikon üretici (TEK SEFERLİK araç)
// Sadece Node'un dahili modüllerini (zlib) kullanır; npm bağımlılığı YOK,
// tarayıcıya hiçbir şey eklemez. Çalıştır: node tools/gen-icons.js
// Çıktı: icons/icon-192.png, icons/icon-512.png  (mezuniyet kepi rozeti)
const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

/* ---- minimal PNG kodlayıcı (RGBA, 8-bit) ---- */
const crcTable = (() => {
  const t = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}
function encodePNG(S, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(S, 0); ihdr.writeUInt32BE(S, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit, RGBA
  const stride = S * 4;
  const raw = Buffer.alloc((stride + 1) * S);
  for (let y = 0; y < S; y++) {
    raw[y * (stride + 1)] = 0; // filter 0
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

/* ---- çizim ---- */
function build(S) {
  const rgba = Buffer.alloc(S * S * 4);
  const idx = (x, y) => (y * S + x) * 4;
  const radius = S * 0.22;
  const dist = (x, y, cx, cy) => Math.hypot(x - cx, y - cy);

  // arka plan: yuvarlatılmış köşeli, dikey degrade (#1e1b4b -> #0f172a)
  for (let y = 0; y < S; y++) {
    const t = y / (S - 1);
    const br = Math.round(30 + (15 - 30) * t);
    const bg = Math.round(27 + (23 - 27) * t);
    const bb = Math.round(75 + (42 - 75) * t);
    for (let x = 0; x < S; x++) {
      let inside = true;
      if (x < radius && y < radius) inside = dist(x, y, radius, radius) <= radius;
      else if (x > S - radius && y < radius) inside = dist(x, y, S - radius, radius) <= radius;
      else if (x < radius && y > S - radius) inside = dist(x, y, radius, S - radius) <= radius;
      else if (x > S - radius && y > S - radius) inside = dist(x, y, S - radius, S - radius) <= radius;
      const i = idx(x, y);
      if (inside) { rgba[i] = br; rgba[i + 1] = bg; rgba[i + 2] = bb; rgba[i + 3] = 255; }
      else { rgba[i + 3] = 0; }
    }
  }

  const blend = (x, y, r, g, b) => {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || y < 0 || x >= S || y >= S) return;
    const i = idx(x, y);
    if (rgba[i + 3] === 0) return; // rozet dışına taşma
    rgba[i] = r; rgba[i + 1] = g; rgba[i + 2] = b; rgba[i + 3] = 255;
  };
  const fillCircle = (cx, cy, rad, r, g, b) => {
    for (let y = Math.floor(cy - rad); y <= Math.ceil(cy + rad); y++)
      for (let x = Math.floor(cx - rad); x <= Math.ceil(cx + rad); x++)
        if ((x - cx) ** 2 + (y - cy) ** 2 <= rad * rad) blend(x, y, r, g, b);
  };
  const fillPoly = (pts, r, g, b) => {
    const minY = Math.max(0, Math.floor(Math.min(...pts.map((p) => p[1]))));
    const maxY = Math.min(S - 1, Math.ceil(Math.max(...pts.map((p) => p[1]))));
    for (let y = minY; y <= maxY; y++) {
      const xs = [];
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const yi = pts[i][1], yj = pts[j][1], xi = pts[i][0], xj = pts[j][0];
        if ((yi > y) !== (yj > y)) xs.push(xj + (y - yj) * (xi - xj) / (yi - yj));
      }
      xs.sort((a, b2) => a - b2);
      for (let k = 0; k + 1 < xs.length; k += 2)
        for (let x = Math.ceil(xs[k]); x <= Math.floor(xs[k + 1]); x++) blend(x, y, r, g, b);
    }
  };
  const drawLine = (x0, y0, x1, y1, th, r, g, b) => {
    const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      fillCircle(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, th, r, g, b);
    }
  };

  // mezuniyet kepi
  const cx = S / 2, cy = S * 0.45;
  const hw = S * 0.36, hh = S * 0.18;
  // kep tabanı (baş kısmı) — önce çiz, board üstüne binsin
  fillPoly([[cx - hw * 0.5, cy + hh * 0.1], [cx + hw * 0.5, cy + hh * 0.1], [cx + hw * 0.42, cy + hh * 1.0], [cx - hw * 0.42, cy + hh * 1.0]], 203, 213, 225);
  // üst plaka (eşkenar dörtgen)
  fillPoly([[cx, cy - hh], [cx + hw, cy], [cx, cy + hh], [cx - hw, cy]], 244, 246, 252);
  // orta düğme
  fillCircle(cx, cy, S * 0.045, 148, 163, 184);
  // püskül (altın)
  const tx = cx + hw * 0.7, ty = cy + hh * 0.12;
  drawLine(cx, cy, tx, ty, S * 0.013, 251, 191, 36);
  drawLine(tx, ty, tx, cy + S * 0.2, S * 0.013, 251, 191, 36);
  fillCircle(tx, cy + S * 0.21, S * 0.035, 251, 191, 36);

  return encodePNG(S, rgba);
}

const outDir = path.join(__dirname, "..", "icons");
fs.mkdirSync(outDir, { recursive: true });
[192, 512].forEach((S) => {
  const file = path.join(outDir, `icon-${S}.png`);
  fs.writeFileSync(file, build(S));
  console.log("yazıldı:", file);
});
console.log("✓ İkonlar üretildi.");
