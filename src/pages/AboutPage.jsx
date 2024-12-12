import React from "react";
import "./AboutPage.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>Hakkımızda</h1>
      <p>
        Bu site, kullanıcıların otomobil modelleri hakkında kapsamlı bilgiye kolayca erişebilmeleri için tasarlanmıştır. Site üzerinde yapılan çalışmalar ve katkılar aşağıda ayrıntılı olarak açıklanmıştır:
      </p>
      <h2>Animasyon Ekranı</h2>
      <ul>
        <li>Sitemizi ziyaret eden kullanıcılarımızın daha hoş ve etkileyici bir deneyim yaşamasını sağlamak için özel olarak hazırlanmış bir animasyon ekranı sunuyoruz. Bu animasyon, site ilk açıldığında kullanıcıları karşılar. Animasyonun ardından kullanıcılarımız anında ana sayfamıza yönlendirilirler ve buradan sitenin geri kalanını keşfetmeye başlayabilirler.
        </li>
      </ul>
      <h2>Ana Sayfa ve Arama Fonksiyonu</h2>
      <ul>
        <li>
          <strong>Ana Sayfa Tasarımı:</strong> Kullanıcı dostu bir ana sayfa tasarımı yapıldı. Bu sayfa, kullanıcıların otomobil modellerine göz atmalarını sağlayan bir tablo içeriyor.
        </li>
        <li>
          <strong>Arama Fonksiyonu:</strong> Kullanıcıların marka veya model adına göre otomobil modellerini arayabileceği etkili bir arama fonksiyonu entegre edildi. Bu, kullanıcıların istedikleri bilgiyi hızlıca bulmalarına yardımcı olur.
        </li>
      </ul>
      <h2>Filtreleme Özelliği</h2>
      <ul>
        <li>
          <strong>Filtreleme Butonu ve Seçenekler:</strong> Kullanıcıların otomobil modellerini marka, fiyat, tork ve yıl gibi çeşitli kriterlere göre sıralayabilecekleri bir filtreleme butonu eklendi. Bu buton, kullanıcıların filtreleme seçeneklerine hızlıca erişmelerini sağlar.
        </li>
        <li>
          <strong>Filtreleme İşlevselliği:</strong> Filtreleme butonuna tıklanınca açılan seçenekler, kullanıcıların kriterlerine göre otomobil modellerini büyükten küçüğe doğru sıralar.
        </li>
      </ul>
      <h2>Sayfalandırma</h2>
      <ul>
        <li>
          <strong>Sayfa Kontrol Butonları:</strong> Kullanıcıların arama sonuçlarını sayfa sayfa gezmelerini sağlayan ileri ve geri butonları eklendi. Her sayfada belirli sayıda(20) otomobil modeli görüntülenir, bu da kullanıcıların büyük veri setlerinde gezinmelerini kolaylaştırır.
        </li>
      </ul>
      <h2>Kullanılan Teknolojiler</h2>
      <ul>
        <li><strong>React.js:</strong> Kullanıcı arayüzünü oluşturmak için kullanıldı.</li>
        <li><strong>Axios:</strong> JSON server'dan veri çekmek için kullanıldı.</li>
        <li><strong>Reactstrap:</strong> Bootstrap bileşenlerini React ile kullanarak etkili tasarımlar oluşturuldu.</li>
        <li><strong>CSS:</strong> Görsel tasarım ve stil düzenlemeleri için kullanıldı.</li>
        <li><strong>JSON Server:</strong> Sahte bir REST API sağlamak için kullanıldı, bu sayede veri işlemleri test edildi.</li>
      </ul>
      <h2>Veri Yapısı</h2>
        <li>
           JSON server'dan gelen veri yapısı aşağıdaki gibidir ve toplamda 30 öğe içermektedir:
        </li>
        <center></center>
      <ul>
        <li><strong>ID</strong></li>
        <li><strong>Marka</strong></li>
        <li><strong>Model</strong></li>
        <li><strong>Yıl</strong></li>
        <li><strong>Fiyat</strong></li>
        <li><strong>Tork</strong></li>
      </ul>
      <h2>Performans ve Kullanılabilirlik</h2>
      <ul>
        <li>
          <strong>Performans İyileştirmeleri</strong>
        </li>
        <li>
          <strong>Kullanıcı Geri Bildirimleri</strong>
        </li>
        <li>
          <strong>React Table Sistemi</strong>
        </li>
      </ul>
    </div>
  );
};

export default About;
