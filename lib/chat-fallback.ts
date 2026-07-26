import { assistantFaq, personalInfo } from "@/data/portfolio";

export function fallbackAnswer(userMessage: string): string {
  const normalized = userMessage.toLowerCase();
  const match = assistantFaq.find((entry) =>
    entry.keywords.some((kw) => normalized.includes(kw))
  );

  if (match) return match.answer;

  return `I don't have a specific answer for that yet, but you can ask me about ${personalInfo.name}'s projects, tech stack, or experience - or reach out directly through LinkedIn or GitHub, linked in the footer.`;
}
