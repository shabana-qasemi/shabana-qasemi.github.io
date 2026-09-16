import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { personalInfo } from "@/data/portfolio";

import "./globals.css";

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.role}`,
  description: personalInfo.tagline,
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: personalInfo.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: personalInfo.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
