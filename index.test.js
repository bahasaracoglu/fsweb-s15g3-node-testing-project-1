const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  // test('[3] verilen propu trimliyor', () => {})
  // test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {})
  test("[3] verilen propu trimliyor", () => {
    const input = { bar: "bar " };
    const expected = { bar: "bar" };
    const actual = utils.verileniTrimle(input, "bar");
    expect(actual).toEqual(expected);
  });

  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "  foo ", bar: "bar", baz: " baz" };
    const actual = utils.verileniTrimle(input, "bar");
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  // test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {})

  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }", () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
    const expected = 3;
    const actual = utils.enBuyukTamsayiyiBul(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  // test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {})
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    const actual = sayici.asagiSay();
    expect(actual).toEqual(3);
  });

  // test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {})
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    let actual = sayici.asagiSay();
    actual = sayici.asagiSay();

    expect(actual).toEqual(2);
  });

  // test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {})

  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    let actual = sayici.asagiSay();
    actual = sayici.asagiSay();
    actual = sayici.asagiSay();
    actual = sayici.asagiSay();
    expect(actual).toEqual(0);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  // test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {})
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    let actual = mevsimler.sonraki();
    expect(actual).toEqual("yaz");
  });

  // test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {})
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    let actual;
    for (i = 0; i < 2; i++) {
      actual = mevsimler.sonraki();
    }

    expect(actual).toEqual("sonbahar");
  });

  // test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {})
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    let actual;
    for (i = 0; i < 3; i++) {
      actual = mevsimler.sonraki();
    }
    expect(actual).toEqual("kış");
  });

  // test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {})
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    let actual;
    for (i = 0; i < 4; i++) {
      actual = mevsimler.sonraki();
    }

    expect(actual).toEqual("ilkbahar");
  });

  // test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {})

  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    let actual;
    for (i = 0; i < 5; i++) {
      actual = mevsimler.sonraki();
    }

    expect(actual).toEqual("yaz");
  });

  // test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {})
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    let actual;
    for (i = 0; i < 40; i++) {
      actual = mevsimler.sonraki();
    }
    expect(actual).toEqual("ilkbahar");
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  // test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {})
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    let actual = focus.sur(100);
    expect(actual).toEqual(100);
  });

  // test('[16] arabayı sürmek benzin tüketiyor', () => {})

  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(100);
    let actual = focus.depo != focus.depoBenzin;
    expect(actual).toEqual(true);
  });

  // test('[17] benzinalma arabayı sürmeye izin veriyor', () => {})
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.sur(600);
    focus.benzinal(99);

    let actual = focus.sur(100);
    expect(actual).toEqual(700);
  });

  // test('[18] dolu depoya benzin alma etki etmiyor', () => {})
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    let depoIlkDurum = focus.depo;
    focus.benzinal(99);
    let depoSonDurum = focus.depo;

    let actual = depoIlkDurum === depoSonDurum;
    expect(actual).toEqual(true);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  // test('[19] bir çift sayı verilirse true çözümlüyor', () => {})
  // test('[20] tek sayı verilirse false çözümlüyor', () => {})
});
