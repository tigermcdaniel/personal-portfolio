"use client"

import { useState } from "react"
import { Folder, Github, ExternalLink } from "lucide-react"

const otherProjects = [
  {
    title: "TDSB Homework Management Interface",
    description:
      "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
    tech: "Python (Flask), Vue.js, Bootstrap, SQL",
    github: "#",
    external: "#",
  },
  {
    title: "Adam A.I.",
    description:
      "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
    tech: "Javascript, HTML / CSS",
    github: "#",
    external: "#",
  },
  {
    title: "Distributed Logging and Monitoring System",
    description:
      "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
    tech: "Node.js (Express.js), React.js, PostgreSQL",
    github: "#",
  },
  {
    title: "Odin Bot",
    description:
      "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
    tech: "Javascript, Node.js, Natural NLP, Telegram API",
    github: "#",
  },
  {
    title: "Game Centre",
    description:
      "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
    tech: "Java, Android Studio",
    github: "#",
  },
  {
    title: "Minimax Stonehenge",
    description:
      "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
    tech: "Python",
    github: "#",
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
