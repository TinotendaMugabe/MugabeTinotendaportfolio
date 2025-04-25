import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import NeonProfile from "@/components/neon-profile"
import { Button } from "@/components/ui/button"
import { NeonButton } from "@/components/neon-button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
        <div className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm bg-teal-500 hover:bg-teal-600 text-white">
              Available for Industrial Attachment
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-teal-500 neon-text">Tinotenda Mugabe</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Computer Science student at Harare Institute of Technology with a passion for software development, AI,
              and full-stack web development.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <NeonButton asChild size="lg">
              <Link href="/projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </NeonButton>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Link href="https://github.com/TinotendaMugabe" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/tinotenda-mugabe-8b5bb6292" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:mcdonaldmugs@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full max-w-sm md:max-w-md">
          <NeonProfile src="/images/profile.jpg" alt="Tinotenda Mugabe" width={400} height={400} />
        </div>
      </section>

      <section className="py-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Technical Expertise</h2>
          <p className="text-muted-foreground">
            I specialize in full-stack development, AI/ML, and mobile applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border hover:neon-border transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-muted-foreground">
              Experience with React, Vite, Node.js, Flask, and RESTful APIs to build responsive and dynamic web
              applications.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border hover:neon-border transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <path d="M12 2H2v10h10V2Z"></path>
                <path d="M12 12H2v10h10V12Z"></path>
                <path d="M22 2h-10v20h10V2Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
            <p className="text-muted-foreground">
              Proficient in TensorFlow and NLP techniques including tokenization and Named Entity Recognition.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border hover:neon-border transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-muted-foreground">
              Skilled in Android Studio using Kotlin and Java to create native mobile applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects that showcase my technical abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-card rounded-lg overflow-hidden border shadow-sm group hover:neon-border transition-all duration-300">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
              <Image
                src="/images/resume-ranking-project.jpeg"
                alt="Resume Ranking System"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">NLP-Powered Resume Ranking System</h3>
              <p className="text-muted-foreground mb-4">
                A system that uses Named Entity Recognition and tokenization to match resumes with job descriptions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Flask</Badge>
                <Badge variant="secondary">NLP</Badge>
                <Badge variant="secondary">React</Badge>
              </div>
              <NeonButton asChild variant="outline" size="sm">
                <Link href="/projects">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </NeonButton>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden border shadow-sm group hover:neon-border transition-all duration-300">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
              <Image
                src="/images/currency-converter-project.jpeg"
                alt="Currency Converter"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Currency Converter Web App</h3>
              <p className="text-muted-foreground mb-4">
                A web application that fetches live currency exchange rates from the Frankfurter data API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">API Integration</Badge>
                <Badge variant="secondary">JavaScript</Badge>
              </div>
              <NeonButton asChild variant="outline" size="sm">
                <Link href="http://v0-currency-converter-mauve.vercel.app" target="_blank" rel="noopener noreferrer">
                  View Live <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </NeonButton>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <NeonButton asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </NeonButton>
        </div>
      </section>
    </div>
  )
}
