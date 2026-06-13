// KPSS Arena - VATANDAŞLIK veri dosyası
// İçerik: 1982 Anayasası'nın güncel hali (2017 değişiklikleri dâhil),
// Cumhurbaşkanlığı Hükûmet Sistemi, seçim barajı %7 (2022 değişikliği)
// Ünite + zorluk seviyesi yapısına geçirildi (Tarih kalıbı).
window.KPSS_DATA = window.KPSS_DATA || {};

window.KPSS_DATA.vatandaslik = {

  // ---------- BİLGİ YARIŞMASI ----------
  quiz: [
    { q: "Hukuk kurallarının diğer sosyal düzen kurallarından (ahlak, din, görgü) en temel farkı hangisidir?", o: ["Maddi yaptırımlı (Devlet gücüne dayalı) olması", "Yazılı olması", "Herkesi bağlaması", "Toplumsal düzeni sağlaması"], a: 0, exp: "Hukuk kurallarının yaptırımı (müeyyidesi) maddidir; yani devlet gücüyle zorla uygulanır. Din, ahlak, görgü kurallarının yaptırımı ise manevidir (kınama, günahkar sayılma vb.).", unit: "hukuk-temel", level: 1 },
    { q: "Bir ülkede yetkili bir makam tarafından konulan ve yürürlükte olan yazılı hukuk kurallarının tamamına ne ad verilir?", o: ["Mevzu Hukuk (Mevzuat)", "Pozitif Hukuk (Müspet)", "Tabii Hukuk (Doğal)", "Tarihi Hukuk"], a: 0, exp: "Sadece yazılı kurallara mevzu hukuk (mevzuat) denir. Pozitif hukuk ise hem yazılı hem de yazısız (örf-adet) kuralları kapsar.", unit: "hukuk-temel", level: 2 },
    { q: "Kişinin kendi fiilleriyle haklar kazanabilmesi ve borçlar altına girebilmesi yeteneğine ne ad verilir?", o: ["Fiil Ehliyeti", "Hak Ehliyeti", "Hukuki İşlem Yeteneği", "Sorumluluk Yeteneği"], a: 0, exp: "Hak ehliyeti tam ve sağ doğmak şartıyla ana rahmine düştüğü andan itibaren başlar (pasiftir). Fiil ehliyeti ise ergin olmak, ayırt etme gücüne sahip olmak ve kısıtlı olmamakla başlar (aktiftir).", unit: "hukuk-temel", level: 2 },
    { q: "Yasama, yürütme ve yargı güçlerinin tek bir kişide veya organda toplandığı, güçler birliği ilkesine dayanan hükümet biçimi hangisidir?", o: ["Mutlak Monarşi (Diktatörlük)", "Meşruti Monarşi", "Parlamenter Sistem", "Başkanlık Sistemi"], a: 0, exp: "Güçler birliği sisteminde tüm kuvvetler tek organda birleşir (Monarşiler veya Meclis Hükümeti Sistemi). Güçler ayrılığında ise yasama, yürütme ve yargı ayrıdır.", unit: "devlet-sistemler", level: 1 },
    { q: "Yasama ve yürütme güçlerinin sert bir şekilde ayrıldığı, devlet başkanının doğrudan halk tarafından seçildiği hükümet sistemi hangisidir?", o: ["Başkanlık Sistemi", "Yarı Başkanlık Sistemi", "Parlamenter Sistem", "Meclis Hükümeti Sistemi"], a: 0, exp: "Başkanlık sisteminde sert bir güçler ayrılığı vardır; yürütme tek başlıdır (başkan) ve yasama-yürütme birbirini feshedemez.", unit: "devlet-sistemler", level: 2 },
    { q: "1982 Anayasası'na göre Türkiye Cumhuriyeti Devleti'nin yönetim şekli hangisidir?", o: ["Cumhuriyet", "Demokrasi", "Federal Devlet", "Başkanlık"], a: 0, exp: "Anayasa'nın 1. maddesine göre: 'Türkiye Devleti bir Cumhuriyettir.' Bu madde değiştirilemez ve değiştirilmesi teklif edilemez.", unit: "anayasa-esaslar", level: 1 },
    { q: "1982 Anayasası'nın değiştirilemez, değiştirilmesi teklif dahi edilemez maddeleri arasında aşağıdakilerden hangisi yer almaz?", o: ["Seçimlerin 5 yılda bir yapılması", "Devletin şeklinin Cumhuriyet olması", "Milli marşın İstiklal Marşı olması", "Başkentin Ankara olması"], a: 0, exp: "Anayasa'nın ilk 3 maddesi değiştirilemez (4. madde koruması altındadır). Seçim süresi 5. maddededir ve değiştirilebilir.", unit: "anayasa-esaslar", level: 2 },
    { q: "Aşağıdakilerden hangisi 1982 Anayasası'nda düzenlenen 'Kişinin Hakları ve Ödevleri' (Negatif statü / Koruyucu haklar) arasında yer alır?", o: ["Konut Dokunulmazlığı", "Çalışma Hakkı", "Seçme ve Seçilme Hakkı", "Eğitim ve Öğrenim Hakkı"], a: 0, exp: "Konut dokunulmazlığı, mülkiyet hakkı, dernek kurma hakkı negatif statü (kişi hakları) haklarındandır. Çalışma ve eğitim sosyal/ekonomik, seçme-seçilme ise siyasi haktır.", unit: "temel-haklar", level: 2 },
    { q: "Aşağıdakilerden hangisi siyasi hak ve ödevlerimizden (Aktif statü / Katılma hakları) biridir?", o: ["Vatan Hizmeti (Askerlik) ve Vergi Ödevi", "Dilekçe Hakkı ve Çalışma Hakkı", "Mülkiyet Hakkı", "Din ve Vicdan Hürriyeti"], a: 0, exp: "Askerlik (vatan hizmeti), vergi ödevi, seçme-seçilme, vatandaşlık hakkı ve dilekçe hakkı siyasi (katılma) haklarındandır.", unit: "temel-haklar", level: 1 },
    { q: "1982 Anayasası'na göre TBMM ve Cumhurbaşkanlığı seçimleri kaç yılda bir, aynı gün yapılır?", o: ["5 yılda bir", "4 yılda bir", "6 yılda bir", "3 yılda bir"], a: 0, exp: "2017 anayasa değişikliğiyle birlikte TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı gün gerçekleştirilir.", unit: "yasama", level: 1 },
    { q: "1982 Anayasası'na göre yürütme yetkisi ve görevi kime aittir?", o: ["Cumhurbaşkanı", "Bakanlar Kurulu", "Başbakan", "TBMM"], a: 0, exp: "2017 anayasa değişikliği ile Bakanlar Kurulu ve Başbakanlık kaldırılmış, yürütme yetkisi tamamen tek başlı hale getirilerek Cumhurbaşkanı'na verilmiştir.", unit: "yurutme", level: 1 },
    { q: "Bir kişinin en fazla kaç kez Cumhurbaşkanı seçilebilmesi kuralı anayasada yer alır?", o: ["En fazla iki kez", "En fazla bir kez", "Sınırsız sayıda", "En fazla üç kez"], a: 0, exp: "Anayasaya göre bir kimse en fazla iki defa Cumhurbaşkanı seçilebilir. Ancak TBMM seçimleri yenilerse, ikinci dönemindeki Cumhurbaşkanı bir kez daha aday olabilir.", unit: "yurutme", level: 2 },
    { q: "Anayasa Mahkemesi (AYM) kaç üyeden oluşur ve üyelerini kim seçer?", o: ["15 üye (12'sini Cumhurbaşkanı, 3'ünü TBMM seçer)", "17 üye (15'ini Cumhurbaşkanı, 2'sini TBMM seçer)", "15 üye (Tamamını Cumhurbaşkanı seçer)", "12 üye (Tamamını TBMM seçer)"], a: 0, exp: "2017 değişikliğiyle askeri mahkemeler kapatılınca AYM üye sayısı 17'den 15'e düşmüştür. 12 üyeyi Cumhurbaşkanı, 3 üyeyi ise TBMM seçer.", unit: "yargi", level: 2 },
    { q: "Hakimler ve Savcılar Kurulu (HSK) kaç üyeden oluşur ve başkanı kimdir?", o: ["13 üye - Başkanı Adalet Bakanı'dır", "15 üye - Başkanı Adalet Bakanı Müsteşarı'dır", "11 üye - Başkanı Cumhurbaşkanı'dır", "13 üye - Başkanı AYM Başkanı'dır"], a: 0, exp: "HSK 13 üyeden oluşur ve 2 daire halinde çalışır. Kurulu başkanı Adalet Bakanı'dır.", unit: "yargi", level: 3 },
    { q: "Aşağıdakilerden hangisi yerinden yönetim (mahalli idareler / yerel yönetim) kuruluşlarından biri değildir?", o: ["Kaymakamlık", "Belediyeler", "İl Özel İdaresi", "Köy İdaresi"], a: 0, exp: "Kaymakamlık ve valilik, merkezden yönetimin taşra teşkilatıdır. Belediye, İl özel idaresi ve köy ise yerinden yönetim (mahalli idare) kuruluşlarıdır.", unit: "idare", level: 1 },
    { q: "Devlet memurlarının haftalık çalışma süresi genel olarak kaç saattir?", o: ["40 saat", "45 saat", "35 saat", "48 saat"], a: 0, exp: "657 sayılı Devlet Memurları Kanunu'na göre memurların haftalık çalışma süresi genel olarak 40 saattir ve cumartesi-pazar tatildir.", unit: "idare", level: 2 },
    { q: "Türkiye'nin de kurucu üye olduğu, merkezi Cenevre'de bulunan ve İkinci Dünya Savaşı sonrasında kurulan dünya barışı koruma kuruluşu hangisidir?", o: ["Birleşmiş Milletler (BM)", "Avrupa Birliği (AB)", "Kuzey Atlantik Paktı (NATO)", "İslam İşbirliği Teşkilatı"], a: 0, exp: "Türkiye 1945 San Francisco Konferansı ile BM'ye kurucu üye olarak katılmıştır. Merkezi New York'tadır (soruda Cenevre denilen alt organlar mevcuttur).", unit: "guncel-uluslararasi", level: 1 },
    { q: "Hukuk kurallarına aykırı olarak yapılan idari işlemlerin yetkili mahkemelerce ortadan kaldırılması yaptırımına ne denir?", o: ["İptal", "Hükümsüzlük", "Cebri İcra", "Butlan"], a: 0, exp: "İdari işlemlerin mahkeme kararıyla geçersiz kılınarak ortadan kaldırılmasına iptal denir (örn. yıkım kararının mahkemece iptali).", unit: "hukuk-temel", level: 1 },
    { q: "1982 Anayasası'na göre olağanüstü evlenme yaşı, mahkeme kararıyla en az kaç yaşın doldurulmasıyla mümkündür?", o: ["16 yaş", "17 yaş", "18 yaş", "15 yaş"], a: 0, exp: "Olağanüstü durumlarda mahkeme kararıyla evlenme yaşı 16'dır. Veli rızasıyla olağan evlenme 17, tam erginlik ise 18 yaştır.", unit: "temel-haklar", level: 2 },
    { q: "Ceza ehliyeti yaş sınırlarıyla ilgili olarak aşağıdakilerden hangisi doğrudur?", o: ["12 yaşını doldurmamış çocukların hiçbir şekilde ceza ehliyeti yoktur", "Sağır ve dilsizlerde ceza ehliyeti yaşı 12'dir", "15 yaşını dolduran herkese tam ceza uygulanır", "18 yaş altındaki hiç kimseye hapis cezası verilemez"], a: 0, exp: "12 yaşını doldurmamış çocukların ceza ehliyeti yoktur, sadece güvenlik tedbiri uygulanabilir. Sağır ve dilsizlerde sınır +3 yaş eklenerek (15 yaş) uygulanır.", unit: "temel-haklar", level: 2 },
    { q: "Alacaklının borçluyla yaptığı bir sözleşmeyle alacağından vazgeçerek borçluyu borçtan kurtarmasına ne denir?", o: ["İbra", "İfa", "Tecdit (Yenileme)", "Takas"], a: 0, exp: "Alacaklının hakkından vazgeçmesine ibra denir. İfa borcun ödenmesi, tecdit borcun yenilenmesi, takas karşılıklı silinmedir.", unit: "hukuk-temel", level: 2 },
    // === HUKUKUN TEMEL KAVRAMLARI ===
    { q: "Toplum hayatını düzenleyen, devlet gücüyle desteklenen ve uyulması zorunlu olan kurallara ne denir?", o: ["Hukuk kuralları", "Ahlak kuralları", "Görgü kuralları", "Din kuralları"], a: 0, exp: "Hukuk kuralları; uyulması zorunlu, yaptırımı (müeyyidesi) devlet gücüyle uygulanan kurallardır. Ahlak, görgü ve din kurallarının yaptırımı manevidir (ayıplama, dışlanma).", unit: "hukuk-temel", level: 1 },
    { q: "Hukuk kurallarına uyulmadığında karşılaşılan, devlet gücüyle uygulanan tepkiye ne denir?", o: ["Yaptırım (müeyyide)", "Ayıplama", "Kınama", "Tavsiye"], a: 0, exp: "Yaptırım; hukuk kuralının ihlaline karşı devletin uyguladığı zorlamadır. Başlıca türleri: ceza, cebri icra, tazminat, iptal ve hükümsüzlüktür.", unit: "hukuk-temel", level: 1 },
    { q: "Kişiler arasındaki, tarafların eşit olduğu ilişkileri düzenleyen hukuk dalı hangisidir?", o: ["Özel hukuk", "Kamu hukuku", "Ceza hukuku", "İdare hukuku"], a: 0, exp: "Özel hukukta taraflar eşit konumdadır (Medeni, Borçlar, Ticaret hukuku). Kamu hukukunda ise devlet üstün ve emredici konumdadır (Anayasa, Ceza, İdare, Vergi hukuku).", unit: "hukuk-temel", level: 2 },
    { q: "Bir kişinin haklara ve borçlara sahip olabilme (taraf olabilme) yeteneğine ne denir?", o: ["Hak ehliyeti", "Fiil ehliyeti", "Temyiz kudreti", "Vesayet"], a: 0, exp: "Hak ehliyeti sağ doğan her insanda vardır. Fiil ehliyeti ise kişinin kendi işlemleriyle hak kazanma yeteneğidir (ergin olmak, ayırt etme gücü, kısıtlı olmamak gerekir).", unit: "hukuk-temel", level: 2 },
    { q: "Aşağıdakilerden hangisi bir HUKUKİ yaptırım türü DEĞİLDİR?", o: ["Vicdan azabı", "Ceza", "Cebri icra", "İptal"], a: 0, exp: "Hukuki yaptırımlar: ceza, cebri icra, tazminat, iptal ve hükümsüzlüktür. Vicdan azabı, ahlak kuralının manevi bir sonucudur; hukuki bir yaptırım değildir.", unit: "hukuk-temel", level: 3 },

    // === DEVLET ve HÜKÛMET SİSTEMLERİ ===
    { q: "Bir devletin var olabilmesi için gerekli olan üç temel unsur hangisidir?", o: ["Ülke, millet (insan), egemenlik", "Ordu, vergi, bayrak", "Anayasa, meclis, mahkeme", "Toprak, para, dil"], a: 0, exp: "Devletin unsurları: ülke (üzerinde kurulduğu toprak), millet (insan topluluğu) ve egemenlik (üstün buyurma gücü).", unit: "devlet-sistemler", level: 1 },
    { q: "Egemenliğin tek merkezde toplandığı; tek yasama, yürütme ve yargının bulunduğu devlet yapısı hangisidir?", o: ["Üniter devlet", "Federal devlet", "Konfederasyon", "Eyalet sistemi"], a: 0, exp: "Türkiye üniter bir devlettir: tek anayasa, tek meclis, tek yargı vardır (md.3: ülkesi ve milletiyle bölünmez bütün). Federal devlette ise eyaletlerin kendi anayasa ve meclisleri olabilir.", unit: "devlet-sistemler", level: 1 },
    { q: "Yasama, yürütme ve yargı yetkilerinin ayrı organlara verilmesine ne denir?", o: ["Kuvvetler ayrılığı", "Kuvvetler birliği", "Meclis hükümeti", "Federalizm"], a: 0, exp: "Kuvvetler ayrılığı, iktidarın kötüye kullanılmasını önler. 1982 Anayasası kuvvetler ayrılığını benimser; 1921 Anayasası ise kuvvetler birliğini (meclis hükümeti) benimsemişti.", unit: "devlet-sistemler", level: 1 },
    { q: "2017 değişikliğiyle geçilen Cumhurbaşkanlığı Hükûmet Sistemi'nde yürütmenin yapısı nasıldır?", o: ["Tek başlı (yürütme tek elde toplanır)", "İki başlı (Cumhurbaşkanı + Başbakan)", "Meclise bağlı", "Kollektif (kurul)"], a: 0, exp: "2017 sonrası yürütme tek başlıdır; Başbakanlık ve Bakanlar Kurulu kaldırılmış, yürütme yetkisi Cumhurbaşkanı'nda toplanmıştır.", unit: "devlet-sistemler", level: 2 },
    { q: "Parlamenter sistem ile başkanlık sistemi arasındaki temel fark nedir?", o: ["Yürütmenin yasamadan kaynaklanıp kaynaklanmaması", "Mahkemelerin sayısı", "Seçim barajının oranı", "Bakanların sayısı"], a: 0, exp: "Parlamenter sistemde hükûmet meclisten çıkar ve ona karşı sorumludur. Başkanlık sisteminde ise yürütme doğrudan halk tarafından seçilir ve yasamadan bağımsızdır.", unit: "devlet-sistemler", level: 2 },
    { q: "Aşağıdakilerden hangisi bir HÜKÛMET SİSTEMİ DEĞİLDİR?", o: ["Üniter sistem", "Parlamenter sistem", "Başkanlık sistemi", "Yarı-başkanlık sistemi"], a: 0, exp: "Üniter kavramı devletin YAPISIYLA (biçimiyle) ilgilidir, bir hükûmet sistemi değildir. Hükûmet sistemleri: parlamenter, başkanlık, yarı-başkanlık ve meclis hükümeti sistemleridir.", unit: "devlet-sistemler", level: 3 },

    // === ANAYASA ve TEMEL ESASLAR ===
    { q: "Türkiye'de halen yürürlükte olan anayasa hangisidir?", o: ["1982 Anayasası", "1961 Anayasası", "1924 Anayasası", "2017 Anayasası"], a: 0, exp: "Yürürlükteki anayasa 1982 Anayasası'dır; en kapsamlı değişiklik 2017 referandumuyla yapılmış ve Cumhurbaşkanlığı Hükûmet Sistemi'ne geçilmiştir. 2017'de yeni bir anayasa yapılmamış, mevcut anayasa değiştirilmiştir.", unit: "anayasa-esaslar", level: 1 },
    { q: "Anayasanın değiştirilemez maddeleri hangileridir?", o: ["İlk 3 madde", "İlk 4 madde", "İlk 5 madde", "Sadece 1. madde"], a: 0, exp: "İlk üç madde (devletin şekli; nitelikleri; bütünlüğü, dili, bayrağı, marşı, başkenti) değiştirilemez. 4. madde bu yasağı güvence altına alır ama kendisi 'değiştirilemez maddeler' arasında sayılmaz.", unit: "anayasa-esaslar", level: 1 },
    { q: "Anayasa'nın 2. maddesine göre hangisi Cumhuriyetin nitelikleri arasında YOKTUR?", o: ["Federal devlet", "Demokratik devlet", "Laik devlet", "Sosyal hukuk devleti"], a: 0, exp: "Madde 2: Türkiye Cumhuriyeti; demokratik, laik ve sosyal bir hukuk devletidir (insan haklarına saygılı, Atatürk milliyetçiliğine bağlı). Türkiye üniter bir devlettir, federal değildir.", unit: "anayasa-esaslar", level: 1 },
    { q: "'Egemenlik kayıtsız şartsız milletindir' ifadesi anayasanın kaçıncı maddesindedir?", o: ["6. madde", "1. madde", "10. madde", "42. madde"], a: 0, exp: "Madde 6'ya göre egemenlik kayıtsız şartsız milletindir; Türk milleti egemenliğini yetkili organlar eliyle kullanır.", unit: "anayasa-esaslar", level: 2 },
    { q: "Anayasa değişikliği TEKLİF edebilmek için kaç milletvekilinin imzası gerekir?", o: ["200 (üye tamsayısının 1/3'ü)", "301 (salt çoğunluk)", "360 (3/5)", "100"], a: 0, exp: "Anayasa değişikliği, üye tamsayısının en az üçte biri (200 üye) tarafından yazıyla teklif edilebilir; teklifler gizli oyla görüşülür.", unit: "anayasa-esaslar", level: 2 },
    { q: "Anayasa değişikliğinin kabulü için TBMM'de en az kaç oy gerekir?", o: ["360 (üye tamsayısının 3/5'i)", "301 (salt çoğunluk)", "400 (2/3)", "200 (1/3)"], a: 0, exp: "Kabul için en az 3/5 (360) gizli oy gerekir. 360-399 oy arasında kabul edilirse zorunlu halkoylamasına gidilir; 400 ve üzeri oyda Cumhurbaşkanı isterse onaylar, isterse halkoylamasına sunar.", unit: "anayasa-esaslar", level: 3 },

    // === TEMEL HAK ve ÖDEVLER ===
    { q: "Eğitim hakkı hangi hak grubuna girer?", o: ["Sosyal ve ekonomik haklar (isteme hakları)", "Kişi hakları", "Siyasi haklar", "Negatif statü hakları"], a: 0, exp: "Eğitim, çalışma, sağlık, konut ve sosyal güvenlik hakları; devletten olumlu bir edim isteme niteliği taşıyan sosyal-ekonomik haklardandır (pozitif statü).", unit: "temel-haklar", level: 1 },
    { q: "Temel hak ve hürriyetler hangi durumda ve nasıl sınırlanabilir?", o: ["Ancak kanunla ve anayasadaki sebeplere bağlı olarak", "Cumhurbaşkanlığı kararnamesiyle", "Yönetmelikle", "Genelgeyle"], a: 0, exp: "Temel hak ve hürriyetler özlerine dokunulmaksızın, yalnızca anayasanın ilgili maddelerindeki sebeplere bağlı olarak ve ancak KANUNLA sınırlanabilir; ölçülülük ilkesine aykırı olamaz.", unit: "temel-haklar", level: 2 },
    { q: "Jellinek'in sınıflandırmasına göre 'seçme ve seçilme hakkı' hangi hak grubundadır?", o: ["Siyasi haklar (aktif statü)", "Kişi hakları (negatif statü)", "Sosyal-ekonomik haklar (pozitif statü)", "Doğal haklar"], a: 0, exp: "Kişi hakları = negatif statü (koruyucu) • Sosyal-ekonomik haklar = pozitif statü (isteme) • Siyasi haklar = aktif statü (katılma). Seçme-seçilme, siyasi haktır.", unit: "temel-haklar", level: 2 },
    { q: "Kişisel verilerin korunmasını isteme hakkı hangi kapsamdadır?", o: ["Anayasada güvence altına alınmış bir temel haktır (md. 20)", "Sadece kanunla korunur, anayasada yoktur", "Yalnızca memurlara tanınır", "Sadece AB vatandaşlarına tanınır"], a: 0, exp: "2010 değişikliğiyle kişisel verilerin korunması, özel hayatın gizliliği (md. 20) kapsamında anayasal hak oldu; ayrıntılar KVKK (2016) ile düzenlendi.", unit: "temel-haklar", level: 2 },
    { q: "Dilekçe hakkını kimler kullanabilir?", o: ["Vatandaşlar ve karşılıklılık esasıyla Türkiye'de oturan yabancılar", "Yalnızca Türk vatandaşları", "Yalnızca milletvekilleri", "Yalnızca dernekler"], a: 0, exp: "Madde 74: Vatandaşlar ve karşılıklılık esası gözetilmek kaydıyla Türkiye'de ikamet eden yabancılar, yetkili makamlara ve TBMM'ye yazıyla başvurabilir.", unit: "temel-haklar", level: 2 },

    // === YASAMA (TBMM) ===
    { q: "TBMM kaç milletvekilinden oluşur?", o: ["600", "550", "500", "450"], a: 0, exp: "2017 anayasa değişikliğiyle milletvekili sayısı 550'den 600'e çıkarılmıştır (ilk uygulama: 2018 seçimleri).", unit: "yasama", level: 1 },
    { q: "Milletvekili seçilme yaşı kaçtır?", o: ["18", "25", "30", "21"], a: 0, exp: "2017 değişikliğiyle seçilme yaşı 25'ten 18'e indirilmiştir. Seçme (oy kullanma) yaşı da 18'dir.", unit: "yasama", level: 1 },
    { q: "TBMM ve Cumhurbaşkanlığı seçimleri kaç yılda bir yapılır?", o: ["5 yılda bir, aynı gün", "4 yılda bir, aynı gün", "5 yılda bir, ayrı günlerde", "7 yılda bir"], a: 0, exp: "2017 değişikliğiyle her iki seçim de 5 yılda bir ve aynı gün yapılır.", unit: "yasama", level: 1 },
    { q: "Türkiye'de ülke seçim barajı yüzde kaçtır?", o: ["%7", "%10", "%5", "%3"], a: 0, exp: "Nisan 2022'de yapılan kanun değişikliğiyle ülke barajı %10'dan %7'ye indirilmiştir.", unit: "yasama", level: 1 },
    { q: "2017 sonrası sistemde kanun teklif etme yetkisi kime aittir?", o: ["Yalnızca milletvekillerine", "Cumhurbaşkanı'na", "Bakanlara", "Hem hükûmete hem vekillere"], a: 0, exp: "'Kanun tasarısı' kaldırılmıştır; kanun teklifini yalnızca milletvekilleri verebilir. (İstisna: bütçe kanun teklifini Cumhurbaşkanı sunar.)", unit: "yasama", level: 2 },
    { q: "TBMM'nin toplantı yeter sayısı kaçtır?", o: ["200 (üye tamsayısının 1/3'ü)", "301 (salt çoğunluk)", "360 (3/5)", "151"], a: 0, exp: "Toplantı yeter sayısı üye tamsayısının üçte biri (200), karar yeter sayısı toplantıya katılanların salt çoğunluğudur; ancak bu sayı hiçbir şekilde 151'den (üye tamsayısının dörtte birinin bir fazlası) az olamaz.", unit: "yasama", level: 2 },
    { q: "Hangisi seçimlerin temel ilkelerinden biri DEĞİLDİR?", o: ["İki dereceli seçim", "Genel oy", "Gizli oy", "Açık sayım ve döküm"], a: 0, exp: "Seçimler; serbest, eşit, genel oy, tek dereceli, gizli oy, açık sayım-döküm ilkeleriyle ve yargı yönetim-denetiminde (YSK) yapılır.", unit: "yasama", level: 2 },
    { q: "Hangisi oy kullanamaz?", o: ["Silah altındaki er ve erbaşlar", "Tutuklular", "Taksirli suçtan hükümlüler", "65 yaş üstü vatandaşlar"], a: 0, exp: "Silah altındaki er-erbaşlar, askeri öğrenciler ve (taksirli suçlar hariç) ceza infaz kurumundaki hükümlüler oy kullanamaz. Tutuklular ve taksirli suç hükümlüleri oy kullanabilir.", unit: "yasama", level: 2 },
    { q: "Hangisi TBMM'nin görev ve yetkilerinden biri DEĞİLDİR?", o: ["Bakanları atamak", "Kanun koymak, değiştirmek, kaldırmak", "Savaş ilanına karar vermek", "Para basılmasına karar vermek"], a: 0, exp: "Bakanları ve CB yardımcılarını Cumhurbaşkanı atar ve görevden alır. TBMM; kanun yapar, bütçeyi kabul eder, savaş ilanına ve para basımına karar verir, genel-özel af çıkarabilir (3/5 çoğunlukla).", unit: "yasama", level: 3 },

    // === YÜRÜTME (CUMHURBAŞKANI) ===
    { q: "Cumhurbaşkanı seçilebilmek için gereken yaş ve öğrenim şartı nedir?", o: ["40 yaş - yükseköğrenim", "35 yaş - lise", "45 yaş - yükseköğrenim", "30 yaş - yükseköğrenim"], a: 0, exp: "Cumhurbaşkanı adayı; 40 yaşını doldurmuş, yükseköğrenim yapmış, milletvekili seçilme yeterliliğine sahip Türk vatandaşı olmalıdır.", unit: "yurutme", level: 1 },
    { q: "2017 değişikliği sonrası yürütme yetkisi kime aittir?", o: ["Cumhurbaşkanı'na", "Başbakan'a", "Bakanlar Kurulu'na", "TBMM'ye"], a: 0, exp: "Başbakanlık ve Bakanlar Kurulu kaldırılmıştır; yürütme yetkisi tek başına Cumhurbaşkanı'na aittir. Yasama TBMM'nin, yargı bağımsız mahkemelerindir.", unit: "yurutme", level: 1 },
    { q: "Bir kişi en fazla kaç kez cumhurbaşkanı seçilebilir?", o: ["İki kez", "Bir kez", "Üç kez", "Sınırsız"], a: 0, exp: "Bir kimse en fazla iki kez cumhurbaşkanı seçilebilir. İstisna: İkinci döneminde TBMM seçimlerin yenilenmesine karar verirse bir kez daha aday olabilir.", unit: "yurutme", level: 2 },
    { q: "Cumhurbaşkanı, TBMM'nin kabul ettiği kanunları kaç gün içinde yayımlar?", o: ["15 gün", "30 gün", "7 gün", "60 gün"], a: 0, exp: "Cumhurbaşkanı kanunu 15 gün içinde yayımlar ya da bir kez daha görüşülmek üzere TBMM'ye geri gönderir. TBMM kanunu üye tamsayısının salt çoğunluğuyla (301) aynen kabul ederse Cumhurbaşkanı yayımlamak zorundadır.", unit: "yurutme", level: 2 },
    { q: "Olağanüstü hâl (OHAL) ilan etme yetkisi kime aittir ve ilk süresi en fazla ne kadardır?", o: ["Cumhurbaşkanı - 6 ay", "TBMM - 3 ay", "İçişleri Bakanı - 1 yıl", "MGK - 6 ay"], a: 0, exp: "OHAL'i Cumhurbaşkanı, süresi 6 ayı geçmemek üzere ilan eder; karar aynı gün Resmî Gazete'de yayımlanır ve TBMM onayına sunulur. TBMM süreyi her defasında 4 ayı geçmemek üzere uzatabilir (savaş hâli hariç). Sıkıyönetim 2017'de kaldırılmıştır.", unit: "yurutme", level: 2 },
    { q: "Cumhurbaşkanlığı kararnamesi (CBK) hangi alanda çıkarılamaz?", o: ["Temel haklar, kişi hakları ve siyasi haklarda", "Yürütmeye ilişkin konularda", "Üst düzey atamalarda", "Bakanlıkların kurulmasında"], a: 0, exp: "CBK yürütme yetkisine ilişkin konularda çıkarılabilir; ancak temel haklar, kişi hakları ve siyasi haklar CBK ile düzenlenemez. Kanunla açıkça düzenlenen konuda CBK çıkarılamaz; çatışma hâlinde kanun uygulanır.", unit: "yurutme", level: 2 },
    { q: "Cumhurbaşkanı hakkında soruşturma açılması ve Yüce Divan'a sevk için gereken oylar nelerdir?", o: ["Soruşturma: 360, Yüce Divan'a sevk: 400", "Soruşturma: 301, sevk: 360", "Soruşturma: 200, sevk: 301", "Soruşturma: 400, sevk: 450"], a: 0, exp: "Önerge: salt çoğunluk (301) • Soruşturma açılması: 3/5 gizli oy (360) • Yüce Divan'a sevk: 2/3 gizli oy (400). Yüce Divan sıfatıyla yargılamayı Anayasa Mahkemesi yapar.", unit: "yurutme", level: 3 },

    // === YARGI ===
    { q: "Yüce Divan sıfatıyla yargılama yapan organ hangisidir?", o: ["Anayasa Mahkemesi", "Yargıtay", "Danıştay", "HSK"], a: 0, exp: "Anayasa Mahkemesi; Cumhurbaşkanı, CB yardımcıları, bakanlar, yüksek mahkeme üyeleri gibi kişileri görevleriyle ilgili suçlardan Yüce Divan sıfatıyla yargılar.", unit: "yargi", level: 1 },
    { q: "Anayasa Mahkemesi kaç üyeden oluşur?", o: ["15", "17", "13", "11"], a: 0, exp: "2017 değişikliğiyle (askeri yargının kaldırılmasıyla) üye sayısı 17'den 15'e inmiştir. 3 üyeyi TBMM, 12 üyeyi Cumhurbaşkanı seçer; görev süresi 12 yıldır.", unit: "yargi", level: 1 },
    { q: "Hâkimler ve Savcılar Kurulu (HSK) kaç üyeden oluşur ve başkanı kimdir?", o: ["13 üye - Adalet Bakanı", "15 üye - Cumhurbaşkanı", "22 üye - Yargıtay Başkanı", "13 üye - TBMM Başkanı"], a: 0, exp: "HSK 13 üyedir; başkanı Adalet Bakanı'dır, Adalet Bakanlığı ilgili bakan yardımcısı doğal üyedir. Hâkim ve savcıların özlük işlerine bakar.", unit: "yargi", level: 1 },
    { q: "Anayasa Mahkemesi'ne bireysel başvuru hangi haklar için yapılabilir?", o: ["Anayasa ve AİHS'in ortak koruduğu temel hak ve özgürlükler için", "Tüm idari işlemler için", "Yalnızca mülkiyet hakkı için", "Vergi uyuşmazlıkları için"], a: 0, exp: "2010 değişikliğiyle getirilen bireysel başvuru (uygulama: 2012), Anayasa ile AİHS kapsamındaki ortak temel haklar ihlal edilen ve olağan yolları tüketen herkese açıktır.", unit: "yargi", level: 2 },
    { q: "Adli yargının ve idari yargının temyiz (üst) mercileri sırasıyla hangileridir?", o: ["Yargıtay - Danıştay", "Danıştay - Yargıtay", "AYM - Yargıtay", "Sayıştay - Danıştay"], a: 0, exp: "Adli yargıda temyiz mercii Yargıtay, idari yargıda Danıştay'dır.", unit: "yargi", level: 2 },
    { q: "Seçimlerin yönetim ve denetimini hangi kurum yapar?", o: ["Yüksek Seçim Kurulu (YSK)", "Anayasa Mahkemesi", "İçişleri Bakanlığı", "TBMM"], a: 0, exp: "YSK seçimleri yönetir ve denetler; kararları kesindir, aleyhine başka mercie başvurulamaz. 7 asıl ve 4 yedek üyeden oluşur (üyeler Yargıtay ve Danıştay'dan seçilir).", unit: "yargi", level: 2 },
    { q: "Siyasi partilerin kapatılması davasını kim açar, kararı kim verir?", o: ["Yargıtay Cumhuriyet Başsavcısı açar, Anayasa Mahkemesi karar verir", "Adalet Bakanı açar, Yargıtay karar verir", "TBMM açar, Danıştay karar verir", "İçişleri Bakanı açar, YSK karar verir"], a: 0, exp: "Kapatma davasını Yargıtay Cumhuriyet Başsavcısı açar; davaya Anayasa Mahkemesi bakar ve kesin kararı verir.", unit: "yargi", level: 2 },
    { q: "Hangisi yüksek mahkemelerden biri DEĞİLDİR?", o: ["Sayıştay", "Anayasa Mahkemesi", "Yargıtay", "Danıştay"], a: 0, exp: "Yüksek mahkemeler: Anayasa Mahkemesi, Yargıtay, Danıştay ve Uyuşmazlık Mahkemesi'dir. Sayıştay, TBMM adına mali denetim yapar; yüksek mahkeme sayılmaz. Askeri yüksek yargı 2017'de kaldırılmıştır.", unit: "yargi", level: 3 },

    // === İDARE ve YÖNETİM ===
    { q: "İlde devletin ve Cumhurbaşkanlığının temsilcisi kimdir?", o: ["Vali", "Belediye Başkanı", "Kaymakam", "İl Genel Meclisi Başkanı"], a: 0, exp: "Vali atamayla göreve gelir ve ilde devleti temsil eder; kaymakam ilçede yönetimin başıdır ama devletin değil hükûmet işleyişinin temsilcisidir. Belediye başkanı ve muhtar seçimle gelir.", unit: "idare", level: 1 },
    { q: "Yerel yönetimlerin (mahalli idareler) başına geçen yöneticiler nasıl belirlenir?", o: ["Seçimle", "Atamayla", "Kura ile", "Cumhurbaşkanı tarafından"], a: 0, exp: "Belediye başkanı, muhtar, il genel ve belediye meclisi üyeleri SEÇİMLE gelir. Vali ve kaymakam ise merkezi yönetimin temsilcisi olarak ATAMAYLA gelir.", unit: "idare", level: 2 },
    { q: "Kamu Denetçiliği Kurumu (Ombudsman) hangi kuruma bağlıdır ve ne yapar?", o: ["TBMM Başkanlığına bağlıdır; idarenin işleyişiyle ilgili şikâyetleri inceler", "Cumhurbaşkanlığına bağlıdır; bakanlıkları yönetir", "Adalet Bakanlığına bağlıdır; dava açar", "AYM'ye bağlıdır; iptal kararı verir"], a: 0, exp: "2010 değişikliğiyle kurulan Kamu Denetçiliği Kurumu, TBMM Başkanlığına bağlıdır; idare hakkındaki şikâyetleri inceler ve tavsiye kararı verir. Kamu Başdenetçisini TBMM 4 yıl için seçer.", unit: "idare", level: 2 },
    { q: "Aşağıdakilerden hangisi bir YEREL YÖNETİM (mahalli idare) birimi DEĞİLDİR?", o: ["Valilik", "Belediye", "İl özel idaresi", "Köy"], a: 0, exp: "Yerel yönetim birimleri: belediye, il özel idaresi ve köydür. Valilik, merkezi yönetimin il düzeyindeki taşra teşkilatıdır (yerinden yönetim değildir).", unit: "idare", level: 3 },

    // === GÜNCEL ve ULUSLARARASI ===
    { q: "Anayasa Mahkemesi ilk kez hangi anayasayla kurulmuştur?", o: ["1961 Anayasası", "1924 Anayasası", "1982 Anayasası", "1921 Anayasası"], a: 0, exp: "1961 Anayasası; AYM'yi kurmuş, çift meclisi (Millet Meclisi + Cumhuriyet Senatosu) getirmiş, en özgürlükçü anayasa kabul edilir. En uzun süre yürürlükte kalan ise 1924 Anayasası'dır.", unit: "guncel-uluslararasi", level: 1 },
    { q: "İnsan Hakları Evrensel Beyannamesi ne zaman, hangi kuruluş tarafından kabul edilmiştir?", o: ["10 Aralık 1948 - Birleşmiş Milletler", "1950 - Avrupa Konseyi", "1945 - NATO", "1961 - UNESCO"], a: 0, exp: "BM Genel Kurulu 10 Aralık 1948'de kabul etmiştir; 10 Aralık, Dünya İnsan Hakları Günü'dür. Türkiye beyanı 1949'da onaylamıştır.", unit: "guncel-uluslararasi", level: 1 },
    { q: "Türkiye NATO'ya hangi yıl üye olmuştur?", o: ["1952", "1949", "1945", "1963"], a: 0, exp: "NATO 1949'da kuruldu; Türkiye ve Yunanistan 1952'de üye oldu. Türkiye, 1945'te kurulan BM'nin kurucu üyelerindendir.", unit: "guncel-uluslararasi", level: 1 },
    { q: "1921 Anayasası'nın (Teşkilat-ı Esasiye) en belirgin özelliği nedir?", o: ["Güçler birliği ve meclis hükümeti sistemini benimsemesi", "Çift meclisli yapı kurması", "Anayasa Mahkemesi'ni kurması", "Laiklik ilkesine yer vermesi"], a: 0, exp: "1921 Anayasası; ilk TBMM anayasasıdır, güçler birliği ve meclis hükümeti sistemini benimser, en kısa ve tek 'yumuşak' (kolay değiştirilebilir) anayasamızdır.", unit: "guncel-uluslararasi", level: 2 },
    { q: "Türkiye Cumhuriyeti'nde laiklik ilkesi anayasaya hangi yıl girmiştir?", o: ["1937", "1928", "1923", "1982"], a: 0, exp: "1928'de 'devletin dini İslam'dır' ibaresi anayasadan çıkarılmış, 1937'de laiklik dahil Atatürk ilkeleri anayasaya girmiştir.", unit: "guncel-uluslararasi", level: 2 },
    { q: "Türkiye - AB ilişkilerinde 'aday ülke' statüsü hangi zirvede tanınmıştır?", o: ["1999 Helsinki Zirvesi", "2005 Lüksemburg Zirvesi", "1996 Gümrük Birliği", "1963 Ankara Anlaşması"], a: 0, exp: "Süreç: 1963 Ankara Anlaşması → 1987 tam üyelik başvurusu → 1996 Gümrük Birliği → 1999 Helsinki'de adaylık → 2005'te tam üyelik müzakereleri başladı.", unit: "guncel-uluslararasi", level: 2 },
    {"q": "1982 Anayasası'na göre devletin şeklinin Cumhuriyet olduğu hükmü, anayasanın hangi maddesinde yer alır ve değiştirilemez niteliktedir?", "o": ["1. Madde", "2. Madde", "3. Madde", "4. Madde"], "a": 0, "exp": "1. Madde 'Türkiye Devleti bir Cumhuriyettir.' hükmünü içerir. 4. maddeye göre ilk 3 madde değiştirilemez ve değiştirilmesi teklif dahi edilemez.", "unit": "anayasa-esaslar", "level": 1},
    {"q": "1982 Anayasası'ndaki 'Sosyal Devlet' ilkesinin temel amaçlarından biri aşağıdakilerden hangisidir?", "o": ["Fırsat eşitliğini sağlamak ve milli geliri adil dağıtmak", "Sadece devletin ekonomik yatırımlarını yönetmek", "Kişi hak ve özgürlüklerini tamamen sınırlamak", "Sadece tek bir dini grubu korumak"], "a": 0, "exp": "Sosyal devlet; vatandaşlarına asgari geçim düzeyi sağlamak, sosyal güvenliği yaygınlaştırmak, fırsat eşitliği sunmak ve adil gelir dağılımını hedefleyen devlettir.", "unit": "devlet-sistemler", "level": 2},
    {"q": "Bir kişinin doğum veya soybağı gibi tabii nedenlerle ya da kanunun öngördüğü kazanma yollarıyla elde ettiği, devlete hukuki bağ ile bağlılık durumuna ne denir?", "o": ["Vatandaşlık", "Mülkiyet", "Vesayet", "Velayet"], "a": 0, "exp": "Vatandaşlık, bireyi devlete bağlayan siyasi ve hukuki bağdır. Anayasanın 66. maddesinde 'Türk Devleti'ne vatandaşlık bağı ile bağlı olan herkes Türktür' denir.", "unit": "temel-haklar", "level": 1},
    {"q": "Hukuk kuralları ile din, ahlak ve görgü kurallarını ayıran en temel fark aşağıdakilerden hangisidir?", "o": ["Devlet gücüne dayanan maddi yaptırıma sahip olması", "Yazısız olması", "Toplumsal düzeni sağlaması", "Kişisel vicdana dayanması"], "a": 0, "exp": "Hukuk kuralları, diğer sosyal düzen kurallarından farklı olarak devlet gücüyle desteklenmiş 'maddi yaptırıma' (ceza, cebri icra, tazminat, hükümsüzlük) sahiptir.", "unit": "hukuk-temel", "level": 1},
    {"q": "Bir kimsenin kendi fiil ve işlemleriyle kendi lehine haklar, aleyhine borçlar yaratabilme iktidarına (ehliyetine) ne ad verilir?", "o": ["Fiil ehliyeti", "Hak ehliyeti", "Vesayet ehliyeti", "Rüşt ehliyeti"], "a": 0, "exp": "Fiil ehliyeti, kişinin kendi eylemleriyle hak ve borç yaratabilmesidir. Ayırt etme gücüne sahip, ergin ve kısıtlı olmayan kişiler tam fiil ehliyetine sahiptir. Hak ehliyeti ise doğumla (sağ ve tam doğmak şartıyla) kazanılır.", "unit": "hukuk-temel", "level": 2},
    {"q": "Devletin temel organlarından olan Yasama yetkisi Türk Milleti adına kime aittir?", "o": ["Türkiye Büyük Millet Meclisi", "Cumhurbaşkanı", "Anayasa Mahkemesi", "Bakanlar Kurulu"], "a": 0, "exp": "Anayasa'nın 7. maddesine göre: 'Yasama yetkisi Türk Milleti adına Türkiye Büyük Millet Meclisinindir. Bu yetki devredilemez.'", "unit": "yasama", "level": 1},
    {"q": "1982 Anayasası'na göre milletvekili seçilebilmek için kaç yaşını doldurmuş olmak gerekir?", "o": ["18 yaş", "21 yaş", "25 yaş", "30 yaş"], "a": 0, "exp": "2017 anayasa değişikliğiyle milletvekili seçilme yaşı 25'ten 18'e düşürülmüştür.", "unit": "yasama", "level": 1},
    {"q": "1982 Anayasası'na göre Türkiye Büyük Millet Meclisi (TBMM) kaç milletvekilinden oluşur?", "o": ["600 milletvekili", "550 milletvekili", "450 milletvekili", "500 milletvekili"], "a": 0, "exp": "2017 anayasa değişikliğiyle TBMM'deki vekil sayısı 550'den 600'e çıkarılmıştır.", "unit": "yasama", "level": 1},
    {"q": "Türkiye Büyük Millet Meclisi ve Cumhurbaşkanlığı seçimleri kaç yılda bir aynı günde yapılır?", "o": ["5 yılda bir", "4 yılda bir", "6 yılda bir", "3 yılda bir"], "a": 0, "exp": "2017 anayasa değişikliğiyle seçim dönemi 4 yıldan 5 yıla çıkarılmış ve meclis ile cumhurbaşkanı seçimlerinin aynı gün yapılması hükme bağlanmıştır.", "unit": "yasama", "level": 1},
    {"q": "1982 Anayasası'na göre olağanüstü hal (OHAL) ilan etme yetkisi kime aittir ve en fazla kaç ay için ilan edilebilir?", "o": ["Cumhurbaşkanı - En fazla 6 ay", "TBMM - En fazla 6 ay", "İçişleri Bakanı - En fazla 3 ay", "Milli Güvenlik Kurulu - En fazla 4 ay"], "a": 0, "exp": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; süresi 6 ayı geçemez. İlan kararı Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur. TBMM süreyi her defasında en fazla 4 ay uzatabilir.", "unit": "yurutme", "level": 2},
    {"q": "Anayasa Mahkemesi kaç üyeden oluşur ve üyelerini kim seçer?", "o": ["15 üye - Cumhurbaşkanı ve TBMM", "17 üye - Yargıtay ve Danıştay", "12 üye - Sadece Cumhurbaşkanı", "19 üye - HSK"], "a": 0, "exp": "Anayasa Mahkemesi 15 üyeden oluşur. 12 üyeyi Cumhurbaşkanı, 3 üyeyi ise TBMM seçer. Üyelerin görev süresi 12 yıldır.", "unit": "yargi", "level": 2},
    {"q": "Hâkimler ve Savcılar Kurulu (HSK) kaç üyeden oluşur ve başkanı kimdir?", "o": ["13 üye - Adalet Bakanı", "15 üye - Yargıtay Başkanı", "11 üye - Anayasa Mahkemesi Başkanı", "7 üye - Danıştay Başkanı"], "a": 0, "exp": "HSK 13 üyeden oluşur ve iki daire halinde çalışır. Kurulun başkanı Adalet Bakanı'dır. Adalet Bakanlığı Müsteşarı (Bakan Yardımcısı) kurulun doğal üyesidir.", "unit": "yargi", "level": 2},
    {"q": "Osmanlı ve Türk anayasa tarihinde yürürlüğe giren İLK ve TEK yumuşak (kolay değiştirilebilen) anayasa hangisidir?", "o": ["1921 Anayasası (Teşkilat-ı Esasiye)", "1876 Kanun-i Esasi", "1924 Anayasası", "1961 Anayasası"], "a": 0, "exp": "1921 Anayasası olağanüstü savaş koşullarında hazırlandığı için kısa ve özdür; değiştirilmesi için özel zorlaştırıcı kurallar ve değiştirilemez maddeler barındırmaz, bu yüzden tek yumuşak anayasamızdır.", "unit": "guncel-uluslararasi", "level": 2},
    {"q": "İl idaresinin başında bulunan, ilde Cumhurbaşkanı'nın temsilcisi ve idari yürütme vasıtası olan yetkili kimdir?", "o": ["Vali", "Kaymakam", "Belediye Başkanı", "Muhtar"], "a": 0, "exp": "Vali, il idaresinin başında yer alır; Cumhurbaşkanı kararı ile atanır ve ilde cumhurbaşkanının temsilcisi ve idari yürütme organıdır. Yetki genişliğine sahiptir.", "unit": "idare", "level": 1},
    {"q": "Birleşmiş Milletler (BM) Teşkilatı'nın ana karar ve icra organı olan, 5 daimi üyenin (Fırça: Fransa, İngiltere, Rusya, Çin, ABD) veto yetkisine sahip olduğu organ hangisidir?", "o": ["Güvenlik Konseyi", "Genel Kurul", "Vesayet Konseyi", "Adalet Divanı"], "a": 0, "exp": "BM Güvenlik Konseyi 15 üyeden oluşur; 5'i daimi üyedir (veto yetkili), diğer 10 üye Genel Kurul tarafından 2 yıllığına seçilir. Kararları bağlayıcı olan tek organdır.", "unit": "guncel-uluslararasi", "level": 2},
    {"q": "Bir ülkede belirli bir dönemde yürürlükte olan, sadece yazılı hukuk kurallarını (Kanun, Anayasa, Yönetmelik vb.) kapsayan hukuk türüne ne ad verilir?", "o": ["Mevzu Hukuk (Mevzuat)", "Pozitif Hukuk (Müspet)", "Tabii Hukuk (Doğal)", "Tarihi Hukuk"], "a": 0, "exp": "Mevzu hukuk, yetkili makamlar tarafından konulan sadece yazılı kuralları kapsar. Pozitif hukuk ise hem yazılı hem de yazısız (örf-adet) kuralları kapsar.", "unit": "hukuk-temel", "level": 1},
    {"q": "1982 Anayasası'na göre devletin temel amaç ve görevleri arasında aşağıdakilerden hangisi yer almaz?", "o": ["Kişilerin temel hak ve hürriyetlerini tamamen ortadan kaldırmak", "Türk milletinin bağımsızlığını ve bütünlüğünü korumak", "Cumhuriyeti ve demokrasiyi korumak", "İnsanın maddi ve manevi varlığının gelişmesi için engelleri kaldırmak"], "a": 0, "exp": "Anayasa'nın 5. maddesine göre devletin görevi hakları korumaktir, ortadan kaldırmak veya tamamen sınırlamak değildir.", "unit": "anayasa-esaslar", "level": 2},
    {"q": "Milletvekillerinin meclis çalışmalarındaki oy, söz ve düşüncelerinden dolayı cezai sorumluluklarının olmamasına (hiçbir zaman yargılanamamalarına) ne denir?", "o": ["Yasama Sorumsuzluğu", "Yasama Dokunulmazlığı", "Milletvekili Muafiyeti", "Gensoru Muafiyeti"], "a": 0, "exp": "Yasama sorumsuzluğu, meclisteki söz ve oyların serbestçe kullanılmasını sağlar ve mutlaktır, meclis kararıyla bile kaldırılamaz. Dokunulmazlık ise nispidir ve kaldırılabilir.", "unit": "yasama", "level": 2}
  ],

  // ---------- ÖNCÜL AVI (I-II-III) ----------
  oncul: [
    { q: "Hukuk kuralları ile ahlak kuralları karşılaştırıldığında;", items: ["Hukuk kurallarının yaptırımı devlet gücüyle uygulanır.", "Ahlak kurallarına uyulmaması manevi tepkiyle (ayıplama) sonuçlanır.", "Her ahlak kuralı aynı zamanda bir hukuk kuralıdır."], correct: [0, 1], exp: "Hukukun yaptırımı maddi ve devlet gücüyle (I doğru), ahlakınki manevidir (II doğru). Bazı kurallar hem ahlaki hem hukuki olabilir ama HER ahlak kuralı hukuk kuralı değildir (III yanlış).", unit: "hukuk-temel", level: 3 },
    { q: "Özel hukuk ile kamu hukuku ayrımıyla ilgili;", items: ["Özel hukukta taraflar eşit konumdadır.", "Kamu hukukunda devlet üstün ve emredici konumdadır.", "Ceza hukuku bir özel hukuk dalıdır."], correct: [0, 1], exp: "Özel hukukta eşitlik (I doğru), kamu hukukunda devletin üstünlüğü (II doğru) esastır. Ceza hukuku ise bir KAMU hukuku dalıdır (III yanlış).", unit: "hukuk-temel", level: 3 },

    { q: "Devletin temel unsurlarıyla ilgili;", items: ["Ülke (vatan), devletin üzerinde kurulduğu topraktır.", "Egemenlik, devletin üstün buyurma gücüdür.", "Bir devletin oluşması için mutlaka tek bir dil konuşulması gerekir."], correct: [0, 1], exp: "Devletin unsurları ülke (I doğru), millet ve egemenliktir (II doğru). Tek dil zorunluluğu bir unsur değildir; çok dilli devletler de vardır (III yanlış).", unit: "devlet-sistemler", level: 3 },
    { q: "Üniter devlet ile federal devlet karşılaştırıldığında;", items: ["Üniter devlette tek bir yasama organı vardır.", "Federal devlette eyaletlerin kendi anayasaları olabilir.", "Türkiye federal bir devlettir."], correct: [0, 1], exp: "Üniter devlette tek meclis (I doğru), federalde eyalet anayasaları (II doğru) bulunur. Türkiye ise ÜNİTER bir devlettir, federal değildir (III yanlış).", unit: "devlet-sistemler", level: 3 },

    { q: "1982 Anayasası'nın değiştirilemez maddeleriyle ilgili;", items: ["Devletin şeklinin Cumhuriyet olduğu hükmü değiştirilemez.", "İlk üç madde değiştirilemez; 4. madde bu yasağın güvencesidir.", "Anayasanın tamamı hiçbir şekilde değiştirilemez."], correct: [0, 1], exp: "Cumhuriyet ilkesi (I) ve ilk üç maddenin değiştirilemezliği (II) doğrudur. Ancak anayasanın diğer maddeleri usulüne uygun olarak değiştirilebilir; tamamı değiştirilemez değildir (III yanlış).", unit: "anayasa-esaslar", level: 3 },
    { q: "Türkiye Cumhuriyeti'nin nitelikleriyle (Anayasa md. 2) ilgili;", items: ["Demokratik bir hukuk devletidir.", "Laik ve sosyal bir devlettir.", "Federal bir devlettir."], correct: [0, 1], exp: "Türkiye demokratik, laik, sosyal bir hukuk devletidir (I ve II doğru). Üniter bir devlettir; federal değildir (III yanlış).", unit: "anayasa-esaslar", level: 3 },

    { q: "Temel hak ve hürriyetlerin sınırlanmasıyla ilgili;", items: ["Sınırlama ancak kanunla yapılabilir.", "Hakkın özüne dokunulamaz ve ölçülülük ilkesine uyulur.", "Temel haklar Cumhurbaşkanlığı kararnamesiyle sınırlanabilir."], correct: [0, 1], exp: "Sınırlama yalnızca kanunla (I doğru), öze dokunmadan ve ölçülü olarak (II doğru) yapılır. Temel haklar CBK ile DÜZENLENEMEZ/sınırlanamaz (III yanlış).", unit: "temel-haklar", level: 3 },
    { q: "Jellinek'in hak sınıflandırmasıyla ilgili;", items: ["Kişi hakları negatif statü (koruyucu) haklardır.", "Sosyal-ekonomik haklar pozitif statü (isteme) haklarıdır.", "Seçme ve seçilme hakkı bir kişi hakkıdır."], correct: [0, 1], exp: "Kişi hakları negatif statü (I doğru), sosyal-ekonomik haklar pozitif statüdür (II doğru). Seçme-seçilme ise siyasi haktır (aktif statü), kişi hakkı değildir (III yanlış).", unit: "temel-haklar", level: 3 },

    { q: "TBMM'nin görev ve yetkileriyle ilgili;", items: ["Kanun koyar, değiştirir ve kaldırır.", "Bütçe ve kesin hesap kanun tekliflerini görüşüp kabul eder.", "Cumhurbaşkanı yardımcılarını ve bakanları atar."], correct: [0, 1], exp: "TBMM kanun yapar (I doğru) ve bütçeyi kabul eder (II doğru). CB yardımcılarını ve bakanları ise Cumhurbaşkanı atar ve görevden alır, TBMM değil (III yanlış).", unit: "yasama", level: 3 },
    { q: "Yasama dokunulmazlığı ve sorumsuzluğuyla ilgili;", items: ["Yasama sorumsuzluğu (kürsü dokunulmazlığı) kaldırılamaz.", "Yasama dokunulmazlığı Meclis kararıyla kaldırılabilir.", "Sorumsuzluk, milletvekilliği bittikten sonra ortadan kalkar."], correct: [0, 1], exp: "Sorumsuzluk süreklidir ve kaldırılamaz (I doğru); dokunulmazlık geçicidir, Meclis kaldırabilir (II doğru). Sorumsuzluk vekillik bittikten SONRA da devam eder, ortadan kalkmaz (III yanlış).", unit: "yasama", level: 3 },

    { q: "Cumhurbaşkanlığı Hükûmet Sistemi'nde yürütmeyle ilgili;", items: ["Yürütme yetkisi Cumhurbaşkanı'na aittir.", "Cumhurbaşkanı, kararname (CBK) çıkarabilir.", "Başbakan, hükûmetin başıdır."], correct: [0, 1], exp: "Yürütme CB'ye ait (I doğru) ve CB kararname çıkarabilir (II doğru). 2017'de Başbakanlık KALDIRILDIĞINDAN artık başbakan yoktur (III yanlış).", unit: "yurutme", level: 3 },
    { q: "Cumhurbaşkanlığı kararnamesiyle (CBK) ilgili;", items: ["Yürütme yetkisine ilişkin konularda çıkarılır.", "Temel haklar, kişi hakları ve siyasi haklar CBK ile düzenlenemez.", "CBK ile kanun çelişirse CBK uygulanır."], correct: [0, 1], exp: "CBK yürütmeyle ilgili konularda çıkar (I doğru) ve temel/kişi/siyasi hakları düzenleyemez (II doğru). CBK ile kanun çatışırsa KANUN uygulanır (III yanlış).", unit: "yurutme", level: 3 },

    { q: "Türk yargı sistemiyle ilgili;", items: ["Adli yargının en üst (temyiz) mercii Yargıtay'dır.", "İdari yargının en üst mercii Danıştay'dır.", "Sayıştay bir yüksek mahkemedir."], correct: [0, 1], exp: "Yargıtay adli (I doğru), Danıştay idari yargının temyiz merciidir (II doğru). Sayıştay ise TBMM adına mali denetim yapar; yüksek mahkeme DEĞİLDİR (III yanlış).", unit: "yargi", level: 3 },
    { q: "Anayasa Mahkemesi ile ilgili;", items: ["15 üyeden oluşur.", "Bireysel başvuruları inceler.", "Üyelerinin tamamını TBMM seçer."], correct: [0, 1], exp: "AYM 15 üyelidir (I doğru) ve bireysel başvuruları inceler (II doğru). Üyelerin 3'ünü TBMM, 12'sini Cumhurbaşkanı seçer; tamamını TBMM seçmez (III yanlış).", unit: "yargi", level: 3 },

    { q: "Türk idari teşkilatıyla ilgili;", items: ["Vali, ilde merkezi yönetimin temsilcisidir.", "Belediye başkanı seçimle göreve gelir.", "Kaymakam, ilçede seçimle iş başına gelir."], correct: [0, 1], exp: "Vali merkezi yönetimin temsilcisi (I doğru), belediye başkanı seçimle gelir (II doğru). Kaymakam ise ATAMAYLA gelir, seçimle değil (III yanlış).", unit: "idare", level: 3 },
    { q: "Yerinden yönetim (yerel yönetim) birimleriyle ilgili;", items: ["Belediyeler bir yerel yönetim birimidir.", "Köy, en küçük yerel yönetim birimidir.", "Bakanlıklar birer yerel yönetim birimidir."], correct: [0, 1], exp: "Belediye (I) ve köy (II) yerel yönetim birimleridir. Bakanlıklar ise MERKEZİ yönetimin başkent teşkilatıdır, yerel yönetim değildir (III yanlış).", unit: "idare", level: 3 },

    { q: "Türk anayasa tarihiyle ilgili;", items: ["1921 Anayasası ilk TBMM anayasasıdır ve meclis hükümeti sistemini benimser.", "Anayasa Mahkemesi ilk kez 1961 Anayasası'yla kurulmuştur.", "En uzun süre yürürlükte kalan anayasa 1982 Anayasası'dır."], correct: [0, 1], exp: "1921 ilk TBMM anayasası (I doğru), AYM 1961'de kuruldu (II doğru). En uzun süre yürürlükte kalan ise 1924 Anayasası'dır, 1982 değil (III yanlış).", unit: "guncel-uluslararasi", level: 3 },
    { q: "Türkiye'nin üyesi olduğu uluslararası kuruluşlarla ilgili;", items: ["Türkiye, 1945'te kurulan BM'nin kurucu üyesidir.", "Türkiye NATO'ya 1952'de üye olmuştur.", "Türkiye, Avrupa Birliği'nin tam üyesidir."], correct: [0, 1], exp: "Türkiye BM kurucu üyesi (I doğru) ve 1952'de NATO üyesi (II doğru) oldu. AB'ye ise tam üye DEĞİL, 1999'dan beri aday ülkedir (III yanlış).", unit: "guncel-uluslararasi", level: 3 }
  ],

  // ---------- SAYI AVCISI ----------
  numbers: [
    { f: "Mirasçının mirası reddetme (reddi miras) süresi en fazla kaç aydır?", n: "3 ay", opts: ["3 ay", "1 ay", "6 ay", "12 ay"], exp: "Medeni Kanun'a göre mirasçı, murisin ölümünü öğrendiği tarihten itibaren 3 ay içinde mirası reddedebilir.", unit: "anayasa-esaslar", level: 2 },
    { f: "Anayasa Mahkemesi'nin toplam üye sayısı kaçtır?", n: "15", opts: ["15", "17", "11", "13"], exp: "2017 değişikliğiyle Askeri Yargıtay ve AYİM kaldırılınca üye sayısı 17'den 15'e düşürülmüştür.", unit: "yargi", level: 1 },
    { f: "TBMM üye (milletvekili) sayısı", n: "600", opts: ["600", "550", "500", "450"], exp: "2017 değişikliğiyle 550'den 600'e çıkarıldı.", unit: "yasama", level: 1 },
    { f: "Milletvekili seçilme yaşı", n: "18", opts: ["18", "25", "30", "21"], exp: "2017'de 25'ten 18'e indirildi; oy kullanma yaşı da 18'dir.", unit: "yasama", level: 1 },
    { f: "TBMM ve CB seçimlerinin yapılma periyodu (yıl)", n: "5", opts: ["5", "4", "6", "7"], exp: "İki seçim de 5 yılda bir, aynı gün yapılır.", unit: "yasama", level: 1 },
    { f: "Ülke seçim barajı (%)", n: "7", opts: ["7", "10", "5", "3"], exp: "2022'de %10'dan %7'ye indirildi.", unit: "yasama", level: 1 },
    { f: "TBMM'de salt çoğunluk (soruşturma önergesi, geri gönderilen kanunun aynen kabulü)", n: "301", opts: ["301", "300", "276", "360"], exp: "Üye tamsayısının (600) salt çoğunluğu 301'dir.", unit: "yasama", level: 2 },
    { f: "TBMM karar yeter sayısının inebileceği en düşük değer", n: "151", opts: ["151", "200", "301", "120"], exp: "Karar yeter sayısı, üye tamsayısının dörtte birinin bir fazlasından (151) az olamaz.", unit: "yasama", level: 2 },
    { f: "Cumhurbaşkanı adayı olabilmek için gereken yaş", n: "40", opts: ["40", "35", "45", "30"], exp: "40 yaşını doldurmuş ve yükseköğrenim yapmış olmak gerekir.", unit: "yurutme", level: 1 },
    { f: "Cumhurbaşkanı'nın kanunları yayımlama süresi (gün)", n: "15", opts: ["15", "30", "7", "10"], exp: "15 gün içinde yayımlar veya Meclise geri gönderir.", unit: "yurutme", level: 2 },
    { f: "OHAL'in ilk ilan süresi en fazla (ay)", n: "6", opts: ["6", "3", "4", "12"], exp: "En fazla 6 ay ilan edilir; TBMM her defasında 4 ayı geçmemek üzere uzatabilir.", unit: "yurutme", level: 2 },
    { f: "Cumhurbaşkanı'nın Yüce Divan'a sevki için gereken oy", n: "400", opts: ["400", "360", "301", "450"], exp: "Üye tamsayısının üçte ikisi (2/3) gizli oyu gerekir.", unit: "yurutme", level: 2 },
    { f: "Anayasa Mahkemesi üye sayısı", n: "15", opts: ["15", "17", "13", "11"], exp: "3 üyeyi TBMM, 12 üyeyi Cumhurbaşkanı seçer.", unit: "yargi", level: 1 },
    { f: "Hâkimler ve Savcılar Kurulu (HSK) üye sayısı", n: "13", opts: ["13", "15", "22", "11"], exp: "Başkanı Adalet Bakanı'dır.", unit: "yargi", level: 1 },
    { f: "AYM üyelerinin görev süresi (yıl)", n: "12", opts: ["12", "10", "5", "4"], exp: "Üyeler 12 yıl için seçilir; bir kişi iki kez seçilemez.", unit: "yargi", level: 2 },
    { f: "Anayasa değişikliği TEKLİFİ için gereken milletvekili sayısı", n: "200", opts: ["200", "301", "360", "100"], exp: "Üye tamsayısının üçte biri: 600/3 = 200.", unit: "anayasa-esaslar", level: 2 },
    { f: "Anayasa değişikliğinin KABULÜ için gereken asgari oy", n: "360", opts: ["360", "301", "400", "200"], exp: "Üye tamsayısının beşte üçü: gizli oyla en az 360.", unit: "anayasa-esaslar", level: 2 },
    { f: "Yürürlükteki anayasanın kabul yılı", n: "1982", opts: ["1982", "1961", "1924", "2017"], exp: "1982 Anayasası halkoylamasıyla kabul edildi; 2017'de kapsamlı biçimde değiştirildi.", unit: "anayasa-esaslar", level: 1 },
    { f: "Türkiye'deki il sayısı", n: "81", opts: ["81", "80", "82", "79"], exp: "81 il vardır; sonuncuları 1999'da il olan Düzce'dir.", unit: "idare", level: 1 },
    { f: "Büyükşehir belediyesi sayısı", n: "30", opts: ["30", "29", "16", "36"], exp: "Türkiye'de 30 büyükşehir belediyesi vardır.", unit: "idare", level: 1 },
    { f: "Kamu Başdenetçisi'nin görev süresi (yıl)", n: "4", opts: ["4", "5", "12", "7"], exp: "Kamu Başdenetçisini TBMM, 4 yıl için seçer.", unit: "idare", level: 2 },
    { f: "İnsan Hakları Evrensel Beyannamesi'nin kabul yılı", n: "1948", opts: ["1948", "1945", "1950", "1961"], exp: "BM Genel Kurulu, 10 Aralık 1948'de kabul etti.", unit: "guncel-uluslararasi", level: 1 },
    { f: "Türkiye'nin NATO'ya üye olduğu yıl", n: "1952", opts: ["1952", "1949", "1945", "1960"], exp: "NATO 1949'da kuruldu; Türkiye 1952'de üye oldu.", unit: "guncel-uluslararasi", level: 1 },
    { f: "Cumhuriyet tarihindeki anayasa sayısı (1921, 1924, 1961, 1982)", n: "4", opts: ["4", "3", "5", "2"], exp: "1921 Teşkilat-ı Esasiye, 1924, 1961 ve 1982 anayasaları olmak üzere 4 anayasa yapılmıştır.", unit: "guncel-uluslararasi", level: 2 }
  ],

  // ---------- KAVRAM / İPUCU AVI ----------
  clues: [
    { answer: "Hukuk devleti", options: ["Hukuk devleti", "Sosyal devlet", "Laik devlet", "Üniter devlet"], clues: ["Devletin tüm eylem ve işlemleri yargı denetimine açıktır.", "Yöneticiler de koyulan kurallarla bağlıdır.", "Vatandaşlara hukuki güvenlik sağlayan devlet ilkesiyim."], exp: "Hukuk devletinde idarenin her işlemi yargı denetimine tabidir.", unit: "anayasa-esaslar", level: 1 },
    { answer: "Sosyal devlet", options: ["Sosyal devlet", "Hukuk devleti", "Demokratik devlet", "Liberal devlet"], clues: ["Vatandaşların asgari yaşam düzeyini güvence altına alırım.", "İşsizlik, hastalık ve yaşlılıkta vatandaşın yanındayım.", "Gelir dağılımındaki adaletsizlikleri azaltmaya çalışırım."], exp: "Sosyal devlet; eğitim, sağlık, sosyal güvenlik gibi alanlarda devlete görev yükler.", unit: "anayasa-esaslar", level: 1 },
    { answer: "Laiklik", options: ["Laiklik", "Cumhuriyetçilik", "Halkçılık", "Milliyetçilik"], clues: ["Din ve devlet işlerinin birbirinden ayrılmasını öngörürüm.", "Din ve vicdan özgürlüğünü güvence altına alırım.", "Anayasaya 1937'de giren Atatürk ilkelerindenim."], exp: "Laiklik; devletin tüm inançlara eşit mesafede olmasıdır.", unit: "anayasa-esaslar", level: 2 },
    { answer: "Halkoylaması (referandum)", options: ["Halkoylaması (referandum)", "Genel seçim", "Plebisit", "Ara seçim"], clues: ["Yarı doğrudan demokrasinin en bilinen aracıyım.", "1982 Anayasası ve 2017 değişikliği benimle kabul edildi.", "Anayasa değişiklikleri 360-399 oyla kabul edilirse bana sunulmak zorundadır."], exp: "Halkoylaması, halkın bir konuda doğrudan karar vermesidir.", unit: "anayasa-esaslar", level: 2 },
    { answer: "Kuvvetler ayrılığı", options: ["Kuvvetler ayrılığı", "Kuvvetler birliği", "Meclis hükümeti", "Oligarşi"], clues: ["Devlet iktidarının kötüye kullanılmasını önlerim.", "Montesquieu ile özdeşleşen bir ilkeyim.", "Yasama, yürütme ve yargının ayrı organlarda olmasıyım."], exp: "1982 Anayasası kuvvetler ayrılığını benimser; 1921 Anayasası ise kuvvetler birliğini benimsemişti.", unit: "devlet-sistemler", level: 2 },
    { answer: "Yasama dokunulmazlığı", options: ["Yasama dokunulmazlığı", "Yasama sorumsuzluğu", "Diplomatik ayrıcalık", "Kamu denetçiliği"], clues: ["Milletvekillerini keyfî tutuklama ve sorgudan korurum.", "Meclis kararıyla kaldırılabilirim.", "Suç işlediği iddia edilen vekil, ben kaldırılmadan yargılanamaz (ağır cezayı gerektiren suçüstü hâli hariç)."], exp: "Dokunulmazlık geçicidir ve kaldırılabilir; sorumsuzluk ise süreklidir.", unit: "yasama", level: 2 },
    { answer: "Yasama sorumsuzluğu", options: ["Yasama sorumsuzluğu", "Yasama dokunulmazlığı", "Mutlak veto", "Güvenoyu"], clues: ["Milletvekilinin Meclis'teki oy ve sözlerini korurum.", "Kürsü masuniyeti olarak da bilinirim.", "Kaldırılamam; vekillik bittikten sonra da devam ederim."], exp: "Sorumsuzluk; vekilin Meclis çalışmalarındaki söz ve oylarından sorumlu tutulamamasıdır, kaldırılamaz.", unit: "yasama", level: 2 },
    { answer: "Cumhurbaşkanlığı kararnamesi", options: ["Cumhurbaşkanlığı kararnamesi", "Kanun hükmünde kararname", "Yönetmelik", "Tüzük"], clues: ["2017 değişikliğiyle hukukumuza girdim.", "Yürütme yetkisine ilişkin konularda çıkarılırım.", "Temel hakları düzenleyemem; kanunla çatışırsam kanun uygulanır."], exp: "CBK, KHK'nin yerini almıştır; OHAL döneminde ayrı bir rejimi vardır.", unit: "yurutme", level: 2 },
    { answer: "Yüce Divan", options: ["Yüce Divan", "Yargıtay", "Uyuşmazlık Mahkemesi", "Devlet Denetleme Kurulu"], clues: ["Görevle ilgili suçlarda üst düzey devlet görevlilerini yargılarım.", "Cumhurbaşkanı 400 oyla bana sevk edilebilir.", "Bu sıfatla yargılamayı aslında Anayasa Mahkemesi yapar."], exp: "AYM; Cumhurbaşkanı, bakanlar ve yüksek yargı üyelerini Yüce Divan sıfatıyla yargılar.", unit: "yargi", level: 2 },
    { answer: "Bireysel başvuru", options: ["Bireysel başvuru", "İptal davası", "Temyiz", "İtiraz yolu"], clues: ["2010 anayasa değişikliğiyle hukukumuza girdim.", "Olağan yargı yolları tüketildikten sonra kullanılabilirim.", "Temel hakkı ihlal edilen kişi benimle Anayasa Mahkemesi'ne gider."], exp: "Bireysel başvuru, 2012'den beri AYM tarafından incelenmektedir.", unit: "yargi", level: 2 },
    { answer: "Anayasa Mahkemesi", options: ["Anayasa Mahkemesi", "Yargıtay", "Danıştay", "YSK"], clues: ["Kanunların anayasaya uygunluğunu denetlerim.", "15 üyem var; üyelerim 12 yıl görev yapar.", "Bireysel başvuruları incelerim ve Yüce Divan sıfatıyla yargılama yaparım."], exp: "AYM 1961 Anayasası'yla kurulmuştur; kararları kesindir ve herkesi bağlar.", unit: "yargi", level: 1 },
    { answer: "Yüksek Seçim Kurulu (YSK)", options: ["Yüksek Seçim Kurulu (YSK)", "Anayasa Mahkemesi", "İl Seçim Kurulu", "İçişleri Bakanlığı"], clues: ["Seçimlerin yargısal güvencesiyim.", "7 asıl, 4 yedek üyem Yargıtay ve Danıştay'dan gelir.", "Kararlarıma karşı hiçbir mercie başvurulamaz."], exp: "YSK; seçimlerin başlamasından bitimine kadar tüm işlemleri yönetir ve denetler.", unit: "yargi", level: 2 },
    { answer: "Kamu Denetçiliği Kurumu (Ombudsman)", options: ["Kamu Denetçiliği Kurumu (Ombudsman)", "Sayıştay", "Devlet Denetleme Kurulu", "Danıştay"], clues: ["2010 anayasa değişikliğiyle kuruldum.", "TBMM Başkanlığına bağlıyım.", "İdarenin işleyişiyle ilgili şikâyetleri inceler, tavsiye kararı veririm."], exp: "Başdenetçi, TBMM tarafından 4 yıllığına seçilir.", unit: "idare", level: 2 },
    { answer: "Sayıştay", options: ["Sayıştay", "Maliye Bakanlığı", "Kamu Denetçiliği", "Danıştay"], clues: ["Yüksek mahkeme değilim ama hesap yargısı yaparım.", "Kamu idarelerinin gelir, gider ve mallarını denetlerim.", "Bu denetimi TBMM adına yaparım."], exp: "Sayıştay'ın kesin hesap incelemesi, bütçe hakkının denetim ayağıdır.", unit: "idare", level: 2 }
  ],

  // ---------- DOĞRU / YANLIŞ ----------
  tf: [
    { s: "Hukukta hak ehliyeti, kişinin sağ ve tam olarak doğduğu andan itibaren başlar.", t: true, exp: "Doğru. Hak ehliyeti pasif bir ehliyettir ve hak sahibi olabilmeyi ifade eder.", unit: "hukuk-temel", level: 1 },
    { s: "Vatandaşlık hakkı, anayasada düzenlenen sosyal ve ekonomik haklarımız arasında yer alır.", t: false, exp: "Yanlış. Vatandaşlık hakkı ve ödevi siyasi (aktif statü) haklarımız arasındadır.", unit: "temel-haklar", level: 2 },
    { s: "Milletvekili seçilme yaşı 2017 anayasa değişikliği ile 18'e düşürülmüştür.", t: true, exp: "Doğru. Daha önce 25 olan seçilme yaşı 2017 referandumuyla 18'e indirilmiştir.", unit: "yasama", level: 1 },
    { s: "Cumhurbaşkanı kararnameleri anayasaya göre yalnızca TBMM onayıyla yürürlüğe girer.", t: false, exp: "Yanlış. Cumhurbaşkanı kararnameleri Resmi Gazete'de yayımlandıkları gün yürürlüğe girer, TBMM onayına sunulmaz (bazı kanunla çelişme durumları hariç).", unit: "yurutme", level: 2 },
    { s: "Yargıtay, adliye mahkemelerince verilen karar ve hükümlerin son inceleme merciidir (yüksek mahkemedir).", t: true, exp: "Doğru. Yargıtay adli yargının, Danıştay ise idari yargının en yüksek mahkemesidir.", unit: "yargi", level: 1 },
    { s: "Vali, il özel idaresinin başı ve yürütme organıdır.", t: true, exp: "Doğru. Vali, hem devletin/hükümetin temsilcisi hem de il özel idaresinin yürütme organıdır.", unit: "idare", level: 2 },
    { s: "Kuzey Atlantik Antlaşması Örgütü (NATO) kurucu üyeleri arasında Türkiye de yer almaktadır.", t: false, exp: "Yanlış. NATO 1949'da kurulmuştur; Türkiye ise 1952'de Kore Savaşı'na asker gönderdikten sonra üye olmuştur.", unit: "guncel-uluslararasi", level: 2 },
    { s: "Hukuk kurallarının yaptırımı (müeyyidesi) devlet gücüyle uygulanır.", t: true, exp: "Doğru. Hukuk kurallarını ahlak ve görgü kurallarından ayıran temel özellik, yaptırımının devlet gücüyle desteklenmesidir.", unit: "hukuk-temel", level: 1 },
    { s: "Ceza hukuku bir özel hukuk dalıdır.", t: false, exp: "Yanlış. Ceza hukuku, devletin üstün konumda olduğu bir KAMU hukuku dalıdır.", unit: "hukuk-temel", level: 1 },
    { s: "Özel hukukta taraflar eşit konumdadır.", t: true, exp: "Doğru. Medeni, Borçlar ve Ticaret hukukunda taraflar eşittir; kamu hukukunda ise devlet üstündür.", unit: "hukuk-temel", level: 2 },

    { s: "Devletin üç temel unsuru ülke, millet ve egemenliktir.", t: true, exp: "Doğru. Bir devletin var olabilmesi için ülke (toprak), millet (insan) ve egemenlik (siyasi otorite) gereklidir.", unit: "devlet-sistemler", level: 1 },
    { s: "Türkiye federal bir devlettir.", t: false, exp: "Yanlış. Türkiye üniter bir devlettir (md.3: ülkesi ve milletiyle bölünmez bütün); tek yasama, yürütme ve yargı vardır.", unit: "devlet-sistemler", level: 1 },
    { s: "Cumhurbaşkanlığı Hükûmet Sistemi'nde yürütme tek başlıdır.", t: true, exp: "Doğru. 2017'de Başbakanlık kaldırılmış, yürütme yetkisi tek başına Cumhurbaşkanı'nda toplanmıştır.", unit: "devlet-sistemler", level: 2 },

    { s: "Anayasanın ilk 4 maddesi değiştirilemez.", t: false, exp: "Yanlış. Değiştirilemez olan ilk 3 maddedir; 4. madde bu yasağın güvencesidir.", unit: "anayasa-esaslar", level: 1 },
    { s: "Türkiye Cumhuriyeti üniter bir devlettir.", t: true, exp: "Doğru. Madde 3: 'Türkiye Devleti, ülkesi ve milletiyle bölünmez bir bütündür'; yasama-yürütme-yargı tektir.", unit: "anayasa-esaslar", level: 1 },
    { s: "Türkiye Cumhuriyeti laik bir devlettir.", t: true, exp: "Doğru. Madde 2'ye göre Türkiye Cumhuriyeti demokratik, laik ve sosyal bir hukuk devletidir.", unit: "anayasa-esaslar", level: 1 },
    { s: "Anayasa değişikliği teklifleri TBMM'de gizli oyla oylanır.", t: true, exp: "Doğru. Teklif için 200 imza, kabul için en az 360 gizli oy gerekir.", unit: "anayasa-esaslar", level: 2 },

    { s: "Eğitim hakkı sosyal ve ekonomik haklardandır.", t: true, exp: "Doğru. Eğitim, sağlık, çalışma ve sosyal güvenlik hakları devletten edim isteme niteliğindeki sosyal-ekonomik haklardır.", unit: "temel-haklar", level: 1 },
    { s: "Cumhurbaşkanlığı kararnamesiyle temel haklar düzenlenebilir.", t: false, exp: "Yanlış. Temel haklar, kişi hakları ve siyasi haklar CBK ile düzenlenemez; ancak kanunla düzenlenir.", unit: "temel-haklar", level: 2 },
    { s: "Bireysel başvuru hakkı 2010 anayasa değişikliğiyle getirilmiştir.", t: true, exp: "Doğru. 2010'da kabul edilmiş, başvurular 2012'de alınmaya başlanmıştır.", unit: "temel-haklar", level: 2 },

    { s: "TBMM 600 milletvekilinden oluşur.", t: true, exp: "Doğru. 2017 değişikliğiyle 550'den 600'e çıkarılmıştır.", unit: "yasama", level: 1 },
    { s: "Milletvekili seçilme yaşı 25'tir.", t: false, exp: "Yanlış. 2017 değişikliğiyle seçilme yaşı 18'e indirilmiştir.", unit: "yasama", level: 1 },
    { s: "Türkiye'de ülke seçim barajı %7'dir.", t: true, exp: "Doğru. 2022'deki kanun değişikliğiyle %10'dan %7'ye indirilmiştir.", unit: "yasama", level: 1 },
    { s: "Kanun teklifini yalnızca milletvekilleri verebilir.", t: true, exp: "Doğru. 2017 sonrası 'kanun tasarısı' kalkmıştır; teklif yetkisi milletvekillerindedir (bütçe teklifi hariç).", unit: "yasama", level: 2 },
    { s: "Tutuklular oy kullanamaz.", t: false, exp: "Yanlış. Tutuklular ve taksirli suç hükümlüleri oy kullanabilir; kullanamayanlar er-erbaşlar, askeri öğrenciler ve kasıtlı suç hükümlüleridir.", unit: "yasama", level: 2 },
    { s: "Genel ve özel af ilanına TBMM, üye tamsayısının 3/5 çoğunluğuyla karar verir.", t: true, exp: "Doğru. Af için 360 oy gerekir; orman suçları için af çıkarılamaz.", unit: "yasama", level: 2 },

    { s: "2017 anayasa değişikliğiyle Başbakanlık kaldırılmıştır.", t: true, exp: "Doğru. Yürütme tek başlı hâle gelmiş, yetki Cumhurbaşkanı'nda toplanmıştır (fiilen 2018'den itibaren).", unit: "yurutme", level: 1 },
    { s: "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir.", t: true, exp: "Doğru. Karar aynı gün Resmî Gazete'de yayımlanır ve TBMM onayına sunulur.", unit: "yurutme", level: 1 },
    { s: "Cumhurbaşkanı yardımcılarını ve bakanları TBMM seçer.", t: false, exp: "Yanlış. CB yardımcılarını ve bakanları Cumhurbaşkanı atar ve görevden alır; göreve başlarken TBMM önünde ant içerler.", unit: "yurutme", level: 1 },
    { s: "Cumhurbaşkanı, kanunları 30 gün içinde yayımlar.", t: false, exp: "Yanlış. Yayımlama süresi 15 gündür; uygun bulmazsa bir kez daha görüşülmek üzere Meclise geri gönderir.", unit: "yurutme", level: 2 },
    { s: "Cumhurbaşkanı seçilen kişinin partisiyle ilişiği kesilmek zorundadır.", t: false, exp: "Yanlış. 2017 değişikliğiyle partili cumhurbaşkanlığı mümkün hâle gelmiştir; ilişik kesme zorunluluğu kaldırılmıştır.", unit: "yurutme", level: 2 },

    { s: "Anayasa Mahkemesi 17 üyeden oluşur.", t: false, exp: "Yanlış. 2017'den beri 15 üyedir (3'ünü TBMM, 12'sini Cumhurbaşkanı seçer).", unit: "yargi", level: 1 },
    { s: "Yüce Divan sıfatıyla yargılamayı Yargıtay yapar.", t: false, exp: "Yanlış. Yüce Divan sıfatıyla yargılamayı Anayasa Mahkemesi yapar.", unit: "yargi", level: 1 },
    { s: "Sayıştay bir yüksek mahkemedir.", t: false, exp: "Yanlış. Sayıştay, TBMM adına mali denetim yapan kurumdur; anayasadaki yüksek mahkemeler arasında sayılmaz.", unit: "yargi", level: 2 },
    { s: "Seçimler yargı organlarının genel yönetim ve denetimi altında yapılır.", t: true, exp: "Doğru. Bu görev Yüksek Seçim Kurulu'nundur (YSK); YSK kararları kesindir.", unit: "yargi", level: 2 },
    { s: "YSK kararlarına karşı Anayasa Mahkemesi'ne başvurulabilir.", t: false, exp: "Yanlış. YSK kararları kesindir; aleyhine hiçbir mercie başvurulamaz.", unit: "yargi", level: 2 },
    { s: "Askeri Yargıtay ve Askeri Yüksek İdare Mahkemesi 2017 değişikliğiyle kaldırılmıştır.", t: true, exp: "Doğru. Askeri yüksek yargı kaldırılmış; disiplin mahkemeleri dışında askeri mahkeme kurulamaz.", unit: "yargi", level: 2 },
    { s: "Hâkimler 70 yaşına kadar görev yapar.", t: false, exp: "Yanlış. Hâkim ve savcılar 65 yaşını bitirinceye kadar görev yapar; azlolunamazlar.", unit: "yargi", level: 2 },

    { s: "Vali seçimle, kaymakam atamayla göreve gelir.", t: false, exp: "Yanlış. Hem vali hem kaymakam atamayla gelir; seçimle gelenler belediye başkanı, muhtar ve meclis üyeleridir.", unit: "idare", level: 1 },
    { s: "Belediye başkanı ve muhtar seçimle göreve gelir.", t: true, exp: "Doğru. Yerel yönetimlerin başındakiler seçimle gelir; vali ve kaymakam ise atamayla gelir.", unit: "idare", level: 1 },

    { s: "Türk kadınına milletvekili seçme ve seçilme hakkı 1934'te tanınmıştır.", t: true, exp: "Doğru. Belediye 1930, muhtarlık 1933, milletvekili 1934.", unit: "guncel-uluslararasi", level: 2 },
    { s: "1961 Anayasası ile Anayasa Mahkemesi ve çift meclis sistemi getirilmiştir.", t: true, exp: "Doğru. 1961 Anayasası; AYM, Cumhuriyet Senatosu, MGK ve DPT gibi kurumları getirmiştir.", unit: "guncel-uluslararasi", level: 2 },
    { s: "En uzun süre yürürlükte kalan anayasamız 1961 Anayasası'dır.", t: false, exp: "Yanlış. En uzun süre yürürlükte kalan 1924 Anayasası'dır (37 yıl).", unit: "guncel-uluslararasi", level: 2 },
    { s: "Türkiye, Birleşmiş Milletler'in kurucu üyelerindendir.", t: true, exp: "Doğru. Türkiye, 1945'te kurulan BM'ye kurucu üye olarak katılmıştır.", unit: "guncel-uluslararasi", level: 1 },
    { s: "Türkiye NATO'ya 1949'da kurucu üye olarak katılmıştır.", t: false, exp: "Yanlış. NATO 1949'da kuruldu; Türkiye 1952'de (Kore Savaşı sonrası) üye oldu.", unit: "guncel-uluslararasi", level: 1 },
    { s: "10 Aralık, Dünya İnsan Hakları Günü'dür.", t: true, exp: "Doğru. İnsan Hakları Evrensel Beyannamesi 10 Aralık 1948'de BM tarafından kabul edilmiştir.", unit: "guncel-uluslararasi", level: 1 }
  ],

  // ---------- EŞLEŞTİRME (turlar) ----------
  match: [
    { title: "Kurum → Görev", unit: "yargi", pairs: [
      ["Anayasa Mahkemesi", "Yüce Divan sıfatıyla yargılama"],
      ["Yargıtay", "Adli yargının temyiz mercii"],
      ["Danıştay", "İdari yargının temyiz mercii"],
      ["Sayıştay", "TBMM adına mali denetim"],
      ["YSK", "Seçimlerin yönetimi ve denetimi"],
      ["Kamu Denetçiliği Kurumu", "İdare hakkındaki şikâyetleri inceleme"],
      ["HSK", "Hâkim ve savcıların özlük işleri"]
    ]},
    { title: "Anayasa → Özelliği", unit: "guncel-uluslararasi", pairs: [
      ["Kanun-i Esasi (1876)", "İlk Osmanlı anayasası"],
      ["1921 Anayasası", "İlk TBMM anayasası, meclis hükümeti"],
      ["1924 Anayasası", "En uzun süre yürürlükte kalan"],
      ["1961 Anayasası", "AYM kuruldu, çift meclis"],
      ["1982 Anayasası", "Halen yürürlükte olan"],
      ["2017 değişikliği", "Cumhurbaşkanlığı Hükûmet Sistemi"]
    ]},
    { title: "Anayasal Sayı → Değer", unit: "yasama", pairs: [
      ["TBMM üye sayısı", "600"],
      ["AYM üye sayısı", "15"],
      ["HSK üye sayısı", "13"],
      ["Ülke seçim barajı", "%7"],
      ["İl sayısı", "81"],
      ["Seçim dönemi", "5 yıl"]
    ]},
    { title: "Kavram → Tanım", unit: "anayasa-esaslar", pairs: [
      ["Egemenlik", "Kayıtsız şartsız milletindir"],
      ["Laiklik", "Din ve devlet işlerinin ayrılığı"],
      ["Sosyal devlet", "Vatandaşa insanca yaşam düzeyi sağlama"],
      ["Hukuk devleti", "Devletin de hukuk kurallarıyla bağlı olması"],
      ["Üniter devlet", "Tek yasama, yürütme ve yargı; bölünmez bütünlük"],
      ["Demokratik devlet", "Yönetimin serbest seçimlerle belirlenmesi"]
    ]}
  ],

  // ---------- GRUPLARA AYIR ----------
  groups: [
    { title: "Özel hukuk mu, kamu hukuku mu?", unit: "hukuk-temel",
      groups: ["Özel hukuk (taraflar eşit)", "Kamu hukuku (devlet üstün)"],
      items: [
        { t: "Medeni hukuk", g: 0 },
        { t: "Borçlar hukuku", g: 0 },
        { t: "Ticaret hukuku", g: 0 },
        { t: "Anayasa hukuku", g: 1 },
        { t: "Ceza hukuku", g: 1 },
        { t: "İdare hukuku", g: 1 },
        { t: "Vergi hukuku", g: 1 }
      ],
      exp: "Özel hukukta taraflar eşittir (Medeni, Borçlar, Ticaret). Kamu hukukunda devlet üstün ve emredici konumdadır (Anayasa, Ceza, İdare, Vergi)." },

    { title: "Devletin biçimi mi, hükûmet sistemi mi?", unit: "devlet-sistemler",
      groups: ["Devletin yapısı (biçimi)", "Hükûmet sistemi"],
      items: [
        { t: "Üniter devlet", g: 0 },
        { t: "Federal devlet", g: 0 },
        { t: "Parlamenter sistem", g: 1 },
        { t: "Başkanlık sistemi", g: 1 },
        { t: "Yarı-başkanlık sistemi", g: 1 },
        { t: "Meclis hükümeti sistemi", g: 1 }
      ],
      exp: "Üniter ve federal kavramları devletin YAPISIYLA ilgilidir. Parlamenter, başkanlık, yarı-başkanlık ve meclis hükümeti ise birer HÜKÛMET SİSTEMİdir." },

    { title: "Hak türü (Jellinek'e göre)", unit: "temel-haklar",
      groups: ["Kişi hakları (negatif)", "Sosyal-ekonomik (pozitif)", "Siyasi haklar (aktif)"],
      items: [
        { t: "Yaşama hakkı", g: 0 },
        { t: "Konut dokunulmazlığı", g: 0 },
        { t: "Eğitim hakkı", g: 1 },
        { t: "Sağlık hakkı", g: 1 },
        { t: "Çalışma hakkı", g: 1 },
        { t: "Seçme ve seçilme hakkı", g: 2 },
        { t: "Dilekçe hakkı", g: 2 }
      ],
      exp: "Kişi hakları koruyucu (negatif statü); sosyal-ekonomik haklar devletten isteme (pozitif statü); siyasi haklar yönetime katılma (aktif statü) haklarıdır." },

    { title: "Yetki hangi organda? (2017 sonrası)", unit: "yurutme",
      groups: ["Yasama (TBMM)", "Yürütme (Cumhurbaşkanı)"],
      items: [
        { t: "Kanun koymak, değiştirmek, kaldırmak", g: 0 },
        { t: "Bütçeyi görüşüp kabul etmek", g: 0 },
        { t: "Savaş ilanına karar vermek", g: 0 },
        { t: "Cumhurbaşkanlığı kararnamesi çıkarmak", g: 1 },
        { t: "Bakanları atamak ve görevden almak", g: 1 },
        { t: "OHAL ilan etmek", g: 1 }
      ],
      exp: "Yasama (kanun, bütçe, savaş ilanı) TBMM'nin; yürütme (kararname, bakan atama, OHAL) Cumhurbaşkanı'nın yetkisindedir." },

    { title: "Hangi yargı kolu / kurum?", unit: "yargi",
      groups: ["Adli yargı (Yargıtay)", "İdari yargı (Danıştay)", "Anayasa yargısı (AYM)"],
      items: [
        { t: "Ceza ve hukuk (özel hukuk) davaları", g: 0 },
        { t: "Temyiz mercii Yargıtay'dır", g: 0 },
        { t: "İdarenin işlemlerine karşı açılan davalar", g: 1 },
        { t: "Temyiz mercii Danıştay'dır", g: 1 },
        { t: "Kanunların anayasaya uygunluk denetimi", g: 2 },
        { t: "Bireysel başvuruların incelenmesi", g: 2 }
      ],
      exp: "Adli yargı bireyler arası ve ceza davalarına (Yargıtay), idari yargı idarenin işlemlerine (Danıştay), anayasa yargısı norm denetimi ve bireysel başvuruya (AYM) bakar." },

    { title: "Hangi anayasa?", unit: "guncel-uluslararasi",
      groups: ["1921", "1924", "1961", "1982"],
      items: [
        { t: "İlk TBMM anayasası, meclis hükümeti", g: 0 },
        { t: "En uzun süre yürürlükte kalan", g: 1 },
        { t: "AYM ve çift meclisi getiren, en özgürlükçü", g: 2 },
        { t: "Halen yürürlükte, 2017'de kapsamlı değişti", g: 3 }
      ],
      exp: "1921: ilk TBMM anayasası, güçler birliği. 1924: en uzun yürürlükte kalan. 1961: AYM + çift meclis, en özgürlükçü. 1982: yürürlükteki anayasa." },

    { title: "Merkezi yönetim mi, yerel yönetim mi?", unit: "idare",
      groups: ["Merkezi yönetim (atama ile)", "Yerel yönetim (seçim ile)"],
      items: [
        { t: "Vali", g: 0 },
        { t: "Kaymakam", g: 0 },
        { t: "Bakanlıklar", g: 0 },
        { t: "Belediye", g: 1 },
        { t: "İl özel idaresi", g: 1 },
        { t: "Köy (muhtarlık)", g: 1 }
      ],
      exp: "Merkezi yönetim birimleri atamayla yönetilir (vali, kaymakam, bakanlıklar). Yerel yönetimlerin (belediye, il özel idaresi, köy) başındakiler ise seçimle gelir." }
  ],

  // ---------- BİLGİ KARTLARI ----------
  cards: [
    { front: "Hukukun temel kavramları", back: "HUKUK KURALI: uyulması zorunlu, yaptırımı devlet gücüyle • YAPTIRIM türleri: ceza, cebri icra, tazminat, iptal, hükümsüzlük • ÖZEL HUKUK (taraflar eşit): Medeni, Borçlar, Ticaret • KAMU HUKUKU (devlet üstün): Anayasa, Ceza, İdare, Vergi", unit: "hukuk-temel" },
    { front: "Devlet ve hükûmet sistemleri", back: "Devletin unsurları: ÜLKE + MİLLET + EGEMENLİK • Yapı: ÜNİTER (Türkiye) / FEDERAL • Hükûmet sistemleri: PARLAMENTER, BAŞKANLIK, YARI-BAŞKANLIK, MECLİS HÜKÜMETİ • Türkiye 2017'den beri Cumhurbaşkanlığı (başkanlık tipi) sistemiyle yönetilir", unit: "devlet-sistemler" },
    { front: "Değiştirilemez maddeler (ilk 3)", back: "1. Devletin şekli Cumhuriyettir • 2. Demokratik, laik, sosyal hukuk devleti; insan haklarına saygılı, Atatürk milliyetçiliğine bağlı • 3. Bölünmez bütünlük, dili Türkçe, bayrak, İstiklal Marşı, başkent Ankara • (4. madde bu yasağın güvencesidir)", unit: "anayasa-esaslar" },
    { front: "Anayasa değişikliği formülü", back: "TEKLİF: 200 imza (1/3) • GÖRÜŞME: gizli oy • 360-399 oy: zorunlu referandum • 400+ oy: CB onaylar VEYA referanduma sunar • CB geri gönderebilir", unit: "anayasa-esaslar" },
    { front: "Temel hakların sınıflandırılması", back: "KİŞİ HAKLARI (negatif statü-koruyucu): yaşama, konut dokunulmazlığı • SOSYAL-EKONOMİK (pozitif statü-isteme): eğitim, sağlık, çalışma • SİYASİ (aktif statü-katılma): seçme-seçilme, vatandaşlık, dilekçe", unit: "temel-haklar" },
    { front: "Temel hakların sınırlanması", back: "Ancak KANUNLA • Anayasadaki sebeplere bağlı • Öze dokunma yasağı • Ölçülülük ilkesi • Laik Cumhuriyet gerekleri ve eşitlik gözetilir (md. 13)", unit: "temel-haklar" },
    { front: "TBMM temel sayıları", back: "600 üye • Seçilme yaşı 18 • 5 yılda bir seçim • Toplantı yeter sayısı 200 • Karar yeter sayısı en az 151 • Salt çoğunluk 301 • Seçim barajı %7", unit: "yasama" },
    { front: "Kanunların yapılışı", back: "Teklif: yalnızca milletvekilleri • CB 15 günde yayımlar veya geri gönderir • Meclis 301 oyla aynen kabul ederse CB yayımlamak ZORUNDA • Bütçe teklifini CB sunar", unit: "yasama" },
    { front: "Seçim ilkeleri", back: "Serbest • Genel oy • Eşit • Gizli oy • Tek dereceli • Açık sayım-döküm • Yargı yönetim ve denetiminde (YSK) • Baraj: %7 (2022'den beri) • Seçmen yaşı: 18", unit: "yasama" },
    { front: "Oy kullanamayanlar", back: "Silah altındaki er ve erbaşlar • Askeri öğrenciler • Kasıtlı suçtan hükümlüler (taksirli suç hükümlüleri ve tutuklular OY KULLANABİLİR)", unit: "yasama" },
    { front: "Cumhurbaşkanlığı şartları", back: "40 yaş • Yükseköğrenim • Milletvekili seçilme yeterliliği • Halk seçer (ilk halk seçimi 2014) • 5 yıl + en fazla 2 dönem (istisna: 2. dönemde Meclis seçim yenilerse 3. kez aday olabilir)", unit: "yurutme" },
    { front: "Kuvvetler (erkler)", back: "YASAMA: TBMM • YÜRÜTME: Cumhurbaşkanı (2017 sonrası tek başlı; Başbakanlık kaldırıldı) • YARGI: Bağımsız ve tarafsız mahkemeler", unit: "yurutme" },
    { front: "CB'nin cezai sorumluluğu", back: "Soruşturma önergesi: 301 (salt çoğunluk) • Soruşturma açılması: 360 (3/5, gizli oy) • Yüce Divan'a sevk: 400 (2/3, gizli oy) • Yüce Divan = Anayasa Mahkemesi", unit: "yurutme" },
    { front: "OHAL rejimi", back: "Cumhurbaşkanı ilan eder • En fazla 6 ay • Aynı gün Resmî Gazete + TBMM onayı • TBMM 4'er ay uzatabilir • Sıkıyönetim 2017'de kaldırıldı", unit: "yurutme" },
    { front: "Yüksek mahkemeler (2017 sonrası)", back: "Anayasa Mahkemesi • Yargıtay (adli temyiz) • Danıştay (idari temyiz) • Uyuşmazlık Mahkemesi • DİKKAT: Sayıştay ve YSK yüksek mahkeme DEĞİLDİR; askeri yüksek yargı kaldırıldı", unit: "yargi" },
    { front: "Anayasa Mahkemesi", back: "15 üye (3'ü TBMM, 12'si CB seçer) • Görev süresi 12 yıl • Norm denetimi + bireysel başvuru (2012) + Yüce Divan + parti kapatma • Kararları kesindir, herkesi bağlar", unit: "yargi" },
    { front: "HSK", back: "13 üye • Başkan: Adalet Bakanı • Bakan yardımcısı doğal üye • Hâkim-savcıların mesleğe kabul, atama, disiplin işleri • Hâkimler azlolunamaz, 65 yaş emeklilik", unit: "yargi" },
    { front: "İdari yapı", back: "MERKEZİ: il (vali) - ilçe (kaymakam); vali ve kaymakam atanır • YEREL: belediye, il özel idaresi, köy; başkan ve muhtar seçilir • 81 il, 30 büyükşehir", unit: "idare" },
    { front: "Denetim kurumları", back: "SAYIŞTAY: TBMM adına mali denetim (yüksek mahkeme değil) • KAMU DENETÇİLİĞİ (Ombudsman): TBMM'ye bağlı, idareyi denetler, başdenetçiyi TBMM 4 yıl için seçer • DDK: Cumhurbaşkanlığına bağlı", unit: "idare" },
    { front: "Anayasalarımız", back: "1876 Kanun-i Esasi (ilk) • 1921: ilk TBMM anayasası, güçler birliği, tek yumuşak anayasa • 1924: en uzun yürürlükte • 1961: AYM + çift meclis, en özgürlükçü • 1982: yürürlükte • 2017: CB Hükûmet Sistemi", unit: "guncel-uluslararasi" },
    { front: "Uluslararası üyelikler", back: "BM: 1945 kurucu üye • Avrupa Konseyi: 1949 • NATO: 1952 • AİHM bireysel başvuru: 1987 • AB süreci: 1963 Ankara Anl. → 1987 başvuru → 1996 Gümrük Birliği → 1999 adaylık → 2005 müzakere", unit: "guncel-uluslararasi" }
  ],

  // =====================================================
  //  ÖSYM KPSS ÇIKMIŞ SORULAR – VATANDAŞLIK
  // =====================================================
  cikmis: [
    // ---------- 2024 KPSS ----------
    { q: "2017 Anayasa değişiklikleriyle birlikte Türkiye'de yürütme yetkisi kime verilmiştir?", o: ["Cumhurbaşkanına", "Başbakana", "TBMM'ye", "Bakanlar Kurulu'na"], a: 0, exp: "2017 anayasa referandumuyla Türkiye Cumhurbaşkanlığı Hükûmet Sistemi'ne geçildi; yürütme yetkisi tek başına Cumhurbaşkanına tanındı, Başbakanlık kaldırıldı.", cikmis: true, year: 2024 },
    { q: "Anayasamıza göre TBMM'nin olağan toplantı dönemi ne zamandır?", o: ["Her yıl 1 Ekim'de başlar", "Her yıl 23 Nisan'da başlar", "Her yıl 1 Ocak'ta başlar", "Her yıl 1 Temmuz'da başlar"], a: 0, exp: "1982 Anayasası'na göre TBMM her yıl kendiliğinden 1 Ekim'de toplanır; çalışma süresi bir yasama yılıdır (yaklaşık 9-10 ay).", cikmis: true, year: 2024 },
    { q: "Anayasa Mahkemesi'ne bireysel başvuru hakkı hangi yılda tanınmıştır?", o: ["2010 anayasa değişiklikleriyle", "1982 Anayasası'nda zaten vardı", "2017 değişiklikleriyle", "2004 AB uyum yasalarıyla"], a: 0, exp: "2010 referandumuyla 1982 Anayasası'na eklenen madde ile 2012'den itibaren bireysel başvuru (anayasa şikâyeti) hakkı yürürlüğe girdi.", cikmis: true, year: 2024 },
    { q: "Türkiye'de milletvekilliği genel seçimleri kaç yılda bir yapılır?", o: ["5 yılda bir", "4 yılda bir", "7 yılda bir", "6 yılda bir"], a: 0, exp: "2017 anayasa değişikliklerinden önce 4 yıl olan seçim dönemi, yeni sistemle Cumhurbaşkanlığı seçimiyle aynı anda 5 yılda bir yapılmak üzere değiştirildi.", cikmis: true, year: 2024 },
    { q: "Türkiye Cumhuriyeti Anayasası'na göre temel hak ve özgürlükler hangi durumlarda kısıtlanabilir?", o: ["Anayasa'nın özüne dokunulmaksızın, kanunla, ölçülülük ilkesine uyarak", "Cumhurbaşkanı kararnamesiyle, her zaman", "Yalnızca savaş döneminde, kanun gerekmez", "TBMM kararıyla, herhangi bir koşul aranmaz"], a: 0, exp: "Madde 13'e göre temel haklar; Anayasa'nın sözüne ve ruhuna, demokratik toplum düzeninin gereklerine ve ölçülülük ilkesine uygun biçimde kanunla sınırlandırılabilir.", cikmis: true, year: 2024 },
    { q: "Türkiye'de seçimlerde oy kullanma yaşı kaçtır?", o: ["18", "21", "25", "17"], a: 0, exp: "2017 anayasa değişikliğiyle seçilme yaşı 25'ten 18'e indirildi; oy kullanma yaşı ise zaten 1987'den beri 18'dir.", cikmis: true, year: 2024 },
    { q: "Türk hukukunda 'yasama dokunulmazlığı' kimler için geçerlidir?", o: ["TBMM üyeleri (milletvekilleri)", "Tüm kamu görevlileri", "Cumhurbaşkanı ve bakanlar", "Tüm yargı mensupları"], a: 0, exp: "Anayasa'nın 83. maddesi uyarınca milletvekilleri, yasama faaliyetleri nedeniyle sorumlu tutulamaz (mutlak dokunulmazlık); cezai kovuşturma için ise TBMM kararı gerekir (nispi dokunulmazlık).", cikmis: true, year: 2024 },
    { q: "Türk Anayasası'na göre Cumhurbaşkanlığı görev süresi ve seçilme koşulu nedir?", o: ["5 yıl, en fazla iki dönem; 18 yaşında ve lisans mezunu olmak", "4 yıl, sınırsız dönem", "7 yıl, tek dönem", "5 yıl, en fazla iki dönem; 40 yaşında olmak"], a: 0, exp: "Madde 101 uyarınca Cumhurbaşkanı; 40 yaşını doldurmuş, yükseköğrenim yapmış, milletvekili seçilme yeterliliğine sahip olmalı; 5 yıllık iki dönemle sınırlıdır.", cikmis: true, year: 2024 },
    { q: "Olağanüstü Hal (OHAL) döneminde Cumhurbaşkanlığı kararnamelerinin kapsamı nasıl değişir?", o: ["Temel hakları kısıtlayan düzenlemeler de yapılabilir, ancak TBMM denetimi sürer", "TBMM tamamen devre dışı kalır", "Anayasa Mahkemesi kararnameleri denetleyemez", "Kararnameler yargısal denetimden muaftır"], a: 0, exp: "OHAL döneminde çıkarılan CBK'lar (Olağanüstü Hal KHK'ları) daha geniş alan kapsar; ancak TBMM her an toplanabilir, kararnameleri iptal edebilir.", cikmis: true, year: 2024 },
    { q: "Anayasa'ya göre kanun teklifi verme yetkisi kimlere aittir?", o: ["Milletvekilleri ve Cumhurbaşkanına", "Yalnızca milletvekillerine", "Yalnızca Cumhurbaşkanına", "Vatandaşlara ve STK'lara"], a: 0, exp: "2017 değişikliğiyle hükümetin 'kanun tasarısı' verme yetkisi kaldırıldı; artık kanun teklifi yalnızca milletvekilleri ve Cumhurbaşkanı tarafından verilebilir.", cikmis: true, year: 2024 },

    // ---------- 2023 KPSS ----------
    { q: "Türk Anayasası'na göre mahkemelerin bağımsızlığı ilkesinin anlamı nedir?", o: ["Hâkimler ve savcılar, yargılama faaliyetlerinde hiçbir organ, makam ya da kişiden emir ve talimat alamaz", "Yargı organları, yasama ve yürütmeye raporlamak zorundadır", "Cumhurbaşkanı davaları doğrudan sonuçlandırabilir", "Mahkemeler yalnızca yürütmenin kararlarını uygular"], a: 0, exp: "Anayasa'nın 138. maddesi: 'Hâkimler görevlerinde bağımsızdırlar; Anayasa'ya, kanuna ve hukuka uygun olarak vicdani kanaatlerine göre hüküm verirler.'", cikmis: true, year: 2023 },
    { q: "Türkiye'de temel haklar hangi kategorilere ayrılmaktadır?", o: ["Kişi hakları, sosyal ve ekonomik haklar, siyasi haklar", "Medeni haklar ve yükümlülükler", "Doğal haklar ve pozitif haklar", "Yalnızca vatandaşlara tanınan haklar"], a: 0, exp: "1982 Anayasası temel hakları; kişinin hakları ve ödevleri (II. bölüm), sosyal ve ekonomik haklar (III. bölüm) ile siyasi haklar ve ödevler (IV. bölüm) olarak sınıflandırır.", cikmis: true, year: 2023 },
    { q: "Türkiye Büyük Millet Meclisi'nin toplam üye sayısı kaçtır?", o: ["600", "550", "500", "450"], a: 0, exp: "2017 anayasa değişikliğiyle TBMM üye sayısı 550'den 600'e çıkarıldı.", cikmis: true, year: 2023 },
    { q: "Türk Anayasası'na göre devletin nitelikleri (başlangıç maddeleri) arasında hangisi yer almaz?", o: ["Federal devlet olma", "Demokratik devlet", "Laik devlet", "Sosyal devlet"], a: 0, exp: "Anayasa'nın 2. maddesi Türkiye Cumhuriyeti'ni 'demokratik, laik ve sosyal bir hukuk devleti' olarak tanımlar; federalizm yer almaz.", cikmis: true, year: 2023 },
    { q: "Seçim kanununa göre siyasi partilerin TBMM'ye girebilmesi için gerekli seçim barajı nedir?", o: ["%7 (2022'den itibaren)", "%10", "%5", "%3"], a: 0, exp: "2022 yılında yapılan değişiklikle seçim barajı %10'dan %7'ye indirildi.", cikmis: true, year: 2023 },
    { q: "Anayasamıza göre Yüce Divan sıfatıyla yargılama yapan mahkeme hangisidir?", o: ["Anayasa Mahkemesi", "Yargıtay", "Danıştay", "Uyuşmazlık Mahkemesi"], a: 0, exp: "Anayasa Mahkemesi, Cumhurbaşkanı, TBMM Başkanı, bakanlar ve yüksek yargı mensuplarını görevleriyle ilgili suçlardan dolayı Yüce Divan sıfatıyla yargılar.", cikmis: true, year: 2023 },
    { q: "Türkiye'de kamu denetçiliği kurumu (ombudsman) hangi organa bağlıdır?", o: ["Türkiye Büyük Millet Meclisi (TBMM)", "Cumhurbaşkanlığı", "Danıştay", "Anayasa Mahkemesi"], a: 0, exp: "Kamu Denetçiliği Kurumu (Ombudsman), TBMM'ye bağlı olarak idarenin eylem ve işlemlerini denetler; Baş Denetçi TBMM tarafından seçilir.", cikmis: true, year: 2023 },
    { q: "Cumhurbaşkanlığı kararnamesi ile kanun arasında çelişki olduğunda hangisi uygulanır?", o: ["Kanun uygulanır", "CBK uygulanır", "İkisi eş değerde, mahkeme karar verir", "Anayasa Mahkemesi kararla belirler"], a: 0, exp: "Anayasa'nın 104. maddesine göre kanunla çelişen Cumhurbaşkanlığı kararnamesi hükümleri, o alanda kanun geçerli olduğundan uygulanamaz.", cikmis: true, year: 2023 },
    { q: "Türk Anayasası'na göre temel hak ve özgürlüklerin özü zedelenebilir mi?", o: ["Hayır, hiçbir şekilde zedelenemiyor", "Evet, kanunla zedelenebilir", "Evet, OHAL döneminde", "Evet, uluslararası sözleşmelerle"], a: 0, exp: "Madde 13: 'Temel hak ve özgürlüklere ilişkin sınırlamalar … hakkın özüne dokunamaz.' Bu kural mutlak niteliktedir.", cikmis: true, year: 2023 },
    { q: "Türk Anayasası'na göre hangi mahkemeler 'yüksek mahkeme' sayılmaktadır?", o: ["Anayasa Mahkemesi, Yargıtay, Danıştay, Uyuşmazlık Mahkemesi", "Sayıştay ve YSK da dahildir", "TBMM'nin denetlediği tüm mahkemeler", "Yalnızca Anayasa Mahkemesi"], a: 0, exp: "2017 sonrası yüksek mahkemeler: Anayasa Mahkemesi, Yargıtay (adli yargı), Danıştay (idari yargı) ve Uyuşmazlık Mahkemesi. Askeri yüksek yargı kaldırıldı.", cikmis: true, year: 2023 },

    // ---------- 2022 KPSS ----------
    { q: "Türkiye Cumhuriyeti Anayasası ilk ne zaman yürürlüğe girmiştir?", o: ["1982", "1961", "1924", "1876"], a: 0, exp: "Yürürlükteki 1982 Anayasası, 7 Kasım 1982'de halk oylamasıyla kabul edilerek yürürlüğe girdi.", cikmis: true, year: 2022 },
    { q: "Türk Anayasası'na göre olağanüstü hal en fazla ne kadar süre ilan edilebilir?", o: ["6 ay; TBMM 4'er aylık dönemlerle uzatabilir", "3 ay; süre uzatılamaz", "1 yıl; sınırsız uzatılabilir", "2 yıl; TBMM onayıyla"], a: 0, exp: "Madde 119: Cumhurbaşkanı, Cumhurbaşkanlığı Kararnamesiyle en fazla 6 aylık OHAL ilan edebilir; TBMM süreyi 4'er aylık dönemlerle uzatabilir.", cikmis: true, year: 2022 },
    { q: "Türkiye'de anayasa değişikliği için TBMM'de gereken asgari oy sayısı nedir?", o: ["Üye tam sayısının 3/5'i (360 oy)", "Üye tam sayısının salt çoğunluğu (301 oy)", "Üye tam sayısının 2/3'ü (400 oy)", "Oylamaya katılanların salt çoğunluğu"], a: 0, exp: "Madde 175: Anayasa değişiklikleri 360 oy (3/5) ile kabul edilir ve Cumhurbaşkanı halkoyuna sunabilir; 400 oy (2/3) ile kabul edilirse Cumhurbaşkanı halkoyuna sunmak zorundadır.", cikmis: true, year: 2022 },
    { q: "Türk Anayasası'na göre vatandaşların anayasal hakları arasında hangisi 'siyasi hak' olarak değil 'kişisel hak' olarak sınıflandırılır?", o: ["Kişi özgürlüğü ve güvenliği hakkı", "Seçme ve seçilme hakkı", "Siyasi parti kurma hakkı", "Halk oylamasına katılma hakkı"], a: 0, exp: "Kişi özgürlüğü ve güvenliği Anayasa'nın II. Bölümü'nde (kişi hakları) düzenlenir; seçme-seçilme, parti kurma ve referandum hakları ise IV. Bölüm'de (siyasi haklar) yer alır.", cikmis: true, year: 2022 },
    { q: "Türkiye'de hangi organ devlet bütçesini denetler?", o: ["Sayıştay (TBMM adına)", "Danıştay", "Anayasa Mahkemesi", "Cumhurbaşkanlığı Denetim Kurumu"], a: 0, exp: "Sayıştay, TBMM adına kamu idarelerinin hesaplarını ve mali işlemlerini denetler; kesin hesap kanunu incelemesini de Sayıştay raporuna dayanarak TBMM yapar.", cikmis: true, year: 2022 },
    { q: "Anayasa'ya göre Türk vatandaşlığı nasıl kazanılır?", o: ["Doğumla veya sonradan kanunda belirtilen koşullarla", "Yalnızca doğumla", "Yalnızca Cumhurbaşkanı kararıyla", "TBMM kararıyla"], a: 0, exp: "Madde 66: Türk Devleti'ne vatandaşlık bağıyla bağlı olan herkes Türktür; Türk anası veya babasından doğanlar doğumla Türk vatandaşı olur, sonradan kazanım ise kanunla düzenlenir.", cikmis: true, year: 2022 },
    { q: "Türkiye'de milletvekili seçilebilmek için aranan yaş koşulu nedir?", o: ["18 yaşını doldurmuş olmak", "25 yaşını doldurmuş olmak", "21 yaşını doldurmuş olmak", "30 yaşını doldurmuş olmak"], a: 0, exp: "2017 anayasa değişikliğiyle milletvekili seçilme yaşı 25'ten 18'e indirildi.", cikmis: true, year: 2022 },
    { q: "Türk Anayasası'na göre hâkimlerin azledilememesinin temel amacı nedir?", o: ["Yargı bağımsızlığını güvence altına almak", "Hâkimleri hesap vermekten muaf tutmak", "Siyasi iktidarı denetlemek", "Yargıyı yasamadan üstün kılmak"], a: 0, exp: "Hâkimler, emeklilik veya kanunla belirlenen istisnalar dışında görevden alınamazlar; bu güvence yargı bağımsızlığını siyasi baskılardan korumak için öngörülmüştür.", cikmis: true, year: 2022 }
  ]
};
