# CLAUDE.md

Bu dosya, bu depoda çalışan Claude Code (veya başka bir AI asistanı) için rehberdir.

## Proje nedir

**KPSS Arena** — KPSS sınavına hazırlananlar için **Tarih, Coğrafya, Vatandaşlık (Genel Kültür) ve Matematik** derslerini tek çatı altında toplayan, tamamen çevrimdışı çalışan interaktif eğitici oyun platformu. Kullanıcı ana sayfadan dersi seçer, derse özel oyunlar listelenir, oynayarak öğrenir.

> **Matematik dersi diğerlerinden farklıdır:** Konu anlatımı/problem çözümü değil, soruları çözerken hız kazandıran **ezber ve pratik** bilgileridir (çarpım tablosu, kareler, küpler, üsler, faktöriyeller, asal sayılar, karekök tahmini, bölünebilme kuralları, yüzde-kesir-ondalık dönüşümleri, devirli kesirler vb.). Yeni içerik eklerken bu "hızlı tekrar/flashcard" ruhunu koru — kısa, doğrudan "X = ?" tarzı sorular ve hatırlatıcı `cards` tercih edilir; uzun problem metinlerinden kaçın. **Bilinçli olarak sade tutulur:** `SUBJECTS.matematik.games = ["cards", "quiz"]` — sadece kapsamlı "Önce Öğren" başvuru kartları ve karışık quiz (ünite içinde, "Tüm Matematik Oyunları" ve "Deneme Sınavı" ile karışık test). tf/match/memory/box/groups gibi diğer oyun türleri bu derste YOK; yeni matematik içeriği eklerken bunları geri getirme.

- **Yapı:** Bağımlılığı olmayan saf **vanilla JS + HTML + CSS**. Build adımı, framework, paket yöneticisi YOK.
- **Çalıştırma:** [index.html](index.html) dosyasını bir tarayıcıda açmak yeterli (çift tıkla). Sunucu gerekmez; tüm script'ler `file://` üzerinden `<script>` etiketleriyle yüklenir. **PWA olarak da kurulabilir** (HTTPS'te; bkz. PWA bölümü).
- **Dil:** Tüm içerik ve arayüz **Türkçe**. Kod yorumları da Türkçe.
- **Kalıcılık:** İlerleme (XP, rekorlar, ses tercihi, **ünite ustalığı**, test seti başarıları) `localStorage` anahtarı `kpssArenaV1` altında saklanır (ünite ustalığı `save.prog`, dilimlenmiş test başarıları `save.tests` altındadır).

### Mimari durum (ünite + seviye geçişi)

Genel Kültür dersleri (Tarih, Coğrafya, Vatandaşlık) **ünite (konu) + zorluk seviyesi** yapısına geçti (geçiş tamamlandı):

- **Tarih:** ✅ 12 ünite. **Coğrafya:** ✅ 9 ünite. **Vatandaşlık:** ✅ 9 ünite.
- Her ünite 3 seviyede (1 Temel / 2 Pekiştirme / 3 Sınav), öncül (I-II-III) soruları, gruplara ayırma ve deneme sınavı dâhil. Her ünite/seviyede en az bir oynanabilir oyun bulunur (ölü tier yok).
- **Geriye uyumluluk hâlâ korunuyor:** `data/units.js`'te bir dersin ünite listesi boşaltılırsa o ders otomatik olarak eski **düz oyun listesi** akışına (`renderFlatSubject`) düşer. Etiketsiz öğeler `unit:"genel"`, `level:2` sayılır.

**Matematik:** ✅ 2 ünite (`uslu-koklu`, `kesir-yuzde-ondalik`), aynı ünite+seviye yapısını kullanır ama **konu** değil **ezber/hız pratiği** içerir ve oyun seti bilinçli olarak `cards` + `quiz` ile sınırlıdır (bkz. yukarıdaki not).

## Dosya yapısı

