"use client";

import { FolderGit2 } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <SectionHeading
          icon={FolderGit2}
          eyebrow="Featured Projects"
          className="mb-10"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <SectionDivider />
      </div>
    </section>
  );
}
