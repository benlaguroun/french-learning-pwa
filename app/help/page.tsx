import { PageHeader } from "@/components/page-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const faqs = [
    {
      question: "كيف يمكنني تتبع تقدمي في التعلم؟",
      answer:
        "يمكنك تتبع تقدمك من خلال صفحة 'حسابي' أو 'التقدم' حيث ستجد إحصائيات مفصلة عن أدائك ومستوى إتقانك لكل قسم من أقسام التطبيق.",
    },
    {
      question: "هل يمكنني استخدام التطبيق بدون إنترنت؟",
      answer:
        "نعم، يمكنك تحميل التطبيق على جهازك واستخدام معظم الميزات بدون اتصال بالإنترنت. بعض الميزات مثل تحديث التقدم قد تتطلب اتصالاً بالإنترنت.",
    },
    {
      question: "كيف يمكنني تحسين نطقي للكلمات الفرنسية؟",
      answer:
        "يمكنك الاستماع إلى النطق الصحيح بالضغط على أيقونة الصوت بجانب كل كلمة، ثم محاولة تكرار النطق. يمكنك أيضًا استخدام ميزة التعرف على الصوت للتحقق من نطقك.",
    },
    {
      question: "هل هناك اختبارات لقياس مستواي؟",
      answer:
        "نعم، يوفر التطبيق اختبارات في نهاية كل درس وقسم لقياس مستواك وفهمك للمحتوى. يمكنك أيضًا الاستفادة من التحديات الأسبوعية لتقييم تقدمك.",
    },
    {
      question: "كيف يمكنني مساعدة طفلي في استخدام التطبيق؟",
      answer:
        "يمكنك إنشاء حساب مشترك مع طفلك ومتابعة تقدمه. حاول تخصيص وقت يومي للتعلم معًا واستخدام الألعاب التعليمية لجعل التجربة أكثر متعة.",
    },
    {
      question: "هل يمكنني اقتراح محتوى جديد للتطبيق؟",
      answer:
        "بالتأكيد! نرحب باقتراحاتكم لتحسين التطبيق. يمكنك إرسال اقتراحاتك من خلال نموذج الاتصال في صفحة 'المساعدة'.",
    },
  ]

  return (
    <div>
      <PageHeader title="المساعدة والدعم" description="إجابات لأسئلتك الشائعة وكيفية الحصول على المساعدة" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>الأسئلة الشائعة</CardTitle>
              <CardDescription>إجابات للأسئلة الأكثر شيوعًا حول استخدام التطبيق</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-right">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-right">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>تواصل معنا</CardTitle>
              <CardDescription>لم تجد إجابة لسؤالك؟ تواصل معنا مباشرة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" asChild>
                <Link href="/contact">
                  <MessageCircle className="ml-2 h-4 w-4" />
                  إرسال رسالة
                </Link>
              </Button>

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">أوقات الدعم:</p>
                <p>الأحد - الخميس: 9 صباحًا - 5 مساءً</p>
                <p>الجمعة - السبت: مغلق</p>
              </div>

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">البريد الإلكتروني:</p>
                <p>support@frenchlearning.app</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

