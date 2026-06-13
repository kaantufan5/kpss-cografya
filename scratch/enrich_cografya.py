import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

workspace = r"c:\Users\abdul\OneDrive\Masaüstü\kpss-cografya"
cografya_path = os.path.join(workspace, "data", "cografya.js")

def insert_items(filepath, array_name, items_list):
    print(f"Enriching {filepath} -> {array_name}...")
    if not os.path.exists(filepath):
        print(f"File {filepath} not found.")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    target = f"{array_name}: ["
    idx = content.find(target)
    if idx == -1:
        target = f"{array_name}:["
        idx = content.find(target)
        if idx == -1:
            print(f"Could not find array {array_name} in {filepath}")
            return
            
    insert_pos = idx + len(target)
    
    new_items = []
    for item in items_list:
        import re
        q_match = re.search(r'q:\s*"([^"]+)"', item)
        if not q_match:
            q_match = re.search(r"q:\s*'([^']+)'", item)
        if not q_match:
            q_match = re.search(r's:\s*"([^"]+)"', item)
        if not q_match:
            q_match = re.search(r"s:\s*'([^']+)'", item)
            
        if q_match:
            unique_str = q_match.group(1)[:40]
            if unique_str in content:
                print(f"Skipping duplicate: {unique_str}...")
                continue
        new_items.append(item)
        
    if not new_items:
        print("No new items to add.")
        return
        
    formatted_items = "\n" + ",\n".join(new_items) + ","
    new_content = content[:insert_pos] + formatted_items + content[insert_pos:]
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Successfully added {len(new_items)} items to {array_name} in {filepath}")