```
index.html              # Giriş; script'leri sırayla yükler (önce units+data, sonra app.js) + PWA meta
css/style.css           # Tüm stiller; ders bazlı vurgu renkleri data-accent ile
js/app.js               # Tüm oyun motoru + arayüz render mantığı (tek dosya)
data/units.js           # ÜNİTE kayıtları: window.KPSS_DATA._units[ders] = [{id,name,icon,desc}]
data/tarih.js           # Tarih içeriği (üniteye+seviyeye göre etiketli)
data/cografya.js        # Coğrafya içeriği (nüfus = TÜİK 2025) — üniteye+seviyeye etiketli
data/vatandaslik.js     # Vatandaşlık içeriği (1982 Anayasası, 2017) — üniteye+seviyeye etiketli
data/matematik.js       # Matematik ezber/pratik içeriği (kareler, küpler, yüzde-kesir-ondalik vb.) — üniteye+seviyeye etiketli
manifest.webmanifest    # PWA manifesti (ad, ikonlar, standalone)
sw.js                   # Service worker (cache-first, çevrimdışı). CACHE sürümünü bump et!
icons/icon-192.png      # PWA ikonları (tools/gen-icons.js ile üretildi)
icons/icon-512.png
tools/gen-icons.js      # TEK SEFERLİK ikon üretici (yalnızca Node zlib; tarayıcıya gitmez)
test-data.js            # Node ile çalışan veri bütünlüğü testi (tarayıcıda kullanılmaz)
```

`data/*.js` dosyaları global `window.KPSS_DATA` nesnesini doldurur:
`window.KPSS_DATA.tarih`, `.cografya`, `.vatandaslik`, `.matematik` (içerik) ve `._units` (ünite kayıtları).
app.js bu global'i `KPSS_DATA` / `UNITS` olarak okur. **index.html'de `data/units.js` diğer data dosyalarıyla app.js arasında yüklenir.**

## Oyunlar ve hangi veri alanını kullandıkları

app.js içindeki `GAMES` sözlüğü her oyunu, `SUBJECTS` sözlüğü her dersin hangi oyunları gösterdiğini tanımlar.

| Oyun (id)   | Kullandığı veri alanı | Hangi derslerde | Seviyeli? | Açıklama |
|-------------|----------------------|-----------------|-----------|----------|
| `quiz`      | `quiz[]`             | Hepsi           | evet | 10 soruluk klasik bilgi yarışması, açıklamalı |
| `oncul`     | `oncul[]`            | Hepsi           | evet | **Öncül Avı (I-II-III)** — KPSS klasik formatı; şıklar motorda üretilir |
| `enler`     | `enler[]`            | Coğrafya        | evet | "Türkiye'nin En'leri" — quiz motorunu kullanır |
| `tf`        | `tf[]`               | Hepsi           | evet | Doğru/Yanlış hız turu |
| `whack`     | `quiz[]` (paylaşır)  | Hepsi           | evet | **Köstebek Avı** — süreli; doğru cevap köstebeğine vur |
| `box`       | `quiz[]` (paylaşır)  | Hepsi           | evet | **Kutuyu Aç** — kutu seç, içinden quiz sorusu çıkar |
| `match`     | `match[]`            | Hepsi           | hayır | Eşleştirme (2 tur) |
| `memory`    | `match[]` (paylaşır) | Hepsi           | hayır | **Hafıza Kartları** — kartları çevir, çiftleri bul |
| `groups`    | `groups[]`           | Hepsi           | hayır | **Gruplara Ayır** — öğeyi seç, doğru kategoriye yerleştir |
| `timeline`  | `timeline[]`         | Tarih           | hayır | Olayları kronolojik sıralama |
| `clues`     | `clues[]`            | Hepsi           | evet | İpucu Avı — az ipucu = çok puan |
| `map`       | `map[]`              | Coğrafya        | hayır | Şematik harita üzerinde bölge bulma |
| `numbers`   | `numbers[]`          | Vatandaşlık     | evet | Sayı Avcısı (anayasal sayılar) |
| `cards`     | `cards[]`            | Hepsi           | hayır (ünite) | Bilgi kartları ("Önce Öğren", puansız) |

