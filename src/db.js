import sqlite3 from "sqlite3";
import { open } from "sqlite";

// SQLite veritabanını açma ve tablo yapısını oluşturma
const database = await open({
  filename: "./bakkaldefteri.db",
  driver: sqlite3.Database,
});

// Tablo yapılarını oluşturma
await database.exec(`
  CREATE TABLE IF NOT EXISTS Kullanici (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Ad TEXT NOT NULL,
    Soyad TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Urun (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Ad TEXT NOT NULL,
    Barkod TEXT NOT NULL UNIQUE,
    Fiyat REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Defter (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    KullaniciID INTEGER NOT NULL,
    UrunID INTEGER NOT NULL,
    Adet INTEGER NOT NULL,
    Tutar REAL NOT NULL,
    TarihSaat TEXT NOT NULL,
    FOREIGN KEY (KullaniciID) REFERENCES Kullanici(ID),
    FOREIGN KEY (UrunID) REFERENCES Urun(ID)
  );
`);

export default database;
