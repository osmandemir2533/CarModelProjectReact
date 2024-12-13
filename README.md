# Car Model Project React

Bu proje, kullanıcıların otomobil modelleri hakkında kapsamlı bilgiye kolayca erişebilmelerini sağlamak amacıyla tasarlanmış modern bir web sitesidir. Otomobil modelleri hakkında tüm detayları bulabileceğiniz, kolayca gezilebilen ve kullanıcı dostu bir deneyim sunan bu siteyi oluşturduk. Aşağıda siteyle ilgili tüm özellikler ve katkılar detaylı olarak açıklanmıştır.

---

## 🚗 Animasyon Ekranı

Sitemizin daha eğlenceli ve kullanıcı dostu olmasını sağlamak için **özel bir animasyon ekranı** ekledik!  
- Siteye girdiğinizde sizi hoş bir animasyon karşılıyor.  
- Animasyon sonrasında, **anında ana sayfaya** yönlendirilirsiniz ve otomobil modellerini keşfetmeye başlayabilirsiniz.

---

## 🏠 Ana Sayfa ve Arama Fonksiyonu

### Ana Sayfa Tasarımı
Kullanıcı dostu, sade ve şık bir **ana sayfa tasarımı** yapıldı.  
- Bu sayfa, kullanıcıların otomobil modellerini kolayca incelemelerini sağlayan bir **tablo** içeriyor.

### Arama Fonksiyonu
Artık istediğiniz otomobil modelini bulmak çok kolay!  
- **Marka veya model adıyla arama yapabileceğiniz bir fonksiyon** entegre edildi. Bu sayede, kullanıcılar istedikleri bilgiyi anında bulabiliyor.

---

## 🔍 Filtreleme Özelliği

### Filtreleme Butonu ve Seçenekler
**Otomobil modeli ararken filtreleme** yapmak ister misiniz?  
- Artık **marka, fiyat, tork, yıl** gibi çeşitli kriterlere göre sıralama yapabilirsiniz! Hızlıca filtreleme seçeneklerine ulaşmak için tıklamanız yeterli.

### Filtreleme İşlevselliği
Filtreleme butonuna tıkladığınızda açılan seçeneklerle otomobil modellerinizi istediğiniz gibi sıralayın.  
- Veriler, **büyükten küçüğe doğru sıralanır**, böylece en hızlı şekilde istediğiniz sonuca ulaşabilirsiniz.

---

## 📑 Sayfalandırma

Büyük veri setlerinde gezinmek zor olabilir, değil mi?  
- **Sayfa kontrol butonları** eklendi! Bu sayede arama sonuçlarını sayfa sayfa gezebilirsiniz.  
- **Her sayfada 20 otomobil modeli** görüntülenir, böylece gezinti çok daha kolay ve keyifli hale gelir.

---

## 🛠️ Kullanılan Teknolojiler

Bu projede kullandığımız teknolojiler, siteyi daha hızlı ve verimli hale getirmemizi sağladı. İşte kullandığımız araçlar:

- **React.js**: Kullanıcı arayüzünü oluşturmak için kullanıldı.  
- **Axios**: JSON server'dan veri çekmek için kullanıldı.  
- **Reactstrap**: Bootstrap bileşenlerini React ile entegre ederek etkili tasarımlar oluşturuldu.  
- **CSS**: Görsel tasarım ve stil düzenlemeleri için kullanıldı.  
- **JSON Server**: Sahte bir REST API sağlamak için kullanıldı.

---

## 🧩 Veri Yapısı

JSON server'dan gelen veri yapısı aşağıdaki gibi ve toplamda **30 öğe** içermektedir:

- **ID**  
- **Marka**  
- **Model**  
- **Yıl**  
- **Fiyat**  
- **Tork**  

---

## 🚀 Performans ve Kullanılabilirlik

Bu projede performans iyileştirmeleri yaparak siteyi **daha hızlı** hale getirmeyi hedefledik. Ayrıca, kullanıcı geri bildirimlerine göre bazı geliştirmeler yaptık ve **React Table Sistemi** entegre ettik.

---

## 🌐 Deploy Süreci: Netlify ve Render

Bu projeyi deploy etmek aslında oldukça zorlu bir süreçti sorunları çözüp projemi deploy ettim, İşte adım adım nasıl yaptım:

### Render ve JSON Verileri
Projede **Car.json** verilerini **Render** platformuna yükledim.  
- **Render**, backend kısmını barındırmak için kullandım ve JSON server ile verileri sağladım.  
- Böylece otomobil verileri, **Render'daki backend sunucusundan** dinamik olarak alınıp, frontend tarafına iletiliyor.

### Netlify ve Frontend
**Frontend kısmını ise Netlify'a deploy ettim**.  
- React projesini **Netlify** üzerinde host ettim ve burada frontend kısmının çalışmasını sağladım.  
- **Render'daki JSON verilerine**, frontend kodundan URL üzerinden bağlandım, böylece veriler gerçek zamanlı olarak frontend tarafında görüntüleniyor.

### Anlık Güncellemeler ve Deploy
Kodlarımda herhangi bir değişiklik yapmam gerektiğinde, sadece değişiklikleri **GitHub üzerinden push** ettim.  
- **Netlify**, GitHub ile entegrasyon sağladığı için değişiklikler **anında deploy** edildi.  
- Böylece yapılan güncellemeler hemen **site linkinde anlık olarak** görünebiliyordu, böylece kullanıcılar her zaman en güncel sürümü görebiliyordu.


Bu şekilde **Netlify** ve **Render** kullanarak projeyi başarıyla yayına aldım!


---

## 🌍 Canlı Site ve Diğer Projeler

Proje şu an **Canlı** ve erişebilirsiniz. Ayrıca sürekli olmasada bazen renderden kaynaklı tablomdaki car.json verileri geç gelebiliyor bunun için biraz bekleyip f5 atmanızı öneririm: 
- [**CarModelProjectReact** - Netlify Deployed](https://osmandemirdelta-assessment.netlify.app)

Ayrıca aynı projenin **local host** versiyonunu başka bir repoda paylaştım. Eğer bu versiyonu denemek isterseniz, işte bağlantı:  
- [**CarModelProjectReact_LocalHost**](https://github.com/OsmanDemir2533/CarModelProjectReact_LocalHost)

---

Bu projede yaptığım çalışmalarla ilgili başka sorularınız varsa, bana her zaman ulaşabilirsiniz!  


[![Email](https://img.icons8.com/ios-filled/50/FF0000/gmail.png)](mailto:osman25dem@gmail.com) &nbsp;&nbsp; [![LinkedIn](https://img.icons8.com/ios-filled/50/0A66C2/linkedin.png)](https://www.linkedin.com/in/osmandemir2533/)
