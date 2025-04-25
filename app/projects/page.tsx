import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "NLP-Powered Resume Ranking System",
      description:
        "Developed a NLP-powered resume ranking system using Named Entity Recognition (NER) and tokenization to match resumes with job descriptions. Built the backend with Python (Flask) and integrated NLP models for text processing. Collaborated in a team of 5, ensuring seamless API communication between frontend (React/Vite) and backend. Implemented database solutions for storing and retrieving resume/job data efficiently.",
      image: "/images/resume-ranking-project.jpeg",
      tags: ["Python", "Flask", "NLP", "React", "Vite", "Database"],
      type: "Group Project",
      date: "August 2024 - Present",
      links: {
        github: null,
        live: null,
      },
    },
    {
      id: 2,
      title: "Currency Converter Web App",
      description:
        "Created a web application using Node.js libraries for fetching live currency exchange rates from Frankfurter data API. The app allows users to convert between different currencies using real-time exchange rates.",
      image: "/images/currency-converter-project.jpeg",
      tags: ["Node.js", "JavaScript", "API Integration", "Web Development"],
      type: "Personal Project",
      date: "2023",
      links: {
        github: null,
        live: "http://v0-currency-converter-mauve.vercel.app",
      },
    },
    {
      id: 3,
      title: "Fraud Detection Web App",
      description:
        "Using Next.js, Node.js and TensorFlow.js libraries to create a web app which can be used by small scale E-commerce companies to track their transactions of payments done using the bank. It uses a TensorFlow trained model to detect fraudulent transactions.",
      image: "/images/fraud-detection-project.webp",
      tags: ["Next.js", "Node.js", "TensorFlow.js", "Machine Learning", "E-commerce"],
      type: "Personal Project",
      date: "2023 - Present",
      links: {
        github: null,
        live: null,
      },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-muted-foreground mb-8">A collection of my academic and personal projects</p>

        <div className="space-y-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="h-64 md:h-80 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-teal-500/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-teal-500/60 flex items-center justify-center text-white">
                        View
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{project.type}</Badge>
                    <Badge variant="outline">{project.date}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.links.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </Link>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button asChild size="sm">
                      <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Live
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
