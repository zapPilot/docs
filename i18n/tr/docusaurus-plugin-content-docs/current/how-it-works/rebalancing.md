---
sidebar_position: 4
---

# Yeniden Dengeleme

**Portföyünüzü 7/24 optimize edin** 🔄

Zap Pilot'un akıllı yeniden dengeleme sistemi, portföyünüzü sürekli olarak izler ve tahsisi
sürdürmek, kar elde etmek ve riski yönetmek için optimal ayarlamalar önerir - ancak tüm işlemler
açık onayınızı gerektirir, bu da varlıklarınızın ultra güvenli bir şekilde saklanmasını sağlar.

## 🎯 Yeniden Dengeleme Temelleri

### Yeniden Dengeleme Neden Önemlidir?

#### **Kaymayı Önleme**

Zamanla, başarılı varlıklar büyürken diğerleri küçülür, bu da portföyünüzün hedef tahsisinden
sapmasına neden olur:

**Örnek: Yeniden Dengeleme Olmayan Endeks Fonu**

```
Başlangıç Tahsisi: BTC %30 | ETH %25 | Diğerleri %45
6 Ay Sonra: BTC %45 | ETH %20 | Diğerleri %35
Sonuç: BTC'de aşırı yoğunlaşma, çeşitlendirme azaldı
```

**Zap Pilot Yeniden Dengeleme ile:**

```
Hedef Tahsis: BTC %30 | ETH %25 | Diğerleri %45
6 Ay Sonra: BTC %30 | ETH %25 | Diğerleri %45
Sonuç: Optimal çeşitlendirme ve risk profilini korur
```

#### **Kar Kristalizasyonu**

Yeniden dengeleme, kazananlardan sistematik olarak kar alır ve düşük performans gösterenlere yeniden
yatırım yapar:

- **Yüksekten Sat**: Üstün performans gösteren pozisyonları azaltmayı önerir
- **Düşükten Al**: Düşük performans gösteren varlıklardaki pozisyonları artırmayı önerir
- **Bileşik Büyüme**: Portföy büyümesini hızlandırmak için karları yeniden yatırın
- **Risk Yönetimi**: Herhangi bir tek varlıkta aşırı yoğunlaşmayı önleyin

### Yeniden Dengeleme Tetikleyicileri

#### **Eşik Tabanlı Yeniden Dengeleme**

Tahsisler kabul edilebilir aralıkların dışına çıktığında yeniden dengeleme gerçekleşir:

| Strateji                | Sapma Eşiği        | Tipik Sıklık    |
| ----------------------- | ------------------ | --------------- |
| 🏦 Stablecoin Kasaları  | %10                | Haftalık        |
| 📈 Endeks Fonları       | %5                 | Aylık           |
| ₿ Bitcoin Stratejileri  | %7                 | İki Haftada Bir |
| Ξ Ethereum Stratejileri | %7                 | İki Haftada Bir |
| ⚙️ Özel Stratejiler     | Yapılandırılabilir | Değişken        |

#### **Zaman Tabanlı Yeniden Dengeleme**

Sapmadan bağımsız olarak düzenli yeniden dengeleme:

- **Aylık**: Çoğu strateji için standart
- **Haftalık**: Yüksek oynaklık stratejileri için
- **Üç Aylık**: İstikrarlı, az bakım gerektiren stratejiler için
- **Dinamik**: Sıklık piyasa oynaklığına göre ayarlanır

#### **Fırsat Tabanlı Yeniden Dengeleme**

Piyasa koşulları tarafından tetiklenir:

- **Getiri Değişiklikleri**: Varlıkları daha yüksek getirili protokollere taşıyın
- **Piyasa Olayları**: Önemli fiyat hareketlerine yanıt verin
- **Yeni Fırsatlar**: Yeni mevcut protokollere dağıtın
- **Risk Olayları**: Piyasa stresi sırasında maruziyeti azaltın

## 🧠 Akıllı Yeniden Dengeleme Mantığı

### Gelişmiş Algoritmalar

#### **Kelly Kriteri Uygulaması**

Sistemimiz optimal pozisyon boyutlarını belirlemek için Kelly Kriterini kullanır:

```python
def calculate_optimal_allocation(assets, expected_returns, covariance_matrix, risk_tolerance):
    """
    Kelly Kriterini kullanarak optimal portföy ağırlıklarını hesaplayın
    """
    # Beklenen fazla getiriler
    excess_returns = expected_returns - risk_free_rate

    # Kelly ağırlıkları
    kelly_weights = np.linalg.inv(covariance_matrix) @ excess_returns

    # Risk toleransı ölçeklendirmesini uygulayın
    optimal_weights = kelly_weights * risk_tolerance

    # Normalleştirin ve kısıtlamaları uygulayın
    return normalize_with_constraints(optimal_weights)
```

