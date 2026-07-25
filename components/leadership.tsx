"use client";

import { motion } from "framer-motion";
import { HeartHandshake, MapPin, Users } from "lucide-react";

import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <SectionHeading
          icon={HeartHandshake}
          eyebrow="Leadership & Involvement"
          className="mb-10"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {leadership.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium tracking-tight text-foreground">{item.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.startDate} - {item.endDate}
                </span>
              </div>
              <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  {item.organization}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              </p>

              <ul className="mt-4 space-y-1.5 text-[15px] text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <SectionDivider />
      </div>
    </section>
  );
}
