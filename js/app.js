"use strict";

/* =====================================================
   KPSS Arena - oyun motoru
   ===================================================== */

const app = document.getElementById("app");

/* ---------- yardımcılar ---------- */
const shuffle = (arr) => {
  const r = [...arr];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
const sample = (arr, n) => shuffle(arr).slice(0, n);
const $ = (sel) => document.querySelector(sel);

/* ---------- kayıt (localStorage) ---------- */
const STORE = "kpssArenaV1";
let save;
try { save = JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { save = {}; }
save.xp = save.xp || { tarih: 0, cografya: 0, vatandaslik: 0, matematik: 0 };
save.best = save.best || {};
save.prog = save.prog || {};   // save.prog[ders][ünite][seviye] = en iyi yüzde (0..1)
save.sound = save.sound !== false;
function persist() { try { localStorage.setItem(STORE, JSON.stringify(save)); } catch (e) {} }

/* ---------- XP seviye sistemi ---------- */
const LEVELS = [
  { min: 0, name: "Çaylak" },
  { min: 200, name: "Acemi" },
  { min: 500, name: "Öğrenci" },
  { min: 1000, name: "Araştırmacı" },
  { min: 1800, name: "Uzman" },
  { min: 2800, name: "Usta" },
  { min: 4000, name: "KPSS Şampiyonu" }
];
function levelOf(xp) {
  let lv = LEVELS[0], next = null;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].min) { lv = LEVELS[i]; next = LEVELS[i + 1] || null; }
  }
  return { lv, next };
}

/* ---------- zorluk seviyeleri ---------- */
const TIERS = {
  1: { name: "Temel", icon: "🌱" },
  2: { name: "Pekiştirme", icon: "💪" },
  3: { name: "Sınav", icon: "🎯" }
};

/* ---------- ses ---------- */
let audioCtx = null;
function tone(freq, delay, dur, type, vol) {
  const t = audioCtx.currentTime + delay;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(audioCtx.destination);
  o.start(t); o.stop(t + dur);
}
function sfx(kind) {
  if (!save.sound) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    if (kind === "ok") { tone(587, 0, 0.12, "sine", 0.18); tone(880, 0.1, 0.18, "sine", 0.18); }
    else if (kind === "bad") { tone(196, 0, 0.25, "sawtooth", 0.12); }
    else if (kind === "click") { tone(440, 0, 0.06, "triangle", 0.1); }
    else if (kind === "win") { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.22, "sine", 0.16)); }
  } catch (e) {}
}

/* ---------- zamanlayıcı temizliği ---------- */
let activeTimers = [];
function addTimer(id) { activeTimers.push(id); }
function stopTimers() { activeTimers.forEach(clearInterval); activeTimers.forEach(clearTimeout); activeTimers = []; }

/* ---------- küçük bildirim ---------- */
function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast pop";
  t.textContent = msg;
  document.body.appendChild(t);
  addTimer(setTimeout(() => t.remove(), 1900));
}