> **Veri alanı paylaşımı:** `whack`/`box` `quiz[]` alanını, `memory` `match[]` alanını kullanır (yeni içerik gerekmez). `GAME_FIELD` bu eşlemeyi tutar. Düz/karışık listede içeriği olmayan oyun `gameHasAnyData` ile gizlenir.

Ayrıca oyun olmayan bir **mod** var: **Deneme Sınavı (`exam`)** — ders genelinden quiz+öncül karışık, süreli, ~20 soru; sonunda ünite bazlı rapor verir. `runExam`/`startExam`.

- "Seviyeli" oyunlar `{unit, level}` ile, seviyesizler yalnızca `{unit}` ile filtrelenir (bkz. `LEVELED`, `getItems`).
- Bir oyunun bir ünite/seviyede görünmesi için asgari öğe sayısı: app.js `GAME_MIN`.
- Bir derse oyun ekleme/çıkarma: `SUBJECTS[ders].games` dizisini düzenle.

## Veri formatları (şıklar app.js'de karıştırılır — sıralama önemsiz)

**Ünite yapısına geçmiş derslerde (Tarih) her öğe ayrıca `unit` ve seviyeli oyunlarda `level` taşır:**
`unit` = `data/units.js`'teki bir id; `level` = `1` Temel / `2` Pekiştirme / `3` Sınav. Etiketsiz öğeler `unit:"genel"`, `level:2` sayılır (Coğrafya/Vatandaşlık böyle çalışır).

```js
// quiz / enler:  a = doğru şıkkın o[] içindeki indeksi
{ q: "Soru?", o: ["A","B","C","D"], a: 0, exp: "Açıklama (zorunlu).", unit: "osmanli-kurulus", level: 2 }

// oncul:  correct = items[] içinde DOĞRU olan öncüllerin indeksleri (en az 1 yanlış öncül şart!)
//         "Yalnız I / I ve II / I, II ve III" şıkları motorda üretilir.
{ q: "... ile ilgili;", items: ["öncül I","öncül II","öncül III"], correct: [0,1], exp: "...", unit: "...", level: 3 }

// tf:  t = ifadenin doğru olup olmadığı
{ s: "İfade.", t: true, exp: "Açıklama.", unit: "...", level: 1 }

// match:  her tur bir başlık + çiftler; sol ve sağ değerler tur içinde benzersiz olmalı
// (memory/Hafıza Kartları da bu alanı kullanır)
{ title: "Başlık", pairs: [ ["sol","sağ"], ... ], unit: "..." }

// groups:  2-4 grup; her öğe t (metin) + g (grup indeksi); her grupta en az 1 öğe, en az 4 öğe
{ title: "Başlık", groups: ["Kat A","Kat B"], items: [ {t:"öğe", g:0}, ... ], exp: "...", unit: "..." }

// timeline:  y = sıralama için sayısal yıl (MÖ negatif); label = ekranda görünen
{ e: "Olay", y: 1453, label: "1453", exp: "Açıklama." }

// clues:  answer mutlaka options içinde olmalı; tam 4 şık, tam 3 ipucu
{ answer: "Cevap", options: ["...x4"], clues: ["ipucu1","ipucu2","ipucu3"], exp: "..." }

// map:  r = bölge id'si (app.js REGIONS anahtarlarından biri)
{ c: "İpucu metni", r: "karadeniz", exp: "Açıklama." }
// Geçerli bölge id'leri: marmara, ege, akdeniz, karadeniz, ic, dogu, gdogu

// numbers:  n = doğru sayı (string); n mutlaka opts içinde olmalı; 4 şık
{ f: "Soru/olgu", n: "600", opts: ["600","550","500","450"], exp: "..." }

// cards:  çalışma kartı, puan yok
{ front: "Ön yüz (başlık)", back: "Arka yüz (detay)" }
```

## İçerik ekleme/düzenleme iş akışı

1. İlgili `data/*.js` dosyasına yukarıdaki formata uygun yeni öğe(ler) ekle.
2. **Mutlaka testi çalıştır:** `node test-data.js`
   - Her öğenin alanlarının dolu olduğunu, cevabın şıklarda bulunduğunu, şıkların tekrarsız olduğunu, eşleştirme/timeline'da belirsizlik olmadığını kontrol eder.
   - Çıktının sonunda her dersin öğe sayıları ve "✓ Tüm veri bütünlüğü testleri geçti." görünmeli.
