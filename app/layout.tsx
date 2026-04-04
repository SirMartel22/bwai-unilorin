import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import Script from "next/script";
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

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "BWAI Unilorin 2026 — GDGOC Unilorin",
  description:
    "Event Participant Portal for Build With AI by GDGOC Unilorin. Show the world what you're building.",
  keywords: ["GDG", "AI", "Unilorin", "BuildWithAI", "Google", "Gemini"],
  openGraph: {
    title: "BWAI Unilorin 2026 — GDGOC Unilorin",
    description: "Show the world what you're building in Ilorin.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          // id="theme-switcher"
          strategy="beforeInteractive"
        >
          {/* {`
            (function() {
              try {
                var hour = new Date().getHours();
                var isDark = hour < 6 || hour >= 18;
                if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                  isDark = localStorage.getItem('theme') === 'dark';
                }
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `} */}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} antialiased bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}