"use client";

import { motion } from "framer-motion";
import { Sparkles, UserRound } from "lucide-react";

import { SectionDivider } from "@/components/ui/section-divider";
import { personalInfo } from "@/data/portfolio";

const facts = [
  {
    icon: Sparkles,
    label: "Currently",
    value: personalInfo.availability,
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <div className="flex items-center gap-3">
              <UserRound className="h-6 w-6 shrink-0 text-accent sm:h-7 sm:w-7" aria-hidden />
              <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                About Me
              </h2>
            </div>
            <p className="mt-5 max-w-xl text-muted-foreground">{personalInfo.tagline}</p>
          </div>

          <dl className="grid content-start gap-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-foreground">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
}
