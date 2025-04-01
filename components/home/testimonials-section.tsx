"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  const testimonials: Testimonial[] = [
    {
      name: "أحمد محمد",
      role: "طالب جامعي",
      content:
        "ساعدتني المنصة على تعلم الفرنسية بسرعة كبيرة. الدروس مبسطة والتمارين متنوعة ومفيدة جدًا. أحب كثيرًا ميزة النطق والمحادثة التفاعلية.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=أحمد",
    },
    {
      name: "سارة أحمد",
      role: "مهندسة برمجيات",
      content:
        "أفضل منصة لتعلم الفرنسية جربتها حتى الآن. التطبيق سهل الاستخدام والمحتوى ممتاز. أحب تنظيم الدروس والتدرج في الصعوبة. النطق والتمارين الصوتية مفيدة جدًا.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=سارة",
    },
    {
      name: "محمد علي",
      role: "رجل أعمال",
      content:
        "تعلمت الفرنسية في وقت قصير بفضل هذه المنصة. أنصح بها بشدة لمن يريد تعلم اللغة بسرعة وإتقان. ميزة تتبع التقدم والإنجازات تحفزني على الاستمرار في التعلم.",
      rating: 4,
      image: "/placeholder.svg?height=80&width=80&text=محمد",
    },
    {
      name: "نورا سعيد",
      role: "مدرسة",
      content:
        "المنصة رائعة وتحتوي على مجموعة متنوعة من التمارين التي تغطي جميع جوانب اللغة. التطبيق سهل الاستخدام ومصمم بشكل جيد. تجربة تعلم ممتازة!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=نورا",
    },
    {
      name: "خالد إبراهيم",
      role: "طبيب",
      content:
        "المنصة ساعدتني على تعلم المصطلحات الطبية باللغة الفرنسية. المحتوى منظم بشكل جيد والتمارين التفاعلية ممتازة. أنصح بها لكل من يريد تعلم الفرنسية.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=خالد",
    },
  ]

  useEffect(() => {
    setMounted(true)

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  if (!mounted) return null

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-2 inline-flex items-center">
            <Star className="ml-1 h-3 w-3" />
            <span>آراء المستخدمين</span>
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ماذا يقول المتعلمون عنا</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={variants}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full border">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -right-1 -top-1 h-6 w-6 text-primary/20" />
                    <p className="mt-4 text-muted-foreground">"{testimonial.content}"</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

