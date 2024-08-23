# Node.js Bakkal Defteri API
Video: [https://youtu.be/Q_n7kVIqGmw](https://youtu.be/Q_n7kVIqGmw)

```sh
git clone git@github.com:necdetuygur/BakkalDefteri.git
cd BakkalDefteri
npm i
npm run dev
```

## ChatGPT Prompt
BakkalDefteri adında bir nodejs express projesi oluştur. package.json'a type: module yap. Bu proje veritabanı olarak, SQLite kullanacak. Tabloları aşağıdaki gibi olacak.

### Requestler
- POST: kullanici // Kullanıcı eklemek için.
- PUT: kullanici // Kullanıcı düzenlemek için.
- GET: kullanici // Kullanıcı listesini getirmek için.
- POST: urun // Ürün eklemek için.
- PUT: urun // Ürün düzenlemek için.
- GET: urun // Ürün listesini getirmek için.
- POST: defter // Defter kaydı eklemek için.
- PUT: defter // Defter kaydı düzenlemek için.
- GET: defter // Defter kaydı listesini getirmek için.

### Tablolar
#### Kullanici
- ID
- Ad
- Soyad

#### Urun
- ID
- Ad
- Barkod
- Fiyat

#### Defter
- ID
- KullaniciID
- UrunID
- Adet
- Tutar
- TarihSaat
