// This file contains the French alphabet data

export interface AlphabetLetter {
  letter: string
  name: string
  audio: string
  image?: string
  examples: {
    word: string
    audio: string
    image?: string
  }[]
}

export const alphabetData: AlphabetLetter[] = [
  {
    letter: "A a",
    name: "a",
    audio: "/audio/alphabet/a.mp3",
    image: "/images/alphabet/a.jpg",
    examples: [
      {
        word: "Avion",
        audio: "/audio/vocabulary/avion.mp3",
        image: "/images/vocabulary/avion.jpg",
      },
      {
        word: "Ananas",
        audio: "/audio/vocabulary/ananas.mp3",
        image: "/images/vocabulary/ananas.jpg",
      },
    ],
  },
  {
    letter: "B b",
    name: "bé",
    audio: "/audio/alphabet/b.mp3",
    image: "/images/alphabet/b.jpg",
    examples: [
      {
        word: "Banane",
        audio: "/audio/vocabulary/banane.mp3",
        image: "/images/vocabulary/banane.jpg",
      },
      {
        word: "Ballon",
        audio: "/audio/vocabulary/ballon.mp3",
        image: "/images/vocabulary/ballon.jpg",
      },
    ],
  },
  {
    letter: "C c",
    name: "cé",
    audio: "/audio/alphabet/c.mp3",
    image: "/images/alphabet/c.jpg",
    examples: [
      {
        word: "Citron",
        audio: "/audio/vocabulary/citron.mp3",
        image: "/images/vocabulary/citron.jpg",
      },
      {
        word: "Canard",
        audio: "/audio/vocabulary/canard.mp3",
        image: "/images/vocabulary/canard.jpg",
      },
    ],
  },
  {
    letter: "D d",
    name: "dé",
    audio: "/audio/alphabet/d.mp3",
    image: "/images/alphabet/d.jpg",
    examples: [
      {
        word: "Domino",
        audio: "/audio/vocabulary/domino.mp3",
        image: "/images/vocabulary/domino.jpg",
      },
      {
        word: "Drapeau",
        audio: "/audio/vocabulary/drapeau.mp3",
        image: "/images/vocabulary/drapeau.jpg",
      },
    ],
  },
  {
    letter: "E e",
    name: "e",
    audio: "/audio/alphabet/e.mp3",
    image: "/images/alphabet/e.jpg",
    examples: [
      {
        word: "Éléphant",
        audio: "/audio/vocabulary/elephant.mp3",
        image: "/images/vocabulary/elephant.jpg",
      },
      {
        word: "Étoile",
        audio: "/audio/vocabulary/etoile.mp3",
        image: "/images/vocabulary/etoile.jpg",
      },
    ],
  },
  {
    letter: "F f",
    name: "effe",
    audio: "/audio/alphabet/f.mp3",
    image: "/images/alphabet/f.jpg",
    examples: [
      {
        word: "Fleur",
        audio: "/audio/vocabulary/fleur.mp3",
        image: "/images/vocabulary/fleur.jpg",
      },
      {
        word: "Fraise",
        audio: "/audio/vocabulary/fraise.mp3",
        image: "/images/vocabulary/fraise.jpg",
      },
    ],
  },
  {
    letter: "G g",
    name: "gé",
    audio: "/audio/alphabet/g.mp3",
    image: "/images/alphabet/g.jpg",
    examples: [
      {
        word: "Gâteau",
        audio: "/audio/vocabulary/gateau.mp3",
        image: "/images/vocabulary/gateau.jpg",
      },
      {
        word: "Girafe",
        audio: "/audio/vocabulary/girafe.mp3",
        image: "/images/vocabulary/girafe.jpg",
      },
    ],
  },
  {
    letter: "H h",
    name: "ache",
    audio: "/audio/alphabet/h.mp3",
    image: "/images/alphabet/h.jpg",
    examples: [
      {
        word: "Hélicoptère",
        audio: "/audio/vocabulary/helicoptere.mp3",
        image: "/images/vocabulary/helicoptere.jpg",
      },
      {
        word: "Hibou",
        audio: "/audio/vocabulary/hibou.mp3",
        image: "/images/vocabulary/hibou.jpg",
      },
    ],
  },
  {
    letter: "I i",
    name: "i",
    audio: "/audio/alphabet/i.mp3",
    image: "/images/alphabet/i.jpg",
    examples: [
      {
        word: "Île",
        audio: "/audio/vocabulary/ile.mp3",
        image: "/images/vocabulary/ile.jpg",
      },
      {
        word: "Igloo",
        audio: "/audio/vocabulary/igloo.mp3",
        image: "/images/vocabulary/igloo.jpg",
      },
    ],
  },
  {
    letter: "J j",
    name: "ji",
    audio: "/audio/alphabet/j.mp3",
    image: "/images/alphabet/j.jpg",
    examples: [
      {
        word: "Jardin",
        audio: "/audio/vocabulary/jardin.mp3",
        image: "/images/vocabulary/jardin.jpg",
      },
      {
        word: "Jouet",
        audio: "/audio/vocabulary/jouet.mp3",
        image: "/images/vocabulary/jouet.jpg",
      },
    ],
  },
  // Add more letters as needed
]

// Helper function to get all alphabet letters
export function getAllAlphabetLetters(): AlphabetLetter[] {
  return alphabetData
}

// Helper function to get a specific letter
export function getAlphabetLetter(letter: string): AlphabetLetter | undefined {
  return alphabetData.find((item) => item.letter.charAt(0).toLowerCase() === letter.toLowerCase())
}

