import ChallengeLayout from "@/components/challenge-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Trophy, Mic, ArrowRight, BookOpen, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function Achievement2() {
  return (
    <ChallengeLayout
      title="Pronunciation Perfect"
      description="Master the pronunciation of 50 difficult French sounds"
      type="achievement"
      number={2}
      progress={20}
      xpReward={250}
      difficulty="hard"
    >
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Achievement Progress</h2>

          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-1">
              <span>10/50 sounds mastered</span>
              <span className="font-medium">20%</span>
            </div>
            <Progress value={20} className="h-2" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { category: "Nasal Vowels", progress: 40, total: 10 },
                { category: "R Sounds", progress: 30, total: 10 },
                { category: "U vs OU", progress: 20, total: 10 },
                { category: "Silent Letters", progress: 10, total: 10 },
                { category: "Liaisons", progress: 0, total: 10 },
              ].map((category, index) => (
                <Card key={index} className="p-4 border">
                  <h3 className="font-medium text-sm mb-2">{category.category}</h3>
                  <Progress value={category.progress} className="h-1.5 mb-2" />
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">
                      {Math.round((category.progress / 100) * category.total)}/{category.total}
                    </span>
                    <div className="flex items-center">
                      <Trophy className="h-3 w-3 text-purple-400 mr-1" />
                      <span>{Math.round((category.progress / 100) * category.total * 5)}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Today's Practice: Nasal Vowels</h2>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              4/10 Mastered
            </Badge>
          </div>

          <div className="space-y-6">
            {[
              {
                sound: "in / ain / ein",
                examples: ["vin", "pain", "plein"],
                tip: "Similar to the 'an' in 'tank' but with your tongue higher in your mouth",
                mastered: true,
              },
              {
                sound: "an / am / en / em",
                examples: ["dans", "chambre", "enfant", "temps"],
                tip: "Open your mouth wide and let the sound resonate in your nose",
                mastered: true,
              },
              {
                sound: "on / om",
                examples: ["bon", "nom", "maison"],
                tip: "Round your lips as if saying 'oh' but let the sound come through your nose",
                mastered: true,
              },
              {
                sound: "un / um",
                examples: ["un", "parfum", "brun"],
                tip: "This is the trickiest nasal vowel - position your mouth as if to say 'u' but nasalize",
                mastered: true,
              },
            ].map((sound, index) => (
              <div key={index} className="border rounded-lg p-5 bg-purple-50 border-purple-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-lg">{sound.sound}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {sound.examples.map((example, i) => (
                        <span key={i} className="px-2 py-1 bg-white rounded-md text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="default" size="sm" className="bg-purple-500 hover:bg-purple-600">
                    <Check className="h-4 w-4 mr-1" />
                    Mastered
                  </Button>
                </div>

                <div className="bg-white p-3 rounded-md text-sm mb-3">
                  <p className="font-medium text-gray-700">Pronunciation Tip:</p>
                  <p className="text-gray-600">{sound.tip}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1 flex-1">
                    <Mic className="h-4 w-4" />
                    Record
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 flex-1">
                    <Clock className="h-4 w-4" />
                    Slow Down
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 flex-1">
                    Compare
                  </Button>
                </div>
              </div>
            ))}

            <div className="border rounded-lg p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-lg">oin</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {["loin", "coin", "besoin"].map((example, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Check className="h-4 w-4 mr-1" />
                  Mark as Mastered
                </Button>
              </div>

              <div className="bg-gray-50 p-3 rounded-md text-sm mb-3">
                <p className="font-medium text-gray-700">Pronunciation Tip:</p>
                <p className="text-gray-600">
                  Combine the 'w' sound with the nasal 'in' sound. Start with a rounded 'w' and transition to the nasal.
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1 flex-1">
                  <Mic className="h-4 w-4" />
                  Record
                </Button>
                <Button variant="outline" size="sm" className="gap-1 flex-1">
                  <Clock className="h-4 w-4" />
                  Slow Down
                </Button>
                <Button variant="outline" size="sm" className="gap-1 flex-1">
                  Compare
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button className="gap-2">
              Next Sound Group
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-purple-50 border-purple-200">
          <div className="flex gap-3">
            <div className="mt-1">
              <BookOpen className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Pronunciation Tip</h3>
              <p className="text-sm text-gray-700">
                French nasal vowels are unique and don't exist in English. The key is to let air flow through both your
                mouth and nose simultaneously. Practice by pinching your nose closed while saying the sound - if the
                sound changes dramatically, you're doing it correctly!
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline">Save Progress</Button>
          <Button className="gap-2">
            Continue Practice
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ChallengeLayout>
  )
}

