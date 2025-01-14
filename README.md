# Next.js Dynamic Import Demo

Bu proje Next.js'de Dynamic Import ve Regular Import arasındaki farkları görsel olarak gösteren bir demo uygulamasıdır.

## Başlangıç

Geliştirme sunucusunu başlatmak için:

```bash
bun install
bun dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Demo İçeriği

Bu demo iki farklı import yöntemini karşılaştırır:

### Regular Import (Normal Import)
- Komponent kodu ana bundle içinde yer alır
- Sayfa yüklenirken tüm kod indirilir
- Kullanılmasa bile başlangıçta yüklenir
- İlk yükleme daha yavaş olabilir

### Dynamic Import (Dinamik Import)
- Komponent kodu ayrı bir chunk olarak bölünür
- Sadece ihtiyaç duyulduğunda indirilir
- Başlangıç bundle boyutu küçüktür
- İlk yükleme daha hızlıdır

## Ne Zaman Hangisini Kullanmalı?

Dynamic Import şunlar için uygundur:
- Büyük boyutlu komponentler (harita, grafik, editör)
- Sadece bazı kullanıcıların göreceği özellikler
- Modal/dialog içerikleri
- Admin paneli gibi ana sayfada gerekmeyen bölümler

Regular Import şunlar için uygundur:
- Header, footer gibi her zaman görünen komponentler
- Küçük boyutlu ve sık kullanılan komponentler
- Sayfa açılır açılmaz gösterilmesi gereken içerikler
- SEO için önemli olan bölümler

## Proje Yapısı

- `/app/components/heavy-component.tsx` - Simüle edilmiş ağır yüklü komponent
- `/app/dynamic-import-demo/page.tsx` - Demo sayfası
- `/app/page.tsx` - Ana sayfa

## Teknik Detaylar

Demo'da gösterilen gecikmeler:
1. Regular Import:
   - Komponent kodu sayfa yüklenirken gelir
   - İçerik yüklemesi 2 saniye sürer

2. Dynamic Import:
   - Komponent kodu butona tıklandığında yüklenmeye başlar (500ms)
   - İçerik yüklemesi 2 saniye sürer

## Öğrenme Kaynakları

- [Next.js Dynamic Import Dokümantasyonu](https://nextjs.org/docs/advanced-features/dynamic-import)
- [React Lazy Loading](https://react.dev/reference/react/lazy)
- [Code Splitting Best Practices](https://nextjs.org/docs/app/building-your-application/optimizing/code-splitting)
