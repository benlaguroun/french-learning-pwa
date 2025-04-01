"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { BookOpen, GraduationCap, BarChart, Home } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden gap-6 md:flex md:gap-10">
      <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="inline-block font-bold">تعلم الفرنسية</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className={navigationMenuTriggerStyle()}>
                <Home className="mr-2 h-4 w-4" />
                <span>الرئيسية</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>الدروس</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                      href="/lessons"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-white">جميع الدروس</div>
                      <p className="text-sm leading-tight text-white/90">
                        استكشف جميع دروس القراءة المقطعية-الصوتية للغة الفرنسية
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/alphabet" title="الحروف الفرنسية">
                  تعلم الحروف الفرنسية ونطقها الصحيح
                </ListItem>
                <ListItem href="/lessons/syllables" title="الجداول المقطعية">
                  تعلم قراءة المقاطع الصوتية الفرنسية
                </ListItem>
                <ListItem href="/vocabulary" title="المفردات">
                  تعلم المفردات الأساسية باللغة الفرنسية
                </ListItem>
                <ListItem href="/lessons/grammar" title="القواعد">
                  قواعد اللغة الفرنسية الأساسية
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <GraduationCap className="mr-2 h-4 w-4" />
              <span>التمارين</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/exercises/reading" title="تمارين القراءة">
                  تمارين لتحسين مهارات القراءة
                </ListItem>
                <ListItem href="/exercises/listening" title="تمارين الاستماع">
                  تمارين لتحسين مهارات الاستماع
                </ListItem>
                <ListItem href="/exercises/writing" title="تمارين الكتابة">
                  تمارين لتحسين مهارات الكتابة
                </ListItem>
                <ListItem href="/exercises/speaking" title="تمارين التحدث">
                  تمارين لتحسين مهارات التحدث
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/dashboard" className={navigationMenuTriggerStyle()}>
                <BarChart className="mr-2 h-4 w-4" />
                <span>لوحة التحكم</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

