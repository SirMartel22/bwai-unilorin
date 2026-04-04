import Image from "next/image";

const teamMembers = [
  { name: "Bello Adam", role: "Lead Organizer", twitter: "@Theadambello" },
  { name: "Alaran Khaerat", role: "Co-Lead", twitter: "@_Mo_renikeji" },
  { name: "Usman Sharafa", role: "Technical Support Lead", twitter: "@alexj" },
  { name: "Yusuf Ayodeji", role: "Programs Manager", twitter: "@sarahw" },
  { name: "Sunday Odafe", role: "Design Lead", twitter: "@SundayOdafe1" },
  { name: "AbdulQawi Laniyan", role: "Technical Dev. & Innovation Lead", twitter: "@Devdotun" },
  { name: "Omotomike Ogunyemi", role: "Community Manager", twitter: "@O_tohme" },
  { name: "Bello Latifat", role: "Social Media Manager", twitter: "@emilyd" },
  { name: "Esther Adewoye", role: "Media Lead", twitter: "@emilyd" },
  { name: "Muhammad Mahmud", role: "Technical Lead", twitter: "@cybershaykh" },
  { name: "Omoyeni Taiwo", role: "Founder", twitter: "@Oluwarotimi_" },
];

export default function Team() {
  return (
    <section id="team" className="py-8 md:py-12 px-8 md:px-16 lg:px-20 w-full border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Column */}
        <div className="lg:w-[35%] shrink-0 flex flex-col items-start lg:sticky lg:top-24 self-start z-10">
          <h3 className="font-heading text-[#7C3AED] text-xs font-bold tracking-[0.15em] uppercase mb-6">
            The people behind
          </h3>
          <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            The People<br />Behind This
          </h2>
          <p className="font-body text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-[280px]">
            Students, developers, and community organizers from GDGOC Unilorin. </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-[65%] w-full">
          <div className="mb-6 flex justify-between items-end border-b border-gray-200 dark:border-white/10 pb-4">
            <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">Leadership</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-white dark:bg-black border-[0.7px] border-black dark:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] isolate cursor-pointer"
              >
                {/* Image */}
                <Image
                  src="/speakers/headshot.png"
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Hover Overlay - Visible by default on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 flex flex-col justify-end p-5">
                  <span className="font-heading font-bold text-lg text-white leading-tight mb-1 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    {member.name}
                  </span>
                  <span className="font-mono text-xs text-[#a78bfa] font-semibold tracking-widest transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out">
                    {member.twitter}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
