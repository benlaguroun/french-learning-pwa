import type React from "react"
import Link from "next/link"
import { ArrowLeft, Trophy, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface GameLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  instructions?: string
}

export default function GameLayout({ title, description, children, instructions }: GameLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <Link href="/games">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft size={18} />
            <span className="text-right">العودة إلى الألعاب</span>
          </Button>
        </Link>
        <div className="flex gap-2">
          <Link href="/games/achievements">
            <Button variant="ghost" size="icon">
              <Trophy size={20} />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home size={20} />
            </Button>
          </Link>
        </div>
      </div>

      <Card className="mb-8 overflow-hidden">
        <div className="bg-primary p-4">
          <h1 className="text-2xl font-bold text-primary-foreground text-right">{title}</h1>
          <p className="text-primary-foreground/80 text-right">{description}</p>
        </div>
        {instructions && (
          <div className="p-4 bg-muted text-right border-t">
            <h2 className="font-semibold mb-2">تعليمات:</h2>
            <p>{instructions}</p>
          </div>
        )}
      </Card>

      <div className="space-y-6">{children}</div>
    </div>
  )
}

