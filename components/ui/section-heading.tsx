"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  icon: Icon,
  eyebrow,
  className,
}: {
  icon: LucideIcon;
  eyebrow: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("flex items-center gap-3", className)}
    >
      <Icon className="h-6 w-6 shrink-0 text-accent sm:h-7 sm:w-7" aria-hidden />
      <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">{eyebrow}</h2>
    </motion.div>
  );
}
