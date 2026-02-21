"use client"

import { useState } from "react"
import { Folder, Github, ExternalLink } from "lucide-react"

const otherProjects = [
  {
    title: "AI Fitness Tracker",
    description:
      "An application with AI integration that allowes the user to track their fitness goals and progress.",
    tech: "TypeScript, Vercel, V0",
    github: "https://github.com/tigermcdaniel/fitness-tracker-with-ai",
    external: "https://v0-fitness-tracker-with-ai.vercel.app/"
  },
  {
    title: "Dynamic Frontend Creation",
    description:
      "An application that dynamically creates frontend components based on user input using AI integrations.",
    tech: "React, V0 API, Dynamic Rendering",
    github: "https://github.com/tigermcdaniel/auto-frontend-chat-ls",
    external: "https://v0-clone-chat-gpt-fawn.vercel.app/",
  },
  {
    title: "Sky Hopper Planner",
    description:
      "A chat interface with AI integration that assists the user in planning their next flight with user friendly custom UI components.",
    tech: "Loveable",
    github: "https://github.com/tigermcdaniel/sky-hopper-planner?tab=readme-ov-file",
  },
  {
    title: "Dynamic Post Generator",
    description:
      "A simple script that takes in a prompt and base images to generate an informative post for a given social media platform.",
    tech: "Javascript, ChatGTP API",
    github: "https://github.com/tigermcdaniel/postGenerator",
  },
  {
    title: "Watt2Buy",
    description:
      "A simple web application that assists the user to find a product to purchase based on the cost of a given appliance and its wattage usage.",
    tech: "HTML, CSS, Javascript",
    github: "https://github.com/tigermcdaniel/Watt2Buy",
  },
]

export function OtherProjects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? otherProjects : otherProjects.slice(0, 3)

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="mb-10 text-2xl font-bold text-foreground">
          Other Noteworthy Projects
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded bg-card p-6 text-left shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Top */}
              <div className="mb-6 flex items-center justify-between">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="External link"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <h4 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <p className="font-mono text-xs text-muted-foreground">
                {project.tech}
              </p>
            </div>
          ))}
        </div>

        {otherProjects.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-10 rounded border border-primary px-6 py-3 font-mono text-sm text-primary hover:bg-primary/10 transition-colors"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  )
}
