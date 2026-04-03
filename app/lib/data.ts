import { Speaker, ScheduleItem } from "../types";

export const speakers: Speaker[] = [
  { name: "Ahmad Areous", role: "Design", twitter: "@itsareous", icon: "🎭" },
  { name: "Agbadi Lawal", role: "Software Development + AI", twitter: "@MilekeKolawole", icon: "🔧" },
  { name: "Kolapo Imam", role: "General AI", twitter: "@wonloluwa", icon: "🌐" },
  { name: "Quyum Kehinde", role: "Software Development + AI", twitter: "@HenryJerry", icon: "⚡" },
  { name: "Daniel Olowoniyi", role: "Software Development + AI", twitter: "@Lanchestee", icon: "🚀" },
  { name: "Toyib Abubakri (Kuulbrand)", role: "Design", twitter: "@Lanchestee", icon: "🚀" },
  { name: "Firdaous Isiaq", role: "Creative", twitter: "@Lanchestee", icon: "🚀" },
  { name: "Henry Mgbechi", role: "Creative", twitter: "@Lanchestee", icon: "🚀" },
  { name: "HMercy Thaddeus", role: "Creative", twitter: "@Lanchestee", icon: "🚀" },
];

export const schedule: ScheduleItem[] = [
  { time: "09:30 - 09:40", title: "Introduction and Program of Event", color: "#4285F4" },
  { time: "09:40 - 10:00", title: "Host crowd engagement", color: "#EA4335" },
  { time: "10:00 - 10:25", title: "Building Custom MCP Tooling for Go with Gemini CLI - Mileke Kolawole", color: "#34A853" },
  { time: "10:30 - 11:15", title: "Building with Google AI Studio - Areous", color: "#4285F4", highlight: true },
  { time: "11:15 - 11:30", title: "Ice Breaker", color: "#9E9E9E" },
  { time: "11:30 - 12:15", title: "Building Browser Extensions with AI - Ayololuwa Isaiah", color: "#34A853" },
  { time: "12:15 - 12:20", title: "Short Break (5 Min)", color: "#9E9E9E" },
  { time: "12:20 - 01:05", title: "Codelab: Getting Started with Google Antigravity - Ahmed Olarenwaju (Ahmzzy)", color: "#FBBC04" },
  { time: "01:05 - 01:15", title: "Product Showcase - Daniel Olowoniyi", color: "#9E9E9E" },
  { time: "01:15 - 02:00", title: "Buildathon Session", color: "#4285F4", highlight: true },
  { time: "02:00 - 02:15", title: "Rapid Demo", color: "#FBBC04" },
  { time: "02:15 - 03:00", title: "Networking & Wrap up", color: "#34A853" },
];

export const hashtags = ["#BuildWithAI", "#GDGOCUnilorin", "#BuildInPublic", "#GeminiAI"];

export const samplePrompts = [
  { label: "LEARNING", text: "Just shipped my first AI project at #BuildWithAI @GDGOCUnilorin 🚀" },
  { label: "BUILDING", text: "The AI energy in Ilorin is unmatched! 🔥🤖 #BuildWithAI" },
  { label: "NETWORKING", text: "Grateful for insights from our speakers at #BuildWithAI @GDGOCUnilorin 🙌" },
];