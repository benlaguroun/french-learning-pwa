"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Play, Info, Volume2 } from "lucide-react"

// French alphabet data with pronunciation, examples, and notes
const alphabetData = [
  {
    letter: "A a",
    name: "a",
    pronunciation: "/a/",
    examples: ["ami", "avion", "arbre"],
    notes: "Similar to 'a' in 'father'",
    audio: "/audio/a.mp3",
  },
  {
    letter: "B b",
    name: "bé",
    pronunciation: "/be/",
    examples: ["bon", "bébé", "blanc"],
    notes: "Similar to 'b' in 'boy'",
    audio: "/audio/b.mp3",
  },
  {
    letter: "C c",
    name: "cé",
    pronunciation: "/se/",
    examples: ["cent", "ciel", "cycle"],
    notes: "Pronounced as 's' before e, i, y; otherwise as 'k'",
    audio: "/audio/c.mp3",
  },
  {
    letter: "D d",
    name: "dé",
    pronunciation: "/de/",
    examples: ["dans", "dire", "donner"],
    notes: "Similar to 'd' in 'day'",
    audio: "/audio/d.mp3",
  },
  {
    letter: "E e",
    name: "e",
    pronunciation: "/ə/",
    examples: ["le", "petit", "demain"],
    notes: "Has several pronunciations depending on accent marks and position",
    audio: "/audio/e.mp3",
  },
  {
    letter: "F f",
    name: "effe",
    pronunciation: "/ɛf/",
    examples: ["faire", "feu", "famille"],
    notes: "Similar to 'f' in 'fish'",
    audio: "/audio/f.mp3",
  },
  {
    letter: "G g",
    name: "gé",
    pronunciation: "/ʒe/",
    examples: ["garçon", "gâteau", "geste"],
    notes: "Pronounced as 'zh' before e, i, y; otherwise as 'g' in 'go'",
    audio: "/audio/g.mp3",
  },
  {
    letter: "H h",
    name: "ache",
    pronunciation: "/aʃ/",
    examples: ["homme", "heure", "hôtel"],
    notes: "Always silent in French",
    audio: "/audio/h.mp3",
  },
  {
    letter: "I i",
    name: "i",
    pronunciation: "/i/",
    examples: ["ici", "idée", "île"],
    notes: "Similar to 'ee' in 'see'",
    audio: "/audio/i.mp3",
  },
  {
    letter: "J j",
    name: "ji",
    pronunciation: "/ʒi/",
    examples: ["jour", "jardin", "jouer"],
    notes: "Similar to 's' in 'pleasure'",
    audio: "/audio/j.mp3",
  },
  {
    letter: "K k",
    name: "ka",
    pronunciation: "/ka/",
    examples: ["kilo", "kayak", "koala"],
    notes: "Similar to 'k' in 'kite', rarely used in French",
    audio: "/audio/k.mp3",
  },
  {
    letter: "L l",
    name: "elle",
    pronunciation: "/ɛl/",
    examples: ["livre", "lune", "lait"],
    notes: "Similar to 'l' in 'love'",
    audio: "/audio/l.mp3",
  },
  {
    letter: "M m",
    name: "emme",
    pronunciation: "/ɛm/",
    examples: ["mère", "maison", "main"],
    notes: "Similar to 'm' in 'mother'",
    audio: "/audio/m.mp3",
  },
  {
    letter: "N n",
    name: "enne",
    pronunciation: "/ɛn/",
    examples: ["non", "nuit", "neuf"],
    notes: "Similar to 'n' in 'nice'",
    audio: "/audio/n.mp3",
  },
  {
    letter: "O o",
    name: "o",
    pronunciation: "/o/",
    examples: ["or", "octobre", "oiseau"],
    notes: "Similar to 'o' in 'go'",
    audio: "/audio/o.mp3",
  },
  {
    letter: "P p",
    name: "pé",
    pronunciation: "/pe/",
    examples: ["père", "pain", "parler"],
    notes: "Similar to 'p' in 'pen'",
    audio: "/audio/p.mp3",
  },
  {
    letter: "Q q",
    name: "ku",
    pronunciation: "/ky/",
    examples: ["qui", "quand", "quatre"],
    notes: "Almost always followed by 'u' and pronounced as 'k'",
    audio: "/audio/q.mp3",
  },
  {
    letter: "R r",
    name: "erre",
    pronunciation: "/ɛʁ/",
    examples: ["rouge", "rire", "rue"],
    notes: "Guttural sound made at the back of the throat",
    audio: "/audio/r.mp3",
  },
  {
    letter: "S s",
    name: "esse",
    pronunciation: "/ɛs/",
    examples: ["soleil", "soir", "sucre"],
    notes: "Usually pronounced as 's' in 'see', but like 'z' between vowels",
    audio: "/audio/s.mp3",
  },
  {
    letter: "T t",
    name: "té",
    pronunciation: "/te/",
    examples: ["table", "tête", "temps"],
    notes: "Similar to 't' in 'table'",
    audio: "/audio/t.mp3",
  },
  {
    letter: "U u",
    name: "u",
    pronunciation: "/y/",
    examples: ["une", "tu", "rue"],
    notes: "No equivalent in English; round lips while saying 'ee'",
    audio: "/audio/u.mp3",
  },
  {
    letter: "V v",
    name: "vé",
    pronunciation: "/ve/",
    examples: ["vent", "vie", "voiture"],
    notes: "Similar to 'v' in 'very'",
    audio: "/audio/v.mp3",
  },
  {
    letter: "W w",
    name: "double vé",
    pronunciation: "/dubləve/",
    examples: ["wagon", "week-end", "web"],
    notes: "Rare in French, usually in borrowed words",
    audio: "/audio/w.mp3",
  },
  {
    letter: "X x",
    name: "ixe",
    pronunciation: "/iks/",
    examples: ["taxi", "exemple", "xylophone"],
    notes: "Usually pronounced as 'ks' or 'gz'",
    audio: "/audio/x.mp3",
  },
  {
    letter: "Y y",
    name: "i grec",
    pronunciation: "/iɡʁɛk/",
    examples: ["yoga", "yaourt", "yeux"],
    notes: "Called 'Greek i', pronounced like 'ee' in 'see'",
    audio: "/audio/y.mp3",
  },
  {
    letter: "Z z",
    name: "zède",
    pronunciation: "/zɛd/",
    examples: ["zéro", "zoo", "zigzag"],
    notes: "Similar to 'z' in 'zebra'",
    audio: "/audio/z.mp3",
  },
]

