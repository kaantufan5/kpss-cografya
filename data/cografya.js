// KPSS Arena - COĞRAFYA veri dosyası
// Nüfus verileri: TÜİK Adrese Dayalı Nüfus Kayıt Sistemi, 2025 yıl sonu
// (Türkiye: 86.092.168 / İstanbul: ~15,75 milyon / en az nüfuslu il: Bayburt)
// Ünite + zorluk seviyesi yapısına geçirildi (Tarih kalıbı).
window.KPSS_DATA = window.KPSS_DATA || {};

window.KPSS_DATA.cografya = {

  // ---------- BİLGİ YARIŞMASI ----------
  quiz: [
    { q: "Türkiye'nin en kuzey uç noktası (Sinop-İnceburun) ile en güney uç noktası (Hatay-Beysun) arasındaki kuş uçuşu mesafe yaklaşık kaç kilometredir?", o: ["766 km", "666 km", "866 km", "566 km"], a: 0, exp: "Türkiye'nin en kuzey (42° K) ve en güney (36° K) enlemleri arasında 6 paralel fark vardır. 6 x 111 = 666 km kuş uçuşu mesafe bulunur. Hata yapmamak için 766 km şıkkı çeldiricidir.", unit: "konum", level: 1 },
    { q: "Türkiye'nin en doğu noktası ile en batı noktası arasında kaç dakikalık yerel saat farkı vardır?", o: ["76 dakika", "19 dakika", "45 dakika", "38 dakika"], a: 0, exp: "Türkiye 26° ve 45° doğu meridyenleri arasındadır. 45 - 26 = 19 boylam farkı vardır. 19 x 4 = 76 dakika yerel saat farkı oluşur.", unit: "konum", level: 1 },
    { q: "Türkiye'nin aşağıdaki özelliklerinden hangisi göreceli (özel) konumunun bir sonucudur?", o: ["Üç tarafının denizlerle çevrili olması", "Dört mevsimin belirgin yaşanması", "Kuzeyden esen rüzgârların sıcaklığı düşürmesi", "Gölge yönünün daima kuzeyi göstermesi"], a: 0, exp: "Denizellik, yükselti, kıtalararası köprü olma göreceli konumdur. Dört mevsim, rüzgâr yönü ve gölge yönü ise matematik (mutlak) konumdur.", unit: "konum", level: 2 },
    { q: "Türkiye'de karstik yer şekillerinin (obruk, lapyalar, travertenler) en yaygın olarak görüldüğü coğrafi bölge hangisidir?", o: ["Akdeniz Bölgesi", "İç Anadolu Bölgesi", "Ege Bölgesi", "Doğu Anadolu Bölgesi"], a: 0, exp: "Kalker (kireçtaşı) yaygınlığı nedeniyle karstik şekiller (Obruk, Polye, traverten) en fazla Akdeniz (Teke ve Taşeli platoları) bölgesindedir.", unit: "yer-sekilleri", level: 1 },
    { q: "Aşağıdaki dağlarımızdan hangisi kıvrımlı dağlar (Antiklinal-Senklinal) sınıfında yer alır?", o: ["Toros Dağları", "Aydın Dağları", "Nemrut Dağı", "Erciyes Dağı"], a: 0, exp: "Toroslar ve Kuzey Anadolu Dağları kıvrımlıdır. Aydın Dağı kırıklı (horst), Nemrut ve Erciyes ise volkaniktir.", unit: "yer-sekilleri", level: 2 },
    { q: "Ege Bölgesi'nde fay hatlarına bağlı olarak çöken ovalara (graben) ne ad verilir?", o: ["Graben", "Horst", "Volkan", "Delta"], a: 0, exp: "Kırıklı sistemde yükselen kısımlar horst (dağ), çöken ovalar ise grabendir (Bakırçay, Gediz, Küçük ve Büyük Menderes grabenleri).", unit: "yer-sekilleri", level: 1 },
    { q: "Türkiye sınırları içinde doğup, Gürcistan üzerinden Karadeniz'e dökülen sınır ötesi akarsuyumuz hangisidir?", o: ["Çoruh Nehri", "Aras Nehri", "Kura Nehri", "Fırat Nehri"], a: 0, exp: "Çoruh Nehri, Bayburt-Erzurum-Artvin dağlarından doğup Batum'da Karadeniz'e dökülür.", unit: "akarsu-goller", level: 2 },
    { q: "Dünyanın en büyük sodalı gölü olan ve üzerinde sönmüş bir volkan barındıran gölümüz hangisidir?", o: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü"], a: 0, exp: "Van Gölü, volkanik set gölüdür; sodalı suyuyla dünyanın en büyük sodalı gölü olup Akdamar Adası ve inci kefaliyle ünlüdür.", unit: "akarsu-goller", level: 1 },
    { q: "Akdeniz iklim bölgesinde ormanların tahrip edilmesiyle oluşan kısa boylu çalılık bitki örtüsüne ne ad verilir?", o: ["Maki", "Bozkır (Step)", "Garig", "Antropojen Bozkır"], a: 0, exp: "Akdeniz ikliminde kızılçam ormanlarının tahribiyle maki, makilerin tahribiyle ise garig (frigana) çalıları oluşur.", unit: "iklim", level: 1 },
    { q: "Karadeniz iklim bölgesinin hakim doğal bitki örtüsü hangisidir?", o: ["Geniş ve iğne yapraklı karma ormanlar", "Maki", "Alp çayırları", "Bozkır"], a: 0, exp: "Karadeniz ikliminde her mevsim yağışlı olduğu için gür, nemli karma (geniş ve iğne yapraklı) ormanlar hakimdir.", unit: "iklim", level: 1 },
    { q: "Türkiye'de nüfus yoğunluğunun en fazla olduğu coğrafi bölge hangisidir?", o: ["Marmara Bölgesi", "Ege Bölgesi", "İç Anadolu Bölgesi", "Akdeniz Bölgesi"], a: 0, exp: "Marmara Bölgesi, yüzölçümünün küçük olması ve nüfusun aşırı fazla (özellikle İstanbul çevresi) olması nedeniyle kilometrekareye en çok insan düşen bölgemizdir.", unit: "nufus-yerlesme", level: 1 },
    { q: "Doğu Karadeniz ve dağlık engebeli yörelerde tarım arazilerinin küçük, su kaynaklarının bol olması nedeniyle hangi yerleşme dokusu yaygındır?", o: ["Dağınık Yerleşme", "Toplu Yerleşme", "Çizgisel Yerleşme", "Dairesel Yerleşme"], a: 0, exp: "Engebeli arazi ve bol su kaynakları nedeniyle evlerin birbirinden uzak yapıldığı dağınık yerleşmeler Karadeniz'de görülür; İç Anadolu'da ise toplu yerleşme yaygındır.", unit: "nufus-yerlesme", level: 2 },
    { q: "Türkiye'de üretim alanı en geniş olan, kuraklığa dayanıklı tahıl ürünü hangisidir?", o: ["Buğday", "Pirinç (Çeltik)", "Mısır", "Pamuk"], a: 0, exp: "Buğday, yaz kuraklığı isteyen ve İç Anadolu başta olmak üzere hemen her bölgemizde yetiştirilen en temel tarım ürünümüzdür.", unit: "tarim-hayvancilik", level: 1 },
    { q: "İpek böcekçiliği ve dut ağacı yaprağı tüketimi denince son yıllarda en çok yaş koza üreten ilimiz hangisidir?", o: ["Diyarbakır", "Bursa", "Antalya", "Bilecik"], a: 0, exp: "Geleneksel olarak Bursa akla gelse de, günümüzde yaş ipek kozası üretiminin büyük kısmı Diyarbakır (özellikle Kulp ilçesi) tarafından gerçekleştirilmektedir.", unit: "tarim-hayvancilik", level: 3 },
    { q: "Türkiye'de rezervi en fazla olan ve kimya, gübre, cam, çimento sanayisinde kullanılan metalik olmayan maden hangisidir?", o: ["Bor Mineralleri", "Krom", "Bakır", "Demir"], a: 0, exp: "Türkiye dünya bor rezervlerinin %70'inden fazlasına sahiptir. Eskişehir, Kütahya, Balıkesir yörelerinde yoğunlaşmıştır.", unit: "madenler-enerji", level: 1 },
    { q: "Türkiye'nin ilk nükleer güç santrali (NGS) hangi ilimizde inşa edilmektedir?", o: ["Mersin (Akkuyu)", "Sinop", "Kırklareli", "Zonguldak"], a: 0, exp: "Türkiye'nin ilk nükleer santrali Mersin-Akkuyu'da Rusya işbirliğiyle inşa edilmektedir. İkincisi ise Sinop'ta planlanmaktadır.", unit: "madenler-enerji", level: 1 },
    { q: "Türkiye'de demir-çelik sanayisinde Karabük ve Ereğli (Zonguldak) fabrikalarının kurulmasının temel nedeni nedir?", o: ["Taş kömürü yataklarına (Enerjiye) yakınlık", "Demir madenine yakınlık", "Liman ve deniz ulaşımı", "İş gücü bolluğu"], a: 0, exp: "Karabük ve Ereğli'de demir madeni çıkmaz (Sivas Divriği'den taşınır); fakat madeni eritmek için gerekli olan yüksek kalorili taş kömürü (enerji) burada olduğu için kurulmuşlardır.", unit: "sanayi-ulasim", level: 2 },
    { q: "Osmanlı Devleti'nde yapılan ilk demiryolu hattı İzmir-Aydın arasındadır. Peki Cumhuriyet döneminde inşa edilen demiryollarının öncelikli hedefi ne olmuştur?", o: ["Maden ocaklarını ve limanları iç kesimlere bağlamak", "Balkanlar ile ticareti artırmak", "Turistik yolculukları geliştirmek", "Metropolleri birleştirmek"], a: 0, exp: "Cumhuriyetin ilk yıllarında demiryolları maden ve tarım bölgelerini limanlara ve sanayi merkezlerine bağlamak amacıyla doğu-batı hattında geliştirilmiştir.", unit: "sanayi-ulasim", level: 3 },
    { q: "Yıl içinde güneşli gün sayısının en fazla olduğu, güneş enerjisi potansiyeli en yüksek bölgemiz hangisidir?", o: ["Güneydoğu Anadolu", "Akdeniz", "İç Anadolu", "Ege"], a: 0, exp: "Güneydoğu Anadolu ve Akdeniz bölgeleri en yüksek güneşli gün sürelerine ve en az bulutluluğa sahip alanlardır.", unit: "bolgeler", level: 1 },
    { q: "Akdeniz Bölgesi'ndeki Teke ve Taşeli platolarının en önemli ortak özelliği nedir?", o: ["Karstik yapıda olmaları ve nüfusun seyrek olması", "Yaz yağışları almaları", "Sanayi faaliyetlerinin gelişmiş olması", "Tarım alanlarının çok geniş olması"], a: 0, exp: "Teke ve Taşeli platoları karstik (kalkerli) arazilerden oluşur; su yer altına sızdığı için tarım zordur, nüfus seyrektir, kıl keçisi beslenir.", unit: "yer-sekilleri", level: 2 },
    { q: "Ege Bölgesi'nde dağların kıyıya dik uzanmasının sonuçlarından biri DEĞİLDİR?", o: ["Kıyı boyunca heyelan olaylarının çok sık görülmesi", "Deniz etkisinin iç kesimlere sokulabilmesi", "Kıyıların oldukça girintili çıkıntılı olması", "Kıyı ile iç kesimler arasında ulaşımın geçit gerektirmeden kolay olması"], a: 0, exp: "Heyelan bol yağış ve killi yapı nedeniyle Karadeniz'de sık görülür, Ege'de dağların uzanışıyla heyelanın ilgisi yoktur. Diğer maddeler dik uzanmanın sonuçlarıdır.", unit: "yer-sekilleri", level: 3 },
    { q: "Türkiye'de buzul aşındırma ve biriktirme şekillerine en fazla hangi alanlarda rastlanabilir?", o: ["2.000 metrenin üzerindeki yüksek dağlık alanlarda", "Marmara kıyı ovalarında", "Tuz Gölü havzasında", "Ege kıyı düzlüklerinde"], a: 0, exp: "Türkiye'nin matematik konumu gereği buzul şekilleri sadece 2.000 m'nin üzerindeki yüksek dağlarda (Kaçkarlar, Aladağlar, Cilo vb.) görülebilir.", unit: "iklim", level: 2 },
    { q: "Akarsuların eğiminin azaldığı, yataklarında yanal aşındırma yaparak kıvrımlar çizdiği yer şekline ne ad verilir?", o: ["Menderes", "Boğaz vadi", "Kanyon", "Kırgıbayır"], a: 0, exp: "Yatak eğiminin azaldığı ve akış hızının düştüğü yerlerde akarsuların çizdiği büklümlere menderes denir. Ege Bölgesi'ndeki menderesler en ünlü örneklerdir.", unit: "akarsu-goller", level: 2 },
    // === KONUM ===
    { q: "Türkiye hangi paralel ve meridyenler arasında yer alır?", o: ["36°-42° Kuzey / 26°-45° Doğu", "26°-45° Kuzey / 36°-42° Doğu", "30°-40° Kuzey / 20°-40° Doğu", "35°-45° Kuzey / 25°-50° Doğu"], a: 0, exp: "Türkiye 36°-42° kuzey paralelleri ile 26°-45° doğu meridyenleri arasındadır; orta kuşakta yer alır.", unit: "konum", level: 1 },
    { q: "Türkiye hangi yarım kürelerde yer alır?", o: ["Kuzey ve Doğu", "Kuzey ve Batı", "Güney ve Doğu", "Güney ve Batı"], a: 0, exp: "Türkiye, Ekvator'un kuzeyinde (kuzey yarım küre) ve Greenwich'in doğusunda (doğu yarım küre) yer alır.", unit: "konum", level: 1 },
    { q: "Türkiye'nin bulunduğu matematik iklim kuşağı hangisidir?", o: ["Orta (ılıman) kuşak", "Tropikal kuşak", "Kutup kuşağı", "Ekvatoral kuşak"], a: 0, exp: "36°-42° kuzey paralelleri arasındaki Türkiye, dört mevsimin belirgin yaşandığı orta (ılıman) kuşaktadır.", unit: "konum", level: 1 },
    { q: "Türkiye'nin en kuzey ucu nerededir?", o: ["Sinop - İnceburun", "Samsun - Bafra Burnu", "İstanbul - Anadolu Feneri", "Zonguldak - Ereğli"], a: 0, exp: "En kuzey: Sinop İnceburun • En güney: Hatay (Topraktutan köyü) • En doğu: Iğdır (Dilucu) • En batı: Gökçeada (Avlaka Burnu).", unit: "konum", level: 1 },
    { q: "Türkiye'nin en doğusu ile en batısı arasındaki yerel saat farkı kaç dakikadır?", o: ["76 dakika", "60 dakika", "45 dakika", "90 dakika"], a: 0, exp: "Doğu-batı meridyen farkı 45-26=19 derecedir. Her meridyen 4 dakika olduğundan 19x4=76 dakika yerel saat farkı vardır.", unit: "konum", level: 2 },
    { q: "Türkiye'nin izdüşüm (harita üzerindeki) yüzölçümü kaç km²'dir?", o: ["783.562 km²", "814.578 km²", "650.000 km²", "900.000 km²"], a: 0, exp: "İzdüşüm alanı 783.562 km²'dir; engebeler dahil gerçek alan yaklaşık 814.578 km²'dir. Aradaki fark, ülkenin engebeli olduğunu gösterir.", unit: "konum", level: 2 },
    { q: "Türkiye'nin en uzun ve en kısa kara sınırı hangi ülkelerledir?", o: ["En uzun: Suriye, en kısa: Azerbaycan (Nahçıvan)", "En uzun: İran, en kısa: Gürcistan", "En uzun: Irak, en kısa: Bulgaristan", "En uzun: Yunanistan, en kısa: Ermenistan"], a: 0, exp: "En uzun kara sınırımız Suriye (911 km), en kısa sınırımız Azerbaycan'a bağlı Nahçıvan iledir. Toplam 8 ülkeyle kara sınırımız vardır.", unit: "konum", level: 2 },
    { q: "Türkiye'nin en büyük adası hangisidir?", o: ["Gökçeada", "Marmara Adası", "Bozcaada", "Büyükada"], a: 0, exp: "Gökçeada (Çanakkale) en büyük adamızdır; Türkiye'nin en batı ucu da (Avlaka Burnu) bu adadadır.", unit: "konum", level: 2 },
    { q: "Aşağıdakilerden hangisi Türkiye'nin MATEMATİK (mutlak) konumunun sonuçlarından biri DEĞİLDİR?", o: ["Üç tarafının denizlerle çevrili olması", "Güneş ışınlarının hiçbir zaman dik açıyla gelmemesi", "Dört mevsimin belirgin yaşanması", "Öğle vakti gölgenin daima kuzeye düşmesi"], a: 0, exp: "Üç tarafının denizlerle çevrili olması ÖZEL konumun bir sonucudur. Diğerleri (güneşin dik gelmemesi, dört mevsim, gölge yönü) enlem/boylama bağlı matematik konum sonuçlarıdır.", unit: "konum", level: 3 },

    // === YER ŞEKİLLERİ ===
    { q: "Türkiye'nin en yüksek dağı hangisidir?", o: ["Ağrı Dağı (5.137 m)", "Erciyes Dağı", "Uludağ", "Süphan Dağı"], a: 0, exp: "Ağrı Dağı (5.137 m) Türkiye'nin en yüksek dağıdır ve volkanik bir dağdır. Erciyes (3.917 m) İç Anadolu'nun en yüksek volkanıdır.", unit: "yer-sekilleri", level: 1 },
    { q: "Pamukkale travertenleri hangi ilimizdedir?", o: ["Denizli", "Nevşehir", "Antalya", "Muğla"], a: 0, exp: "Travertenler, kalsiyum biharbonatlı suların çökelmesiyle oluşur; en ünlü örneği Denizli Pamukkale'dir (UNESCO Dünya Mirası).", unit: "yer-sekilleri", level: 1 },
    { q: "Karstik şekiller (mağara, obruk, polye) hangi kayacın erimesiyle oluşur?", o: ["Kireç taşı (kalker)", "Granit", "Bazalt", "Kumtaşı"], a: 0, exp: "Karstik şekiller, suda kolayca çözünen kireç taşının (kalker) erimesiyle oluşur; en yaygın olduğu yer Akdeniz'deki Toroslardır.", unit: "yer-sekilleri", level: 1 },
    { q: "Peribacaları hangi ilimizdedir ve nasıl oluşmuştur?", o: ["Nevşehir - volkanik tüflerin aşınmasıyla", "Denizli - kalsiyumlu suların birikmesiyle", "Antalya - kalkerin erimesiyle", "Konya - rüzgâr birikimiyle"], a: 0, exp: "Kapadokya'daki (Nevşehir) peribacaları, Erciyes ve Hasandağı'ndan çıkan volkanik tüflerin sel suları ve rüzgârla aşındırılmasıyla oluşmuştur.", unit: "yer-sekilleri", level: 2 },
    { q: "Nemrut, Süphan, Tendürek ve Ağrı volkanik dağları hangi bölgemizdedir?", o: ["Doğu Anadolu", "İç Anadolu", "Akdeniz", "Ege"], a: 0, exp: "Bu volkanik dağlar Doğu Anadolu'da batıdan doğuya 'Nemrut-Süphan-Tendürek-Ağrı' sırasıyla uzanır. İç Anadolu'nun volkanikleri ise Erciyes, Hasandağı, Melendiz, Karadağ ve Karacadağ'dır.", unit: "yer-sekilleri", level: 2 },
    { q: "Ege Bölgesi kıyılarının girintili çıkıntılı olmasının nedeni nedir?", o: ["Dağların kıyıya dik uzanması", "Dağların kıyıya paralel uzanması", "Volkanik arazinin fazlalığı", "Buzul aşındırması"], a: 0, exp: "Ege'de horst-graben sistemiyle dağlar kıyıya dik uzanır; bu yüzden kıyılar girintili çıkıntılıdır ve deniz etkisi iç kesimlere sokulabilir.", unit: "yer-sekilleri", level: 2 },
    { q: "Rüzgâr erozyonu Türkiye'de en çok nerede etkilidir?", o: ["Konya - Karapınar çevresi", "Rize kıyıları", "Bursa ovaları", "Hatay çevresi"], a: 0, exp: "Kurak ve bitki örtüsünden yoksun Karapınar (Konya) çevresi rüzgâr erozyonunun en şiddetli olduğu yerdir; ağaçlandırmayla önlenmeye çalışılır.", unit: "yer-sekilleri", level: 2 },
    { q: "Aşağıdakilerden hangisi bir İÇ KUVVET (yer içi kaynaklı) DEĞİLDİR?", o: ["Akarsu aşındırması", "Volkanizma", "Deprem", "Orojenez (dağ oluşumu)"], a: 0, exp: "Akarsu aşındırması bir DIŞ kuvvettir (güneş enerjisi kaynaklı). Volkanizma, deprem, orojenez ve epirojenez yer içi enerjisiyle çalışan iç kuvvetlerdir.", unit: "yer-sekilleri", level: 3 },

    // === SU KAYNAKLARI ===
    { q: "Tamamı Türkiye sınırları içinde olan en uzun akarsu hangisidir?", o: ["Kızılırmak", "Fırat", "Dicle", "Sakarya"], a: 0, exp: "Kızılırmak (1.355 km), kaynağını ve ağzını Türkiye'de bulunduran en uzun akarsudur; Karadeniz'e dökülür. Fırat daha uzundur ama ülke dışına çıkar.", unit: "akarsu-goller", level: 1 },
    { q: "Türkiye'nin en büyük ve en derin gölü hangisidir?", o: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü"], a: 0, exp: "Van Gölü hem en büyük (3.713 km²) hem en derin (yaklaşık 450 m) gölümüzdür; suyu sodalıdır ve volkanik set gölüdür.", unit: "akarsu-goller", level: 1 },
    { q: "Kızılırmak, Yeşilırmak ve Sakarya nehirleri hangi denize dökülür?", o: ["Karadeniz", "Akdeniz", "Ege Denizi", "Marmara Denizi"], a: 0, exp: "Üçü de Karadeniz'e dökülür. Gediz ve Büyük Menderes Ege'ye, Seyhan ve Ceyhan Akdeniz'e, Susurluk Marmara'ya dökülür.", unit: "akarsu-goller", level: 1 },
    { q: "Van Gölü'nün oluşum tipi nedir?", o: ["Volkanik set gölü", "Tektonik göl", "Karstik göl", "Buzul gölü"], a: 0, exp: "Van Gölü, Nemrut volkanından çıkan lavların çukurluğun önünü kapatmasıyla oluşmuş bir volkanik set gölüdür.", unit: "akarsu-goller", level: 2 },
    { q: "Tuz Gölü'nün oluşum tipi ve bulunduğu bölge hangisidir?", o: ["Tektonik göl - İç Anadolu", "Volkanik set gölü - Doğu Anadolu", "Karstik göl - Akdeniz", "Kıyı set gölü - Marmara"], a: 0, exp: "Tuz Gölü tektonik kökenlidir, İç Anadolu'da kapalı havzada yer alır. Türkiye'nin ikinci büyük gölüdür ve tuz üretiminin önemli kaynağıdır.", unit: "akarsu-goller", level: 2 },
    { q: "Tortum ve Abant gölleri hangi tür göllerdendir?", o: ["Heyelan set gölü", "Volkanik set gölü", "Tektonik göl", "Karstik göl"], a: 0, exp: "Tortum (Erzurum), Abant (Bolu), Sera (Trabzon) ve Yedigöller heyelan set gölleridir. Heyelan, en çok Karadeniz Bölgesi'nde görülür.", unit: "akarsu-goller", level: 2 },
    { q: "Büyükçekmece ve Küçükçekmece gölleri hangi tür göllerdendir?", o: ["Kıyı set gölü (lagün)", "Heyelan set gölü", "Buzul gölü", "Tektonik göl"], a: 0, exp: "Dalga biriktirmesiyle koy önlerinin kapanması sonucu oluşan kıyı set gölleridir (lagün); İstanbul'da yer alırlar.", unit: "akarsu-goller", level: 2 },
    { q: "Fırat ve Dicle nehirleri sularını nereye boşaltır?", o: ["Basra Körfezi", "Karadeniz", "Hazar Denizi", "Akdeniz"], a: 0, exp: "Fırat ve Dicle, Türkiye dışına çıkarak Basra Körfezi'ne dökülür. Aras ve Kura ise Hazar Denizi'ne dökülür.", unit: "akarsu-goller", level: 2 },
    { q: "GAP (Güneydoğu Anadolu Projesi) hangi akarsular üzerinde kurulmuştur?", o: ["Fırat ve Dicle", "Kızılırmak ve Yeşilırmak", "Seyhan ve Ceyhan", "Gediz ve Büyük Menderes"], a: 0, exp: "GAP; Fırat ve Dicle üzerinde, 9 ili (Adıyaman, Batman, Diyarbakır, Gaziantep, Kilis, Mardin, Siirt, Şanlıurfa, Şırnak) kapsayan bütüncül kalkınma projesidir.", unit: "akarsu-goller", level: 2 },

    // === İKLİM ve BİTKİ ÖRTÜSÜ ===
    { q: "Türkiye'nin en fazla yağış alan ili hangisidir?", o: ["Rize", "Antalya", "İstanbul", "Trabzon"], a: 0, exp: "Doğu Karadeniz kıyısındaki Rize, dağların kıyıya paralel uzanması ve nemli hava kütleleri sayesinde en fazla yağışı alır. En az yağış Tuz Gölü çevresine düşer.", unit: "iklim", level: 1 },
    { q: "Her mevsim yağışlı olan iklim tipi hangi bölgemizde görülür?", o: ["Karadeniz", "Akdeniz", "İç Anadolu", "Güneydoğu Anadolu"], a: 0, exp: "Karadeniz ikliminde her mevsim yağış görülür; doğal bitki örtüsü ormandır. Akdeniz'de yazlar sıcak-kurak, bitki örtüsü makidir; iç bölgelerde bozkır görülür.", unit: "iklim", level: 1 },
    { q: "Akdeniz ikliminin doğal bitki örtüsü nedir?", o: ["Maki", "Orman", "Bozkır", "Tundra"], a: 0, exp: "Akdeniz ikliminde yaz kuraklığına dayanıklı, kısa boylu, sürekli yeşil çalılardan oluşan 'maki' görülür. Karadeniz'de orman, iç bölgelerde bozkır (step) hâkimdir.", unit: "iklim", level: 1 },
    { q: "Türkiye'de karasal iklim için aşağıdakilerden hangisi doğrudur?", o: ["Yıllık sıcaklık farkı (amplitüd) fazladır", "Her mevsim bol yağışlıdır", "Kışlar ılık geçer", "Bitki örtüsü gür ormandır"], a: 0, exp: "Karasal iklimde denizden uzaklık nedeniyle yaz-kış sıcaklık farkı (amplitüd) fazladır; yağış azdır, kışlar soğuk-karlı, bitki örtüsü bozkırdır.", unit: "iklim", level: 2 },
    { q: "Türkiye'de kışların en soğuk ve uzun geçtiği bölge hangisidir?", o: ["Doğu Anadolu", "Akdeniz", "Ege", "Marmara"], a: 0, exp: "Yüksek ortalama yükselti ve karasallık nedeniyle Doğu Anadolu'da kışlar çok soğuk ve uzundur.", unit: "iklim", level: 2 },
    { q: "Türkiye'de seracılık en çok hangi bölgede gelişmiştir?", o: ["Akdeniz", "Karadeniz", "Doğu Anadolu", "İç Anadolu"], a: 0, exp: "Kış ılıklığı ve güneşlenme süresi sayesinde Akdeniz (özellikle Antalya) seracılıkta ilk sıradadır.", unit: "iklim", level: 2 },

    // === NÜFUS ve YERLEŞME ===
    { q: "TÜİK 2025 yıl sonu verilerine göre Türkiye'nin nüfusu yaklaşık kaçtır?", o: ["86,1 milyon", "75 milyon", "92 milyon", "80 milyon"], a: 0, exp: "TÜİK'in Şubat 2026'da açıkladığı 2025 yıl sonu verilerine göre Türkiye'nin nüfusu 86.092.168'dir.", unit: "nufus-yerlesme", level: 1 },
    { q: "Türkiye'nin en kalabalık ve en az nüfuslu illeri hangileridir? (TÜİK 2025)", o: ["İstanbul - Bayburt", "Ankara - Tunceli", "İstanbul - Hakkari", "İzmir - Ardahan"], a: 0, exp: "En kalabalık il İstanbul (yaklaşık 15,75 milyon), en az nüfuslu il Bayburt'tur (yaklaşık 83 bin). İstanbul'u Ankara ve İzmir izler.", unit: "nufus-yerlesme", level: 1 },
    { q: "Nüfus yoğunluğu en fazla ve en az olan bölgeler hangileridir?", o: ["Marmara - Doğu Anadolu", "Ege - Karadeniz", "Akdeniz - İç Anadolu", "Marmara - Güneydoğu Anadolu"], a: 0, exp: "Sanayi ve göç nedeniyle Marmara en yoğun; yüksek ve engebeli Doğu Anadolu en seyrek nüfuslu bölgedir.", unit: "nufus-yerlesme", level: 1 },
    { q: "Dağınık yerleşme en çok hangi bölgemizde görülür ve nedeni nedir?", o: ["Karadeniz - engebeli arazi ve bol yağış", "İç Anadolu - su kaynaklarının azlığı", "Akdeniz - turizm", "Marmara - sanayi"], a: 0, exp: "Karadeniz'de arazi engebeli, yağış her yere yeterli olduğundan evler tarlaların yanına dağınık kurulmuştur. Kurak İç Anadolu'da ise su başlarında toplu yerleşme görülür.", unit: "nufus-yerlesme", level: 2 },
    { q: "Türkiye'de en fazla göç VEREN bölge hangisidir?", o: ["Doğu Anadolu", "Marmara", "Ege", "Akdeniz"], a: 0, exp: "İş olanaklarının sınırlı ve iklim koşullarının zor olması nedeniyle Doğu Anadolu en çok göç veren bölgedir; Marmara ise en çok göç alan bölgedir.", unit: "nufus-yerlesme", level: 2 },
    { q: "Yüzölçümü en büyük ve en küçük illerimiz hangileridir?", o: ["Konya - Yalova", "Ankara - Kilis", "Sivas - Bartın", "Erzurum - Düzce"], a: 0, exp: "Konya (yaklaşık 39 bin km²) en büyük, Yalova en küçük yüzölçümlü ilimizdir. Konya Ovası ise en geniş ovamızdır.", unit: "nufus-yerlesme", level: 2 },

    // === TARIM ve HAYVANCILIK ===
    { q: "Türkiye fındık üretiminde dünyada kaçıncı sıradadır ve üretim en çok nerede yapılır?", o: ["1. sırada - Doğu Karadeniz (Ordu, Giresun)", "2. sırada - Akdeniz (Mersin)", "1. sırada - Ege (İzmir)", "3. sırada - Marmara (Bursa)"], a: 0, exp: "Türkiye fındık üretiminde açık ara dünya birincisidir; üretimin merkezi Ordu ve Giresun başta olmak üzere Karadeniz kıyılarıdır.", unit: "tarim-hayvancilik", level: 1 },
    { q: "Çay üretimi Türkiye'de en çok hangi ilde yapılır?", o: ["Rize", "Ordu", "Samsun", "Artvin"], a: 0, exp: "Çay; bol yağış ve ılıman iklim istediğinden Doğu Karadeniz'de, özellikle Rize'de yetiştirilir.", unit: "tarim-hayvancilik", level: 1 },
    { q: "Kayısı üretimiyle ünlü ilimiz hangisidir?", o: ["Malatya", "Manisa", "Aydın", "Gaziantep"], a: 0, exp: "Malatya kayısısı dünyaca ünlüdür; Türkiye kuru kayısı üretim ve ihracatında dünya lideridir. İncir Aydın'da, üzüm Manisa'da öne çıkar.", unit: "tarim-hayvancilik", level: 1 },
    { q: "Muz üretimi Türkiye'de en çok nerede yapılır?", o: ["Anamur ve Alanya çevresi (Akdeniz)", "Rize çevresi (Karadeniz)", "Aydın çevresi (Ege)", "Şanlıurfa (Güneydoğu)"], a: 0, exp: "Muz, sıcaklık isteği yüksek tropikal bir üründür; yalnızca Akdeniz kıyılarında Anamur (Mersin) ve Alanya (Antalya) çevresinde yetişir.", unit: "tarim-hayvancilik", level: 1 },
    { q: "Ekimi devlet (TMO) kontrolünde yapılan haşhaş, en çok hangi ilde yetiştirilir?", o: ["Afyonkarahisar", "Konya", "Rize", "Edirne"], a: 0, exp: "Haşhaş ekimi izne tabidir ve Toprak Mahsulleri Ofisi kontrolündedir; üretim merkezi Afyonkarahisar ve çevresidir.", unit: "tarim-hayvancilik", level: 2 },
    { q: "Türkiye'de en geniş ekiliş alanına sahip tarım ürünü hangisidir?", o: ["Buğday", "Mısır", "Çay", "Pamuk"], a: 0, exp: "Buğday, ülkenin her yerinde yetişebilen ve en geniş ekim alanına sahip ürünümüzdür; İç Anadolu (Konya Ovası) üretim merkezidir.", unit: "tarim-hayvancilik", level: 2 },
    { q: "Büyükbaş hayvancılık (sığır) en çok hangi bölgede yaygındır?", o: ["Doğu Anadolu (Erzurum-Kars platoları)", "Akdeniz kıyıları", "Marmara kıyıları", "Güneydoğu Anadolu"], a: 0, exp: "Geniş çayır ve meralara sahip Erzurum-Kars platoları büyükbaş hayvancılığın merkezidir. Kıl keçisi Akdeniz'de (Toroslar), koyun İç Anadolu'da yaygındır.", unit: "tarim-hayvancilik", level: 2 },

    // === MADENLER ve ENERJİ ===
    { q: "Türkiye hangi madenin dünya rezervinde ilk sıradadır?", o: ["Bor", "Demir", "Bakır", "Taşkömürü"], a: 0, exp: "Türkiye dünya bor rezervinin yaklaşık dörtte üçüne sahiptir. Başlıca yataklar: Eskişehir (Kırka), Kütahya (Emet), Balıkesir (Bigadiç).", unit: "madenler-enerji", level: 1 },
    { q: "Taşkömürü Türkiye'de nereden çıkarılır?", o: ["Zonguldak havzası", "Afşin-Elbistan", "Batman", "Divriği"], a: 0, exp: "Taşkömürü Zonguldak havzasından çıkarılır ve Karabük ile Ereğli demir-çelik tesislerinde kullanılır. Afşin-Elbistan (K.Maraş) en büyük linyit havzasıdır.", unit: "madenler-enerji", level: 1 },
    { q: "Türkiye'de petrol en çok hangi ilde çıkarılır?", o: ["Batman", "Zonguldak", "Eskişehir", "Manisa"], a: 0, exp: "Petrol üretimi en çok Batman (Raman) ve Adıyaman çevresinde yapılır; ilk petrol kuyuları Raman Dağı çevresinde açılmıştır.", unit: "madenler-enerji", level: 1 },
    { q: "Atatürk Barajı hangi akarsu üzerindedir?", o: ["Fırat", "Dicle", "Kızılırmak", "Seyhan"], a: 0, exp: "Türkiye'nin en büyük barajı olan Atatürk Barajı Fırat üzerindedir. Keban ve Karakaya da Fırat'ta; Ilısu Barajı Dicle'dedir.", unit: "madenler-enerji", level: 1 },
    { q: "Krom madeni en çok nerelerden çıkarılır?", o: ["Elazığ (Guleman) ve Fethiye çevresi", "Zonguldak ve Bartın", "Eskişehir ve Kütahya", "Trabzon ve Rize"], a: 0, exp: "Kromun başlıca çıkarım alanları Elazığ-Guleman ile Muğla-Fethiye çevresidir. Demir ise en çok Sivas-Divriği'den çıkarılır.", unit: "madenler-enerji", level: 2 },
    { q: "Jeotermal (sıcak su) enerji potansiyeli en fazla olan bölge hangisidir?", o: ["Ege", "Karadeniz", "Marmara", "Güneydoğu Anadolu"], a: 0, exp: "Ege Bölgesi (Denizli, Aydın, Manisa) fay hatlarının yoğunluğu nedeniyle jeotermal kaynaklar bakımından en zengin bölgedir.", unit: "madenler-enerji", level: 2 },

    // === SANAYİ, ULAŞIM, TURİZM ===
    { q: "Türkiye'nin en gelişmiş sanayi bölgesi hangisidir?", o: ["Marmara", "Doğu Anadolu", "Karadeniz", "Güneydoğu Anadolu"], a: 0, exp: "İstanbul-Kocaeli-Bursa sanayi üçgeni Marmara'dadır; ülke sanayi üretiminin büyük bölümü buradan sağlanır.", unit: "sanayi-ulasim", level: 1 },
    { q: "Türkiye'nin ilk demir-çelik fabrikası nerede kurulmuştur?", o: ["Karabük (1937)", "İskenderun", "Ereğli", "Sivas"], a: 0, exp: "İlk demir-çelik fabrikası 1937'de Karabük'te kurulmuştur; diğerleri Ereğli (Zonguldak) ve İskenderun'dadır (Hatay).", unit: "sanayi-ulasim", level: 1 },
    { q: "Deniz (yaz) turizminde öne çıkan illerimizden biri hangisidir?", o: ["Antalya", "Konya", "Sivas", "Yozgat"], a: 0, exp: "Antalya ve Muğla deniz turizminde liderdir; İstanbul tarih-kültür turizminde öne çıkar. Kapadokya (Nevşehir) ve Pamukkale (Denizli) doğal-kültürel turizm merkezleridir.", unit: "sanayi-ulasim", level: 1 },
    { q: "Kış (kayak) turizmi hangi yer şekliyle doğrudan ilişkilidir?", o: ["Yüksek dağlar (Uludağ, Palandöken)", "Kıyı ovaları", "Deltalar", "Alçak platolar"], a: 0, exp: "Kış turizmi kar yağışının bol ve kalıcı olduğu yüksek dağlarda gelişir: Uludağ (Bursa), Palandöken (Erzurum), Erciyes (Kayseri), Kartalkaya (Bolu).", unit: "sanayi-ulasim", level: 2 },

    // === COĞRAFİ BÖLGELER ===
    { q: "Türkiye'nin coğrafi bölgeleri hangi yıl, hangi kongrede belirlenmiştir?", o: ["1941 - Birinci Coğrafya Kongresi", "1923 - İzmir İktisat Kongresi", "1936 - Montrö Konferansı", "1950 - Ankara Coğrafya Kurultayı"], a: 0, exp: "Türkiye'nin 7 coğrafi bölgesi, 1941'de Ankara'da toplanan Birinci Coğrafya Kongresi'nde belirlenmiştir.", unit: "bolgeler", level: 1 },
    { q: "Yüzölçümü en büyük coğrafi bölge hangisidir?", o: ["Doğu Anadolu", "İç Anadolu", "Karadeniz", "Akdeniz"], a: 0, exp: "En büyük bölge Doğu Anadolu, en küçük bölge Güneydoğu Anadolu'dur. Doğu Anadolu aynı zamanda ortalama yükseltisi en fazla bölgedir.", unit: "bolgeler", level: 1 },
    { q: "Yüzölçümü en küçük coğrafi bölge hangisidir?", o: ["Güneydoğu Anadolu", "Marmara", "Ege", "Akdeniz"], a: 0, exp: "Güneydoğu Anadolu, 7 bölgenin en küçüğüdür. Buharlaşmanın en fazla, güneşlenme süresinin en uzun olduğu bölgedir.", unit: "bolgeler", level: 1 },
    { q: "Ortalama yükseltisi en az olan coğrafi bölge hangisidir?", o: ["Marmara", "Doğu Anadolu", "İç Anadolu", "Güneydoğu Anadolu"], a: 0, exp: "Marmara, ortalama yükseltisi yaklaşık 250 m ile en alçak bölgedir; en yüksek bölge ise Doğu Anadolu'dur.", unit: "bolgeler", level: 2 },
    { q: "Türkiye'nin 'tahıl ambarı' olarak bilinen, buğdayın en çok üretildiği bölge hangisidir?", o: ["İç Anadolu", "Karadeniz", "Marmara", "Ege"], a: 0, exp: "Konya Ovası başta olmak üzere İç Anadolu, yarı kurak iklimi ve geniş düzlükleriyle buğday üretiminin merkezidir.", unit: "bolgeler", level: 2 },
    {"q": "Türkiye'nin üç tarafının denizlerle çevrili olması ve dağların kıyıya uzanış biçimi, aşağıdaki özelliklerden hangisini doğrudan ETKİLEMEZ?", "o": ["Maden yataklarının dağılışını ve zenginliğini", "Kıyı ile iç kesimler arasındaki ulaşım kolaylığını", "Kıyı şeridindeki yağış miktarını", "Denizel etkinin iç kesimlere sokulabilme derecesini"], "a": 0, "exp": "Madenlerin oluşumu ve dağılışı tamamen jeolojik yapıya (yerin derinliklerine) bağlıdır, denizellik veya dağların uzanışıyla ilgisi yoktur.", "unit": "yer-sekilleri", "level": 2},
    {"q": "Türkiye'de heyelan olaylarının en fazla ilkbahar mevsiminde görülmesinin temel sebebi aşağıdakilerden hangisidir?", "o": ["Kar erimelerinin toprağı suya doygun hale getirmesi", "İlkbahar rüzgarlarının kurutucu etkisi", "Tarımsal faaliyetlerin başlaması", "Orman alanlarının bu mevsimde yaprak açması"], "a": 0, "exp": "İlkbaharda sıcaklıkların artmasıyla eriyen karlar toprağa sızar, killi tabakayı kayganlaştırır ve yer çekiminin etkisiyle heyelanları tetikler.", "unit": "iklim", "level": 2},
    {"q": "Aşağıdaki göllerden hangisi karstik erime çukurlarında biriken sularla oluşmuş ve suyu tatlı olan göllerimizdendir?", "o": ["Salda Gölü", "Van Gölü", "Tuz Gölü", "Manyas Gölü"], "a": 0, "exp": "Burdur'daki Salda Gölü karstik kökenlidir. Van Gölü sodalı, Tuz Gölü çok tuzlu tektoniktir. Manyas ise tektonik göldür.", "unit": "akarsu-goller", "level": 2},
    {"q": "Hammaddeye yakınlık ilkesi göz önüne alındığında, Rize'de çay fabrikalarının, Batman'da petrol rafinerisinin kurulması hangi ortak faktörle açıklanır?", "o": ["Hammaddenin taşınmasının maliyetli veya bozulabilir olması", "Enerji kaynağına yakınlık isteği", "Nitelikli iş gücü fazlalığı", "Gelişmiş ulaşım ağı imkanları"], "a": 0, "exp": "Çay toplandıktan kısa süre sonra bozulabilen bir üründür. Petrol ise çıktığı yerde işlenerek taşıma kolaylığı hedeflenir. İkisi de hammaddeye yakınlık ilkesine örnektir.", "unit": "sanayi-ulasim", "level": 2}
  ],

  // ---------- ÖNCÜL AVI (I-II-III) ----------
  oncul: [
    { q: "Türkiye'deki yer şekillerinin oluşum süreçleriyle ilgili olarak;", items: ["Heyelan en çok bol yağışlı ve eğimli Karadeniz yamaçlarında görülür.", "Rüzgâr erozyonu en çok kurak Konya ve çevresinde etkilidir.", "Buzul şekilleri Akdeniz kıyı ovalarında yaygın olarak bulunur."], correct: [0, 1], exp: "Heyelan Karadeniz'de (I doğru), rüzgâr erozyonu Konya çevresinde etkilidir (II doğru). Akdeniz kıyısında buzul şekilleri bulunmaz (III yanlış).", unit: "yer-sekilleri", level: 3 },
    { q: "Türkiye'nin matematik (mutlak) konumunun sonuçlarıyla ilgili olarak;", items: ["Dört mevsim belirgin biçimde yaşanır.", "Güneş ışınları hiçbir zaman dik açıyla gelmez.", "Gece ile gündüz arasındaki süre farkı Ekvator'dan azdır."], correct: [0, 1], exp: "Türkiye orta kuşakta olduğundan dört mevsim belirgindir (I doğru) ve Yengeç Dönencesi'nin kuzeyinde kaldığı için güneş asla dik gelmez (II doğru). Kutuplara Ekvator'dan daha yakın olduğu için gece-gündüz farkı Ekvator'dan FAZLAdır (III yanlış).", unit: "konum", level: 3 },
    { q: "Türkiye'de görülen dış kuvvetlerle (özellikle akarsularla) ilgili olarak;", items: ["Delta ovaları, akarsuların taşıdığı malzemeyi denize bırakmasıyla oluşur.", "Peribacaları, akarsu aşındırması ve rüzgârın ortak etkisiyle oluşur.", "Buzul aşındırması en çok alçak kıyı ovalarında görülür."], correct: [0, 1], exp: "Deltalar akarsu birikimiyle (I doğru), peribacaları sel suları ve rüzgâr aşındırmasıyla oluşur (II doğru). Buzul aşındırması yüksek dağlarda görülür, kıyı ovalarında değil (III yanlış).", unit: "yer-sekilleri", level: 3 },
    { q: "Türkiye göllerinin oluşumuyla ilgili olarak;", items: ["Van Gölü, lavların önü kapatmasıyla oluşan volkanik set gölüdür.", "Tuz Gölü tektonik kökenli bir göldür.", "Tortum Gölü bir buzul gölüdür."], correct: [0, 1], exp: "Van volkanik set (I doğru), Tuz tektonik (II doğru), Tortum ise heyelan set gölüdür, buzul değil (III yanlış).", unit: "akarsu-goller", level: 3 },
    { q: "Karadeniz iklimi ile ilgili olarak;", items: ["Her mevsim yağışlıdır.", "Doğal bitki örtüsü ormandır.", "Yıllık sıcaklık farkı (amplitüd) Türkiye'de en fazladır."], correct: [0, 1], exp: "Karadeniz her mevsim yağışlıdır (I doğru), bitki örtüsü ormandır (II doğru). Denizel etki nedeniyle amplitüdü AZdır; en fazla amplitüd karasal Doğu Anadolu'dadır (III yanlış).", unit: "iklim", level: 3 },
    { q: "Bir tarım ürününün yetişmesinde iklim belirleyicidir; buna göre;", items: ["Çay, bol yağış istediği için Doğu Karadeniz'de yetişir.", "Muz, yüksek sıcaklık istediği için Akdeniz kıyısında yetişir.", "Buğday, en çok yağışı bol Karadeniz kıyılarında üretilir."], correct: [0, 1], exp: "Çay bol yağış (I doğru), muz yüksek sıcaklık ister (II doğru). Buğday ise yarı kurak iklim ister; en çok İç Anadolu'da üretilir, Karadeniz kıyısında değil (III yanlış).", unit: "tarim-hayvancilik", level: 3 },
    { q: "Türkiye'de nüfusun dağılışını etkileyen etmenlerle ilgili olarak;", items: ["Yer şekillerinin engebeli olması nüfusu seyrekleştirir (Doğu Anadolu).", "Sanayileşme nüfusu yoğunlaştırır (Marmara).", "İklimi elverişli kıyı ovaları seyrek nüfusludur."], correct: [0, 1], exp: "Engebe nüfusu seyrekleştirir (I doğru), sanayi yoğunlaştırır (II doğru). İklimi elverişli kıyı ovaları YOĞUN nüfusludur (III yanlış).", unit: "nufus-yerlesme", level: 3 },
    { q: "Türkiye'nin madenleri ve enerji kaynaklarıyla ilgili olarak;", items: ["Bor rezervinde dünyada ilk sıradadır.", "Taşkömürü Zonguldak havzasından çıkarılır.", "En zengin petrol yatakları Trakya'dadır."], correct: [0, 1], exp: "Bor'da dünya lideri (I doğru), taşkömürü Zonguldak'tan (II doğru). Petrolün büyük bölümü ise Güneydoğu'da Batman-Adıyaman çevresinden çıkar, Trakya'dan değil (III yanlış).", unit: "madenler-enerji", level: 3 },
    { q: "Türkiye'de turizm ile ilgili olarak;", items: ["Antalya ve Muğla deniz turizminde öndedir.", "Kapadokya (Nevşehir) doğal ve kültürel turizm merkezidir.", "Kış turizmi en çok kıyı ovalarında gelişmiştir."], correct: [0, 1], exp: "Antalya-Muğla deniz turizmi (I doğru), Kapadokya doğal-kültürel turizm merkezi (II doğru). Kış turizmi ise yüksek dağlarda gelişir (Uludağ, Palandöken), kıyı ovalarında değil (III yanlış).", unit: "sanayi-ulasim", level: 3 },
    { q: "Doğu Anadolu Bölgesi ile ilgili olarak;", items: ["Yüzölçümü en büyük bölgedir.", "Ortalama yükseltisi en fazla bölgedir.", "Nüfus yoğunluğu en fazla bölgedir."], correct: [0, 1], exp: "Doğu Anadolu yüzölçümü en büyük (I doğru) ve en yüksek (II doğru) bölgedir. Ancak engebe ve sert iklim nedeniyle nüfus yoğunluğu en AZ bölgedir; en yoğun bölge Marmara'dır (III yanlış).", unit: "bolgeler", level: 3 },
    { q: "Türkiye'nin özel (jeopolitik) konumunun sonuçlarıyla ilgili olarak;", items: ["Üç tarafı denizlerle çevrilidir.", "Asya ile Avrupa arasında köprü konumundadır.", "Petrol bakımından dünyanın en zengin ülkesidir."], correct: [0, 1], exp: "Üç tarafının denizlerle çevrili olması (I) ve kıtalar arası köprü konumu (II) özel konumun sonucudur. Türkiye petrol bakımından zengin değildir, petrolü büyük oranda ithal eder (III yanlış).", unit: "konum", level: 3 },

    { q: "Türkiye'nin yer şekilleriyle (yüzey şekilleriyle) ilgili olarak;", items: ["Ortalama yükselti batıdan doğuya gidildikçe artar.", "Dağlar, kuzeyde ve güneyde sıradağlar hâlinde uzanır.", "Arazi genç oluşumlu olmasına rağmen deprem riski düşüktür."], correct: [0, 1], exp: "Türkiye batıdan doğuya yükselir (I doğru); Kuzey Anadolu Dağları ve Toroslar sıradağlar oluşturur (II doğru). Arazi genç oluşumlu olduğu için deprem riski YÜKSEKtir (III yanlış).", unit: "yer-sekilleri", level: 3 },

    { q: "Türkiye akarsularının genel özellikleriyle ilgili olarak;", items: ["Genç arazide aktıkları için akış hızları ve enerji potansiyelleri yüksektir.", "Yağış rejimine bağlı olduklarından akışları (rejimleri) düzensizdir.", "Eğimleri az olduğu için ulaşıma (taşımacılığa) çok elverişlidirler."], correct: [0, 1], exp: "Akarsular genç arazide eğimli aktığından hızlı ve enerji bakımından zengindir (I doğru); rejimleri yağışa bağlı olarak düzensizdir (II doğru). Bu eğim ve düzensizlik nedeniyle ulaşıma ELVERİŞSİZdirler (III yanlış).", unit: "akarsu-goller", level: 3 },

    { q: "Türkiye'de sıcaklığı etkileyen etmenlerle ilgili olarak;", items: ["Enlem arttıkça (kuzeye gidildikçe) sıcaklık genel olarak azalır.", "Yükselti arttıkça sıcaklık düşer.", "Karasallık arttıkça yıllık sıcaklık farkı (amplitüd) azalır."], correct: [0, 1], exp: "Kuzeye gidildikçe sıcaklık azalır (I doğru); yükseldikçe sıcaklık düşer (II doğru). Karasallık arttıkça amplitüd ARTAR (III yanlış); denizellik amplitüdü azaltır.", unit: "iklim", level: 3 },

    { q: "Türkiye'de nüfusun sık olduğu alanlarla ilgili olarak;", items: ["Kıyı ovaları ve sanayi bölgeleri yoğun nüfusludur.", "Verimli tarım alanları nüfusu kendine çeker.", "Yüksek ve engebeli alanlar yoğun nüfusludur."], correct: [0, 1], exp: "Kıyı ovaları, sanayi alanları (I) ve verimli tarım alanları (II) nüfusu yoğunlaştırır. Yüksek ve engebeli alanlar (Doğu Anadolu) ise SEYREK nüfusludur (III yanlış).", unit: "nufus-yerlesme", level: 3 },

    { q: "Türkiye'de hayvancılıkla ilgili olarak;", items: ["Büyükbaş hayvancılık, çayır-meranın geniş olduğu Doğu Anadolu'da yaygındır.", "Kıl keçisi, Akdeniz'deki çalılık (maki) alanlarda beslenir.", "Koyun (küçükbaş) yetiştiriciliği en çok bol yağışlı Karadeniz kıyılarında yapılır."], correct: [0, 1], exp: "Büyükbaş Doğu Anadolu platolarında (I doğru), kıl keçisi Akdeniz çalılıklarında (II doğru) yaygındır. Koyun ise bozkırın geniş olduğu İç Anadolu'da yetiştirilir, Karadeniz kıyılarında değil (III yanlış).", unit: "tarim-hayvancilik", level: 3 },

    { q: "Türkiye'nin enerji üretimiyle ilgili olarak;", items: ["Hidroelektrik üretiminde Fırat ve Dicle önemli paya sahiptir.", "Jeotermal enerji potansiyelinde Ege Bölgesi öne çıkar.", "Türkiye, elektrik enerjisinin tamamını yenilenebilir kaynaklardan üretir."], correct: [0, 1], exp: "Fırat-Dicle hidroelektrikte (I doğru), Ege jeotermalde (II doğru) öndedir. Türkiye elektriğinin önemli bölümünü hâlâ fosil yakıtlardan (kömür, doğal gaz) üretir; tamamı yenilenebilir değildir (III yanlış).", unit: "madenler-enerji", level: 3 },

    { q: "Türkiye'de sanayi ve ulaşımla ilgili olarak;", items: ["Sanayinin en yoğun olduğu bölge Marmara'dır.", "Yük ve yolcu taşımacılığında en çok karayolu kullanılır.", "İhracatımızda tarım ürünleri, sanayi ürünlerinden fazladır."], correct: [0, 1], exp: "Sanayi Marmara'da yoğunlaşır (I doğru); taşımacılıkta karayolu ilk sıradadır (II doğru). İhracatımızda ise sanayi ürünleri tarım ürünlerinden fazladır (III yanlış).", unit: "sanayi-ulasim", level: 3 },

    { q: "Türkiye'nin coğrafi bölgeleriyle ilgili olarak;", items: ["Marmara hem nüfus hem sanayide ilk sıradadır.", "Güneydoğu Anadolu, yüzölçümü en küçük bölgedir.", "Karadeniz, güneşlenme süresi en uzun bölgedir."], correct: [0, 1], exp: "Marmara nüfus ve sanayide birinci (I doğru); Güneydoğu Anadolu en küçük bölge (II doğru). Karadeniz ise bulutluluk ve yağış nedeniyle güneşlenme süresi en AZ bölgedir; en uzun güneşlenme Güneydoğu'dadır (III yanlış).", unit: "bolgeler", level: 3 }
  ],

  // ---------- KAVRAM / İPUCU AVI ----------
  clues: [
    { answer: "Ağrı Dağı", options: ["Ağrı Dağı", "Erciyes Dağı", "Süphan Dağı", "Kaçkar Dağı"], clues: ["Volkanik bir dağım.", "5.137 metreyle Türkiye'nin en yüksek noktasıyım.", "Doğu Anadolu'da, İran sınırına yakın konumdayım."], exp: "Ağrı Dağı, volkanik kökenli ve Türkiye'nin en yüksek dağıdır.", unit: "yer-sekilleri", level: 1 },
    { answer: "Van Gölü", options: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü"], clues: ["Türkiye'nin en büyük ve en derin gölüyüm.", "Suyum sodalı olduğu için içilmez.", "Volkanik set gölü olarak oluştum."], exp: "Van Gölü, Nemrut lavlarının önü kapatmasıyla oluşmuş volkanik set gölüdür.", unit: "akarsu-goller", level: 1 },
    { answer: "Kızılırmak", options: ["Kızılırmak", "Sakarya", "Fırat", "Yeşilırmak"], clues: ["Tamamı Türkiye sınırları içinde olan en uzun akarsuyum.", "Karadeniz'e dökülürüm.", "İç Anadolu'dan doğar, bir yay çizerek akarım."], exp: "Kızılırmak (1.355 km), kaynağı ve ağzı Türkiye'de olan en uzun akarsudur.", unit: "akarsu-goller", level: 2 },
    { answer: "Rize", options: ["Rize", "Antalya", "Konya", "Iğdır"], clues: ["Türkiye'de en çok yağış alan ilim.", "Çay üretiminin merkeziyim.", "Doğu Karadeniz kıyısındayım."], exp: "Rize, yılda 2.000 mm'nin üzerinde yağışla en yağışlı ilimiz ve çayın başkentidir.", unit: "iklim", level: 1 },
    { answer: "Bor", options: ["Bor", "Krom", "Bakır", "Demir"], clues: ["Dünya rezervinin yaklaşık dörtte üçü Türkiye'de.", "Eskişehir, Kütahya ve Balıkesir'de çıkarılırım.", "Türkiye bu madende dünya lideridir."], exp: "Bor, Türkiye'nin dünya rezervinde ilk sırada olduğu stratejik madendir.", unit: "madenler-enerji", level: 2 },
    { answer: "Marmara", options: ["Marmara", "Ege", "Akdeniz", "İç Anadolu"], clues: ["Nüfusu en kalabalık bölgeyim.", "Sanayinin kalbiyim.", "İki boğaza (İstanbul ve Çanakkale) ev sahipliği yaparım."], exp: "Marmara; nüfus, nüfus yoğunluğu ve sanayide ilk sıradaki bölgedir.", unit: "bolgeler", level: 1 },
    { answer: "Peribacaları", options: ["Peribacaları", "Travertenler", "Obruk", "Mağara"], clues: ["Volkanik tüflerin aşınmasıyla oluştum.", "Nevşehir (Kapadokya) yöresindeyim.", "Sel suları ve rüzgâr beni şekillendirdi."], exp: "Peribacaları, Erciyes ve Hasandağı'nın tüflerinin dış kuvvetlerle aşınmasıyla oluşmuştur.", unit: "yer-sekilleri", level: 2 },
    { answer: "Heyelan", options: ["Heyelan", "Deprem", "Çığ", "Erozyon"], clues: ["Eğimli yamaçlarda toprak ve kaya kütlesinin kaymasıyım.", "Türkiye'de en çok Karadeniz'de görülürüm.", "Bol yağış ve killi zemin beni tetikler."], exp: "Heyelan; eğim, bol yağış ve killi yapının birlikte olduğu Karadeniz'de en sık görülen kütle hareketidir.", unit: "yer-sekilleri", level: 2 },
    { answer: "GAP", options: ["GAP", "Keban Projesi", "Çukurova", "Konya Ovası"], clues: ["Fırat ve Dicle üzerinde kuruluyum.", "9 ili kapsayan bütüncül bir kalkınma projesiyim.", "Atatürk Barajı benim kalbimdir."], exp: "Güneydoğu Anadolu Projesi (GAP), sulama ve enerji amaçlı kapsamlı bir bölgesel kalkınma projesidir.", unit: "madenler-enerji", level: 2 },
    { answer: "Konya", options: ["Konya", "Ankara", "Sivas", "Erzurum"], clues: ["Yüzölçümü en büyük ilim.", "En geniş ovaya sahibim.", "'Tahıl ambarı' olarak bilinirim."], exp: "Konya, hem yüzölçümü en büyük il hem de en geniş ovaya sahip, buğdayın başkenti ilimizdir.", unit: "bolgeler", level: 2 }
  ],

  // ---------- DOĞRU / YANLIŞ ----------
  tf: [
    { s: "Türkiye Kuzey Yarım Küre'de, Orta Kuşak'ta yer alan bir ülkedir.", t: true, exp: "Doğru. Türkiye 36°-42° Kuzey enlemlerindedir. Dört mevsimin belirgin yaşanması ve cephe yağışları bunun kanıtıdır.", unit: "konum", level: 1 },
    { s: "Batı Karadeniz'de yer alan Küre Dağları kıvrımlı dağlar sınıfındadır.", t: true, exp: "Doğru. Kuzey Anadolu Dağları kıvrım dağlarıdır ve Küre Dağları da bu sistemin bir parçasıdır.", unit: "yer-sekilleri", level: 2 },
    { s: "Tuz Gölü tektonik oluşumlu bir göldür ve yaz aylarında buharlaşma nedeniyle alanı aşırı daralır.", t: true, exp: "Doğru. Tuz Gölü tektonik çukurlukta birikmiş sığ bir göldür; buharlaşmayla yazın bataklık/tuz tabakasına döner.", unit: "akarsu-goller", level: 1 },
    { s: "Ege kıyılarında dağların kıyıya dik uzanması fön rüzgârlarının oluşumunu kolaylaştırır.", t: false, exp: "Yanlış. Fön rüzgârı dağ yamacı boyunca alçalan kuru havadır; dağların kıyıya paralel olduğu Karadeniz ve Akdeniz'de yaygındır.", unit: "iklim", level: 2 },
    { s: "Türkiye'de kentsel nüfus oranı kırsal nüfus oranından çok daha fazladır (2025 verilerine göre %90 üzerindedir).", t: true, exp: "Doğru. Büyükşehir yasaları ve göçlerin etkisiyle nüfusun %93'ünden fazlası kentlerde yaşamaktadır.", unit: "nufus-yerlesme", level: 1 },
    { s: "Muz ve çay, devlet kontrolünde (kotayla) üretilen tarım ürünleridir.", t: false, exp: "Yanlış. Pirinç (çeltik) sağlık/sıtma nedeniyle, haşhaş/tütün ise kalite ve uyuşturucu kontrolü nedeniyle devlet denetimindedir. Muz ve çay kota dışıdır.", unit: "tarim-hayvancilik", level: 2 },
    { s: "Zonguldak ve Çatalağzı çevresinde linyit kömürüyle çalışan termik santraller bulunur.", t: false, exp: "Yanlış. Zonguldak ve Çatalağzı'ndaki termik santraller taş kömürüyle çalışır. Linyit yatakları Ege ve Linyit santralleri (Soma, Yatağan) oradadır.", unit: "madenler-enerji", level: 2 },
    { s: "Doğu Anadolu Bölgesi, ortalama yükseltinin en fazla olduğu ve karasallığın en şiddetli yaşandığı bölgemizdir.", t: true, exp: "Doğru. Doğu Anadolu en yüksek, en dağlık ve kış sıcaklıklarının en düşük olduğu bölgemizdir.", unit: "bolgeler", level: 1 },
    { s: "Türkiye'nin en yüksek dağı Erciyes Dağı'dır.", t: false, exp: "Yanlış. En yüksek dağ Ağrı Dağı'dır (5.137 m); Erciyes, İç Anadolu'nun en yüksek dağıdır.", unit: "yer-sekilleri", level: 1 },
    { s: "Peribacaları Nevşehir (Kapadokya) yöresindedir.", t: true, exp: "Doğru. Volkanik tüflerin aşınmasıyla oluşmuşlardır.", unit: "yer-sekilleri", level: 1 },
    { s: "Pamukkale travertenleri Denizli'dedir.", t: true, exp: "Doğru. Travertenler karstik (kimyasal tortul) şekillerdendir.", unit: "yer-sekilleri", level: 1 },
    { s: "İç kuvvetler yer şekillerini oluşturur, dış kuvvetler ise aşındırıp düzleştirir.", t: true, exp: "Doğru. İç kuvvetler (volkanizma, deprem, orojenez) yükseltir; dış kuvvetler (akarsu, rüzgâr, buzul) aşındırır.", unit: "yer-sekilleri", level: 1 },
    { s: "Karadeniz Bölgesi'nde dağlar kıyıya paralel uzanır.", t: true, exp: "Doğru. Bu yüzden kıyı ile iç kesim arasında ulaşım geçitlerden sağlanır ve kıyı az girintilidir.", unit: "yer-sekilleri", level: 2 },
    { s: "Ege Bölgesi'nde dağlar kıyıya paralel uzanır.", t: false, exp: "Yanlış. Ege'de dağlar kıyıya dik uzanır (horst-graben); kıyılar bu yüzden girintili çıkıntılıdır.", unit: "yer-sekilleri", level: 2 },
    { s: "Heyelan olayları en çok Karadeniz Bölgesi'nde görülür.", t: true, exp: "Doğru. Bol yağış, eğimli arazi ve killi toprak yapısı heyelanı artırır.", unit: "yer-sekilleri", level: 2 },

    { s: "Kızılırmak, tamamı Türkiye sınırları içindeki en uzun akarsudur.", t: true, exp: "Doğru. 1.355 km uzunluğundaki Kızılırmak, Karadeniz'e dökülür.", unit: "akarsu-goller", level: 1 },
    { s: "Van Gölü'nün suyu tatlıdır.", t: false, exp: "Yanlış. Van Gölü'nün suyu sodalıdır; bu nedenle içme ve sulamada kullanılmaz.", unit: "akarsu-goller", level: 1 },
    { s: "GAP, Kızılırmak ve Yeşilırmak nehirleri üzerinde kurulmuştur.", t: false, exp: "Yanlış. GAP, Fırat ve Dicle üzerinde kurulmuştur.", unit: "akarsu-goller", level: 2 },
    { s: "Tuz Gölü bir volkanik set gölüdür.", t: false, exp: "Yanlış. Tuz Gölü tektonik bir göldür; volkanik set gölüne örnek Van Gölü'dür.", unit: "akarsu-goller", level: 2 },
    { s: "Çoruh Nehri sularını Hazar Denizi'ne döker.", t: false, exp: "Yanlış. Çoruh, Karadeniz'e dökülür; Hazar'a dökülenler Aras ve Kura'dır.", unit: "akarsu-goller", level: 2 },

    { s: "Türkiye 36°-42° kuzey paralelleri arasında yer alır.", t: true, exp: "Doğru. Türkiye orta kuşakta, 36°-42° kuzey paralelleri ve 26°-45° doğu meridyenleri arasındadır.", unit: "konum", level: 1 },
    { s: "Türkiye kuzey yarım kürede yer alır.", t: true, exp: "Doğru. Türkiye, Ekvator'un kuzeyinde (kuzey yarım küre) ve Greenwich'in doğusunda (doğu yarım küre) yer alır.", unit: "konum", level: 1 },
    { s: "Türkiye'nin en güney ucu Hatay ilindedir.", t: true, exp: "Doğru. En güney nokta Hatay'ın Yayladağı ilçesindeki Topraktutan köyüdür.", unit: "konum", level: 1 },
    { s: "Türkiye'nin en doğusu ile en batısı arasında 76 dakika yerel saat farkı vardır.", t: true, exp: "Doğru. 19 meridyen farkı x 4 dakika = 76 dakika.", unit: "konum", level: 2 },
    { s: "En uzun kara sınırımız İran iledir.", t: false, exp: "Yanlış. En uzun kara sınırımız Suriye (911 km), en kısa sınırımız Nahçıvan (Azerbaycan) iledir.", unit: "konum", level: 2 },
    { s: "Türkiye'nin en büyük adası Marmara Adası'dır.", t: false, exp: "Yanlış. En büyük ada Gökçeada'dır (Çanakkale).", unit: "konum", level: 2 },

    { s: "En fazla yağış alan ilimiz Rize'dir.", t: true, exp: "Doğru. Rize yılda 2.000 mm'nin üzerinde yağış alır; en az yağış Tuz Gölü çevresindedir.", unit: "iklim", level: 1 },
    { s: "Akdeniz ikliminde yazlar sıcak ve kurak geçer.", t: true, exp: "Doğru. Akdeniz ikliminde yazlar sıcak-kurak, kışlar ılık-yağışlı geçer; bitki örtüsü makidir.", unit: "iklim", level: 1 },
    { s: "Türkiye'de gerçek sıcaklık dağılışında yükselti (yükseklik) etkilidir.", t: true, exp: "Doğru. Yükseldikçe sıcaklık düşer (her 200 m'de ~1°C); bu yüzden yüksek Doğu Anadolu serindir.", unit: "iklim", level: 2 },
    { s: "Ortalama yükseltisi en fazla olan bölgemiz Doğu Anadolu'dur.", t: true, exp: "Doğru. Doğu Anadolu'nun ortalama yükseltisi 2.000 m'yi aşar; bu yüzden kışlar uzun ve serttir.", unit: "iklim", level: 2 },

    { s: "Türkiye'nin en kalabalık ili Ankara'dır.", t: false, exp: "Yanlış. En kalabalık il yaklaşık 15,75 milyon nüfusla İstanbul'dur (TÜİK 2025).", unit: "nufus-yerlesme", level: 1 },
    { s: "Türkiye'nin en az nüfuslu ili Bayburt'tur.", t: true, exp: "Doğru. TÜİK 2025 verilerine göre Bayburt yaklaşık 83 bin nüfusla en az nüfuslu ildir.", unit: "nufus-yerlesme", level: 1 },
    { s: "Türkiye'de kır nüfusu, kent nüfusundan fazladır.", t: false, exp: "Yanlış. Türkiye 1980'lerden bu yana kentleşmiştir; kent nüfusu kır nüfusundan çok daha fazladır.", unit: "nufus-yerlesme", level: 2 },
    { s: "Nüfus yoğunluğu en fazla bölge Marmara'dır.", t: true, exp: "Doğru. Sanayi ve göç nedeniyle Marmara en yoğun, Doğu Anadolu en seyrek nüfuslu bölgedir.", unit: "nufus-yerlesme", level: 2 },

    { s: "Türkiye fındık üretiminde dünya birincisidir.", t: true, exp: "Doğru. Fındıkta olduğu gibi kuru kayısıda da dünya lideriyiz.", unit: "tarim-hayvancilik", level: 1 },
    { s: "Muz üretimi en çok Karadeniz Bölgesi'nde yapılır.", t: false, exp: "Yanlış. Muz yalnızca Akdeniz kıyılarında (Anamur, Alanya) yetişir.", unit: "tarim-hayvancilik", level: 1 },
    { s: "Türkiye'de seracılık en çok Antalya çevresinde yapılır.", t: true, exp: "Doğru. Kışların ılık geçmesi ve güneşlenme süresi seracılığı geliştirmiştir.", unit: "tarim-hayvancilik", level: 2 },
    { s: "Büyükbaş hayvancılık en çok Erzurum-Kars platolarında yaygındır.", t: true, exp: "Doğru. Geniş çayır ve meralar büyükbaş hayvancılığı destekler.", unit: "tarim-hayvancilik", level: 2 },

    { s: "Türkiye, bor rezervinde dünyada ilk sıradadır.", t: true, exp: "Doğru. Dünya bor rezervinin yaklaşık dörtte üçü Türkiye'dedir.", unit: "madenler-enerji", level: 1 },
    { s: "Taşkömürü Türkiye'de Zonguldak havzasından çıkarılır.", t: true, exp: "Doğru. Zonguldak taşkömürü, Karabük ve Ereğli demir-çelik sanayisini desteklemiştir.", unit: "madenler-enerji", level: 1 },
    { s: "Atatürk Barajı, Dicle Nehri üzerindedir.", t: false, exp: "Yanlış. Atatürk Barajı Fırat üzerindedir; Dicle üzerindeki büyük baraj Ilısu'dur.", unit: "madenler-enerji", level: 1 },
    { s: "Türkiye petrol üretiminde kendine yeten bir ülkedir.", t: false, exp: "Yanlış. Petrol üretimi tüketimi karşılamaz; ihtiyacın büyük bölümü ithal edilir.", unit: "madenler-enerji", level: 2 },

    { s: "Türkiye'nin ilk demir-çelik fabrikası Karabük'te kurulmuştur.", t: true, exp: "Doğru. 1937'de Karabük'te kurulmuştur.", unit: "sanayi-ulasim", level: 1 },
    { s: "Türkiye'nin en gelişmiş sanayi bölgesi Marmara'dır.", t: true, exp: "Doğru. İstanbul-Kocaeli-Bursa sanayi üçgeni Marmara'dadır.", unit: "sanayi-ulasim", level: 1 },
    { s: "Kış turizmi en çok kıyı ovalarında gelişmiştir.", t: false, exp: "Yanlış. Kış turizmi yüksek dağlarda gelişir: Uludağ, Palandöken, Erciyes, Kartalkaya.", unit: "sanayi-ulasim", level: 2 },

    { s: "Türkiye'de 7 coğrafi bölge vardır.", t: true, exp: "Doğru. Bölgeler 1941 Birinci Coğrafya Kongresi'nde belirlenmiştir.", unit: "bolgeler", level: 1 },
    { s: "Yüzölçümü en küçük coğrafi bölgemiz Marmara'dır.", t: false, exp: "Yanlış. En küçük bölge Güneydoğu Anadolu'dur; en büyük bölge Doğu Anadolu'dur.", unit: "bolgeler", level: 1 },
    { s: "Türkiye'de 81 il vardır.", t: true, exp: "Doğru. İl sayısı 81, büyükşehir sayısı 30'dur.", unit: "bolgeler", level: 1 }
  ],

  // ---------- EŞLEŞTİRME (turlar) ----------
  match: [
    { title: "Tarım Ürünü → Yöre", unit: "tarim-hayvancilik", pairs: [
      ["Fındık", "Ordu - Giresun"],
      ["Çay", "Rize"],
      ["Kayısı", "Malatya"],
      ["İncir", "Aydın"],
      ["Üzüm", "Manisa"],
      ["Muz", "Anamur (Mersin)"],
      ["Antep fıstığı", "Gaziantep - Şanlıurfa"],
      ["Haşhaş", "Afyonkarahisar"]
    ]},
    { title: "Maden → Çıkarıldığı Yer", unit: "madenler-enerji", pairs: [
      ["Bor", "Eskişehir (Kırka)"],
      ["Taşkömürü", "Zonguldak"],
      ["Linyit", "Afşin-Elbistan"],
      ["Krom", "Elazığ (Guleman)"],
      ["Demir", "Divriği (Sivas)"],
      ["Bakır", "Murgul (Artvin)"],
      ["Petrol", "Batman (Raman)"],
      ["Altın", "Kışladağ (Uşak)"]
    ]},
    { title: "Göl → Oluşum Türü", unit: "akarsu-goller", pairs: [
      ["Van Gölü", "Volkanik set gölü"],
      ["Tuz Gölü", "Tektonik göl"],
      ["Tortum Gölü", "Heyelan set gölü"],
      ["Büyükçekmece", "Kıyı set gölü (lagün)"],
      ["Salda Gölü", "Karstik göl"],
      ["Cilo Dağı gölleri", "Buzul gölü"]
    ]},
    { title: "Akarsu → Döküldüğü Yer", unit: "akarsu-goller", pairs: [
      ["Kızılırmak", "Karadeniz"],
      ["Gediz", "Ege Denizi"],
      ["Seyhan", "Akdeniz"],
      ["Susurluk", "Marmara Denizi"],
      ["Fırat", "Basra Körfezi"],
      ["Aras", "Hazar Denizi"]
    ]}
  ],

  // ---------- GRUPLARA AYIR ----------
  groups: [
    { title: "İç kuvvet mi, dış kuvvet mi?", unit: "yer-sekilleri",
      groups: ["İç kuvvet (yer içi enerjisi)", "Dış kuvvet (güneş enerjisi)"],
      items: [
        { t: "Volkanizma", g: 0 },
        { t: "Deprem (seizma)", g: 0 },
        { t: "Orojenez (dağ oluşumu)", g: 0 },
        { t: "Epirojenez (kıta oluşumu)", g: 0 },
        { t: "Akarsu aşındırması", g: 1 },
        { t: "Rüzgâr aşındırması", g: 1 },
        { t: "Buzul aşındırması", g: 1 },
        { t: "Dalga aşındırması", g: 1 }
      ],
      exp: "İç kuvvetler yer içi enerjisiyle çalışır ve yer şekillerini oluşturur (volkanizma, deprem, orojenez, epirojenez). Dış kuvvetler güneş enerjisiyle çalışır ve aşındırır (akarsu, rüzgâr, buzul, dalga, yer altı suları)." },

    { title: "Göl oluşum türü", unit: "akarsu-goller",
      groups: ["Tektonik göl", "Volkanik set gölü", "Heyelan set gölü"],
      items: [
        { t: "Tuz Gölü", g: 0 },
        { t: "Sapanca Gölü", g: 0 },
        { t: "İznik Gölü", g: 0 },
        { t: "Van Gölü", g: 1 },
        { t: "Tortum Gölü", g: 2 },
        { t: "Abant Gölü", g: 2 }
      ],
      exp: "Tektonik göller çöküntü alanlarında oluşur (Tuz, Sapanca, İznik). Van Gölü volkanik set, Tortum ve Abant ise heyelan set gölleridir." },

    { title: "Hangi iklimin bitki örtüsü?", unit: "iklim",
      groups: ["Orman (Karadeniz)", "Maki (Akdeniz)", "Bozkır/step (Karasal)"],
      items: [
        { t: "Her mevsim yağışlı, gür ağaçlar", g: 0 },
        { t: "Doğu Karadeniz yamaçları", g: 0 },
        { t: "Yaz kuraklığına dayanıklı kısa boylu çalılar", g: 1 },
        { t: "Akdeniz kıyıları", g: 1 },
        { t: "Yarı kurak İç Anadolu otsu bitkileri", g: 2 },
        { t: "İlkbaharda yeşerip yazın kuruyan cılız otlar", g: 2 }
      ],
      exp: "Karadeniz'in bol yağışı ormanı, Akdeniz'in yaz kuraklığı makiyi, iç bölgelerin yarı kurak iklimi bozkırı (step) oluşturur." },

    { title: "Ürün hangi iklim bölgesinde yetişir?", unit: "tarim-hayvancilik",
      groups: ["Karadeniz (bol yağışlı)", "Akdeniz/Ege (ılıman)", "Karasal (İç/GD Anadolu)"],
      items: [
        { t: "Çay", g: 0 },
        { t: "Fındık", g: 0 },
        { t: "Muz", g: 1 },
        { t: "Zeytin", g: 1 },
        { t: "Buğday", g: 2 },
        { t: "Antep fıstığı", g: 2 }
      ],
      exp: "Çay ve fındık bol yağış (Karadeniz), muz ve zeytin ılıman kışlar (Akdeniz/Ege), buğday ve Antep fıstığı yarı kurak karasal iklim (İç/Güneydoğu Anadolu) ister." },

    { title: "Enerji kaynağı yenilenebilir mi?", unit: "madenler-enerji",
      groups: ["Yenilenebilir", "Yenilenemez (fosil)"],
      items: [
        { t: "Hidroelektrik (su)", g: 0 },
        { t: "Rüzgâr", g: 0 },
        { t: "Güneş", g: 0 },
        { t: "Jeotermal", g: 0 },
        { t: "Taşkömürü", g: 1 },
        { t: "Linyit", g: 1 },
        { t: "Petrol", g: 1 }
      ],
      exp: "Yenilenebilir kaynaklar tükenmez (su, rüzgâr, güneş, jeotermal, biyokütle). Fosil yakıtlar tükenir (taşkömürü, linyit, petrol, doğal gaz)." },

    { title: "Bu 'en' hangi bölgenin?", unit: "bolgeler",
      groups: ["Marmara", "Doğu Anadolu", "Güneydoğu Anadolu"],
      items: [
        { t: "Nüfusu en fazla bölge", g: 0 },
        { t: "Sanayisi en gelişmiş bölge", g: 0 },
        { t: "Yüzölçümü en büyük bölge", g: 1 },
        { t: "Ortalama yükseltisi en fazla bölge", g: 1 },
        { t: "Yüzölçümü en küçük bölge", g: 2 },
        { t: "Güneşlenme süresi en uzun bölge", g: 2 }
      ],
      exp: "Marmara nüfus ve sanayide; Doğu Anadolu yüzölçümü ve yükseltide; Güneydoğu Anadolu ise küçüklük, güneşlenme ve buharlaşmada öne çıkar." },

    { title: "Turizm türü hangi merkeze ait?", unit: "sanayi-ulasim",
      groups: ["Deniz turizmi", "Kış (kayak) turizmi", "Kültür / doğa turizmi"],
      items: [
        { t: "Antalya", g: 0 },
        { t: "Bodrum (Muğla)", g: 0 },
        { t: "Uludağ (Bursa)", g: 1 },
        { t: "Palandöken (Erzurum)", g: 1 },
        { t: "Kapadokya (Nevşehir)", g: 2 },
        { t: "Pamukkale (Denizli)", g: 2 }
      ],
      exp: "Deniz turizmi sıcak kıyılarda (Antalya, Muğla); kış turizmi karlı yüksek dağlarda (Uludağ, Palandöken, Erciyes); kültür-doğa turizmi ise Kapadokya ve Pamukkale gibi özel coğrafyalarda gelişir." }
  ],

  // ---------- BÖLGE AVI (harita) ----------
  map: [
    { c: "Türkiye'de rüzgâr aşındırma ve biriktirme şekillerinin (kumullar, mantarkaya) kuraklık nedeniyle en fazla görüldüğü bölge.", r: "ic", exp: "İç Anadolu Bölgesi (özellikle Konya Karapınar çevresi) yarı kurak iklimi ve zayıf bitki örtüsü nedeniyle rüzgâr şekillerinin en yaygın olduğu bölgedir.", unit: "yer-sekilleri" },
    { c: "Türkiye'de heyelan olaylarının bol yağış ve killi zemin nedeniyle en sık yaşandığı bölge.", r: "karadeniz", exp: "Karadeniz Bölgesi, özellikle ilkbahar aylarında karların erimesi, bol yağış ve killi toprak yapısı nedeniyle en çok heyelan görülen bölgemizdir.", unit: "yer-sekilleri" },
    { c: "Buharlaşma miktarının en fazla, yaz kuraklığının en şiddetli olduğu coğrafi bölgemiz.", r: "gdogu", exp: "Güneydoğu Anadolu Bölgesi, en güneyde yer alması ve güneyden gelen sıcak Samyeli rüzgârlarının etkisiyle buharlaşmanın en fazla olduğu bölgemizdir.", unit: "iklim" },
    { c: "Ortalama yükseltisi en az olan, sanayi, nüfus ve ulaşım ağının en fazla geliştiği coğrafi bölgemiz.", r: "marmara", exp: "Marmara Bölgesi, ortalama 250 metre yükseltiyle en alçak ve sanayi/nüfus bakımından en gelişmiş coğrafi bölgemizdir.", unit: "bolgeler" },
    { c: "Dağların kıyıye dik uzanması sonucu kıyı girinti-çıkıntısının ve koy-körfez sayısının en fazla olduğu coğrafi bölgemiz.", r: "ege", exp: "Ege Bölgesi'nde dağlar kıyıya dik uzandığı için enine kıyı tipi görülür; kıyı girintisi, koy ve körfez sayısı en fazladır.", unit: "bolgeler" },
    { c: "Türkiye'nin en fazla yağış alan bölgesi", r: "karadeniz", exp: "Doğu Karadeniz (Rize çevresi) 2.000 mm'nin üzerinde yağış alır.", unit: "bolgeler" },
    { c: "Fındık ve çay üretiminde ilk sırada", r: "karadeniz", exp: "Fındık Ordu-Giresun'da, çay Rize'de yoğunlaşır.", unit: "bolgeler" },
    { c: "Dağınık yerleşmenin en yaygın olduğu bölge", r: "karadeniz", exp: "Engebeli arazi ve her yere yeten yağış, dağınık yerleşmeye yol açar.", unit: "bolgeler" },
    { c: "Heyelan olaylarının en sık görüldüğü bölge", r: "karadeniz", exp: "Bol yağış ve eğimli yamaçlar heyelan riskini artırır.", unit: "bolgeler" },
    { c: "Taşkömürünün çıkarıldığı Zonguldak bu bölgededir", r: "karadeniz", exp: "Zonguldak havzası Batı Karadeniz'dedir.", unit: "bolgeler" },
    { c: "Nüfusu en kalabalık bölge", r: "marmara", exp: "İstanbul'un da yer aldığı Marmara, nüfus ve nüfus yoğunluğunda ilk sıradadır.", unit: "bolgeler" },
    { c: "Sanayisi en gelişmiş bölge", r: "marmara", exp: "İstanbul, Kocaeli, Bursa sanayi üçgeni Marmara'dadır.", unit: "bolgeler" },
    { c: "Ortalama yükseltisi en az olan bölge", r: "marmara", exp: "Marmara'nın ortalama yükseltisi yaklaşık 250 m ile en düşüktür.", unit: "bolgeler" },
    { c: "İki boğaza (İstanbul ve Çanakkale) sahip bölge", r: "marmara", exp: "Boğazlar, Karadeniz'i Akdeniz'e bağlayan su yoludur.", unit: "bolgeler" },
    { c: "Ayçiçeği üretiminde ilk sırada (Trakya kesimi)", r: "marmara", exp: "Ayçiçeği en çok Trakya'da (Tekirdağ, Edirne) üretilir.", unit: "bolgeler" },
    { c: "Dağları kıyıya dik uzanan, kıyıları en girintili çıkıntılı bölge", r: "ege", exp: "Horst-graben yapısı nedeniyle Ege kıyıları çok girintilidir.", unit: "bolgeler" },
    { c: "Zeytin, incir ve üzüm üretiminde öne çıkan bölge", r: "ege", exp: "İncir Aydın'da, üzüm Manisa'da, zeytin Edremit Körfezi ve Ege kıyılarında yoğundur.", unit: "bolgeler" },
    { c: "Gediz ve Büyük Menderes nehirlerinin aktığı bölge", r: "ege", exp: "Bu nehirler graben ovalarından geçerek Ege Denizi'ne dökülür.", unit: "bolgeler" },
    { c: "Efes ve Bergama antik kentlerinin bulunduğu bölge", r: "ege", exp: "İzmir çevresindeki bu antik kentler önemli turizm merkezleridir.", unit: "bolgeler" },
    { c: "Turunçgil ve muz üretiminde ilk sırada", r: "akdeniz", exp: "Turunçgiller ve muz, ılık kışlar isteyen ürünlerdir; Akdeniz kıyısında yetişir.", unit: "bolgeler" },
    { c: "Seracılığın en geliştiği bölge", r: "akdeniz", exp: "Antalya çevresi, kış ılıklığı sayesinde seracılığın merkezidir.", unit: "bolgeler" },
    { c: "Karstik şekillerin (polye, obruk, mağara) en yaygın olduğu bölge", r: "akdeniz", exp: "Toroslardaki kalker yapı, karstik şekillenmeyi artırır.", unit: "bolgeler" },
    { c: "Toros Dağları bu bölge boyunca uzanır", r: "akdeniz", exp: "Toroslar, Akdeniz kıyısına paralel uzanan kıvrım dağlarıdır.", unit: "bolgeler" },
    { c: "Türkiye'nin 'tahıl ambarı' olarak bilinen bölge", r: "ic", exp: "Konya Ovası başta olmak üzere İç Anadolu, buğday üretiminin merkezidir.", unit: "bolgeler" },
    { c: "En az yağış alan bölge", r: "ic", exp: "Tuz Gölü çevresi, Türkiye'nin en az yağış alan yeridir.", unit: "bolgeler" },
    { c: "Tuz Gölü ve peribacaları bu bölgededir", r: "ic", exp: "Tuz Gölü kapalı havzada, peribacaları Nevşehir'dedir.", unit: "bolgeler" },
    { c: "Yüzölçümü en büyük il olan Konya bu bölgededir", r: "ic", exp: "Konya yaklaşık 39 bin km² ile en büyük ilimizdir.", unit: "bolgeler" },
    { c: "Yüzölçümü ve ortalama yükseltisi en fazla bölge", r: "dogu", exp: "Doğu Anadolu hem en büyük hem en yüksek bölgemizdir.", unit: "bolgeler" },
    { c: "Van Gölü ve Ağrı Dağı bu bölgededir", r: "dogu", exp: "En büyük göl ve en yüksek dağ Doğu Anadolu'dadır.", unit: "bolgeler" },
    { c: "Büyükbaş hayvancılığın en yaygın olduğu bölge", r: "dogu", exp: "Geniş çayırlar (Erzurum-Kars platoları) büyükbaş hayvancılığı destekler.", unit: "bolgeler" },
    { c: "Kışların en soğuk ve uzun geçtiği bölge", r: "dogu", exp: "Yükselti ve karasallık nedeniyle kışlar çok serttir.", unit: "bolgeler" },
    { c: "Yüzölçümü en küçük bölge", r: "gdogu", exp: "Güneydoğu Anadolu, yedi bölgenin en küçüğüdür.", unit: "bolgeler" },
    { c: "GAP bu bölgededir", r: "gdogu", exp: "GAP; Fırat ve Dicle üzerinde 9 ili kapsar.", unit: "bolgeler" },
    { c: "Petrol çıkarılan Batman bu bölgededir", r: "gdogu", exp: "Türkiye petrolünün büyük bölümü Batman ve çevresinden çıkarılır.", unit: "bolgeler" },
    { c: "Antep fıstığı üretimiyle ünlü bölge", r: "gdogu", exp: "Gaziantep ve Şanlıurfa, Antep fıstığı üretiminin merkezidir.", unit: "bolgeler" },
    { c: "Buharlaşmanın en fazla olduğu bölge", r: "gdogu", exp: "Yaz sıcaklığı çok yüksek olduğundan buharlaşma en fazladır; GAP ile sulama hayati önemdedir.", unit: "bolgeler" }
  ],

  // ---------- TÜRKİYE'NİN EN'LERİ ----------
  enler: [
    { q: "Türkiye'nin en yüksek dağı?", o: ["Ağrı Dağı", "Erciyes", "Uludağ", "Kaçkar"], a: 0, exp: "Ağrı Dağı 5.137 m ile en yüksek dağımızdır.", unit: "yer-sekilleri", level: 1 },
    { q: "Tamamı Türkiye'de olan en uzun akarsu?", o: ["Kızılırmak", "Sakarya", "Yeşilırmak", "Ceyhan"], a: 0, exp: "Kızılırmak 1.355 km ile ilk sıradadır.", unit: "akarsu-goller", level: 1 },
    { q: "Türkiye'nin en büyük gölü?", o: ["Van Gölü", "Tuz Gölü", "Beyşehir", "Eğirdir"], a: 0, exp: "Van Gölü (3.713 km²) en büyük, Tuz Gölü ikinci büyük gölümüzdür.", unit: "akarsu-goller", level: 1 },
    { q: "Türkiye'nin en derin gölü?", o: ["Van Gölü", "Hazar Gölü", "Tuz Gölü", "Sapanca"], a: 0, exp: "Van Gölü yaklaşık 450 m derinliğiyle en derin gölümüzdür.", unit: "akarsu-goller", level: 1 },
    { q: "Türkiye'nin en büyük adası?", o: ["Gökçeada", "Marmara Adası", "Bozcaada", "Heybeliada"], a: 0, exp: "Gökçeada (Çanakkale) en büyük adamızdır.", unit: "konum", level: 1 },
    { q: "En kalabalık il? (TÜİK 2025)", o: ["İstanbul", "Ankara", "İzmir", "Bursa"], a: 0, exp: "İstanbul yaklaşık 15,75 milyon nüfusla ilk sırada; ardından Ankara ve İzmir gelir.", unit: "nufus-yerlesme", level: 1 },
    { q: "En az nüfuslu il? (TÜİK 2025)", o: ["Bayburt", "Tunceli", "Ardahan", "Kilis"], a: 0, exp: "Bayburt yaklaşık 83 bin nüfusla en az nüfuslu ilimizdir; Tunceli ve Ardahan onu izler.", unit: "nufus-yerlesme", level: 1 },
    { q: "En fazla yağış alan il?", o: ["Rize", "Trabzon", "Antalya", "Muğla"], a: 0, exp: "Rize, yılda 2.000 mm'nin üzerinde yağışla ilk sıradadır.", unit: "iklim", level: 1 },
    { q: "En az yağış alan yer?", o: ["Tuz Gölü çevresi", "Iğdır Ovası", "Konya Ovası", "Harran Ovası"], a: 0, exp: "Tuz Gölü çevresi (yaklaşık 250-300 mm) en az yağış alan yerdir.", unit: "iklim", level: 1 },
    { q: "Yüzölçümü en büyük bölge?", o: ["Doğu Anadolu", "İç Anadolu", "Karadeniz", "Akdeniz"], a: 0, exp: "Doğu Anadolu en büyük, Güneydoğu Anadolu en küçük bölgedir.", unit: "bolgeler", level: 1 },
    { q: "Yüzölçümü en küçük bölge?", o: ["Güneydoğu Anadolu", "Marmara", "Ege", "Akdeniz"], a: 0, exp: "Güneydoğu Anadolu en küçük bölgemizdir.", unit: "bolgeler", level: 1 },
    { q: "En uzun kara sınırımız hangi ülkeyle?", o: ["Suriye", "İran", "Irak", "Gürcistan"], a: 0, exp: "Suriye sınırı 911 km ile en uzun kara sınırımızdır.", unit: "konum", level: 1 },
    { q: "En kısa kara sınırımız hangi ülkeyle?", o: ["Azerbaycan (Nahçıvan)", "Ermenistan", "Bulgaristan", "Yunanistan"], a: 0, exp: "Azerbaycan'a bağlı Nahçıvan ile olan sınırımız en kısadır.", unit: "konum", level: 1 },
    { q: "Türkiye'nin en kuzey ucu?", o: ["İnceburun (Sinop)", "Anadolu Feneri (İstanbul)", "Bafra Burnu (Samsun)", "Kerempe Burnu (Kastamonu)"], a: 0, exp: "En kuzey nokta Sinop'taki İnceburun'dur.", unit: "konum", level: 1 },
    { q: "Türkiye'nin en batı ucu?", o: ["Avlaka Burnu (Gökçeada)", "Baba Burnu (Çanakkale)", "Enez (Edirne)", "Çeşme (İzmir)"], a: 0, exp: "En batı nokta Gökçeada'daki Avlaka Burnu'dur; anakaradaki en batı nokta Baba Burnu'dur.", unit: "konum", level: 1 },
    { q: "Türkiye'nin en doğu ucu hangi ildedir?", o: ["Iğdır (Dilucu)", "Van", "Kars", "Hakkari"], a: 0, exp: "En doğu nokta Iğdır'ın Aralık ilçesindeki Dilucu'dur.", unit: "konum", level: 1 },
    { q: "Yüzölçümü en büyük il?", o: ["Konya", "Ankara", "Sivas", "Erzurum"], a: 0, exp: "Konya yaklaşık 39 bin km² ile en büyük ilimizdir; en küçük il Yalova'dır.", unit: "bolgeler", level: 1 },
    { q: "Türkiye'nin en geniş ovası?", o: ["Konya Ovası", "Çukurova", "Harran Ovası", "Bafra Ovası"], a: 0, exp: "Konya Ovası en geniş ovamızdır; 'tahıl ambarı' olarak bilinir.", unit: "tarim-hayvancilik", level: 1 },
    { q: "Türkiye'nin en büyük barajı?", o: ["Atatürk Barajı", "Keban Barajı", "Hirfanlı Barajı", "Ilısu Barajı"], a: 0, exp: "Fırat üzerindeki Atatürk Barajı en büyük barajımızdır.", unit: "madenler-enerji", level: 1 },
    { q: "Türkiye hangi ürünlerde dünya birincisidir?", o: ["Fındık ve kuru kayısı", "Muz ve çay", "Pamuk ve buğday", "Zeytin ve incir"], a: 0, exp: "Türkiye fındık ve kuru kayısı üretim-ihracatında dünya lideridir; bor rezervinde de ilk sıradadır.", unit: "tarim-hayvancilik", level: 1 },
    { q: "En fazla göç alan bölge?", o: ["Marmara", "Ege", "Akdeniz", "İç Anadolu"], a: 0, exp: "İş olanakları nedeniyle Marmara (özellikle İstanbul) en fazla göç alan bölgedir.", unit: "nufus-yerlesme", level: 1 },
    { q: "Güneşlenme süresi en uzun bölge?", o: ["Güneydoğu Anadolu", "Karadeniz", "Marmara", "Doğu Anadolu"], a: 0, exp: "Güneydoğu Anadolu güneşlenme süresinde ilk, Karadeniz son sıradadır; bu yüzden güneş enerjisi potansiyeli güneyde yüksektir.", unit: "bolgeler", level: 1 }
  ],

  // ---------- BİLGİ KARTLARI ----------
  cards: [
    { front: "Türkiye'nin matematik konumu", back: "36°-42° Kuzey paralelleri • 26°-45° Doğu meridyenleri • 19 meridyen farkı = 76 dakika yerel saat farkı • Orta kuşakta yer alır", unit: "konum" },
    { front: "Uç noktalar", back: "KUZEY: İnceburun (Sinop) • GÜNEY: Topraktutan köyü (Hatay) • DOĞU: Dilucu (Iğdır) • BATI: Avlaka Burnu (Gökçeada)", unit: "konum" },
    { front: "Kara sınırları", back: "8 komşu: Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Azerbaycan (Nahçıvan), İran, Irak, Suriye • En uzun: Suriye (911 km) • En kısa: Nahçıvan", unit: "konum" },
    { front: "Yüzölçümü", back: "İzdüşüm alan: 783.562 km² • Gerçek alan: ~814.578 km² • Fark, arazinin engebeli olduğunu gösterir • En büyük il: Konya • En küçük il: Yalova", unit: "konum" },
    { front: "İç ve dış kuvvetler", back: "İÇ KUVVETLER (yer içi enerjisi): volkanizma, deprem, orojenez, epirojenez — yer şekillerini oluşturur. DIŞ KUVVETLER (güneş enerjisi): akarsu, rüzgâr, buzul, dalga, yer altı suları — aşındırır.", unit: "yer-sekilleri" },
    { front: "Volkanik dağlar", back: "Doğu Anadolu (batıdan doğuya): Nemrut - Süphan - Tendürek - Ağrı • İç Anadolu: Erciyes, Hasandağı, Melendiz, Karadağ, Karacadağ • Güneydoğu: Karacadağ", unit: "yer-sekilleri" },
    { front: "Karstik şekiller", back: "Kalkerin (kireç taşı) erimesiyle oluşur: lapya, dolin, uvala, polye, obruk, mağara, traverten • En yaygın: Akdeniz (Toroslar) • Pamukkale travertenleri: Denizli", unit: "yer-sekilleri" },
    { front: "Doğal afetler ve bölgeleri", back: "Heyelan: Karadeniz • Çığ: Doğu Anadolu • Rüzgâr erozyonu: Karapınar (Konya) • Sel-taşkın: yamaç eğimi fazla yerler • Deprem: KAF, DAF, Batı Anadolu fay hatları", unit: "yer-sekilleri" },
    { front: "Göl oluşum türleri ve örnekleri", back: "Tektonik: Tuz, Sapanca, İznik • Volkanik set: Van • Heyelan set: Tortum, Abant, Sera • Kıyı set: B.çekmece, K.çekmece • Karstik: Salda • Buzul: Cilo gölleri", unit: "akarsu-goller" },
    { front: "Akarsular → döküldüğü yer", back: "Karadeniz: Kızılırmak, Yeşilırmak, Sakarya, Çoruh • Ege: Gediz, B. ve K. Menderes, Bakırçay • Akdeniz: Seyhan, Ceyhan, Göksu • Marmara: Susurluk • Basra: Fırat, Dicle • Hazar: Aras, Kura", unit: "akarsu-goller" },
    { front: "3 ana iklim tipi", back: "KARADENİZ: her mevsim yağışlı, orman • AKDENİZ: yaz sıcak-kurak, kış ılık-yağışlı, maki • KARASAL: yaz kurak, kış soğuk-karlı, bozkır (İç, Doğu, GD Anadolu)", unit: "iklim" },
    { front: "Coğrafi bölgeler", back: "7 bölge, 1941 Birinci Coğrafya Kongresi'nde belirlendi. En büyük: Doğu Anadolu • En küçük: Güneydoğu Anadolu • En yüksek: Doğu Anadolu • En alçak: Marmara", unit: "bolgeler" },
    { front: "Boğazlar ve denizler", back: "İstanbul ve Çanakkale boğazları Marmara üzerinden Karadeniz'i Ege-Akdeniz'e bağlar • Marmara bir İÇ DENİZ'dir • Boğazların statüsü: 1936 Montrö Sözleşmesi", unit: "bolgeler" },
    { front: "Nüfus (TÜİK 2025)", back: "Türkiye: 86.092.168 • En kalabalık: İstanbul (15,75 milyon), sonra Ankara, İzmir • En az: Bayburt (~83 bin) • Nüfus yoğunluğu en fazla: Marmara • En seyrek: Doğu Anadolu", unit: "nufus-yerlesme" },
    { front: "Yerleşme tipleri ve göç", back: "DAĞINIK yerleşme: Karadeniz (engebe + bol yağış) • TOPLU yerleşme: İç Anadolu ve Güneydoğu (su kaynakları çevresinde) • En çok göç ALAN: Marmara • En çok göç VEREN: Doğu Anadolu", unit: "nufus-yerlesme" },
    { front: "Ürün → yöre eşleşmeleri", back: "Fındık: Ordu-Giresun • Çay: Rize • Kayısı: Malatya • İncir: Aydın • Üzüm: Manisa • Muz: Anamur-Alanya • Antep fıstığı: G.antep-Ş.urfa • Haşhaş: Afyon • Ayçiçeği: Trakya", unit: "tarim-hayvancilik" },
    { front: "Türkiye'nin dünya liderlikleri", back: "Bor rezervi: 1. sıra • Fındık üretimi: 1. sıra • Kuru kayısı: 1. sıra • İncir ve kuru üzümde de dünyanın önde gelen üreticisidir", unit: "tarim-hayvancilik" },
    { front: "Hayvancılık", back: "BÜYÜKBAŞ (sığır): Erzurum-Kars platoları (çayır-mera) • KÜÇÜKBAŞ koyun: İç Anadolu (bozkır) • KIL KEÇİSİ: Akdeniz (Toroslar, çalılık) • Arıcılık: Karadeniz (Ordu) • Kümes: Marmara-Ege", unit: "tarim-hayvancilik" },
    { front: "Maden → yer eşleşmeleri", back: "Bor: Eskişehir-Kütahya-Balıkesir (dünya 1.si) • Taşkömürü: Zonguldak • Linyit: Afşin-Elbistan • Krom: Guleman-Fethiye • Demir: Divriği • Bakır: Murgul-Küre • Petrol: Batman", unit: "madenler-enerji" },
    { front: "GAP ve enerji", back: "GAP: Fırat ve Dicle üzerinde, 9 il (Adıyaman, Batman, Diyarbakır, Gaziantep, Kilis, Mardin, Siirt, Şanlıurfa, Şırnak). Atatürk Barajı (Fırat) projenin kalbi • Jeotermal: Ege • Yenilenebilir: su, rüzgâr, güneş, jeotermal", unit: "madenler-enerji" },
    { front: "Sanayi bölgeleri", back: "En gelişmiş sanayi: Marmara (İstanbul-Kocaeli-Bursa) • Demir-çelik: Karabük (ilk, 1937), Ereğli, İskenderun • Otomotiv: Bursa, Kocaeli • Tekstil: İstanbul, Bursa, Denizli, Gaziantep", unit: "sanayi-ulasim" },
    { front: "Turizm", back: "Deniz turizmi: Antalya, Muğla, İzmir • Kültür/tarih: İstanbul • Doğal-kültürel: Kapadokya (Nevşehir), Pamukkale (Denizli) • Kış turizmi: Uludağ, Palandöken, Erciyes, Kartalkaya", unit: "sanayi-ulasim" },
  ],

  // ---------- İL BULMACA (harita tabanlı) ----------
  iller: [
    { c: "Kuzey Anadolu Dağları'nın en yüksek kesimini oluşturan ve üzerinde buzul şekilleri bulunan Kaçkar Dağları hangi ilimizdedir?", il: "Rize", exp: "Kaçkar Dağları (3.937 m) Doğu Karadeniz'de Rize sınırlarındadır; üzerinde aktif buzyalağı (sirk) gölleri bulunur.", unit: "yer-sekilleri", level: 2 },
    { c: "İç Anadolu'nun en yüksek volkanik dağı olan Erciyes Dağı (3.917 m) hangi ilimiz sınırlarındadır?", il: "Kayseri", exp: "Kayseri'de yer alan Erciyes Dağı, sönmüş bir volkanik dağdır ve İç Anadolu'nun en yüksek zirvesidir.", unit: "yer-sekilleri", level: 1 },
    { c: "Menteşe Dağları'nın (kıyıya paralel uzanan Ege dağları) yer aldığı, engebeli yapısıyla bilinen Ege ili hangisidir?", il: "Muğla", exp: "Muğla'da yer alan Menteşe Dağları kıyıya paralel uzanır. Bu dağlık yapı yörede yağışı artırırken ulaşımı zorlaştırır.", unit: "yer-sekilleri", level: 2 },
    { c: "Yıldız Dağları'nın (Istranca) yer aldığı, engebeli ve ana yollardan uzak olduğu için Marmara'nın en az nüfuslu sınır ili hangisidir?", il: "Kırklareli", exp: "Kırklareli sınırları içindeki Yıldız Dağları, Marmara Bölgesi'nin en engebeli ve seyrek nüfuslu alanlarındandır.", unit: "nufus-yerlesme", level: 2 },
    { c: "Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyonlarla oluşan Türkiye'nin en büyük delta ovası Çukurova hangi ilimizdedir?", il: "Adana", exp: "Adana'da yer alan Çukurova, Seyhan ve Ceyhan nehirlerinin getirdiği zengin alüvyonlarla oluşmuş en verimli delta ovamızdır.", unit: "tarim-hayvancilik", level: 1 },
    { c: "Yeşilırmak'ın taşıdığı alüvyonlarla oluşturduğu Çarşamba delta ovası hangi Karadeniz ilimizdedir?", il: "Samsun", exp: "Samsun'da Yeşilırmak Çarşamba Ovası'nı, Kızılırmak ise Bafra Ovası'nı oluşturarak Karadeniz'e dökülür.", unit: "akarsu-goller", level: 1 },
    { c: "Murgul ilçesinde zengin bakır yatakları çıkarılan ve işletilen Doğu Karadeniz ilimiz hangisidir?", il: "Artvin", exp: "Artvin-Murgul, Türkiye'nin en önemli bakır çıkarım ve işleme merkezlerinden biridir.", unit: "madenler-enerji", level: 2 },
    { c: "Küre ilçesinde zengin bakır yatakları çıkarılan ve Karadeniz kıyısına yakın olan Batı Karadeniz ilimiz hangisidir?", il: "Kastamonu", exp: "Kastamonu-Küre bakır madeniyle ünlüdür; çıkarılan maden İnebolu Limanı üzerinden sevk edilir.", unit: "madenler-enerji", level: 2 },
    { c: "Soma ilçesinde zengin linyit yatakları çıkarılan ve linyitle çalışan büyük bir termik santrale sahip Ege ili hangisidir?", il: "Manisa", exp: "Manisa-Soma linyit kömürü üretimi ve linyitle çalışan termik santraliyle Ege'nin enerji merkezlerindendir.", unit: "madenler-enerji", level: 2 },
    { c: "Fethiye ve Köyceğiz yörelerinde zengin krom yatakları çıkarılan turistik Ege ili hangisidir?", il: "Muğla", exp: "Muğla (Fethiye-Köyceğiz) ve Elazığ (Guleman) Türkiye'nin en büyük iki krom çıkarım alanıdır.", unit: "madenler-enerji", level: 2 },
    { c: "Çay tarımının merkezi olan ve Türkiye'nin en çok yağış alan kıyı ili.", il: "Rize", exp: "Rize, yıllık 2.000 mm'yi aşan yağış miktarı ve her mevsim yağışlı iklimiyle çay tarımının başkentidir.", unit: "iklim", level: 1 },
    { c: "Yüzölçümü en büyük olan ve 'Türkiye'nin tahıl ambarı' olarak bilinen İç Anadolu ili.", il: "Konya", exp: "Konya, geniş düzlükleri ve tarım alanlarıyla buğday üretiminde ilk sıradadır.", unit: "bolgeler", level: 1 },
    { c: "Türkiye'de ilk petrolün çıkarıldığı Raman Dağı'na ev sahipliği yapan Güneydoğu Anadolu ili.", il: "Batman", exp: "1940'larda Raman Dağı'nda petrol bulunmuş ve Türkiye'nin ilk petrol kuyusu Batman'da açılmıştır.", unit: "madenler-enerji", level: 1 },
    { c: "Türkiye'de taş kömürü yataklarının bulunduğu ve demir-çelik sanayisinin geliştiği kıyı ilimiz.", il: "Zonguldak", exp: "Zonguldak'ta çıkarılan taş kömürü, Karabük ve Ereğli'deki demir-çelik fabrikalarında yakıt olarak kullanılır.", unit: "madenler-enerji", level: 1 },
    { c: "Pamukkale travertenlerine ve Türkiye'nin ilk jeotermal santraline (Sarayköy) ev sahipliği yapan Ege ili.", il: "Denizli", exp: "Denizli hem karstik travertenleriyle hem de Sarayköy'deki jeotermal elektrik santraliyle ünlüdür.", unit: "yer-sekilleri", level: 1 },
    { c: "Kuru kayısı üretimi ve ihracatında dünya lideri olan Doğu Anadolu ilimiz.", il: "Malatya", exp: "Malatya, kendine has iklimsel özellikleri ve toprak yapısı ile kuru kayısı üretiminde dünya markasıdır.", unit: "tarim-hayvancilik", level: 1 },
    { c: "Asi Nehri'nin Akdeniz'e döküldüğü ve Türkiye'nin en güney ucunda yer alan sınır ilimiz.", il: "Hatay", exp: "Hatay'ın güney ucundaki Topraktutan köyü Türkiye'nin en güney sınırını oluşturur; Asi Nehri Lübnan'dan doğup burada Akdeniz'e dökülür.", unit: "konum", level: 2 },
    { c: "Anamur ilçesinde muz tarımı yapılan ve Türkiye'nin en büyük dış ticaret limanlarından birine sahip Akdeniz ili.", il: "Mersin", exp: "Mersin'de mikro klima etkisiyle Anamur'da muz yetiştirilir; ayrıca Mersin Limanı en büyük ithalat-ihracat kapılarımızdandır.", unit: "tarim-hayvancilik", level: 2 },
    { c: "Peribacaları, yeraltı şehirleri ve Kapadokya bölgesiyle ünlü İç Anadolu ili.", il: "Nevşehir", exp: "Nevşehir, volkanik tüflerin aşınmasıyla oluşan peribacaları ve zengin tarihi yeraltı şehirleriyle kültür turizmi merkezidir.", unit: "yer-sekilleri", level: 2 },
    { c: "Kuru incir üretiminde Türkiye ve dünyada ilk sırada yer alan Ege ili.", il: "Aydın", exp: "Aydın inciri, Türkiye'nin Avrupa Birliği tescilli coğrafi işaretlerinden biridir ve Ege'nin en önemli ihraç ürünüdir.", unit: "tarim-hayvancilik", level: 2 },
    { c: "Türkiye'de deniz turizmi ve seracılığın (kış ılıklığı sayesinde) en fazla geliştiği Akdeniz ili.", il: "Antalya", exp: "Antalya, kış aylarının ılık geçmesi sayesinde seracılıkta, kıyı özellikleri nedeniyle de yaz turizminde liderdir.", unit: "sanayi-ulasim", level: 2 },
    { c: "Divriği Ulu Camii ve Darüşşifası (UNESCO) ile demir madeni yataklarının en yoğun olduğu ilimiz.", il: "Sivas", exp: "Sivas-Divriği Türkiye'nin en önemli demir madeni yatağıdır; ayrıca Divriği Ulu Camii UNESCO Dünya Miras Listesi'ndedir.", unit: "madenler-enerji", level: 2 },
    { c: "Guleman yöresinde zengin krom yatakları çıkarılan ve Keban Barajı'na ev sahipliği yapan Doğu Anadolu ili.", il: "Elazığ", exp: "Elazığ-Guleman en büyük krom madeni yataklarındandır; Keban Barajı ise Fırat üzerindeki devasa hidroelektrik kaynağımızdır.", unit: "madenler-enerji", level: 2 },
    { c: "Menteşe Yöresi'nde yer alan, engebeli yapısı ve arıcılık (çam balı) faaliyetleriyle bilinen turistik Ege ili.", il: "Muğla", exp: "Muğla, dağlık Menteşe yöresindedir; Türkiye'nin çam balı üretiminin büyük kısmını karşılar ve Bodrum, Fethiye gibi turizm merkezlerine sahiptir.", unit: "tarim-hayvancilik", level: 2 },
    { c: "Erzurum-Kars platosunda büyükbaş mera hayvancılığı yapılan ve tescilli kaşar peyniriyle bilinen sınır ilimiz.", il: "Kars", exp: "Yaz yağışlarıyla yeşeren gür çayırlara sahip Kars platosu büyükbaş hayvancılık ve süt ürünleri için ideal bir ortam sağlar.", unit: "tarim-hayvancilik", level: 3 },
    { c: "Türkiye'nin en kuzey noktası olan İnceburun'a ve doğal fiyort oluşumlu limana sahip Karadeniz ili.", il: "Sinop", exp: "Sinop'ta yer alan İnceburun en kuzey noktamızdır; Hamsilos Koyu ise fiyort benzeri yapısıyla doğal liman özelliğindedir.", unit: "konum", level: 3 },
    { c: "Haşhaş ekiminin en yoğun yapıldığı ve mermer yataklarıyla ünlü İç Ege ili.", il: "Afyonkarahisar", exp: "Afyonkarahisar haşhaş ekiminde (TMO denetimli) ilk sıradadır ve zengin mermer ocaklarıyla ihracata katkı sağlar.", unit: "tarim-hayvancilik", level: 3 },
    { c: "Uludağ kayak merkezine ev sahipliği yapan, Osmanlı Devleti'nin eski başkentlerinden olan Marmara ili.", il: "Bursa", exp: "Bursa hem sanayi (otomotiv, tekstil) hem kış turizmi (Uludağ) hem de zengin Osmanlı tarihiyle kilit bir ilimizdir.", unit: "sanayi-ulasim", level: 3 },
    { c: "Sultaniye cinsi çekirdeksiz üzüm üretiminde birinci sırada yer alan Ege ili.", il: "Manisa", exp: "Manisa Gediz grabeni üzerindeki verimli topraklarında kurutmalık çekirdeksiz Sultaniye üzümünün en çok yetiştirildiği ilimizdir.", unit: "tarim-hayvancilik", level: 3 },
    {"c": "Türkiye'nin en büyük boksit (alüminyum) yataklarının çıkarıldığı Seydişehir ilçesi hangi ilimizdedir?", "il": "Konya", "exp": "Konya Seydişehir'den çıkarılan boksit madeni yine buradaki Seydişehir Alüminyum Tesisleri'nde işlenir.", "unit": "madenler-enerji", "level": 2},
    {"c": "Avrupa'nın en büyük altın madenlerinden biri olan ve Kışladağ altın yatağına ev sahipliği yapan Ege ilimiz hangisidir?", "il": "Uşak", "exp": "Uşak-Kışladağ, Türkiye'nin ve Avrupa'nın en önemli altın üretim sahalarından biridir.", "unit": "madenler-enerji", "level": 3},
    {"c": "Türkiye'nin en genç volkanik sahası olan ve Türkiye'nin ilk ve tek UNESCO tescilli Jeopark alanı olan Kula Volkanları hangi ilimizdedir?", "il": "Manisa", "exp": "Manisa Kula, 'Yanık Ülke' (Katakekaumene) olarak da anılan en genç volkanik konilere sahip UNESCO Jeoparkı'dır.", "unit": "yer-sekilleri", "level": 2},
    {"c": "Nemrut Dağı'nın tepesinde yer alan, dünyanın en büyük ikinci, Türkiye'nin ise en büyük krater gölü (kaldera) hangi ilimiz sınırlarındadır?", "il": "Bitlis", "exp": "Bitlis sınırlarındaki Nemrut Krater Gölü, sönmüş bir volkan olan Nemrut Dağı'nın patlamasıyla oluşan dev bir kalderadır.", "unit": "akarsu-goller", "level": 2},
    {"c": "Turkuaz renkli suyu, beyaz kumsalları ve bünyesindeki magnezyum mineralli yapısıyla 'Türkiye'nin Maldivleri' olarak adlandırılan karstik göl hangi ilimizdedir?", "il": "Burdur", "exp": "Burdur sınırlarındaki Salda Gölü, Türkiye'nin en derin ve temiz tatlı su göllerinden biri olup magnezyum mineralli beyaz tortullara sahiptir.", "unit": "akarsu-goller", "level": 1},
    {"c": "Türkiye'nin ilk demir-çelik fabrikasının (Kardemir), hammadde kaynağı olmadığı halde taşkömürüne (enerji kaynağına) yakınlık nedeniyle kurulduğu il hangisidir?", "il": "Karabük", "exp": "Karabük Demir-Çelik Fabrikası (1937), Zonguldak taşkömürü havzasına yakınlık (enerji kaynağı) nedeniyle buraya kurulmuştur.", "unit": "sanayi-ulasim", "level": 2},
    {"c": "Türkiye'nin en büyük demir-çelik fabrikalarından birinin (İsdemir), ne hammadde ne de enerji kaynağı olmadığı halde liman ve ulaşım kolaylığı nedeniyle kurulduğu Akdeniz ilimiz hangisidir?", "il": "Hatay", "exp": "Hatay-İskenderun'daki demir-çelik fabrikası, ithalat-ihracat kolaylığı ve gelişmiş liman imkanları (ulaşım/pazar) nedeniyle buraya kurulmuştur.", "unit": "sanayi-ulasim", "level": 2},
    {"c": "Bakır yatakları bulunmadığı halde, hinterlandı geniş limanı ve ulaşım kolaylığı nedeniyle Karadeniz'deki tek bakır işleme tesisinin kurulduğu il hangisidir?", "il": "Samsun", "exp": "Samsun'daki bakır işletmesi (Samsun Bakır İzabe Tesisleri), Kastamonu-Küre ve Artvin-Murgul'dan gelen bakırların deniz yoluyla ulaştırılması ve liman kolaylığı (ulaşım) nedeniyle kurulmuştur.", "unit": "sanayi-ulasim", "level": 3},
    {"c": "Çok akışkan lavların yayılmasıyla oluşan ve Türkiye'nin yayvan/kalkan biçimli tek volkan dağı olan Karacadağ hangi ilimiz sınırlarında başlar?", "il": "Diyarbakır", "exp": "Diyarbakır/Şanlıurfa sınırındaki Karacadağ, bazaltik karakterli akışkan lavları nedeniyle kalkan biçimli tek volkan dağımızdır.", "unit": "yer-sekilleri", "level": 3},
    {"c": "Sivas-Divriği'den sonra Türkiye'nin en büyük demir madeni yataklarına sahip olan Hekimhan ve Hasançelebi ilçelerinin yer aldığı Doğu Anadolu ilimiz hangisidir?", "il": "Malatya", "exp": "Malatya (Hekimhan ve Hasançelebi), Sivas-Divriği ile birlikte Türkiye demir ihtiyacının çok büyük bir kısmını karşılayan kritik maden merkezidir.", "unit": "madenler-enerji", "level": 2},
    {"c": "Yüksek güneşlenme süresi ve kurak düzlükleri sayesinde Türkiye'nin en büyük güneş enerjisi santralinin (GES) kurulduğu iç Anadolu ili hangisidir?", "il": "Konya", "exp": "Konya Karapınar'da kurulan devasa Güneş Enerjisi Santrali (Kızören GES), Türkiye'nin kurulu güç bakımından en büyük güneş santralidir.", "unit": "madenler-enerji", "level": 2},
    {"c": "Kışın tamamen donan yüzeyinde atlı kızaklarla gezinti yapılan ve buzu delerek sarıbalık avcılığı yapılan göle sahip en kuzeydoğudaki sınır ilimiz hangisidir?", "il": "Ardahan", "exp": "Ardahan ve Kars sınırında yer alan Çıldır Gölü, kışın buz tutan yüzeyinde yapılan turizm faaliyetleri ve buzu kırarak yapılan balıkçılıkla ünlüdür.", "unit": "akarsu-goller", "level": 2},
    {"c": "Göksu Nehri'nin taşıdığı alüvyonlarla oluşturduğu, üzerinde tarımsal üretimin yoğun olarak yapıldığı Silifke Delta Ovası hangi ilimizdedir?", "il": "Mersin", "exp": "Mersin'de yer alan Silifke Ovası, Göksu Nehri'nin getirdiği alüvyonlarla deniz kıyısında oluşturduğu verimli bir delta ovasıdır.", "unit": "akarsu-goller", "level": 2},
    {"c": "Zengin linyit yataklarına sahip olan ve bu linyitle elektrik üreten Yatağan, Kemerköy ve Yeniköy termik santrallerine ev sahipliği yapan turistik ilimiz hangisidir?", "il": "Muğla", "exp": "Muğla hem Bodrum, Marmaris gibi turizm alanlarına hem de Yatağan, Kemerköy gibi linyit kömürü yakan büyük termik santrallere sahiptir.", "unit": "madenler-enerji", "level": 2},
    {"c": "Kristal kar yapısı ve sarıçam ormanlarıyla ünlü, Doğu Anadolu'nun en önemli kış turizm ve kayak merkezine sahip ili hangisidir?", "il": "Kars", "exp": "Kars Sarıkamış kayak merkezine gidenler, nem oranının düşüklüğü nedeniyle sadece Alpler'de görülen 'kristal kar' yapısını görebilir.", "unit": "sanayi-ulasim", "level": 2},
    {"c": "Tektonik çöküntü alanında oluşmuş, içinde antik dönemden kalma batık şehre ev sahipliği yapan Hazar Gölü hangi Doğu Anadolu ilimizdedir?", "il": "Elazığ", "exp": "Elazığ'daki Hazar Gölü tektonik oluşumludur ve göl tabanında 'Batık Şehir' kalıntıları yer almaktadır.", "unit": "akarsu-goller", "level": 2},
    {"c": "Petrol sondaj kuyularında ve sanayide kullanılan, Türkiye barit rezervlerinin çok büyük bir kısmının çıkarıldığı Alanya ve Gazipaşa ilçeleri hangi ilimizdedir?", "il": "Antalya", "exp": "Antalya (Alanya ve Gazipaşa) ile Kahramanmaraş (Elbistan), Türkiye'nin en önemli barit (ağır maden) yataklarına sahiptir.", "unit": "madenler-enerji", "level": 3},
    {"c": "Fay hatlarının yoğunluğu nedeniyle jeotermal potansiyeli çok yüksek olan ve Germencik jeotermal elektrik santraline ev sahipliği yapan ilimiz hangisidir?", "il": "Aydın", "exp": "Aydın-Germencik, Denizli-Sarayköy ile birlikte Türkiye'nin ilk ve en büyük jeotermal (yer altı sıcak su buharı) enerji üretim alanlarındandır.", "unit": "madenler-enerji", "level": 3},
    {"c": "Türkiye'nin en büyük linyit rezervine sahip olan ve linyitle çalışan devasa termik santralleri barındıran Akdeniz ili hangisidir?", "il": "Kahramanmaraş", "exp": "Kahramanmaraş (Afşin-Elbistan) linyit yatakları, Türkiye'nin en büyük linyit kömürü sahasıdır ve elektrik üretiminde kilit rol oynar.", "unit": "madenler-enerji", "level": 1},
    {"c": "Türkiye'nin yerli doğal gazının çıkarıldığı ve bu gazla çalışan büyük bir elektrik santralinin bulunduğu Hamitabat tesisi hangi Marmara ilindedir?", "il": "Kırklareli", "exp": "Kırklareli Hamitabat, hem yerli doğal gazın çıkarıldığı az sayıdaki alandan biridir hem de büyük bir doğal gaz çevrim santraline sahiptir.", "unit": "madenler-enerji", "level": 2},
    {"c": "Denize kıyısı olmadığı ve petrol çıkarılmadığı halde, iç bölgelerin güvenliği ve savunma sanayisinin tüketim merkezlerine yakınlığı nedeniyle kurulan Orta Anadolu Petrol Rafinerisi hangi ilimizdedir?", "il": "Kırıkkale", "exp": "Kırıkkale Petrol Rafinerisi, ham petrolü boru hattıyla (Ceyhan'dan) alır. Konumu stratejik güvenlik ve tüketim alanlarına yakınlık baz alınarak belirlenmiştir.", "unit": "sanayi-ulasim", "level": 3},
    {"c": "Karadeniz açıklarındaki doğal gaz kuyularından elde edilen gazın karaya çıkarılıp işlendiği Akçakoca tesisi hangi Batı Karadeniz ilindedir?", "il": "Düzce", "exp": "Düzce-Akçakoca, Türkiye'nin Karadeniz açıklarında ilk doğal gaz çıkarımının yapıldığı deniz üstü platformlarına ev sahipliği yapar.", "unit": "madenler-enerji", "level": 3},
    {"c": "Kaz Dağları, Biga Yarımadası engebeleri ve metalik maden yataklarıyla bilinen, Boğaz kıyısındaki Marmara ili hangisidir?", "il": "Çanakkale", "exp": "Çanakkale'nin Biga Yarımadası kesimi, Kaz Dağları'na ev sahipliği yapar; altın, kurşun, çinko ve mermer yatakları bakımından zengindir.", "unit": "yer-sekilleri", "level": 2}
  ],

  // =====================================================
  //  ÖSYM KPSS ÇIKMIŞ SORULAR – COĞRAFYA
  // =====================================================
  cikmis: [
    // ---------- 2024 KPSS ----------
    { q: "Türkiye'nin en yüksek dağı hangisidir?", o: ["Ağrı Dağı (5137 m)", "Erciyes Dağı (3917 m)", "Uludağ (2543 m)", "Kaçkar Dağı (3932 m)"], a: 0, exp: "Ağrı Dağı, 5137 m ile Türkiye'nin ve Orta Doğu'nun en yüksek noktasıdır; Doğu Anadolu'da Ağrı ilimizdedir.", cikmis: true, year: 2024 },
    { q: "Türkiye'de en fazla yağış alan bölge hangisidir?", o: ["Doğu Karadeniz Bölümü", "Ege kıyıları", "Akdeniz kıyıları", "Doğu Anadolu Bölgesi"], a: 0, exp: "Rize çevresini kapsayan Doğu Karadeniz Bölümü, yıllık 2000-2500 mm ile Türkiye'nin en yağışlı kesimini oluşturur.", cikmis: true, year: 2024 },
    { q: "Orta Anadolu'da evapo-transpirasyon oranının çok yüksek olmasına neden olan temel iklim özelliği hangisidir?", o: ["Karasal iklim (yaz kuruluğu ve yüksek sıcaklık)", "Akdeniz iklimi", "Okyanus iklimi", "Muson iklimi"], a: 0, exp: "Orta Anadolu'da yazlar sıcak ve kurak geçer; kış yağışları kar şeklinde olur. Yüksek sıcaklık ve düşük nem bu alanı karasal iklim bölgesi yapar.", cikmis: true, year: 2024 },
    { q: "Türkiye'de tarım arazilerinin en geniş yer tuttuğu bölge hangisidir?", o: ["İç Anadolu Bölgesi", "Ege Bölgesi", "Akdeniz Bölgesi", "Marmara Bölgesi"], a: 0, exp: "İç Anadolu Bölgesi, geniş platolar ve ovalarıyla tahıl tarımına uygun en büyük tarım alanı potansiyeline sahiptir.", cikmis: true, year: 2024 },
    { q: "Ergene Havzası'nın yer aldığı bölge hangisidir?", o: ["Marmara Bölgesi", "Ege Bölgesi", "Trakya", "Karadeniz Bölgesi"], a: 0, exp: "Ergene Havzası, Türkiye'nin Avrupa yakasındaki (Trakya) alçak platolar ve ovalardan oluşan tarım havzasıdır; Marmara Bölgesi'nin Trakya bölümünde yer alır.", cikmis: true, year: 2024 },
    { q: "Van Gölü'nün suyu içilemeyen ve tuzlu-sodalı bir göl olmasının başlıca nedeni hangisidir?", o: ["Akarsularla bağlantısı olmaması (kapalı havza)", "Deniz kıyısında bulunması", "Jeotermal etki", "Yüksek irtifası"], a: 0, exp: "Van Gölü kapalı havzadaki tektonik oluşumlu bir göldür; gelen sular buharlaşarak buradaki mineralleri (karbonat, sodyum) konsantre hale getirir.", cikmis: true, year: 2024 },
    { q: "Türkiye'de pamuk üretimi en fazla hangi bölgede yapılır?", o: ["Ege Bölgesi", "İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi", "Karadeniz Bölgesi"], a: 0, exp: "Ege Bölgesi (özellikle Aydın, Manisa, İzmir) sıcak yazları ve verimli ovaları sayesinde Türkiye'nin en önemli pamuk üretim merkezidir.", cikmis: true, year: 2024 },
    { q: "Türkiye'nin en önemli tuz gölü olan Tuz Gölü hangi bölgededir?", o: ["İç Anadolu Bölgesi", "Ege Bölgesi", "Marmara Bölgesi", "Güneydoğu Anadolu Bölgesi"], a: 0, exp: "Tuz Gölü, İç Anadolu'nun alçak kesiminde (Aksaray-Ankara-Konya üçgeninde) yer alan ve Türkiye'nin toplam tuz ihtiyacının büyük bölümünü karşılayan bir kapalı havza gölüdür.", cikmis: true, year: 2024 },
    { q: "Karadeniz kıyılarında yayla turizminin gelişmesinin temel nedeni nedir?", o: ["Yüksek kesimlerin serin iklimiyle yazları cazip olması", "Deniz turizminin zayıf olması", "Yayla köylerinin terk edilmesi", "Ova tarımının yaygın olmaması"], a: 0, exp: "Karadeniz yaylalarının yaz aylarında serin ve yağışlı iklimi (doğal güzellik, el sanatları, müzik kültürü) dinlence ve kültür turizmini tetikler.", cikmis: true, year: 2024 },
    { q: "Türkiye'de kıyı şeridinin dağlara paralel uzandığı, bu nedenle iç kesimlere geçişin zor olduğu bölge hangisidir?", o: ["Karadeniz Bölgesi", "Ege Bölgesi", "Akdeniz Bölgesi", "Marmara Bölgesi"], a: 0, exp: "Karadeniz kıyılarında dağlar kıyıya paralel uzanır; bu durum kıyıdan iç kesimlere doğal geçit sayısını azaltır, ulaşımı güçleştirir.", cikmis: true, year: 2024 },
    { q: "Ege Bölgesi'nde vadilerin denize dik uzanmasının temel sonucu hangisidir?", o: ["Kıyı girintili çıkıntılı olur, iyi doğal limanlar oluşur", "Kıyı çizgisi düz bir hat oluşturur", "Erozyonun artmasına neden olur", "Yağış miktarı azalır"], a: 0, exp: "Ege kıyılarında vadi tabanları Ege Denizi'ne dalmıştır; oluşan körfezler ve yarımadalar doğal liman potansiyelini artırır, kıyı girintili-çıkıntılıdır.", cikmis: true, year: 2024 },
    { q: "Türkiye'de en fazla güneş enerjisi potansiyeline sahip bölge hangisidir?", o: ["Güneydoğu Anadolu Bölgesi", "Karadeniz Bölgesi", "Doğu Anadolu Bölgesi", "Marmara Bölgesi"], a: 0, exp: "Güneydoğu Anadolu Bölgesi yıllık güneşlenme süresi ve radyasyon miktarıyla en yüksek güneş enerjisi potansiyeline sahiptir.", cikmis: true, year: 2024 },

    // ---------- 2023 KPSS ----------
    { q: "Türkiye nüfusunun en yoğun olduğu bölge hangisidir?", o: ["Marmara Bölgesi", "İç Anadolu Bölgesi", "Ege Bölgesi", "Karadeniz Bölgesi"], a: 0, exp: "Marmara Bölgesi, İstanbul'u da içine alan sanayi, ticaret ve eğitim merkeziyle Türkiye'nin en kalabalık bölgesidir.", cikmis: true, year: 2023 },
    { q: "Türkiye'de dışa açık delta ovaları en çok hangi kıyı tipinde görülür?", o: ["Akdeniz kıyıları (boyuna kıyı)", "Ege kıyıları (enine kıyı)", "Karadeniz kıyıları", "Marmara kıyıları"], a: 0, exp: "Akdeniz kıyılarında dağlar kıyıya paralel uzanır (boyuna kıyı); akarsuların taşıdığı alüvyonların birikmesiyle Çukurova, Bafra, Çarşamba gibi geniş delta ovaları oluşmuştur.", cikmis: true, year: 2023 },
    { q: "Güneydoğu Anadolu Projesi (GAP) hangi iki nehrin havzasında uygulanmaktadır?", o: ["Fırat ve Dicle", "Kızılırmak ve Yeşilırmak", "Seyhan ve Ceyhan", "Meriç ve Ergene"], a: 0, exp: "GAP, Fırat ve Dicle nehirlerinin havzalarını kapsamaktadır; enerji ve sulama odaklı bu proje 9 ili kapsar.", cikmis: true, year: 2023 },
    { q: "Türkiye'de sanayi tesislerinin en yoğun olduğu bölge hangisidir?", o: ["Marmara Bölgesi", "Ege Bölgesi", "İç Anadolu Bölgesi", "Karadeniz Bölgesi"], a: 0, exp: "Marmara Bölgesi, liman olanakları, nitelikli işgücü ve pazara yakınlık avantajlarıyla Türkiye'nin sanayi merkezi konumundadır.", cikmis: true, year: 2023 },
    { q: "Türkiye'nin en uzun akarsuyu hangisidir?", o: ["Kızılırmak (1355 km)", "Fırat", "Sakarya", "Yeşilırmak"], a: 0, exp: "Kızılırmak, 1355 km uzunluğuyla tamamen Türkiye topraklarında yer alan en uzun iç akarsudur; Sivas'tan Karadeniz'e akar.", cikmis: true, year: 2023 },
    { q: "Türkiye'de en geniş yüzölçümüne sahip göl hangisidir?", o: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Burdur Gölü"], a: 0, exp: "Van Gölü yaklaşık 3713 km² yüzölçümüyle Türkiye'nin en büyük gölüdür; tektonik oluşumludur ve kapalı havzada yer alır.", cikmis: true, year: 2023 },
    { q: "Türkiye'nin en büyük doğal limanlarından biri olan İskenderun Körfezi hangi bölgededir?", o: ["Akdeniz Bölgesi", "Ege Bölgesi", "Marmara Bölgesi", "Güneydoğu Anadolu Bölgesi"], a: 0, exp: "İskenderun Körfezi, Akdeniz Bölgesi'nin güneydoğusunda yer alır; Hatay kıyılarındaki bu körfez doğal liman potansiyeliyle stratejik öneme sahiptir.", cikmis: true, year: 2023 },
    { q: "Türkiye'de bağ ve meyve bahçelerinin en yoğun olduğu bölge hangisidir?", o: ["Ege Bölgesi", "İç Anadolu Bölgesi", "Güneydoğu Anadolu Bölgesi", "Karadeniz Bölgesi"], a: 0, exp: "Ege Bölgesi Akdeniz iklimiyle zeytin, üzüm, incir, şeftali gibi subtropikal meyveler açısından Türkiye'nin en gelişmiş meyvecilik bölgesidir.", cikmis: true, year: 2023 },

    // ---------- 2022 KPSS ----------
    { q: "Türkiye'nin Avrupa'daki topraklarını Asia'dan ayıran boğaz hangisidir?", o: ["İstanbul (Boğaziçi) ve Çanakkale Boğazı", "Messina Boğazı", "Gibraltar Boğazı", "Korfu Boğazı"], a: 0, exp: "Türkiye'nin Avrupa ve Asya kıtasındaki toprakları İstanbul ve Çanakkale Boğazları (Türk Boğazları) tarafından birbirinden ayrılır.", cikmis: true, year: 2022 },
    { q: "Türkiye'de tarıma en elverişsiz bölge hangisidir?", o: ["Doğu Anadolu Bölgesi", "Ege Bölgesi", "Marmara Bölgesi", "Akdeniz Bölgesi"], a: 0, exp: "Doğu Anadolu Bölgesi yüksek rakım, uzun ve sert kışlar, engebeli arazi ve kısa vejetasyon süresi nedeniyle tarıma en az elverişli bölgedir.", cikmis: true, year: 2022 },
    { q: "Ülkemizde hayvancılık faaliyetlerinin en gelişmiş olduğu bölge hangisidir?", o: ["Doğu Anadolu Bölgesi", "İç Anadolu Bölgesi", "Karadeniz Bölgesi", "Marmara Bölgesi"], a: 0, exp: "Doğu Anadolu Bölgesi, geniş yaylaları ve otlaklarıyla büyükbaş ve küçükbaş hayvancılık açısından Türkiye'nin en gelişmiş bölgesidir.", cikmis: true, year: 2022 },
    { q: "Türkiye'de doğalgaz rezervlerinin son yıllarda keşfedildiği deniz sahası hangisidir?", o: ["Karadeniz (Sakarya Gaz Sahası)", "Akdeniz", "Ege Denizi", "Marmara Denizi"], a: 0, exp: "2020'de keşfedilen Sakarya Gaz Sahası, Karadeniz'de Türkiye'nin bugüne kadarki en büyük doğalgaz rezervini temsil etmektedir.", cikmis: true, year: 2022 },
    { q: "Türkiye'de nüfus yoğunluğunun en düşük olduğu bölge hangisidir?", o: ["Doğu Anadolu Bölgesi", "Güneydoğu Anadolu Bölgesi", "İç Anadolu Bölgesi", "Karadeniz Bölgesi"], a: 0, exp: "Doğu Anadolu Bölgesi, engebeli arazi ve sert iklim koşulları nedeniyle tarihsel olarak Türkiye'nin en seyrek nüfuslu bölgesi olmuştur.", cikmis: true, year: 2022 },
    { q: "Türkiye'de ulaşım ağının en gelişmiş olduğu bölge hangisidir?", o: ["Marmara Bölgesi", "İç Anadolu Bölgesi", "Ege Bölgesi", "Akdeniz Bölgesi"], a: 0, exp: "Marmara Bölgesi; İstanbul'un ticaret merkezi olması, Boğazların önemi ve yoğun sanayi faaliyetleri sayesinde karayolu, demiryolu ve denizyolu ağlarının en gelişmiş olduğu bölgedir.", cikmis: true, year: 2022 }
  ]
};
