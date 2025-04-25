import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, GraduationCap, User } from "lucide-react"
import NeonProfile from "@/components/neon-profile"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <div className="mb-4">
                <NeonProfile src="/images/profile.jpg" alt="Tinotenda Mugabe" width={400} height={400} />
              </div>
              <div className="flex flex-col gap-2">
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-teal-500" />
                <h2 className="text-2xl font-semibold">Profile</h2>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A highly motivated Computer Science student at the Harare Institute of Technology (HIT), seeking an
                    industrial attachment opportunity to apply and enhance my skills in software development, artificial
                    intelligence, and full-stack web and mobile development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    With a strong foundation in Python, Java, Kotlin, TensorFlow, and database systems, along with
                    hands-on experience in frontend (React, Vite) and backend (Node.js, Flask) development, I am
                    confident in my ability to contribute effectively to your team.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-teal-500" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">Harare Institute Of Technology</h3>
                      <span className="text-sm text-muted-foreground">2023 - Present</span>
                    </div>
                    <p className="text-muted-foreground">Currently pursuing a degree in Computer Science</p>
                    <p className="text-sm text-muted-foreground mt-1">Harare, Zimbabwe</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">Mutendi High School (Advanced Level)</h3>
                      <span className="text-sm text-muted-foreground">2021 - 2022</span>
                    </div>
                    <p className="text-muted-foreground">
                      Three 'A' level passes [Pure Mathematics, Geography, Computer Science]
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Masvingo, Zimbabwe</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">Mutendi High School (Ordinary Level)</h3>
                      <span className="text-sm text-muted-foreground">2017 - 2020</span>
                    </div>
                    <p className="text-muted-foreground">
                      10 'O' level passes including Maths, English and Combined Science
                    </p>
                    <p className="text-muted-foreground">
                      National Foundation Certificate in Computer Operations and Packages
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Masvingo, Zimbabwe</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
