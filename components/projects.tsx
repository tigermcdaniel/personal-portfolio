import Image from "next/image"
import { ExternalLink } from "lucide-react"

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const featuredProjects = [
  {
    title: "AI Powered Skin Care",
    description:
      "A modern, AI-powered skincare tracker that provides personalized guidance through intelligent conversation and routine tracking.",
    tech: "TypeScript, React, Next.js, Tailwind CSS, Shadcn UI, V0, ChatGTP, Supabase, Vercel",
    image: "/images/project-skin-care.jpg",
    video: "/demo-videos/project-skincare-app.mov",
    github: "https://github.com/tigermcdaniel/skin-care-app",
    external: "https://v0-skin-care-app-swart.vercel.app/",
  },
  {
    title: "Social Media Analytics",
    description:
      "A dashboard displaying social media analytics for a given user. All data is fetch via the Instagram API and stored in a supabase database.",
    tech: "Instagram API, V0, Vercel, Supabase",
    image: "/images/project-social-media-analyst.jpg",
    github: "https://github.com/tigermcdaniel/ai-social-strategist",
    external: "#",
  },
  {
    title: "chat ui",
    description:
      "A small React JS library for Chat UIs to leverage for components within chat interfaces.",
    tech: "React, Typescript, V0, Vercel",
    image: "/images/project-react-library.jpeg",
    github: "https://github.com/tigermcdaniel/chat-ui",
    external: "https://v0-llm-ui-clone-7km6fgt14-tigermcdaniel-6224s-projects.vercel.app/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground whitespace-nowrap">
            <span className="font-mono text-lg text-primary font-normal">03.</span>{" "}
            <span className="font-mono text-primary">/</span> projects
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
  const hasVideo = "video" in project && project.video

  const contentCol = isEven ? "md:col-start-7 md:col-span-6 md:text-right" : "md:col-start-1 md:col-span-6 md:text-left"
  const mediaCol = isEven ? "md:col-start-1 md:col-span-7" : "md:col-start-6 md:col-span-7"

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-4">
      {/* 1. Title — mobile first; desktop row 1 in content column */}
      <div className={`relative order-1 md:row-start-1 ${contentCol} z-10`}>
        <p className="mb-1 font-mono text-sm text-primary">Featured Project</p>
        <h3 className="mb-4 text-2xl font-bold text-foreground">
          {project.title}
        </h3>
      </div>

      {/* 2. Description — mobile second; desktop row 2 in content column */}
      <div className={`relative order-2 md:row-start-2 ${contentCol} z-10 p-0 md:p-0`}>
        <div className="rounded bg-card p-5 shadow-xl text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </div>
      </div>

      {/* 3. Asset — mobile third; desktop media column spanning rows 1–3 */}
      <div className={`relative order-3 md:row-start-1 md:row-end-4 ${mediaCol}`}>
        <a href={project.external} className="block relative group">
          <div className="relative aspect-video rounded overflow-hidden">
            {hasVideo ? (
              <>
                <img
                  src={project.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  aria-hidden
                />
                <video
                  src={project.video}
                  poster={project.image}
                  className="absolute inset-0 h-full w-full object-cover"
                  playsInline
                  loop
                  muted
                  autoPlay
                  aria-label={project.title}
                />
              </>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 hidden bg-primary/20 group-hover:bg-transparent transition-colors duration-300 md:block" />
          </div>
        </a>
      </div>

      {/* 4. Tech + links — mobile fourth; desktop row 3 in content column */}
      <div className={`relative order-4 md:row-start-3 ${contentCol} z-10`}>
        <p className="mb-4 font-mono text-xs text-muted-foreground tracking-wider">
          {project.tech}
        </p>
        <div className={`flex gap-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
          <a
            href={project.github}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="GitHub repository"
          >
            <GitHubIcon className="h-5 w-5" />
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
