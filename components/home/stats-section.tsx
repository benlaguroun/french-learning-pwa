"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function StatsSection() {
  const [stats, setStats] = useState({
    users: 0,
    lessons: 0,
    exercises: 0,
    reviews: 0,
  })
  const [mounted, setMounted] = useState(false)

  const targetStats = {
    users: 5000,
    lessons: 120,
    exercises: 500,
    reviews: 4.8,
  }

  useEffect(() => {
    setMounted(true)

    const duration = 2000 // Animation duration in ms
    const interval = 10 // Update interval in ms
    const steps = duration / interval

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = Math.min(currentStep / steps, 1)

      setStats({
        users: Math.round(progress * targetStats.users),
        lessons: Math.round(progress * targetStats.lessons),
        exercises: Math.round(progress * targetStats.exercises),
        reviews: Number.parseFloat((progress * targetStats.reviews).toFixed(1)),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <section className="bg-muted/50 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 rounded-xl border bg-card p-6 shadow-sm md:grid-cols-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-primary">{stats.users.toLocaleString()}+</h3>
            <p className="text-sm text-muted-foreground">متعلم نشط</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-primary">{stats.lessons}+</h3>
            <p className="text-sm text-muted-foreground">درس تفاعلي</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-primary">{stats.exercises}+</h3>
            <p className="text-sm text-muted-foreground">تمرين متنوع</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="flex items-center justify-center text-3xl font-bold text-primary">
              {stats.reviews}
              <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
            </h3>
            <p className="text-sm text-muted-foreground">تقييم المستخدمين</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

