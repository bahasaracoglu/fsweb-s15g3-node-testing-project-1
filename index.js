/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  // ✨ kodlar buraya

  let newObj = {};

  for (const prop in obj) {
    newObj[prop] = obj[prop].trim();
  }
  return newObj;
}

console.log("Görev1", nesneyiTrimle({ isim: "  jane  " }));

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  // ✨ kodlar buraya

  let newObj = { ...obj };

  newObj[prop] = newObj[prop].trim();

  return newObj;
}

console.log(
  "Görev2",
  verileniTrimle({ isim: "  jane  ", yas: " 34 " }, "isim")
);

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  const sayiDegerleri = tamsayilar.map((sayi) => sayi.tamsayi);
  const enBuyukTamsayi = sayiDegerleri.reduce((prev, current) => {
    return current > prev ? current : prev;
  });

  return enBuyukTamsayi;
}

console.log(
  "Görev3",
  enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }])
);

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */

  // ✨ gerekli propları ekleyin

  this.sayac = ilkSayi;

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.asagiSay = () => {
    // ✨ kodlar buraya
    if (this.sayac > 0) {
      this.sayac = this.sayac - 1;
    } else {
      return this.sayac;
    }

    return this.sayac + 1;
  };
}

const sayac = new Sayici(3);

console.log("Görev4", sayac.asagiSay());
console.log("Görev4", sayac.asagiSay());
console.log("Görev4", sayac.asagiSay());
console.log("Görev4", sayac.asagiSay());

function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  this.mevsim = "ilkbahar";
  //["yaz", "sonbahar", "kış", "ilkbahar"];

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.sonraki = () => {
    // ✨ kodlar buraya

    if (this.mevsim == "ilkbahar") {
      this.mevsim = "yaz";
      return this.mevsim;
    } else if (this.mevsim == "yaz") {
      this.mevsim = "sonbahar";
      return this.mevsim;
    } else if (this.mevsim == "sonbahar") {
      this.mevsim = "kış";
      return this.mevsim;
    } else if (this.mevsim == "kış") {
      {
        this.mevsim = "ilkbahar";
        return this.mevsim;
      }
    }
  };
}

const mevsimler = new Mevsimler();
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());

function Araba(/*kodlar buraya */ isim, depo, kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */

  this.odometer = 0; // araba 0 kilometrede yüklenecek
  let depoBenzin = depo;
  this.depo = depoBenzin; // araba full depoyla yüklenecek
  // ✨ gerekli propları ekleyin

  this.isim = isim;
  this.kml = kml;

  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya
    let kalanMenzil = this.depo * this.kml;
    let kalanMenzilleGY = 0;
    if (this.depo > 0) {
      if (gidilecekyol > kalanMenzil) {
        kalanMenzilleGY = kalanMenzil;
        this.odometer = this.odometer + kalanMenzilleGY;
        this.depo = this.depo - kalanMenzilleGY / kml;
        return this.odometer;
      } else {
        this.odometer = this.odometer + gidilecekyol;
        this.depo = this.depo - gidilecekyol / kml;

        return this.odometer;
      }
    } else {
      console.log("benzin bitti");
    }
    return this.odometer;
  };

  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    // ✨ kodlar buraya
    let kalanMenzil = this.depo * this.kml;
    if (this.depo + litre <= depoBenzin) {
      this.depo = this.depo + litre;
      return kalanMenzil;
    } else {
      this.depo = depoBenzin;
      kalanMenzil = this.depo * this.kml;
      return kalanMenzil;
    }
  };
}

const focus = new Araba("focus", 20, 30);

console.log(focus.sur(100));
console.log(focus.sur(100));
console.log(focus.sur(100));
console.log(focus.sur(200));
console.log(focus.sur(200));
console.log(focus.sur(200));
console.log(focus.sur(600));
console.log(focus.sur(1));
console.log(focus.benzinal(99));

/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
function asenkronCiftSayi(sayi) {
  // ✨ implement
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sayi % 2 === 0);
    }, 1000); // 1 saniye gecikme eklendi
  });
}
/*
console.log(
  asenkronCiftSayi(2).then((result) => {
    return result;
  })
);

asenkronCiftSayi(3).then((result) => {
  console.log(result); // false
});*/

//console.log("Görev-7", asenkronCiftSayi(3));

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
