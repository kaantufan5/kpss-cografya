// KPSS Arena - ÜNİTE (konu) kayıtları
// KPSS Genel Kültür müfredatına göre her dersin konu başlıkları.
// Hem js/app.js (ünite haritası + filtreleme) hem test-data.js bu listeyi kullanır.
// İçerik öğeleri (data/tarih.js vb.) "unit" alanında buradaki id'lerden birini taşır.
// Boş dizi olan dersler (cografya, vatandaslik) henüz ünite yapısına geçmedi;
// app.js bunları eski "düz oyun listesi" akışıyla gösterir (geriye uyumluluk).
window.KPSS_DATA = window.KPSS_DATA || {};

window.KPSS_DATA._units = {
  tarih: [
    { id: "islamiyet-oncesi", name: "İslamiyet Öncesi Türk Tarihi", icon: "🐺", desc: "İlk Türk devletleri, bozkır kültürü ve uygarlık." },
    { id: "ilk-turk-islam",   name: "İlk Türk-İslam Devletleri",     icon: "🕌", desc: "Talas, Karahanlı, Gazneli, Selçuklular ve beylikler." },
    { id: "osmanli-kurulus",  name: "Osmanlı Kuruluş Dönemi",        icon: "🌱", desc: "1299-1453: kuruluş, ilk fetihler, Fetret Devri." },
    { id: "osmanli-yukselme", name: "Osmanlı Yükselme Dönemi",       icon: "⚔️", desc: "1453-1579: İstanbul'un fethi, Yavuz ve Kanuni." },
    { id: "osmanli-duraklama",name: "Duraklama ve Gerileme",         icon: "🛡️", desc: "17-18. yüzyıl: ıslahatlar, savaşlar, antlaşmalar." },
    { id: "osmanli-dagilma",  name: "Dağılma ve 19. yy Islahatları", icon: "📉", desc: "Tanzimat, Meşrutiyet, dağılma süreci." },
    { id: "kultur-medeniyet", name: "Kültür ve Medeniyet",           icon: "🏛️", desc: "Devlet yönetimi, ordu, toprak, eğitim, sanat." },
    { id: "birinci-dunya",    name: "20. yy Başı ve I. Dünya Savaşı", icon: "💥", desc: "Trablusgarp, Balkan Savaşları, I. Dünya Savaşı cepheleri." },
    { id: "kurtulus-savasi",  name: "Kurtuluş Savaşı",               icon: "🎖️", desc: "Genelgeler, kongreler, cepheler, antlaşmalar." },
    { id: "inkilaplar",       name: "Atatürk İlke ve İnkılapları",   icon: "✒️", desc: "Siyasi, hukuki, eğitim, ekonomi inkılapları ve ilkeler." },
    { id: "dis-politika",     name: "Atatürk Dönemi Dış Politika",   icon: "🤝", desc: "1923-1938 dış ilişkiler: Lozan'dan Hatay'a." },
    { id: "cagdas",           name: "Çağdaş Türk ve Dünya Tarihi",   icon: "🌐", desc: "II. Dünya Savaşı, soğuk savaş ve sonrası." }
  ],
  cografya: [
    { id: "konum",             name: "Türkiye'nin Konumu",        icon: "📍", desc: "Matematik ve özel konum, sınırlar, uç noktalar." },
    { id: "yer-sekilleri",     name: "Yer Şekilleri",             icon: "⛰️", desc: "Dağlar, ovalar, platolar; iç ve dış kuvvetler." },
    { id: "akarsu-goller",     name: "Su Kaynakları",             icon: "💧", desc: "Akarsular, göller ve oluşum türleri." },
    { id: "iklim",             name: "İklim ve Bitki Örtüsü",     icon: "🌦️", desc: "İklim tipleri, sıcaklık, yağış, bitki örtüsü." },
    { id: "nufus-yerlesme",    name: "Nüfus ve Yerleşme",         icon: "👥", desc: "Nüfus dağılışı, göç, yerleşme tipleri." },
    { id: "tarim-hayvancilik", name: "Tarım ve Hayvancılık",      icon: "🌾", desc: "Tarım ürünleri, yöreler, hayvancılık." },
    { id: "madenler-enerji",   name: "Madenler ve Enerji",        icon: "⛏️", desc: "Madenler, enerji kaynakları, barajlar." },
    { id: "sanayi-ulasim",     name: "Sanayi, Ulaşım, Turizm",    icon: "🏭", desc: "Sanayi kolları, ulaşım, ticaret ve turizm." },
    { id: "bolgeler",          name: "Coğrafi Bölgeler",          icon: "🗺️", desc: "7 bölgenin özellikleri ve 'en'leri." }
  ],
  vatandaslik: [
    { id: "hukuk-temel",         name: "Hukukun Temel Kavramları",   icon: "⚖️", desc: "Hukuk kuralları, yaptırımlar, hukuk dalları." },
    { id: "devlet-sistemler",    name: "Devlet ve Hükûmet Sistemleri", icon: "🏛️", desc: "Devletin unsurları, yönetim ve hükûmet biçimleri." },
    { id: "anayasa-esaslar",     name: "Anayasa ve Temel Esaslar",   icon: "📜", desc: "Anayasa türleri, değiştirilemez maddeler, nitelikler." },
    { id: "temel-haklar",        name: "Temel Hak ve Ödevler",       icon: "🕊️", desc: "Hakların sınıflandırılması, sınırlanması, ödevler." },
    { id: "yasama",              name: "Yasama (TBMM)",              icon: "🗳️", desc: "TBMM yapısı, görevleri, seçimler, dokunulmazlık." },
    { id: "yurutme",             name: "Yürütme (Cumhurbaşkanı)",    icon: "👤", desc: "Cumhurbaşkanı, kararname, OHAL, yürütme yetkisi." },
    { id: "yargi",               name: "Yargı",                      icon: "👨‍⚖️", desc: "Mahkemeler, AYM, HSK, yargı kolları." },
    { id: "idare",               name: "İdare ve Yönetim",           icon: "🏢", desc: "Merkezi-yerel yönetim, vali, belediye, denetim." },
    { id: "guncel-uluslararasi", name: "Güncel ve Uluslararası",     icon: "🌍", desc: "Anayasa tarihimiz, BM, NATO, AB, insan hakları." }
  ],
  matematik: [
    { id: "uslu-koklu",          name: "Üs, Kök ve Sayı Ezberleri",  icon: "🔢", desc: "Kareler, küpler, faktöriyeller, asal sayı tuzakları ve hızlı kare alma." },
    { id: "kesir-yuzde-ondalik", name: "Kesir, Yüzde ve Ondalık Pratiği", icon: "📊", desc: "Yüzde-kesir-ondalık dönüşümleri, devirli ondalık ve hızlı işlem teknikleri." }
  ]
};
