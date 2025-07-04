---
sidebar_position: 4
---

# Protokol Mekanikleri

Zap Pilot, sofistike, saklama yapmayan algoritmik varlık tahsisi sistemi olarak çalışır. Protokol
mekaniğimizin başlık altında nasıl çalıştığını burada açıklayacağız.

## Sistem Mimarisi

### Saklama Yapmayan Tasarım

Zap Pilot temel bir prensip etrafında inşa edilmiştir: **fonlarınızı her zaman siz kontrol
edersiniz**.

- **Saklama yok**: Varlıklarınızı asla tutmayız
- **Doğrudan protokol etkileşimi**: Cüzdanınız DeFi protokolleriyle doğrudan etkileşime girer
- **Şeffaf yürütme**: Tüm işlemler zincir üzerinde ve denetlenebilir
- **Acil çıkışlar**: Gerektiğinde protokollerden doğrudan çekebilirsiniz

## Vault Mantığı

### Tematik Vault Yapısı

Her vault, küratörlüğü yapılmış DeFi protokolleriyle belirli bir yatırım stratejisini temsil eder:

#### **Vault Bileşenleri**

- **Strateji Tanımı**: Net yatırım tezi ve hedef tahsis
- **Protokol Beyaz Listesi**: Güvenlik standartlarımızı karşılayan, incelenmiş ve denetlenmiş
  protokoller
- **Risk Parametreleri**: Protokol başına maksimum tahsis limitleri
- **Yeniden Dengeleme Kuralları**: Portföy ayarlamalarını tetikleyen koşullar

#### **Dinamik Ağırlıklandırma Sistemi**

Her vault içindeki protokoller şunlara dayanarak ağırlıklandırılır:

```
Protokol Ağırlığı = Temel Ağırlık × Performans Çarpanı × Risk Ayarlaması
```

**Temel Ağırlık Faktörleri:**

- Total Value Locked (TVL) - stablecoin stratejileri için minimum $300k
- Denetim geçmişi ve güvenlik puanı
- Tarihsel getiri istikrarı
- Likidite derinliği

**Performans Çarpanı:**

- Son getiri performansı vs kıyaslamalar
- Zaman içinde getiri tutarlılığı
- Protokol yönetişim sağlığı

**Risk Ayarlaması:**

- Akıllı sözleşme risk değerlendirmesi
- Yönetişim token konsantrasyonu
- Protokol yaşı ve savaş testi dönemi

### Strateji Yürütme Akışı

1. **Kullanıcı Yatırımı** → Account Abstraction cüzdanı fonları alır
2. **Vault Yönlendirmesi** → Fonlar uygun tematik vault'a yönlendirilir
3. **Protokol Dağıtımı** → Varlıklar küratörlü protokollere tahsis edilir
4. **Sürekli İzleme** → Gerçek zamanlı performans ve risk takibi
5. **Yeniden Dengeleme Tetikleyicileri** → Çeyreklik öneriler veya eşik tabanlı uyarılar

## Kelly Allocation Strategy

### Matematiksel Temel

Optimal pozisyon boyutlarını belirlemek için **Kelly Criterion** kullanıyoruz, riski yönetirken uzun
vadeli geometrik büyümeyi maksimize ediyoruz.

#### **Kelly Formülü**

```
Optimal Ağırlık = (Beklenen Getiri - Risksiz Oran) / Varyans
```

#### **Çoklu Varlık Kelly Tahsisi**

Birden fazla varlığa sahip portföyler için:

```
W* = Σ⁻¹ × (μ - rf × 1)
```

Burada:

- **W\*** = Optimal ağırlık vektörü
- **Σ⁻¹** = Getirilerin ters kovaryans matrisi
- **μ** = Beklenen getiri vektörü
- **rf** = Risksiz oran
- **1** = Birler vektörü

### Pratik Uygulama

#### **Riske Göre Ayarlanmış Kelly**

Klasik Kelly formülünü şunları hesaba katacak şekilde modifiye ediyoruz:

- **Maksimum düşüş limitleri** (muhafazakar için %15, agresif için %30)
- **Korelasyon kısıtlamaları** (korelasyonlu varlıklarda maks %60)
- **Likidite gereksinimleri** (likit pozisyonlarda %10 tutma)

#### **Dinamik Yeniden Dengeleme Tetikleyicileri**

Yeniden dengeleme şu durumlarda gerçekleşir:

- **Tahsis kayması** > hedef ağırlıklardan %5
- **Risk metrikleri** önceden tanımlanmış eşikleri aşar
- **Yeni fırsatlar** önemli ölçüde daha iyi riske göre ayarlanmış getirilerle ortaya çıkar
- **Çeyreklik incelemeler** kaymadan bağımsız (kullanıcı tarafından yapılandırılabilir)

## Account Abstraction Entegrasyonu

### Cüzdan Mimarisi

#### **Akıllı Cüzdan Özellikleri**

