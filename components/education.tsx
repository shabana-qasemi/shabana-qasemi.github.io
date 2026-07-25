"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <SectionHeading
          icon={GraduationCap}
          eyebrow="Education"
          className="mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                <GraduationCap className="h-5 w-5 text-accent" />
                {education.degree}
              </h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span>{education.school}</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {education.location}
                </span>
              </p>
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              {education.graduation}
            </span>
          </div>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Relevant Coursework
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {education.coursework.map((course) => (
                <Badge key={course} variant="accent">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
}
