import { About } from "@/components/about";
import { AiAssistant } from "@/components/ai-assistant";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Leadership } from "@/components/leadership";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Recommendations } from "@/components/recommendations";
import { Skills } from "@/components/skills";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-5 left-5 z-50 rounded-full border border-border bg-card shadow-lg sm:bottom-6 sm:left-6">
        <ThemeToggle />
      </div>
      <AiAssistant />
    </>
  );
}