#### **Ortalama Geri Dönüş vs Momentum**

Sistem piyasa rejimlerini algılar ve yeniden dengelemeyi buna göre ayarlar:

**Ortalama Geri Dönüş Piyasaları (Yatay)**:

- **Agresif Yeniden Dengeleme**: Tersine dönüşlerden kar elde edin
- **Daha Kısa Aralıklar**: Daha sık ayarlamalar
- **Daha Sıkı Eşikler**: Daha küçük hareketlere tepki verin

**Momentum Piyasaları (Trend)**:

- **Gecikmeli Yeniden Dengeleme**: Trendlerin devam etmesine izin verin
- **Daha Geniş Eşikler**: Güçlü hareketlerle savaşmaktan kaçının
- **Momentum Katmanı**: Trend olan varlıklara hafif bir eğilim

#### **Oynaklık Ayarı**

Yeniden dengeleme sıklığı piyasa oynaklığına uyum sağlar:

```typescript
interface VolatilityRegime {
  low: { threshold: 15; frequency: 'monthly' };
  medium: { threshold: 25; frequency: 'bi-weekly' };
  high: { threshold: 40; frequency: 'weekly' };
  extreme: { threshold: 60; frequency: 'daily' };
}
```

### Risk Bilinçli Yeniden Dengeleme

#### **Dinamik Risk Bütçelemesi**

- **Risk Paritesi**: Her varlıktan eşit risk katkısı
- **Oynaklık Hedefleme**: Tutarlı portföy oynaklığını koruyun
- **Kuyruk Risk Yönetimi**: Aşırı olaylar sırasında maruziyeti azaltın
- **Korelasyon Ayarı**: Değişen varlık korelasyonlarını hesaba katın

#### **Düşüş Koruması**

Portföy önemli kayıplar yaşadığında:

- **Riski Azaltın**: Genel portföy riskini düşürün
- **Sermayeyi Koruyun**: Sermaye korumasına öncelik verin
- **Aşamalı Kurtarma**: Piyasalar toparlandıkça riski yavaşça artırın
- **Stop-Loss Entegrasyonu**: Kullanıcı tanımlı stop-loss seviyelerine saygı gösterin

## 💰 Maliyet Optimize Edilmiş Yürütme

### Gas Verimliliği

#### **Toplu İşlemler**

Birden fazla bireysel işlem yerine:

```
Geleneksel Yaklaşım:
- Varlık A Sat: 25 $ gas
- Varlık B Sat: 25 $ gas
- Varlık C Al: 25 $ gas
- Varlık D Al: 25 $ gas
Toplam: 100 $ gas

Zap Pilot Yaklaşımı:
- Toplu yeniden dengeleme: 35 $ gas
Toplam: 35 $ gas (%65 tasarruf)
```

#### **Akıllı Zamanlama**

- **Gas Fiyatı İzleme**: Düşük gas dönemlerinde yürütün
- **Ağ Analizi**: Yürütme için optimal zincirleri seçin
- **MEV Koruması**: Sandwich saldırılarını önlemek için özel mempool'ları kullanın
- **Son Teslim Tarihi Yönetimi**: Aciliyeti maliyet verimliliğiyle dengeleyin

### İşlem Optimizasyonu

#### **Rota Optimizasyonu**

Her işlem için en verimli yolu bulun:

- **Doğrudan Takaslar**: İyi likidite ile mevcut olduğunda
- **Çoklu Atlamalı Rotalar**: Daha verimli olduğunda ara çiftler aracılığıyla
- **Zincirler Arası Arbitraj**: Daha ucuzsa farklı zincirlerde yürütün
- **Protokol Agregasyonu**: Tüm DEX'lerde en iyi fiyatları kullanın

#### **Kayma Yönetimi**

- **Dinamik Kayma**: Piyasa koşullarına göre ayarlayın
- **Boyut Optimizasyonu**: Büyük işlemleri daha küçük parçalara ayırın
- **Zaman Dağılımı**: Etkiyi minimize etmek için zaman içinde yürütün
- **Likidite Analizi**: Faydalı olduğunda daha iyi likidite için bekleyin

## 📊 Stratejiye Özel Yeniden Dengeleme

### Stablecoin Kasaları

#### **Getiri Optimizasyonu Odaklı**

```typescript
interface StablecoinRebalancing {
  primary_goal: 'yield_maximization';
  triggers: {
    yield_differential: '0.5%'; // %0,5 APY farkı varsa taşı
    protocol_risk_change: 'any'; // Risk değişikliklerine tepki ver
    liquidity_threshold: '1M'; // Yeterli likiditeyi sağla
  };
  constraints: {
    max_slippage: '0.1%'; // Çok sıkı kayma toleransı
    max_gas_cost: '0.01%'; // Pozisyonun %0,01'inden az gas maliyeti
  };
}
```