# --- NEW COĞRAFYA QUESTIONS ---
cografya_quiz = [
    # 1. Konum
    '    { q: "Türkiye\'nin en kuzey uç noktası (Sinop-İnceburun) ile en güney uç noktası (Hatay-Beysun) arasındaki kuş uçuşu mesafe yaklaşık kaç kilometredir?", o: ["766 km", "666 km", "866 km", "566 km"], a: 0, exp: "Türkiye\'nin en kuzey (42° K) ve en güney (36° K) enlemleri arasında 6 paralel fark vardır. 6 x 111 = 666 km kuş uçuşu mesafe bulunur. Hata yapmamak için 766 km şıkkı çeldiricidir.", unit: "konum", level: 1 }',
    '    { q: "Türkiye\'nin en doğu noktası ile en batı noktası arasında kaç dakikalık yerel saat farkı vardır?", o: ["76 dakika", "19 dakika", "45 dakika", "38 dakika"], a: 0, exp: "Türkiye 26° ve 45° doğu meridyenleri arasındadır. 45 - 26 = 19 boylam farkı vardır. 19 x 4 = 76 dakika yerel saat farkı oluşur.", unit: "konum", level: 1 }',
    '    { q: "Türkiye\'nin aşağıdaki özelliklerinden hangisi göreceli (özel) konumunun bir sonucudur?", o: ["Üç tarafının denizlerle çevrili olması", "Dört mevsimin belirgin yaşanması", "Kuzeyden esen rüzgârların sıcaklığı düşürmesi", "Gölge yönünün daima kuzeyi göstermesi"], a: 0, exp: "Denizellik, yükselti, kıtalararası köprü olma göreceli konumdur. Dört mevsim, rüzgâr yönü ve gölge yönü ise matematik (mutlak) konumdur.", unit: "konum", level: 2 }',

    # 2. Yer Şekilleri
    '    { q: "Türkiye\'de karstik yer şekillerinin (obruk, lapyalar, travertenler) en yaygın olarak görüldüğü coğrafi bölge hangisidir?", o: ["Akdeniz Bölgesi", "İç Anadolu Bölgesi", "Ege Bölgesi", "Doğu Anadolu Bölgesi"], a: 0, exp: "Kalker (kireçtaşı) yaygınlığı nedeniyle karstik şekiller (Obruk, Polye, traverten) en fazla Akdeniz (Teke ve Taşeli platoları) bölgesindedir.", unit: "yer-sekilleri", level: 1 }',
    '    { q: "Aşağıdaki dağlarımızdan hangisi kıvrımlı dağlar (Antiklinal-Senklinal) sınıfında yer alır?", o: ["Toros Dağları", "Aydın Dağları", "Nemrut Dağı", "Erciyes Dağı"], a: 0, exp: "Toroslar ve Kuzey Anadolu Dağları kıvrımlıdır. Aydın Dağı kırıklı (horst), Nemrut ve Erciyes ise volkaniktir.", unit: "yer-sekilleri", level: 2 }',
    '    { q: "Ege Bölgesi\'nde fay hatlarına bağlı olarak çöken ovalara (graben) ne ad verilir?", o: ["Graben", "Horst", "Volkan", "Delta"], a: 0, exp: "Kırıklı sistemde yükselen kısımlar horst (dağ), çöken ovalar ise grabendir (Bakırçay, Gediz, Küçük ve Büyük Menderes grabenleri).", unit: "yer-sekilleri", level: 1 }',

    # 3. Akarsu ve Göller
    '    { q: "Türkiye sınırları içinde doğup, Gürcistan üzerinden Karadeniz\'e dökülen sınır ötesi akarsuyumuz hangisidir?", o: ["Çoruh Nehri", "Aras Nehri", "Kura Nehri", "Fırat Nehri"], a: 0, exp: "Çoruh Nehri, Bayburt-Erzurum-Artvin dağlarından doğup Batum\'da Karadeniz\'e dökülür.", unit: "akarsu-goller", level: 2 }',
    '    { q: "Dünyanın en büyük sodalı gölü olan ve üzerinde sönmüş bir volkan barındıran gölümüz hangisidir?", o: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü"], a: 0, exp: "Van Gölü, volkanik set gölüdür; sodalı suyuyla dünyanın en büyük sodalı gölü olup Akdamar Adası ve inci kefaliyle ünlüdür.", unit: "akarsu-goller", level: 1 }',

    # 4. İklim ve Bitki Örtüsü
    '    { q: "Akdeniz iklim bölgesinde ormanların tahrip edilmesiyle oluşan kısa boylu çalılık bitki örtüsüne ne ad verilir?", o: ["Maki", "Bozkır (Step)", "Garig", "Antropojen Bozkır"], a: 0, exp: "Akdeniz ikliminde kızılçam ormanlarının tahribiyle maki, makilerin tahribiyle ise garig (frigana) çalıları oluşur.", unit: "iklim", level: 1 }',
    '    { q: "Karadeniz iklim bölgesinin hakim doğal bitki örtüsü hangisidir?", o: ["Geniş ve iğne yapraklı karma ormanlar", "Maki", "Alp çayırları", "Bozkır"], a: 0, exp: "Karadeniz ikliminde her mevsim yağışlı olduğu için gür, nemli karma (geniş ve iğne yapraklı) ormanlar hakimdir.", unit: "iklim", level: 1 }',

    # 5. Nüfus ve Yerleşme
    '    { q: "Türkiye\'de nüfus yoğunluğunun en fazla olduğu coğrafi bölge hangisidir?", o: ["Marmara Bölgesi", "Ege Bölgesi", "İç Anadolu Bölgesi", "Akdeniz Bölgesi"], a: 0, exp: "Marmara Bölgesi, yüzölçümünün küçük olması ve nüfusun aşırı fazla (özellikle İstanbul çevresi) olması nedeniyle kilometrekareye en çok insan düşen bölgemizdir.", unit: "nufus-yerlesme", level: 1 }',
    '    { q: "Doğu Karadeniz ve dağlık engebeli yörelerde tarım arazilerinin küçük, su kaynaklarının bol olması nedeniyle hangi yerleşme dokusu yaygındır?", o: ["Dağınık Yerleşme", "Toplu Yerleşme", "Çizgisel Yerleşme", "Dairesel Yerleşme"], a: 0, exp: "Engebeli arazi ve bol su kaynakları nedeniyle evlerin birbirinden uzak yapıldığı dağınık yerleşmeler Karadeniz\'de görülür; İç Anadolu\'da ise toplu yerleşme yaygındır.", unit: "nufus-yerlesme", level: 2 }',

    # 6. Tarım ve Hayvancılık
    '    { q: "Türkiye\'de üretim alanı en geniş olan, kuraklığa dayanıklı tahıl ürünü hangisidir?", o: ["Buğday", "Pirinç (Çeltik)", "Mısır", "Pamuk"], a: 0, exp: "Buğday, yaz kuraklığı isteyen ve İç Anadolu başta olmak üzere hemen her bölgemizde yetiştirilen en temel tarım ürünümüzdür.", unit: "tarim-hayvancilik", level: 1 }',
    '    { q: "İpek böcekçiliği ve dut ağacı yaprağı tüketimi denince son yıllarda en çok yaş koza üreten ilimiz hangisidir?", o: ["Diyarbakır", "Bursa", "Antalya", "Bilecik"], a: 0, exp: "Geleneksel olarak Bursa akla gelse de, günümüzde yaş ipek kozası üretiminin büyük kısmı Diyarbakır (özellikle Kulp ilçesi) tarafından gerçekleştirilmektedir.", unit: "tarim-hayvancilik", level: 3 }',

    # 7. Madenler ve Enerji
    '    { q: "Türkiye\'de rezervi en fazla olan ve kimya, gübre, cam, çimento sanayisinde kullanılan metalik olmayan maden hangisidir?", o: ["Bor Mineralleri", "Krom", "Bakır", "Demir"], a: 0, exp: "Türkiye dünya bor rezervlerinin %70\'inden fazlasına sahiptir. Eskişehir, Kütahya, Balıkesir yörelerinde yoğunlaşmıştır.", unit: "madenler-enerji", level: 1 }',
    '    { q: "Türkiye\'nin ilk nükleer güç santrali (NGS) hangi ilimizde inşa edilmektedir?", o: ["Mersin (Akkuyu)", "Sinop", "Kırklareli", "Zonguldak"], a: 0, exp: "Türkiye\'nin ilk nükleer santrali Mersin-Akkuyu\'da Rusya işbirliğiyle inşa edilmektedir. İkincisi ise Sinop\'ta planlanmaktadır.", unit: "madenler-enerji", level: 1 }',

    # 8. Sanayi ve Ulaşım
    '    { q: "Türkiye\'de demir-çelik sanayisinde Karabük ve Ereğli (Zonguldak) fabrikalarının kurulmasının temel nedeni nedir?", o: ["Taş kömürü yataklarına (Enerjiye) yakınlık", "Demir madenine yakınlık", "Liman ve deniz ulaşımı", "İş gücü bolluğu"], a: 0, exp: "Karabük ve Ereğli\'de demir madeni çıkmaz (Sivas Divriği\'den taşınır); fakat madeni eritmek için gerekli olan yüksek kalorili taş kömürü (enerji) burada olduğu için kurulmuşlardır.", unit: "sanayi-ulasim", level: 2 }',
    '    { q: "Osmanlı Devleti\'nde yapılan ilk demiryolu hattı İzmir-Aydın arasındadır. Peki Cumhuriyet döneminde inşa edilen demiryollarının öncelikli hedefi ne olmuştur?", o: ["Maden ocaklarını ve limanları iç kesimlere bağlamak", "Balkanlar ile ticareti artırmak", "Turistik yolculukları geliştirmek", "Metropolleri birleştirmek"], a: 0, exp: "Cumhuriyetin ilk yıllarında demiryolları maden ve tarım bölgelerini limanlara ve sanayi merkezlerine bağlamak amacıyla doğu-batı hattında geliştirilmiştir.", unit: "sanayi-ulasim", level: 3 }',

    # 9. Coğrafi Bölgeler
    '    { q: "Yıl içinde güneşli gün sayısının en fazla olduğu, güneş enerjisi potansiyeli en yüksek bölgemiz hangisidir?", o: ["Güneydoğu Anadolu", "Akdeniz", "İç Anadolu", "Ege"], a: 0, exp: "Güneydoğu Anadolu ve Akdeniz bölgeleri en yüksek güneşli gün sürelerine ve en az bulutluluğa sahip alanlardır.", unit: "bolgeler", level: 1 }'
]

