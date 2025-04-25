"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Database, Server, Table } from "lucide-react"

export default function SupabaseSkills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const supabaseSkills = [
    { name: "Authentication", level: 80, icon: <Database className="h-4 w-4 text-teal-500" /> },
    { name: "Database Management", level: 78, icon: <Table className="h-4 w-4 text-teal-500" /> },
    { name: "Realtime Subscriptions", level: 75, icon: <Server className="h-4 w-4 text-teal-500" /> },
  ]

  return (
    <Card className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-teal-100 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 109 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                fill="#14b8a6"
              />
              <path
                d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                fill="#14b8a6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="53.9738"
                  y1="40.0627"
                  x2="94.1635"
                  y2="80.772"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#14b8a6" stopOpacity="0" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <CardTitle>Supabase</CardTitle>
        </div>
        <CardDescription>Open source Firebase alternative</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {supabaseSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress
                value={skill.level}
                className="h-2"
                indicatorClassName={`${isVisible ? "transition-all duration-1000 ease-out" : "w-0"}`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
