"use client"

import { useState } from "react"

const experiences = [
  {
    company: "Amazon",
    title: "Software Engineer",
    period: "JAN 2024 - PRESENT",
    bullets: [
      "As an SDE in Amazon’s Prime Finance org, I lead the design, development, and maintenance of scalable full-stack applications.",
      "I collaborate closely with scientists to build and operationalize ML models, while optimizing automation pipelines that drive data-informed financial decisions.",
    ],
  },
  {
    company: "NASA JPL - Senior Capstone",
    title: "Project Lead / Software Engineer",
    period: "JAN 2022 - MAY 2023",
    bullets: [
      "As Project Manager and Software Engineer, I led the full-stack development of a high-fidelity 3D spacecraft simulation for NASA’s Jet Propulsion Laboratory (JPL) during a year-long senior capstone. ",
      "Working closely with a team of six, we delivered a robust simulation tool that supported ongoing research at NASA JPL.",
    ],
  },
  {
    company: "Amazon - Internship",
    title: "Software Engineer Intern ",
    period: "MAY 2022 - AUGUST 2022",
    bullets: [
      "As an SDE Intern on the Amazon Robotics Scout Simulation team, I worked on C++delopment to enhance 3D visualization software supporting autonomous delivery systems.",
      "My contributions improved simulation capabilities critical to real-world testing and deployment of Amazon’s robotic technologies.",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const active = experiences[activeTab]

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground whitespace-nowrap">
            <span className="font-mono text-lg text-primary font-normal">02.</span>{" "}
            <span className="font-mono text-primary">/</span> experience
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-5 py-3 text-left font-mono text-sm transition-colors ${
                  activeTab === i
                    ? "text-primary bg-primary/10 border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-b-2 md:border-b-0 md:border-l-2 border-transparent md:-ml-px"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[300px]">
            <h3 className="text-xl font-semibold text-foreground">
              {active.title}{" "}
              <span className="text-primary">@ {active.company}</span>
            </h3>
            <p className="mt-1 mb-6 font-mono text-sm text-muted-foreground">
              {active.period}
            </p>
            <ul className="space-y-4">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 text-primary shrink-0">{">"}</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