/* ---------- konfeti ---------- */
function confetti() {
  const colors = ["#f59e0b", "#34d399", "#f87171", "#60a5fa", "#c084fc", "#facc15"];
  const wrap = document.createElement("div");
  wrap.className = "confetti";
  for (let i = 0; i < 70; i++) {
    const p = document.createElement("i");
    p.style.left = Math.random() * 100 + "%";
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = Math.random() * 0.9 + "s";
    p.style.animationDuration = 2 + Math.random() * 1.6 + "s";
    p.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  addTimer(setTimeout(() => wrap.remove(), 4200));
}

/* =====================================================
   DERS, ÜNİTE ve OYUN tanımları
   ===================================================== */
const SUBJECTS = {
  tarih: {
    name: "Tarih", icon: "📜",
    tagline: "İlk Türk devletlerinden Cumhuriyet'e",
    info: "",
    games: ["quiz", "oncul", "tf", "box", "clues", "timeline", "match", "memory", "groups", "cards"]
  },
  cografya: {
    name: "Coğrafya", icon: "🌍",
    tagline: "Türkiye'nin fiziki, beşeri ve ekonomik coğrafyası",
    info: "",
    games: ["quiz", "oncul", "map", "iller", "enler", "tf", "box", "clues", "match", "memory", "groups", "cards"]
  },
  vatandaslik: {
    name: "Vatandaşlık", icon: "⚖️",
    tagline: "Anayasa, yönetim yapısı, haklar ve özgürlükler",
    info: "",
    games: ["quiz", "oncul", "numbers", "tf", "box", "clues", "match", "memory", "groups", "cards"]
  },
  matematik: {
    name: "Matematik", icon: "🧮",
    tagline: "İşlem hızını artıran kısa pratikler",
    info: "",
    // Matematik ders/ünite/oyun yapısı KULLANMAZ; düz pratik listesi gösterir (bkz. PRACTICES.matematik)
    games: []
  }
};

const GAMES = {
  quiz:     { name: "Bilgi Yarışması",     icon: "🎯", desc: "Çoktan seçmeli sorular; her sorunun ardından öğretici açıklama.", run: (s, o) => runQuiz(s, "quiz", "Bilgi Yarışması", o) },
  oncul:    { name: "Öncül Avı (I-II-III)", icon: "🧠", desc: "KPSS'in klasik formatı: hangi öncüller doğru?", run: (s, o) => runOncul(s, o) },
  enler:    { name: "Türkiye'nin En'leri", icon: "🏆", desc: "En yüksek, en uzun, en kalabalık... Rekorları bil!", run: (s, o) => runQuiz(s, "enler", "Türkiye'nin En'leri", o) },
  tf:       { name: "Doğru mu Yanlış mı?", icon: "⚡", desc: "Süreli hız turu. Yanlışlarda süre durur, açıklama gelir.", run: (s, o) => runTF(s, o) },
  match:    { name: "Eşleştirme",          icon: "🧩", desc: "Kavramları doğru karşılıklarıyla eşleştir.", run: (s, o) => runMatch(s, o) },
  timeline: { name: "Zaman Tüneli",        icon: "⏳", desc: "Olayları eskiden yeniye sıraya diz.", run: (s, o) => runTimeline(s, o) },
  clues:    { name: "İpucu Avı",           icon: "🕵️", desc: "Az ipucuyla bilirsen çok puan kazanırsın.", run: (s, o) => runClues(s, o) },
  map:      { name: "Bölge Avı",           icon: "🗺️", desc: "İpucunu oku, haritada doğru bölgeyi bul.", run: (s, o) => runMap(s, o) },
  iller:    { name: "İl Bulmaca",          icon: "📍", desc: "İpucunu oku, haritada doğru ili bul.", run: (s, o) => runIller(s, o) },
  numbers:  { name: "Sayı Avcısı",         icon: "🔢", desc: "600, 360, 15, %7... Anayasanın kritik sayıları.", run: (s, o) => runNumbers(s, o) },
  memory:   { name: "Hafıza Kartları",     icon: "🎴", desc: "Kartları çevir, eşleşen çiftleri bul. Hafızanı çalıştır.", run: (s, o) => runMemory(s, o) },
  box:      { name: "Kutuyu Aç",           icon: "🎁", desc: "Kutu seç, içinden çıkan soruyu çöz — sürprizli quiz.", run: (s, o) => runBox(s, o) },
  groups:   { name: "Gruplara Ayır",       icon: "🗂️", desc: "Her öğeyi ait olduğu doğru gruba yerleştir.", run: (s, o) => runGroups(s, o) },
  cards:    { name: "Bilgi Kartları",      icon: "🃏", desc: "Çalışma modu: kartı çevir, oku, öğren.", run: (s, o) => runCards(s, o) },
  carpim:   { name: "Çarpım Tablosu",      icon: "✖️", desc: "1×1'den 10×10'a tüm çarpımlar — hız pratiği.", run: (s, o) => runMultiplication(s, o) },
  pow2:     { name: "2'nin Kuvvetleri",    icon: "🔢", desc: "2¹'den 2¹⁰'a kadar tüm kuvvetler — hız pratiği.", run: (s, o) => runPowers(s, o, 2, 10) },
  pow3:     { name: "3'ün Kuvvetleri",     icon: "🔢", desc: "3¹'den 3⁶'ya kadar tüm kuvvetler — hız pratiği.", run: (s, o) => runPowers(s, o, 3, 6) },
  pow5:     { name: "5'in Kuvvetleri",     icon: "🔢", desc: "5¹'den 5⁵'e kadar tüm kuvvetler — hız pratiği.", run: (s, o) => runPowers(s, o, 5, 5) },
  kupler:   { name: "Küpler",              icon: "🧊", desc: "1³'ten 10³'e kadar tüm küpler — hız pratiği.", run: (s, o) => runCubes(s, o, 10) },
  faktoriyel: { name: "Faktöriyeller",     icon: "❗", desc: "0!'den 10!'e kadar tüm faktöriyeller — hız pratiği.", run: (s, o) => runFactorials(s, o, 10) },
  asal:     { name: "Asal mı?",            icon: "🔍", desc: "0–100 arası sayılar: asal mı, değil mi?", run: (s, o) => runPrime(s, o) },
  yuzdeKesir:   { name: "Yüzde → Kesir",   icon: "％", desc: "%10 = 1/10 gibi yüzde-kesir karşılıklarını bul.", run: (s, o) => runConvert(s, o, "Yüzde → Kesir", YUZDE_KESIR) },
  ondalikKesir: { name: "Ondalık → Kesir", icon: "🔟", desc: "0,2 = 1/5 gibi ondalık-kesir karşılıklarını bul.", run: (s, o) => runConvert(s, o, "Ondalık → Kesir", ONDALIK_KESIR) },
  bolunebilme:  { name: "Bölünebilme Kuralları", icon: "➗", desc: "Hangi sayının bölünebilme kuralı hangisidir?", run: (s, o) => runDivisibility(s, o) },
  karekok:      { name: "Karekök", icon: "√", desc: "√144 = 12 gibi tam karelerin (1²–20²) kökünü bul.", run: (s, o) => runSquareRoots(s, o, 20) },
  geoFormul:    { name: "Alan & Çevre Formülleri", icon: "📐", desc: "Şeklin alan/çevre formülünü seç.", run: (s, o) => runConvert(s, o, "Alan & Çevre Formülleri", GEO_FORMULA) },
  pisagor:      { name: "Pisagor Üçlüleri", icon: "🔺", desc: "Dik üçgende eksik kenarı bul.", run: (s, o) => runPythagoras(s, o) },
  icAcilar:     { name: "Çokgen İç Açıları", icon: "🔷", desc: "Çokgenin iç açıları toplamını seç.", run: (s, o) => runConvert(s, o, "Çokgen İç Açıları", POLY_ANGLES) },
  hacim:        { name: "Cisimlerin Hacmi", icon: "📦", desc: "Katı cismin hacim formülünü seç.", run: (s, o) => runConvert(s, o, "Cisimlerin Hacmi", SOLID_VOLUME) },
  ozelUcgen:    { name: "Özel Üçgenler", icon: "🔻", desc: "30-60-90 ve 45-45-90 kenar oranları.", run: (s, o) => runConvert(s, o, "Özel Üçgenler", SPECIAL_TRI) },
  acilar:       { name: "Tümler & Bütünler", icon: "∠", desc: "Bir açının tümleri (90°) ve bütünleri (180°).", run: (s, o) => runAngles(s, o) },
  ozdeslik:     { name: "Özdeşlikler", icon: "🟰", desc: "Çarpanlara ayırma ve özdeşliklerin açılımı.", run: (s, o) => runConvert(s, o, "Özdeşlikler", IDENTITIES) },
  usluKural:    { name: "Üslü Sayı Kuralları", icon: "xⁿ", desc: "Üslü sayılarda işlem kurallarının sonucu.", run: (s, o) => runConvert(s, o, "Üslü Sayı Kuralları", EXPONENT_RULES) },
  kokluKural:   { name: "Köklü Sayı Kuralları", icon: "√x", desc: "Köklü ifadelerde işlem kurallarının sonucu.", run: (s, o) => runConvert(s, o, "Köklü Sayı Kuralları", ROOT_RULES) },
  seriToplam:   { name: "Ardışık Sayı Toplamları", icon: "∑", desc: "Seri toplam formüllerinin kapalı hâli.", run: (s, o) => runConvert(s, o, "Ardışık Sayı Toplamları", SERIES_SUMS) }
};

/* Cebir: özdeşlikler / çarpanlara ayırma [ifade, açılım] */
const IDENTITIES = [
  ["(a + b)²", "a² + 2ab + b²"],
  ["(a − b)²", "a² − 2ab + b²"],
  ["a² − b²", "(a − b)(a + b)"],
  ["a² + b²", "(a + b)² − 2ab"],
  ["(a + b)³", "a³ + 3a²b + 3ab² + b³"],
  ["(a − b)³", "a³ − 3a²b + 3ab² − b³"],
  ["a³ + b³", "(a + b)(a² − ab + b²)"],
  ["a³ − b³", "(a − b)(a² + ab + b²)"]
];
/* Cebir: üslü sayı kuralları [ifade, sonuç] */
const EXPONENT_RULES = [
  ["aⁿ · aᵐ", "aⁿ⁺ᵐ"],
  ["aⁿ ÷ aᵐ", "aⁿ⁻ᵐ"],
  ["(aⁿ)ᵐ", "aⁿ·ᵐ"],
  ["(a · b)ⁿ", "aⁿ · bⁿ"],
  ["(a / b)ⁿ", "aⁿ / bⁿ"],
  ["a⁻ⁿ", "1 / aⁿ"],
  ["a⁰  (a ≠ 0)", "1"],
  ["a¹", "a"]
];
/* Cebir: köklü sayı kuralları [ifade, sonuç] */
const ROOT_RULES = [
  ["√a · √b", "√(a · b)"],
  ["√a ÷ √b", "√(a / b)"],
  ["√(a²)", "|a|"],
  ["(√a)²  (a ≥ 0)", "a"],
  ["a√b + c√b", "(a + c)√b"],
  ["√(a² · b)  (a ≥ 0)", "a√b"]
];
/* Cebir: ardışık sayı toplamları [seri, kapalı formül] */
const SERIES_SUMS = [
  ["1 + 2 + 3 + … + n", "n(n + 1) / 2"],
  ["1 + 3 + 5 + … + (2n − 1)   (ilk n tek)", "n²"],
  ["2 + 4 + 6 + … + 2n   (ilk n çift)", "n(n + 1)"],
  ["1² + 2² + 3² + … + n²", "n(n + 1)(2n + 1) / 6"],
  ["1³ + 2³ + 3³ + … + n³", "[n(n + 1) / 2]²"]
];

/* Geometri: özel üçgen kenar oranları/uzunlukları [soru, cevap] */
const SPECIAL_TRI = [
  ["45-45-90 üçgeninde kenarların oranı", "1 : 1 : √2"],
  ["30-60-90 üçgeninde kenarların oranı", "1 : √3 : 2"],
  ["45-45-90 üçgeninde dik kenar a ise hipotenüs", "a√2"],
  ["Kenarı a olan karenin köşegeni", "a√2"],
  ["Kenarı a olan eşkenar üçgenin yüksekliği", "a√3 / 2"],
  ["30-60-90 üçgeninde kısa kenar (30° karşısı) a ise hipotenüs", "2a"],
  ["30-60-90 üçgeninde kısa kenar a ise uzun kenar (60° karşısı)", "a√3"],
  ["30-60-90 üçgeninde hipotenüs 2a ise 30° karşısındaki kenar", "a"]
];

/* Geometri: alan & çevre formülleri [şekil özelliği, formül] */
const GEO_FORMULA = [
  ["Karenin alanı", "a²"],
  ["Karenin çevresi", "4a"],
  ["Dikdörtgenin alanı", "a · b"],
  ["Dikdörtgenin çevresi", "2 · (a + b)"],
  ["Üçgenin alanı", "taban · yükseklik / 2"],
  ["Paralelkenarın alanı", "taban · yükseklik"],
  ["Eşkenar üçgenin alanı", "a²√3 / 4"],
  ["Eşkenar üçgenin çevresi", "3a"],
  ["Yamuğun alanı", "(a + b) · h / 2"],
  ["Dairenin alanı", "π · r²"],
  ["Dairenin çevresi", "2 · π · r"]
];
/* Geometri: çokgenlerin iç açıları toplamı [çokgen, toplam] — (n−2)·180 */
const POLY_ANGLES = [
  ["Üçgenin iç açıları toplamı", "180°"],
  ["Dörtgenin iç açıları toplamı", "360°"],
  ["Beşgenin iç açıları toplamı", "540°"],
  ["Altıgenin iç açıları toplamı", "720°"],
  ["Yedigenin iç açıları toplamı", "900°"],
  ["Sekizgenin iç açıları toplamı", "1080°"],
  ["Dokuzgenin iç açıları toplamı", "1260°"],
  ["Ongenin iç açıları toplamı", "1440°"]
];
/* Geometri: katı cisimlerin hacmi [cisim, formül] */
const SOLID_VOLUME = [
  ["Küpün hacmi", "a³"],
  ["Dikdörtgenler prizmasının hacmi", "a · b · c"],
  ["Silindirin hacmi", "π · r² · h"],
  ["Koninin hacmi", "(1/3) · π · r² · h"],
  ["Kürenin hacmi", "(4/3) · π · r³"],
  ["Karesel piramidin hacmi", "taban alanı · h / 3"]
];
/* Geometri: Pisagor üçlüleri [dik kenar, dik kenar, hipotenüs] */
const PYTHAGOREAN = [
  [3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [7, 24, 25],
  [20, 21, 29], [9, 12, 15], [9, 40, 41], [12, 16, 20], [10, 24, 26]
];

/* Bölünebilme kuralları: [bölen, kısa kural]. 10a+b kuralları bölenin adını
   ANMADAN yazıldı (yoksa cevap kuralın içinde geçer); a = son rakam hariç kısım, b = son rakam. */
const DIV_RULES = [
  ["1", "Her tam sayı 1'e bölünür"],
  ["2", "Son rakamı çift (0, 2, 4, 6, 8) ise bölünür"],
  ["3", "Rakamları toplamı 3'ün katı ise bölünür"],
  ["4", "Son iki basamağı 00 veya 4'ün katı ise bölünür"],
  ["5", "Son rakamı 0 veya 5 ise bölünür"],
  ["6", "Hem 2'ye hem 3'e tam bölünüyorsa bölünür"],
  ["7", "Son rakamın 2 katını kalan kısımdan çıkar (a − 2b)"],
  ["8", "Son üç basamağı 000 veya 8'in katı ise bölünür"],
  ["9", "Rakamları toplamı 9'un katı ise bölünür"],
  ["10", "Son rakamı 0 ise bölünür"],
  ["11", "Rakamların dönüşümlü (+, −, +, −) toplamı 11'in katı ise bölünür"],
  ["12", "Hem 3'e hem 4'e tam bölünüyorsa bölünür"],
  ["13", "Son rakamın 4 katını kalan kısma ekle (a + 4b)"],
  ["14", "Hem 2'ye hem 7'ye tam bölünüyorsa bölünür"],
  ["15", "Hem 3'e hem 5'e tam bölünüyorsa bölünür"],
  ["17", "Son rakamın 5 katını kalan kısımdan çıkar (a − 5b)"],
  ["18", "Hem 2'ye hem 9'a tam bölünüyorsa bölünür"],
  ["19", "Son rakamın 2 katını kalan kısma ekle (a + 2b)"],
  ["23", "Son rakamın 7 katını kalan kısma ekle (a + 7b)"],
  ["24", "Hem 3'e hem 8'e tam bölünüyorsa bölünür"],
  ["25", "Son iki basamağı 00, 25, 50 veya 75 ise bölünür"]
];

/* Yüzde-kesir karşılıkları (bilgi kartlarındaki ezber çıpalarıyla aynı) */
const YUZDE_KESIR = [
  ["%5", "1/20"], ["%10", "1/10"], ["%12,5", "1/8"], ["%20", "1/5"], ["%25", "1/4"],
  ["%30", "3/10"], ["%40", "2/5"], ["%50", "1/2"], ["%60", "3/5"], ["%70", "7/10"],
  ["%75", "3/4"], ["%80", "4/5"], ["%90", "9/10"]
];
/* Ondalık-kesir karşılıkları */
const ONDALIK_KESIR = [
  ["0,1", "1/10"], ["0,2", "1/5"], ["0,25", "1/4"], ["0,4", "2/5"], ["0,5", "1/2"],
  ["0,6", "3/5"], ["0,75", "3/4"], ["0,8", "4/5"], ["0,125", "1/8"], ["0,375", "3/8"],
  ["0,625", "5/8"], ["0,875", "7/8"]
];

/* ----- MATEMATİK pratikleri (ders/ünite/oyun yapısı yerine düz pratik listesi) ----- */
const PRACTICES = {
  matematik: [
    { id: "carpim", icon: "✖️", name: "Çarpım Tablosu", desc: "1×1'den 10×10'a kadar tüm çarpımlar karışık sorulur. Hızını ölç, eksiklerini gör." },
    { id: "pow2", icon: "🔢", name: "2'nin Kuvvetleri", desc: "2¹'den 2¹⁰'a kadar (2, 4, 8 … 1024) tüm kuvvetler karışık sorulur." },
    { id: "pow3", icon: "🔢", name: "3'ün Kuvvetleri", desc: "3¹'den 3⁶'ya kadar (3, 9, 27 … 729) tüm kuvvetler karışık sorulur." },
    { id: "pow5", icon: "🔢", name: "5'in Kuvvetleri", desc: "5¹'den 5⁵'e kadar (5, 25, 125, 625, 3125) tüm kuvvetler karışık sorulur." },
    { id: "kupler", icon: "🧊", name: "Küpler", desc: "1³'ten 10³'e kadar (1, 8, 27 … 1000) tüm küpler karışık sorulur." },
    { id: "faktoriyel", icon: "❗", name: "Faktöriyeller", desc: "0!'den 10!'e kadar (1, 1, 2, 6, 24 … 3.628.800) tüm faktöriyeller karışık sorulur." },
    { id: "asal", icon: "🔍", name: "Asal mı?", desc: "0–100 arası sayılar karışık gelir; her biri için 'asal mı, değil mi' kararını ver." },
    { id: "yuzdeKesir", icon: "％", name: "Yüzde → Kesir", desc: "%10 = 1/10, %25 = 1/4 … sık çıkan yüzdelerin kesir karşılığını seç." },
    { id: "ondalikKesir", icon: "🔟", name: "Ondalık → Kesir", desc: "0,2 = 1/5, 0,75 = 3/4 … ondalık sayıların kesir karşılığını seç." },
    { id: "bolunebilme", icon: "➗", name: "Bölünebilme Kuralları", desc: "1'den 25'e kadar bölenler karışık gelir; her birinin bölünebilme kuralını seç (2, 3, 4, 5 … 11, 13, 17, 19, 23, 25)." },
    { id: "karekok", icon: "√", name: "Karekök", desc: "√1'den √400'e kadar tam karelerin (1²–20²) karekökünü bul. √144 = 12 gibi." },
    { id: "geoFormul", icon: "📐", name: "Alan & Çevre Formülleri", desc: "Kare, dikdörtgen, üçgen, daire, paralelkenar, yamuk… şeklin alan/çevre formülünü seç." },
    { id: "pisagor", icon: "🔺", name: "Pisagor Üçlüleri", desc: "3-4-5, 5-12-13, 8-15-17… dik üçgende iki kenardan hipotenüsü bul." },
    { id: "icAcilar", icon: "🔷", name: "Çokgen İç Açıları", desc: "Üçgen 180°, dörtgen 360°, beşgen 540°… (n−2)·180 kuralıyla iç açılar toplamı." },
    { id: "hacim", icon: "📦", name: "Cisimlerin Hacmi", desc: "Küp, prizma, silindir, koni, küre, piramit… katı cismin hacim formülünü seç." },
    { id: "ozelUcgen", icon: "🔻", name: "Özel Üçgenler", desc: "30-60-90 (1 : √3 : 2) ve 45-45-90 (1 : 1 : √2) üçgenlerinde kenar oranları ve uzunlukları." },
    { id: "acilar", icon: "∠", name: "Tümler & Bütünler", desc: "Tümler açılar 90°, bütünler açılar 180°. Verilen açının tümleri/bütünleri kaç derece?" },
    { id: "ozdeslik", icon: "🟰", name: "Özdeşlikler", desc: "(a+b)², a²−b², a³±b³ … özdeşliklerin açılımını / çarpanlarına ayrılmış hâlini seç." },
    { id: "usluKural", icon: "xⁿ", name: "Üslü Sayı Kuralları", desc: "aⁿ·aᵐ, (aⁿ)ᵐ, a⁻ⁿ, a⁰ … üslü sayılarda işlem kurallarının sonucunu seç." },
    { id: "kokluKural", icon: "√x", name: "Köklü Sayı Kuralları", desc: "√a·√b, √(a²), a√b+c√b … köklü ifadelerde işlem kurallarının sonucunu seç." },
    { id: "seriToplam", icon: "∑", name: "Ardışık Sayı Toplamları", desc: "1+2+…+n, ilk n tek/çift, kareler ve küpler toplamı formüllerini seç." }
  ]
};

/* ünite kayıtları (data/units.js'ten) */
const UNITS = (window.KPSS_DATA && window.KPSS_DATA._units) || {};
function hasUnits(subject) { return !!(UNITS[subject] && UNITS[subject].length); }
function unitById(subject, id) { return (UNITS[subject] || []).find((u) => u.id === id); }

/* hangi oyunlar zorluk seviyesi ile filtrelenir (whack/box quiz havuzunu kullandığından seviyelidir) */
const LEVELED = new Set(["quiz", "oncul", "tf", "clues", "numbers", "enler", "box", "iller"]);
/* oyun id -> data alanı (memory eşleştirme, box quiz havuzunu paylaşır) */
const GAME_FIELD = { quiz: "quiz", oncul: "oncul", enler: "enler", tf: "tf", match: "match", timeline: "timeline", clues: "clues", map: "map", iller: "iller", numbers: "numbers", memory: "match", box: "quiz", groups: "groups", cards: "cards" };
/* bir oyunun gösterilmesi için ünitede/seviyede gereken asgari öğe */
const GAME_MIN = { quiz: 3, oncul: 2, enler: 4, tf: 4, match: 1, timeline: 5, clues: 3, map: 4, iller: 4, numbers: 4, memory: 1, box: 4, groups: 1, cards: 1 };

let current = { subject: null, game: null, opts: {} };

/* =====================================================
   İÇERİK FİLTRELEME (ünite + seviye)
   ===================================================== */
function getItems(subject, field, opts) {
  opts = opts || {};
  // Çıkmış sorular ayrı bir alan; diğer modlar cikmis:true öğeleri görmez
  if (field === "cikmis") {
    let pool = (KPSS_DATA[subject] && KPSS_DATA[subject]["cikmis"]) || [];
    if (opts.year) pool = pool.filter((x) => x.year === opts.year);
    return pool;
  }
  let pool = (KPSS_DATA[subject] && KPSS_DATA[subject][field]) || [];
  // Normal oyun havuzundan çıkmış sorular çıkarılır
  pool = pool.filter((x) => !x.cikmis);
  if (opts.unit) pool = pool.filter((x) => (x.unit || "genel") === opts.unit);
  if (opts.level) pool = pool.filter((x) => (x.level || 2) === opts.level);
  return pool;
}
function countItems(subject, field, opts) { return getItems(subject, field, opts).length; }

function gameAvailable(subject, gameId, unit, level) {
  const field = GAME_FIELD[gameId];
  const opts = LEVELED.has(gameId) ? { unit, level } : { unit };
  return countItems(subject, field, opts) >= (GAME_MIN[gameId] || 1);
}
/* ders genelinde (ünite/seviye filtresiz) o oyun için yeterli veri var mı? */
function gameHasAnyData(subject, gameId) {
  return countItems(subject, GAME_FIELD[gameId], {}) >= (GAME_MIN[gameId] || 1);
}

/* ---------- test dilimleme ve seçim ekranı ---------- */
const TEST_SIZES = { quiz: 10, enler: 10, iller: 10, oncul: 8, clues: 8, box: 8, tf: 20, numbers: 12 };

function getGameQuestions(pool, defaultSize, opts) {
  if (opts && opts.testIndex != null) {
    if (opts.testIndex === "karma") {
      return sample(pool, Math.min(defaultSize, pool.length));
    } else if (opts.testIndex === "marathon") {
      return [...pool];
    } else {
      const idx = parseInt(opts.testIndex);
      const start = idx * defaultSize;
      return pool.slice(start, start + defaultSize);
    }
  }
  return sample(pool, Math.min(defaultSize, pool.length));
}

function onGameSelect(subject, gameId, opts) {
  const field = GAME_FIELD[gameId];
  const itemsOpts = LEVELED.has(gameId) ? { unit: opts.unit, level: opts.level } : { unit: opts.unit };
  const pool = getItems(subject, field, itemsOpts);
  
  const sliceable = new Set(["quiz", "oncul", "tf", "clues", "numbers", "enler", "whack", "box", "iller"]);
  if (opts.unit && sliceable.has(gameId) && pool.length >= 15) {
    renderTestSelection(subject, gameId, opts);
  } else {
    startGame(subject, gameId, opts);
  }
}

function renderTestSelection(subject, gameId, opts) {
  stopTimers();
  current = { subject, game: gameId, opts: opts || {} };
  document.body.dataset.accent = subject;
  
  const field = GAME_FIELD[gameId];
  const itemsOpts = LEVELED.has(gameId) ? { unit: opts.unit, level: opts.level } : { unit: opts.unit };
  const pool = getItems(subject, field, itemsOpts);
  const totalItems = pool.length;
  
  const testSize = TEST_SIZES[gameId] || 10;
  const numTests = Math.ceil(totalItems / testSize);
  
  const g = GAMES[gameId];
  const u = unitById(subject, opts.unit);
  const t = TIERS[opts.level];
  const levelText = t ? ` • ${t.icon} ${t.name}` : "";
  
  save.tests = save.tests || {};
  save.tests[subject] = save.tests[subject] || {};
  save.tests[subject][opts.unit] = save.tests[subject][opts.unit] || {};
  const levelKey = opts.level || "genel";
  save.tests[subject][opts.unit][levelKey] = save.tests[subject][opts.unit][levelKey] || {};
  save.tests[subject][opts.unit][levelKey][gameId] = save.tests[subject][opts.unit][levelKey][gameId] || {};
  
  const testRecords = save.tests[subject][opts.unit][levelKey][gameId];
  
  let testsHtml = "";
  for (let idx = 0; idx < numTests; idx++) {
    const startIdx = idx * testSize + 1;
    const endIdx = Math.min((idx + 1) * testSize, totalItems);
    const record = testRecords[idx];
    const scoreStr = record ? `${record.score} / ${record.max}` : "—";
    const statusClass = record ? "completed" : "";
    
    testsHtml += `
      <button class="test-item-card ${statusClass}" data-test-idx="${idx}">
        <div class="test-item-info">
          <h3>Test ${idx + 1}</h3>
          <p>Soru ${startIdx} - ${endIdx}</p>
        </div>
        <div class="test-item-score">🏅 ${scoreStr}</div>
      </button>
    `;
  }
  
  const karmaRecord = testRecords["karma"];
  const karmaStr = karmaRecord ? `${karmaRecord.score} / ${karmaRecord.max}` : "—";
  const karmaClass = karmaRecord ? "completed" : "";
  testsHtml += `
    <button class="test-item-card karma ${karmaClass}" data-test-idx="karma">
      <div class="test-item-info">
        <h3>🎲 Karma Test</h3>
        <p>Rastgele ${testSize} Soru</p>
      </div>
      <div class="test-item-score">🏅 ${karmaStr}</div>
    </button>
  `;
  
  if (totalItems > testSize) {
    const marathonRecord = testRecords["marathon"];
    const marathonStr = marathonRecord ? `${marathonRecord.score} / ${marathonRecord.max}` : "—";
    const marathonClass = marathonRecord ? "completed" : "";
    testsHtml += `
      <button class="test-item-card marathon ${marathonClass}" data-test-idx="marathon">
        <div class="test-item-info">
          <h3>🏃 Maraton Testi</h3>
          <p>Tüm ${totalItems} Soruyu Çöz</p>
        </div>
        <div class="test-item-score">🏅 ${marathonStr}</div>
      </button>
    `;
  }
  
  app.innerHTML = `
    <div class="fade">
      <header class="bar">
        <button class="btn-back" id="btnBack">←</button>
        <div class="bar-title">${g.icon} ${g.name}</div>
        <div class="bar-score">${u.icon} ${u.name}</div>
      </header>
      <div class="test-sel-meta">
        <h2>Konu: ${u.name}${levelText}</h2>
        <p>Bu kategoride toplam <b>${totalItems}</b> soru bulunmaktadır. Çözmek istediğiniz testi seçin:</p>
      </div>
      <div class="test-grid">${testsHtml}</div>
    </div>
  `;
  
  $("#btnBack").addEventListener("click", () => { sfx("click"); backToContext(); });
  document.querySelectorAll(".test-item-card").forEach((b) => {
    b.addEventListener("click", () => {
      sfx("click");
      const testIdx = b.dataset.testIdx;
      const gameOpts = { ...opts, testIndex: testIdx };
      startGame(subject, gameId, gameOpts);
    });
  });
  renderSoundBtn();
}

/* =====================================================
   İLERLEME / USTALIK (ünite bazlı)
   ===================================================== */
function getProg(subject, unit) { return (save.prog[subject] && save.prog[subject][unit]) || {}; }
function recordProg(subject, unit, level, pct) {
  if (!unit || !level) return;
  const sp = save.prog[subject] = save.prog[subject] || {};
  const up = sp[unit] = sp[unit] || {};
  up[level] = Math.max(up[level] || 0, pct);
  persist();
}
const LEVELED_FIELDS = ["quiz", "oncul", "tf", "clues", "numbers", "enler"];
function unitLevelHasContent(subject, unit, level) {
  return LEVELED_FIELDS.some((f) => countItems(subject, f, { unit, level }) > 0);
}
function levelUnlocked(subject, unit, level) {
  if (level <= 1) return true;
  return (getProg(subject, unit)[level - 1] || 0) >= 0.6;
}
function unitMastery(subject, unit) {
  const levels = [1, 2, 3].filter((l) => unitLevelHasContent(subject, unit, l));
  if (!levels.length) return 0;
  const p = getProg(subject, unit);
  const sum = levels.reduce((t, l) => t + (p[l] || 0), 0);
  return Math.round((sum / levels.length) * 100);
}

/* =====================================================
   ANA SAYFA
   ===================================================== */
function renderHome() {
  stopTimers();
  current = { subject: null, game: null, opts: {} };
  document.body.dataset.accent = "";
  const cards = Object.keys(SUBJECTS).map((key) => {
    const s = SUBJECTS[key];
    const xp = save.xp[key] || 0;
    const { lv, next } = levelOf(xp);
    const pct = next ? Math.min(100, Math.round(((xp - lv.min) / (next.min - lv.min)) * 100)) : 100;
    return `
      <button class="subject-card" data-accent="${key}" data-subject="${key}">
        <div class="subject-icon">${s.icon}</div>
        <div class="subject-body">
          <h2>${s.name}</h2>
          <p>${s.tagline}</p>
          <div class="xpbar"><i style="width:${pct}%"></i></div>
          <div class="xpline"><span>${lv.name}</span><span>${xp} XP</span></div>
        </div>
        <div class="subject-go">▶</div>
      </button>`;
  }).join("");

  app.innerHTML = `
    <div class="home fade">
      <header class="hero">
        <div class="hero-badge">🎓 KPSS Genel Kültür</div>
        <h1>KPSS <span>KFT</span></h1>
      </header>
      <div class="subject-grid">${cards}</div>
    </div>`;

  document.querySelectorAll(".subject-card").forEach((b) =>
    b.addEventListener("click", () => { sfx("click"); renderSubject(b.dataset.subject); })
  );
  renderSoundBtn();
}

/* =====================================================
   DERS SAYFASI (ünite akışı / düz akış yönlendirmesi)
   ===================================================== */
function renderSubject(key) {
  stopTimers();
  current.subject = key;
  document.body.dataset.accent = key;
  if (PRACTICES[key]) return renderPractices(key);
  if (hasUnits(key)) return renderUnits(key);
  return renderFlatSubject(key);
}

/* ----- pratik listesi (Matematik: oyun/ünite/deneme yok, sadece pratikler) ----- */
function renderPractices(key) {
  stopTimers();
  current = { subject: key, game: null, opts: {} };
  document.body.dataset.accent = key;
  const s = SUBJECTS[key];
  const xp = save.xp[key] || 0;
  const { lv } = levelOf(xp);

  const list = PRACTICES[key].map((p) => {
    const best = save.best[key + ":" + p.id];
    return `
      <button class="game-card" data-practice="${p.id}">
        <div class="game-icon">${p.icon}</div>
        <div class="game-body"><h3>${p.name}</h3><p>${p.desc}</p></div>
        <div class="game-best">${best != null ? "🏅 " + best : "—"}</div>
      </button>`;
  }).join("");

  app.innerHTML = `
    <div class="fade">
      <header class="bar">
        <button class="btn-back" id="btnBack">←</button>
        <div class="bar-title">${s.icon} ${s.name}</div>
        <div class="bar-score">${lv.name} • ${xp} XP</div>
      </header>
      <p class="subject-info">${s.tagline}. Soruları çözerken hız kazandıran kısa pratikler.</p>
      <h2 class="section-title">Pratikler</h2>
      <div class="game-grid">${list}</div>
    </div>`;

  $("#btnBack").addEventListener("click", () => { sfx("click"); renderHome(); });
  document.querySelectorAll(".game-card").forEach((b) =>
    b.addEventListener("click", () => { sfx("click"); startGame(key, b.dataset.practice, {}); })
  );
  renderSoundBtn();
}

/* ----- ünite haritası (ünite yapısına geçmiş dersler) ----- */
function renderUnits(key) {
  stopTimers();
  current = { subject: key, game: null, opts: {} };
  document.body.dataset.accent = key;
  const s = SUBJECTS[key];
  const xp = save.xp[key] || 0;
  const { lv } = levelOf(xp);

  const cards = UNITS[key].map((u) => {
    const m = unitMastery(key, u.id);
    return `
      <button class="unit-card" data-unit="${u.id}">
        <div class="unit-icon">${u.icon}</div>
        <div class="unit-body">
          <h3>${u.name}</h3>
          <p>${u.desc}</p>
          <div class="mbar"><i style="width:${m}%"></i></div>
        </div>
        <div class="unit-pct">%${m}</div>
      </button>`;
  }).join("");

  app.innerHTML = `
    <div class="fade">
      <header class="bar">
        <button class="btn-back" id="btnBack">←</button>
        <div class="bar-title">${s.icon} ${s.name}</div>
        <div class="bar-score">${lv.name} • ${xp} XP</div>
      </header>
      ${s.info ? `<p class="subject-info">${s.info}</p>` : ""}
      <div class="mode-row">
        <button class="mode-card" id="mMix"><span class="mode-ico">🎲</span><div><b>Tüm ${s.name} Oyunları</b><small>Konu sınırlaması olmadan, karışık oyun listesi</small></div></button>
        <button class="mode-card" id="mExam"><span class="mode-ico">📝</span><div><b>Deneme Sınavı</b><small>20 soruluk, KPSS tarzı karışık deneme</small></div></button>
        <button class="mode-card mode-card--cikmis" id="mCikmis"><span class="mode-ico">📋</span><div><b>Çıkmış Sorular</b><small>ÖSYM'nin sınav sorularını çöz</small></div></button>
      </div>
      <h2 class="section-title">Konular</h2>
      <div class="unit-grid">${cards}</div>
    </div>`;

  $("#btnBack").addEventListener("click", () => { sfx("click"); renderHome(); });
  $("#mMix").addEventListener("click", () => { sfx("click"); renderMix(key); });
  $("#mExam").addEventListener("click", () => { sfx("click"); startExam(key); });
  $("#mCikmis").addEventListener("click", () => { sfx("click"); renderCikmis(key); });
  document.querySelectorAll(".unit-card").forEach((b) =>
    b.addEventListener("click", () => { sfx("click"); renderUnit(key, b.dataset.unit); })
  );
  renderSoundBtn();
}

/* ----- ünite detayı: seviye sekmeleri + önce öğren + oyunlar ----- */
function renderUnit(subject, unitId, level) {
  stopTimers();
  const u = unitById(subject, unitId);
  if (!u) return renderUnits(subject);
  document.body.dataset.accent = subject;

  const avail = [1, 2, 3].filter((l) => unitLevelHasContent(subject, unitId, l));
  if (level == null) {
    level = avail[0] || 1;
    for (const l of avail) { if (levelUnlocked(subject, unitId, l)) level = l; }
  }
  current = { subject, game: null, opts: { unit: unitId, level } };

  const tabs = [1, 2, 3].map((l) => {
    const has = unitLevelHasContent(subject, unitId, l);
    const unlocked = levelUnlocked(subject, unitId, l);
    const cls = ["level-tab"];
    if (l === level) cls.push("active");
    if (!unlocked) cls.push("locked");
    const t = TIERS[l];
    return `<button class="${cls.join(" ")}" data-l="${l}" ${!has ? "disabled" : ""}>${t.icon} ${t.name}${!unlocked ? " 🔒" : ""}</button>`;
  }).join("");

  const cardCount = countItems(subject, "cards", { unit: unitId });
  const studyBtn = cardCount > 0
    ? `<button class="study-btn" id="study">📖 Önce Öğren <small>${cardCount} bilgi kartı</small></button>`
    : "";

  let gamesHtml;
  if (!levelUnlocked(subject, unitId, level)) {
    gamesHtml = `<p class="locked-note">🔒 Bu seviye kilitli. Bir önceki seviyede en az <b>%60</b> başarıya ulaşınca açılır.</p>`;
  } else {
    const games = SUBJECTS[subject].games.filter((g) => g !== "cards" && gameAvailable(subject, g, unitId, level));
    gamesHtml = games.length
      ? `<div class="game-grid">${games.map((g) => {
          const game = GAMES[g];
          return `<button class="game-card" data-game="${g}"><div class="game-icon">${game.icon}</div><div class="game-body"><h3>${game.name}</h3><p>${game.desc}</p></div></button>`;
        }).join("")}</div>`
      : `<p class="locked-note">Bu seviyede henüz oyun içeriği yok. Üstteki başka bir seviyeyi dene 👆</p>`;
  }

  const m = unitMastery(subject, unitId);
  app.innerHTML = `
    <div class="fade">
      <header class="bar">
        <button class="btn-back" id="btnBack">←</button>
        <div class="bar-title">${u.icon} ${u.name}</div>
        <div class="bar-score">%${m}</div>
      </header>
      <div class="level-tabs">${tabs}</div>
      ${studyBtn}
      ${gamesHtml}
    </div>`;

  $("#btnBack").addEventListener("click", () => { sfx("click"); renderUnits(subject); });
  document.querySelectorAll(".level-tab").forEach((b) =>
    b.addEventListener("click", () => {
      const l = +b.dataset.l;
      if (b.classList.contains("locked")) { sfx("bad"); toast("🔒 Önce bir önceki seviyeyi geç (%60)"); return; }
      sfx("click"); renderUnit(subject, unitId, l);
    })
  );
  const st = $("#study");
  if (st) st.addEventListener("click", () => { sfx("click"); startGame(subject, "cards", { unit: unitId }); });
  document.querySelectorAll(".game-card").forEach((b) =>
    b.addEventListener("click", () => { sfx("click"); onGameSelect(subject, b.dataset.game, { unit: unitId, level }); })
  );
  renderSoundBtn();
}

/* ----- karışık (tüm konular) oyun listesi ----- */
function renderMix(key) {
  stopTimers();
  current = { subject: key, game: null, opts: {} };
  document.body.dataset.accent = key;
  const s = SUBJECTS[key];
  const list = s.games.filter((g) => gameHasAnyData(key, g)).map((g) => {
    const game = GAMES[g];
    const best = save.best[key + ":" + g];
    return `
      <button class="game-card" data-game="${g}">
        <div class="game-icon">${game.icon}</div>
        <div class="game-body"><h3>${game.name}</h3><p>${game.desc}</p></div>
        <div class="game-best">${best != null ? "🏅 " + best : "—"}</div>
      </button>`;
  }).join("");

  app.innerHTML = `
    <div class="fade">
      <header class="bar">
        <button class="btn-back" id="btnBack">←</button>
        <div class="bar-title">🎲 Tüm ${s.name} Oyunları</div>
        <div class="bar-score">Tüm Konular</div>
      </header>
      <p class="subject-info">Tüm ${s.name} konularından ve zorluk seviyelerinden karışık sorular içeren oyun kütüphanesi.</p>
      <div class="game-grid">${list}</div>
    </div>`;

  $("#btnBack").addEventListener("click", () => { sfx("click"); renderUnits(key); });
  document.querySelectorAll(".game-card").forEach((b) =>
    b.addEventListener("click", () => { sfx("click"); startGame(key, b.dataset.game, { fromMix: true }); })
  );
  renderSoundBtn();
}

/* ----- düz akış (henüz ünite yapısına geçmemiş dersler) ----- */
function renderFlatSubject(key) {
  stopTimers();
  current = { subject: key, game: null, opts: {} };
  const s = SUBJECTS[key];
  document.body.dataset.accent = key;
  const xp = save.xp[key] || 0;
  const { lv } = levelOf(xp);

  const list = s.games.filter((g) => gameHasAnyData(key, g)).map((g) => {
    const game = GAMES[g];
    const best = save.best[key + ":" + g];
    return `
      <button class="game-card" data-game="${g}">
        <div class="game-icon">${game.icon}</div>
        <div class="game-body">
          <h3>${game.name}</h3>
          <p>${game.desc}</p>
        </div>
        <div class="game-best">${best != null ? "🏅 " + best : "—"}</div>
      </button>`;
  }).join("");

  app.innerHTML = `
    <div class="fade">
      <header class="bar">
        <button class="btn-back" id="btnBack">←</button>
        <div class="bar-title">${s.icon} ${s.name}</div>
        <div class="bar-score">${lv.name} • ${xp} XP</div>
      </header>
      ${s.info ? `<p class="subject-info">${s.info}</p>` : ""}
      <div class="game-grid">${list}</div>
    </div>`;

  $("#btnBack").addEventListener("click", () => { sfx("click"); renderHome(); });
  document.querySelectorAll(".game-card").forEach((b) =>
    b.addEventListener("click", () => { sfx("click"); startGame(key, b.dataset.game); })
  );
  renderSoundBtn();
}

/* ----- ÇIKMIŞ SORULAR: yıl seçim ekranı ----- */
function renderCikmis(key) {
  stopTimers();
  current = { subject: key, game: "cikmis", opts: { fromCikmis: true } };
  document.body.dataset.accent = key;
  const s = SUBJECTS[key];
  const pool = getItems(key, "cikmis", {});
  const years = [...new Set(pool.map((x) => x.year))].sort((a, b) => b - a);
  const total = pool.length;

  const yearBtns = years.map((y) => {
    const cnt = pool.filter((x) => x.year === y).length;
    return `<button class="cikmis-year-btn" data-year="${y}">
      <span class="cy-year">${y}</span>
      <span class="cy-label">KPSS Lisans</span>
      <span class="cy-count">${cnt} soru</span>
    </button>`;
  }).join("");

  app.innerHTML = `
    <div class="fade">
      <header class="bar">
        <button class="btn-back" id="btnBack">←</button>
        <div class="bar-title">📋 Çıkmış Sorular</div>
        <div class="bar-score">${s.icon} ${s.name}</div>
      </header>
      <div class="cikmis-intro">
        <p>ÖSYM'nin gerçek KPSS sınav sorularını yıla göre çöz. Toplam <b>${total}</b> soru.</p>
      </div>
      <div class="cikmis-year-grid">${yearBtns}</div>
      <button class="btn primary cikmis-all-btn" id="btnAllYears">📚 Tüm Yılları Karışık Çöz (${total} soru)</button>
    </div>`;

  $("#btnBack").addEventListener("click", () => { sfx("click"); renderUnits(key); });
  $("#btnAllYears").addEventListener("click", () => { sfx("click"); runCikmisQuiz(key, null); });
  document.querySelectorAll(".cikmis-year-btn").forEach((b) =>
    b.addEventListener("click", () => { sfx("click"); runCikmisQuiz(key, +b.dataset.year); })
  );
  renderSoundBtn();
}

/* ----- ÇIKMIŞ SORULAR: quiz oyunu ----- */
function runCikmisQuiz(subject, year) {
  stopTimers();
  current = { subject, game: "cikmis", opts: { fromCikmis: true, year } };
  const pool = getItems(subject, "cikmis", year ? { year } : {});
  const qs = shuffle(pool).slice(0, Math.min(15, pool.length));
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;

  const s = SUBJECTS[subject];
  const yearLabel = year ? `${year} KPSS` : "Tüm Yıllar";
  const stage = gameFrame(`📋 ${yearLabel} – ${s.name}`, "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const q = qs[i];
    const opts2 = shuffle(q.o.map((t, idx) => ({ t, ok: idx === q.a })));
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta">
          <span>Soru ${i + 1} / ${qs.length}</span>
          ${streak >= 2 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}
          <span class="cikmis-badge">📋 ${q.year} KPSS</span>
        </div>
        <h2 class="qtext">${q.q}</h2>
        <div class="opts">
          ${opts2.map((o, k) => `<button class="opt" data-k="${k}">${o.t}</button>`).join("")}
        </div>
        <div id="expl"></div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = opts2[+b.dataset.k];
      const okBtn = btns[opts2.findIndex((o) => o.ok)];
      okBtn.classList.add("correct");
      if (pick.ok) {
        streak++;
        ctx.score += 10;
        sfx("ok");
      } else {
        b.classList.add("wrong");
        streak = 0;
        sfx("bad");
        ctx.review.push({ q: q.q, a: q.o[q.a], exp: q.exp });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      $("#expl").innerHTML = `
        <div class="explain ${pick.ok ? "good" : "bad"}">
          <p>${pick.ok ? "✅ Doğru!" : "❌ Doğru cevap: <b>" + q.o[q.a] + "</b>"}</p>
          <p class="exp-text">💡 ${q.exp}</p>
          <button class="btn primary" id="btnNext">${i === qs.length - 1 ? "Sonucu Gör" : "Devam →"}</button>
        </div>`;
      $("#btnNext").addEventListener("click", () => { sfx("click"); i++; show(); });
      $("#btnNext").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }));
  }
  show();
}

