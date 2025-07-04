---
sidebar_position: 3
---

# Account Abstraction Cüzdan Eğitimi

Account Abstraction (AA) cüzdanları, kripto cüzdan teknolojisinin yeni nesli olup DeFi'yi daha
erişilebilir ve kullanıcı dostu hale getirir. Bu rehber, Zap Pilot ile AA cüzdanınızı kurma ve
kullanma konusunda size yol gösterir.

## Account Abstraction Nedir?

### Geleneksel Cüzdanlar vs AA Cüzdanları

#### **Geleneksel Cüzdanlar**

- Her işlemde gas için ETH gerektirir
- Sınırlı işlem mantığı
- Her adım için manuel işlem onayı
- Karmaşık çok adımlı operasyonlar

#### **Account Abstraction Cüzdanları**

- **Gazsız işlemler** - herhangi bir token ile ücret ödeme
- **Toplu operasyonlar** - tek işlemde birden fazla eylem
- **Akıllı sözleşme mantığı** - programlanabilir cüzdan davranışı
- **Sosyal kurtarma** - seed cümleleri olmadan erişim kurtarma

### DeFi için Ana Faydalar

🚀 **Basitleştirilmiş Deneyim**

- Tek tıkla karmaşık operasyonlar
- Belirli gas tokenları tutma ihtiyacı yok
- Otomatik işlem gruplaması

🔒 **Gelişmiş Güvenlik**

- Çoklu imza desteği
- Harcama limitleri ve kontrolleri
- Otomatik stratejiler için oturum anahtarları

💰 **Maliyet Verimliliği**

- Gas tasarrufu için birden fazla operasyonu grupla
- ETH yerine stablecoin'lerle ücret ödeme
- Küçük tutarlar için sponsorlu işlemler

## AA Cüzdanınızı Kurma

### Seçenek 1: Sosyal Giriş (Yeni Başlayanlar için Önerilen)

#### **Gmail Kullanımı**

