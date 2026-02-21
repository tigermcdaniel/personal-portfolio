"use client"

import { useState } from "react"

const experiences = [
  {
    company: "Google",
    title: "Software Engineer",
    period: "JAN 2025 - PRESENT",
    bullets: [
      "Built and launched large-scale machine learning-driven conversion autobidding models at Google scale, influencing bidding decisions across millions of advertisers and users",
      "Led end-to-end model development (data, training, evaluation, and production launch) for Proxybidder ML systems, directly driving multi-million-dollar revenue impact through improved conversion efficiency",
    ],
  },
  {
    company: "Pinterest",
    title: "Software Engineer",
    period: "JUN 2023 - DEC 2024",
    bullets: [
      "Developed and optimized recommendation algorithms powering content discovery for 400M+ monthly active users",
      "Built data pipelines processing billions of user interactions to improve personalization and engagement metrics",
    ],
  },
  {
    company: "Amazon",
    title: "Software Development Engineer",
    period: "MAY 2022 - MAY 2023",
    bullets: [
      "Designed and implemented microservices for Amazon's e-commerce platform handling millions of daily transactions",
      "Collaborated with cross-functional teams to ship features that improved customer checkout experience and reduced cart abandonment",
    ],
  },
  {
    company: "Wattpad",
    title: "Software Engineer Intern",
    period: "JAN 2021 - AUG 2021",
    bullets: [
      "Built full-stack features for a storytelling platform with 90M+ users, improving reader engagement and content discovery",
      "Developed REST APIs and React components to support new social features for the community platform",
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
