import ChallengeLayout from "@/components/challenge-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Users, Upload, Calendar } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function CommunityChallenge2() {
  return (
    <ChallengeLayout
      title="Weekly Writing Prompt"
      description="Write a short paragraph in French based on the community prompt"
      type="community"
      number={2}
      progress={0}
      xpReward={120}
      difficulty="medium"
    >
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">This Week's Prompt</h2>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>Ends in 3 days</span>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-2">Décrivez votre journée idéale</h3>
            <p className="text-gray-700">
              Write 100-150 words in French describing your ideal day. What would you do? Where would you go? Who would
              you spend time with?
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <h3 className="font-medium">Your Submission</h3>
            <Textarea placeholder="Write your response in French..." className="min-h-[150px] resize-none" />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div>
                <span className="font-medium">0</span>/150 words
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                <Upload className="h-4 w-4" />
                Upload Audio
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="gap-2">
              <Check className="h-4 w-4" />
              Submit Response
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-blue-500" />
            Community Submissions
          </h3>

          <div className="space-y-6">
            {[
              {
                user: "Thomas",
                avatar: "T",
                time: "1 day ago",
                content:
                  "Ma journée idéale commencerait par un petit-déjeuner sur une terrasse ensoleillée. Ensuite, je me promènerais dans un parc avec mon chien. L'après-midi, je lirais un bon livre dans un café tranquille. Le soir, je dînerais avec mes amis dans un restaurant au bord de la mer. Parfait !",
                likes: 12,
              },
              {
                user: "Claire",
                avatar: "C",
                time: "2 days ago",
                content:
                  "Pour ma journée idéale, je me réveillerais sans alarme. Je prendrais un café et des croissants frais. Puis, je visiterais un musée d'art. Je déjeunerais dans un petit bistro parisien. L'après-midi, je ferais du shopping. Le soir, je regarderais un film français chez moi.",
                likes: 9,
              },
            ].map((submission, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-800">{submission.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{submission.user}</span>
                      <span className="text-xs text-gray-500">{submission.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{submission.content.split(" ").length} words</span>
                      <span>•</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-blue-500">
                        Listen
                      </Button>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3">{submission.content}</p>

                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="gap-1 text-gray-500">
                    <Check className="h-4 w-4" />
                    <span>Helpful ({submission.likes})</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    Give Feedback
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Button variant="outline">View More Submissions</Button>
          </div>
        </Card>

        <Card className="p-6 bg-blue-50 border-blue-200">
          <div className="flex gap-3">
            <div className="mt-1">
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Writing Tip</h3>
              <p className="text-sm text-gray-700">
                When writing in French, try to use connecting words like "ensuite" (next), "puis" (then), "enfin"
                (finally) to make your text flow better. Don't worry about making small mistakes - focus on expressing
                your ideas clearly.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </ChallengeLayout>
  )
}

