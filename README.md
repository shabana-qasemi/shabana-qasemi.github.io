# Portfolio

A production-ready developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Radix UI primitives. Deployed as a static site to GitHub Pages.

## Stack

- **Framework:** Next.js 15 (App Router, static export) + React 19 + TypeScript
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
components/
  navbar.tsx, hero.tsx, about.tsx, education.tsx, experience.tsx,
  projects.tsx, project-card.tsx, leadership.tsx, skills.tsx,
  recommendations.tsx, contact.tsx, footer.tsx,
  ai-assistant.tsx, theme-toggle.tsx, theme-provider.tsx
  ui/                  Reusable primitives: button, badge, card, dialog,
                       section-heading, section-divider
data/
  portfolio.ts         ALL editable content - projects, experience, skills,
                       socials, resume link, chat assistant FAQ
lib/
  chat-fallback.ts     Keyword-matching logic for the AI assistant widget
                       (runs entirely in the browser - no server needed)
public/
  resume.pdf           Placeholder - replace with your real resume
.github/workflows/
  deploy.yml           Builds and publishes to GitHub Pages on every push to main
```

**To edit content** (projects, bullet points, links, experience, skills), only touch `data/portfolio.ts`. You should never need to edit component files for text changes.

**Note on the AI assistant:** it answers using simple keyword matching against `assistantFaq` in `data/portfolio.ts` - entirely in the browser, no backend involved. That's a deliberate trade-off for being able to host on GitHub Pages (a static host with no server-side code at all). If you ever want it to understand any phrasing via a real LLM call, that requires a host that can run server code (like Vercel) to keep an API key secret.

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

### 5. Production build (static export)

```bash
npm run build
```

Output goes to the `out/` folder - a fully static site you could open directly in a browser or upload anywhere.

## Personalizing your content

1. Open `data/portfolio.ts` and replace:
   - `personalInfo` - name, role, bio, location, email, GitHub, LinkedIn
   - `projects` - your real projects, tech stacks, metrics, and links
   - `experience` - your internships/roles and bullet points
   - `skillCategories` - adjust to your actual stack
   - `assistantFaq` - the fallback answers for the chat widget
2. Replace `public/resume.pdf` with your actual resume (same filename, or update `personalInfo.resumeUrl`).

## Deploying (GitHub Pages)

This repo is meant to be named exactly `<your-github-username>.github.io` - that's what gives you the clean root URL (e.g. `https://shabana-qasemi.github.io`) instead of a project-page URL with a path suffix.

1. Push to the `main` branch of that repo.
2. In the repo's **Settings → Pages**, set "Build and deployment → Source" to **GitHub Actions** (one-time setup).
3. The included workflow (`.github/workflows/deploy.yml`) builds the static export and publishes it automatically on every push to `main`.

No manual build/upload step needed after that first-time setup - just `git push` and the live site updates in a minute or two.

## Accessibility notes

- Skip-to-content link, semantic landmarks (`header`, `main`, `footer`, `nav`)
- Visible focus rings on all interactive elements
- `prefers-reduced-motion` respected globally (see `app/globals.css`)
- Color contrast tuned against WCAG AA in both themes