/* nereden gelindiyse oraya dön */
function backToContext() {
  const sub = current.subject;
  const o = current.opts || {};
  if (PRACTICES[sub]) {
    renderPractices(sub);
  } else if (o.fromCikmis) {
    renderCikmis(sub);
  } else if (o.fromMix) {
    renderMix(sub);
  } else if (o.unit && hasUnits(sub)) {
    // Soru havuzu dilimlenmiş testlerden biriyse geri tuşu test seçim ekranına döner
    const field = GAME_FIELD[current.game];
    const itemsOpts = LEVELED.has(current.game) ? { unit: o.unit, level: o.level } : { unit: o.unit };
    const pool = getItems(sub, field, itemsOpts);
    const sliceable = new Set(["quiz", "oncul", "tf", "clues", "numbers", "enler", "box", "iller"]);
    
    if (sliceable.has(current.game) && pool.length >= 15 && o.testIndex != null) {
      const selOpts = { ...o };
      delete selOpts.testIndex;
      renderTestSelection(sub, current.game, selOpts);
    } else {
      renderUnit(sub, o.unit, o.level);
    }
  } else if (hasUnits(sub)) {
    renderUnits(sub);
  } else {
    renderFlatSubject(sub);
  }
}

function startGame(subject, gameId, opts) {
  stopTimers();
  current = { subject, game: gameId, opts: opts || {} };
  GAMES[gameId].run(subject, current.opts);
}