// Special characters in French
const specialCharacters = [
  {
    letter: "Ç ç",
    name: "c cédille",
    pronunciation: "/se.dij/",
    examples: ["français", "garçon", "leçon"],
    notes: "Always pronounced as 's' in 'see'",
    audio: "/audio/c-cedilla.mp3",
  },
  {
    letter: "É é",
    name: "e accent aigu",
    pronunciation: "/e/",
    examples: ["été", "café", "école"],
    notes: "Always pronounced as 'ay' in 'say'",
    audio: "/audio/e-acute.mp3",
  },
  {
    letter: "È è",
    name: "e accent grave",
    pronunciation: "/ɛ/",
    examples: ["père", "très", "après"],
    notes: "Pronounced as 'e' in 'get'",
    audio: "/audio/e-grave.mp3",
  },
  {
    letter: "Ê ê",
    name: "e accent circonflexe",
    pronunciation: "/ɛ/",
    examples: ["être", "fête", "même"],
    notes: "Similar to 'e' in 'get'",
    audio: "/audio/e-circumflex.mp3",
  },
  {
    letter: "Ë ë",
    name: "e tréma",
    pronunciation: "/ɛ/",
    examples: ["Noël", "Citroën", "Saül"],
    notes: "Indicates that the e is pronounced separately",
    audio: "/audio/e-diaeresis.mp3",
  },
  {
    letter: "À à",
    name: "a accent grave",
    pronunciation: "/a/",
    examples: ["à", "là", "déjà"],
    notes: "Same sound as 'a', used to distinguish homophones",
    audio: "/audio/a-grave.mp3",
  },
  {
    letter: "Â â",
    name: "a accent circonflexe",
    pronunciation: "/ɑ/",
    examples: ["âge", "pâte", "château"],
    notes: "Slightly longer 'a' sound",
    audio: "/audio/a-circumflex.mp3",
  },
  {
    letter: "Î î",
    name: "i accent circonflexe",
    pronunciation: "/i/",
    examples: ["île", "dîner", "maître"],
    notes: "Same sound as 'i'",
    audio: "/audio/i-circumflex.mp3",
  },
  {
    letter: "Ï ï",
    name: "i tréma",
    pronunciation: "/i/",
    examples: ["naïf", "maïs", "haïr"],
    notes: "Indicates that the i is pronounced separately",
    audio: "/audio/i-diaeresis.mp3",
  },
  {
    letter: "Ô ô",
    name: "o accent circonflexe",
    pronunciation: "/o/",
    examples: ["côté", "hôtel", "rôle"],
    notes: "Slightly longer 'o' sound",
    audio: "/audio/o-circumflex.mp3",
  },
  {
    letter: "Ù ù",
    name: "u accent grave",
    pronunciation: "/y/",
    examples: ["où", "sûr", "mûr"],
    notes: "Same sound as 'u', mainly used in 'où' (where)",
    audio: "/audio/u-grave.mp3",
  },
  {
    letter: "Û û",
    name: "u accent circonflexe",
    pronunciation: "/y/",
    examples: ["sûr", "mûr", "dû"],
    notes: "Same sound as 'u'",
    audio: "/audio/u-circumflex.mp3",
  },
  {
    letter: "Ü ü",
    name: "u tréma",
    pronunciation: "/y/",
    examples: ["Saül", "capharnaüm", "aiguë"],
    notes: "Indicates that the u is pronounced separately",
    audio: "/audio/u-diaeresis.mp3",
  },
  {
    letter: "Œ œ",
    name: "e dans l'o",
    pronunciation: "/œ/",
    examples: ["œuf", "cœur", "sœur"],
    notes: "Similar to 'u' in 'fur'",
    audio: "/audio/oe-ligature.mp3",
  },
  {
    letter: "Æ æ",
    name: "e dans l'a",
    pronunciation: "/e/",
    examples: ["curriculum vitæ", "ex æquo", "tænia"],
    notes: "Rare, mostly in Latin-derived words",
    audio: "/audio/ae-ligature.mp3",
  },
]

