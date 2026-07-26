"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { education, personalInfo, priorOrganizations, socialLinks } from "@/data/portfolio";

const iconMap = { Github, Linkedin, Mail } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-10"
    >
      <div
        className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent/40 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[34rem] w-[34rem] rounded-full bg-accent2/35 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-10rem] left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent/25 to-accent2/25 blur-[120px]"
        aria-hidden
      />
      <div className="bg-noise pointer-events-none absolute inset-0" aria-hidden />

      <div className="container relative flex flex-col items-center text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-sm font-medium uppercase tracking-[0.25em] text-accent"
        >
          {personalInfo.role}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-4 text-balance bg-gradient-to-r from-accent to-accent2 bg-clip-text font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-transparent sm:text-7xl lg:text-8xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5" />
            {education.school} - Computer Science
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {personalInfo.location}
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mask-fade-x mt-5 w-full max-w-xs overflow-hidden sm:max-w-md"
        >
          <motion.div
            className="flex w-max items-center gap-6 whitespace-nowrap text-xs font-medium uppercase tracking-wide text-muted-foreground/70"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            {[...priorOrganizations, ...priorOrganizations].map((org, i) => (
              <span key={i} className="flex items-center gap-6">
                {org}
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" variant="accent">
            <a href="#projects">
              See What I&apos;ve Built <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Let&apos;s Connect</a>
          </Button>

          <div className="ml-1 flex items-center gap-1">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = iconMap[icon as keyof typeof iconMap];
              return (
                <Button key={label} asChild size="icon" variant="ghost" aria-label={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Icon />
                  </a>
                </Button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
