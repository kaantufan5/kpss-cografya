// KPSS Arena - MATEMATİK veri dosyası
// Bu ders, KPSS Genel Yetenek matematik sorularını çözerken HIZ kazandıran
// "ezber" bilgileri (çarpım tablosu, kareler, küpler, üsler, faktöriyeller,
// asal sayılar, karekök tahmini, bölünebilme kuralları, yüzde-kesir-ondalık
// dönüşümleri ve devirli kesirler) için kapsamlı başvuru kartlarından (cards)
// ve karışık testte (quiz → Deneme Sınavı / Tüm Oyunlar) kullanılan sorulardan
// oluşur. Konu anlatımı değil, hız ve ezber pratiğidir.
// Ünite + zorluk seviyesi yapısındadır (Tarih/Coğrafya/Vatandaşlık kalıbı).
window.KPSS_DATA = window.KPSS_DATA || {};

window.KPSS_DATA.matematik = {

  // ---------- BİLGİ KARTLARI (Önce Öğren) — kapsamlı hızlı başvuru ----------
  cards: [
    // === Üs, Kök ve Sayı Ezberleri ===
    { front: "Tam Kareler (1²-20²)", back: "1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100,\n11²=121, 12²=144, 13²=169, 14²=196, 15²=225, 16²=256, 17²=289, 18²=324, 19²=361, 20²=400.\n\nBu sayıları gördüğün an karekökünü tanımalısın — üslü/köklü ve çarpanlara ayırma sorularında sürekli karşına çıkarlar.", unit: "uslu-koklu" },
    { front: "Çarpım Tablosu (1-10)", back: "1: 1,2,3,4,5,6,7,8,9,10\n2: 2,4,6,8,10,12,14,16,18,20\n3: 3,6,9,12,15,18,21,24,27,30\n4: 4,8,12,16,20,24,28,32,36,40\n5: 5,10,15,20,25,30,35,40,45,50\n6: 6,12,18,24,30,36,42,48,54,60\n7: 7,14,21,28,35,42,49,56,63,70\n8: 8,16,24,32,40,48,56,64,72,80\n9: 9,18,27,36,45,54,63,72,81,90\n10: 10,20,30,40,50,60,70,80,90,100\n\nEn çok karışan çarpımlar: 6×7=42, 6×8=48, 7×8=56, 7×9=63, 8×8=64, 8×9=72, 9×9=81 — bunlara özellikle dikkat et.", unit: "uslu-koklu" },
    { front: "Küpler (1³-10³)", back: "1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512, 9³=729, 10³=1000.\n\nÖzellikle 8, 27, 64, 125, 216, 343, 512, 729 sayılarını gördüğünde 'bu bir tam küp olabilir' diye düşün.", unit: "uslu-koklu" },
    { front: "2'nin kuvvetleri", back: "2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024.\n\nÜslü sayılarda tabanı eşitleme (ortak tabana indirme) işlemlerinde en çok kullanılan seri budur.", unit: "uslu-koklu" },
    { front: "3'ün kuvvetleri", back: "3¹=3, 3²=9, 3³=27, 3⁴=81, 3⁵=243, 3⁶=729.\n\n81 ve 729 gibi sayılar hem 3'ün hem başka tabanların kuvveti olabilir (729=3⁶=9³) — dikkatli ol.", unit: "uslu-koklu" },
    { front: "5'in kuvvetleri", back: "5¹=5, 5²=25, 5³=125, 5⁴=625, 5⁵=3125.\n\n2ⁿ×5ⁿ=10ⁿ olduğundan (örn. 2³×5³=10³=1000), 5'in kuvvetlerini bilmek ondalık ve yüzde dönüşümlerinde, çarpanlara ayırmada işe yarar.", unit: "uslu-koklu" },
    { front: "Faktöriyel değerleri (0!-10!)", back: "0!=1 (en çok unutulan tuzak!), 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720, 7!=5040, 8!=40320, 9!=362880, 10!=3628800.\n\nFaktöriyel soruları genelde ilk 6-7 değerle sınırlıdır; ama 8!-10! de büyük sayılarla işlem sorularında karşına çıkabilir. Her faktöriyel kendinden öncekinin (n-1)! ile n'in çarpımıdır: n!=n×(n-1)!.", unit: "uslu-koklu" },
    { front: "0-100 arası asal sayılar (25 tane)", back: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.\n\n1 asal sayı DEĞİLDİR (asal sayı, 1'den büyük ve sadece 1'e ve kendisine bölünebilen sayıdır). 2, asal sayılar arasındaki TEK çift sayıdır. Bir sayının asal olup olmadığını kontrol etmek için karekökünden küçük asal sayılara (2, 3, 5, 7, ...) bölünüp bölünmediğine bak.", unit: "uslu-koklu" },
    { front: "Asal sanılan ama asal OLMAYAN sayılar", back: "51=3×17, 91=7×13, 119=7×17, 133=7×19, 161=7×23, 187=11×17, 221=13×17.\n\nÖSYM 'hangisi asaldır' tarzı sorularda bu sayıları şıklara koymayı sever. Bir sayının asal olup olmadığını anlamak için 7, 11, 13, 17, 19, 23 ile bölünebilirliğini kontrol et.", unit: "uslu-koklu" },
    { front: "Sonu 5 ile biten sayının karesi — hızlı yöntem", back: "Sayı _5 biçimindeyse: kare daima ...25 ile biter. Baştaki rakamı, kendisinin 1 fazlasıyla çarp ve başına yaz.\n\nÖrnek 35²: 3×4=12 → 1225.\nÖrnek 65²: 6×7=42 → 4225.\nÖrnek 85²: 8×9=72 → 7225.", unit: "uslu-koklu" },
    { front: "Karekök Tahmini (tam kare olmayan sayılar)", back: "Sayı tam kare değilse, en yakın iki tam kare arasına sıkıştır.\n\n√50 → 49(=7²) ile 64(=8²) arasında, 7'ye yakın (≈7,07).\n√70 → 64(=8²) ile 81(=9²) arasında (≈8,37).\n√90 → 81(=9²) ile 100(=10²) arasında (≈9,49).\n\nSık kullanılan yaklaşık değerler: √2≈1,41  √3≈1,73  √5≈2,24  √10≈3,16.", unit: "uslu-koklu" },
    { front: "Bölünebilme Kuralları (2-11)", back: "2: son rakam çift (0,2,4,6,8).\n3: rakamlar toplamı 3'ün katı.\n4: son iki basamak 4'e bölünüyor.\n5: son rakam 0 veya 5.\n6: hem 2 hem 3'e bölünüyor.\n8: son üç basamak 8'e bölünüyor.\n9: rakamlar toplamı 9'un katı.\n10: son rakam 0.\n11: rakamlara sağdan başlayarak sırayla +,-,+,- işareti verilip toplam 0 veya 11'in katı.\n\nÖrnek 2024: rakam toplamı 8 (3'e ve 9'a bölünmez); son iki basamak 24, 4'e bölünür (2024÷4=506); 2-0+2-4=0 → 11'e de bölünür.", unit: "uslu-koklu" },

    // === Kesir, Yüzde ve Ondalık Pratiği ===
    { front: "Yüzde → Kesir hızlı tablo", back: "%10=1/10, %20=1/5, %25=1/4, %30=3/10, %40=2/5, %50=1/2, %60=3/5, %70=7/10, %75=3/4, %80=4/5, %90=9/10, %5=1/20, %12,5=1/8.\n\nBir soruda yüzde görünce direkt karşılığını yaz, uzun yüzde formülüyle uğraşma.", unit: "kesir-yuzde-ondalik" },
    { front: "Ondalık → Kesir hızlı tablo", back: "0,1=1/10, 0,2=1/5, 0,25=1/4, 0,4=2/5, 0,5=1/2, 0,6=3/5, 0,75=3/4, 0,8=4/5, 0,125=1/8, 0,375=3/8, 0,625=5/8, 0,875=7/8.\n\n0,125 özellikle önemli: 1/8=2⁻³ demektir, üslü sayı sorularında karşına çıkabilir.", unit: "kesir-yuzde-ondalik" },
    { front: "1/3, 1/6, 1/7, 1/9 gibi devirli kesirler", back: "1/3=0,(3)≈%33,3 — 2/3=0,(6)≈%66,7.\n1/6=0,1(6)≈%16,7 — 5/6=0,8(3)≈%83,3.\n1/9=0,(1) — 2/9=0,(2) ... 8/9=0,(8): hep TEK rakamın tekrarı.\n1/7=0,(142857): bu 6 basamaklı blok 1/7'den 6/7'ye kadar hep aynı sırayla döner.\n\nKPSS'te bu kesirler genelde '≈' (yaklaşık) işaretiyle veya en yakın yüzdeye yuvarlanarak sorulur.", unit: "kesir-yuzde-ondalik" },
    { front: "Hız Hilesi: 'Bir sayının %X'i'", back: "Yüzdeyi direkt kesre çevir, sonra paydaya böl payla çarp:\n\n%75'i istiyorsan → sayıyı 4'e böl, 3 ile çarp (3/4).\n%60'ı istiyorsan → 5'e böl, 3 ile çarp (3/5).\n%80'i istiyorsan → 5'e böl, 4 ile çarp (4/5).\n\nUzun yüzde çarpma/bölmesine hiç gerek kalmaz.", unit: "kesir-yuzde-ondalik" },
    { front: "Payda Çarpma Taktiği (Kesir Problemleri)", back: "Soruda geçen kesirlerin paydalarını çarp, çıkan sayıyı 'bütün' (x) kabul et.\n\nÖrnek: 'Bir kişinin parasının önce 1/3'ü, sonra kalanın 1/4'ü harcanıyor.'\nPaydalar 3 ve 4 → 3×4=12. Parayı 12x kabul et:\n12x'in 1/3'ü = 4x harcanır, kalan 8x.\n8x'in 1/4'ü = 2x harcanır, kalan 6x.\n\nKesirli sayılarla uğraşmadan tertemiz çözülür.", unit: "kesir-yuzde-ondalik" },
    { front: "Devirli Ondalık — '9 Hilesi'", back: "Devreden (üzerinde çizgi olan) rakam SADECE 9 ise, o sayı; 9'lar silinip kendinden önceki rakam 1 artırılarak bulunur.\n\n0,(9) = 1\n1,(9) = 2\n2,7(9) = 2,8\n3,4(9) = 3,5\n\nBu hile, devirli ondalık sorularında saniyeler içinde cevap verdirir.", unit: "kesir-yuzde-ondalik" }
  ],

  // ---------- BİLGİ YARIŞMASI (hız ve ezber soruları) ----------
  quiz: [
    // === Üs, Kök ve Sayı Ezberleri — Temel (L1) ===
    { q: "11² = ?", o: ["121", "112", "111", "21"], a: 0, exp: "11×11=121. 121 aynı zamanda 11'in karesi olduğu için 11'e tam bölünür (1-2+1=0).", unit: "uslu-koklu", level: 1 },
    { q: "12² = ?", o: ["144", "124", "142", "112"], a: 0, exp: "12×12=144. 144=2⁴×3² olarak da yazılabilir.", unit: "uslu-koklu", level: 1 },
    { q: "13² = ?", o: ["169", "163", "196", "139"], a: 0, exp: "13×13=169. Dikkat: 169 (13²) ile 196 (14²) sık karıştırılır.", unit: "uslu-koklu", level: 1 },
    { q: "14² = ?", o: ["196", "169", "146", "194"], a: 0, exp: "14×14=196. 196=2²×7²'dir.", unit: "uslu-koklu", level: 1 },
    { q: "15² = ?", o: ["225", "215", "235", "152"], a: 0, exp: "15×15=225. Sonu 5 ile biten sayıların karesi her zaman 25 ile biter: 1×2=2 → 225.", unit: "uslu-koklu", level: 1 },
    { q: "2³ = ?", o: ["8", "6", "9", "16"], a: 0, exp: "2³=2×2×2=8. 2⁴=16 ile karıştırma; üslü sayıda taban aynı kalır, çarpan sayısı üs kadardır.", unit: "uslu-koklu", level: 1 },
    { q: "3³ = ?", o: ["27", "9", "81", "18"], a: 0, exp: "3³=3×3×3=27. 3²=9 ve 3⁴=81 ile karıştırılmamalı.", unit: "uslu-koklu", level: 1 },
    { q: "4³ = ?", o: ["64", "48", "16", "12"], a: 0, exp: "4³=4×4×4=64. Ayrıca 64=2⁶'dır; hem 4'ün küpü hem 2'nin 6. kuvvetidir.", unit: "uslu-koklu", level: 1 },
    { q: "5³ = ?", o: ["125", "100", "115", "225"], a: 0, exp: "5³=5×5×5=125. 125 sayısı küp kök sorularında en sık çıkan sayılardan biridir.", unit: "uslu-koklu", level: 1 },
    { q: "0! (sıfır faktöriyel) = ?", o: ["1", "0", "Faktöriyeli yoktur", "-1"], a: 0, exp: "Tanım gereği 0!=1'dir. Bu, KPSS'te en çok unutulan/yanlış bilinen tuzaktır.", unit: "uslu-koklu", level: 1 },
    { q: "3! = ?", o: ["6", "3", "9", "1"], a: 0, exp: "3!=3×2×1=6.", unit: "uslu-koklu", level: 1 },
    { q: "2⁴ = ?", o: ["16", "8", "32", "12"], a: 0, exp: "2⁴=2×2×2×2=16. 2'nin kuvvetleri serisi: 2,4,8,16,32,64... şeklinde her adımda ikiye katlanır.", unit: "uslu-koklu", level: 1 },
    { q: "2⁵ = ?", o: ["32", "16", "64", "25"], a: 0, exp: "2⁵=2×2×2×2×2=32.", unit: "uslu-koklu", level: 1 },

    // === Üs, Kök ve Sayı Ezberleri — Pekiştirme (L2) ===
    { q: "16² = ?", o: ["256", "266", "246", "156"], a: 0, exp: "16×16=256. Ayrıca 256=2⁸'dir — hem tam kare hem 2'nin kuvvetidir.", unit: "uslu-koklu", level: 2 },
    { q: "17² = ?", o: ["289", "287", "279", "178"], a: 0, exp: "17×17=289.", unit: "uslu-koklu", level: 2 },
    { q: "18² = ?", o: ["324", "318", "342", "184"], a: 0, exp: "18×18=324. 324'ü 343 (=7³) ile karıştırma, ikisi farklı sayılardır.", unit: "uslu-koklu", level: 2 },
    { q: "19² = ?", o: ["361", "369", "316", "196"], a: 0, exp: "19×19=361. 196 (=14²) ile karıştırılmamalı.", unit: "uslu-koklu", level: 2 },
    { q: "20² = ?", o: ["400", "420", "402", "240"], a: 0, exp: "20×20=400. Kafadan: 2²×10²=4×100=400.", unit: "uslu-koklu", level: 2 },
    { q: "6³ = ?", o: ["216", "196", "226", "316"], a: 0, exp: "6³=6×6×6=216.", unit: "uslu-koklu", level: 2 },
    { q: "7³ = ?", o: ["343", "324", "347", "734"], a: 0, exp: "7³=7×7×7=343. 343 aynı zamanda 49×7'dir (49=7²).", unit: "uslu-koklu", level: 2 },
    { q: "8³ = ?", o: ["512", "256", "518", "521"], a: 0, exp: "8³=8×8×8=512. Ayrıca 8=2³ olduğundan 8³=2⁹=512'dir.", unit: "uslu-koklu", level: 2 },
    { q: "4! = ?", o: ["24", "12", "16", "20"], a: 0, exp: "4!=4×3×2×1=24.", unit: "uslu-koklu", level: 2 },
    { q: "5! = ?", o: ["120", "60", "100", "125"], a: 0, exp: "5!=5×4×3×2×1=120.", unit: "uslu-koklu", level: 2 },
    { q: "6! = ?", o: ["720", "700", "620", "120"], a: 0, exp: "6!=6×5!=6×120=720.", unit: "uslu-koklu", level: 2 },
    { q: "2⁸ = ?", o: ["256", "128", "512", "246"], a: 0, exp: "2⁸=2⁴×2⁴=16×16=256.", unit: "uslu-koklu", level: 2 },
    { q: "2¹⁰ = ?", o: ["1024", "1000", "2048", "512"], a: 0, exp: "2¹⁰=2⁵×2⁵=32×32=1024. Bilgisayar/bayt hesaplarında da temel birim olarak geçer (1 KB=1024 bayt).", unit: "uslu-koklu", level: 2 },
    { q: "3⁴ = ?", o: ["81", "27", "64", "243"], a: 0, exp: "3⁴=3³×3=27×3=81.", unit: "uslu-koklu", level: 2 },
    { q: "3⁵ = ?", o: ["243", "81", "729", "223"], a: 0, exp: "3⁵=3⁴×3=81×3=243.", unit: "uslu-koklu", level: 2 },
    { q: "51 sayısı için aşağıdakilerden hangisi doğrudur?", o: ["3×17 — asal değildir", "Asaldır, çarpanı yoktur", "7×13 — asal değildir", "2×25 — asal değildir"], a: 0, exp: "51=3×17'dir, bu yüzden asal DEĞİLDİR. 51'in rakamları toplamı 5+1=6, 3'e bölündüğü için 51 de 3'e bölünür.", unit: "uslu-koklu", level: 2 },
    { q: "91 sayısı asal mıdır?", o: ["Hayır, 91=7×13", "Evet, asaldır", "Hayır, 91=3×17", "Hayır, 91=11×9"], a: 0, exp: "91=7×13'tür, asal değildir. 91, ÖSYM'nin en sevdiği 'yalancı asal' sayılardan biridir — asal gibi görünür ama 7'ye tam bölünür.", unit: "uslu-koklu", level: 2 },
    { q: "25² = ?", o: ["625", "525", "225", "652"], a: 0, exp: "Sonu 5 ile biten sayının karesi hilesi: 2×3=6, sonuna 25 ekle → 625.", unit: "uslu-koklu", level: 2 },
    { q: "35² = ?", o: ["1225", "1325", "3025", "1235"], a: 0, exp: "Sonu 5 ile biten sayının karesi hilesi: 3×4=12, sonuna 25 ekle → 1225.", unit: "uslu-koklu", level: 2 },

    // === Üs, Kök ve Sayı Ezberleri — Sınav (L3) ===
    { q: "9³ = ?", o: ["729", "81", "927", "792"], a: 0, exp: "9³=9×9×9=729. Ayrıca 9=3² olduğundan 9³=3⁶=729'dur — aynı sonucu iki farklı üslü ifadeyle yazabilirsin.", unit: "uslu-koklu", level: 3 },
    { q: "10³ = ?", o: ["1000", "100", "10000", "999"], a: 0, exp: "10³=10×10×10=1000.", unit: "uslu-koklu", level: 3 },
    { q: "7! = ?", o: ["5040", "4900", "5050", "720"], a: 0, exp: "7!=7×6!=7×720=5040.", unit: "uslu-koklu", level: 3 },
    { q: "2⁹ = ?", o: ["512", "256", "1024", "492"], a: 0, exp: "2⁹=2⁸×2=256×2=512. Ayrıca 8³=2⁹=512 ile aynı sonuçtur.", unit: "uslu-koklu", level: 3 },
    { q: "3⁶ = ?", o: ["729", "243", "2187", "679"], a: 0, exp: "3⁶=3⁵×3=243×3=729. Dikkat: 729 hem 3⁶ hem de 9³'tür.", unit: "uslu-koklu", level: 3 },
    { q: "45² = ?", o: ["2025", "2045", "2125", "4225"], a: 0, exp: "Sonu 5 ile biten sayının karesi hilesi: 4×5=20, sonuna 25 ekle → 2025.", unit: "uslu-koklu", level: 3 },
    { q: "65² = ?", o: ["4225", "4025", "6225", "4255"], a: 0, exp: "Sonu 5 ile biten sayının karesi hilesi: 6×7=42, sonuna 25 ekle → 4225.", unit: "uslu-koklu", level: 3 },
    { q: "85² = ?", o: ["7225", "8225", "7025", "8525"], a: 0, exp: "Sonu 5 ile biten sayının karesi hilesi: 8×9=72, sonuna 25 ekle → 7225.", unit: "uslu-koklu", level: 3 },
    { q: "119 sayısı hangi iki asal çarpanın çarpımıdır?", o: ["7×17", "11×13", "3×39", "13×9"], a: 0, exp: "119=7×17'dir (119÷7=17). Bu yüzden 119 asal değildir.", unit: "uslu-koklu", level: 3 },
    { q: "187 sayısı asal mıdır?", o: ["Hayır, 187=11×17", "Evet, asaldır", "Hayır, 187=13×17", "Hayır, 187=7×27"], a: 0, exp: "187=11×17'dir, asal değildir. 11 ile bölünebilme kuralı: 7-8+1=0, 11'in katı olduğundan 187 de 11'e bölünür.", unit: "uslu-koklu", level: 3 },
    { q: "161 sayısı aşağıdaki asal sayılardan hangisine tam bölünür?", o: ["7", "11", "13", "17"], a: 0, exp: "161=7×23'tür, dolayısıyla 161÷7=23. 161 de bir 'yalancı asal' tuzağıdır.", unit: "uslu-koklu", level: 3 },
    { q: "144 sayısının karekökü kaçtır?", o: ["12", "14", "16", "11"], a: 0, exp: "12²=144 olduğundan √144=12'dir.", unit: "uslu-koklu", level: 3 },
    { q: "169 sayısının karekökü kaçtır?", o: ["13", "14", "12", "19"], a: 0, exp: "13²=169 olduğundan √169=13'tür.", unit: "uslu-koklu", level: 3 },
    { q: "256 sayısı, 2'nin kaçıncı kuvvetidir?", o: ["8", "9", "6", "16"], a: 0, exp: "2⁸=256'dır. Ayrıca 256=16²=4⁴'tür — birden çok şekilde yazılabilen 'çok yönlü' bir sayıdır.", unit: "uslu-koklu", level: 3 },
    { q: "2024 sayısı 4'e tam bölünür mü?", o: ["Evet, çünkü son iki basamak (24) 4'e bölünür", "Hayır, 4'e bölünmez", "Evet ama yalnızca 2'ye bölünür", "Hayır, çünkü rakamlar toplamı 4 değildir"], a: 0, exp: "4 ile bölünebilme kuralında sadece son iki basamağa bakılır. 24÷4=6 olduğundan 2024 de 4'e tam bölünür (2024÷4=506).", unit: "uslu-koklu", level: 3 },

    // === Kesir, Yüzde ve Ondalık Pratiği — Temel (L1) ===
    { q: "%10'un kesir karşılığı nedir?", o: ["1/10", "1/100", "1/5", "1/4"], a: 0, exp: "%10 = 10/100 = 1/10'dur.", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "%20'nin kesir karşılığı nedir?", o: ["1/5", "1/20", "1/4", "1/2"], a: 0, exp: "%20 = 20/100 = 1/5'tir.", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "%25'in kesir karşılığı nedir?", o: ["1/4", "1/5", "2/5", "1/3"], a: 0, exp: "%25 = 25/100 = 1/4'tür (çeyrek).", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "%50'nin kesir karşılığı nedir?", o: ["1/2", "1/4", "3/5", "2/5"], a: 0, exp: "%50 = 50/100 = 1/2'dir (yarısı).", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "%75'in kesir karşılığı nedir?", o: ["3/4", "2/3", "4/5", "3/5"], a: 0, exp: "%75 = 75/100 = 3/4'tür (dörtte üç).", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "0,5 ondalık sayısının kesir karşılığı nedir?", o: ["1/2", "1/5", "2/5", "5/100"], a: 0, exp: "0,5 = 5/10 = 1/2'dir.", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "0,25 ondalık sayısının kesir karşılığı nedir?", o: ["1/4", "1/25", "1/5", "1/2"], a: 0, exp: "0,25 = 25/100 = 1/4'tür.", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "0,75 ondalık sayısının kesir karşılığı nedir?", o: ["3/4", "7/5", "1/75", "3/5"], a: 0, exp: "0,75 = 75/100 = 3/4'tür.", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "1/4 kesrinin yüzde karşılığı nedir?", o: ["%25", "%14", "%40", "%4"], a: 0, exp: "1/4 = 25/100 = %25'tir.", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "1/2 kesrinin ondalık karşılığı nedir?", o: ["0,5", "0,2", "0,12", "1,2"], a: 0, exp: "1/2 = 0,5'tir.", unit: "kesir-yuzde-ondalik", level: 1 },

    // === Kesir, Yüzde ve Ondalık Pratiği — Pekiştirme (L2) ===
    { q: "%40'ın kesir karşılığı nedir?", o: ["2/5", "1/4", "3/5", "4/5"], a: 0, exp: "%40 = 40/100 = 2/5'tir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "%60'ın kesir karşılığı nedir?", o: ["3/5", "2/3", "4/5", "6/5"], a: 0, exp: "%60 = 60/100 = 3/5'tir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "%80'in kesir karşılığı nedir?", o: ["4/5", "3/5", "5/4", "8/5"], a: 0, exp: "%80 = 80/100 = 4/5'tir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "%5'in kesir karşılığı nedir?", o: ["1/20", "1/5", "1/50", "5/10"], a: 0, exp: "%5 = 5/100 = 1/20'dir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "%30'un kesir karşılığı nedir?", o: ["3/10", "1/3", "3/100", "1/30"], a: 0, exp: "%30 = 30/100 = 3/10'dur.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "0,2 ondalık sayısının kesir karşılığı nedir?", o: ["1/5", "1/2", "2/5", "1/20"], a: 0, exp: "0,2 = 2/10 = 1/5'tir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "0,4 ondalık sayısının kesir karşılığı nedir?", o: ["2/5", "1/4", "3/5", "4/5"], a: 0, exp: "0,4 = 4/10 = 2/5'tir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "0,125 ondalık sayısının kesir karşılığı nedir?", o: ["1/8", "1/4", "1/16", "8/100"], a: 0, exp: "0,125 = 125/1000 = 1/8'dir. Bu sayı aynı zamanda 2⁻³'e eşittir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "0,375 ondalık sayısının kesir karşılığı nedir?", o: ["3/8", "3/5", "5/8", "3/4"], a: 0, exp: "0,375 = 375/1000 = 3/8'dir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "3/5 kesrinin yüzde karşılığı nedir?", o: ["%60", "%35", "%53", "%30"], a: 0, exp: "3/5 = 60/100 = %60'tır.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "1/8 kesrinin yüzde karşılığı nedir?", o: ["%12,5", "%18", "%8", "%80"], a: 0, exp: "1/8 = 0,125 = %12,5'tir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "4/5 kesrinin ondalık karşılığı nedir?", o: ["0,8", "0,4", "0,45", "0,54"], a: 0, exp: "4/5 = 8/10 = 0,8'dir.", unit: "kesir-yuzde-ondalik", level: 2 },

    // === Kesir, Yüzde ve Ondalık Pratiği — Sınav (L3) ===
    { q: "0,(9) (9 devirli) ondalık sayısı kaça eşittir?", o: ["1", "0,9", "0,99", "Hesaplanamaz"], a: 0, exp: "Devreden rakam sadece 9 olduğunda sayı, kendisinden 1 fazla olan tam sayıya eşittir: 0,(9)=1.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "2,(9) (9 devirli) kaça eşittir?", o: ["3", "2,9", "2,99", "29"], a: 0, exp: "Devreden rakam sadece 9 ise tam kısım 1 artar: 2,(9)=3.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "3,4(9) (sadece 9 devirli) kaça eşittir?", o: ["3,5", "3,4", "3,49", "4,9"], a: 0, exp: "Sadece son rakam (9) devirli olduğundan 9 silinir ve önceki rakam 1 artar: 4→5, yani 3,4(9)=3,5.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "0,625 ondalık sayısının kesir karşılığı nedir?", o: ["5/8", "3/8", "6/10", "5/10"], a: 0, exp: "0,625 = 625/1000 = 5/8'dir.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "0,875 ondalık sayısının kesir karşılığı nedir?", o: ["7/8", "8/7", "5/8", "3/8"], a: 0, exp: "0,875 = 875/1000 = 7/8'dir.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "7/8 kesrinin yüzde karşılığı nedir?", o: ["%87,5", "%78", "%875", "%7,8"], a: 0, exp: "7/8 = 0,875 = %87,5'tir.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "5/8 kesrinin yüzde karşılığı nedir?", o: ["%62,5", "%58", "%625", "%5,8"], a: 0, exp: "5/8 = 0,625 = %62,5'tir.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "'Bir kişinin parasının önce 1/3'ü, sonra kalanın 1/4'ü harcanıyor.' Payda çarpma taktiğine göre parayı kaça bölmek pratiktir?", o: ["12", "7", "3", "4"], a: 0, exp: "Paydalar 3 ve 4'tür; 3×4=12. Parayı 12x kabul edersen kesirlerle değil tam sayılarla işlem yaparsın.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "240 TL'nin %75'i kaç TL'dir? (hız hilesi: 4'e böl, 3 ile çarp)", o: ["180", "160", "200", "60"], a: 0, exp: "%75=3/4'tür. 240÷4=60, 60×3=180 TL.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "%12,5'in kesir karşılığı nedir?", o: ["1/8", "1/12", "8/100", "1/80"], a: 0, exp: "%12,5 = 12,5/100 = 1/8'dir.", unit: "kesir-yuzde-ondalik", level: 3 },

    // === Çarpım Tablosu, Asal Sayılar, Karekök — Temel (L1) ===
    { q: "6 × 7 = ?", o: ["42", "48", "36", "49"], a: 0, exp: "6×7=42. Çarpım tablosunda 6 ve 7 satırının kesiştiği değer.", unit: "uslu-koklu", level: 1 },
    { q: "8 × 9 = ?", o: ["72", "64", "81", "56"], a: 0, exp: "8×9=72. 64 (8×8), 81 (9×9) ve 56 (7×8) ile karıştırılmamalı.", unit: "uslu-koklu", level: 1 },
    { q: "6² = ?", o: ["36", "32", "42", "26"], a: 0, exp: "6×6=36.", unit: "uslu-koklu", level: 1 },
    { q: "7² = ?", o: ["49", "47", "56", "42"], a: 0, exp: "7×7=49. 56 (=7×8) ve 42 (=6×7) ile karıştırma.", unit: "uslu-koklu", level: 1 },
    { q: "9² = ?", o: ["81", "91", "72", "89"], a: 0, exp: "9×9=81.", unit: "uslu-koklu", level: 1 },
    { q: "1 sayısı için aşağıdakilerden hangisi doğrudur?", o: ["Asal sayı değildir", "En küçük asal sayıdır", "Asal sayıdır ama özeldir", "Çift sayıdır"], a: 0, exp: "Asal sayı tanımı '1'den büyük ve sadece 1'e ve kendisine bölünebilen sayı'dır. 1 bu tanıma uymadığı için asal değildir.", unit: "uslu-koklu", level: 1 },

    // === Çarpım Tablosu, Asal Sayılar, Karekök — Pekiştirme (L2) ===
    { q: "8 × 7 = ?", o: ["56", "54", "64", "48"], a: 0, exp: "8×7=56.", unit: "uslu-koklu", level: 2 },
    { q: "5⁴ = ?", o: ["625", "600", "525", "650"], a: 0, exp: "5⁴=5³×5=125×5=625.", unit: "uslu-koklu", level: 2 },
    { q: "Aşağıdakilerden hangisi asal sayıdır?", o: ["83", "87", "91", "93"], a: 0, exp: "83 asaldır. 87=3×29, 91=7×13, 93=3×31 — hepsi çarpanlara ayrılabilir.", unit: "uslu-koklu", level: 2 },
    { q: "2024 sayısı hangi sayıya tam bölünür?", o: ["11", "7", "9", "13"], a: 0, exp: "11 kuralı: rakamlara sağdan +,-,+,- ver: 4-2+0-2=0 → 11'e bölünür. 2024÷11=184.", unit: "uslu-koklu", level: 2 },
    { q: "63 sayısı aşağıdakilerden hangisine tam bölünmez?", o: ["8", "9", "7", "3"], a: 0, exp: "63=7×9=3²×7'dir. 63÷8=7,875 olduğundan 8'e tam bölünmez; 9, 7 ve 3'e ise tam bölünür.", unit: "uslu-koklu", level: 2 },
    { q: "8! değeri kaçtır?", o: ["40320", "362880", "5040", "4032"], a: 0, exp: "8!=8×7!=8×5040=40320.", unit: "uslu-koklu", level: 2 },

    // === Çarpım Tablosu, Asal Sayılar, Karekök — Sınav (L3) ===
    { q: "√70 hangi iki tam sayı arasındadır?", o: ["8 ve 9", "7 ve 8", "9 ve 10", "6 ve 7"], a: 0, exp: "8²=64 ve 9²=81 olduğundan 64<70<81, yani √70, 8 ile 9 arasındadır (≈8,37).", unit: "uslu-koklu", level: 3 },
    { q: "9! değeri kaçtır?", o: ["362880", "40320", "3628800", "36288"], a: 0, exp: "9!=9×8!=9×40320=362880.", unit: "uslu-koklu", level: 3 },
    { q: "10! değeri kaçtır?", o: ["3628800", "362880", "36288000", "3628880"], a: 0, exp: "10!=10×9!=10×362880=3628800.", unit: "uslu-koklu", level: 3 },
    { q: "5⁵ değeri kaçtır?", o: ["3125", "2500", "3025", "3215"], a: 0, exp: "5⁵=5⁴×5=625×5=3125.", unit: "uslu-koklu", level: 3 },
    { q: "1452 sayısı 4'e tam bölünür mü?", o: ["Evet, çünkü son iki basamak (52) 4'e bölünür", "Hayır, 4'e bölünmez", "Evet, çünkü rakamlar toplamı 12'dir", "Hayır, çünkü tek basamaklı bir sayı değildir"], a: 0, exp: "4 kuralında sadece son iki basamağa bakılır: 52÷4=13 olduğundan 1452 de 4'e tam bölünür (1452÷4=363).", unit: "uslu-koklu", level: 3 },
    { q: "√50 yaklaşık olarak kaçtır?", o: ["≈7,07", "≈7,5", "≈8,07", "≈6,5"], a: 0, exp: "49(=7²) ile 64(=8²) arasında, 50; 49'a çok yakın olduğundan √50≈7,07'dir.", unit: "uslu-koklu", level: 3 },

    // === Devirli Kesirler — Temel (L1) ===
    { q: "1/3 kesrinin yüzde karşılığı yaklaşık nedir?", o: ["%33,3", "%13", "%30", "%3,3"], a: 0, exp: "1/3=0,333...=%33,3'tür (devirli).", unit: "kesir-yuzde-ondalik", level: 1 },
    { q: "2/3 kesrinin yüzde karşılığı yaklaşık nedir?", o: ["%66,7", "%23", "%62", "%76"], a: 0, exp: "2/3=0,666...=%66,7'dir (devirli).", unit: "kesir-yuzde-ondalik", level: 1 },

    // === Devirli Kesirler — Pekiştirme (L2) ===
    { q: "1/6 kesrinin yüzde karşılığı yaklaşık nedir?", o: ["%16,7", "%61", "%6,7", "%160"], a: 0, exp: "1/6=0,1666...=%16,7'dir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "1/9 kesrinin ondalık karşılığı nedir?", o: ["0,(1)", "0,9", "0,19", "0,91"], a: 0, exp: "1/9=0,111...=0,(1)'dir — devreden rakam 1'dir.", unit: "kesir-yuzde-ondalik", level: 2 },
    { q: "%16,7 değeri hangi basit kesre en yakındır?", o: ["1/6", "1/7", "1/8", "1/9"], a: 0, exp: "1/6≈%16,7'dir. 1/7≈%14,3, 1/8=%12,5, 1/9≈%11,1'dir.", unit: "kesir-yuzde-ondalik", level: 2 },

    // === Devirli Kesirler — Sınav (L3) ===
    { q: "1/7 kesrinin ondalık açılımında hangi 6 basamaklı blok sürekli tekrar eder?", o: ["142857", "123456", "714285", "185714"], a: 0, exp: "1/7=0,(142857)'dir. 2/7'den 6/7'ye kadar tüm yedide-birler aynı '142857' rakamlarının farklı başlangıç noktalarından oluşur.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "5/6 kesrinin ondalık karşılığı nedir?", o: ["0,8(3)", "0,83", "0,836", "0,5(6)"], a: 0, exp: "5/6=0,8333...=0,8(3)'tür — 3 rakamı devreder.", unit: "kesir-yuzde-ondalik", level: 3 },
    { q: "8/9 kesrinin ondalık karşılığı nedir?", o: ["0,(8)", "0,89", "0,98", "0,8(9)"], a: 0, exp: "8/9=0,888...=0,(8)'dir — devreden rakam 8'dir.", unit: "kesir-yuzde-ondalik", level: 3 }
  ]
};
