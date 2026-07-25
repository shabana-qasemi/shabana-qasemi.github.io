"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <SectionHeading
          icon={Briefcase}
          eyebrow="Experience"
          className="mb-10"
        />

        <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.15rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[2.65rem]">
                <span className="h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium tracking-tight text-foreground">{item.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.startDate} - {item.endDate}
                </span>
              </div>

              <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" />
                  {item.company}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              </p>

              <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">{item.summary}</p>

              {item.bullets.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-[15px] text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.tech.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ol>

        <SectionDivider />
      </div>
    </section>
  );
}
