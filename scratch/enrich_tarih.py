import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

workspace = r"c:\Users\abdul\OneDrive\Masaüstü\kpss-cografya"
tarih_path = os.path.join(workspace, "data", "tarih.js")

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
    
    # Filter items that are already in the file to prevent duplicates
    new_items = []
    for item in items_list:
        # Extract a unique identifier from the question, e.g. the q key value
        import re
        q_match = re.search(r'q:\s*"([^"]+)"', item)
        if not q_match:
            q_match = re.search(r"q:\s*'([^']+)'", item)
        
        # If it's a True/False statement
        if not q_match:
            q_match = re.search(r's:\s*"([^"]+)"', item)
        if not q_match:
            q_match = re.search(r"s:\s*'([^']+)'", item)
            
        if q_match:
            unique_str = q_match.group(1)[:40] # check first 40 chars
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

# --- NEW TARİH QUESTIONS ---
tarih_quiz = [
    # 1. İslamiyet Öncesi
    '    { q: "İslamiyet öncesi Türklerde boyların birleşmesiyle oluşan halk/millet kavramı hangisidir?", o: ["Bodun", "Oguş", "Urug", "İl"], a: 0, exp: "Toplumsal yapı: Oguş (Aile) -> Urug (Sülale) -> Boy -> Bodun (Millet) -> İl (Devlet) şeklindedir.", unit: "islamiyet-oncesi", level: 1 }',
    '    { q: "Uygur Devleti\'nde duvar resmi sanatına verilen ad hangisidir?", o: ["Fresko", "Minyatür", "Hat", "Vitray"], a: 0, exp: "Uygurlarda duvar resmine fresko denir. Vitray cam süslemedir. Minyatür ise kitap resmidir.", unit: "islamiyet-oncesi", level: 2 }',
    '    { q: "İslamiyet öncesi Türk devletlerinde kurultay üyelerine verilen genel ad hangisidir?", o: ["Toygun", "Ayguci", "Tudun", "Buyruk"], a: 0, exp: "Kurultay (Toy) üyelerine toygun denir. Ayguci vezir, tudun sivil vergi memuru, buyruk ise bakandır.", unit: "islamiyet-oncesi", level: 3 }',
    '    { q: "Hükümdar adına para bastıran ilk Türk hükümdarı kimdir?", o: ["Baga Tarkan (Türgişler)", "Mete Han (Hunlar)", "Bumin Kağan (Göktürkler)", "Kutluk Bilge Kül Kağan (Uygurlar)"], a: 0, exp: "Kendi adına para bastıran ilk Türk hükümdarı Türgişlerin kurucusu Baga Tarkan\'dır.", unit: "islamiyet-oncesi", level: 2 }',
    '    { q: "Almanların ünlü Nibelungen Destanı\'nda \'Etzel\' ismiyle anılan ve Tanrı\'nın Kırbacı olarak bilinen Avrupa Hun hükümdarı kimdir?", o: ["Attila", "Balamir", "Uldız", "Rua"], a: 0, exp: "Avrupa Hun Devleti\'nin en parlak dönemi hükümdarı Attila, Nibelungen Destanı\'nda Etzel adıyla anılır.", unit: "islamiyet-oncesi", level: 1 }',
    
    # 2. İlk Türk-İslam
    '    { q: "Karahanlılar döneminde Satuk Buğra Han İslamiyet\'i kabul ettikten sonra hangi ismi almıştır?", o: ["Abdülkerim", "Ahmet", "Mahmut", "Alp Tigin"], a: 0, exp: "Satuk Buğra Han İslamiyet\'i kabul edince Abdülkerim adını almıştır ve Karahanlılar resmi din olarak İslam\'ı benimsemiştir.", unit: "ilk-turk-islam", level: 1 }',
    '    { q: "Gazneliler Devleti\'nin kurucusu kimdir?", o: ["Alp Tigin", "Sebük Tigin", "Gazneli Mahmut", "Sultan Mesut"], a: 0, exp: "Gazneliler, Samanoğulları\'nın Horasan valisi olan Alp Tigin tarafından kurulmuştur.", unit: "ilk-turk-islam", level: 2 }',
    '    { q: "Mısır\'da kurulan ilk Türk-İslam devleti hangisidir?", o: ["Tolunoğulları", "İhşidiler (Akşitler)", "Eyyubiler", "Memlükler"], a: 0, exp: "Mısır\'da kurulan ilk Türk-İslam devleti Tolunoğulları\'dır (868-905). Kurucusu Tolunoğlu Ahmet\'tir.", unit: "ilk-turk-islam", level: 1 }',
    '    { q: "Kudüs\'ü Haçlılardan geri alarak III. Haçlı Seferi\'ne yol açan ve \'Kudüs Fatihi\' olarak bilinen hükümdar kimdir?", o: ["Selahattin Eyyubi", "Baybars", "Melikşah", "Alparslan"], a: 0, exp: "Selahattin Eyyubi, 1187 Hıttin Savaşı ile Kudüs\'ü Haçlılardan geri almıştır.", unit: "ilk-turk-islam", level: 2 }',
    '    { q: "Moğolları tarihte ilk kez durduran ve 1260 Ayn Calut Savaşı\'nı kazanan Türk devleti hangisidir?", o: ["Memlükler", "Eyyubiler", "Büyük Selçuklu", "Harzemşahlar"], a: 0, exp: "Memlükler, Ayn Calut Savaşı ile Moğolları (İlhanlılar) durduran ilk devlettir.", unit: "ilk-turk-islam", level: 3 }',

    # 3. Osmanlı Kuruluş
    '    { q: "Osmanlı Devleti\'nde padişahın vekili olan ve onun mührünü taşıyan divan üyesi hangisidir?", o: ["Sadrazam (Veziriazam)", "Kazasker", "Defterdar", "Nişancı"], a: 0, exp: "Sadrazam, padişahın mutlak vekilidir ve padişah sefere gitmediğinde \'Serdar-ı Ekrem\' unvanıyla orduyu yönetir.", unit: "osmanli-kurulus", level: 1 }',
    '    { q: "Osmanlı Devleti\'nde ilk divan teşkilatı ve ilk vezirlik makamı hangi padişah döneminde kurulmuştur?", o: ["Orhan Bey", "Osman Bey", "I. Murat", "Yıldırım Bayezid"], a: 0, exp: "Orhan Bey döneminde devletin kurumsallaşması amacıyla ilk divan kurulmuş ve Alaeddin Bey ilk vezir olarak atanmıştır.", unit: "osmanli-kurulus", level: 2 }',
    '    { q: "Osmanlı Devleti\'nin Bizans ile yaptığı ilk savaş hangisidir?", o: ["Koyunhisar Savaşı (Bafeus)", "Maltepe Savaşı (Pelekanon)", "Sazlıdere Savaşı", "Çirmen Savaşı"], a: 0, exp: "1302 Koyunhisar (Bafeus) Savaşı, Osman Bey döneminde Bizans ile yapılan ilk savaştır.", unit: "osmanli-kurulus", level: 3 }',
    '    { q: "Yıldırım Bayezid\'in 1396 Niğbolu Savaşı zaferinden sonra Abbasi Halifesi tarafından aldığı unvan hangisidir?", o: ["Sultan-ı İklim-i Rum", "Ebul Feth", "Hadimül Haremeyn", "Serdar-ı Ekrem"], a: 0, exp: "Niğbolu zaferinden sonra Halife, Yıldırım\'a \'Rum (Anadolu) Coğrafyasının Sultanı\' anlamına gelen Sultan-ı İklim-i Rum unvanını vermiştir.", unit: "osmanli-kurulus", level: 2 }',

    # 4. Osmanlı Yükselme
    '    { q: "Otlukbeli Savaşı ile Fatih Sultan Mehmet\'e yenilerek yıkılış sürecine giren Doğu Anadolu merkezli beylik/devlet hangisidir?", o: ["Akkoyunlular", "Karakoyunlular", "Safeviler", "Dulkadiroğulları"], a: 0, exp: "1473 Otlukbeli Savaşı ile Akkoyunlu Devleti (Uzun Hasan) Fatih\'e yenilmiş ve zayıflayarak yıkılmıştır.", unit: "osmanli-yukselme", level: 2 }',
    '    { q: "Osmanlı Devleti\'nde Kırım\'ın fethiyle hangi deniz bir Türk gölü haline gelmiştir?", o: ["Karadeniz", "Akdeniz", "Ege Denizi", "Marmara Denizi"], a: 0, exp: "Fatih döneminde Gedik Ahmet Paşa komutasında 1475\'te Kırım\'ın fethiyle Karadeniz bir Türk gölü haline gelmiştir.", unit: "osmanli-yukselme", level: 1 }',
    '    { q: "Yavuz Sultan Selim döneminde hangi savaş ile Memlükler yıkılmış ve halifelik Osmanlı\'ya geçmiştir?", o: ["Ridaniye Savaşı", "Mercidabık Savaşı", "Turnadağ Savaşı", "Çaldıran Savaşı"], a: 0, exp: "1516 Mercidabık ile Suriye, 1517 Ridaniye Savaşı ile Mısır fethedilmiş, Memlükler yıkılarak halifelik Osmanlı\'ya geçmiştir.", unit: "osmanli-yukselme", level: 1 }',
    '    { q: "Kanuni Sultan Süleyman\'ın son seferi hangisidir?", o: ["Zigetvar Seferi", "Viyana Kuşatması", "Belgrad\'ın Fethi", "Mohaç Savaşı"], a: 0, exp: "Kanuni\'nin 1566\'daki son seferi Zigetvar Seferi\'dir. Kuşatma sürerken çadırında vefat etmiştir.", unit: "osmanli-yukselme", level: 3 }',

    # 5. Duraklama ve Gerileme
    '    { q: "Osmanlı Devleti\'nin batıda en geniş sınırlara ulaştığı antlaşma hangisidir?", o: ["Bucaş Antlaşması (1672)", "Karlofça Antlaşması", "Zitvatorok Antlaşması", "İstanbul Antlaşması"], a: 0, exp: "Lehistan ile imzalanan Bucaş Antlaşması (1672) ile Osmanlı Batı\'da en geniş sınırlara ulaşmıştır.", unit: "osmanli-duraklama", level: 2 }',
    '    { q: "Osmanlı\'da ilk bütçeyi hazırlayarak saray giderlerini kısmaya çalışan ve saray entrikalarıyla öldürülen Tarhuncu Ahmet Paşa hangi padişah döneminde sadrazamlık yapmıştır?", o: ["IV. Mehmet", "IV. Murat", "I. Ahmet", "II. Osman"], a: 0, exp: "Tarhuncu Ahmet Paşa, IV. Mehmet (Avcı) döneminde ilk kez modern bütçe (denk bütçe) çalışması yapmıştır.", unit: "osmanli-duraklama", level: 3 }',
    '    { q: "Lale Devri\'nde itfaiye teşkilatının temeli olarak kurulan yapı hangisidir?", o: ["Tulumbacılar Ocağı", "Cebeciler", "Hendesehane", "Eşkinci Ocağı"], a: 0, exp: "Lale Devri\'nde yeniçerilerden oluşan ve yangınlara müdahale eden Tulumbacılar Ocağı (itfaiye) kurulmuştur.", unit: "osmanli-duraklama", level: 2 }',
    '    { q: "Rusya\'ya ilk kez kapitülasyon verilen antlaşma hangisidir?", o: ["Küçük Kaynarca Antlaşması (1774)", "Yaş Antlaşması", "Belgrad Antlaşması", "Prut Antlaşması"], a: 0, exp: "Rusya, 1774 Küçük Kaynarca Antlaşması ile Osmanlı\'dan kapitülasyon alma hakkı elde etmiştir.", unit: "osmanli-duraklama", level: 1 }',

    # 6. Dağılma
    '    { q: "II. Mahmut döneminde Yeniçeri Ocağı\'nın kaldırılması olayına ne ad verilir?", o: ["Vaka-i Hayriye (1826)", "Vaka-i Vakvakiye", "31 Mart Olayı", "Edirne Olayı"], a: 0, exp: "Yeniçeri Ocağı\'nın kaldırılmasına hayırlı olay anlamına gelen Vaka-i Hayriye (1826) denir. Yerine Asakir-i Mansure-i Muhammediye ordusu kurulmuştur.", unit: "osmanli-dagilma", level: 1 }',
    '    { q: "Osmanlı Devleti\'nde padişahın kanun gücünün üstünlüğünü kabul ettiği ilk gelişme hangisidir?", o: ["Tanzimat Fermanı (1839)", "Sened-i İttifak", "Islahat Fermanı", "Kanun-i Esasi"], a: 0, exp: "Tanzimat Fermanı ile padişah ilk kez kanun gücünün kendi gücünün üstünde olduğunu beyan etmiştir.", unit: "osmanli-dagilma", level: 2 }',
    '    { q: "Gayrimüslimlere devlet memuru olabilme, bedelli askerlik yapabilme ve il genel meclislerine üye olabilme haklarını tanıyan ferman hangisidir?", o: ["Islahat Fermanı (1856)", "Tanzimat Fermanı", "Sened-i İttifak", "Kanun-i Esasi"], a: 0, exp: "1856 Islahat Fermanı, özellikle gayrimüslimlere haklar vererek Avrupalıların iç işlerimize karışmasını önlemeyi amaçlamıştır.", unit: "osmanli-dagilma", level: 2 }',
    '    { q: "Osmanlı Devleti\'nin ilk anayasası olan Kanun-i Esasi hangi padişah döneminde yürürlüğe girmiştir?", o: ["II. Abdülhamit", "Sultan Abdülaziz", "Sultan Abdülmecit", "V. Mehmet Reşat"], a: 0, exp: "İlk Osmanlı anayasası Kanun-i Esasi, 1876 yılında II. Abdülhamit döneminde ilan edilmiş ve I. Meşrutiyet başlamıştır.", unit: "osmanli-dagilma", level: 1 }',

    # 7. Kültür ve Medeniyet
    '    { q: "Osmanlı toprak sisteminde, geliri doğrudan devlet hazinesine aktarılan ve iltizam sistemiyle kiralanan toprak türü hangisidir?", o: ["Mukataa", "Paşmaklık", "Arpalık", "Malikane"], a: 0, exp: "Geliri doğrudan hazineye giden topraklara mukataa denir. İltizam sistemiyle bu toprakların vergileri peşin alınır.", unit: "kultur-medeniyet", level: 2 }',
    '    { q: "Osmanlı esnaf teşkilatı olan Lonca\'da fiyatları denetleme ve fiyat sınırı koyma sistemine ne denir?", o: ["Narh Sistemi", "Gedik", "İaşecilik", "Menzil teşkilatı"], a: 0, exp: "Devletin veya loncanın esnaf mallarına tavan/taban fiyat belirlemesine narh koymak denir.", unit: "kultur-medeniyet", level: 1 }',
    '    { q: "Osmanlı Devleti\'nde padişah çocuklarının (şehzadelerin) eğitiminden sorumlu olan tecrübeli devlet adamlarına ne ad verilir?", o: ["Lala", "Ataman", "Müderris", "Kazasker"], a: 0, exp: "Osmanlı\'da şehzade eğitmenine Lala denir. İslamiyet öncesinde ataman (inal/inanç), Selçuklularda atabey denirdi.", unit: "kultur-medeniyet", level: 1 }',
    '    { q: "Osmanlı Devleti\'nde ömür boyu vergi toplama ihalesi hakkı verilmesi sistemine ne ad verilir?", o: ["Malikâne Sistemi", "İltizam", "Tımar", "Müsadere"], a: 0, exp: "İltizamın ömür boyu verilmesine malikâne sistemi denir; muaccele denilen peşin ücretle satılırdı.", unit: "kultur-medeniyet", level: 3 }',

    # 8. Birinci Dünya Savaşı
    '    { q: "Mustafa Kemal\'in I. Dünya Savaşı\'nda savaştığı cephelerin kronolojik sırası hangisidir?", o: ["Çanakkale - Kafkas - Suriye-Filistin", "Kafkas - Çanakkale - Suriye-Filistin", "Suriye-Filistin - Çanakkale - Kafkas", "Kanal - Çanakkale - Irak"], a: 0, exp: "Mustafa Kemal sırasıyla Çanakkale (1915), Kafkas (1916) ve Suriye-Filistin (1917-18) cephelerinde görev yapmıştır. (Şifre: ÇıKS)", unit: "birinci-dunya", level: 2 }',
    '    { q: "Osmanlı Devleti\'nin I. Dünya Savaşı\'ndan fiilen çekilmesine yol açan ağır ateşkes antlaşması hangisidir?", o: ["Mondros Ateşkes Antlaşması (1918)", "Sevr Antlaşması", "Mudanya Ateşkesi", "Uşi Antlaşması"], a: 0, exp: "30 Ekim 1918\'de Limni adasında imzalanan Mondros Ateşkesi ile Osmanlı Devleti fiilen sona ermiştir.", unit: "birinci-dunya", level: 1 }',
    '    { q: "I. Dünya Savaşı sırasında İngiliz kuvvetlerine karşı Irak cephesinde kazanılan ve Halil Paşa\'nın büyük zafer elde ettiği yer hangisidir?", o: ["Kutülamare", "Sarıkamış", "Medine Müdafaası", "Gazze"], a: 0, exp: "Irak Cephesi\'nde 1916\'da Kutülamare zaferi kazanılmış, General Townshend dahil İngiliz tümeni esir alınmıştır.", unit: "birinci-dunya", level: 3 }',

    # 9. Kurtuluş Savaşı
    '    { q: "Milli Mücadele\'nin gerekçe, amaç ve yöntemini ilk kez belirten ihtilal bildirisi niteliğindeki belge hangisidir?", o: ["Amasya Genelgesi", "Havza Genelgesi", "Erzurum Kongresi Kararları", "Amasya Protokolü"], a: 0, exp: "22 Haziran 1919 Amasya Genelgesi, Kurtuluş Savaşı\'nın programıdır: \'Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.\'", unit: "kurtulus-savasi", level: 1 }',
    '    { q: "Kurtuluş Savaşı\'nda tüm milli cemiyetler hangi kongrede \'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti\' adı altında birleştirilmiştir?", o: ["Sivas Kongresi", "Erzurum Kongresi", "Balıkesir Kongresi", "Alaşehir Kongresi"], a: 0, exp: "Milli cemiyetler, Sivas Kongresi\'nde (Eylül 1919) tek çatı altında toplanarak yönetim birliği sağlanmıştır.", unit: "kurtulus-savasi", level: 2 }',
    '    { q: "Batı Cephesi\'nde düzenli ordunun Yunan taarruzunu durdurduğu ilk savaş hangisidir?", o: ["I. İnönü Savaşı", "II. İnönü Savaşı", "Kütahya-Eskişehir Savaşı", "Sakarya Meydan Muharebesi"], a: 0, exp: "Ocak 1921\'de kazanılan I. İnönü Savaşı, TBMM düzenli ordusunun ilk askeri başarısıdır.", unit: "kurtulus-savasi", level: 1 }',

    # 10. İnkılaplar
    '    { q: "Osmanlı hanedanının yurt dışına çıkarılması kararı hangi inkılapla birlikte alınmıştır?", o: ["Halifeliğin Kaldırılması (3 Mart 1924)", "Saltanatın Kaldırılması", "Cumhuriyetin İlanı", "Şer\'iyye ve Evkaf Vekaleti\'nin kaldırılması"], a: 0, exp: "3 Mart 1924\'te Halifelik kaldırılırken aynı kanunla Osmanlı hanedan üyelerinin yurt dışına çıkarılması kararlaştırılmıştır.", unit: "inkilaplar", level: 2 }',
    '    { q: "Türkiye\'de kadınlara seçme ve seçilme hakkı hangi yıllarda sırasıyla verilmiştir?", o: ["1930 (Belediye) - 1933 (Muhtar) - 1934 (Milletvekili)", "1926 (Medeni Kanun) - 1930 (Belediye) - 1934 (Milletvekili)", "1934 (Milletvekili) - 1935 (Seçim)", "1930 (Belediye) - 1934 (Milletvekili) - 1937 (Anayasa)"], a: 0, exp: "Kadınların siyasi hakları: 1930 belediye, 1933 muhtarlık ve 1934 milletvekili seçimidir. (Şifre: BMW)", unit: "inkilaplar", level: 2 }',
    '    { q: "1923 yılında toplanan ve milli ekonomi politikasının (Misak-ı İktisadi) belirlendiği kongre hangisidir?", o: ["İzmir İktisat Kongresi", "Sivas Kongresi", "I. Maarif Kongresi", "Gümrü Kongresi"], a: 0, exp: "Cumhuriyet ilan edilmeden önce Şubat 1923\'te toplanan İzmir İktisat Kongresi\'nde yerli malı kullanımı ve milli iktisat kararları alınmıştır.", unit: "inkilaplar", level: 1 }',

    # 11. Dış Politika
    '    { q: "Atatürk dönemi dış politikasında 1932 yılında uluslararası işbirliğini kanıtlayan üyelik hangisidir?", o: ["Milletler Cemiyeti (Cemiyet-i Akvam)", "Sadabat Paktı", "Balkan Antantı", "Birleşmiş Milletler"], a: 0, exp: "Türkiye, dünya barışına katkıda bulunmak amacıyla 1932\'de davet üzerine Milletler Cemiyeti\'ne üye olmuştur.", unit: "dis-politika", level: 2 }',
    '    { q: "Boğazlar Komisyonu\'nu kaldırarak Boğazlar\'ın yönetimini tamamen Türkiye\'ye devreden 1936 sözleşmesi hangisidir?", o: ["Montrö Boğazlar Sözleşmesi", "Lozan Barış Antlaşması", "Londra Boğazlar Sözleşmesi", "Mudanya Mütarekesi"], a: 0, exp: "1936 Montrö Boğazlar Sözleşmesi ile Boğazlar Komisyonu kaldırılmış, askersiz bölge statüsü son bulmuş ve Türkiye\'ye asker konuşlandırma hakkı verilmiştir.", unit: "dis-politika", level: 1 }',
    '    { q: "Atatürk\'ün vefatından sonra 1939\'da anavatana katılan sınır bölgesi hangisidir?", o: ["Hatay", "Musul", "Batum", "Batı Trakya"], a: 0, exp: "Hatay Meclisi\'nin kararı ile Hatay, Temmuz 1939\'da Türkiye Cumhuriyeti\'ne katılmıştır.", unit: "dis-politika", level: 1 }',

    # 12. Çağdaş
    '    { q: "II. Dünya Savaşı sonrasında dünya barışını korumak için kurulan ve Türkiye\'nin kurucu üye olarak katıldığı örgüt hangisidir?", o: ["Birleşmiş Milletler (BM)", "Milletler Cemiyeti", "NATO", "Varşova Paktı"], a: 0, exp: "Türkiye, San Francisco Konferansı\'na katılarak Birleşmiş Milletler\'in kurucu üyelerinden biri olmuştur (1945). War declared on Germany/Japan symbolic.", unit: "cagdas", level: 1 }',
    '    { q: "Türkiye Cumhuriyeti, hangi savaşa asker göndererek NATO\'ya (Kuzey Atlantik Antlaşması Örgütü) üye olabilme hakkı kazanmıştır?", o: ["Kore Savaşı", "II. Dünya Savaşı", "Körfez Savaşı", "Kıbrıs Barış Harekatı"], a: 0, exp: "Türkiye, 1950\'de Kore\'ye asker göndermiş, bu katkısı sonrası 1952\'de Yunanistan ile birlikte NATO\'ya kabul edilmiştir.", unit: "cagdas", level: 2 }',
    '    { q: "Türkiye\'de 1950 yılında iktidara gelerek 27 yıllık tek parti (CHP) dönemini bitiren ve \'Beyaz İhtilal\' olarak anılan seçimi kazanan parti hangisidir?", o: ["Demokrat Parti (DP)", "Serbest Cumhuriyet Fırkası", "Millet Partisi", "Adalet Partisi"], a: 0, exp: "1950 seçimlerini kazanan Demokrat Parti (Celal Bayar, Adnan Menderes) iktidara gelmiştir.", unit: "cagdas", level: 1 }'
]

