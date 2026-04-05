import { Speaker, ScheduleItem } from "../types";

export const TARGET_DATE = new Date("2026-04-11T14:00:00");

export function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0 };
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  return { d, h, m };
}

export const speakers: Speaker[] = [
  // { name: "Kolapo Imam", role: "General Track", twitter: "", twitterProfile: "", icon: "🌐", image: "/speakers/kolapo-avatar.png" },
  { name: "Agbadi Lawal", role: "Software Development", twitter: "", twitterProfile: "https://www.linkedin.com/in/lawal-a-a322251a6/", icon: "🔧", image: "/speakers/agbadi_lawal.jpg" },
  { name: "Daniel Olowoniyi", role: "Software Development", twitter: "", twitterProfile: "https://x.com/iamdanztee", icon: "🚀", image: "/speakers/daniel-olowoniyi.jpg" },
  { name: "Quyum Kehinde", role: "Software Development", twitter: "", twitterProfile: "https://www.linkedin.com/in/quyumkehinde/", icon: "⚡", image: "/speakers/Quyum-Kehinde.PNG" },
  { name: "Firdaous Isiaq", role: "Creative", twitter: "", twitterProfile: "https://www.linkedin.com/in/firdaous-isiaq-103760314/", icon: "🎨", image: "/speakers/Firdaous.jpeg" },
  { name: "Henry Mgbechi", role: "Creative", twitter: "", twitterProfile: "https://www.linkedin.com/in/henry-mgbechi-2a38b31b2/", icon: "🎬", image: "/speakers/Henry.PNG" },
  { name: "Mercy Thaddeus", role: "Creative", twitter: "", twitterProfile: "https://x.com/global_techgirl", icon: "📸", image: "/speakers/Mercy-Thadeus.jpg" },
  { name: "Areous Ahmad", role: "Design", twitter: "", twitterProfile: "https://x.com/itzareous", icon: "🎭", image: "/speakers/ahmad_areous.jpg" },
  { name: "Toyyib Abubakri (Kuulbrand)", role: "Design", twitter: "", twitterProfile: "https://www.linkedin.com/in/toyib-abubakri-kuulbrand/", icon: "🖌️", image: "/speakers/toyib_abubakri.jpg" },
];

export const schedule: ScheduleItem[] = [
  { time: "09:30 - 10:00", title: "Arrival and Introductions", color: "#4285F4" },
  { time: "10:00 - 10:45", title: "General Track: Keynote - Kolapo Imam", color: "#EA4335", highlight: true },
  { time: "11:00 - 11:45", title: "[Software Track] Building with Google AI tools - Agbadi Lawal", color: "#34A853" },
  { time: "11:45 - 12:30", title: "[Software Track] Technical Session - Daniel Olowoniyi & Qayyum", color: "#4285F4" },
  { time: "12:30 - 01:15", title: "[Creative/Design Track] Firdaous, Henry, Areous & Toyyib", color: "#34A853" },
  { time: "01:15 - 01:45", title: "Product Showcase & Student Exhibition", color: "#FBBC04", highlight: true },
  { time: "01:45 - 02:45", title: "Buildathon Session & Networking", color: "#4285F4" },
  { time: "02:45 - 03:00", title: "Awards & Wrap up", color: "#34A853" },
];

export const hashtags = ["#BuildWithAI", "#GDGOCUnilorin", "#BuildInPublic", "#GeminiAI"];

export const samplePrompts = [
  { label: "LEARNING", text: "Just shipped my first AI project at #BuildWithAI @GDGOCUnilorin 🚀" },
  { label: "BUILDING", text: "The AI energy in Ilorin is unmatched! 🔥🤖 #BuildWithAI" },
  { label: "NETWORKING", text: "Grateful for insights from our speakers at #BuildWithAI @GDGOCUnilorin 🙌" },
];