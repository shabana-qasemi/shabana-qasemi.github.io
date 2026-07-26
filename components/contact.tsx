"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { socialLinks } from "@/data/portfolio";

const iconMap = { Github, Linkedin } as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 shrink-0 text-accent sm:h-7 sm:w-7" aria-hidden />
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s Connect
            </h2>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground">
            Internship opportunity, question about a project, or just want to say hi -
            find me on LinkedIn or GitHub.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = iconMap[icon as keyof typeof iconMap];
              return (
                <Button key={label} asChild variant="accent" size="lg">
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon /> {label}
                  </a>
                </Button>
              );
            })}
          </div>
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
}
