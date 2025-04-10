// This file contains the data structure for syllables and words

export interface SyllableData {
  syllable: string
  audio: string
}

export interface WordData {
  word: string
  audio: string
  image?: string
}

export interface SectionData {
  letter: string
  syllables: SyllableData[]
  words: WordData[]
}

export interface TableauData {
  id: number
  name: string
  description?: string
  sections: SectionData[]
}

// Main data structure for all tableaux
export const syllablesData: TableauData[] = [
  {
    id: 1,
    name: "Tableau 1",
    description: "المقاطع الصوتية الأساسية",
    sections: [
      {
        letter: "m",
        syllables: [
          {
            syllable: "ma / mi / mo / me / mu",
            audio: "/audio/syllables/tableau1/M/MT1.mp3",
          },
        ],
        words: [
          {
            word: "ma/man",
            audio: "/audio/syllables/tableau1/M/maman.mp3",
            image: "/images/syllables/tableau1/M/maman.jpg",
          },
          { word: "a/mi", audio: "/audio/syllables/tableau1/M/ami.mp3", image: "/images/syllables/tableau1/M/ami.jpg" },
          {
            word: "do/mi/no",
            audio: "/audio/syllables/tableau1/M/domino.mp3",
            image: "/images/syllables/tableau1/M/domino.jpg",
          },
          {
            word: "ca/me/ra",
            audio: "/audio/syllables/tableau1/M/camera.mp3",
            image: "/images/syllables/tableau1/M/camera.jpg",
          },
          {
            word: "to/ma/te",
            audio: "/audio/syllables/tableau1/M/tomate.mp3",
            image: "/images/syllables/tableau1/M/tomate.jpg",
          },
          { word: "a/li", audio: "/audio/syllables/tableau1/M/ali.mp3", image: "/images/syllables/tableau1/M/ali.jpg" },
          {
            word: "a/na/nas",
            audio: "/audio/syllables/tableau1/M/ananas.mp3",
            image: "/images/syllables/tableau1/M/ananas.jpg",
          },
          {
            word: "a/vion",
            audio: "/audio/syllables/tableau1/M/avion.mp3",
            image: "/images/syllables/tableau1/M/avion.jpg",
          },
        ],
      },
      {
        letter: "b",
        syllables: [
          {
            syllable: "ba / bi / bo / be / bu",
            audio: "/audio/syllables/tableau1/B/BT1.mp3",
          },
        ],
        words: [
          {
            word: "ro/bi/net",
            audio: "/audio/syllables/tableau1/B/robinet.mp3",
            image: "/images/syllables/tableau1/B/robinet.jpg",
          },
          {
            word: "ro/bot",
            audio: "/audio/syllables/tableau1/B/robot.mp3",
            image: "/images/syllables/tableau1/B/robot.jpg",
          },
          {
            word: "ba/ba",
            audio: "/audio/syllables/tableau1/B/baba.mp3",
            image: "/images/syllables/tableau1/B/baba.jpg",
          },
          {
            word: "ba/na/ne",
            audio: "/audio/syllables/tableau1/B/banane.mp3",
            image: "/images/syllables/tableau1/B/banane.jpg",
          },
          {
            word: "ba/llon",
            audio: "/audio/syllables/tableau1/B/ballon.mp3",
            image: "/images/syllables/tableau1/B/ballon.jpg",
          },
          {
            word: "sa/bot",
            audio: "/audio/syllables/tableau1/B/sabot.mp3",
            image: "/images/syllables/tableau1/B/sabot.jpg",
          },
          {
            word: "ro/be",
            audio: "/audio/syllables/tableau1/B/robe.mp3",
            image: "/images/syllables/tableau1/B/robe.jpg",
          },
          {
            word: "ba/lle",
            audio: "/audio/syllables/tableau1/B/balle.mp3",
            image: "/images/syllables/tableau1/B/balle.jpg",
          },
        ],
      },
      {
        letter: "l",
        syllables: [
          {
            syllable: "la / li / lo / le / lu",
            audio: "/audio/syllables/tableau1/L/LT1.mp3",
          },
        ],
        words: [
          {
            word: "la/va/bo",
            audio: "/audio/syllables/tableau1/L/lavabo.mp3",
            image: "/images/syllables/tableau1/L/lavabo.jpg",
          },
          {
            word: "li/las",
            audio: "/audio/syllables/tableau1/L/lilas.mp3",
            image: "/images/syllables/tableau1/L/lilas.jpg",
          },
          {
            word: "sty/lo",
            audio: "/audio/syllables/tableau1/L/stylo.mp3",
            image: "/images/syllables/tableau1/L/stylo.jpg",
          },
          {
            word: "lu/net/te",
            audio: "/audio/syllables/tableau1/L/lunette.mp3",
            image: "/images/syllables/tableau1/L/lunette.jpg",
          },
          {
            word: "ve/lo",
            audio: "/audio/syllables/tableau1/L/velo.mp3",
            image: "/images/syllables/tableau1/L/velo.jpg",
          },
          {
            word: "cho/co/lat",
            audio: "/audio/syllables/tableau1/L/chocolat.mp3",
            image: "/images/syllables/tableau1/L/chocolat.jpg",
          },
          { word: "col", audio: "/audio/syllables/tableau1/L/col.mp3", image: "/images/syllables/tableau1/L/col.jpg" },
        ],
      },
      {
        letter: "n",
        syllables: [
          {
            syllable: "na / ni / no / ne / nu",
            audio: "/audio/syllables/tableau1/N/NT1.mp3",
          },
        ],
        words: [
          {
            word: "a/na/nas",
            audio: "/audio/syllables/tableau1/N/ananas.mp3",
            image: "/images/syllables/tableau1/N/ananas.jpg",
          },
          {
            word: "a/ni/mal",
            audio: "/audio/syllables/tableau1/N/animal.mp3",
            image: "/images/syllables/tableau1/N/animal.jpg",
          },
          {
            word: "mi/na",
            audio: "/audio/syllables/tableau1/N/mina.mp3",
            image: "/images/syllables/tableau1/N/mina.jpg",
          },
          {
            word: "or/di/na/teur",
            audio: "/audio/syllables/tableau1/N/ordinateur.mp3",
            image: "/images/syllables/tableau1/N/ordinateur.jpg",
          },
          {
            word: "do/mi/no",
            audio: "/audio/syllables/tableau1/N/domino.mp3",
            image: "/images/syllables/tableau1/N/domino.jpg",
          },
          {
            word: "me/nu",
            audio: "/audio/syllables/tableau1/N/menu.mp3",
            image: "/images/syllables/tableau1/N/menu.jpg",
          },
          {
            word: "re/nard",
            audio: "/audio/syllables/tableau1/N/renard.mp3",
            image: "/images/syllables/tableau1/N/renard.jpg",
          },
          {
            word: "me/lon",
            audio: "/audio/syllables/tableau1/N/melon.mp3",
            image: "/images/syllables/tableau1/N/melon.jpg",
          },
        ],
      },
      {
        letter: "d",
        syllables: [
          {
            syllable: "da / di / do / de / du",
            audio: "/audio/syllables/tableau1/D/DT1.mp3",
          },
        ],
        words: [
          {
            word: "da/me",
            audio: "/audio/syllables/tableau1/D/dame.mp3",
            image: "/images/syllables/tableau1/D/dame.jpg",
          },
          {
            word: "ra/dis",
            audio: "/audio/syllables/tableau1/D/radis.mp3",
            image: "/images/syllables/tableau1/D/radis.jpg",
          },
          {
            word: "do/mi/no",
            audio: "/audio/syllables/tableau1/D/domino.mp3",
            image: "/images/syllables/tableau1/D/domino.jpg",
          },
          {
            word: "sa/la/de",
            audio: "/audio/syllables/tableau1/D/salade.mp3",
            image: "/images/syllables/tableau1/D/salade.jpg",
          },
          {
            word: "ra/dio",
            audio: "/audio/syllables/tableau1/D/radio.mp3",
            image: "/images/syllables/tableau1/D/radio.jpg",
          },
          {
            word: "ju/do",
            audio: "/audio/syllables/tableau1/D/judo.mp3",
            image: "/images/syllables/tableau1/D/judo.jpg",
          },
          {
            word: "du/ne",
            audio: "/audio/syllables/tableau1/D/dune.mp3",
            image: "/images/syllables/tableau1/D/dune.jpg",
          },
          {
            word: "doi/gt",
            audio: "/audio/syllables/tableau1/D/doigt.mp3",
            image: "/images/syllables/tableau1/D/doigt.jpg",
          },
          {
            word: "ba/la/de",
            audio: "/audio/syllables/tableau1/D/balade.mp3",
            image: "/images/syllables/tableau1/D/balade.jpg",
          },
        ],
      },
      {
        letter: "t",
        syllables: [
          {
            syllable: "ta / ti / to / te / tu",
            audio: "/audio/syllables/tableau1/T/TT1.mp3",
          },
        ],
        words: [
          {
            word: "ta/pis",
            audio: "/audio/syllables/tableau1/T/tapis.mp3",
            image: "/images/syllables/tableau1/T/tapis.jpg",
          },
          {
            word: "mo/to",
            audio: "/audio/syllables/tableau1/T/moto.mp3",
            image: "/images/syllables/tableau1/T/moto.jpg",
          },
          {
            word: "ma/te/las",
            audio: "/audio/syllables/tableau1/T/matelas.mp3",
            image: "/images/syllables/tableau1/T/matelas.jpg",
          },
          {
            word: "ta/sse",
            audio: "/audio/syllables/tableau1/T/tasse.mp3",
            image: "/images/syllables/tableau1/T/tasse.jpg",
          },
          {
            word: "pa/tte",
            audio: "/audio/syllables/tableau1/T/patte.mp3",
            image: "/images/syllables/tableau1/T/patte.jpg",
          },
          {
            word: "pe/lo/te",
            audio: "/audio/syllables/tableau1/T/pelote.mp3",
            image: "/images/syllables/tableau1/T/pelote.jpg",
          },
          {
            word: "bo/tte",
            audio: "/audio/syllables/tableau1/T/botte.mp3",
            image: "/images/syllables/tableau1/T/botte.jpg",
          },
        ],
      },
      {
        letter: "p",
        syllables: [
          {
            syllable: "pa / pi / po / pe / pu",
            audio: "/audio/syllables/tableau1/P/PT1.mp3",
          },
        ],
        words: [
          {
            word: "pa/pa",
            audio: "/audio/syllables/tableau1/P/papa.mp3",
            image: "/images/syllables/tableau1/P/papa.jpg",
          },
          {
            word: "pa/ra/sol",
            audio: "/audio/syllables/tableau1/P/parasol.mp3",
            image: "/images/syllables/tableau1/P/parasol.jpg",
          },
          {
            word: "po/li",
            audio: "/audio/syllables/tableau1/P/poli.mp3",
            image: "/images/syllables/tableau1/P/poli.jpg",
          },
          {
            word: "po/mme",
            audio: "/audio/syllables/tableau1/P/pomme.mp3",
            image: "/images/syllables/tableau1/P/pomme.jpg",
          },
          {
            word: "pa/ra/bo/le",
            audio: "/audio/syllables/tableau1/P/parabole.mp3",
            image: "/images/syllables/tableau1/P/parabole.jpg",
          },
          {
            word: "pou/le",
            audio: "/audio/syllables/tableau1/P/poule.mp3",
            image: "/images/syllables/tableau1/P/poule.jpg",
          },
          {
            word: "dra/peau",
            audio: "/audio/syllables/tableau1/P/drapeau.mp3",
            image: "/images/syllables/tableau1/P/drapeau.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Tableau 2",
    description: "المقاطع الصوتية المتقدمة",
    sections: [
      {
        letter: "h",
        syllables: [
          {
            syllable: "ha / hi / ho / he / hu",
            audio: "/audio/syllables/tableau2/H/HT2.mp3",
          },
        ],
        words: [
          {
            word: "ha/che",
            audio: "/audio/syllables/tableau2/H/hache.mp3",
            image: "/images/syllables/tableau2/H/hache.jpg",
          },
          {
            word: "his/toi/re",
            audio: "/audio/syllables/tableau2/H/histoire.mp3",
            image: "/images/syllables/tableau2/H/histoire.jpg",
          },
          {
            word: "ho/tel",
            audio: "/audio/syllables/tableau2/H/hotel.mp3",
            image: "/images/syllables/tableau2/H/hotel.jpg",
          },
          {
            word: "ho/pi/tal",
            audio: "/audio/syllables/tableau2/H/hopital.mp3",
            image: "/images/syllables/tableau2/H/hopital.jpg",
          },
          {
            word: "ho/mme",
            audio: "/audio/syllables/tableau2/H/homme.mp3",
            image: "/images/syllables/tableau2/H/homme.jpg",
          },
          {
            word: "hi/er",
            audio: "/audio/syllables/tableau2/H/hier.mp3",
            image: "/images/syllables/tableau2/H/hier.jpg",
          },
          {
            word: "hu/ppe",
            audio: "/audio/syllables/tableau2/H/huppe.mp3",
            image: "/images/syllables/tableau2/H/huppe.jpg",
          },
        ],
      },
      {
        letter: "ch",
        syllables: [
          {
            syllable: "cha / chi / cho / che / chu",
            audio: "/audio/syllables/tableau2/CH/CHT2.mp3",
          },
        ],
        words: [
          {
            word: "che/mi/se",
            audio: "/audio/syllables/tableau2/CH/chemise.mp3",
            image: "/images/syllables/tableau2/CH/chemise.jpg",
          },
          {
            word: "ni/che",
            audio: "/audio/syllables/tableau2/CH/niche.mp3",
            image: "/images/syllables/tableau2/CH/niche.jpg",
          },
          {
            word: "che/mi/nee",
            audio: "/audio/syllables/tableau2/CH/cheminee.mp3",
            image: "/images/syllables/tableau2/CH/cheminee.jpg",
          },
          {
            word: "po/che/chat",
            audio: "/audio/syllables/tableau2/CH/pochechat.mp3",
            image: "/images/syllables/tableau2/CH/pochechat.jpg",
          },
          {
            word: "ta/che",
            audio: "/audio/syllables/tableau2/CH/tache.mp3",
            image: "/images/syllables/tableau2/CH/tache.jpg",
          },
          {
            word: "ha/che",
            audio: "/audio/syllables/tableau2/CH/hache.mp3",
            image: "/images/syllables/tableau2/CH/hache.jpg",
          },
        ],
      },
      {
        letter: "r",
        syllables: [
          {
            syllable: "ra / ri / ro / re / ru",
            audio: "/audio/syllables/tableau2/R/RT2.mp3",
          },
        ],
        words: [
          {
            word: "ra/dis",
            audio: "/audio/syllables/tableau2/R/radis.mp3",
            image: "/images/syllables/tableau2/R/radis.jpg",
          },
          {
            word: "ro/bi/net",
            audio: "/audio/syllables/tableau2/R/robinet.mp3",
            image: "/images/syllables/tableau2/R/robinet.jpg",
          },
          {
            word: "ro/bot",
            audio: "/audio/syllables/tableau2/R/robot.mp3",
            image: "/images/syllables/tableau2/R/robot.jpg",
          },
          {
            word: "re/pas/rue",
            audio: "/audio/syllables/tableau2/R/repasrue.mp3",
            image: "/images/syllables/tableau2/R/repasrue.jpg",
          },
          {
            word: "ca/rro/tte",
            audio: "/audio/syllables/tableau2/R/carrotte.mp3",
            image: "/images/syllables/tableau2/R/carrotte.jpg",
          },
          {
            word: "cac/tus",
            audio: "/audio/syllables/tableau2/R/cactus.mp3",
            image: "/images/syllables/tableau2/R/cactus.jpg",
          },
        ],
      },
      {
        letter: "f",
        syllables: [
          {
            syllable: "fa / fi / fo / fe / fu",
            audio: "/audio/syllables/tableau2/F/FT2.mp3",
          },
        ],
        words: [
          {
            word: "fa/ti/ma",
            audio: "/audio/syllables/tableau2/F/fatima.mp3",
            image: "/images/syllables/tableau2/F/fatima.jpg",
          },
          {
            word: "fa/ri/ne",
            audio: "/audio/syllables/tableau2/F/farine.mp3",
            image: "/images/syllables/tableau2/F/farine.jpg",
          },
          { word: "fee", audio: "/audio/syllables/tableau2/F/fee.mp3", image: "/images/syllables/tableau2/F/fee.jpg" },
          {
            word: "ca/fe",
            audio: "/audio/syllables/tableau2/F/cafe.mp3",
            image: "/images/syllables/tableau2/F/cafe.jpg",
          },
          {
            word: "fu/see",
            audio: "/audio/syllables/tableau2/F/fusee.mp3",
            image: "/images/syllables/tableau2/F/fusee.jpg",
          },
          {
            word: "me/nu",
            audio: "/audio/syllables/tableau2/F/menu.mp3",
            image: "/images/syllables/tableau2/F/menu.jpg",
          },
          {
            word: "four",
            audio: "/audio/syllables/tableau2/F/four.mp3",
            image: "/images/syllables/tableau2/F/four.jpg",
          },
        ],
      },
      {
        letter: "v",
        syllables: [
          {
            syllable: "va / vi / vo / ve / vu",
            audio: "/audio/syllables/tableau2/V/VT2.mp3",
          },
        ],
        words: [
          {
            word: "che/val",
            audio: "/audio/syllables/tableau2/V/cheval.mp3",
            image: "/images/syllables/tableau2/V/cheval.jpg",
          },
          {
            word: "a/ve/nue",
            audio: "/audio/syllables/tableau2/V/avenue.mp3",
            image: "/images/syllables/tableau2/V/avenue.jpg",
          },
          {
            word: "ve/lo",
            audio: "/audio/syllables/tableau2/V/velo.mp3",
            image: "/images/syllables/tableau2/V/velo.jpg",
          },
          {
            word: "na/vi/re",
            audio: "/audio/syllables/tableau2/V/navire.mp3",
            image: "/images/syllables/tableau2/V/navire.jpg",
          },
          {
            word: "va/che",
            audio: "/audio/syllables/tableau2/V/vache.mp3",
            image: "/images/syllables/tableau2/V/vache.jpg",
          },
          {
            word: "voi/tu/re",
            audio: "/audio/syllables/tableau2/V/voiture.mp3",
            image: "/images/syllables/tableau2/V/voiture.jpg",
          },
          {
            word: "la/va/bo",
            audio: "/audio/syllables/tableau2/V/lavabo.mp3",
            image: "/images/syllables/tableau2/V/lavabo.jpg",
          },
          {
            word: "vi/lle",
            audio: "/audio/syllables/tableau2/V/ville.mp3",
            image: "/images/syllables/tableau2/V/ville.jpg",
          },
        ],
      },
      {
        letter: "s",
        syllables: [
          {
            syllable: "sa / si / so / se / su",
            audio: "/audio/syllables/tableau2/S/ST2.mp3",
          },
        ],
        words: [
          {
            word: "sa/la/de",
            audio: "/audio/syllables/tableau2/S/salade.mp3",
            image: "/images/syllables/tableau2/S/salade.jpg",
          },
          {
            word: "sa/bot",
            audio: "/audio/syllables/tableau2/S/sabot.mp3",
            image: "/images/syllables/tableau2/S/sabot.jpg",
          },
          {
            word: "sa/me/di",
            audio: "/audio/syllables/tableau2/S/samedi.mp3",
            image: "/images/syllables/tableau2/S/samedi.jpg",
          },
          {
            word: "pa/ra/sol",
            audio: "/audio/syllables/tableau2/S/parasol.mp3",
            image: "/images/syllables/tableau2/S/parasol.jpg",
          },
          {
            word: "ta/sse",
            audio: "/audio/syllables/tableau2/S/tasse.mp3",
            image: "/images/syllables/tableau2/S/tasse.jpg",
          },
          { word: "sol", audio: "/audio/syllables/tableau2/S/sol.mp3", image: "/images/syllables/tableau2/S/sol.jpg" },
          {
            word: "sar/di/ne",
            audio: "/audio/syllables/tableau2/S/sardine.mp3",
            image: "/images/syllables/tableau2/S/sardine.jpg",
          },
        ],
      },
      {
        letter: "c",
        syllables: [
          {
            syllable: "ca / ci / co / ce / cu",
            audio: "/audio/syllables/tableau2/C/CT2.mp3",
          },
        ],
        words: [
          {
            word: "ce/la",
            audio: "/audio/syllables/tableau2/C/cela.mp3",
            image: "/images/syllables/tableau2/C/cela.jpg",
          },
          {
            word: "ce/ri/se",
            audio: "/audio/syllables/tableau2/C/cerise.mp3",
            image: "/images/syllables/tableau2/C/cerise.jpg",
          },
          {
            word: "ci/tron",
            audio: "/audio/syllables/tableau2/C/citron.mp3",
            image: "/images/syllables/tableau2/C/citron.jpg",
          },
          {
            word: "di/ffi/ci/le",
            audio: "/audio/syllables/tableau2/C/difficile.mp3",
            image: "/images/syllables/tableau2/C/difficile.jpg",
          },
          {
            word: "ci/go/gne",
            audio: "/audio/syllables/tableau2/C/cigogne.mp3",
            image: "/images/syllables/tableau2/C/cigogne.jpg",
          },
          {
            word: "pu/ce",
            audio: "/audio/syllables/tableau2/C/puce.mp3",
            image: "/images/syllables/tableau2/C/puce.jpg",
          },
          {
            word: "ce/ci",
            audio: "/audio/syllables/tableau2/C/ceci.mp3",
            image: "/images/syllables/tableau2/C/ceci.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tableau 3",
    description: "المقاطع الصوتية المركبة",
    sections: [
      {
        letter: "k",
        syllables: [
          {
            syllable: "ka / ki / ko / ke / ku",
            audio: "/audio/syllables/tableau3/K/KT3.mp3",
          },
        ],
        words: [
          {
            word: "ka/re/te",
            audio: "/audio/syllables/tableau3/K/karete.mp3",
            image: "/images/syllables/tableau3/K/karete.jpg",
          },
          {
            word: "ki/mo/ne",
            audio: "/audio/syllables/tableau3/K/kimone.mp3",
            image: "/images/syllables/tableau3/K/kimone.jpg",
          },
          {
            word: "ke/pe",
            audio: "/audio/syllables/tableau3/K/kepe.mp3",
            image: "/images/syllables/tableau3/K/kepe.jpg",
          },
          {
            word: "ka/ki",
            audio: "/audio/syllables/tableau3/K/kaki.mp3",
            image: "/images/syllables/tableau3/K/kaki.jpg",
          },
          {
            word: "ka/rim",
            audio: "/audio/syllables/tableau3/K/karim.mp3",
            image: "/images/syllables/tableau3/K/karim.jpg",
          },
          {
            word: "ki/os/que",
            audio: "/audio/syllables/tableau3/K/kiosque.mp3",
            image: "/images/syllables/tableau3/K/kiosque.jpg",
          },
          {
            word: "ko/ra",
            audio: "/audio/syllables/tableau3/K/kora.mp3",
            image: "/images/syllables/tableau3/K/kora.jpg",
          },
        ],
      },
      {
        letter: "c",
        syllables: [
          {
            syllable: "ca / co / cu",
            audio: "/audio/syllables/tableau3/C/CT3.mp3",
          },
        ],
        words: [
          {
            word: "ca/na/ri",
            audio: "/audio/syllables/tableau3/C/canari.mp3",
            image: "/images/syllables/tableau3/C/canari.jpg",
          },
          {
            word: "car/na/val",
            audio: "/audio/syllables/tableau3/C/carnaval.mp3",
            image: "/images/syllables/tableau3/C/carnaval.jpg",
          },
          {
            word: "cal/cul",
            audio: "/audio/syllables/tableau3/C/calcul.mp3",
            image: "/images/syllables/tableau3/C/calcul.jpg",
          },
          {
            word: "ci/tron",
            audio: "/audio/syllables/tableau3/C/citron.mp3",
            image: "/images/syllables/tableau3/C/citron.jpg",
          },
          {
            word: "cu/lo/tte",
            audio: "/audio/syllables/tableau3/C/culotte.mp3",
            image: "/images/syllables/tableau3/C/culotte.jpg",
          },
          {
            word: "cu/be",
            audio: "/audio/syllables/tableau3/C/cube.mp3",
            image: "/images/syllables/tableau3/C/cube.jpg",
          },
          {
            word: "ca/rro/tte",
            audio: "/audio/syllables/tableau3/C/carrotte.mp3",
            image: "/images/syllables/tableau3/C/carrotte.jpg",
          },
          {
            word: "ca/sse/ro/le",
            audio: "/audio/syllables/tableau3/C/casserole.mp3",
            image: "/images/syllables/tableau3/C/casserole.jpg",
          },
        ],
      },
      {
        letter: "g",
        syllables: [
          {
            syllable: "ga / gi / go / ge / gu",
            audio: "/audio/syllables/tableau3/G/GT3.mp3",
          },
        ],
        words: [
          {
            word: "ge/nou",
            audio: "/audio/syllables/tableau3/G/genou.mp3",
            image: "/images/syllables/tableau3/G/genou.jpg",
          },
          {
            word: "gi/let",
            audio: "/audio/syllables/tableau3/G/gilet.mp3",
            image: "/images/syllables/tableau3/G/gilet.jpg",
          },
          {
            word: "ci/ra/ge",
            audio: "/audio/syllables/tableau3/G/cirage.mp3",
            image: "/images/syllables/tableau3/G/cirage.jpg",
          },
          {
            word: "na/ge",
            audio: "/audio/syllables/tableau3/G/nage.mp3",
            image: "/images/syllables/tableau3/G/nage.jpg",
          },
          {
            word: "ma/ga/zi/ne",
            audio: "/audio/syllables/tableau3/G/magazine.mp3",
            image: "/images/syllables/tableau3/G/magazine.jpg",
          },
          {
            word: "lo/go",
            audio: "/audio/syllables/tableau3/G/logo.mp3",
            image: "/images/syllables/tableau3/G/logo.jpg",
          },
          {
            word: "fu/gu/ri/ne",
            audio: "/audio/syllables/tableau3/G/fugurine.mp3",
            image: "/images/syllables/tableau3/G/fugurine.jpg",
          },
          {
            word: "nu/a/ge",
            audio: "/audio/syllables/tableau3/G/nuage.mp3",
            image: "/images/syllables/tableau3/G/nuage.jpg",
          },
          {
            word: "pa/ge",
            audio: "/audio/syllables/tableau3/G/page.mp3",
            image: "/images/syllables/tableau3/G/page.jpg",
          },
          {
            word: "gi/ra/fe",
            audio: "/audio/syllables/tableau3/G/girafe.mp3",
            image: "/images/syllables/tableau3/G/girafe.jpg",
          },
        ],
      },
      {
        letter: "j",
        syllables: [
          {
            syllable: "ja / ji / jo / je / ju",
            audio: "/audio/syllables/tableau3/J/JT3.mp3",
          },
        ],
        words: [
          {
            word: "py/ja/ma",
            audio: "/audio/syllables/tableau3/J/pyjama.mp3",
            image: "/images/syllables/tableau3/J/pyjama.jpg",
          },
          {
            word: "ji/la/li",
            audio: "/audio/syllables/tableau3/J/jilali.mp3",
            image: "/images/syllables/tableau3/J/jilali.jpg",
          },
          {
            word: "jo/li",
            audio: "/audio/syllables/tableau3/J/joli.mp3",
            image: "/images/syllables/tableau3/J/joli.jpg",
          },
          {
            word: "ja/mi/la",
            audio: "/audio/syllables/tableau3/J/jamila.mp3",
            image: "/images/syllables/tableau3/J/jamila.jpg",
          },
          {
            word: "ju/do",
            audio: "/audio/syllables/tableau3/J/judo.mp3",
            image: "/images/syllables/tableau3/J/judo.jpg",
          },
          { word: "jus", audio: "/audio/syllables/tableau3/J/jus.mp3", image: "/images/syllables/tableau3/J/jus.jpg" },
          {
            word: "ju/pe",
            audio: "/audio/syllables/tableau3/J/jupe.mp3",
            image: "/images/syllables/tableau3/J/jupe.jpg",
          },
          {
            word: "ju/melle",
            audio: "/audio/syllables/tableau3/J/jumelle.mp3",
            image: "/images/syllables/tableau3/J/jumelle.jpg",
          },
        ],
      },
      {
        letter: "x (ks)",
        syllables: [
          {
            syllable: "x (ks)",
            audio: "/audio/syllables/tableau3/X/XT3.mp3",
          },
        ],
        words: [
          {
            word: "ta/xi",
            audio: "/audio/syllables/tableau3/X/taxi.mp3",
            image: "/images/syllables/tableau3/X/taxi.jpg",
          },
          {
            word: "bo/xe",
            audio: "/audio/syllables/tableau3/X/boxe.mp3",
            image: "/images/syllables/tableau3/X/boxe.jpg",
          },
          {
            word: "ma/xi/me",
            audio: "/audio/syllables/tableau3/X/maxime.mp3",
            image: "/images/syllables/tableau3/X/maxime.jpg",
          },
          {
            word: "tex/te",
            audio: "/audio/syllables/tableau3/X/texte.mp3",
            image: "/images/syllables/tableau3/X/texte.jpg",
          },
          {
            word: "sa/xo/pho/ne",
            audio: "/audio/syllables/tableau3/X/saxophone.mp3",
            image: "/images/syllables/tableau3/X/saxophone.jpg",
          },
          {
            word: "ju/melle",
            audio: "/audio/syllables/tableau3/X/jumelle.mp3",
            image: "/images/syllables/tableau3/X/jumelle.jpg",
          },
        ],
      },
      {
        letter: "x (s)",
        syllables: [
          {
            syllable: "x(s)",
            audio: "/audio/syllables/tableau3/XS/XST3.mp3",
          },
        ],
        words: [
          {
            word: "six",
            audio: "/audio/syllables/tableau3/XS/six.mp3",
            image: "/images/syllables/tableau3/XS/six.jpg",
          },
          {
            word: "dix",
            audio: "/audio/syllables/tableau3/XS/dix.mp3",
            image: "/images/syllables/tableau3/XS/dix.jpg",
          },
          {
            word: "soi/xan/te",
            audio: "/audio/syllables/tableau3/XS/soixante.mp3",
            image: "/images/syllables/tableau3/XS/soixante.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Tableau 4",
    description: "المقاطع الصوتية المتقدمة",
    sections: [
      {
        letter: "y",
        syllables: [
          {
            syllable: "by / cy / ly / py / ty",
            audio: "/audio/syllables/tableau4/Y/YT4.mp3",
          },
        ],
        words: [
          {
            word: "bi/cy/clet/te",
            audio: "/audio/syllables/tableau4/Y/bicyclette.mp3",
            image: "/images/syllables/tableau4/Y/bicyclette.jpg",
          },
          {
            word: "cu/rry",
            audio: "/audio/syllables/tableau4/Y/curry.mp3",
            image: "/images/syllables/tableau4/Y/curry.jpg",
          },
          {
            word: "ly/re",
            audio: "/audio/syllables/tableau4/Y/lyre.mp3",
            image: "/images/syllables/tableau4/Y/lyre.jpg",
          },
          {
            word: "py/ja/ma",
            audio: "/audio/syllables/tableau4/Y/pyjama.mp3",
            image: "/images/syllables/tableau4/Y/pyjama.jpg",
          },
          {
            word: "py/ra/mi/de",
            audio: "/audio/syllables/tableau4/Y/pyramide.mp3",
            image: "/images/syllables/tableau4/Y/pyramide.jpg",
          },
          {
            word: "sy/lla/be",
            audio: "/audio/syllables/tableau4/Y/syllabe.mp3",
            image: "/images/syllables/tableau4/Y/syllabe.jpg",
          },
          {
            word: "e/gy/pte",
            audio: "/audio/syllables/tableau4/Y/egypte.mp3",
            image: "/images/syllables/tableau4/Y/egypte.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Tableau 5",
    description: "المقاطع الصوتية المتقدمة",
    sections: [
      {
        letter: "z",
        syllables: [
          {
            syllable: "za / zi / zo / ze / zu",
            audio: "/audio/syllables/tableau5/Z/ZT5.mp3",
          },
        ],
        words: [
          {
            word: "za/za",
            audio: "/audio/syllables/tableau5/Z/zaza.mp3",
            image: "/images/syllables/tableau5/Z/zaza.jpg",
          },
          {
            word: "ze/ro",
            audio: "/audio/syllables/tableau5/Z/zero.mp3",
            image: "/images/syllables/tableau5/Z/zero.jpg",
          },
          {
            word: "zi/zi",
            audio: "/audio/syllables/tableau5/Z/zizi.mp3",
            image: "/images/syllables/tableau5/Z/zizi.jpg",
          },
          {
            word: "zo/zo",
            audio: "/audio/syllables/tableau5/Z/zozo.mp3",
            image: "/images/syllables/tableau5/Z/zozo.jpg",
          },
          {
            word: "zu/zu",
            audio: "/audio/syllables/tableau5/Z/zuzu.mp3",
            image: "/images/syllables/tableau5/Z/zuzu.jpg",
          },
        ],
      },
    ],
  },
]

// Helper function to get tableau by ID
export function getTableauById(id: number): TableauData | undefined {
  return syllablesData.find((tableau) => tableau.id === id)
}

// Helper function to get all tableaux
export function getAllTableaux(): TableauData[] {
  return syllablesData
}

