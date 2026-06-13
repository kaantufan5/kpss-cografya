import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

workspace = r"c:\Users\abdul\OneDrive\Masaüstü\kpss-cografya"
vatandaslik_path = os.path.join(workspace, "data", "vatandaslik.js")

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

# --- NEW VATANDAŞLIK QUESTIONS ---
vatandaslik_quiz = [
    # 1. Hukukun Temel Kavramları
    '    { q: "Hukuk kurallarının diğer sosyal düzen kurallarından (ahlak, din, görgü) en temel farkı hangisidir?", o: ["Maddi yaptırımlı (Devlet gücüne dayalı) olması", "Yazılı olması", "Herkesi bağlaması", "Toplumsal düzeni sağlaması"], a: 0, exp: "Hukuk kurallarının yaptırımı (müeyyidesi) maddidir; yani devlet gücüyle zorla uygulanır. Din, ahlak, görgü kurallarının yaptırımı ise manevidir (kınama, günahkar sayılma vb.).", unit: "hukuk-temel", level: 1 }',
    '    { q: "Bir ülkede yetkili bir makam tarafından konulan ve yürürlükte olan yazılı hukuk kurallarının tamamına ne ad verilir?", o: ["Mevzu Hukuk (Mevzuat)", "Pozitif Hukuk (Müspet)", "Tabii Hukuk (Doğal)", "Tarihi Hukuk"], a: 0, exp: "Sadece yazılı kurallara mevzu hukuk (mevzuat) denir. Pozitif hukuk ise hem yazılı hem de yazısız (örf-adet) kuralları kapsar.", unit: "hukuk-temel", level: 2 }',
    '    { q: "Kişinin kendi fiilleriyle haklar kazanabilmesi ve borçlar altına girebilmesi yeteneğine ne ad verilir?", o: ["Fiil Ehliyeti", "Hak Ehliyeti", "Hukuki İşlem Yeteneği", "Sorumluluk Yeteneği"], a: 0, exp: "Hak ehliyeti tam ve sağ doğmak şartıyla ana rahmine düştüğü andan itibaren başlar (pasiftir). Fiil ehliyeti ise ergin olmak, ayırt etme gücüne sahip olmak ve kısıtlı olmamakla başlar (aktiftir).", unit: "hukuk-temel", level: 2 }',

    # 2. Devlet ve Hükûmet Sistemleri
    '    { q: "Yasama, yürütme ve yargı güçlerinin tek bir kişide veya organda toplandığı, güçler birliği ilkesine dayanan hükümet biçimi hangisidir?", o: ["Mutlak Monarşi (Diktatörlük)", "Meşruti Monarşi", "Parlamenter Sistem", "Başkanlık Sistemi"], a: 0, exp: "Güçler birliği sisteminde tüm kuvvetler tek organda birleşir (Monarşiler veya Meclis Hükümeti Sistemi). Güçler ayrılığında ise yasama, yürütme ve yargı ayrıdır.", unit: "devlet-sistemler", level: 1 }',
    '    { q: "Yasama ve yürütme güçlerinin sert bir şekilde ayrıldığı, devlet başkanının doğrudan halk tarafından seçildiği hükümet sistemi hangisidir?", o: ["Başkanlık Sistemi", "Yarı Başkanlık Sistemi", "Parlamenter Sistem", "Meclis Hükümeti Sistemi"], a: 0, exp: "Başkanlık sisteminde sert bir güçler ayrılığı vardır; yürütme tek başlıdır (başkan) ve yasama-yürütme birbirini feshedemez.", unit: "devlet-sistemler", level: 2 }',

    # 3. Anayasa ve Temel Esaslar
    '    { q: "1982 Anayasası\'na göre Türkiye Cumhuriyeti Devleti\'nin yönetim şekli hangisidir?", o: ["Cumhuriyet", "Demokrasi", "Federal Devlet", "Başkanlık"], a: 0, exp: "Anayasa\'nın 1. maddesine göre: \'Türkiye Devleti bir Cumhuriyettir.\' Bu madde değiştirilemez ve değiştirilmesi teklif edilemez.", unit: "anayasa-esaslar", level: 1 }',
    '    { q: "1982 Anayasası\'nın değiştirilemez, değiştirilmesi teklif dahi edilemez maddeleri arasında aşağıdakilerden hangisi yer almaz?", o: ["Seçimlerin 5 yılda bir yapılması", "Devletin şeklinin Cumhuriyet olması", "Milli marşın İstiklal Marşı olması", "Başkentin Ankara olması"], a: 0, exp: "Anayasa\'nın ilk 3 maddesi değiştirilemez (4. madde koruması altındadır). Seçim süresi 5. maddededir ve değiştirilebilir.", unit: "anayasa-esaslar", level: 2 }',

    # 4. Temel Hak ve Ödevler
    '    { q: "Aşağıdakilerden hangisi 1982 Anayasası\'nda düzenlenen \'Kişinin Hakları ve Ödevleri\' (Negatif statü / Koruyucu haklar) arasında yer alır?", o: ["Konut Dokunulmazlığı", "Çalışma Hakkı", "Seçme ve Seçilme Hakkı", "Eğitim ve Öğrenim Hakkı"], a: 0, exp: "Konut dokunulmazlığı, mülkiyet hakkı, dernek kurma hakkı negatif statü (kişi hakları) haklarındandır. Çalışma ve eğitim sosyal/ekonomik, seçme-seçilme ise siyasi haktır.", unit: "temel-haklar", level: 2 }',
    '    { q: "Aşağıdakilerden hangisi siyasi hak ve ödevlerimizden (Aktif statü / Katılma hakları) biridir?", o: ["Vatan Hizmeti (Askerlik) ve Vergi Ödevi", "Dilekçe Hakkı ve Çalışma Hakkı", "Mülkiyet Hakkı", "Din ve Vicdan Hürriyeti"], a: 0, exp: "Askerlik (vatan hizmeti), vergi ödevi, seçme-seçilme, vatandaşlık hakkı ve dilekçe hakkı siyasi (katılma) haklarındandır.", unit: "temel-haklar", level: 1 }',

    # 5. Yasama
    '    { q: "1982 Anayasası\'na göre Türkiye Büyük Millet Meclisi (TBMM) kaç milletvekilinden oluşur?", o: ["600", "550", "650", "500"], a: 0, exp: "2017 anayasa değişiklikleri ile milletvekili sayısı 550\'den 600\'e çıkarılmıştır.", unit: "yasama", level: 1 }',
    '    { q: "1982 Anayasası\'na göre TBMM ve Cumhurbaşkanlığı seçimleri kaç yılda bir, aynı gün yapılır?", o: ["5 yılda bir", "4 yılda bir", "6 yılda bir", "3 yılda bir"], a: 0, exp: "2017 anayasa değişikliğiyle birlikte TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı gün gerçekleştirilir.", unit: "yasama", level: 1 }',
    '    { q: "Milletvekillerinin meclis çalışmalarındaki söz, oy ve düşüncelerinden dolayı cezai olarak sorumlu tutulamamasına ne ad verilir?", o: ["Yasama Sorumsuzluğu", "Yasama Dokunulmazlığı", "Milletvekili Ayrıcalığı", "Parlamento Kararı"], a: 0, exp: "Yasama sorumsuzluğu mutlak ve süreklidir; milletvekilinin meclis içindeki fikir hürriyetini korur. Yasama dokunulmazlığı ise nisbidir, meclis kararıyla kaldırılabilir.", unit: "yasama", level: 2 }',

    # 6. Yürütme
    '    { q: "1982 Anayasası\'na göre yürütme yetkisi ve görevi kime aittir?", o: ["Cumhurbaşkanı", "Bakanlar Kurulu", "Başbakan", "TBMM"], a: 0, exp: "2017 anayasa değişikliği ile Bakanlar Kurulu ve Başbakanlık kaldırılmış, yürütme yetkisi tamamen tek başlı hale getirilerek Cumhurbaşkanı\'na verilmiştir.", unit: "yurutme", level: 1 }',
    '    { q: "Bir kişinin en fazla kaç kez Cumhurbaşkanı seçilebilmesi kuralı anayasada yer alır?", o: ["En fazla iki kez", "En fazla bir kez", "Sınırsız sayıda", "En fazla üç kez"], a: 0, exp: "Anayasaya göre bir kimse en fazla iki defa Cumhurbaşkanı seçilebilir. Ancak TBMM seçimleri yenilerse, ikinci dönemindeki Cumhurbaşkanı bir kez daha aday olabilir.", unit: "yurutme", level: 2 }',

    # 7. Yargı
    '    { q: "Anayasa Mahkemesi (AYM) kaç üyeden oluşur ve üyelerini kim seçer?", o: ["15 üye (12\'sini Cumhurbaşkanı, 3\'ünü TBMM seçer)", "17 üye (15\'ini Cumhurbaşkanı, 2\'sini TBMM seçer)", "15 üye (Tamamını Cumhurbaşkanı seçer)", "12 üye (Tamamını TBMM seçer)"], a: 0, exp: "2017 değişikliğiyle askeri mahkemeler kapatılınca AYM üye sayısı 17\'den 15\'e düşmüştür. 12 üyeyi Cumhurbaşkanı, 3 üyeyi ise TBMM seçer.", unit: "yargi", level: 2 }',
    '    { q: "Hakimler ve Savcılar Kurulu (HSK) kaç üyeden oluşur ve başkanı kimdir?", o: ["13 üye - Başkanı Adalet Bakanı\'dır", "15 üye - Başkanı Adalet Bakanı Müsteşarı\'dır", "11 üye - Başkanı Cumhurbaşkanı\'dır", "13 üye - Başkanı AYM Başkanı\'dır"], a: 0, exp: "HSK 13 üyeden oluşur ve 2 daire halinde çalışır. Kurulu başkanı Adalet Bakanı\'dır.", unit: "yargi", level: 3 }',

    # 8. İdare
    '    { q: "Aşağıdakilerden hangisi yerinden yönetim (mahalli idareler / yerel yönetim) kuruluşlarından biri değildir?", o: ["Kaymakamlık", "Belediyeler", "İl Özel İdaresi", "Köy İdaresi"], a: 0, exp: "Kaymakamlık ve valilik, merkezden yönetimin taşra teşkilatıdır. Belediye, İl özel idaresi ve köy ise yerinden yönetim (mahalli idare) kuruluşlarıdır.", unit: "idare", level: 1 }',
    '    { q: "Devlet memurlarının haftalık çalışma süresi genel olarak kaç saattir?", o: ["40 saat", "45 saat", "35 saat", "48 saat"], a: 0, exp: "657 sayılı Devlet Memurları Kanunu\'na göre memurların haftalık çalışma süresi genel olarak 40 saattir ve cumartesi-pazar tatildir.", unit: "idare", level: 2 }',

    # 9. Güncel ve Uluslararası
    '    { q: "Türkiye\'nin de kurucu üye olduğu, merkezi Cenevre\'de bulunan ve İkinci Dünya Savaşı sonrasında kurulan dünya barışı koruma kuruluşu hangisidir?", o: ["Birleşmiş Milletler (BM)", "Avrupa Birliği (AB)", "Kuzey Atlantik Paktı (NATO)", "İslam İşbirliği Teşkilatı"], a: 0, exp: "Türkiye 1945 San Francisco Konferansı ile BM\'ye kurucu üye olarak katılmıştır. Merkezi New York\'tadır (soruda Cenevre denilen alt organlar mevcuttur).", unit: "guncel-uluslararasi", level: 1 }'
]

