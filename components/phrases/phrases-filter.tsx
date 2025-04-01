"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function PhrasesFilter() {
  const [expanded, setExpanded] = useState(true)
  const [activeFilters, setActiveFilters] = useState(0)

  // Mock filter state
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [difficulty, setDifficulty] = useState("all")
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [withAudioOnly, setWithAudioOnly] = useState(false)
  const [sortBy, setSortBy] = useState("alphabetical")

  const categories = [
    { id: "greetings", label: "التحيات والترحيب" },
    { id: "travel", label: "السفر والتنقل" },
    { id: "dining", label: "الطعام والمطاعم" },
    { id: "shopping", label: "التسوق" },
    { id: "emergency", label: "حالات الطوارئ" },
    { id: "smalltalk", label: "المحادثات القصيرة" },
    { id: "directions", label: "الاتجاهات" },
    { id: "accommodation", label: "السكن والإقامة" },
  ]

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const selectAllCategories = () => {
    setSelectedCategories(categories.map((c) => c.id))
  }

  const clearAllCategories = () => {
    setSelectedCategories([])
  }

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setDifficulty("all")
    setFavoritesOnly(false)
    setWithAudioOnly(false)
    setSortBy("alphabetical")
  }

  // Calculate active filters count
  const calculateActiveFilters = () => {
    let count = 0
    if (searchTerm) count++
    if (selectedCategories.length > 0) count++
    if (difficulty !== "all") count++
    if (favoritesOnly) count++
    if (withAudioOnly) count++
    if (sortBy !== "alphabetical") count++
    return count
  }

  return (
    <Card className="p-4 mb-4 md:mb-0 bg-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">تصفية العبارات</h3>
        <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="md:hidden">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>

      <div className={`${expanded ? "block" : "hidden md:block"}`}>
        {/* Search */}
        <div className="mb-4 relative">
          <Input
            type="text"
            placeholder="ابحث عن عبارات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 text-right"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-2 top-1.5 h-6 w-6 p-0"
              onClick={() => setSearchTerm("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Categories */}
        <Accordion type="single" collapsible defaultValue="categories" className="mb-4">
          <AccordionItem value="categories">
            <AccordionTrigger className="py-2">
              <span className="font-medium">الفئات</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between mb-2">
                <Button variant="outline" size="sm" onClick={clearAllCategories}>
                  مسح الكل
                </Button>
                <Button variant="outline" size="sm" onClick={selectAllCategories}>
                  تحديد الكل
                </Button>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => toggleCategory(category.id)}
                    />
                    <Label htmlFor={`category-${category.id}`} className="flex-grow cursor-pointer">
                      {category.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Difficulty */}
        <Accordion type="single" collapsible defaultValue="difficulty" className="mb-4">
          <AccordionItem value="difficulty">
            <AccordionTrigger className="py-2">
              <span className="font-medium">مستوى الصعوبة</span>
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup value={difficulty} onValueChange={setDifficulty}>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">جميع المستويات</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">مبتدئ</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">متوسط</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">متقدم</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Additional Filters */}
        <Accordion type="single" collapsible defaultValue="additional" className="mb-4">
          <AccordionItem value="additional">
            <AccordionTrigger className="py-2">
              <span className="font-medium">خيارات إضافية</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="favorites">المفضلة فقط</Label>
                  <Switch id="favorites" checked={favoritesOnly} onCheckedChange={setFavoritesOnly} />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="audio">مع نطق صوتي فقط</Label>
                  <Switch id="audio" checked={withAudioOnly} onCheckedChange={setWithAudioOnly} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Sort Options */}
        <div className="mb-4">
          <Label htmlFor="sort" className="block mb-2">
            ترتيب حسب
          </Label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger id="sort">
              <SelectValue placeholder="اختر طريقة الترتيب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alphabetical">أبجدي</SelectItem>
              <SelectItem value="most-used">الأكثر استخداماً</SelectItem>
              <SelectItem value="recently-added">أضيف مؤخراً</SelectItem>
              <SelectItem value="difficulty">مستوى الصعوبة</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={resetFilters}>
            إعادة ضبط
          </Button>
          <Button>
            تطبيق
            {calculateActiveFilters() > 0 && (
              <Badge variant="secondary" className="mr-2">
                {calculateActiveFilters()}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </Card>
  )
}

