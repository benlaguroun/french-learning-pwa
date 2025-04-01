"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
  description?: string
  subItems?: NavItem[]
}

interface NavItemProps {
  item: NavItem
}

export function NavItem({ item }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

  // Simple link if no subitems
  if (!item.subItems?.length) {
    return (
      <NavigationMenuItem>
        <Link href={item.href} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              isActive && "bg-accent text-accent-foreground",
              "group flex gap-1 items-center",
            )}
          >
            {item.icon && <span className="mr-1 group-hover:text-primary transition-colors">{item.icon}</span>}
            {item.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
  }

  // Dropdown if has subitems
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(isActive && "bg-accent text-accent-foreground", "group flex gap-1 items-center")}
      >
        {item.icon && <span className="mr-1 group-hover:text-primary transition-colors">{item.icon}</span>}
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
          {item.subItems.map((subItem) => (
            <ListItem
              key={subItem.href}
              title={subItem.title}
              href={subItem.href}
              icon={subItem.icon}
              description={subItem.description}
            />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
    icon?: React.ReactNode
    description?: string
  }
>(({ className, title, href, icon, description, ...props }, ref) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            isActive && "bg-accent text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="mr-1">{icon}</span>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          {description && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{description}</p>}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"

