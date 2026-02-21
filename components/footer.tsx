import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="py-6 px-6 text-center">
      {/* Mobile social links */}
      <div className="mb-4 flex justify-center gap-5 md:hidden">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Built and designed by Gazi Jarin.
      </p>
      <p className="font-mono text-xs text-muted-foreground">
        All rights reserved. &copy;
      </p>
    </footer>
  )
}
