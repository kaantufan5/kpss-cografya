// KPSS Arena - Türkiye il + bölge harita verisi üretici (TEK SEFERLİK araç)
// tools/turkiye-source.svg (Wikimedia Commons "BlankMapTurkishProvincesRegions.svg",
// A. G. Baydin 2006, CC BY-SA 3.0 / GFDL 1.2+) dosyasındaki 81 il path'ini ayrıştırır,
// her ile aşağıdaki sabit tablodan bir bölge atar, path'in bbox merkezini (cx,cy) hesaplar.
// Sadece Node'un dahili modüllerini kullanır; npm bağımlılığı YOK, tarayıcıya bir şey eklemez.
// Çalıştır: node tools/gen-map.js
// Çıktı: data/turkiye-harita.js  (ELLE DÜZENLEME - yeniden çalıştırılınca üzerine yazılır)
const fs = require("fs");
const path = require("path");

// il kodu (ISO 3166-2:TR plaka no) -> bölge id (1941 Coğrafya Kongresi'nin 7 bölgesi)
const REGION_OF = {
  // Marmara (11)
  "TR-10": "marmara", // Balıkesir
  "TR-11": "marmara", // Bilecik
  "TR-16": "marmara", // Bursa
  "TR-17": "marmara", // Çanakkale
  "TR-22": "marmara", // Edirne
  "TR-34": "marmara", // İstanbul
  "TR-39": "marmara", // Kırklareli
  "TR-41": "marmara", // Kocaeli
  "TR-54": "marmara", // Sakarya
  "TR-59": "marmara", // Tekirdağ
  "TR-77": "marmara", // Yalova
  // İç Anadolu (13)
  "TR-06": "ic", // Ankara
  "TR-18": "ic", // Çankırı
  "TR-26": "ic", // Eskişehir
  "TR-38": "ic", // Kayseri
  "TR-40": "ic", // Kırşehir
  "TR-42": "ic", // Konya
  "TR-50": "ic", // Nevşehir
  "TR-51": "ic", // Niğde
  "TR-58": "ic", // Sivas
  "TR-66": "ic", // Yozgat
  "TR-68": "ic", // Aksaray
  "TR-70": "ic", // Karaman
  "TR-71": "ic", // Kırıkkale
  // Ege (8)
  "TR-03": "ege", // Afyonkarahisar
  "TR-09": "ege", // Aydın
  "TR-20": "ege", // Denizli
  "TR-35": "ege", // İzmir
  "TR-43": "ege", // Kütahya
  "TR-45": "ege", // Manisa
  "TR-48": "ege", // Muğla
  "TR-64": "ege", // Uşak
  // Akdeniz (8)
  "TR-01": "akdeniz", // Adana
  "TR-07": "akdeniz", // Antalya
  "TR-15": "akdeniz", // Burdur
  "TR-31": "akdeniz", // Hatay
  "TR-32": "akdeniz", // Isparta
  "TR-33": "akdeniz", // Mersin
  "TR-46": "akdeniz", // Kahramanmaraş
  "TR-80": "akdeniz", // Osmaniye
  // Karadeniz (18)
  "TR-05": "karadeniz", // Amasya
  "TR-08": "karadeniz", // Artvin
  "TR-14": "karadeniz", // Bolu
  "TR-19": "karadeniz", // Çorum
  "TR-28": "karadeniz", // Giresun
  "TR-29": "karadeniz", // Gümüşhane
  "TR-37": "karadeniz", // Kastamonu
  "TR-52": "karadeniz", // Ordu
  "TR-53": "karadeniz", // Rize
  "TR-55": "karadeniz", // Samsun
  "TR-57": "karadeniz", // Sinop
  "TR-60": "karadeniz", // Tokat
  "TR-61": "karadeniz", // Trabzon
  "TR-67": "karadeniz", // Zonguldak
  "TR-69": "karadeniz", // Bayburt
  "TR-74": "karadeniz", // Bartın
  "TR-78": "karadeniz", // Karabük
  "TR-81": "karadeniz", // Düzce
  // Doğu Anadolu (14)
  "TR-04": "dogu", // Ağrı
  "TR-12": "dogu", // Bingöl
  "TR-13": "dogu", // Bitlis
  "TR-23": "dogu", // Elazığ
  "TR-24": "dogu", // Erzincan
  "TR-25": "dogu", // Erzurum
  "TR-30": "dogu", // Hakkari
  "TR-36": "dogu", // Kars
  "TR-44": "dogu", // Malatya
  "TR-49": "dogu", // Muş
  "TR-62": "dogu", // Tunceli
  "TR-65": "dogu", // Van
  "TR-75": "dogu", // Ardahan
  "TR-76": "dogu", // Iğdır
  // Güneydoğu Anadolu (9)
  "TR-02": "gdogu", // Adıyaman
  "TR-21": "gdogu", // Diyarbakır
  "TR-27": "gdogu", // Gaziantep
  "TR-47": "gdogu", // Mardin
  "TR-56": "gdogu", // Siirt
  "TR-63": "gdogu", // Şanlıurfa
  "TR-72": "gdogu", // Batman
  "TR-73": "gdogu", // Şırnak
  "TR-79": "gdogu", // Kilis
};

