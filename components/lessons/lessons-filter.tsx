"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export function LessonsFilter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">تصفية الدروس</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="ابحث عن درس..."
            className="pl-10 pr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-5 w-5 rounded-full p-0"
              onClick={() => setSearchTerm("")}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>

        <div className="md:hidden">
          <Button
            variant="outline"
            className="w-full flex items-center justify-between"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              خيارات التصفية
            </span>
            {showFilters ? <X className="h-4 w-4" /> : null}
          </Button>
        </div>

        <div className={`space-y-5 ${showFilters ? "block" : "hidden md:block"}`}>
          <div className="space-y-3">
            <h3 className="font-medium">المستوى</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="level-beginner" />
                <Label htmlFor="level-beginner">مبتدئ</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="level-intermediate" />
                <Label htmlFor="level-intermediate">متوسط</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="level-advanced" />
                <Label htmlFor="level-advanced">متقدم</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-medium">الفئة</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="category-basics" />
                <Label htmlFor="category-basics">أساسيات</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="category-grammar" />
                <Label htmlFor="category-grammar">قواعد</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="category-conversation" />
                <Label htmlFor="category-conversation">محادثة</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="category-vocabulary" />
                <Label htmlFor="category-vocabulary">مفردات</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-medium">المدة</h3>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="all" id="duration-all" />
                <Label htmlFor="duration-all">الكل</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="short" id="duration-short" />
                <Label htmlFor="duration-short">قصير (أقل من 15 دقيقة)</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="medium" id="duration-medium" />
                <Label htmlFor="duration-medium">متوسط (15-30 دقيقة)</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="long" id="duration-long" />
                <Label htmlFor="duration-long">طويل (أكثر من 30 دقيقة)</Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-medium">التقدم</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="progress-not-started" />
                <Label htmlFor="progress-not-started">لم يبدأ بعد</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="progress-in-progress" />
                <Label htmlFor="progress-in-progress">قيد التقدم</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="progress-completed" />
                <Label htmlFor="progress-completed">مكتمل</Label>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <Button variant="outline" className="w-full">
              إعادة تعيين الفلاتر
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

