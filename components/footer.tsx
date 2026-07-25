import { personalInfo, socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

const iconMap = { Github, Linkedin, Mail } as const;

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium">{personalInfo.name}</p>
          <p className="text-xs text-muted-foreground">
            Building intelligent systems, one shipped feature at a time.
          </p>
        </div>

        <div className="flex items-center gap-1">
          {socialLinks.map(({ label, href, icon }) => {
            const Icon = iconMap[icon as keyof typeof iconMap];
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