3. JS söz dizimini kontrol et: `node --check js/app.js` (ve düzenlediğin data dosyası için de).
4. Tarayıcıda [index.html](index.html) açıp dersi/oyunu elle dene.

## İÇERİK DOĞRULUĞU — EN ÖNEMLİ KURAL

Bu uygulamanın amacı sınava hazırlanan birinin **doğru** öğrenmesidir. Yanlış bir bilgi, kullanıcının konuyu yanlış ezberlemesine yol açar. Bu yüzden:

- **Asla bilgiyi "hatırladığından" emin olmadan ekleme.** Tarih/anayasa/istatistik gibi kesin bilgilerde şüphe varsa **WebSearch ile doğrula**, sonra ekle.
- **Her soruya açıklama (`exp`) yaz** — kullanıcı doğru bilse de o açıklamayı okuyarak öğrenir; yanlışlar oyun sonunda açıklamalarıyla tekrar gösterilir.
- **Yıla bağlı/değişebilen veriler** (nüfus, baraj oranı vb.) için kaynak yılını sorunun veya açıklamanın içine yaz.

### Bu projede kullanılan güncel veri çıpaları (değiştirmeden önce doğrula)

- **Anayasa:** Yürürlükte olan **1982 Anayasası**. En kapsamlı değişiklik **2017 referandumu** (Cumhurbaşkanlığı Hükûmet Sistemi). 2017'de YENİ anayasa yapılmadı, mevcut anayasa değiştirildi. Vatandaşlık içeriği tamamen bu sisteme göre yazıldı (Başbakanlık kaldırıldı, TBMM 600 vekil, seçilme yaşı 18, AYM 15 üye, vb.).
- **Seçim barajı:** **%7** (Nisan 2022 kanun değişikliği; önceden %10'du).
- **Nüfus (TÜİK 2025 yıl sonu, Şubat 2026'da açıklandı):** Türkiye **86.092.168**. En kalabalık il İstanbul (~15,75 milyon), en az nüfuslu il **Bayburt** (~83 bin).

Bu değerleri güncellerken hem `data/cografya.js`/`data/vatandaslik.js` içindeki ilgili sorularını hem de [index.html](index.html) ana sayfa footer'ındaki ve `SUBJECTS[...].info` alanındaki metinleri güncellemeyi unutma.

## app.js mimari notları

- Tek sayfalık uygulama; ekranlar `app.innerHTML` ile değiştirilir.
- **Akış (Ünite yapısı - tüm dersler):** `renderHome()` → `renderSubject(key)` → `renderUnits(key)` (ünite haritası + Karışık + Deneme) → `renderUnit(subject, unitId, level)` (seviye sekmeleri + "Önce Öğren" + oyunlar) → `onGameSelect(...)` (soru havuzu >= 15 ise `renderTestSelection(...)` ile test seçimi açılır, yoksa doğrudan başlar) → `startGame(subject, gameId, opts)` → `run*()` → `finishGame(ctx)`.
- **Dilimleme ve Test Başarıları:** `getGameQuestions(pool, defaultSize, opts)` yardımıyla büyük soru havuzları Test 1, Test 2 şeklinde dilimlenir. Testlerdeki en yüksek başarılar `save.tests[ders][ünite][seviye/genel][oyun][testIndex] = { score, max }` olarak kaydedilir.
- **Filtreleme:** Tüm `run*` fonksiyonları havuzu doğrudan `KPSS_DATA`'dan değil `getItems(subject, field, opts)`'tan alır. `opts={unit,level}` (seviyeli) veya `{unit}` (seviyesiz). Eşleşme yoksa tüm havuza düşer (etiketsiz dersler bozulmaz).
- **Ustalık/kilit:** `save.prog[ders][ünite][seviye] = en iyi yüzde`. Seviye 1 hep açık; bir üst seviye, alttaki seviyede **%60** başarınca açılır (`levelUnlocked`). Ünite kartındaki yüzde `unitMastery`'den gelir. `finishGame` yalnızca seviyeli oyunlarda `recordProg` çağırır.
- **Bağlam:** `current = {subject, game, opts}`. Geri dönüşler `backToContext()` ile (üniteden geldiyse üniteye, yoksa ders sayfasına).
- Öncül motoru: `buildComboOptions/comboLabel/sameSet/allSubsets` ile şıklar üretilir; `correct` doğruluk dizisinden "Yalnız I / I ve II / ..." şıkları oluşturulur (doğru şık her zaman dâhildir).
- Her oyun fonksiyonu bir `ctx = { score, max, review: [] }` tutar; `review`, yanlış yapılan öğeleri `{q, a, exp}` olarak biriktirir ve sonuç ekranında "tekrar et" listesini besler.
- `gameFrame(title, hud)` ortak üst bar + ilerleme çubuğu + `#stage` döndürür.
- Puanlama: çoğu oyunda doğru = +10, `max` = öğe sayısı × 10. `clues` kademeli (30/20/10). `match` yanlışta -2.
- Zamanlayıcılar `addTimer()` ile kaydedilir, ekran değişiminde `stopTimers()` ile temizlenir — yeni `setInterval`/`setTimeout` eklerken bunu kullan (sızıntı/çift tetikleme önlemi).
- Ses: Web Audio API ile sentezlenir (ses dosyası yok), `sfx(kind)` ile çağrılır, `save.sound` ile kapatılabilir.
- Tema: `document.body.dataset.accent` derse göre CSS değişkeni (`--accent`) değiştirir. tarih=sarı, cografya=yeşil, vatandaslik=kırmızı, matematik=mavi.
- Harita: `REGIONS` nesnesinde her bölgenin şematik SVG `path` verisi ve etiket konumu var. Harita bilinçli olarak **şematik/temsilî** — gerçek sınır çizmeye çalışıp yanlış öğretmekten kaçınıldı (haritada da bu not yazılı).

## PWA ve yayın (Netlify)

- **PWA:** `manifest.webmanifest` + `sw.js` (cache-first) + `icons/`. app.js sonunda SW yalnızca `http(s)`'te kaydedilir (`file://` çift-tıkla açılışta hata vermez). **İçerik güncelleyince `sw.js`'teki `CACHE` sürümünü artır** (örn. `kpss-arena-v1` → `v2`), yoksa kullanıcılar eski önbelleği görür.
- **İkonlar:** `node tools/gen-icons.js` ile yeniden üretilir (yalnızca Node `zlib`; tarayıcıya hiçbir şey eklemez). Renk/şekil değişikliği bu betikte.
- **Yayın:** Statik site; build yok. Netlify → "Add new site" → "Deploy manually" → proje klasörünü sürükle-bırak. Güncellemede klasörü tekrar sürükle-bırak. Telefonda Chrome/Safari → "Ana ekrana ekle" ile kurulur, çevrimdışı çalışır.

## Komutlar

```bash
node test-data.js          # Veri bütünlüğü + ünite×seviye dağılım testi (içerik değiştirince ZORUNLU)
node --check js/app.js      # JS söz dizimi kontrolü (data/*.js için de çalıştır)
node tools/gen-icons.js     # PWA ikonlarını yeniden üret (yalnızca tasarım değişince)
# Çalıştırmak için: index.html'i tarayıcıda aç (build/sunucu gerekmez)
```

## Yapılırken kaçınılacaklar

- Build aracı, npm bağımlılığı, framework EKLEME — proje bilinçli olarak sıfır bağımlılıklı ve çevrimdışı.
- `data/*.js` dosyalarının `window.KPSS_DATA = window.KPSS_DATA || {};` ile başlama desenini bozma.
- index.html'deki script yükleme sırasını bozma (data dosyaları app.js'den ÖNCE gelmeli).
- Doğruluğundan emin olmadığın bilgiyi açıklamasız veya doğrulamasız ekleme.