1. **Zap Pilot Uygulamasını Ziyaret Edin**
   - [app.zap-pilot.com](https://app.zap-pilot.com) adresine gidin
   - "Connect Wallet" üzerine tıklayın

2. **Sosyal Giriş Seçin**
   - "Continue with Gmail" seçin
   - Google hesabınızla yetkilendirin

3. **Cüzdan Oluşturma**
   - AA cüzdanı otomatik olarak oluşturulur
   - Seed cümlesi gerekmez (Google tarafından güvence altına alınır)
   - Yedekleme seçenekleri sağlanır

4. **Doğrulama**
   - E-posta onayı gönderilir
   - Gelişmiş güvenlik için hesabınızı doğrulayın

#### **Apple ID veya Facebook Kullanımı**

Gmail'e benzer süreç:

- Tercih ettiğiniz sosyal sağlayıcıyı seçin
- Hesap erişimini yetkilendirin
- Cüzdan oluşturulur ve sağlayıcı tarafından güvence altına alınır

### Seçenek 2: Mevcut Cüzdan Entegrasyonu

#### **MetaMask Entegrasyonu**

1. **MetaMask'ı Bağlayın**
   - MetaMask'ın yüklü olduğundan emin olun
   - Her zamanki gibi Zap Pilot'a bağlanın

2. **AA'ya Yükseltin**
   - "Upgrade to Smart Wallet" üzerine tıklayın
   - AA cüzdan sözleşmesini dağıtın
   - Mevcut MetaMask'ınıza bağlayın

3. **Faydalar**
   - Mevcut adreslerinizi koruyun
   - Gelişmiş fonksiyonalite
   - Geriye dönük uyumluluk

#### **Diğer Cüzdan Desteği**

- **WalletConnect**: 200+ mobil cüzdanı bağlar
- **Coinbase Wallet**: Doğrudan entegrasyon
- **Hardware Wallets**: MetaMask köprüsü üzerinden

## AA Cüzdan Özellikleri

### Gazsız İşlemler

#### **Nasıl Çalışır**

ETH ile gas ödeme yerine:

```
Geleneksel: ETH'niz → Gas Ücreti → İşlem
AA Cüzdan: USDC'niz → Sponsorlu → İşlem
```

#### **Desteklenen Ücret Tokenları**

- **USDC** (önerilen)
- **USDT**
- **DAI**
- **ETH** (tercih ederseniz)

#### **Ücret Sponsorluğu**

Uygun işlemler için:

- **Yeni kullanıcılar**: İlk 3 işlem sponsorlu
- **Küçük tutarlar**: 100$ altı işlemler
- **Strateji yatırımları**: İlk vault girişleri

### Toplu Operasyonlar

#### **Tek İşlem, Birden Fazla Eylem**

Geleneksel DeFi yatırımı:

```
1. USDC'yi onayla
2. Hedef tokenlara takas et
3. Likidite ekle
4. LP tokenlarını stake et
Toplam: 4 işlem, 4 gas ücreti
```

AA cüzdan ile:

```
1. Toplu: [onayla, takas_et, likidite_ekle, stake_et]
Toplam: 1 işlem, 1 gas ücreti
```

#### **Zap Pilot Entegrasyonu**

Bir stratejiye "Zap In" yaptığınızda:

- Onay, takaslar, yatırımlar gruplanır
- Çapraz zincir operasyonlar koordine edilir
- Tüm adımlarda optimal gas kullanımı

### Oturum Anahtarları

#### **Otomatik Strateji Yönetimi**

Oturum anahtarlarını şunlar için kurun:

- Belirlenen parametreler içinde **otomatik yeniden dengeleme**
- **Getiri hasadı** ve bileşik oluşturma
- **Risk yönetimi** eylemleri
- Koşullara dayalı **acil çıkışlar**

#### **Güvenlik Kontrolleri**

Oturum anahtarları içerir:

- **Harcama limitleri**: İşlem başına maksimum tutar
- **Zaman limitleri**: Anahtarlar otomatik olarak sona erer
- **Eylem kısıtlamaları**: Sadece belirli fonksiyonlara izin
- **İptal**: İzinleri istediğiniz zaman iptal edin

## Cüzdan Güvenliği

### Çoklu İmza Desteği

#### **Takım Yönetimi**

- Takım hesapları için **2/3 imza**
- Farklı fonksiyonlar için **rol tabanlı izinler**
- Çoklu onay gerektiren **harcama eşikleri**

#### **Kişisel Güvenlik**

- **Guardian kurulumu**: Kurtarma için güvenilir kişiler
- **Cihaz yetkilendirmesi**: Bilinen cihazlara erişimi sınırla
- **İşlem gecikmeleri**: Büyük tutarlar için zaman kilitleri

### Sosyal Kurtarma

#### **Artık Kayıp Seed Cümleleri Yok**

Geleneksel kurtarma:

- Seed cümlesini kaybetmek = her şeyi kaybetmek
- Karmaşık yedekleme gereksinimleri
- Tek başarısızlık noktası

AA cüzdan kurtarma:

- **Guardian ağı**: Arkadaşlar/aile kurtarmaya yardım edebilir
- **Sosyal doğrulama**: Çoklu onay yöntemleri
- **Aşamalı erişim**: Adım adım kurtarma

#### **Kurtarma Süreci**

1. **Kurtarmayı Başlat**
   - Herhangi bir cihazdan "Recover Wallet" erişimi
   - Sosyal sağlayıcı üzerinden kimlik doğrulama

2. **Guardian Onayı**
   - Önceden seçilen guardianlar kurtarma isteği alır
   - Devam etmek için çoğunluk onayı gerekir

3. **Yeni Cihaz Kurulumu**
   - Yeni cihaza cüzdan yükle
   - Kurtarma doğrulamasını tamamla
   - Tam erişim geri yüklenir

## Gelişmiş Özellikler

### Harcama Kontrolleri

#### **Günlük Limitler**

- Maksimum günlük harcama tutarları belirle
- Her 24 saatte otomatik sıfırlama
- Doğrulanmış büyük işlemler için geçersiz kılma seçenekleri

#### **Protokol İzin Listeleri**

- Etkileşimleri onaylı protokollerle sınırla
- Belirli DeFi platformlarını beyaz listeye al
- İşaretli sözleşmelerle etkileşimleri engelle

#### **Zaman Tabanlı Kontroller**

- **Çalışma saatleri**: İşlemleri belirli zamanlara sınırla
- **Soğuma dönemleri**: Büyük işlemler arası gecikmeler
- \*\*Acil dondurmaBankacılık: Gerektiğinde tüm aktiviteyi durdur

### Portföy Otomasyonu

#### **Yeniden Dengeleme Otomasyonu**

```
IF portfolio_drift > 5% AND gas_cost < rebalancing_benefit
THEN execute_rebalancing()
```

#### **Getiri Optimizasyonu**

```
IF new_yield_opportunity > current_yield + 2%
THEN propose_migration()
```

#### **Risk Yönetimi**

```
IF protocol_risk_score < threshold
THEN emergency_exit()
```

## Sorun Giderme

### Yaygın Sorunlar

#### **"Transaction Failed"**

- **Neden**: Ücretler için yetersiz bakiye
- **Çözüm**: Cüzdanda ücret tokenları (USDC/ETH) olduğundan emin olun
- **Önleme**: Otomatik ücret yönetimini etkinleştirin

#### **"Session Key Expired"**

- **Neden**: Otomatik izinlerin süresi dolmuş
- **Çözüm**: Oturum anahtarlarını yeniden yetkilendirin
- **Önleme**: Daha uzun sona erme süreleri belirleyin

#### **"Guardian Not Responding"**

- **Neden**: Kurtarma guardianı mevcut değil
- **Çözüm**: Diğer guardianlarla iletişime geçin veya yedek yöntemi kullanın
- **Önleme**: Birden fazla güvenilir guardian seçin

### Yardım Alma

#### **Cüzdan Desteği**

- **ThirdWeb Documentation**: [docs.thirdweb.com](https://docs.thirdweb.com)
- **Zap Pilot Support**: Cüzdan sorunları için canlı sohbet
- **Topluluk Forumu**: Kullanıcıdan kullanıcıya yardım

#### **Acil Prosedürler**

- **Anında dondurma**: Tüm otomatik fonksiyonları durdur
- **Doğrudan protokol erişimi**: Fonları doğrudan çek
- **Kurtarma yardımı**: Hesap kurtarma için 7/24 destek

---

## Sonraki Adımlar

AA cüzdanınız kurulduğuna göre:

1. **Cüzdanınızı fonlayın** stablecoin'ler veya kripto ile
2. **Risk toleransınıza göre stratejinizi seçin**
3. **İlk yatırımınızı tek tıkla dağıtın**
4. **Optimal yönetim için otomasyonu kurun**

AA cüzdanınız DeFi yatırımını geleneksel finans kadar basit hale getirir, ancak merkeziyetsizlik ve
kendi saklama tutmanın tüm faydalarıyla.

👉 **[Cüzdanınızı Fonlayın →](../getting-started)** 👉 **[Strateji Seçin →](../strategies)**
