"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Lock,
  Network,
  Sparkles,
  UtensilsCrossed,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Project } from "@/data/portfolio";

// Purely decorative icon shown in each card's visual-asset frame - swap for a real
// screenshot/GIF per project by replacing this block with an <img>/<video>.
const visualIconMap: Record<string, LucideIcon> = {
  "prep-agent": UtensilsCrossed,
  "radar-production-engineering": Lock,
  "portfolio-site": LayoutTemplate,
  "mandelbrot-set-visualizer": Sparkles,
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const VisualIcon = visualIconMap[project.id] ?? Network;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden">
        {/* Visual asset / mockup frame - replace the icon block with a real screenshot or GIF when available. */}
        <div className="bg-grid relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border/70 bg-gradient-to-br from-accent/15 via-transparent to-accent2/15">
          <div className="absolute left-4 top-3 flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
          </div>
          <span className="absolute right-4 top-3 font-mono text-[11px] text-muted-foreground/60">
            ~/{project.id}
          </span>
          <VisualIcon className="h-12 w-12 text-accent/60" strokeWidth={1.25} aria-hidden />
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle>{project.title}</CardTitle>
            {project.confidential && (
              <Badge variant="outline" className="shrink-0 gap-1">
                <Lock className="h-3 w-3" /> Confidential
              </Badge>
            )}
          </div>
          <CardDescription>{project.tagline}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-5">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="accent">
                {tech}
              </Badge>
            ))}
          </div>

          <div>
            <p className="mb-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
              <Network className="h-3.5 w-3.5" /> System Architecture & Key Decisions
            </p>
            <ul className="space-y-2 text-[15px] text-muted-foreground">
              {project.architecture.map((step) => (
                <li key={step} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            {project.confidential ? (
              <p className="text-xs text-muted-foreground">
                Built inside a proprietary company codebase - source isn&apos;t public, details above are shared at a level appropriate for a portfolio.
              </p>
            ) : (
              <>
                {project.links.demo && (
                  <Button asChild size="sm" variant="accent">
                    <a href={project.links.demo} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRight />
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button asChild size="sm" variant="outline">
                    <a href={project.links.github} target="_blank" rel="noreferrer">
                      <Github /> GitHub Repo
                    </a>
                  </Button>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
