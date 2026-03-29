import { Speaker } from "../types";

interface SpeakerCardProps {
  speaker: Speaker;
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="group border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-200">
      <div className="text-3xl mb-4">{speaker.icon}</div>
      <p className="font-heading font-bold text-[15px] text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
        {speaker.name}
      </p>
      <p className="text-[#4285F4] text-xs font-semibold mb-1.5">{speaker.role}</p>
      <p className="text-gray-400 text-xs mb-5 font-body">{speaker.twitter}</p>
      <a
        href="#"
        className="text-[#4285F4] text-[13px] font-medium hover:underline font-body"
      >
        View Profile ›
      </a>
    </div>
  );
}