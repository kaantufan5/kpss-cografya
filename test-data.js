// Veri bütünlüğü testi (node test-data.js)
global.window = {};
require("./data/units.js");
require("./data/turkiye-harita.js");
require("./data/tarih.js");
require("./data/cografya.js");
require("./data/vatandaslik.js");
require("./data/matematik.js");
const D = global.window.KPSS_DATA;
const UNITS = D._units || {};
let errors = [];

const MAP = D._map || { regions: {}, provinces: [] };
const regions = Object.keys(MAP.regions);
const provinceNames = new Set(MAP.provinces.map((p) => p.name));
const SUBJECTS = ["tarih", "cografya", "vatandaslik", "matematik"];
const LEVELED_FIELDS = ["quiz", "oncul", "tf", "clues", "numbers", "enler", "iller"];

function unitIds(subj) { return (UNITS[subj] || []).map((u) => u.id); }

for (const subj of SUBJECTS) {
  const d = D[subj];
  if (!d) { errors.push(subj + ": veri yok"); continue; }
  const validUnits = unitIds(subj);

  // ortak: unit/level etiketleri (varsa) geçerli olmalı
  function chkTag(loc, item) {
    if (item.unit != null && validUnits.length && !validUnits.includes(item.unit))
      errors.push(`${loc}: geçersiz unit '${item.unit}'`);
    if (item.level != null && ![1, 2, 3].includes(item.level))
      errors.push(`${loc}: geçersiz level '${item.level}' (1/2/3 olmalı)`);
  }

  // quiz + enler
  for (const key of ["quiz", "enler"]) {
    if (!d[key]) continue;
    d[key].forEach((q, i) => {
      const loc = `${subj}.${key}[${i}]`;
      if (!q.q || !q.exp) errors.push(`${loc}: q/exp eksik`);
      if (!Array.isArray(q.o) || q.o.length !== 4) errors.push(`${loc}: 4 şık yok`);
      if (q.a < 0 || q.a > 3) errors.push(`${loc}: cevap indeksi hatalı`);
      if (new Set(q.o).size !== q.o.length) errors.push(`${loc}: tekrar eden şık`);
      chkTag(loc, q);
    });
  }

  // oncul (öncül I-II-III)
  if (d.oncul) d.oncul.forEach((o, i) => {
    const loc = `${subj}.oncul[${i}]`;
    if (!o.q || !o.exp) errors.push(`${loc}: q/exp eksik`);
    const n = Array.isArray(o.items) ? o.items.length : 0;
    if (n < 2 || n > 4) errors.push(`${loc}: items 2-4 ifade olmalı`);
    if (Array.isArray(o.items) && o.items.some((x) => !x)) errors.push(`${loc}: boş öncül var`);
    if (!Array.isArray(o.correct) || o.correct.length < 1) errors.push(`${loc}: correct boş olamaz`);
    else {
      o.correct.forEach((c) => {
        if (typeof c !== "number" || c < 0 || c >= n) errors.push(`${loc}: correct indeksi sınır dışı (${c})`);
      });
      if (new Set(o.correct).size !== o.correct.length) errors.push(`${loc}: correct'te tekrar eden indeks`);
      if (o.correct.length === n) errors.push(`${loc}: tüm öncüller doğru — çeldiricisiz (en az 1 yanlış öncül olmalı)`);
    }
    chkTag(loc, o);
  });

  // tf
  if (d.tf) d.tf.forEach((q, i) => {
    const loc = `${subj}.tf[${i}]`;
    if (typeof q.t !== "boolean" || !q.s || !q.exp) errors.push(`${loc}: alan eksik`);
    chkTag(loc, q);
  });

  // match: tur içinde sağ ve sol değerler benzersiz olmalı
  if (d.match) d.match.forEach((r, i) => {
    const loc = `${subj}.match[${i}] (${r.title})`;
    const lefts = r.pairs.map((p) => p[0]), rights = r.pairs.map((p) => p[1]);
    if (new Set(lefts).size !== lefts.length) errors.push(`${loc}: tekrar eden sol değer`);
    if (new Set(rights).size !== rights.length) errors.push(`${loc}: tekrar eden sağ değer`);
    r.pairs.forEach((p, j) => { if (p.length !== 2 || !p[0] || !p[1]) errors.push(`${loc}[${j}]: çift hatalı`); });
    chkTag(loc, r);
  });

  // timeline
  if (d.timeline) {
    const ys = d.timeline.map((e) => e.y);
    if (new Set(ys).size !== ys.length) errors.push(`${subj}.timeline: tekrar eden yıl (sıralama belirsizleşir)`);
    if (d.timeline.length < 15) errors.push(`${subj}.timeline: 15'ten az olay (3 tur x 5 gerekli)`);
    d.timeline.forEach((e, i) => {
      const loc = `${subj}.timeline[${i}]`;
      if (!e.e || !e.label || typeof e.y !== "number") errors.push(`${loc}: alan eksik`);
      chkTag(loc, e);
    });
  }

  // clues
  if (d.clues) d.clues.forEach((c, i) => {
    const loc = `${subj}.clues[${i}]`;
    if (!c.options.includes(c.answer)) errors.push(`${loc}: cevap şıklarda yok (${c.answer})`);
    if (c.options.length !== 4) errors.push(`${loc}: 4 şık yok`);
    if (c.clues.length !== 3) errors.push(`${loc}: 3 ipucu yok`);
    if (new Set(c.options).size !== 4) errors.push(`${loc}: tekrar eden şık`);
    chkTag(loc, c);
  });

  // numbers
  if (d.numbers) d.numbers.forEach((n, i) => {
    const loc = `${subj}.numbers[${i}]`;
    if (!n.opts.includes(n.n)) errors.push(`${loc}: cevap şıklarda yok (${n.n})`);
    if (n.opts.length !== 4) errors.push(`${loc}: 4 şık yok`);
    if (new Set(n.opts).size !== 4) errors.push(`${loc}: tekrar eden şık`);
    chkTag(loc, n);
  });

  // groups (gruplara ayır)
  if (d.groups) d.groups.forEach((gr, i) => {
    const loc = `${subj}.groups[${i}] (${gr.title || "?"})`;
    if (!gr.title) errors.push(`${loc}: title eksik`);
    if (!Array.isArray(gr.groups) || gr.groups.length < 2 || gr.groups.length > 4)
      errors.push(`${loc}: 2-4 grup olmalı`);
    if (gr.groups && new Set(gr.groups).size !== gr.groups.length) errors.push(`${loc}: tekrar eden grup adı`);
    if (!Array.isArray(gr.items) || gr.items.length < 4) errors.push(`${loc}: en az 4 öğe olmalı`);
    const used = new Set();
    if (Array.isArray(gr.items)) gr.items.forEach((it, j) => {
      if (!it || !it.t) errors.push(`${loc}[${j}]: öğe metni (t) eksik`);
      if (typeof it.g !== "number" || it.g < 0 || !gr.groups || it.g >= gr.groups.length)
        errors.push(`${loc}[${j}]: grup indeksi (g) sınır dışı`);
      else used.add(it.g);
    });
    if (gr.groups && used.size < gr.groups.length) errors.push(`${loc}: boş kalan grup var (her grupta en az 1 öğe olmalı)`);
    chkTag(loc, gr);
  });

  // map (bölge avı)
  if (d.map) d.map.forEach((m, i) => {
    const loc = `${subj}.map[${i}]`;
    if (!regions.includes(m.r)) errors.push(`${loc}: geçersiz bölge '${m.r}'`);
    if (!m.c || !m.exp) errors.push(`${loc}: alan eksik`);
    chkTag(loc, m);
  });

  // iller (il bulmaca)
  if (d.iller) d.iller.forEach((it, i) => {
    const loc = `${subj}.iller[${i}]`;
    if (!provinceNames.size) errors.push(`${loc}: harita verisi (_map.provinces) yüklenemedi`);
    else if (!provinceNames.has(it.il)) errors.push(`${loc}: geçersiz il '${it.il}'`);
    if (!it.c || !it.exp) errors.push(`${loc}: alan eksik`);
    chkTag(loc, it);
  });

  // cards
  d.cards.forEach((c, i) => {
    const loc = `${subj}.cards[${i}]`;
    if (!c.front || !c.back) errors.push(`${loc}: alan eksik`);
    chkTag(loc, c);
  });
}

