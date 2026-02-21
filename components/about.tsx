import Image from "next/image"

const technologies = [
  "Python",
  "Typescript",
  "React.js",
  "Apache Airflow",
  "Spark",
  "AWS Services",
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
                Amazon
              </a>
              , where I take machine learning models from prototype to production.
              Previously, I completed my internship also at{" "}
              <a href="#" className="text-primary hover:underline">
                Amazon
              </a>{" "}
              and a Senior Capstone at{" "}
              <a href="#" className="text-primary hover:underline">
                NASA JPL.
              </a>{" "}
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
              {"Outside of work, I build custom AI tools for fun, read literary fiction, and care a lot about health and fitness."}
            </p>
          </div>

          {/* Image */}
          <div className="relative group mx-auto md:mx-0">
            <div className="relative w-64 h-64 rounded overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Tiger McDaniel"
                fill
                className="object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 hidden bg-white/10 hover:bg-transparent transition-colors duration-300 md:block" />
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
