import os

# Paths to the target JS data files
workspace = r"c:\Users\abdul\OneDrive\Masaüstü\kpss-cografya"
tarih_path = os.path.join(workspace, "data", "tarih.js")
cografya_path = os.path.join(workspace, "data", "cografya.js")
vatandaslik_path = os.path.join(workspace, "data", "vatandaslik.js")

def insert_items(filepath, array_name, items_list):
    print(f"Enriching {filepath} -> {array_name}...")
    if not os.path.exists(filepath):
        print(f"File {filepath} not found.")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Locate array_name: [
    target = f"{array_name}: ["
    idx = content.find(target)
    if idx == -1:
        # Try without whitespace or space
        target = f"{array_name}:["
        idx = content.find(target)
        if idx == -1:
            print(f"Could not find array {array_name} in {filepath}")
            return
            
    insert_pos = idx + len(target)
    
    # Format the new items with indentation (6 spaces)
    formatted_items = "\n" + ",\n".join(items_list) + ","
    
    # Check if first item is already in content to avoid duplicates (idempotency)
    first_item_snippet = items_list[0][:40]
    if first_item_snippet in content:
        print(f"Items already seem to be in {array_name} of {filepath}, skipping.")
        return
        
    new_content = content[:insert_pos] + formatted_items + content[insert_pos:]
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Successfully added {len(items_list)} items to {array_name} in {filepath}")

# --- TARİH ---
tarih_quiz = [
    '    { q: "İslamiyet öncesi Türk devletlerinde mezarlara verilen ad hangisidir?", o: ["Kurgan", "Balbal", "Uçmağ", "Tamu"], a: 0, exp: "Mezarlara kurgan denirdi. Balbal mezartaşı/heykeldir. Uçmağ cennet, tamu ise cehennemdir.", unit: "islamiyet-oncesi", level: 1 }',
    '    { q: "İslamiyet öncesi Türk hükümdarlık sembollerinden olan ve hükümdarın miğfer/başlığına takılan atkuyruğu veya tüyden oluşan simge hangisidir?", o: ["Kotuz (Sorguç)", "Örgin (Taht)", "Nevbet (Davul)", "Otağ (Çadır)"], a: 0, exp: "Kotuz veya sorguç, miğfer veya şapkaya takılan simgedir. Taht örgin, davul nevbet, çadır otağdır. Ok ise bağımsızlık sembolü değildir!", unit: "islamiyet-oncesi", level: 2 }',
    '    { q: "Gazneli Mahmut\'un sarayında \'En değerli hazinem\' diyerek övdüğü ünlü Türk-İslam gökbilimci ve coğrafyacısı kimdir?", o: ["Biruni", "Farabi", "İbn-i Sina", "Harezmi"], a: 0, exp: "Gazneli Mahmut, astronomi ve coğrafya bilgini Biruni (El-Biruni) için \'Sarayımın en değerli hazinesidir\' demiştir.", unit: "ilk-turk-islam", level: 2 }',
    '    { q: "1071 Malazgirt Savaşı\'ndan sonra Erzurum çevresinde kurulan Anadolu\'daki ilk Türk beyliği hangisidir?", o: ["Saltuklular", "Danişmentliler", "Mengücekliler", "Artuklular"], a: 0, exp: "Malazgirt Zaferi sonrasında Erzurum çevresinde kurulan ilk beylik Saltuklulardır.", unit: "ilk-turk-islam", level: 1 }',
    '    { q: "Osmanlı Devleti\'nde ilk kadı olarak atanan ve Karacahisar\'da ilk hutbeyi okutan kişi kimdir?", o: ["Dursun Fakıh", "Davud-u Kayseri", "Akşemsettin", "Dursun Bey"], a: 0, exp: "Osmanlı\'nın ilk kadısı ve ilk hutbeyi okutan din bilgini Dursun Fakıh\'tır.", unit: "osmanli-kurulus", level: 1 }',
    '    { q: "Osmanlı esnaf teşkilatı olan Lonca\'da \'iş yeri açma belgesi/ruhsatı\' anlamına gelen terim hangisidir?", o: ["Gedik", "İcazetname", "Narh", "Yedi Vahit"], a: 0, exp: "Esnaflıkta dükkan açma ruhsatına \'gedik\' denir. İcazetname diploma, narh tavan fiyat belirleme, yedi vahit tekelciliktir.", unit: "kultur-medeniyet", level: 2 }',
    '    { q: "Osmanlı Devleti\'nin ilk kâğıt parası olan \'Kaime\' hangi padişah döneminde basılmıştır?", o: ["Sultan Abdülmecit", "II. Mahmut", "Sultan Abdülaziz", "II. Abdülhamit"], a: 0, exp: "İlk kâğıt para Kaime (Kaime-i Mutebere) Abdülmecit döneminde tedavüle sürülmüştür; ilk bakır para Osman Bey, gümüş akçe Orhan Bey, altın para Fatih dönemindedir.", unit: "kultur-medeniyet", level: 1 }',
    '    { q: "Mimar Sinan\'ın \'ustalık eserim\' olarak nitelendirdiği ve UNESCO Dünya Mirası Listesi\'nde yer alan ünlü Edirne yapısı hangisidir?", o: ["Selimiye Camii", "Süleymaniye Camii", "Şehzade Camii", "Mihrimah Sultan Camii"], a: 0, exp: "Selimiye Camii (Edirne) Sinan\'ın ustalık eseri, Süleymaniye (İstanbul) kalfalık, Şehzade Camii çıraklık eseridir.", unit: "kultur-medeniyet", level: 2 }',
    '    { q: "Celali isyanlarının yarattığı güvensizlik ortamı nedeniyle Anadolu köylülerinin topraklarını terk edip şehirlere göç etmesine ne ad verilir?", o: ["Büyük Kaçgun", "Millet Sistemi", "Avarız Göçü", "Salyaneli İltizam"], a: 0, exp: "Celali isyanlarının yarattığı can ve mal güvenliği sorunları nedeniyle köyden kente yapılan büyük kitlesel kaçış hareketine Büyük Kaçgun denir.", unit: "osmanli-duraklama", level: 2 }',
    '    { q: "Osmanlı Devleti\'nde meşrutiyet rejimini yıkmaya yönelik çıkan ilk irticai isyan hareketi hangisidir?", o: ["31 Mart Olayı (1909)", "Patrona Halil İsyanı", "Kabakçı Mustafa İsyanı", "Buçuktepe İsyanı"], a: 0, exp: "31 Mart Olayı (1909) meşrutiyete karşı çıkan ilk isyandır; Hareket Ordusu tarafından bastırılmıştır.", unit: "osmanli-dagilma", level: 1 }'
]

tarih_oncul = [
    '    { q: "Orta Asya Türk devletlerinde hükümdarlık sembolleriyle ilgili olarak;", items: ["Otağ (çadır) ve örgin (taht) hükümdarlık sembolleridir.", "Ok ve yay birlikte hükümdarlık sembolü olarak kabul edilir.", "Tuğ (sancak) ve nevbet (davul) bağımsızlık alametlerindendir."], correct: [0, 2], exp: "Otağ, örgin, tuğ, nevbet sembollerdendir (I ve III doğru). Yay semboldür ancak ok bağımsızlık veya hükümdarlık sembolü değildir (II yanlış).", unit: "islamiyet-oncesi", level: 3 }',
    '    { q: "Anadolu\'da kurulan ilk Türk beylikleri ve özellikleri ile ilgili olarak;", items: ["Danişmentliler, ilk medrese olan Yağıbasan Medresesi\'ni açmıştır.", "Mengücekliler döneminde Divriği Ulu Camii ve Darüşşifası yapılmıştır.", "İzmir çevresinde kurulan Çaka Beyliği ilk Türk deniz donanmasını oluşturmuştur."], correct: [0, 1, 2], exp: "Yağıbasan Danişmentlilerin (I doğru), Divriği Ulu Camii Mengüceklilerin (II doğru), İzmir\'deki donanma Çaka Bey\'indir (III doğru). Üçü de doğrudur.", unit: "ilk-turk-islam", level: 3 }'
]

insert_items(tarih_path, "quiz", tarih_quiz)
insert_items(tarih_path, "oncul", tarih_oncul)


# --- COĞRAFYA ---
cografya_quiz = [
    '    { q: "Akdeniz Bölgesi\'ndeki Teke ve Taşeli platolarının en önemli ortak özelliği nedir?", o: ["Karstik yapıda olmaları ve nüfusun seyrek olması", "Yaz yağışları almaları", "Sanayi faaliyetlerinin gelişmiş olması", "Tarım alanlarının çok geniş olması"], a: 0, exp: "Teke ve Taşeli platoları karstik (kalkerli) arazilerden oluşur; su yer altına sızdığı için tarım zordur, nüfus seyrektir, kıl keçisi beslenir.", unit: "yer-sekilleri", level: 2 }',
    '    { q: "Ege Bölgesi\'nde dağların kıyıya dik uzanmasının sonuçlarından biri DEĞİLDİR?", o: ["Kıyı boyunca heyelan olaylarının çok sık görülmesi", "Deniz etkisinin iç kesimlere sokulabilmesi", "Kıyıların oldukça girintili çıkıntılı olması", "Kıyı ile iç kesimler arasında ulaşımın geçit gerektirmeden kolay olması"], a: 0, exp: "Heyelan bol yağış ve killi yapı nedeniyle Karadeniz\'de sık görülür, Ege\'de dağların uzanışıyla heyelanın ilgisi yoktur. Diğer maddeler dik uzanmanın sonuçlarıdır.", unit: "yer-sekilleri", level: 3 }',
    '    { q: "Türkiye\'de buzul aşındırma ve biriktirme şekillerine en fazla hangi alanlarda rastlanabilir?", o: ["2.000 metrenin üzerindeki yüksek dağlık alanlarda", "Marmara kıyı ovalarında", "Tuz Gölü havzasında", "Ege kıyı düzlüklerinde"], a: 0, exp: "Türkiye\'nin matematik konumu gereği buzul şekilleri sadece 2.000 m\'nin üzerindeki yüksek dağlarda (Kaçkarlar, Aladağlar, Cilo vb.) görülebilir.", unit: "iklim", level: 2 }',
    '    { q: "Akarsuların eğiminin azaldığı, yataklarında yanal aşındırma yaparak kıvrımlar çizdiği yer şekline ne ad verilir?", o: ["Menderes", "Boğaz vadi", "Kanyon", "Kırgıbayır"], a: 0, exp: "Yatak eğiminin azaldığı ve akış hızının düştüğü yerlerde akarsuların çizdiği büklümlere menderes denir. Ege Bölgesi\'ndeki menderesler en ünlü örneklerdir.", unit: "akarsu-goller", level: 2 }'
]

cografya_oncul = [
    '    { q: "Türkiye\'deki yer şekillerinin oluşum süreçleriyle ilgili olarak;", items: ["Heyelan en çok bol yağışlı ve eğimli Karadeniz yamaçlarında görülür.", "Rüzgâr erozyonu en çok kurak Konya ve çevresinde etkilidir.", "Buzul şekilleri Akdeniz kıyı ovalarında yaygın olarak bulunur."], correct: [0, 1], exp: "Heyelan Karadeniz\'de (I doğru), rüzgâr erozyonu Konya çevresinde etkilidir (II doğru). Akdeniz kıyısında buzul şekilleri bulunmaz (III yanlış).", unit: "yer-sekilleri", level: 3 }'
]

insert_items(cografya_path, "quiz", cografya_quiz)
insert_items(cografya_path, "oncul", cografya_oncul)


# --- VATANDAŞLIK ---
vatandaslik_quiz = [
    '    { q: "Hukuk kurallarına aykırı olarak yapılan idari işlemlerin yetkili mahkemelerce ortadan kaldırılması yaptırımına ne denir?", o: ["İptal", "Hükümsüzlük", "Cebri İcra", "Butlan"], a: 0, exp: "İdari işlemlerin mahkeme kararıyla geçersiz kılınarak ortadan kaldırılmasına iptal denir (örn. yıkım kararının mahkemece iptali).", unit: "hukuk-temel", level: 1 }',
    '    { q: "1982 Anayasası\'na göre olağanüstü evlenme yaşı, mahkeme kararıyla en az kaç yaşın doldurulmasıyla mümkündür?", o: ["16 yaş", "17 yaş", "18 yaş", "15 yaş"], a: 0, exp: "Olağanüstü durumlarda mahkeme kararıyla evlenme yaşı 16\'dır. Veli rızasıyla olağan evlenme 17, tam erginlik ise 18 yaştır.", unit: "temel-haklar", level: 2 }',
    '    { q: "Ceza ehliyeti yaş sınırlarıyla ilgili olarak aşağıdakilerden hangisi doğrudur?", o: ["12 yaşını doldurmamış çocukların hiçbir şekilde ceza ehliyeti yoktur", "Sağır ve dilsizlerde ceza ehliyeti yaşı 12\'dir", "15 yaşını dolduran herkese tam ceza uygulanır", "18 yaş altındaki hiç kimseye hapis cezası verilemez"], a: 0, exp: "12 yaşını doldurmamış çocukların ceza ehliyeti yoktur, sadece güvenlik tedbiri uygulanabilir. Sağır ve dilsizlerde sınır +3 yaş eklenerek (15 yaş) uygulanır.", unit: "temel-haklar", level: 2 }',
    '    { q: "Alacaklının borçluyla yaptığı bir sözleşmeyle alacağından vazgeçerek borçluyu borçtan kurtarmasına ne denir?", o: ["İbra", "İfa", "Tecdit (Yenileme)", "Takas"], a: 0, exp: "Alacaklının hakkından vazgeçmesine ibra denir. İfa borcun ödenmesi, tecdit borcun yenilenmesi, takas karşılıklı silinmedir.", unit: "hukuk-temel", level: 2 }'
]

vatandaslik_numbers = [
    '    { f: "Mirasçının mirası reddetme (reddi miras) süresi en fazla kaç aydır?", n: "3 ay", opts: ["3 ay", "1 ay", "6 ay", "12 ay"], exp: "Medeni Kanun\'a göre mirasçı, murisin ölümünü öğrendiği tarihten itibaren 3 ay içinde mirası reddedebilir.", unit: "anayasa-esaslar", level: 2 }',
    '    { f: "Anayasa Mahkemesi\'nin toplam üye sayısı kaçtır?", n: "15", opts: ["15", "17", "11", "13"], exp: "2017 değişikliğiyle Askeri Yargıtay ve AYİM kaldırılınca üye sayısı 17\'den 15\'e düşürülmüştür.", unit: "yargi", level: 1 }'
]

insert_items(vatandaslik_path, "quiz", vatandaslik_quiz)
insert_items(vatandaslik_path, "numbers", vatandaslik_numbers)

print("Enrichment script completed.")