vatandaslik_tf = [
    '    { s: "Hukukta hak ehliyeti, kişinin sağ ve tam olarak doğduğu andan itibaren başlar.", t: true, exp: "Doğru. Hak ehliyeti pasif bir ehliyettir ve hak sahibi olabilmeyi ifade eder.", unit: "hukuk-temel", level: 1 }',
    '    { s: "1982 Anayasası\'na göre Türkiye Cumhuriyeti laik, sosyal ve demokratik bir hukuk devletidir.", t: true, exp: "Doğru. Anayasa\'nın 2. maddesinde devletin nitelikleri bu şekilde sayılmıştır.", unit: "anayasa-esaslar", level: 1 }',
    '    { s: "Vatandaşlık hakkı, anayasada düzenlenen sosyal ve ekonomik haklarımız arasında yer alır.", t: false, exp: "Yanlış. Vatandaşlık hakkı ve ödevi siyasi (aktif statü) haklarımız arasındadır.", unit: "temel-haklar", level: 2 }',
    '    { s: "Milletvekili seçilme yaşı 2017 anayasa değişikliği ile 18\'e düşürülmüştür.", t: true, exp: "Doğru. Daha önce 25 olan seçilme yaşı 2017 referandumuyla 18\'e indirilmiştir.", unit: "yasama", level: 1 }',
    '    { s: "Cumhurbaşkanı kararnameleri anayasaya göre yalnızca TBMM onayıyla yürürlüğe girer.", t: false, exp: "Yanlış. Cumhurbaşkanı kararnameleri Resmi Gazete\'de yayımlandıkları gün yürürlüğe girer, TBMM onayına sunulmaz (bazı kanunla çelişme durumları hariç).", unit: "yurutme", level: 2 }',
    '    { s: "Yargıtay, adliye mahkemelerince verilen karar ve hükümlerin son inceleme merciidir (yüksek mahkemedir).", t: true, exp: "Doğru. Yargıtay adli yargının, Danıştay ise idari yargının en yüksek mahkemesidir.", unit: "yargi", level: 1 }',
    '    { s: "Vali, il özel idaresinin başı ve yürütme organıdır.", t: true, exp: "Doğru. Vali, hem devletin/hükümetin temsilcisi hem de il özel idaresinin yürütme organıdır.", unit: "idare", level: 2 }',
    '    { s: "Kuzey Atlantik Antlaşması Örgütü (NATO) kurucu üyeleri arasında Türkiye de yer almaktadır.", t: false, exp: "Yanlış. NATO 1949\'da kurulmuştur; Türkiye ise 1952\'de Kore Savaşı\'na asker gönderdikten sonra üye olmuştur.", unit: "guncel-uluslararasi", level: 2 }'
]

insert_items(vatandaslik_path, "quiz", vatandaslik_quiz)
insert_items(vatandaslik_path, "tf", vatandaslik_tf)

print("Vatandaslik data enrichment process finished.")
