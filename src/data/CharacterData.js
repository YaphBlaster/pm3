import * as Ep1CharacterImages from "./../assets/episode1/CharacterSelectorImages";
import * as Ep1CharacterHeroImages from "./../assets/episode1/CharacterHeroImages";
import * as Ep2CharacterImages from "./../assets/episode2/CharacterSelectorImages";
import * as Ep2CharacterHeroImages from "./../assets/episode2/CharacterHeroImages";
import * as Ep3CharacterImages from "./../assets/episode3/CharacterSelectorImages";
import * as Ep3CharacterHeroImages from "./../assets/episode3/CharacterHeroImages";

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
      displayName: "Senate",
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
      position: 30
    },
    anakin: {
      displayName: "Anakin",
      key: "anakin",
      image: Ep2CharacterImages.anakin,
      hero: Ep2CharacterHeroImages.anakin,
      position: 2
    },
    battledroid: {
      displayName: "Droids",
      key: "battledroid",
      image: Ep2CharacterImages.battledroid,
      hero: Ep2CharacterHeroImages.battledroid,
      position: 11
    },
    berulars: {
      displayName: "Beru",
      key: "berulars",
      image: Ep2CharacterImages.berulars,
      hero: Ep2CharacterHeroImages.berulars,
      position: 33
    },
    boba: {
      displayName: "Boba",
      key: "boba",
      image: Ep2CharacterImages.boba,
      hero: Ep2CharacterHeroImages.boba,
      position: 7
    },
    c3po: {
      displayName: "C3PO",
      key: "c3po",
      image: Ep2CharacterImages.c3po,
      hero: Ep2CharacterHeroImages.c3po,
      position: 19
    },
    gregartypho: {
      displayName: "Typho",
      key: "gregartypho",
      image: Ep2CharacterImages.gregartypho,
      hero: Ep2CharacterHeroImages.gregartypho,
      position: 31
    },
    cliegglars: {
      displayName: "Cliegg",
      key: "cliegglars",
      image: Ep2CharacterImages.cliegglars,
      hero: Ep2CharacterHeroImages.cliegglars,
      position: 34
    },
    dooku: {
      displayName: "Dooku",
      key: "dooku",
      image: Ep2CharacterImages.dooku,
      hero: Ep2CharacterHeroImages.dooku,
      position: 5
    },
    darthsidious: {
      displayName: "Sidious",
      key: "darthsidious",
      image: Ep2CharacterImages.darthsidious,
      hero: Ep2CharacterHeroImages.darthsidious,
      position: 8
    },
    dexter: {
      displayName: "Dexter",
      key: "dexter",
      image: Ep2CharacterImages.dexter,
      hero: Ep2CharacterHeroImages.dexter,
      position: 24
    },
    siobibble: {
      displayName: "Bibble",
      key: "siobibble",
      image: Ep2CharacterImages.siobibble,
      hero: Ep2CharacterHeroImages.siobibble,
      position: 27
    },
    jango: {
      displayName: "Jango",
      key: "jango",
      image: Ep2CharacterImages.jango,
      hero: Ep2CharacterHeroImages.jango,
      position: 6
    },
    jarjar: {
      displayName: "Jarjar",
      key: "jarjar",
      image: Ep2CharacterImages.jarjar,
      hero: Ep2CharacterHeroImages.jarjar,
      position: 12
    },
    jedis: {
      displayName: "Jedis",
      key: "jedis",
      image: Ep2CharacterImages.jedis,
      hero: Ep2CharacterHeroImages.jedis,
      position: 20
    },
    kiadimundi: {
      displayName: "Mundi",
      key: "kiadimundi",
      image: Ep2CharacterImages.kiadimundi,
      hero: Ep2CharacterHeroImages.kiadimundi,
      position: 15
    },
    kitfisto: {
      displayName: "Fisto",
      key: "kitfisto",
      image: Ep2CharacterImages.kitfisto,
      hero: Ep2CharacterHeroImages.kitfisto,
      position: 14
    },
    lamesu: {
      displayName: "Lamesu",
      key: "lamesu",
      image: Ep2CharacterImages.lamesu,
      hero: Ep2CharacterHeroImages.lamesu,
      position: 21
    },
    lego: {
      displayName: "Random",
      key: "lego",
      image: Ep2CharacterImages.lego,
      hero: Ep2CharacterHeroImages.lego,
      position: 25
    },
    macewindu: {
      displayName: "Mace",
      key: "macewindu",
      image: Ep2CharacterImages.macewindu,
      hero: Ep2CharacterHeroImages.macewindu,
      position: 9
    },
    masamedda: {
      displayName: "Mas",
      key: "masamedda",
      image: Ep2CharacterImages.masamedda,
      hero: Ep2CharacterHeroImages.masamedda,
      position: 29
    },
    nutegunray: {
      displayName: "Nute",
      key: "nutegunray",
      image: Ep2CharacterImages.nutegunray,
      hero: Ep2CharacterHeroImages.nutegunray,
      position: 17
    },
    obiwan: {
      displayName: "Obiwan",
      key: "obiwan",
      image: Ep2CharacterImages.obiwan,
      hero: Ep2CharacterHeroImages.obiwan,
      position: 3
    },
    owenlars: {
      displayName: "Owen",
      key: "owenlars",
      image: Ep2CharacterImages.owenlars,
      hero: Ep2CharacterHeroImages.owenlars,
      position: 35
    },
    padme: {
      displayName: "Padme",
      key: "padme",
      image: Ep2CharacterImages.padme,
      hero: Ep2CharacterHeroImages.padme,
      position: 4
    },
    poggle: {
      displayName: "Poggle",
      key: "poggle",
      image: Ep2CharacterImages.poggle,
      hero: Ep2CharacterHeroImages.poggle,
      position: 32
    },
    r2d2: {
      displayName: "R2D2",
      key: "r2d2",
      image: Ep2CharacterImages.r2d2,
      hero: Ep2CharacterHeroImages.r2d2,
      position: 18
    },
    r4p17: {
      displayName: "R4P17",
      key: "r4p17",
      image: Ep2CharacterImages.r4p17,
      hero: Ep2CharacterHeroImages.r4p17,
      position: 28
    },
    reek: {
      displayName: "Reek",
      key: "reek",
      image: Ep2CharacterImages.reek,
      hero: Ep2CharacterHeroImages.reek,
      position: 37
    },
    runehaako: {
      displayName: "Rune",
      key: "runehaako",
      image: Ep2CharacterImages.runehaako,
      hero: Ep2CharacterHeroImages.runehaako,
      position: 36
    },
    bail: {
      displayName: "Bail",
      key: "bail",
      image: Ep2CharacterImages.bail,
      hero: Ep2CharacterHeroImages.bail,
      position: 10
    },
    sheevpalpatine: {
      displayName: "Senate",
      key: "sheevpalpatine",
      image: Ep2CharacterImages.sheevpalpatine,
      hero: Ep2CharacterHeroImages.sheevpalpatine,
      position: 1
    },
    shmi: {
      displayName: "Shmi",
      key: "shmi",
      image: Ep2CharacterImages.shmi,
      hero: Ep2CharacterHeroImages.shmi,
      position: 26
    },
    stormtrooper: {
      displayName: "Clones",
      key: "stormtrooper",
      image: Ep2CharacterImages.stormtrooper,
      hero: Ep2CharacterHeroImages.stormtrooper,
      position: 16
    },
    taunwe: {
      displayName: "Taunwe",
      key: "taunwe",
      image: Ep2CharacterImages.taunwe,
      hero: Ep2CharacterHeroImages.taunwe,
      position: 22
    },
    watto: {
      displayName: "Watto",
      key: "watto",
      image: Ep2CharacterImages.watto,
      hero: Ep2CharacterHeroImages.watto,
      position: 32
    },
    yoda: {
      displayName: "Yoda",
      key: "yoda",
      image: Ep2CharacterImages.yoda,
      hero: Ep2CharacterHeroImages.yoda,
      position: 13
    },
    younglings: {
      displayName: "Younglings",
      key: "younglings",
      image: Ep2CharacterImages.younglings,
      hero: Ep2CharacterHeroImages.younglings,
      position: 23
    }
  },
  ep3: {
    sheevpalpatine: {
      displayName: "Senate",
      key: "sheevpalpatine",
      image: Ep3CharacterImages.sheevpalpatine,
      position: 0,
      hero: Ep3CharacterHeroImages.sheevpalpatine
    },
    darthsidious: {
      displayName: "Sidious",
      key: "darthsidious",
      image: Ep3CharacterImages.darthsidious,
      position: 1,
      hero: Ep3CharacterHeroImages.darthsidious
    },
    anakin: {
      displayName: "Anakin",
      key: "anakin",
      image: Ep3CharacterImages.anakin,
      position: 2,
      hero: Ep3CharacterHeroImages.anakin
    },
    obiwan: {
      displayName: "Obiwan",
      key: "obiwan",
      image: Ep3CharacterImages.obiwan,
      position: 3,
      hero: Ep3CharacterHeroImages.obiwan
    },
    padme: {
      displayName: "Padme",
      key: "padme",
      image: Ep3CharacterImages.padme,
      position: 4,
      hero: Ep3CharacterHeroImages.padme
    },
    grievous: {
      displayName: "Grievous",
      key: "grievous",
      image: Ep3CharacterImages.grievous,
      position: 5,
      hero: Ep3CharacterHeroImages.grievous
    },
    kiadimundi: {
      displayName: "Mundi",
      key: "kiadimundi",
      image: Ep3CharacterImages.kiadimundi,
      position: 6,
      hero: Ep3CharacterHeroImages.kiadimundi
    },
    dooku: {
      displayName: "Dooku",
      key: "dooku",
      image: Ep3CharacterImages.dooku,
      position: 7,
      hero: Ep3CharacterHeroImages.dooku
    },
    yoda: {
      displayName: "Yoda",
      key: "yoda",
      image: Ep3CharacterImages.yoda,
      position: 8,
      hero: Ep3CharacterHeroImages.yoda
    },
    macewindu: {
      displayName: "Mace",
      key: "macewindu",
      image: Ep3CharacterImages.macewindu,
      position: 9,
      hero: Ep3CharacterHeroImages.macewindu
    },
    vader: {
      displayName: "Vader",
      key: "vader",
      image: Ep3CharacterImages.vader,
      position: 10,
      hero: Ep3CharacterHeroImages.vader
    },
    wookies: {
      displayName: "Wookiees",
      key: "wookies",
      image: Ep3CharacterImages.wookies,
      position: 11,
      hero: Ep3CharacterHeroImages.wookies
    },
    nutegunray: {
      displayName: "Nute",
      key: "nutegunray",
      image: Ep3CharacterImages.nutegunray,
      position: 12,
      hero: Ep3CharacterHeroImages.nutegunray
    },
    runehaako: {
      displayName: "Rune",
      key: "runehaako",
      image: Ep3CharacterImages.runehaako,
      position: 13,
      hero: Ep3CharacterHeroImages.runehaako
    },
    bail: {
      displayName: "Bail",
      key: "bail",
      image: Ep3CharacterImages.bail,
      position: 14,
      hero: Ep3CharacterHeroImages.bail
    },
    r2d2: {
      displayName: "R2D2",
      key: "r2d2",
      image: Ep3CharacterImages.r2d2,
      position: 15,
      hero: Ep3CharacterHeroImages.r2d2
    },
    c3po: {
      displayName: "C3PO",
      key: "c3po",
      image: Ep3CharacterImages.c3po,
      position: 16,
      hero: Ep3CharacterHeroImages.c3po
    },
    battledroid: {
      displayName: "Droids",
      key: "battledroid",
      image: Ep3CharacterImages.battledroid,
      position: 17,
      hero: Ep3CharacterHeroImages.battledroid
    },
    lego: {
      displayName: "Random",
      key: "lego",
      image: Ep3CharacterImages.lego,
      position: 18,
      hero: Ep3CharacterHeroImages.lego
    },
    stormtrooper: {
      displayName: "Clones",
      key: "stormtrooper",
      image: Ep3CharacterImages.stormtrooper,
      position: 19,
      hero: Ep3CharacterHeroImages.stormtrooper
    },
    berulars: {
      displayName: "Beru",
      key: "berulars",
      image: Ep3CharacterImages.berulars,
      position: 20,
      hero: Ep3CharacterHeroImages.berulars
    },
    owenlars: {
      displayName: "Owen",
      key: "owenlars",
      image: Ep3CharacterImages.owenlars,
      position: 21,
      hero: Ep3CharacterHeroImages.owenlars
    },
    masamedda: {
      displayName: "Mas",
      key: "masamedda",
      image: Ep3CharacterImages.masamedda,
      position: 22,
      hero: Ep3CharacterHeroImages.masamedda
    },
    younglings: {
      displayName: "Younglings",
      key: "younglings",
      image: Ep3CharacterImages.younglings,
      position: 23,
      hero: Ep3CharacterHeroImages.younglings
    },
    kitfisto: {
      displayName: "Fisto",
      key: "kitfisto",
      image: Ep3CharacterImages.kitfisto,
      position: 24,
      hero: Ep3CharacterHeroImages.kitfisto
    },
    aayla: {
      displayName: "Aayla",
      key: "aayla",
      image: Ep3CharacterImages.aayla,
      position: 25,
      hero: Ep3CharacterHeroImages.aayla
    },
    r4p17: {
      displayName: "R4P17",
      key: "r4p17",
      image: Ep3CharacterImages.r4p17,
      position: 26,
      hero: Ep3CharacterHeroImages.r4p17
    },
    slymoore: {
      displayName: "Sly",
      key: "slymoore",
      image: Ep3CharacterImages.slymoore,
      position: 27,
      hero: Ep3CharacterHeroImages.slymoore
    },
    plokoon: {
      displayName: "Plo",
      key: "plokoon",
      image: Ep3CharacterImages.plokoon,
      position: 28,
      hero: Ep3CharacterHeroImages.plokoon
    },
    jarjar: {
      displayName: "Jarjar",
      key: "jarjar",
      image: Ep3CharacterImages.jarjar,
      position: 29,
      hero: Ep3CharacterHeroImages.jarjar
    }
  }
};

export default characterMaster;
