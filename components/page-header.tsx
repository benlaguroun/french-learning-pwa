import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
  title: string
  description?: string
  badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="mb-8">
      {badge && (
        <Badge variant="outline" className="mb-2">
          {badge}
        </Badge>
      )}
      <h1 className="mb-2 scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}