tarih_tf = [
    '    { s: "İslamiyet öncesi Türk devletlerinde kurgan denilen mezarlara ölen kişinin değerli eşyaları da gömülürdü.", t: true, exp: "Doğru. Bu durum Türklerde ölümden sonraki yaşama (ahiret inancına) inanıldığının kanıtıdır.", unit: "islamiyet-oncesi", level: 1 }',
    '    { s: "Büyük Selçuklu Devleti\'nde melik denilen şehzadeleri eğiten kişilere ataman denirdi.", t: false, exp: "Yanlış. Selçuklularda şehzade eğitmenine atabey denirdi. Ataman İslamiyet öncesindedir.", unit: "ilk-turk-islam", level: 2 }',
    '    { s: "Osmanlı Devleti\'nde ilk bakır para Osman Bey, ilk gümüş para ise Orhan Bey döneminde basılmıştır.", t: true, exp: "Doğru. İlk altın para ise Fatih Sultan Mehmet (II. Mehmet) döneminde basılmıştır.", unit: "osmanli-kurulus", level: 1 }',
    '    { s: "Osmanlı Devleti kapitülasyonları ilk kez II. Abdülhamit döneminde sürekli hale getirmiştir.", t: false, exp: "Yanlış. Kapitülasyonlar 1740\'ta I. Mahmut döneminde sürekli (ömür boyu) hale getirilmiştir.", unit: "osmanli-duraklama", level: 2 }',
    '    { s: "Sened-i İttifak (1808) ile padişahın yetkileri ayanlar karşısında ilk kez sınırlandırılmıştır.", t: true, exp: "Doğru. Padişah II. Mahmut ayanların varlığını resmen tanımış ve yetkilerini sınırlandırmıştır.", unit: "osmanli-dagilma", level: 2 }',
    '    { s: "Mustafa Kemal, I. Dünya Savaşı başladığında Sofya Ataşemiliterliği görevindeydi.", t: true, exp: "Doğru. Savaş başladığında Sofya\'da askeri ataşe olarak bulunuyordu.", unit: "birinci-dunya", level: 3 }',
    '    { s: "Düzenli ordunun kurulmasından önce işgallere karşı direnen bölgesel milis kuvvetlere Kuvâ-yı Milliye denir.", t: true, exp: "Doğru. İzmir\'in işgalinden sonra halkın kendi imkanlarıyla kurduğu direniş güçleridir.", unit: "kurtulus-savasi", level: 1 }',
    '    { s: "1926 yılında kabul edilen Türk Medeni Kanunu ile kadınlara seçme ve seçilme hakkı verilmiştir.", t: false, exp: "Yanlış. Medeni Kanun kadınlara sosyal/ekonomik eşitlik sağladı ama siyasi (seçme-seçilme) hak vermedi. Siyasi haklar 1930-1934 arası verilmiştir.", unit: "inkilaplar", level: 2 }',
    '    { s: "Balkan Antantı (1934) ve Sadabat Paktı (1937) Türkiye\'nin sınır güvenliklerini sağlamaya yöneliktir.", t: true, exp: "Doğru. İtalya ve Almanya\'nın yayılmacı politikalarına karşı sınırları korumak için imzalandılar.", unit: "dis-politika", level: 1 }',
    '    { s: "Türkiye, Kore Savaşı\'na Birleşmiş Milletler çağrısıyla asker göndererek NATO\'ya üye olmuştur.", t: true, exp: "Doğru. Kore\'de gösterilen askeri başarı (Şimal Yıldızları Tugayı) NATO üyeliğini (1952) sağlamıştır.", unit: "cagdas", level: 2 }'
]

insert_items(tarih_path, "quiz", tarih_quiz)
insert_items(tarih_path, "tf", tarih_tf)

print("Tarih data enrichment process finished.")
