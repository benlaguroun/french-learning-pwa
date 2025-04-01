import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function SettingsPage() {
  return (
    <div>
      <PageHeader title="الإعدادات" description="تخصيص تجربة التعلم الخاصة بك" />

      <Tabs defaultValue="general" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="appearance">المظهر</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات عامة</CardTitle>
              <CardDescription>إدارة إعدادات التطبيق العامة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>وضع عدم الاتصال</Label>
                    <p className="text-sm text-muted-foreground">تنزيل المحتوى للاستخدام بدون إنترنت</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تشغيل الصوت تلقائيًا</Label>
                    <p className="text-sm text-muted-foreground">تشغيل نطق الكلمات تلقائيًا عند عرضها</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>مستوى الصعوبة</Label>
                  <Select defaultValue="beginner">
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المستوى" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">مبتدئ</SelectItem>
                      <SelectItem value="intermediate">متوسط</SelectItem>
                      <SelectItem value="advanced">متقدم</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>سرعة النطق</Label>
                    <span className="text-sm text-muted-foreground">عادي</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={10} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>المظهر</CardTitle>
              <CardDescription>تخصيص مظهر التطبيق</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>الوضع المظلم</Label>
                    <p className="text-sm text-muted-foreground">تفعيل الوضع المظلم للتطبيق</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>الرسوم المتحركة</Label>
                    <p className="text-sm text-muted-foreground">تفعيل الرسوم المتحركة في التطبيق</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>حجم الخط</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحجم" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">صغير</SelectItem>
                      <SelectItem value="medium">متوسط</SelectItem>
                      <SelectItem value="large">كبير</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>سمة اللون</Label>
                  <Select defaultValue="blue">
                    <SelectTrigger>
                      <SelectValue placeholder="اختر اللون" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blue">أزرق</SelectItem>
                      <SelectItem value="purple">بنفسجي</SelectItem>
                      <SelectItem value="green">أخضر</SelectItem>
                      <SelectItem value="orange">برتقالي</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>الإشعارات</CardTitle>
              <CardDescription>إدارة إعدادات الإشعارات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تذكير يومي</Label>
                    <p className="text-sm text-muted-foreground">تلقي تذكير يومي للتعلم</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>إشعارات الإنجازات</Label>
                    <p className="text-sm text-muted-foreground">تلقي إشعارات عند تحقيق إنجاز جديد</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تحديثات المحتوى</Label>
                    <p className="text-sm text-muted-foreground">تلقي إشعارات عند إضافة محتوى جديد</p>
                  </div>
                  <Switch />
                </div>

                <div className="space-y-2">
                  <Label>وقت التذكير</Label>
                  <Select defaultValue="evening">
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الوقت" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">صباحًا (8:00)</SelectItem>
                      <SelectItem value="afternoon">ظهرًا (12:00)</SelectItem>
                      <SelectItem value="evening">مساءً (6:00)</SelectItem>
                      <SelectItem value="night">ليلًا (9:00)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full">حفظ الإعدادات</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

