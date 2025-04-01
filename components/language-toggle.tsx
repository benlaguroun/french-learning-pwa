"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Languages } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const languages = [
  { label: "العربية", value: "ar" },
  { label: "Français", value: "fr" },
  { label: "English", value: "en" },
]

export function LanguageToggle() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState("ar")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get language from localStorage or default to ar
    const storedLanguage = localStorage.getItem("language") || "ar"
    setLanguage(storedLanguage)
  }, [])

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    localStorage.setItem("language", value)
    setOpen(false)

    // In a real app, this would trigger a language change in the app
    // For this demo, we'll just console.log
    console.log(`Language changed to: ${value}`)
  }

  if (!mounted) return null

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" role="combobox" aria-expanded={open} size="icon" className="w-8 h-8">
          <Languages className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="ابحث عن لغة..." />
          <CommandList>
            <CommandEmpty>لم يتم العثور على لغة</CommandEmpty>
            <CommandGroup>
              {languages.map((lang) => (
                <CommandItem key={lang.value} value={lang.value} onSelect={handleLanguageChange}>
                  <Check className={cn("ml-2 h-4 w-4", language === lang.value ? "opacity-100" : "opacity-0")} />
                  {lang.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

