"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { personalInfo, socialLinks } from "@/data/portfolio";

const iconMap = { Github, Linkedin, Mail } as const;

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 shrink-0 text-accent sm:h-7 sm:w-7" aria-hidden />
              <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s Connect
              </h2>
            </div>
            <p className="mt-4 max-w-md text-muted-foreground">
              Internship opportunity, question about a project, or just want
              to say hi - I'd love to hear from you.
            </p>

            <div className="mt-8 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon }) => {
                const Icon = iconMap[icon as keyof typeof iconMap];
                return (
                  <Button key={label} asChild variant="outline" size="sm">
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      <Icon /> {label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none ring-ring transition-shadow focus-visible:ring-2"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none ring-ring transition-shadow focus-visible:ring-2"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-ring transition-shadow focus-visible:ring-2"
                placeholder="Tell me a bit about the opportunity or question..."
              />
            </div>

            <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
              {submitted ? (
                <>
                  Opening your email client <CheckCircle2 />
                </>
              ) : (
                <>
                  Send Message <Send />
                </>
              )}
            </Button>
          </form>
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
}
