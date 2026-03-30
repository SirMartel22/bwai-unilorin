import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

// ── Font definitions (Next.js font optimisation — zero layout shift) ─────────
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Build With AI — GDGOC Unilorin",
  description:
    "Event Participant Portal for Build With AI by GDGOC Unilorin. Show the world what you're building.",
  keywords: ["GDG", "AI", "Unilorin", "BuildWithAI", "Google", "Gemini"],
  openGraph: {
    title: "Build With AI — GDGOC Unilorin",
    description: "Show the world what you're building in Ilorin.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}