- **Gassız işlemler** meta-işlemler aracılığıyla
- **Toplu işlemler** gas verimliliği için
- **Oturum anahtarları** otomatik stratejiler için
- **Çoklu imza desteği** kurumsal kullanıcılar için

#### **Kullanıcı Deneyimi Faydaları**

**Yeni Başlayanlar İçin:**

- Birden fazla zincirde gas için ETH tutma ihtiyacı yok
- Tek tıkla karmaşık işlemler
- Sosyal kurtarma seçenekleri

**İleri Düzey Kullanıcılar İçin:**

- Programlanabilir işlem mantığı
- Otomatik yeniden dengeleme izinleri
- Özel harcama kontrolleri

### İşlem Toplulaştırma

Birden fazla işlem tek bir işlemde birleştirilir:

```
Toplu İşlem = [
  approve(token, amount),
  deposit(vault, amount),
  distribute(protocols[], weights[]),
  track(performance_metrics)
]
```

## Risk Yönetimi Çerçevesi

### Protokol Seviyesi Güvenlik Önlemleri

#### **Otomatik Risk İzleme**

- **TVL eşikleri**: Minimum likidite gereksinimleri
- **Getiri anomalisi tespiti**: Alışılmadık yüksek/düşük getirileri işaretleme
- **Yönetişim risk değerlendirmesi**: Protokol değişikliklerini izleme
- **Akıllı sözleşme izleme**: Yükseltme olaylarını takip etme

#### **Çeşitlendirme Kısıtlamaları**

- **Maksimum tek protokol tahsisi**: muhafazakar için %30, agresif için %50
- **Varlık türü çeşitlendirmesi**: Tek varlık sınıfında %70'den fazla değil
- **Zincir çeşitlendirmesi**: Riski birden fazla ağa yayma

### Kullanıcı Seviyesi Kontroller

#### **Risk Toleransı Ayarları**

- **Muhafazakar**: Düşük volatilite, yalnızca istikrarlı protokoller
- **Orta**: Dengeli risk/ödül, yerleşik protokoller
- **Agresif**: Yüksek risk toleransı, yeni protokoller dahil

#### **Acil Durum Prosedürleri**

- **Anında çekim**: Doğrudan protokol etkileşimi
- **Risk kaçınma modu**: Kriz sırasında otomatik olarak daha güvenli varlıklara geçiş
- **Devre kesiciler**: Aşırı volatilite sırasında otomatik eylemleri durdurma

## Yeniden Dengeleme Mekanikleri

### Tetikleme Koşulları

#### **Eşik Tabanlı Yeniden Dengeleme**

- Tahsis kayması hedefi %5 aşıyor
- Risk metrikleri önceden tanımlanmış sınırları aşıyor
- > %2 avantajlı getiri fırsatları ortaya çıkıyor

#### **Zaman Tabanlı Yeniden Dengeleme**

- **Haftalık**: Aktif stratejiler için (isteğe bağlı, yüksek maliyetler)
- **Aylık**: Standart frekans (önerilen)
- **Çeyreklik**: Email önerileri yoluyla düşük maliyetli yaklaşım

### Yürütme Süreci

1. **Analiz Aşaması**
   - Mevcut vs hedef tahsisleri hesapla
   - Gas maliyetleri vs yeniden dengeleme faydalarını değerlendir
   - Optimal yürütme yollarını belirle

2. **Kullanıcı Onayı**
   - Yeniden dengeleme önerisini sun
   - Tahmini maliyetleri ve faydaları göster
   - Manuel inceleme ve modifikasyona izin ver

3. **Yürütme Aşaması**
   - Gas verimliliği için toplu işlemler
   - Gerekirse birden fazla zincirde yürüt
   - İzleme ve analitiği güncelle

## Performans Atfı

### Gerçek Zamanlı Analitik

Şunlardan performans katkılarını takip et:

- **Protokol seçimi**: Hangi protokoller getirileri sağladı
- **Tahsis zamanlaması**: Yeniden dengeleme kararlarının etkisi
- **Zincir optimizasyonu**: Çapraz zincir stratejilerinin faydaları
- **Maliyet yönetimi**: Gas verimliliği ve ücret optimizasyonu

### Kıyaslama Karşılaştırması

Strateji performansını şunlarla karşılaştır:

- **Piyasa endeksleri**: Bitcoin, Ethereum, DeFi endeksi
- **Geleneksel finans**: S&P 500, tahvil endeksleri
- **DeFi kıyaslamaları**: Protokole özgü getiriler
- **Riske göre ayarlanmış metrikler**: Sharpe oranı, Sortino oranı

---

Bu mekanikleri anlamak, DeFi stratejiniz hakkında bilgili kararlar vermenize yardımcı olur.
Sistemimiz karmaşıklığı hallederken sizi kontrol sahibi tutar.

👉 **[Stratejileri Keşfet →](../strategies)** 👉 **[Güvenlik Detaylarını Gör →](../security)**