/* =====================================================
   ORTAK OYUN ÇERÇEVESİ
   ===================================================== */
function gameFrame(title, hudHtml) {
  const g = GAMES[current.game];
  const icon = g ? g.icon : "📝";
  app.innerHTML = `
    <div class="fade">
      <header class="bar">
        <button class="btn-back" id="btnBack">←</button>
        <div class="bar-title">${icon} ${title}</div>
        <div class="bar-score" id="hud">${hudHtml || ""}</div>
      </header>
      <div class="progress"><i id="pbar" style="width:0%"></i></div>
      <div id="stage"></div>
    </div>`;
  $("#btnBack").addEventListener("click", () => { sfx("click"); stopTimers(); backToContext(); });
  renderSoundBtn();
  return $("#stage");
}
function setProgress(i, n) { const p = $("#pbar"); if (p) p.style.width = Math.round((i / n) * 100) + "%"; }
function setHud(html) { const h = $("#hud"); if (h) h.innerHTML = html; }

/* ---------- sonuç ekranı ---------- */
function finishGame(ctx) {
  stopTimers();
  const { score, max, review } = ctx;
  const key = current.subject + ":" + current.game;
  const prevBest = save.best[key];
  const isRecord = prevBest == null || score > prevBest;
  if (isRecord) save.best[key] = score;
  save.xp[current.subject] = (save.xp[current.subject] || 0) + score;

  // ünite ustalığını kaydet (seviyeli oyunlar)
  const o = current.opts || {};
  if (o.unit && o.level && LEVELED.has(current.game)) {
    recordProg(current.subject, o.unit, o.level, max > 0 ? score / max : 0);
  }

  // test dilimi skorunu kaydet
  if (o.unit && o.testIndex != null) {
    save.tests = save.tests || {};
    const sKey = current.subject;
    const uKey = o.unit;
    const lKey = o.level || "genel";
    const gKey = current.game;
    const tKey = o.testIndex;
    
    save.tests[sKey] = save.tests[sKey] || {};
    save.tests[sKey][uKey] = save.tests[sKey][uKey] || {};
    save.tests[sKey][uKey][lKey] = save.tests[sKey][uKey][lKey] || {};
    save.tests[sKey][uKey][lKey][gKey] = save.tests[sKey][uKey][lKey][gKey] || {};
    
    const prev = save.tests[sKey][uKey][lKey][gKey][tKey] || { score: -1, max: 1 };
    if (score > prev.score) {
      save.tests[sKey][uKey][lKey][gKey][tKey] = { score, max };
    }
  }
  persist();

  const pct = max > 0 ? score / max : 0;
  const degrees = Math.round(pct * 360);
  let emoji = "📚", msg = "Tekrar etmekte fayda var, açıklamaları mutlaka oku!";
  if (pct >= 0.85) { emoji = "🏆"; msg = "Muhteşem! Bu konu sende."; }
  else if (pct >= 0.6) { emoji = "💪"; msg = "Gayet iyi! Eksiklerini aşağıdan tamamla."; }
  else if (pct >= 0.4) { emoji = "🌱"; msg = "İyi başlangıç. Yanlışlarına göz at, bir tur daha dene."; }

  if (pct >= 0.7) { sfx("win"); confetti(); } else { sfx("click"); }

  const reviewHtml = review.length
    ? `<div class="review">
         <h3>📖 Bunları tekrar et (${review.length})</h3>
         ${review.map((r) => `
           <div class="review-item">
             <p class="rq">${r.q}</p>
             <p class="ra">✅ ${r.a}</p>
             <p class="re">${r.exp || ""}</p>
           </div>`).join("")}
       </div>`
    : `<div class="review perfect"><h3>🎉 Hiç yanlışın yok!</h3></div>`;

  app.innerHTML = `
    <div class="fade result">
      <div class="result-emoji">${emoji}</div>
      <div class="score-circle-wrapper">
        <div class="score-circle" style="background: conic-gradient(var(--accent) ${degrees}deg, var(--line) ${degrees}deg)">
          <div class="score-circle-inner">
            <span class="score-num">${score}</span>
            <span class="score-max">/ ${max}</span>
          </div>
        </div>
      </div>
      <p class="result-msg">${msg}</p>
      <div class="result-badges">
        <span class="badge">+${score} XP</span>
        ${isRecord && score > 0 ? '<span class="badge gold">🏅 Yeni rekor!</span>' : ""}
        ${prevBest != null && !isRecord ? `<span class="badge">Rekorun: ${prevBest}</span>` : ""}
      </div>
      ${reviewHtml}
      <div class="result-actions">
        <button class="btn primary" id="btnAgain">🔄 Tekrar Oyna</button>
        <button class="btn" id="btnGames">🎮 Geri Dön</button>
        <button class="btn" id="btnHome">🏠 Ana Sayfa</button>
      </div>
    </div>`;

  $("#btnAgain").addEventListener("click", () => { sfx("click"); startGame(current.subject, current.game, current.opts); });
  $("#btnGames").addEventListener("click", () => { sfx("click"); backToContext(); });
  $("#btnHome").addEventListener("click", () => { sfx("click"); renderHome(); });
  renderSoundBtn();
  window.scrollTo(0, 0);
}

/* =====================================================
   PRATİK: ÇARPIM TABLOSU (1×1 – 10×10, tüm çarpımlar)
   ===================================================== */
function multiplicationQuestions() {
  const qs = [];
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) qs.push({ a, b });
  }
  return shuffle(qs);
}

/* doğru cevaba yakın, akla yatkın 3 çeldirici üret */
function multiplicationOptions(a, b) {
  const correct = a * b;
  const cand = new Set();
  const add = (v) => { if (v > 0 && v !== correct) cand.add(v); };
  add(correct + a); add(correct - a); add(correct + b); add(correct - b);
  add((a + 1) * b); add(a * (b + 1)); add((a - 1) * b); add(a * (b - 1));
  add(correct + 1); add(correct - 1); add(correct + 10); add(correct - 10);
  let guard = 0;
  while (cand.size < 3 && guard < 60) { add(correct + (Math.floor(Math.random() * 13) - 6)); guard++; }
  const distract = shuffle([...cand]).slice(0, 3);
  return shuffle([correct, ...distract]);
}

