"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Boxes, Code2, Terminal, Wrench, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  Boxes,
  Terminal,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <SectionHeading
          icon={Wrench}
          eyebrow="Technical Skills"
          className="mb-10"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Card className="h-full p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 font-medium tracking-tight">{group.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <SectionDivider />
      </div>
    </section>
  );
}