cografya_tf = [
    '    { s: "Türkiye Kuzey Yarım Küre\'de, Orta Kuşak\'ta yer alan bir ülkedir.", t: true, exp: "Doğru. Türkiye 36°-42° Kuzey enlemlerindedir. Dört mevsimin belirgin yaşanması ve cephe yağışları bunun kanıtıdır.", unit: "konum", level: 1 }',
    '    { s: "Batı Karadeniz\'de yer alan Küre Dağları kıvrımlı dağlar sınıfındadır.", t: true, exp: "Doğru. Kuzey Anadolu Dağları kıvrım dağlarıdır ve Küre Dağları da bu sistemin bir parçasıdır.", unit: "yer-sekilleri", level: 2 }',
    '    { s: "Tuz Gölü tektonik oluşumlu bir göldür ve yaz aylarında buharlaşma nedeniyle alanı aşırı daralır.", t: true, exp: "Doğru. Tuz Gölü tektonik çukurlukta birikmiş sığ bir göldür; buharlaşmayla yazın bataklık/tuz tabakasına döner.", unit: "akarsu-goller", level: 1 }',
    '    { s: "Ege kıyılarında dağların kıyıya dik uzanması fön rüzgârlarının oluşumunu kolaylaştırır.", t: false, exp: "Yanlış. Fön rüzgârı dağ yamacı boyunca alçalan kuru havadır; dağların kıyıya paralel olduğu Karadeniz ve Akdeniz\'de yaygındır.", unit: "iklim", level: 2 }',
    '    { s: "Türkiye\'de kentsel nüfus oranı kırsal nüfus oranından çok daha fazladır (2025 verilerine göre %90 üzerindedir).", t: true, exp: "Doğru. Büyükşehir yasaları ve göçlerin etkisiyle nüfusun %93\'ünden fazlası kentlerde yaşamaktadır.", unit: "nufus-yerlesme", level: 1 }',
    '    { s: "Muz ve çay, devlet kontrolünde (kotayla) üretilen tarım ürünleridir.", t: false, exp: "Yanlış. Pirinç (çeltik) sağlık/sıtma nedeniyle, haşhaş/tütün ise kalite ve uyuşturucu kontrolü nedeniyle devlet denetimindedir. Muz ve çay kota dışıdır.", unit: "tarim-hayvancilik", level: 2 }',
    '    { s: "Zonguldak ve Çatalağzı çevresinde linyit kömürüyle çalışan termik santraller bulunur.", t: false, exp: "Yanlış. Zonguldak ve Çatalağzı\'ndaki termik santraller taş kömürüyle çalışır. Linyit yatakları Ege ve Linyit santralleri (Soma, Yatağan) oradadır.", unit: "madenler-enerji", level: 2 }',
    '    { s: "Doğu Anadolu Bölgesi, ortalama yükseltinin en fazla olduğu ve karasallığın en şiddetli yaşandığı bölgemizdir.", t: true, exp: "Doğru. Doğu Anadolu en yüksek, en dağlık ve kış sıcaklıklarının en düşük olduğu bölgemizdir.", unit: "bolgeler", level: 1 }'
]

insert_items(cografya_path, "quiz", cografya_quiz)
insert_items(cografya_path, "tf", cografya_tf)

print("Geography data enrichment process finished.")