function runMultiplication(subject, opts) {
  opts = opts || {};
  const qs = multiplicationQuestions();
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Çarpım Tablosu", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const { a, b } = qs[i];
    const correct = a * b;
    const options = multiplicationOptions(a, b);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext" style="font-size:2.4rem">${a} × ${b} = ?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v}</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === correct)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === correct) {
        streak++; ctx.score += 10; sfx("ok"); delay = 550;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1300;
        ctx.review.push({ q: `${a} × ${b}`, a: String(correct), exp: `${a} × ${b} = ${correct}` });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: BİR SAYININ KUVVETLERİ (genel — örn. 2¹–2¹⁰)
   ===================================================== */
/* üs için Unicode üst-simge (örn. 10 -> "¹⁰") */
function superscript(n) {
  const map = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
  return String(n).split("").map((d) => map[d] || d).join("");
}

/* doğru cevaba yakın, akla yatkın 3 çeldirici üret */
function powerOptions(base, exp) {
  const correct = Math.pow(base, exp);
  const cand = new Set();
  const add = (v) => { if (v > 0 && Number.isInteger(v) && v !== correct) cand.add(v); };
  add(Math.pow(base, exp - 1));        // bir önceki kuvvet
  add(Math.pow(base, exp + 1));        // bir sonraki kuvvet
  add(base * exp);                     // sık hata: tabanı üsle çarpma (2×3=6)
  add(correct * 2); add(correct / 2);
  add(correct + Math.pow(base, exp - 1));
  add(correct - Math.pow(base, exp - 1));
  let guard = 0;
  while (cand.size < 3 && guard < 60) { add(correct + (Math.floor(Math.random() * 13) - 6)); guard++; }
  const distract = shuffle([...cand]).slice(0, 3);
  return shuffle([correct, ...distract]);
}

function runPowers(subject, opts, base, maxExp) {
  opts = opts || {};
  const qs = shuffle(Array.from({ length: maxExp }, (_, k) => k + 1)); // üsler 1..maxExp
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame(`${base}'nin Kuvvetleri`, "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const exp = qs[i];
    const correct = Math.pow(base, exp);
    const options = powerOptions(base, exp);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext" style="font-size:2.4rem">${base}${superscript(exp)} = ?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v}</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === correct)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === correct) {
        streak++; ctx.score += 10; sfx("ok"); delay = 550;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1300;
        ctx.review.push({ q: `${base}${superscript(exp)}`, a: String(correct), exp: `${base}${superscript(exp)} = ${correct}` });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: KÜPLER (1³ – 10³)
   ===================================================== */
/* doğru cevaba yakın, akla yatkın 3 çeldirici üret */
function cubeOptions(n) {
  const correct = n * n * n;
  const cand = new Set();
  const add = (v) => { if (v > 0 && Number.isInteger(v) && v !== correct) cand.add(v); };
  add(n * n);                          // sık hata: küp yerine kare
  add((n - 1) * (n - 1) * (n - 1));    // bir önceki küp
  add((n + 1) * (n + 1) * (n + 1));    // bir sonraki küp
  add(n * 3);                          // sık hata: tabanı 3 ile çarpma
  add(correct + n * n); add(correct - n * n);
  add(correct + 1); add(correct - 1);
  let guard = 0;
  while (cand.size < 3 && guard < 60) { add(correct + (Math.floor(Math.random() * 21) - 10)); guard++; }
  const distract = shuffle([...cand]).slice(0, 3);
  return shuffle([correct, ...distract]);
}

function runCubes(subject, opts, maxN) {
  opts = opts || {};
  const qs = shuffle(Array.from({ length: maxN }, (_, k) => k + 1)); // tabanlar 1..maxN
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Küpler", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const n = qs[i];
    const correct = n * n * n;
    const options = cubeOptions(n);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext" style="font-size:2.4rem">${n}${superscript(3)} = ?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v}</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === correct)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === correct) {
        streak++; ctx.score += 10; sfx("ok"); delay = 550;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1300;
        ctx.review.push({ q: `${n}${superscript(3)}`, a: String(correct), exp: `${n}${superscript(3)} = ${correct}` });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: FAKTÖRİYELLER (0! – 10!)
   ===================================================== */
function factorial(n) { let r = 1; for (let k = 2; k <= n; k++) r *= k; return r; }

/* doğru cevaba yakın, akla yatkın 3 çeldirici üret (komşu faktöriyeller iyi çeldiricidir) */
function factorialOptions(n) {
  const correct = factorial(n);
  const cand = new Set();
  const add = (v) => { if (v > 0 && Number.isInteger(v) && v !== correct) cand.add(v); };
  for (let k = 1; k <= 4; k++) { add(factorial(n + k)); if (n - k >= 0) add(factorial(n - k)); }
  add(n * n); add(correct + factorial(Math.max(0, n - 1))); add(correct - factorial(Math.max(0, n - 1)));
  let guard = 0;
  while (cand.size < 3 && guard < 60) { add(correct + (Math.floor(Math.random() * 13) - 6)); guard++; }
  const distract = shuffle([...cand]).slice(0, 3);
  return shuffle([correct, ...distract]);
}

function runFactorials(subject, opts, maxN) {
  opts = opts || {};
  const qs = shuffle(Array.from({ length: maxN + 1 }, (_, k) => k)); // 0..maxN
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Faktöriyeller", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const n = qs[i];
    const correct = factorial(n);
    const options = factorialOptions(n);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext" style="font-size:2.4rem">${n}! = ?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v.toLocaleString("tr-TR")}</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === correct)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === correct) {
        streak++; ctx.score += 10; sfx("ok"); delay = 550;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1300;
        const expN = n === 0 ? "0! = 1 (tanım gereği)" : `${n}! = ${n}×${n - 1}×…×1 = ${correct.toLocaleString("tr-TR")}`;
        ctx.review.push({ q: `${n}!`, a: correct.toLocaleString("tr-TR"), exp: expN });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: ASAL MI? (0–100 arası, ikili karar)
   ===================================================== */
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) { if (n % i === 0) return false; }
  return true;
}
function smallestFactor(n) {
  for (let i = 2; i * i <= n; i++) { if (n % i === 0) return i; }
  return n;
}
/* asal olmama/olma açıklaması */
function primeExp(n) {
  if (n === 0 || n === 1) return `${n} asal değildir; asal sayı 1'den büyük olmalıdır.`;
  if (isPrime(n)) return `${n} yalnızca 1'e ve kendisine bölünür, asaldır.`;
  const f = smallestFactor(n);
  return `${n} = ${f} × ${n / f} olduğundan asal değildir.`;
}

function runPrime(subject, opts) {
  opts = opts || {};
  // 0–100 arasından karışık 25 sayı; "yalancı asal" tuzakları da havuzda
  const pool = Array.from({ length: 101 }, (_, k) => k);
  const qs = shuffle(pool).slice(0, 25);
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Asal mı?", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const n = qs[i];
    const prime = isPrime(n);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext" style="font-size:2.8rem">${n}</h2>
        <p style="text-align:center;opacity:.7;margin:-.4rem 0 .6rem">Bu sayı asal mı?</p>
        <div class="opts">
          <button class="opt" data-v="1">✓ Asaldır</button>
          <button class="opt" data-v="0">✗ Asal değil</button>
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = btn.dataset.v === "1";
      const okBtn = btns[prime ? 0 : 1];
      okBtn.classList.add("correct");
      let delay;
      if (pick === prime) {
        streak++; ctx.score += 10; sfx("ok"); delay = 650;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1600;
        ctx.review.push({ q: `${n} asal mı?`, a: prime ? "Asaldır" : "Asal değil", exp: primeExp(n) });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: DÖNÜŞÜM (yüzde→kesir, ondalık→kesir) — genel
   pairs: [[soru, cevap], ...] — cevaplar şık havuzunu oluşturur
   ===================================================== */
function runConvert(subject, opts, title, pairs) {
  opts = opts || {};
  const answers = pairs.map((p) => p[1]); // çeldirici havuzu = tüm cevaplar
  const qs = shuffle(pairs.slice());
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame(title, "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const [prompt, correct] = qs[i];
    const distract = shuffle(answers.filter((a) => a !== correct)).slice(0, 3);
    const options = shuffle([correct, ...distract]);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext" style="font-size:2.4rem">${prompt} = ?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v}</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === correct)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === correct) {
        streak++; ctx.score += 10; sfx("ok"); delay = 600;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1400;
        ctx.review.push({ q: `${prompt} = ?`, a: correct, exp: `${prompt} = ${correct}` });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: BÖLÜNEBİLME KURALLARI (sayı → kural)
   ===================================================== */
function runDivisibility(subject, opts) {
  opts = opts || {};
  const rules = DIV_RULES.map((p) => p[1]); // çeldirici havuzu = tüm kurallar
  const qs = shuffle(DIV_RULES.slice());
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Bölünebilme Kuralları", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const [num, correct] = qs[i];
    const distract = shuffle(rules.filter((r) => r !== correct)).slice(0, 3);
    const options = shuffle([correct, ...distract]);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext"><b style="font-size:2.4rem">${num}</b> ile bölünebilme kuralı?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v}</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === correct)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === correct) {
        streak++; ctx.score += 10; sfx("ok"); delay = 700;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1800;
        ctx.review.push({ q: `${num} ile bölünebilme kuralı`, a: correct, exp: `${num}: ${correct}.` });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: KAREKÖK (tam kareler √1 – √400)
   ===================================================== */
/* doğru köke yakın, akla yatkın 3 çeldirici (komşu tam sayılar) */
function rootOptions(n) {
  const cand = new Set();
  const add = (v) => { if (v > 0 && v !== n) cand.add(v); };
  add(n - 1); add(n + 1); add(n - 2); add(n + 2); add(n - 3); add(n + 3);
  const distract = shuffle([...cand]).slice(0, 3);
  return shuffle([n, ...distract]);
}

function runSquareRoots(subject, opts, maxN) {
  opts = opts || {};
  const qs = shuffle(Array.from({ length: maxN }, (_, k) => k + 1)); // kökler 1..maxN
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Karekök", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const n = qs[i];
    const square = n * n;
    const options = rootOptions(n);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext" style="font-size:2.4rem">√${square} = ?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v}</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === n)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === n) {
        streak++; ctx.score += 10; sfx("ok"); delay = 550;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1300;
        ctx.review.push({ q: `√${square}`, a: String(n), exp: `${n}² = ${square} olduğundan √${square} = ${n}.` });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: PİSAGOR ÜÇLÜLERİ (iki dik kenardan hipotenüs)
   ===================================================== */
function pythagorasOptions(a, b, c) {
  const cand = new Set();
  const add = (v) => { if (v > 0 && Number.isInteger(v) && v !== c) cand.add(v); };
  add(a + b);            // klasik hata: kenarları toplama
  add(c - 1); add(c + 1); add(c - 2); add(c + 2);
  let guard = 0;
  while (cand.size < 3 && guard < 40) { add(c + (Math.floor(Math.random() * 9) - 4)); guard++; }
  const distract = shuffle([...cand]).slice(0, 3);
  return shuffle([c, ...distract]);
}

function runPythagoras(subject, opts) {
  opts = opts || {};
  const qs = shuffle(PYTHAGOREAN.slice());
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Pisagor Üçlüleri", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const [a, b, c] = qs[i];
    const options = pythagorasOptions(a, b, c);
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext">Dik kenarları <b>${a}</b> ve <b>${b}</b> olan dik üçgenin hipotenüsü = ?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v}</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === c)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === c) {
        streak++; ctx.score += 10; sfx("ok"); delay = 650;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1700;
        ctx.review.push({ q: `Dik kenarlar ${a} ve ${b}, hipotenüs?`, a: String(c), exp: `${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c} = ${c}² olduğundan hipotenüs ${c}'dir.` });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   PRATİK: TÜMLER & BÜTÜNLER (tümler 90°, bütünler 180°)
   ===================================================== */
function runAngles(subject, opts) {
  opts = opts || {};
  // 20 soru: yarısı tümler (90°), yarısı bütünler (180°); açılar 5'in katı
  const qs = shuffle(Array.from({ length: 20 }, (_, k) => {
    const type = k % 2 === 0 ? "tumler" : "butunler";
    const max = type === "tumler" ? 85 : 175;
    const angle = 5 * (1 + Math.floor(Math.random() * (max / 5)));
    return { type, angle };
  }));
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Tümler & Bütünler", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const { type, angle } = qs[i];
    const total = type === "tumler" ? 90 : 180;
    const correct = total - angle;
    const wrongRule = (type === "tumler" ? 180 : 90) - angle; // klasik karışıklık
    const cand = new Set();
    const add = (v) => { if (v > 0 && v < 180 && v !== correct) cand.add(v); };
    add(wrongRule); add(correct + 5); add(correct - 5); add(correct + 10); add(correct - 10);
    add(angle); add(correct + 15); add(correct + 20); // kenar durumlar için yedek çeldirici
    const options = shuffle([correct, ...shuffle([...cand]).slice(0, 3)]);
    const label = type === "tumler" ? "tümleri" : "bütünleri";
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 3 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext" style="font-size:2rem"><b>${angle}°</b> açısının <b>${label}</b> kaç derecedir?</h2>
        <div class="opts">
          ${options.map((v, k) => `<button class="opt" data-k="${k}">${v}°</button>`).join("")}
        </div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((btn) => btn.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = options[+btn.dataset.k];
      const okBtn = btns[options.findIndex((v) => v === correct)];
      okBtn.classList.add("correct");
      let delay;
      if (pick === correct) {
        streak++; ctx.score += 10; sfx("ok"); delay = 650;
      } else {
        btn.classList.add("wrong"); streak = 0; sfx("bad"); delay = 1700;
        ctx.review.push({ q: `${angle}° açısının ${label}`, a: `${correct}°`, exp: `${type === "tumler" ? "Tümler açılar toplamı 90°'dir" : "Bütünler açılar toplamı 180°'dir"}: ${total} − ${angle} = ${correct}°.` });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      addTimer(setTimeout(() => { i++; show(); }, delay));
    }));
  }
  show();
}

/* =====================================================
   OYUN 1: BİLGİ YARIŞMASI (quiz / enler havuzu)
   ===================================================== */
function runQuiz(subject, poolKey, title, opts) {
  opts = opts || {};
  const pool = getItems(subject, poolKey, opts);
  const qs = getGameQuestions(pool, 10, opts);
  const ctx = { score: 0, max: 0, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame(title, "Puan: <b>0</b>");
  ctx.max = qs.length * 10;

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const q = qs[i];
    const opts2 = shuffle(q.o.map((t, idx) => ({ t, ok: idx === q.a })));
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 2 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext">${q.q}</h2>
        <div class="opts">
          ${opts2.map((o, k) => `<button class="opt" data-k="${k}">${o.t}</button>`).join("")}
        </div>
        <div id="expl"></div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = opts2[+b.dataset.k];
      const okBtn = btns[opts2.findIndex((o) => o.ok)];
      okBtn.classList.add("correct");
      if (pick.ok) {
        streak++;
        ctx.score += 10;
        sfx("ok");
      } else {
        b.classList.add("wrong");
        streak = 0;
        sfx("bad");
        ctx.review.push({ q: q.q, a: q.o[q.a], exp: q.exp });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      $("#expl").innerHTML = `
        <div class="explain ${pick.ok ? "good" : "bad"}">
          <p>${pick.ok ? "✅ Doğru!" : "❌ Doğru cevap: <b>" + q.o[q.a] + "</b>"}</p>
          <p class="exp-text">💡 ${q.exp}</p>
          <button class="btn primary" id="btnNext">${i === qs.length - 1 ? "Sonucu Gör" : "Devam →"}</button>
        </div>`;
      $("#btnNext").addEventListener("click", () => { sfx("click"); i++; show(); });
      $("#btnNext").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }));
  }
  show();
}

/* =====================================================
   OYUN: ÖNCÜL AVI (I-II-III) — KPSS klasik format
   ===================================================== */
const ROM = ["I", "II", "III", "IV", "V"];
function comboLabel(set) {
  const r = set.map((x) => ROM[x]);
  if (r.length === 1) return "Yalnız " + r[0];
  return r.slice(0, -1).join(", ") + " ve " + r[r.length - 1];
}
function sameSet(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}
function allSubsets(n) {
  const res = [];
  for (let mask = 1; mask < (1 << n); mask++) {
    const s = [];
    for (let i = 0; i < n; i++) if (mask & (1 << i)) s.push(i);
    res.push(s);
  }
  return res;
}
function buildComboOptions(n, correct) {
  const distract = allSubsets(n).filter((s) => !sameSet(s, correct));
  const picks = sample(distract, Math.min(3, distract.length));
  return [correct].concat(picks);
}

function runOncul(subject, opts) {
  opts = opts || {};
  const pool = getItems(subject, "oncul", opts);
  const qs = getGameQuestions(pool, 8, opts);
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  let i = 0, streak = 0;
  const stage = gameFrame("Öncül Avı", "Puan: <b>0</b>");

  function show() {
    if (i >= qs.length) return finishGame(ctx);
    setProgress(i, qs.length);
    const q = qs[i];
    const correctSet = q.correct.slice().sort((a, b) => a - b);
    const correctLabel = comboLabel(correctSet);
    const shown = shuffle(buildComboOptions(q.items.length, correctSet).map((set) => ({ label: comboLabel(set), ok: sameSet(set, correctSet) })));

    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span>${streak >= 2 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext">${q.q}</h2>
        <div class="oncul-list">
          ${q.items.map((it, k) => `<div class="oncul-item"><span class="rom">${ROM[k]}</span><p>${it}</p></div>`).join("")}
        </div>
        <p class="oncul-ask">Yukarıdakilerden hangileri doğrudur?</p>
        <div class="opts">
          ${shown.map((o, k) => `<button class="opt" data-k="${k}">${o.label}</button>`).join("")}
        </div>
        <div id="expl"></div>
      </div>`;

    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = shown[+b.dataset.k];
      btns[shown.findIndex((o) => o.ok)].classList.add("correct");
      if (pick.ok) { streak++; ctx.score += 10; sfx("ok"); }
      else { b.classList.add("wrong"); streak = 0; sfx("bad"); ctx.review.push({ q: q.q, a: correctLabel, exp: q.exp }); }
      setHud(`Puan: <b>${ctx.score}</b>`);
      $("#expl").innerHTML = `
        <div class="explain ${pick.ok ? "good" : "bad"}">
          <p>${pick.ok ? "✅ Doğru!" : "❌ Doğru cevap: <b>" + correctLabel + "</b>"}</p>
          <p class="exp-text">💡 ${q.exp}</p>
          <button class="btn primary" id="btnNext">${i === qs.length - 1 ? "Sonucu Gör" : "Devam →"}</button>
        </div>`;
      $("#btnNext").addEventListener("click", () => { sfx("click"); i++; show(); });
      $("#btnNext").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }));
  }
  show();
}

/* =====================================================
   OYUN 2: DOĞRU / YANLIŞ hız turu
   ===================================================== */
function runTF(subject, opts) {
  opts = opts || {};
  const all = getItems(subject, "tf", opts);
  const pool = getGameQuestions(all, 20, opts);
  const ctx = { score: 0, max: pool.length * 10, review: [] };
  let i = 0, time = 90, paused = false;
  const stage = gameFrame("Doğru mu Yanlış mı?", `⏱ <b id="tleft">90</b> sn • Puan: <b id="tsc">0</b>`);

  const tick = setInterval(() => {
    if (paused) return;
    time--;
    const el = $("#tleft");
    if (el) el.textContent = time;
    if (time <= 0) end();
  }, 1000);
  addTimer(tick);

  function end() { finishGame(ctx); }

  function show() {
    if (i >= pool.length) return end();
    setProgress(i, pool.length);
    const q = pool[i];
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>${i + 1} / ${pool.length}</span></div>
        <h2 class="qtext tf-text">${q.s}</h2>
        <div class="tf-btns">
          <button class="tf-btn true" data-v="1">✔ DOĞRU</button>
          <button class="tf-btn false" data-v="0">✘ YANLIŞ</button>
        </div>
        <div id="expl"></div>
      </div>`;
    stage.querySelectorAll(".tf-btn").forEach((b) =>
      b.addEventListener("click", () => {
        stage.querySelectorAll(".tf-btn").forEach((x) => (x.disabled = true));
        const ans = b.dataset.v === "1";
        if (ans === q.t) {
          ctx.score += 10;
          sfx("ok");
          const sc = $("#tsc"); if (sc) sc.textContent = ctx.score;
          b.classList.add("correct");
          addTimer(setTimeout(() => { i++; show(); }, 350));
        } else {
          b.classList.add("wrong");
          sfx("bad");
          paused = true;
          ctx.review.push({ q: q.s, a: q.t ? "DOĞRU" : "YANLIŞ", exp: q.exp });
          $("#expl").innerHTML = `
            <div class="explain bad">
              <p>❌ Bu ifade <b>${q.t ? "DOĞRU" : "YANLIŞ"}</b> idi.</p>
              <p class="exp-text">💡 ${q.exp}</p>
              <button class="btn primary" id="btnNext">Devam →</button>
            </div>`;
          $("#btnNext").addEventListener("click", () => { sfx("click"); paused = false; i++; show(); });
        }
      })
    );
  }
  show();
}

/* =====================================================
   OYUN 3: EŞLEŞTİRME
   ===================================================== */
function runMatch(subject, opts) {
  opts = opts || {};
  const rounds = sample(getItems(subject, "match", { unit: opts.unit }), 2);
  const ctx = { score: 0, max: rounds.reduce((t, r) => t + r.pairs.length * 10, 0), review: [] };
  let r = 0;
  const stage = gameFrame("Eşleştirme", "Puan: <b>0</b>");
  const totalPairs = rounds.reduce((t, x) => t + x.pairs.length, 0);
  let donePairs = 0;

  function showRound() {
    if (r >= rounds.length) return finishGame(ctx);
    const round = rounds[r];
    const left = shuffle(round.pairs.map((p, idx) => ({ t: p[0], id: idx })));
    const right = shuffle(round.pairs.map((p, idx) => ({ t: p[1], id: idx })));
    let selected = null, matched = 0, mistakes = 0;

    stage.innerHTML = `
      <div class="pop">
        <div class="qmeta center"><span>Tur ${r + 1} / ${rounds.length} — ${round.title}</span></div>
        <p class="match-hint">Soldan bir kart seç, sağdan karşılığını bul.</p>
        <div class="match-grid">
          <div class="match-col" id="colL">
            ${left.map((x, k) => `<button class="mcard" data-side="L" data-id="${x.id}" data-k="${k}">${x.t}</button>`).join("")}
          </div>
          <div class="match-col" id="colR">
            ${right.map((x, k) => `<button class="mcard" data-side="R" data-id="${x.id}" data-k="${k}">${x.t}</button>`).join("")}
          </div>
        </div>
      </div>`;

    stage.querySelectorAll(".mcard").forEach((b) =>
      b.addEventListener("click", () => {
        if (b.classList.contains("done")) return;
        if (b.dataset.side === "L") {
          stage.querySelectorAll('.mcard[data-side="L"]').forEach((x) => x.classList.remove("sel"));
          b.classList.add("sel");
          selected = b;
          sfx("click");
          return;
        }
        if (!selected) { b.classList.add("shake"); addTimer(setTimeout(() => b.classList.remove("shake"), 400)); return; }
        if (b.dataset.id === selected.dataset.id) {
          b.classList.add("done"); selected.classList.add("done");
          selected.classList.remove("sel");
          selected = null; matched++; donePairs++;
          ctx.score += 10;
          sfx("ok");
          setHud(`Puan: <b>${ctx.score}</b>`);
          setProgress(donePairs, totalPairs);
          if (matched === round.pairs.length) {
            addTimer(setTimeout(() => { r++; showRound(); }, 650));
          }
        } else {
          mistakes++;
          ctx.score = Math.max(0, ctx.score - 2);
          setHud(`Puan: <b>${ctx.score}</b>`);
          const pair = round.pairs[+selected.dataset.id];
          const rq = round.title + ": " + pair[0];
          if (!ctx.review.some((x) => x.q === rq)) {
            ctx.review.push({ q: rq, a: pair[1], exp: "" });
          }
          b.classList.add("shake", "wrongflash");
          selected.classList.add("shake");
          sfx("bad");
          const sl = selected;
          addTimer(setTimeout(() => { b.classList.remove("shake", "wrongflash"); sl.classList.remove("shake"); }, 450));
        }
      })
    );
  }
  showRound();
}

/* =====================================================
   OYUN 4: ZAMAN TÜNELİ (tarih)
   ===================================================== */
function runTimeline(subject, opts) {
  opts = opts || {};
  const all = getItems(subject, "timeline", { unit: opts.unit });
  let pool = sample(all, Math.min(15, all.length));
  if (pool.length % 5 === 1) pool = pool.slice(0, pool.length - 1); // tek kalan 1 öğeyi at
  const rounds = [];
  for (let k = 0; k < pool.length; k += 5) rounds.push(pool.slice(k, k + 5));
  const total = pool.length;
  const ctx = { score: 0, max: total * 10, review: [] };
  let r = 0, placedTotal = 0;
  const stage = gameFrame("Zaman Tüneli", "Puan: <b>0</b>");

  function showRound() {
    if (r >= rounds.length || total === 0) return finishGame(ctx);
    const events = rounds[r];
    const sorted = [...events].sort((a, b) => a.y - b.y);
    let next = 0;
    const erred = new Set();

    stage.innerHTML = `
      <div class="pop">
        <div class="qmeta center"><span>Tur ${r + 1} / ${rounds.length}</span></div>
        <p class="match-hint">Olayları <b>en eskiden en yeniye</b> doğru sırayla tıkla.</p>
        <div class="tl-track" id="track"></div>
        <div class="tl-pool" id="tpool">
          ${shuffle(events).map((e) => `<button class="tl-chip" data-y="${e.y}">${e.e}</button>`).join("")}
        </div>
      </div>`;

    stage.querySelectorAll(".tl-chip").forEach((b) =>
      b.addEventListener("click", () => {
        const ev = sorted[next];
        if (+b.dataset.y === ev.y) {
          b.remove();
          const div = document.createElement("div");
          div.className = "tl-placed pop";
          div.innerHTML = `<span class="tl-year">${ev.label}</span><div><b>${ev.e}</b><small>${ev.exp}</small></div>`;
          $("#track").appendChild(div);
          ctx.score += erred.has(ev.y) ? 4 : 10;
          if (erred.has(ev.y)) ctx.review.push({ q: ev.e, a: ev.label, exp: ev.exp });
          next++; placedTotal++;
          sfx("ok");
          setHud(`Puan: <b>${ctx.score}</b>`);
          setProgress(placedTotal, total);
          if (next === sorted.length) addTimer(setTimeout(() => { r++; showRound(); }, 900));
        } else {
          erred.add(sorted[next].y);
          b.classList.add("shake");
          sfx("bad");
          addTimer(setTimeout(() => b.classList.remove("shake"), 400));
        }
      })
    );
  }
  showRound();
}

/* =====================================================
   OYUN 5: İPUCU AVI
   ===================================================== */
function runClues(subject, opts) {
  opts = opts || {};
  const all = getItems(subject, "clues", opts);
  const pool = getGameQuestions(all, 8, opts);
  const ctx = { score: 0, max: pool.length * 30, review: [] };
  let i = 0;
  const stage = gameFrame("İpucu Avı", "Puan: <b>0</b>");

  function show() {
    if (i >= pool.length) return finishGame(ctx);
    setProgress(i, pool.length);
    const q = pool[i];
    let revealed = 1;
    const pts = [30, 20, 10];
    const opts2 = shuffle(q.options.map((t) => ({ t, ok: t === q.answer })));

    function render() {
      stage.innerHTML = `
        <div class="qcard pop">
          <div class="qmeta"><span>${i + 1} / ${pool.length}</span><span class="streak">💎 ${pts[revealed - 1]} puan</span></div>
          <div class="clue-list">
            ${q.clues.slice(0, revealed).map((c, k) => `<p class="clue pop">🔎 İpucu ${k + 1}: ${c}</p>`).join("")}
          </div>
          ${revealed < 3 ? `<button class="btn small" id="btnClue">➕ Bir ipucu daha (${pts[revealed]} puana düşer)</button>` : ""}
          <div class="opts">
            ${opts2.map((o, k) => `<button class="opt" data-k="${k}">${o.t}</button>`).join("")}
          </div>
          <div id="expl"></div>
        </div>`;

      const more = $("#btnClue");
      if (more) more.addEventListener("click", () => { sfx("click"); revealed++; render(); });

      const btns = [...stage.querySelectorAll(".opt")];
      btns.forEach((b) =>
        b.addEventListener("click", () => {
          btns.forEach((x) => (x.disabled = true));
          if (more) more.disabled = true;
          const pick = opts2[+b.dataset.k];
          btns[opts2.findIndex((o) => o.ok)].classList.add("correct");
          if (pick.ok) { ctx.score += pts[revealed - 1]; sfx("ok"); }
          else { b.classList.add("wrong"); sfx("bad"); ctx.review.push({ q: q.clues[0], a: q.answer, exp: q.exp }); }
          setHud(`Puan: <b>${ctx.score}</b>`);
          $("#expl").innerHTML = `
            <div class="explain ${pick.ok ? "good" : "bad"}">
              <p>${pick.ok ? "✅ Doğru: <b>" + q.answer + "</b>" : "❌ Doğru cevap: <b>" + q.answer + "</b>"}</p>
              <p class="exp-text">💡 ${q.exp}</p>
              <button class="btn primary" id="btnNext">${i === pool.length - 1 ? "Sonucu Gör" : "Devam →"}</button>
            </div>`;
          $("#btnNext").addEventListener("click", () => { sfx("click"); i++; show(); });
        })
      );
    }
    render();
  }
  show();
}

/* =====================================================
   PAYLAŞILAN: TÜRKİYE HARİTASI (il + bölge)
   Kaynak: Wikimedia Commons, "BlankMapTurkishProvincesRegions.svg",
   A. G. Baydin (2006), CC BY-SA 3.0 / GFDL 1.2+ — bkz. data/turkiye-harita.js
   ===================================================== */
function mapData() {
  return (window.KPSS_DATA && window.KPSS_DATA._map) || { viewBox: "0 0 1052.3622 744.09448", regions: {}, provinces: [] };
}

function renderTurkeyMap() {
  const MAP = mapData();
  const paths = MAP.provinces.map((p) =>
    `<path class="il region-${p.region}" data-id="${p.id}" data-region="${p.region}" data-name="${p.name}" d="${p.d}"><title>${p.name}</title></path>`
  ).join("");
  const legend = Object.keys(MAP.regions).map((r) =>
    `<span class="legend-item"><i class="legend-swatch region-${r}"></i>${MAP.regions[r]}</span>`
  ).join("");
  return `
    <svg viewBox="${MAP.viewBox}" class="trmap" id="trmap" role="img" aria-label="Türkiye il ve bölge haritası">
      ${paths}
    </svg>
    <div class="map-legend">${legend}</div>`;
}

/* dokunmatik isabetsizlik yedeği: tıklama noktasına en yakın ili bbox merkezine göre bul */
function nearestProvince(svgEl, clientX, clientY) {
  const rect = svgEl.getBoundingClientRect();
  const vb = svgEl.viewBox.baseVal;
  if (!rect.width || !rect.height) return null;
  const x = (clientX - rect.left) / rect.width * vb.width + vb.x;
  const y = (clientY - rect.top) / rect.height * vb.height + vb.y;
  let best = null, bestD = Infinity;
  mapData().provinces.forEach((p) => {
    const d = (p.cx - x) ** 2 + (p.cy - y) ** 2;
    if (d < bestD) { bestD = d; best = p; }
  });
  return best;
}

/* =====================================================
   OYUN 6: BÖLGE AVI (coğrafya haritası)
   ===================================================== */
function runMap(subject, opts) {
  opts = opts || {};
  const all = getItems(subject, "map", { unit: opts.unit });
  const pool = sample(all, Math.min(10, all.length));
  const ctx = { score: 0, max: pool.length * 10, review: [] };
  const MAP = mapData();
  let i = 0, locked = false;
  const stage = gameFrame("Bölge Avı", "Puan: <b>0</b>");

  function show() {
    if (i >= pool.length) return finishGame(ctx);
    setProgress(i, pool.length);
    locked = false;
    const q = pool[i];
    stage.innerHTML = `
      <div class="pop">
        <div class="map-clue qcard"><div class="qmeta"><span>${i + 1} / ${pool.length}</span></div>
          <h2 class="qtext">🧭 ${q.c}</h2>
        </div>
        ${renderTurkeyMap()}
        <div id="expl"></div>
      </div>`;

    const svgEl = $("#trmap");
    const correctName = MAP.regions[q.r] || q.r;

    function pick(region) {
      if (locked || !region) return;
      locked = true;
      svgEl.querySelectorAll(".il").forEach((el) => el.classList.remove("rg-hover"));
      svgEl.querySelectorAll(`.il[data-region="${q.r}"]`).forEach((el) => el.classList.add("rg-ok"));
      if (region === q.r) {
        ctx.score += 10;
        sfx("ok");
      } else {
        svgEl.querySelectorAll(`.il[data-region="${region}"]`).forEach((el) => el.classList.add("rg-bad"));
        sfx("bad");
        ctx.review.push({ q: q.c, a: correctName, exp: q.exp });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      $("#expl").innerHTML = `
        <div class="explain ${region === q.r ? "good" : "bad"}">
          <p>${region === q.r ? "✅ Doğru: <b>" + correctName + "</b>" : "❌ Doğru bölge: <b>" + correctName + "</b>"}</p>
          <p class="exp-text">💡 ${q.exp}</p>
          <button class="btn primary" id="btnNext">${i === pool.length - 1 ? "Sonucu Gör" : "Devam →"}</button>
        </div>`;
      $("#btnNext").addEventListener("click", () => { sfx("click"); i++; show(); });
      $("#btnNext").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    svgEl.querySelectorAll(".il").forEach((p) => {
      const titleEl = p.querySelector("title");
      if (titleEl) {
        titleEl.textContent = MAP.regions[p.dataset.region] || p.dataset.region;
      }
      p.addEventListener("click", () => pick(p.dataset.region));
      p.addEventListener("mouseenter", () => {
        if (locked) return;
        const reg = p.dataset.region;
        svgEl.querySelectorAll(`.il[data-region="${reg}"]`).forEach((el) => el.classList.add("rg-hover"));
      });
      p.addEventListener("mouseleave", () => {
        const reg = p.dataset.region;
        svgEl.querySelectorAll(`.il[data-region="${reg}"]`).forEach((el) => el.classList.remove("rg-hover"));
      });
    });
    svgEl.addEventListener("click", (e) => {
      if (locked || e.target.closest(".il")) return;
      const near = nearestProvince(svgEl, e.clientX, e.clientY);
      if (near) pick(near.region);
    });
  }
  show();
}

/* =====================================================
   OYUN: İL BULMACA (coğrafya haritası)
   ===================================================== */
function runIller(subject, opts) {
  opts = opts || {};
  const all = getItems(subject, "iller", { unit: opts.unit, level: opts.level });
  const pool = getGameQuestions(all, 10, opts);
  const ctx = { score: 0, max: pool.length * 10, review: [] };
  const MAP = mapData();
  let i = 0, locked = false;
  const stage = gameFrame("İl Bulmaca", "Puan: <b>0</b>");

  function show() {
    if (i >= pool.length) return finishGame(ctx);
    setProgress(i, pool.length);
    locked = false;
    const q = pool[i];
    stage.innerHTML = `
      <div class="pop">
        <div class="map-clue qcard"><div class="qmeta"><span>${i + 1} / ${pool.length}</span></div>
          <h2 class="qtext">📍 ${q.c}</h2>
        </div>
        ${renderTurkeyMap()}
        <div id="expl"></div>
      </div>`;

    const svgEl = $("#trmap");

    function pick(name) {
      if (locked || !name) return;
      locked = true;
      const correctEl = svgEl.querySelector(`.il[data-name="${q.il}"]`);
      if (correctEl) correctEl.classList.add("rg-ok");
      if (name === q.il) {
        ctx.score += 10;
        sfx("ok");
      } else {
        const wrongEl = svgEl.querySelector(`.il[data-name="${name}"]`);
        if (wrongEl) wrongEl.classList.add("rg-bad");
        sfx("bad");
        ctx.review.push({ q: q.c, a: q.il, exp: q.exp });
      }
      setHud(`Puan: <b>${ctx.score}</b>`);
      $("#expl").innerHTML = `
        <div class="explain ${name === q.il ? "good" : "bad"}">
          <p>${name === q.il ? "✅ Doğru: <b>" + q.il + "</b>" : "❌ Doğru il: <b>" + q.il + "</b>"}</p>
          <p class="exp-text">💡 ${q.exp}</p>
          <button class="btn primary" id="btnNext">${i === pool.length - 1 ? "Sonucu Gör" : "Devam →"}</button>
        </div>`;
      $("#btnNext").addEventListener("click", () => { sfx("click"); i++; show(); });
      $("#btnNext").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    svgEl.querySelectorAll(".il").forEach((p) => {
      const titleEl = p.querySelector("title");
      if (titleEl) titleEl.textContent = ""; // Kopya vermemek için başlıkları temizle
      p.addEventListener("click", () => pick(p.dataset.name));
    });
    svgEl.addEventListener("click", (e) => {
      if (locked || e.target.closest(".il")) return;
      const near = nearestProvince(svgEl, e.clientX, e.clientY);
      if (near) pick(near.name);
    });
  }
  show();
}

/* =====================================================
   OYUN 7: SAYI AVCISI (vatandaşlık)
   ===================================================== */
function runNumbers(subject, opts) {
  opts = opts || {};
  const all = getItems(subject, "numbers", opts);
  const pool = getGameQuestions(all, 12, opts);
  const ctx = { score: 0, max: pool.length * 10, review: [] };
  let i = 0;
  const stage = gameFrame("Sayı Avcısı", "Puan: <b>0</b>");

  function show() {
    if (i >= pool.length) return finishGame(ctx);
    setProgress(i, pool.length);
    const q = pool[i];
    const opts2 = shuffle(q.opts.map((t) => ({ t, ok: t === q.n })));
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>${i + 1} / ${pool.length}</span></div>
        <h2 class="qtext">🔢 ${q.f}</h2>
        <div class="numopts">
          ${opts2.map((o, k) => `<button class="numopt" data-k="${k}">${o.t}</button>`).join("")}
        </div>
        <div id="expl"></div>
      </div>`;
    const btns = [...stage.querySelectorAll(".numopt")];
    btns.forEach((b) =>
      b.addEventListener("click", () => {
        btns.forEach((x) => (x.disabled = true));
        const pick = opts2[+b.dataset.k];
        btns[opts2.findIndex((o) => o.ok)].classList.add("correct");
        if (pick.ok) { ctx.score += 10; sfx("ok"); }
        else { b.classList.add("wrong"); sfx("bad"); ctx.review.push({ q: q.f, a: q.n, exp: q.exp }); }
        setHud(`Puan: <b>${ctx.score}</b>`);
        $("#expl").innerHTML = `
          <div class="explain ${pick.ok ? "good" : "bad"}">
            <p>${pick.ok ? "✅ Doğru!" : "❌ Doğru cevap: <b>" + q.n + "</b>"}</p>
            <p class="exp-text">💡 ${q.exp}</p>
            <button class="btn primary" id="btnNext">${i === pool.length - 1 ? "Sonucu Gör" : "Devam →"}</button>
          </div>`;
        $("#btnNext").addEventListener("click", () => { sfx("click"); i++; show(); });
      })
    );
  }
  show();
}

/* =====================================================
   OYUN 8: BİLGİ KARTLARI (çalışma modu)
   ===================================================== */
function runCards(subject, opts) {
  opts = opts || {};
  let deck = shuffle(getItems(subject, "cards", { unit: opts.unit }));
  if (!deck.length) { backToContext(); return; }
  let i = 0, flipped = false;
  const stage = gameFrame("Bilgi Kartları", "Çalışma modu");

  function show() {
    setProgress(i + 1, deck.length);
    const c = deck[i];
    flipped = false;
    stage.innerHTML = `
      <div class="pop">
        <div class="qmeta center"><span>Kart ${i + 1} / ${deck.length} — karta dokunarak çevir</span></div>
        <div class="flip-wrap">
          <div class="flip" id="flip">
            <div class="flip-face front"><h2>${c.front}</h2><span class="tap">👆 çevir</span></div>
            <div class="flip-face back"><p>${c.back}</p></div>
          </div>
        </div>
        <div class="card-nav">
          <button class="btn" id="cPrev" ${i === 0 ? "disabled" : ""}>← Önceki</button>
          <button class="btn" id="cShuffle">🔀 Karıştır</button>
          <button class="btn primary" id="cNext">${i === deck.length - 1 ? "Bitir ✓" : "Sonraki →"}</button>
        </div>
      </div>`;

    $("#flip").addEventListener("click", () => {
      flipped = !flipped;
      $("#flip").classList.toggle("flipped", flipped);
      sfx("click");
    });
    $("#cPrev").addEventListener("click", () => { if (i > 0) { i--; sfx("click"); show(); } });
    $("#cShuffle").addEventListener("click", () => { deck = shuffle(deck); i = 0; sfx("click"); show(); });
    $("#cNext").addEventListener("click", () => {
      sfx("click");
      if (i === deck.length - 1) { backToContext(); } else { i++; show(); }
    });
  }
  show();
}

/* =====================================================
   OYUN 9: HAFIZA KARTLARI (eşleştirme havuzundan)
   ===================================================== */
function runMemory(subject, opts) {
  opts = opts || {};
  const rounds = getItems(subject, "match", { unit: opts.unit });
  if (!rounds.length) { backToContext(); return; }
  const round = sample(rounds, 1)[0];
  const pairs = sample(round.pairs, Math.min(6, round.pairs.length));
  let cards = [];
  pairs.forEach((p, idx) => { cards.push({ pid: idx, t: p[0] }); cards.push({ pid: idx, t: p[1] }); });
  cards = shuffle(cards);
  const ctx = { score: 0, max: pairs.length * 10, review: [] };
  let first = null, lock = false, matched = 0;
  const stage = gameFrame("Hafıza Kartları", `Eşleşme: <b>0</b>/${pairs.length}`);

  stage.innerHTML = `
    <div class="pop">
      <p class="match-hint">${round.title} — kartları çevir, eşleşen çiftleri bul.</p>
      <div class="mem-grid">
        ${cards.map((c, k) => `<button class="mem-card" data-k="${k}" data-pid="${c.pid}"><span class="mem-face">?</span></button>`).join("")}
      </div>
    </div>`;

  const btns = [...stage.querySelectorAll(".mem-card")];
  btns.forEach((b) => b.addEventListener("click", () => {
    if (lock || b.classList.contains("matched") || b.classList.contains("open")) return;
    const k = +b.dataset.k;
    b.querySelector(".mem-face").textContent = cards[k].t;
    b.classList.add("open");
    sfx("click");
    if (first == null) { first = b; return; }
    if (first.dataset.pid === b.dataset.pid) {
      first.classList.add("matched"); b.classList.add("matched");
      first = null; matched++;
      ctx.score += 10; sfx("ok");
      setHud(`Eşleşme: <b>${matched}</b>/${pairs.length}`);
      setProgress(matched, pairs.length);
      if (matched === pairs.length) addTimer(setTimeout(() => finishGame(ctx), 700));
    } else {
      lock = true; sfx("bad");
      const a = first; first = null;
      addTimer(setTimeout(() => {
        [a, b].forEach((x) => { x.classList.remove("open"); x.querySelector(".mem-face").textContent = "?"; });
        lock = false;
      }, 800));
    }
  }));
}


/* =====================================================
   OYUN 11: KUTUYU AÇ (quiz havuzu, sürprizli)
   ===================================================== */
function runBox(subject, opts) {
  opts = opts || {};
  const pool = getItems(subject, "quiz", opts);
  const qs = getGameQuestions(pool, 8, opts);
  const ctx = { score: 0, max: qs.length * 10, review: [] };
  const opened = new Array(qs.length).fill(false);
  let answered = 0, streak = 0;
  const stage = gameFrame("Kutuyu Aç", "Puan: <b>0</b>");

  function grid() {
    setProgress(answered, qs.length);
    if (answered >= qs.length) return finishGame(ctx);
    stage.innerHTML = `
      <div class="pop">
        <p class="match-hint">Bir kutu seç — içinden bir soru çıksın! (${answered}/${qs.length} açıldı)</p>
        <div class="box-grid">
          ${qs.map((q, k) => `<button class="boxc ${opened[k] ? "opened" : ""}" data-k="${k}" ${opened[k] ? "disabled" : ""}><span class="box-ico">${opened[k] ? "✅" : "🎁"}</span><span class="box-no">${k + 1}</span></button>`).join("")}
        </div>
      </div>`;
    stage.querySelectorAll(".boxc").forEach((b) => b.addEventListener("click", () => {
      const k = +b.dataset.k;
      if (opened[k]) return;
      sfx("click"); b.classList.add("boxpop");
      addTimer(setTimeout(() => question(k), 260));
    }));
  }

  function question(k) {
    const q = qs[k];
    const opts2 = shuffle(q.o.map((t, idx) => ({ t, ok: idx === q.a })));
    stage.innerHTML = `
      <div class="qcard pop">
        <div class="qmeta"><span>🎁 Kutu ${k + 1}</span>${streak >= 2 ? `<span class="streak">🔥 ${streak} seri</span>` : ""}</div>
        <h2 class="qtext">${q.q}</h2>
        <div class="opts">${opts2.map((o, j) => `<button class="opt" data-k="${j}">${o.t}</button>`).join("")}</div>
        <div id="expl"></div>
      </div>`;
    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = opts2[+b.dataset.k];
      btns[opts2.findIndex((o) => o.ok)].classList.add("correct");
      if (pick.ok) { streak++; ctx.score += 10; sfx("ok"); }
      else { b.classList.add("wrong"); streak = 0; sfx("bad"); ctx.review.push({ q: q.q, a: q.o[q.a], exp: q.exp }); }
      opened[k] = true; answered++;
      setHud(`Puan: <b>${ctx.score}</b>`);
      $("#expl").innerHTML = `
        <div class="explain ${pick.ok ? "good" : "bad"}">
          <p>${pick.ok ? "✅ Doğru!" : "❌ Doğru cevap: <b>" + q.o[q.a] + "</b>"}</p>
          <p class="exp-text">💡 ${q.exp}</p>
          <button class="btn primary" id="btnNext">${answered >= qs.length ? "Sonucu Gör" : "Kutulara Dön →"}</button>
        </div>`;
      $("#btnNext").addEventListener("click", () => { sfx("click"); grid(); });
      $("#btnNext").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }));
  }
  grid();
}

/* =====================================================
   OYUN 12: GRUPLARA AYIR (kategori sıralama)
   ===================================================== */
function runGroups(subject, opts) {
  opts = opts || {};
  const all = getItems(subject, "groups", { unit: opts.unit });
  if (!all.length) { backToContext(); return; }
  const rounds = sample(all, Math.min(2, all.length));
  const totalItems = rounds.reduce((t, r) => t + r.items.length, 0);
  const ctx = { score: 0, max: totalItems * 10, review: [] };
  let r = 0, placedTotal = 0;
  const stage = gameFrame("Gruplara Ayır", "Puan: <b>0</b>");

  function showRound() {
    if (r >= rounds.length) return finishGame(ctx);
    const round = rounds[r];
    const items = shuffle(round.items.map((it, idx) => ({ t: it.t, g: it.g, _id: idx })));
    let selected = null, placed = 0;

    stage.innerHTML = `
      <div class="pop">
        <div class="qmeta center"><span>Tur ${r + 1} / ${rounds.length} — ${round.title}</span></div>
        <p class="match-hint">Bir öğe seç, sonra ait olduğu grubu tıkla.</p>
        <div class="groups-cats" style="grid-template-columns:repeat(${Math.min(round.groups.length, 3)},1fr)">
          ${round.groups.map((g, gi) => `<div class="gcat" data-g="${gi}"><div class="gcat-title">${g}</div><div class="gcat-items"></div></div>`).join("")}
        </div>
        <div class="groups-pool">
          ${items.map((it) => `<button class="gchip" data-id="${it._id}" data-g="${it.g}">${it.t}</button>`).join("")}
        </div>
      </div>`;

    stage.querySelectorAll(".gchip").forEach((b) => b.addEventListener("click", () => {
      if (b.classList.contains("done")) return;
      stage.querySelectorAll(".gchip").forEach((x) => x.classList.remove("sel"));
      b.classList.add("sel"); selected = b; sfx("click");
    }));

    stage.querySelectorAll(".gcat").forEach((cat) => cat.addEventListener("click", () => {
      if (!selected) { cat.classList.add("shake"); addTimer(setTimeout(() => cat.classList.remove("shake"), 350)); return; }
      const chip = selected;
      const correctG = +chip.dataset.g;
      const place = (targetCat, ok) => {
        chip.classList.remove("sel"); chip.classList.add("done");
        chip.disabled = true;
        if (!ok) chip.classList.add("misplaced");
        targetCat.querySelector(".gcat-items").appendChild(chip);
        selected = null; placed++; placedTotal++;
        setProgress(placedTotal, totalItems);
        if (placed === round.items.length) addTimer(setTimeout(() => { r++; showRound(); }, 750));
      };
      if (+cat.dataset.g === correctG) {
        ctx.score += 10; sfx("ok");
        setHud(`Puan: <b>${ctx.score}</b>`);
        cat.classList.add("flash-ok");
        addTimer(setTimeout(() => cat.classList.remove("flash-ok"), 400));
        place(cat, true);
      } else {
        sfx("bad");
        cat.classList.add("shake"); chip.classList.add("shake");
        ctx.review.push({ q: round.title + " — " + chip.textContent, a: round.groups[correctG], exp: round.exp || "" });
        const correctCat = stage.querySelector('.gcat[data-g="' + correctG + '"]');
        addTimer(setTimeout(() => { cat.classList.remove("shake"); chip.classList.remove("shake"); place(correctCat, false); }, 650));
      }
    }));
  }
  showRound();
}

/* =====================================================
   DENEME SINAVI (exam) — üniteler arası karışık, süreli
   ===================================================== */
function fmtTime(s) {
  s = Math.max(0, s);
  const m = Math.floor(s / 60), ss = s % 60;
  return m + ":" + (ss < 10 ? "0" : "") + ss;
}
function startExam(subject) {
  stopTimers();
  current = { subject, game: "exam", opts: {} };
  runExam(subject);
}
function runExam(subject) {
  const quizPool = getItems(subject, "quiz", {}).map((q) => ({ type: "quiz", q }));
  const onculPool = getItems(subject, "oncul", {}).map((q) => ({ type: "oncul", q }));
  const allItems = quizPool.concat(onculPool);
  const N = Math.min(20, allItems.length);
  const qs = sample(allItems, N);
  const ctx = { correct: 0, wrong: 0, blank: 0, review: [], byUnit: {} };
  let i = 0, time = N * 45, done = false;
  const stage = gameFrame("Deneme Sınavı", `⏱ <b id="tleft">${fmtTime(time)}</b> • <b id="dsc">0</b>/${N}`);

  if (N === 0) {
    stage.innerHTML = `<p class="locked-note">Bu derste deneme için yeterli soru yok.</p>`;
    return;
  }

  const tick = setInterval(() => {
    time--;
    const el = $("#tleft");
    if (el) el.textContent = fmtTime(time);
    if (time <= 0) endExam();
  }, 1000);
  addTimer(tick);

  function bindOpts(opts, correctText, exp, q) {
    const btns = [...stage.querySelectorAll(".opt")];
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => (x.disabled = true));
      const pick = opts[+b.dataset.k];
      btns[opts.findIndex((o) => o.ok)].classList.add("correct");
      const unit = q.unit || "genel";
      const bu = ctx.byUnit[unit] = ctx.byUnit[unit] || { c: 0, t: 0 };
      bu.t++;
      if (pick.ok) { ctx.correct++; bu.c++; sfx("ok"); }
      else { b.classList.add("wrong"); ctx.wrong++; sfx("bad"); ctx.review.push({ q: q.q, a: correctText, exp }); }
      const sc = $("#dsc"); if (sc) sc.textContent = ctx.correct;
      $("#expl").innerHTML = `
        <div class="explain ${pick.ok ? "good" : "bad"}">
          <p>${pick.ok ? "✅ Doğru!" : "❌ " + correctText}</p>
          <p class="exp-text">💡 ${exp}</p>
          <button class="btn primary" id="btnNext">${i === qs.length - 1 ? "Bitir & Sonuç" : "Devam →"}</button>
        </div>`;
      $("#btnNext").addEventListener("click", () => { sfx("click"); i++; show(); });
      $("#btnNext").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }));
  }

  function show() {
    if (i >= qs.length) return endExam();
    setProgress(i, qs.length);
    const item = qs[i], q = item.q;
    const head = `<div class="qmeta"><span>Soru ${i + 1} / ${qs.length}</span><span class="streak">📝 Deneme</span></div>`;
    if (item.type === "quiz") {
      const opts = shuffle(q.o.map((t, idx) => ({ t, ok: idx === q.a })));
      stage.innerHTML = `<div class="qcard pop">${head}<h2 class="qtext">${q.q}</h2><div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}">${o.t}</button>`).join("")}</div><div id="expl"></div></div>`;
      bindOpts(opts, "Doğru cevap: <b>" + q.o[q.a] + "</b>", q.exp, q);
    } else {
      const correctSet = q.correct.slice().sort((a, b) => a - b);
      const cl = comboLabel(correctSet);
      const shown = shuffle(buildComboOptions(q.items.length, correctSet).map((set) => ({ label: comboLabel(set), ok: sameSet(set, correctSet) })));
      stage.innerHTML = `<div class="qcard pop">${head}<h2 class="qtext">${q.q}</h2><div class="oncul-list">${q.items.map((it, k) => `<div class="oncul-item"><span class="rom">${ROM[k]}</span><p>${it}</p></div>`).join("")}</div><p class="oncul-ask">Yukarıdakilerden hangileri doğrudur?</p><div class="opts">${shown.map((o, k) => `<button class="opt" data-k="${k}">${o.label}</button>`).join("")}</div><div id="expl"></div></div>`;
      bindOpts(shown.map((o) => ({ t: o.label, ok: o.ok })), "Doğru cevap: <b>" + cl + "</b>", q.exp, q);
    }
  }

  function endExam() {
    if (done) return;
    done = true;
    stopTimers();
    const total = qs.length;
    ctx.blank = total - ctx.correct - ctx.wrong;
    const score = ctx.correct * 10;
    save.xp[subject] = (save.xp[subject] || 0) + score;
    const key = subject + ":exam";
    const pb = save.best[key];
    const rec = pb == null || ctx.correct > pb;
    if (rec) save.best[key] = ctx.correct;
    persist();

    const pct = total ? ctx.correct / total : 0;
    let emoji = pct >= 0.85 ? "🏆" : pct >= 0.6 ? "💪" : pct >= 0.4 ? "🌱" : "📚";
    if (pct >= 0.7) { sfx("win"); confetti(); } else { sfx("click"); }

    const rows = Object.keys(ctx.byUnit).map((uid) => {
      const u = unitById(subject, uid);
      const bu = ctx.byUnit[uid];
      return { name: u ? u.name : "Genel", p: Math.round((bu.c / bu.t) * 100), c: bu.c, t: bu.t };
    }).sort((a, b) => a.p - b.p);
    const breakdown = rows.map((r) =>
      `<div class="exam-unit ${r.p < 50 ? "weak" : ""}"><span>${r.name}</span><span>${r.c}/${r.t} • %${r.p}</span></div>`
    ).join("");

    const reviewHtml = ctx.review.length
      ? `<div class="review"><h3>📖 Tekrar et (${ctx.review.length})</h3>${ctx.review.map((r) => `<div class="review-item"><p class="rq">${r.q}</p><p class="ra">✅ ${r.a}</p><p class="re">${r.exp || ""}</p></div>`).join("")}</div>`
      : `<div class="review perfect"><h3>🎉 Tüm soruları doğru bildin!</h3></div>`;

    app.innerHTML = `
      <div class="fade result">
        <div class="result-emoji">${emoji}</div>
        <h2>${ctx.correct} / ${total} doğru</h2>
        <p class="result-msg">Doğru: ${ctx.correct} • Yanlış: ${ctx.wrong} • Boş: ${ctx.blank}</p>
        <div class="result-badges">
          <span class="badge">+${score} XP</span>
          ${rec && ctx.correct > 0 ? '<span class="badge gold">🏅 Yeni rekor!</span>' : ""}
        </div>
        <div class="exam-report"><h3>📊 Konu bazlı sonuç</h3>${breakdown || "<p>—</p>"}</div>
        ${reviewHtml}
        <div class="result-actions">
          <button class="btn primary" id="btnAgain">🔄 Yeni Deneme</button>
          <button class="btn" id="btnHome">📚 ${SUBJECTS[subject].name}</button>
        </div>
      </div>`;
    $("#btnAgain").addEventListener("click", () => { sfx("click"); startExam(subject); });
    $("#btnHome").addEventListener("click", () => { sfx("click"); renderUnits(subject); });
    renderSoundBtn();
    window.scrollTo(0, 0);
  }

  show();
}

/* =====================================================
   SES DÜĞMESİ
   ===================================================== */
function renderSoundBtn() {
  let b = $("#soundBtn");
  if (!b) {
    b = document.createElement("button");
    b.id = "soundBtn";
    b.title = "Sesi aç/kapat";
    document.body.appendChild(b);
    b.addEventListener("click", () => {
      save.sound = !save.sound;
      persist();
      b.textContent = save.sound ? "🔊" : "🔇";
      sfx("click");
    });
  }
  b.textContent = save.sound ? "🔊" : "🔇";
}

/* ---------- PWA service worker kaydı (sadece http/https'te) ---------- */
if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
  window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
}

/* ---------- başlat ---------- */
renderHome();
