"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Network } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
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

          <ul className="space-y-2 text-[15px] text-muted-foreground">
            {project.metrics.map((metric) => (
              <li key={metric} className="flex gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{metric}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
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
                  <Github /> Code
                </a>
              </Button>
            )}

            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="ghost">
                  <Network /> Architecture
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{project.title} - System Architecture</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>
                <ol className="space-y-3 text-sm">
                  {project.architecture.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                        {i + 1}
                      </span>
                      <span className="pt-0.5 text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
