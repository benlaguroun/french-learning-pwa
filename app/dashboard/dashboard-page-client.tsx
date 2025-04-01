"use client"
import { PageHeader } from "@/components/page-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { LearningProgress } from "@/components/dashboard/learning-progress"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { AchievementsList } from "@/components/dashboard/achievements-list"

export default function DashboardPageClient() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="لوحة التقدم" description="تابع تقدمك وإنجازاتك في تعلم اللغة الفرنسية" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <DashboardStats />

        <div className="md:col-span-4">
          <LearningProgress />
        </div>

        <div className="md:col-span-2">
          <RecentActivity />
        </div>

        <div className="md:col-span-2">
          <AchievementsList />
        </div>
      </div>
    </div>
  )
}

