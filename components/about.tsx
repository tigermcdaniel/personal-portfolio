import Image from "next/image"

const technologies = [
  "Python",
  "Typescript",
  "React.js",
  "Java",
  "Javascript ES6+",
  "C#",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="01" title="about me" />

        <div className="flex flex-col gap-12 md:flex-row">
          {/* Text */}
          <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am currently a <span className="text-foreground font-semibold">Software Engineer</span> at{" "}
              <a href="#" className="text-primary hover:underline">
                Google
              </a>
              , where I help build autobidder models that make Google Search money.
              Previously, I was at{" "}
              <a href="#" className="text-primary hover:underline">
                Amazon
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Pinterest.
              </a>{" "}
              At the same time, I am undertaking a part-time{" "}
              <span className="text-foreground font-semibold">{"Master's of Science"}</span> in{" "}
              <span className="text-foreground font-semibold">Software Engineering</span> at{" "}
              <a href="#" className="text-primary hover:underline">
                University of Oxford
              </a>
              .
            </p>
            <p>Here are some technologies I have been working with:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary">{">"}</span>
                  {tech}
                </li>
              ))}
            </ul>
            <p>
              {"Outside of work, I'm nerdy about tech gadgets, love literary fiction, and play way too many battle royale games. Oh, I make content too."}
            </p>
          </div>

          {/* Image */}
          <div className="relative group mx-auto md:mx-0">
            <div className="relative w-64 h-64 rounded overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Gazi Jarin"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="absolute top-4 left-4 w-64 h-64 rounded border-2 border-primary -z-10 group-hover:top-3 group-hover:left-3 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground whitespace-nowrap">
        <span className="font-mono text-lg text-primary font-normal">
          {number}.
        </span>{" "}
        <span className="font-mono text-primary">/</span> {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