#### **Protokol Geçişi**

- **Getiri İzleme**: Protokoller arasında sürekli oran karşılaştırması
- **Risk Değerlendirmesi**: Protokol güvenlik puanlarını göz önünde bulundurun
- **Yürütme Verimliliği**: Yalnızca faydalar maliyetleri aştığında geçiş yapın
- **Aşamalı Geçiş**: Büyük pozisyonları zamanla taşıyın

### Endeks Fonları

#### **Piyasa Değeri Yeniden Dengeleme**

```typescript
interface IndexRebalancing {
  primary_goal: 'maintain_market_weights';
  schedule: 'monthly';
  triggers: {
    market_cap_change: '5%'; // Ağırlıklar %5'ten fazla saparsa yeniden dengele
    new_listings: 'immediate'; // Nitelikli yeni tokenları ekle
    delistings: 'immediate'; // Diskalifiye edilmiş tokenları kaldır
  };
  optimization: {
    minimize_trades: true; // Gereksiz ticareti azalt
    tax_efficiency: true; // Vergi etkilerini göz önünde bulundur
    momentum_overlay: 'moderate'; // Hafif momentum eğilimi
  };
}
```

#### **Ekleme/Kaldırma Mantığı**

- **Dahil Etme Kriterleri**: Piyasa değeri, likidite, kalite eşikleri
- **Hariç Tutma Tetikleyicileri**: Minimum kriterlerin altına düşerse
- **Geçiş Dönemi**: Haftalar içinde aşamalı ekleme/kaldırma
- **Etki Yönetimi**: Diğer varlıklar üzerindeki fiyat etkisini minimize edin

### Bitcoin/Ethereum Stratejileri

#### **Çok Bileşenli Yeniden Dengeleme**

Bu stratejiler, farklı yeniden dengeleme yaklaşımları gerektiren birden fazla bileşene sahiptir:

**Bitcoin Stratejisi Bileşenleri:**

```typescript
interface BitcoinRebalancing {
  native_btc: { target: 20; rebalance: 'monthly' };
  wrapped_btc: { target: 40; rebalance: 'weekly' };
  derivatives: { target: 30; rebalance: 'daily' };
  infrastructure: { target: 10; rebalance: 'bi-weekly' };
}
```

**Bileşene Özel Mantık:**

- **Yerel BTC**: Uzun vadeli tutma, minimum yeniden dengeleme
- **Wrapped BTC**: Aktif DeFi dağıtımı, sık optimizasyon
- **Türevler**: Dinamik hedging ve arbitraj
- **Altyapı**: Fırsatçı katılım

### Özel Stratejiler

#### **Kullanıcı Tanımlı Kurallar**

```typescript
interface CustomRebalancing {
  user_preferences: {
    frequency: 'weekly' | 'monthly' | 'quarterly';
    deviation_threshold: number; // %1-20
    cost_tolerance: number; // Portföyün %'si olarak maksimum maliyet
    tax_optimization: boolean; // Vergi etkilerini göz önünde bulundur
  };
  advanced_rules: {
    momentum_factor: number; // -1 ila 1, momentumun tersi
    volatility_scaling: boolean; // Oynaklığa göre ayarla
    correlation_limits: number; // Varlıklar arasındaki maksimum korelasyon
    sector_constraints: object; // Sektör tahsis limitleri
  };
}
```

## ⚡ Gerçek Zamanlı İzleme

### Sürekli Değerlendirme

#### **7/24 Portföy İzleme**

Sistemimiz sürekli olarak şunları takip eder:

- **Varlık Ağırlıkları**: Mevcut ve hedef tahsisler
- **Getiri Oranları**: Protokol getirilerindeki değişiklikler
- **Piyasa Koşulları**: Oynaklık, likidite, korelasyonlar
- **Risk Metrikleri**: Riskteki Değer, maksimum düşüş, Sharpe oranı

#### **Tahmine Dayalı Analiz**

- **Trend Tespiti**: Tam olarak gelişmeden önce ortaya çıkan trendleri belirleyin
- **Oynaklık Tahmini**: Yüksek oynaklık dönemlerini tahmin edin
- **Korelasyon Analizi**: Değişen varlık ilişkilerini izleyin
- **Rejim Tespiti**: Boğa/ayı/yatay piyasa koşullarını belirleyin

### Uyarı Sistemi

Şunlar hakkında bildirim alın:

- **Planlı Yeniden Dengeleme**: Planlanan yeniden dengelemenin önceden bildirimi
- **Fırsatçı Yeniden Dengeleme**: Planlanmamış optimizasyon fırsatları
- **Risk Tabanlı Yeniden Dengeleme**: Acil risk azaltma önlemleri
- **Tamamlama Onayı**: Başarılı yeniden dengeleme yürütmesi

#### **Performans Etkisi**

Her yeniden dengelemenin etkisini takip edin:

