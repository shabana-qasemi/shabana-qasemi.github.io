import { NextRequest, NextResponse } from "next/server";

import {
  assistantFaq,
  assistantSystemPrompt,
  experience,
  personalInfo,
  projects,
  skillCategories,
} from "@/data/portfolio";

export const runtime = "edge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function buildPortfolioContext(): string {
  const projectLines = projects
    .map(
      (p) =>
        `- ${p.title}: ${p.tagline} Tech: ${p.techStack.join(", ")}. Impact: ${p.metrics.join("; ")}`
    )
    .join("\n");

  const skillLines = skillCategories
    .map((s) => `- ${s.category}: ${s.skills.join(", ")}`)
    .join("\n");

  const experienceLines = experience
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${e.startDate} - ${e.endDate}): ${e.summary} Highlights: ${e.bullets.join("; ")}`
    )
    .join("\n");

  return `PROJECTS:\n${projectLines}\n\nSKILLS:\n${skillLines}\n\nEXPERIENCE:\n${experienceLines}`;
}

function fallbackAnswer(userMessage: string): string {
  const normalized = userMessage.toLowerCase();
  const match = assistantFaq.find((entry) =>
    entry.keywords.some((kw) => normalized.includes(kw))
  );

  if (match) return match.answer;

  return `I don't have a specific answer for that yet, but you can ask me about ${personalInfo.name}'s projects, tech stack, or experience - or reach out directly through the contact form below.`;
}

export async function POST(req: NextRequest) {
  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = body.messages ?? [];
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");

  if (!lastUserMessage) {
    return NextResponse.json({ error: "No user message provided" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      reply: fallbackAnswer(lastUserMessage.content),
      mode: "fallback",
    });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 300,
        system: `${assistantSystemPrompt}\n\nPORTFOLIO CONTEXT:\n${buildPortfolioContext()}`,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      return NextResponse.json({
        reply: fallbackAnswer(lastUserMessage.content),
        mode: "fallback",
      });
    }

    const data = await response.json();
    const reply: string =
      data.content?.[0]?.type === "text" ? data.content[0].text : fallbackAnswer(lastUserMessage.content);

    return NextResponse.json({ reply, mode: "llm" });
  } catch {
    return NextResponse.json({
      reply: fallbackAnswer(lastUserMessage.content),
      mode: "fallback",
    });
  }
}
