# Portfolio

A production-ready developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Radix UI primitives.

## Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS with CSS-variable-based theming (light/dark)
- **Components:** shadcn/ui-style primitives on top of Radix UI (`components/ui/`)
- **Animation:** Framer Motion (scroll reveals, hover states, mobile menu transitions)
- **Icons:** lucide-react
- **Theme:** next-themes (class-based dark mode, system-aware, no flash)

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, ThemeProvider
  page.tsx             Composes all sections
  globals.css          Design tokens (light/dark) + base styles
  api/chat/route.ts    Chat endpoint for the AI assistant widget
components/
  navbar.tsx, hero.tsx, about.tsx, projects.tsx, project-card.tsx,
  experience.tsx, skills.tsx, contact.tsx, footer.tsx,
  ai-assistant.tsx, theme-toggle.tsx, theme-provider.tsx
  ui/                  Reusable primitives: button, badge, card, dialog
data/
  portfolio.ts         ALL editable content — projects, experience, skills,
                       socials, resume link, chat assistant FAQ
public/
  resume.pdf           Placeholder — replace with your real resume
```

**To edit content** (projects, bullet points, links, experience, skills), only touch `data/portfolio.ts`. You should never need to edit component files for text changes.

## Setup

### 1. Prerequisites

You need Node.js 18.18+ and npm. If you don't have them yet (macOS):

```bash
# Install Homebrew if you don't have it: https://brew.sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node
brew install node
```

Verify:

```bash
node -v   # should print v18.18+ or later
npm -v
```

### 2. Install dependencies

From the project root:

```bash
cd ~/portfolio
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

### 4. Type-check and lint (optional but recommended before deploying)

```bash
npm run typecheck
npm run lint
```

### 5. Production build

```bash
npm run build
npm run start
```

## Personalizing your content

1. Open `data/portfolio.ts` and replace:
   - `personalInfo` — name, role, bio, location, email, GitHub, LinkedIn
   - `projects` — your real projects, tech stacks, metrics, and links
   - `experience` — your internships/roles and bullet points
   - `skillCategories` — adjust to your actual stack
   - `assistantFaq` — the fallback answers for the chat widget
2. Replace `public/resume.pdf` with your actual resume (same filename, or update `personalInfo.resumeUrl`).
3. (Optional) Set `ANTHROPIC_API_KEY` in a `.env.local` file (see `.env.example`) to have the "Ask My AI Portfolio Assistant" widget answer with a real LLM call grounded in your portfolio data, instead of the built-in keyword-matched fallback. The site works fully without this key.

## Deploying

### Vercel (recommended, zero-config)

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo at [vercel.com/new](https://vercel.com/new) — it auto-detects Next.js.

### GitHub Pages / static export

The AI assistant's API route (`app/api/chat/route.ts`) requires a server, so it won't work on a purely static export. If you want a fully static deploy, either remove the `AiAssistant` component from `app/page.tsx` or keep it — it will gracefully show an error in chat if the API route isn't reachable, since it fails closed to a fetch error message.

## Accessibility notes

- Skip-to-content link, semantic landmarks (`header`, `main`, `footer`, `nav`)
- Visible focus rings on all interactive elements
- `prefers-reduced-motion` respected globally (see `app/globals.css`)
- Color contrast tuned against WCAG AA in both themes
