import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">الصفحة غير موجودة</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
      </p>
      <Button asChild>
        <Link href="/" className="flex items-center">
          <Home className="mr-2 h-4 w-4" />
          العودة إلى الصفحة الرئيسية
        </Link>
      </Button>
    </div>
  )
}

