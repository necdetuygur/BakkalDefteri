async function kullaniciEkle(data) {
  try {
    const response = await fetch("http://localhost:3000/api/kullanici", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function kullanicilariGetir() {
  try {
    const response = await fetch("http://localhost:3000/api/kullanici", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function kullaniciGuncelle(data) {
  try {
    const response = await fetch("http://localhost:3000/api/kullanici", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function urunEkle(data) {
  try {
    const response = await fetch("http://localhost:3000/api/urun", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function urunleriGetir() {
  try {
    const response = await fetch("http://localhost:3000/api/urun", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function urunGuncelle(data) {
  try {
    const response = await fetch("http://localhost:3000/api/urun", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function defterKaydiEkle(data) {
  try {
    const response = await fetch("http://localhost:3000/api/defter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function defterKayitlariniGetir() {
  try {
    const response = await fetch("http://localhost:3000/api/defter", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function defterKaydiGuncelle(data) {
  try {
    const response = await fetch("http://localhost:3000/api/defter", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function defterBorcOdemeKaydi(data) {
  try {
    const response = await fetch("http://localhost:3000/api/defter/odeme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

async function kullaniciBorcunuGetir() {
  try {
    const response = await fetch(
      "http://localhost:3000/api/defter/kullanici/3",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Hata:", error);
  }
}

const $ = document.querySelector.bind(document);
