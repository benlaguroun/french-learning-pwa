"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "الجدول 1",
    progress: 100,
  },
  {
    name: "الجدول 2",
    progress: 85,
  },
  {
    name: "الجدول 3",
    progress: 60,
  },
  {
    name: "الجدول 4",
    progress: 45,
  },
  {
    name: "الجدول 5",
    progress: 30,
  },
  {
    name: "الجدول 6",
    progress: 20,
  },
  {
    name: "الجدول 7",
    progress: 10,
  },
  {
    name: "الجدول 8",
    progress: 5,
  },
  {
    name: "الجدول 9",
    progress: 0,
  },
  {
    name: "الجدول 10",
    progress: 0,
  },
]

export function SyllableChart() {
  return (
    <ChartContainer
      config={{
        progress: {
          label: "التقدم",
          color: "hsl(var(--primary))",
        },
      }}
      className="h-[300px]"
    >
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 20,
        }}
      >
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey="progress" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ChartContainer>
  )
}