const REGION_NAMES = {
  marmara: "Marmara",
  ege: "Ege",
  akdeniz: "Akdeniz",
  karadeniz: "Karadeniz",
  ic: "İç Anadolu",
  dogu: "Doğu Anadolu",
  gdogu: "Güneydoğu Anadolu",
};

// sabit tablo bütünlüğü: TR-01..TR-81 hepsi atanmış olmalı
for (let i = 1; i <= 81; i++) {
  const code = "TR-" + String(i).padStart(2, "0");
  if (!REGION_OF[code]) throw new Error("REGION_OF tablosunda eksik: " + code);
}

const svg = fs.readFileSync(path.join(__dirname, "turkiye-source.svg"), "utf8");

const provinces = [];
const pathRe = /<path([^>]*)\/>/g;
let m;
while ((m = pathRe.exec(svg))) {
  const attrs = {};
  const attrRe = /(\w+)="([^"]*)"/g;
  let am;
  while ((am = attrRe.exec(m[1]))) attrs[am[1]] = am[2];
  if (!attrs.id || !attrs.name || !attrs.d) continue;

  const region = REGION_OF[attrs.id];
  if (!region) throw new Error("bölge eşlemesi yok: " + attrs.id);

  // bbox merkezi: path d'deki tüm sayıları (x,y) çiftleri olarak oku (komutlar mutlak M/C/L/Z)
  const nums = (attrs.d.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = nums[i], y = nums[i + 1];
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }

  provinces.push({
    id: attrs.id,
    name: attrs.name,
    region,
    cx: Math.round((minX + maxX) / 2 * 100) / 100,
    cy: Math.round((minY + maxY) / 2 * 100) / 100,
    d: attrs.d,
  });
}

if (provinces.length !== 81) throw new Error("81 il bekleniyor, ayrıştırılan: " + provinces.length);
provinces.sort((a, b) => a.id.localeCompare(b.id));

const out = [];
out.push("// KPSS Arena - Türkiye il + bölge harita verisi");
out.push("// Kaynak: Wikimedia Commons, \"BlankMapTurkishProvincesRegions.svg\", A. G. Baydin (2006), CC BY-SA 3.0 / GFDL 1.2+");
out.push("// tools/gen-map.js ile tools/turkiye-source.svg'den üretildi. ELLE DÜZENLEME - yeniden çalıştırılınca üzerine yazılır.");
out.push("window.KPSS_DATA = window.KPSS_DATA || {};");
out.push("window.KPSS_DATA._map = {");
out.push('  viewBox: "0 0 1052.3622 744.09448",');
out.push("  regions: {");
for (const [id, name] of Object.entries(REGION_NAMES)) out.push(`    ${id}: ${JSON.stringify(name)},`);
out.push("  },");
out.push("  provinces: [");
for (const p of provinces) {
  out.push(`    { id: ${JSON.stringify(p.id)}, name: ${JSON.stringify(p.name)}, region: ${JSON.stringify(p.region)}, cx: ${p.cx}, cy: ${p.cy}, d: ${JSON.stringify(p.d)} },`);
}
out.push("  ]");
out.push("};");

const outPath = path.join(__dirname, "..", "data", "turkiye-harita.js");
fs.writeFileSync(outPath, out.join("\n") + "\n");

const counts = {};
for (const p of provinces) counts[p.region] = (counts[p.region] || 0) + 1;
console.log("yazıldı:", outPath, "—", provinces.length, "il");
for (const id of Object.keys(REGION_NAMES)) console.log(`  ${id.padEnd(10)} ${REGION_NAMES[id].padEnd(20)} ${counts[id] || 0} il`);
console.log("✓ Harita verisi üretildi.");