// ---- özet: ders bazlı alan sayıları ----
for (const subj of SUBJECTS) {
  const d = D[subj];
  const counts = Object.keys(d).map((k) => `${k}:${Array.isArray(d[k]) ? d[k].length : "?"}`).join(" ");
  console.log(subj.toUpperCase(), "→", counts);
}

// ---- özet: ünite × seviye dağılımı (ünite yapısına geçmiş dersler) ----
function countLeveled(subj, unit, level) {
  const d = D[subj];
  let n = 0;
  for (const f of LEVELED_FIELDS) {
    if (!d[f]) continue;
    n += d[f].filter((x) => (x.unit || "genel") === unit && (x.level || 2) === level).length;
  }
  return n;
}
for (const subj of SUBJECTS) {
  if (!(UNITS[subj] && UNITS[subj].length)) continue;
  console.log(`\n${subj.toUpperCase()} — ünite × seviye (quiz+oncul+tf+clues):`);
  let gaps = 0;
  for (const u of UNITS[subj]) {
    const c = [1, 2, 3].map((l) => countLeveled(subj, u.id, l));
    const tot = c[0] + c[1] + c[2];
    if (c.some((x) => x === 0)) gaps++;
    console.log(`  ${u.id.padEnd(18)} L1:${String(c[0]).padStart(2)}  L2:${String(c[1]).padStart(2)}  L3:${String(c[2]).padStart(2)}  · toplam ${tot}`);
  }
  // ünite başına etiketsiz (genel) kalan var mı?
  const orphan = countLeveled(subj, "genel", 1) + countLeveled(subj, "genel", 2) + countLeveled(subj, "genel", 3);
  if (orphan) console.log(`  (!) etiketsiz/genel: ${orphan} öğe — bunlar bir üniteye atanmamış`);
  if (gaps) console.log(`  (i) ${gaps} ünitede en az bir seviye boş`);
}

if (errors.length) { console.log("\nHATALAR:"); errors.forEach((e) => console.log(" ✗ " + e)); process.exit(1); }
console.log("\n✓ Tüm veri bütünlüğü testleri geçti.");
