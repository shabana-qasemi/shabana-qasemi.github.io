"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/portfolio";

export function Recommendations() {
  return (
    <section id="recommendations" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <SectionHeading
          icon={Quote}
          eyebrow="Recommendations"
          className="mb-10"
        />

        {testimonials.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-dashed border-border p-10 text-center"
          >
            <Quote className="mx-auto h-6 w-6 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">
              Recommendations from mentors, professors, and internship leadership are on
              their way - check back soon.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Card className="h-full p-6">
                  <Quote className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-sm text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-medium text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <SectionDivider />
      </div>
    </section>
  );
}
