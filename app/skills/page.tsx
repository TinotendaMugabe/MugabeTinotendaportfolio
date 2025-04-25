import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
// Import the SupabaseSkills component
import SupabaseSkills from "@/components/supabase-skills"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Languages I've worked with",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "Kotlin", level: 75 },
        { name: "SQL", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "R", level: 65 },
        { name: "Matlab", level: 60 },
        { name: "C#", level: 70 },
      ],
    },
    {
      title: "Web Development",
      description: "Frontend and backend technologies",
      skills: [
        { name: "React", level: 85 },
        { name: "Vite", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      title: "Mobile Development",
      description: "Mobile app development skills",
      skills: [
        { name: "Android Studio", level: 80 },
        { name: "Kotlin for Android", level: 75 },
        { name: "Java for Android", level: 75 },
        { name: "Postman", level: 85 },
      ],
    },
    {
      title: "AI/ML",
      description: "Artificial Intelligence and Machine Learning",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "NLP (Tokenization)", level: 75 },
        { name: "Named Entity Recognition", level: 75 },
      ],
    },
    {
      title: "Databases",
      description: "Database management systems",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase (NoSQL)", level: 75 },
        { name: "Supabase", level: 78 },
      ],
    },
  ]

  // Add the SupabaseSkills component after the skillCategories mapping
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Technical Skills</h1>
        <p className="text-muted-foreground mb-8">An overview of my technical expertise and proficiency levels</p>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Skills</h2>
            <SupabaseSkills />
          </div>
        </div>
      </div>
    </div>
  )
}
