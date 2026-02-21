import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function SocialSidebar() {
  return (
    <>
      {/* Left - Social Links */}
      <div className="fixed bottom-0 left-6 z-40 hidden md:flex flex-col items-center gap-5 lg:left-10">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <div className="mt-2 h-24 w-px bg-muted-foreground" />
      </div>

      {/* Right - Email */}
      <div className="fixed bottom-0 right-6 z-40 hidden md:flex flex-col items-center gap-5 lg:right-10">
        <a
          href="mailto:hello@gazijarin.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl]"
        >
          hello@gazijarin.com
        </a>
        <div className="mt-2 h-24 w-px bg-muted-foreground" />
      </div>
    </>
  )
}
