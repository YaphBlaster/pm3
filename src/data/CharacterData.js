import * as Ep1CharacterImages from "./../assets/episode1/CharacterSelectorImages";
import * as Ep1CharacterHeroImages from "./../assets/episode1/CharacterHeroImages";
import * as Ep2CharacterImages from "./../assets/episode2/CharacterSelectorImages";
import * as Ep2CharacterHeroImages from "./../assets/episode2/CharacterHeroImages";

const characterMaster = {
  ep1: {
    anakin: {
      displayName: "Anakin",
      key: "anakin",
      image: Ep1CharacterImages.anakin,
      position: 1,
      hero: Ep1CharacterHeroImages.anakin
    },
    battledroid: {
      displayName: "Droids",
      key: "battledroid",
      image: Ep1CharacterImages.battledroid,
      position: 18,
      hero: Ep1CharacterHeroImages.battledroid
    },
    bossnass: {
      displayName: "Nass",
      key: "bossnass",
      image: Ep1CharacterImages.bossnass,
      position: 24,
      hero: Ep1CharacterHeroImages.bossnass
    },
    c3po: {
      displayName: "C3PO",
      key: "c3po",
      image: Ep1CharacterImages.c3po,
      position: 17,
      hero: Ep1CharacterHeroImages.c3po
    },
    captainpanaka: {
      displayName: "Panaka",
      key: "captainpanaka",
      image: Ep1CharacterImages.captainpanaka,
      position: 20,
      hero: Ep1CharacterHeroImages.captainpanaka
    },
    captaintarpals: {
      displayName: "Tarpals",
      key: "captaintarpals",
      image: Ep1CharacterImages.captaintarpals,
      position: 23,
      hero: Ep1CharacterHeroImages.captaintarpals
    },
    chancellorvalorum: {
      displayName: "Valorum",
      key: "chancellorvalorum",
      image: Ep1CharacterImages.chancellorvalorum,
      position: 21,
      hero: Ep1CharacterHeroImages.chancellorvalorum
    },
    darthmaul: {
      displayName: "Maul",
      key: "darthmaul",
      image: Ep1CharacterImages.darthmaul,
      position: 8,
      hero: Ep1CharacterHeroImages.darthmaul
    },
    darthsidious: {
      displayName: "Sidious",
      key: "darthsidious",
      image: Ep1CharacterImages.darthsidious,
      position: 6,
      hero: Ep1CharacterHeroImages.darthsidious
    },
    fode: {
      displayName: "Fode",
      key: "fode",
      image: Ep1CharacterImages.fode,
      position: 27,
      hero: Ep1CharacterHeroImages.fode
    },
    jarjar: {
      displayName: "Jarjar",
      key: "jarjar",
      image: Ep1CharacterImages.jarjar,
      position: 10,
      hero: Ep1CharacterHeroImages.jarjar
    },
    kiadimundi: {
      displayName: "Mundi",
      key: "kiadimundi",
      image: Ep1CharacterImages.kiadimundi,
      position: 9,
      hero: Ep1CharacterHeroImages.kiadimundi
    },
    lego: {
      displayName: "Random",
      key: "lego",
      image: Ep1CharacterImages.lego,
      position: 26,
      hero: Ep1CharacterHeroImages.lego
    },
    macewindu: {
      displayName: "Mace",
      key: "macewindu",
      image: Ep1CharacterImages.macewindu,
      position: 7,
      hero: Ep1CharacterHeroImages.macewindu
    },
    nutegunray: {
      displayName: "Nute",
      key: "nutegunray",
      image: Ep1CharacterImages.nutegunray,
      position: 13,
      hero: Ep1CharacterHeroImages.nutegunray
    },
    obiwan: {
      displayName: "Obiwan",
      key: "obiwan",
      image: Ep1CharacterImages.obiwan,
      position: 3,
      hero: Ep1CharacterHeroImages.obiwan
    },
    padme: {
      displayName: "Padme",
      key: "padme",
      image: Ep1CharacterImages.padme,
      position: 4,
      hero: Ep1CharacterHeroImages.padme
    },
    quigon: {
      displayName: "Quigon",
      key: "quigon",
      image: Ep1CharacterImages.quigon,
      position: 2,
      hero: Ep1CharacterHeroImages.quigon
    },
    r2d2: {
      displayName: "R2D2",
      key: "r2d2",
      image: Ep1CharacterImages.r2d2,
      position: 16,
      hero: Ep1CharacterHeroImages.r2d2
    },
    ricolie: {
      displayName: "Ric",
      key: "ricolie",
      image: Ep1CharacterImages.ricolie,
      position: 19,
      hero: Ep1CharacterHeroImages.ricolie
    },
    runehaako: {
      displayName: "Rune",
      key: "runehaako",
      image: Ep1CharacterImages.runehaako,
      position: 14,
      hero: Ep1CharacterHeroImages.runehaako
    },
    sabe: {
      displayName: "Sabe",
      key: "sabe",
      image: Ep1CharacterImages.sabe,
      position: 5,
      hero: Ep1CharacterHeroImages.sabe
    },
    sebulba: {
      displayName: "Sebulba",
      key: "sebulba",
      image: Ep1CharacterImages.sebulba,
      position: 25,
      hero: Ep1CharacterHeroImages.sebulba
    },
    sheevpalpatine: {
      displayName: "Sheev",
      key: "sheevpalpatine",
      image: Ep1CharacterImages.sheevpalpatine,
      position: 0,
      hero: Ep1CharacterHeroImages.sheevpalpatine
    },
    shmi: {
      displayName: "Shmi",
      key: "shmi",
      image: Ep1CharacterImages.shmi,
      position: 15,
      hero: Ep1CharacterHeroImages.shmi
    },
    siobibble: {
      displayName: "Bibble",
      key: "siobibble",
      image: Ep1CharacterImages.siobibble,
      position: 22,
      hero: Ep1CharacterHeroImages.siobibble
    },
    watto: {
      displayName: "Watto",
      key: "watto",
      image: Ep1CharacterImages.watto,
      position: 12,
      hero: Ep1CharacterHeroImages.watto
    },
    yoda: {
      displayName: "Yoda",
      key: "yoda",
      image: Ep1CharacterImages.yoda,
      position: 11,
      hero: Ep1CharacterHeroImages.yoda
    }
  },
  ep2: {
    aayla: {
      displayName: "Aayla",
      key: "aayla",
      image: Ep2CharacterImages.aayla,
      hero: Ep2CharacterHeroImages.aayla,
      position: 0
    },
    acklay: {
      displayName: "Acklay",
      key: "acklay",
      image: Ep2CharacterImages.acklay,
      hero: Ep2CharacterHeroImages.acklay,
      position: 1
    },
    anakin: {
      displayName: "Anakin",
      key: "anakin",
      image: Ep2CharacterImages.anakin,
      hero: Ep2CharacterHeroImages.anakin,
      position: 2
    },
    askaak: {
      displayName: "Askaak",
      key: "askaak",
      image: Ep2CharacterImages.askaak,
      hero: Ep2CharacterHeroImages.askaak,
      position: 3
    },
    battledroid: {
      displayName: "Droids",
      key: "battledroid",
      image: Ep2CharacterImages.battledroid,
      hero: Ep2CharacterHeroImages.battledroid,
      position: 4
    },
    berulars: {
      displayName: "Beru",
      key: "berulars",
      image: Ep2CharacterImages.berulars,
      hero: Ep2CharacterHeroImages.berulars,
      position: 5
    },
    boba: {
      displayName: "Boba",
      key: "boba",
      image: Ep2CharacterImages.boba,
      hero: Ep2CharacterHeroImages.boba,
      position: 6
    },
    c3po: {
      displayName: "C3PO",
      key: "c3po",
      image: Ep2CharacterImages.c3po,
      hero: Ep2CharacterHeroImages.c3po,
      position: 7
    },
    gregartypho: {
      displayName: "Typho",
      key: "gregartypho",
      image: Ep2CharacterImages.gregartypho,
      hero: Ep2CharacterHeroImages.gregartypho,
      position: 8
    },
    cliegglars: {
      displayName: "Cliegg",
      key: "cliegglars",
      image: Ep2CharacterImages.cliegglars,
      hero: Ep2CharacterHeroImages.cliegglars,
      position: 9
    },
    corde: {
      displayName: "Corde",
      key: "corde",
      image: Ep2CharacterImages.corde,
      hero: Ep2CharacterHeroImages.corde,
      position: 10
    },
    dooku: {
      displayName: "Dooku",
      key: "dooku",
      image: Ep2CharacterImages.dooku,
      hero: Ep2CharacterHeroImages.dooku,
      position: 11
    },
    darthsidious: {
      displayName: "Sidious",
      key: "darthsidious",
      image: Ep2CharacterImages.darthsidious,
      hero: Ep2CharacterHeroImages.darthsidious,
      position: 12
    },
    dexter: {
      displayName: "Dexter",
      key: "dexter",
      image: Ep2CharacterImages.dexter,
      hero: Ep2CharacterHeroImages.dexter,
      position: 13
    },
    dorme: {
      displayName: "Dorme",
      key: "dorme",
      image: Ep2CharacterImages.dorme,
      hero: Ep2CharacterHeroImages.dorme,
      position: 14
    },
    genosian: {
      displayName: "Genosians",
      key: "genosian",
      image: Ep2CharacterImages.genosian,
      hero: Ep2CharacterHeroImages.genosian,
      position: 15
    },
    siobibble: {
      displayName: "Bibble",
      key: "siobibble",
      image: Ep2CharacterImages.siobibble,
      hero: Ep2CharacterHeroImages.siobibble,
      position: 16
    },
    jango: {
      displayName: "Jango",
      key: "jango",
      image: Ep2CharacterImages.jango,
      hero: Ep2CharacterHeroImages.jango,
      position: 16
    },
    jarjar: {
      displayName: "Jarjar",
      key: "jarjar",
      image: Ep2CharacterImages.jarjar,
      hero: Ep2CharacterHeroImages.jarjar,
      position: 18
    },
    jedis: {
      displayName: "Jedis",
      key: "jedis",
      image: Ep2CharacterImages.jedis,
      hero: Ep2CharacterHeroImages.jedis,
      position: 19
    },
    kiadimundi: {
      displayName: "Mundi",
      key: "kiadimundi",
      image: Ep2CharacterImages.kiadimundi,
      hero: Ep2CharacterHeroImages.kiadimundi,
      position: 20
    },
    kitfisto: {
      displayName: "Fisto",
      key: "kitfisto",
      image: Ep2CharacterImages.kitfisto,
      hero: Ep2CharacterHeroImages.kitfisto,
      position: 21
    },
    lamesu: {
      displayName: "Lamesu",
      key: "lamesu",
      image: Ep2CharacterImages.lamesu,
      hero: Ep2CharacterHeroImages.lamesu,
      position: 22
    },
    lego: {
      displayName: "Random",
      key: "lego",
      image: Ep2CharacterImages.lego,
      hero: Ep2CharacterHeroImages.lego,
      position: 23
    },
    luminara: {
      displayName: "Luminara",
      key: "luminara",
      image: Ep2CharacterImages.luminara,
      hero: Ep2CharacterHeroImages.luminara,
      position: 24
    },
    macewindu: {
      displayName: "Mace",
      key: "macewindu",
      image: Ep2CharacterImages.macewindu,
      hero: Ep2CharacterHeroImages.macewindu,
      position: 25
    },
    masamedda: {
      displayName: "Mas",
      key: "masamedda",
      image: Ep2CharacterImages.masamedda,
      hero: Ep2CharacterHeroImages.masamedda,
      position: 26
    },
    nutegunray: {
      displayName: "Nute",
      key: "nutegunray",
      image: Ep2CharacterImages.nutegunray,
      hero: Ep2CharacterHeroImages.nutegunray,
      position: 27
    },
    obiwan: {
      displayName: "Obiwan",
      key: "obiwan",
      image: Ep2CharacterImages.obiwan,
      hero: Ep2CharacterHeroImages.obiwan,
      position: 28
    },
    owenlars: {
      displayName: "Owen",
      key: "owenlars",
      image: Ep2CharacterImages.owenlars,
      hero: Ep2CharacterHeroImages.owenlars,
      position: 29
    },
    padme: {
      displayName: "Padme",
      key: "padme",
      image: Ep2CharacterImages.padme,
      hero: Ep2CharacterHeroImages.padme,
      position: 30
    },
    plokoon: {
      displayName: "Plo",
      key: "plokoon",
      image: Ep2CharacterImages.plokoon,
      hero: Ep2CharacterHeroImages.plokoon,
      position: 31
    },
    poggle: {
      displayName: "Poggle",
      key: "poggle",
      image: Ep2CharacterImages.poggle,
      hero: Ep2CharacterHeroImages.poggle,
      position: 32
    },
    jamillia: {
      displayName: "Jamillia",
      key: "jamillia",
      image: Ep2CharacterImages.jamillia,
      hero: Ep2CharacterHeroImages.jamillia,
      position: 33
    },
    r2d2: {
      displayName: "R2D2",
      key: "r2d2",
      image: Ep2CharacterImages.r2d2,
      hero: Ep2CharacterHeroImages.r2d2,
      position: 34
    },
    r4p17: {
      displayName: "R4P17",
      key: "r4p17",
      image: Ep2CharacterImages.r4p17,
      hero: Ep2CharacterHeroImages.r4p17,
      position: 35
    },
    reek: {
      displayName: "Reek",
      key: "reek",
      image: Ep2CharacterImages.reek,
      hero: Ep2CharacterHeroImages.reek,
      position: 36
    },
    runehaako: {
      displayName: "Rune",
      key: "runehaako",
      image: Ep2CharacterImages.runehaako,
      hero: Ep2CharacterHeroImages.runehaako,
      position: 37
    },
    bail: {
      displayName: "Bail",
      key: "bail",
      image: Ep2CharacterImages.bail,
      hero: Ep2CharacterHeroImages.bail,
      position: 38
    },
    shaak: {
      displayName: "Shaak",
      key: "shaak",
      image: Ep2CharacterImages.shaak,
      hero: Ep2CharacterHeroImages.shaak,
      position: 39
    },
    sheevpalpatine: {
      displayName: "Sheev",
      key: "sheevpalpatine",
      image: Ep2CharacterImages.sheevpalpatine,
      hero: Ep2CharacterHeroImages.sheevpalpatine,
      position: 40
    },
    shmi: {
      displayName: "Shmi",
      key: "shmi",
      image: Ep2CharacterImages.shmi,
      hero: Ep2CharacterHeroImages.shmi,
      position: 41
    },
    slymoore: {
      displayName: "Slymoore",
      key: "slymoore",
      image: Ep2CharacterImages.slymoore,
      hero: Ep2CharacterHeroImages.slymoore,
      position: 42
    },
    stormtrooper: {
      displayName: "Clonetrooper",
      key: "stormtrooper",
      image: Ep2CharacterImages.stormtrooper,
      hero: Ep2CharacterHeroImages.stormtrooper,
      position: 43
    },
    sunfac: {
      displayName: "Sunfac",
      key: "sunfac",
      image: Ep2CharacterImages.sunfac,
      hero: Ep2CharacterHeroImages.sunfac,
      position: 44
    },
    taunwe: {
      displayName: "Taunwe",
      key: "taunwe",
      image: Ep2CharacterImages.taunwe,
      hero: Ep2CharacterHeroImages.taunwe,
      position: 45
    },
    tuskenraider: {
      displayName: "Raider",
      key: "tuskenraider",
      image: Ep2CharacterImages.tuskenraider,
      hero: Ep2CharacterHeroImages.tuskenraider,
      position: 46
    },
    wattambor: {
      displayName: "Wat",
      key: "wattambor",
      image: Ep2CharacterImages.wattambor,
      hero: Ep2CharacterHeroImages.wattambor,
      position: 47
    },
    watto: {
      displayName: "Watto",
      key: "watto",
      image: Ep2CharacterImages.watto,
      hero: Ep2CharacterHeroImages.watto,
      position: 48
    },
    yoda: {
      displayName: "Yoda",
      key: "yoda",
      image: Ep2CharacterImages.yoda,
      hero: Ep2CharacterHeroImages.yoda,
      position: 49
    },
    younglings: {
      displayName: "Younglings",
      key: "younglings",
      image: Ep2CharacterImages.younglings,
      hero: Ep2CharacterHeroImages.younglings,
      position: 50
    }
  }
};

export default characterMaster;
