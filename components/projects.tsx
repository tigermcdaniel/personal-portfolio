import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "no man's land",
    description:
      "A third-person survival-mode game where you battle against time and space to return to Earth.",
    tech: "C# (UNITY)",
    image: "/images/project-game.jpg",
    github: "#",
    external: "#",
  },
  {
    title: "tall tales",
    description:
      "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
    tech: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
    image: "/images/project-stories.jpg",
    github: "#",
    external: "#",
  },
  {
    title: "portfolio.js",
    description:
      "A small JS library that helps with clear and succinct data presentation.",
    tech: "NODE.JS (EXPRESS.JS)",
    image: "/images/project-portfolio.jpg",
    github: "#",
    external: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground whitespace-nowrap">
            <span className="font-mono text-lg text-primary font-normal">03.</span>{" "}
            <span className="font-mono text-primary">/</span> pet projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof featuredProjects)[0]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-4">
      {/* Image */}
      <div
        className={`relative md:col-span-7 ${
          isEven ? "md:col-start-1" : "md:col-start-6"
        } row-start-1`}
      >
        <a href={project.external} className="block relative group">
          <div className="relative aspect-video rounded overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </a>
      </div>

      {/* Content */}
      <div
        className={`relative md:col-span-6 ${
          isEven ? "md:col-start-7 md:text-right" : "md:col-start-1 md:text-left"
        } row-start-1 z-10 p-6 md:p-0`}
      >
        <p className="mb-1 font-mono text-sm text-primary">Featured Project</p>
        <h3 className="mb-4 text-2xl font-bold text-foreground">
          {project.title}
        </h3>
        <div className="mb-4 rounded bg-card p-5 shadow-xl text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </div>
        <p className="mb-4 font-mono text-xs text-muted-foreground tracking-wider">
          {project.tech}
        </p>
        <div className={`flex gap-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
          <a
            href={project.github}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="GitHub repository"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={project.external}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="External link"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
