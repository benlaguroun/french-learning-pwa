import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              تعلم الفرنسية
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">منصة تفاعلية لتعلم اللغة الفرنسية بطريقة سهلة وممتعة</p>
            <div className="flex space-x-4 space-x-reverse mt-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">Youtube</span>
              </Button>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  عن المنصة
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الدروس
                </Link>
              </li>
              <li>
                <Link href="/exercises" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  التمارين
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الألعاب
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  التحديات
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">الدعم</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">النشرة البريدية</h3>
            <p className="text-sm text-muted-foreground mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر الأخبار والتحديثات
            </p>
            <div className="flex space-x-2 space-x-reverse">
              <Input type="email" placeholder="البريد الإلكتروني" className="h-9 text-right" />
              <Button size="sm" className="h-9">
                <Mail className="h-4 w-4 ml-2" />
                اشتراك
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} تعلم الفرنسية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

