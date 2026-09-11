"use client";

import { FolderGit2 } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <SectionHeading icon={FolderGit2} eyebrow="Featured Projects" className="mb-10" />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-10 rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-md">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
              Other builds
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {other.map((project) => (
                <span
                  key={project.id}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                >
                  {project.title}
                  <span className="flex gap-1">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}

        <SectionDivider />
      </div>
    </section>
  );
}
