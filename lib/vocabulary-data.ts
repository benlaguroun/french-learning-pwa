// This file contains the vocabulary data for the French learning app

export interface VocabularyItem {
  name: string
  image: string
  audio: string
}

// Vocabulary data organized by first letter
export const vocabularyData: VocabularyItem[] = [
  // Words for A
  {
    name: "Abricot",
    image: "/images/vocabulary/abricot.jpg",
    audio: "/audio/vocabulary/abricot.mp3",
  },
  {
    name: "Abeille",
    image: "/images/vocabulary/abeille.jpg",
    audio: "/audio/vocabulary/abeille.mp3",
  },
  {
    name: "Avion",
    image: "/images/vocabulary/avion.jpg",
    audio: "/audio/vocabulary/avion.mp3",
  },
  {
    name: "Arbre",
    image: "/images/vocabulary/arbre.jpg",
    audio: "/audio/vocabulary/arbre.mp3",
  },
  {
    name: "Ananas",
    image: "/images/vocabulary/ananas.jpg",
    audio: "/audio/vocabulary/ananas.mp3",
  },
  {
    name: "Âne",
    image: "/images/vocabulary/ane.jpg",
    audio: "/audio/vocabulary/ane.mp3",
  },
  {
    name: "Animal",
    image: "/images/vocabulary/animal.jpg",
    audio: "/audio/vocabulary/animal.mp3",
  },
  {
    name: "Ami",
    image: "/images/vocabulary/ami.jpg",
    audio: "/audio/vocabulary/ami.mp3",
  },
  {
    name: "Araignée",
    image: "/images/vocabulary/araignee.jpg",
    audio: "/audio/vocabulary/araignee.mp3",
  },
  {
    name: "Arc-en-ciel",
    image: "/images/vocabulary/arc-en-ciel.jpg",
    audio: "/audio/vocabulary/arc-en-ciel.mp3",
  },

  // Words for B
  {
    name: "Banane",
    image: "/images/vocabulary/banane.jpg",
    audio: "/audio/vocabulary/banane.mp3",
  },
  {
    name: "Bateau",
    image: "/images/vocabulary/bateau.jpg",
    audio: "/audio/vocabulary/bateau.mp3",
  },
  {
    name: "Bébé",
    image: "/images/vocabulary/bebe.jpg",
    audio: "/audio/vocabulary/bebe.mp3",
  },
  {
    name: "Bonbon",
    image: "/images/vocabulary/bonbon.jpg",
    audio: "/audio/vocabulary/bonbon.mp3",
  },
  {
    name: "Ballon",
    image: "/images/vocabulary/ballon.jpg",
    audio: "/audio/vocabulary/ballon.mp3",
  },
  {
    name: "Boîte",
    image: "/images/vocabulary/boite.jpg",
    audio: "/audio/vocabulary/boite.mp3",
  },
  {
    name: "Brouette",
    image: "/images/vocabulary/brouette.jpg",
    audio: "/audio/vocabulary/brouette.mp3",
  },
  {
    name: "Brosse",
    image: "/images/vocabulary/brosse.jpg",
    audio: "/audio/vocabulary/brosse.mp3",
  },
  {
    name: "Bougie",
    image: "/images/vocabulary/bougie.jpg",
    audio: "/audio/vocabulary/bougie.mp3",
  },
  {
    name: "Baguette",
    image: "/images/vocabulary/baguette.jpg",
    audio: "/audio/vocabulary/baguette.mp3",
  },
]

// Group vocabulary by first letter
export function getVocabularyByLetter(): Record<string, VocabularyItem[]> {
  const grouped: Record<string, VocabularyItem[]> = {}

  vocabularyData.forEach((item) => {
    const firstLetter = item.name.charAt(0).toLowerCase()
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = []
    }
    grouped[firstLetter].push(item)
  })

  return grouped
}

// Get all unique first letters
export function getAllVocabularyLetters(): string[] {
  const letters = new Set<string>()

  vocabularyData.forEach((item) => {
    letters.add(item.name.charAt(0).toLowerCase())
  })

  return Array.from(letters).sort()
}

// Get vocabulary items by letter
export function getVocabularyItemsByLetter(letter: string): VocabularyItem[] {
  return vocabularyData.filter((item) => item.name.charAt(0).toLowerCase() === letter.toLowerCase())
}

