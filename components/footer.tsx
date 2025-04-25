import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="/" className="font-bold text-lg">
            Tinotenda<span className="text-teal-500">Mugabe</span>
          </Link>
          <p className="text-sm text-muted-foreground">Computer Science Student at Harare Institute of Technology</p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/TinotendaMugabe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/tinotenda-mugabe-8b5bb6292"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:mcdonaldmugs@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Tinotenda Mugabe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
