"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
  description?: string
  subItems?: NavItem[]
}

interface MainNavProps {
  items: NavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MainNavProps) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-72 pr-0">
        <SheetHeader className="border-b pb-4 mb-4">
          <SheetTitle className="text-right">القائمة</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] pr-6">
          <div className="flex flex-col space-y-3 pr-6">
            {items.map((item) => (
              <div key={item.href} className="flex flex-col space-y-3">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-muted-foreground rounded-md px-3 py-2 text-sm font-medium",
                    pathname === item.href && "bg-accent text-accent-foreground",
                    pathname.startsWith(item.href) && item.href !== "/" && "bg-accent/50 text-accent-foreground",
                  )}
                >
                  {item.icon && <span className="ml-2">{item.icon}</span>}
                  {item.title}
                </Link>
                {item.subItems?.length ? (
                  <div className="mr-4 border-r pr-6 pt-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground",
                          pathname === subItem.href && "text-foreground bg-accent/50",
                        )}
                      >
                        {subItem.icon && <span className="ml-2">{subItem.icon}</span>}
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          {children}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

