"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BotMessageSquare, MessageCircle, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "What have you built?",
  "What's your tech stack?",
  "Are you available for internships?",
];

const initialMessage: Message = {
  role: "assistant",
  content: `Hi, I'm ${personalInfo.name}'s portfolio assistant. Ask me about their projects, stack, or experience - or say "take me to projects" and I'll jump you there.`,
};

const sectionTargets: { id: string; keywords: string[] }[] = [
  { id: "about", keywords: ["about"] },
  { id: "education", keywords: ["education", "school", "college", "degree"] },
  { id: "experience", keywords: ["experience", "work history", "internship", "job"] },
  { id: "projects", keywords: ["project"] },
  { id: "leadership", keywords: ["leadership", "involvement", "volunteer"] },
  { id: "skills", keywords: ["skill", "tech stack", "toolkit"] },
  { id: "recommendations", keywords: ["recommendation", "testimonial"] },
  { id: "contact", keywords: ["contact", "connect", "reach out"] },
];

const navTriggers = [
  "take me to",
  "go to",
  "show me",
  "navigate to",
  "scroll to",
  "jump to",
  "where is",
  "where can i find",
  "can i see",
];

function findNavigationTarget(message: string): string | null {
  const normalized = message.toLowerCase();
  if (!navTriggers.some((trigger) => normalized.includes(trigger))) return null;

  for (const section of sectionTargets) {
    if (section.keywords.some((kw) => normalized.includes(kw))) {
      return section.id;
    }
  }
  return null;
}

export function AiAssistant() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([initialMessage]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");

    const targetId = findNavigationTarget(trimmed);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `On it - scrolling you to the ${targetId} section now.` },
      ]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "Something went wrong - please try again." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I couldn't reach the server. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mb-3 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:w-96"
            role="dialog"
            aria-label="AI portfolio assistant"
          >
            <div className="flex items-center gap-2.5 border-b border-border px-4 py-3.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                <BotMessageSquare className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium leading-none">Portfolio Assistant</p>
                <p className="mt-1 text-xs text-muted-foreground">Ask about my work</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close assistant"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-secondary px-3.5 py-2.5">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {messages.length < 3 && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                aria-label="Message"
                className="h-10 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none ring-ring transition-shadow focus-visible:ring-2"
              />
              <Button type="submit" size="icon" variant="accent" aria-label="Send" disabled={loading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        variant="accent"
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 shadow-lg"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>
    </div>
  );
}