- **Maliyet Analizi**: Toplam maliyetler ve beklenen faydalar
- **Performans Atfı**: Yeniden dengelemenin getirileri nasıl etkilediği
- **Verimlilik Metrikleri**: Başarı oranı ve optimizasyon kalitesi
- **Kullanıcı Raporlaması**: Aylık yeniden dengeleme performans özetleri

## 📈 Yeniden Dengeleme Performansı

### Tarihsel Sonuçlar

#### **Geriye Dönük Test Analizi**

Yeniden dengeleme algoritmalarımız çeşitli piyasa koşullarında geriye dönük olarak test edilmiştir:

| Piyasa Koşulu   | Yeniden Dengeleme Yok | Aylık Yeniden Dengeleme | Akıllı Yeniden Dengeleme | İyileşme               |
| --------------- | --------------------- | ----------------------- | ------------------------ | ---------------------- |
| Boğa Piyasası   | %150                  | %165                    | %180                     | Yönetilmeyene göre %30 |
| Ayı Piyasası    | -%60                  | -%45                    | -%35                     | Yönetilmeyene göre %25 |
| Yatay Piyasa    | %5                    | %12                     | %18                      | Yönetilmeyene göre %13 |
| Yüksek Oynaklık | %20                   | %35                     | %45                      | Yönetilmeyene göre %25 |

#### **Gösterilen Temel Faydalar**

- **Oynaklık Azaltma**: %20-30 daha düşük portföy oynaklığı
- **Düşüş Koruması**: %15-25 daha küçük maksimum düşüşler
- **Getiri Artışı**: %5-15 daha yüksek riske göre ayarlanmış getiriler
- **Tutarlılık**: Piyasa döngüleri boyunca daha istikrarlı performans

### Kullanıcı Başarı Hikayeleri

#### **Vaka Çalışması: Endeks Fonu Yatırımcısı**

**Profil**: 50.000 $ yatırım, 18 aylık dönem **Yeniden Dengeleme Olmadan**: %85 getiri, %45 maksimum
düşüş **Akıllı Yeniden Dengeleme ile**: %95 getiri, %35 maksimum düşüş **Sonuç**: %22 daha az düşüş
riskiyle %10 daha yüksek getiri

## 🎛️ Kullanıcı Kontrolleri

### Özelleştirme Seçenekleri

#### **Yeniden Dengeleme Tercihleri**

Kullanıcılar şunları özelleştirebilir:

- **Sıklık**: Ne sıklıkla yeniden dengeleme yapılacağı
- **Eşikler**: Hangi sapmanın yeniden dengelemeyi tetikleyeceği
- **Maliyet Limitleri**: Yeniden dengeleme için kabul edilebilir maksimum maliyetler
- **Vergi Hassasiyeti**: Vergi etkilerinin dikkate alınıp alınmayacağı

#### **Geçersiz Kılma Kontrolleri**

- **Yeniden Dengelemeyi Duraklat**: Otomatik yeniden dengelemeyi geçici olarak devre dışı bırakın
- **Manuel Tetikleme**: Anında yeniden dengelemeyi zorlayın
- **Strateji Ayarı**: Hedef tahsislerini değiştirin
- **Acil Çıkış**: Tüm pozisyonlardan hızla çıkın

### Şeffaflık Özellikleri

#### **Yeniden Dengeleme Kontrol Paneli**

- **Canlı Durum**: Mevcut yeniden dengeleme faaliyetleri
- **Geçmiş**: Tüm yeniden dengeleme eylemlerinin tam kaydı
- **Performans**: Yeniden dengelemenin getiriler üzerindeki etkisi
- **Maliyetler**: Toplam maliyetler ve optimizasyon başına maliyet

#### **Tahmine Dayalı Bilgiler**

- **Sonraki Yeniden Dengeleme**: Sonraki yeniden dengelemenin ne zaman beklendiği
- **Sapma Durumu**: Tahsislerin tetikleyicilere ne kadar yakın olduğu
- **Fırsat Hattı**: Yaklaşan optimizasyon fırsatları
- **Maliyet Projeksiyonları**: Planlanan yeniden dengeleme için beklenen maliyetler

---

Manuel yeniden dengeleme, Zap Pilot'un en güçlü özelliklerinden biridir. Yatırımlarınızı 7/24
izleyen ve optimizasyonlar öneren profesyonel bir portföy yöneticisine sahip olmak gibidir. Tüm
işlemlerde son söz sizde olur, bu da varlıklarınızın kontrolünü her zaman elinizde tutmanızı sağlar.

👉 **[Niyet Yürütme Hakkında Bilgi Edinin →](./intent-execution)** 👉
**[Zincirler Arası Operasyonları Keşfedin →](./cross-chain-operations)** 👉
**[Strateji Performansını Görüntüle →](../strategies)**
