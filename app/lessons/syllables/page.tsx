import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import { getAllTableaux } from "@/lib/syllables-data"

export default function SyllablesLessonsPage() {
  const tableaux = getAllTableaux()

  return (
    <div className="container pb-20 pt-20 md:pb-10 md:pt-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">الجداول المقطعية</h1>
        <p className="text-muted-foreground">تعلم نطق وقراءة المقاطع الصوتية الفرنسية</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tableaux.map((tableau) => (
          <Card key={tableau.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{tableau.name}</CardTitle>
              <CardDescription>{tableau.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center rounded-md bg-primary/10 py-6">
                <BookOpen className="h-12 w-12 text-primary/40" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tableau.sections.map((section) => (
                  <Badge key={section.letter} variant="outline">
                    {section.letter.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/lessons/syllables/${tableau.id}`}>ابدأ الدرس</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

