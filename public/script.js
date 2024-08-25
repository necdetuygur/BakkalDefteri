let kullanicilar = [];
let urunler = [];
let defter = [];

window.addEventListener("load", async () => {
  router("defter");
  await loadKullanicilar();
  await loadUrunler();
  await loadDefter();
});

const router = async (page) => {
  "defter,kullanici,urun".split(",").forEach((item) => {
    $("#route-" + item).style.display = "none";
  });
  $("#route-" + page).style.display = "block";
};

const loadKullanicilar = async () => {
  const data = await kullanicilariGetir();
  kullanicilar = data;
  const result =
    `<table>
      <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>İşlem</th>
      </tr>
  ` +
    data
      .map(
        (item) => `<tr>
        <td>${item.Ad}</td>
        <td>${item.Soyad}</td>
        <td>
          <input type="button" value="Düzenle" onclick="kullaniciDuzenlePrompt(${item.ID})" />
        </td>
      </tr>`
      )
      .join("") +
    `</table>`;
  $("#kullanicilar").innerHTML = result;
};

const loadUrunler = async () => {
  const data = await urunleriGetir();
  urunler = data;
  const result =
    `<table>
      <tr>
        <th>Ad</th>
        <th>Barkod</th>
        <th>Fiyat</th>
        <th>İşlem</th>
      </tr>
  ` +
    data
      .map(
        (item) => `<tr>
        <td>${item.Ad}</td>
        <td>${item.Barkod}</td>
        <td>${item.Fiyat}</td>
        <td>
          <input type="button" value="Düzenle" onclick="urunDuzenlePrompt(${item.ID})" />
        </td>
      </tr>`
      )
      .join("") +
    `</table>`;
  $("#urunler").innerHTML = result;
};

const loadDefter = async () => {
  const data = await defterKayitlariniGetir();
  defter = data;
  const result =
    `<table>
      <tr>
        <th>Kişi</th>
        <th>Ürün</th>
        <th>Adet</th>
        <th>Tutar</th>
        <th>Tarih Saat</th>
      </tr>
  ` +
    data
      .map((item) => {
        const kullanici = kullanicilar.find((i) => i.ID == item.KullaniciID);
        const urun = urunler.find((i) => i.ID == item.UrunID);
        return `<tr>
        <td>${kullanici?.Ad || ""} ${kullanici?.Soyad || ""}</td>
        <td>${urun?.Ad || ""}</td>
        <td>${item.Adet}</td>
        <td>${item.Tutar}</td>
        <td>${item.TarihSaat}</td>
        <td>
          <input type="button" value="Düzenle" onclick="urunDuzenlePrompt(${
            item.ID
          })" />
        </td>
      </tr>`;
      })
      .join("") +
    `</table>`;
  $("#defter").innerHTML = result;
};

const kullaniciDuzenlePrompt = async (id) => {
  const current = kullanicilar.find((item) => item.ID == id);
  current.Ad = prompt("Ad", current.Ad) || current.Ad;
  current.Soyad = prompt("Soyad", current.Soyad) || current.Soyad;
  await kullaniciGuncelle(current);
  await loadKullanicilar();
};

const kullaniciEklePrompt = async () => {
  const current = {};
  current.Ad = prompt("Ad", current.Ad) || "";
  current.Soyad = prompt("Soyad", current.Soyad) || "";
  await kullaniciEkle(current);
  await loadKullanicilar();
};

const urunDuzenlePrompt = async (id) => {
  const current = urunler.find((item) => item.ID == id);
  current.Ad = prompt("Ad", current.Ad) || current.Ad;
  current.Barkod = prompt("Barkod", current.Barkod) || current.Barkod;
  current.Fiyat = prompt("Fiyat", current.Fiyat) || current.Fiyat;
  await urunGuncelle(current);
  await loadUrunler();
};

const urunEklePrompt = async () => {
  const current = {};
  current.Ad = prompt("Ad", current.Ad) || "";
  current.Barkod = prompt("Barkod", current.Barkod) || "";
  current.Fiyat = prompt("Fiyat", current.Fiyat) || "";
  await urunEkle(current);
  await loadUrunler();
};
