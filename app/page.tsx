import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { OtherProjects } from "@/components/other-projects"
import { SocialSidebar } from "@/components/social-sidebar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main className="mx-auto max-w-6xl">
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <OtherProjects />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
