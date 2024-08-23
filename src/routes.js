import express from "express";
import database from "./db.js";

const router = express.Router();
const jsonParser = express.json();

// Kullanıcılar
router.post("/kullanici", jsonParser, async (req, res) => {
  const { Ad, Soyad } = req.body;
  await database.run("INSERT INTO Kullanici (Ad, Soyad) VALUES (?, ?)", [
    Ad,
    Soyad,
  ]);
  res.status(201).send("Kullanıcı eklendi");
});

router.put("/kullanici", jsonParser, async (req, res) => {
  const { ID, Ad, Soyad } = req.body;
  await database.run("UPDATE Kullanici SET Ad = ?, Soyad = ? WHERE ID = ?", [
    Ad,
    Soyad,
    ID,
  ]);
  res.send("Kullanıcı güncellendi");
});

router.get("/kullanici", async (req, res) => {
  const kullanicilar = await database.all("SELECT * FROM Kullanici");
  res.json(kullanicilar);
});

// Ürünler
router.post("/urun", jsonParser, async (req, res) => {
  const { Ad, Barkod, Fiyat } = req.body;
  await database.run("INSERT INTO Urun (Ad, Barkod, Fiyat) VALUES (?, ?, ?)", [
    Ad,
    Barkod,
    Fiyat,
  ]);
  res.status(201).send("Ürün eklendi");
});

router.put("/urun", jsonParser, async (req, res) => {
  const { ID, Ad, Barkod, Fiyat } = req.body;
  await database.run(
    "UPDATE Urun SET Ad = ?, Barkod = ?, Fiyat = ? WHERE ID = ?",
    [Ad, Barkod, Fiyat, ID]
  );
  res.send("Ürün güncellendi");
});

router.get("/urun", async (req, res) => {
  const urunler = await database.all("SELECT * FROM Urun");
  res.json(urunler);
});

// Defter
router.post("/defter", jsonParser, async (req, res) => {
  const { KullaniciID, UrunID, Adet } = req.body;
  const TarihSaat = new Date().toISOString();
  const urunFiyati = (
    await database.all("SELECT * FROM Urun WHERE ID = ?", [UrunID])
  )[0].Fiyat;
  const Tutar = Adet * urunFiyati;
  await database.run(
    "INSERT INTO Defter (KullaniciID, UrunID, Adet, Tutar, TarihSaat) VALUES (?, ?, ?, ?, ?)",
    [KullaniciID, UrunID, Adet, Tutar, TarihSaat]
  );
  res.status(201).send("Defter kaydı eklendi");
});

router.put("/defter", jsonParser, async (req, res) => {
  const { ID, KullaniciID, UrunID, Adet } = req.body;
  const TarihSaat = new Date().toISOString();
  const urunFiyati = (
    await database.all("SELECT * FROM Urun WHERE ID = ?", [UrunID])
  )[0].Fiyat;
  const Tutar = Adet * urunFiyati;
  await database.run(
    "UPDATE Defter SET KullaniciID = ?, UrunID = ?, Adet = ?, Tutar = ?, TarihSaat = ? WHERE ID = ?",
    [KullaniciID, UrunID, Adet, Tutar, TarihSaat, ID]
  );
  res.send("Defter kaydı güncellendi");
});

router.get("/defter", async (req, res) => {
  const kayitlar = await database.all("SELECT * FROM Defter");
  res.json(kayitlar);
});

router.post("/defter/odeme", jsonParser, async (req, res) => {
  const { KullaniciID, Tutar } = req.body;
  const TarihSaat = new Date().toISOString();
  const UrunID = 0;
  const Adet = 0;
  const newTutar = Tutar * -1;
  await database.run(
    "INSERT INTO Defter (KullaniciID, UrunID, Adet, Tutar, TarihSaat) VALUES (?, ?, ?, ?, ?)",
    [KullaniciID, UrunID, Adet, newTutar, TarihSaat]
  );
  res.status(201).send("Deftere ödeme kaydı eklendi");
});

router.get("/defter/kullanici/:KullaniciID", async (req, res) => {
  const KullaniciID = req.params.KullaniciID;
  const kayitlar = await database.all(
    "SELECT * FROM Defter WHERE KullaniciID = ?",
    [KullaniciID]
  );

  let kalanBorc = 0;
  kayitlar.forEach((item) => {
    kalanBorc += item.Tutar;
  });

  res.json({
    KullaniciID,
    kalanBorc,
    kayitlar,
  });
});

export default router;