// Function to play audio (mock implementation)
const playAudio = (audioPath: string) => {
  console.log(`Playing audio: ${audioPath}`)
  // In a real implementation, you would use the Audio API
  // const audio = new Audio(audioPath);
  // audio.play();
}

export function AlphabetDisplay() {
  const [selectedLetter, setSelectedLetter] = useState<(typeof alphabetData)[0] | null>(null)

  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="standard" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="standard">Standard Alphabet</TabsTrigger>
          <TabsTrigger value="special">Special Characters</TabsTrigger>
        </TabsList>

        <TabsContent value="standard" className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {alphabetData.map((letter, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedLetter(letter)}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold mb-2">{letter.letter}</div>
                  <div className="text-sm text-muted-foreground">{letter.name}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      playAudio(letter.audio)
                    }}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="special" className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {specialCharacters.map((letter, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedLetter(letter)}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold mb-2">{letter.letter}</div>
                  <div className="text-sm text-muted-foreground">{letter.name}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      playAudio(letter.audio)
                    }}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedLetter && (
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl flex items-center gap-2">
                {selectedLetter.letter}
                <Button variant="ghost" size="icon" onClick={() => playAudio(selectedLetter.audio)}>
                  <Volume2 className="h-5 w-5" />
                </Button>
              </CardTitle>
              <Button variant="outline" size="sm" onClick={() => setSelectedLetter(null)}>
                Close
              </Button>
            </div>
            <CardDescription>
              {selectedLetter.name} - {selectedLetter.pronunciation}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Pronunciation Note
                </h3>
                <p className="text-muted-foreground mt-1">{selectedLetter.notes}</p>
              </div>

              <div>
                <h3 className="font-medium flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Example Words
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                  {selectedLetter.examples.map((example, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                      <span>{example}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => playAudio(`/audio/examples/${example}.mp3`)}
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Practice Writing</h3>
                <div className="grid grid-cols-4 gap-2">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="border-2 border-dashed border-primary/30 rounded-md h-16 flex items-center justify-center text-3xl text-muted-foreground"
                      >
                        {i === 0 ? selectedLetter.letter.charAt(0) : ""}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Tips for Learning the French Alphabet</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Practice pronunciation daily by reading aloud</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Focus on sounds that don't exist in English (like 'r' and 'u')</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Learn the alphabet song in French to help memorization</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Pay attention to accent marks as they change pronunciation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Practice spelling words out loud using the French letter names</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

