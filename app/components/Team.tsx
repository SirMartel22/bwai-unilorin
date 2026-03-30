import Image from "next/image";

const teamMembers = [
  { name: "John Doe", role: "Organizer", twitter: "@johndoe" },
  { name: "Jane Smith", role: "Design Lead", twitter: "@janesmith" },
  { name: "Alex Johnson", role: "Tech Lead", twitter: "@alexj" },
  { name: "Sarah Williams", role: "Logistics", twitter: "@sarahw" },
  { name: "Michael Brown", role: "Community", twitter: "@mikeb" },
  { name: "Emily Davis", role: "Sponsorships", twitter: "@emilyd" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black transition-colors duration-300">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:w-[35%] shrink-0 flex flex-col items-start lg:sticky lg:top-24 self-start z-10">
          <h3 className="font-heading text-[#7C3AED] text-xs font-bold tracking-[0.15em] uppercase mb-6">
            The people behind
          </h3>
          <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            The People<br/>Behind This
          </h2>
          <p className="font-body text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-[280px]">
            Students, developers, and community organizers from GDGOC Unilorin. We built this because nobody else was going to — and honestly, we're having way too much fun to stop.
          </p>
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
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 isolate shadow-md cursor-pointer"
              >
                {/* Image */}
                <Image
                  src="/speakers/headshot.png"
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 flex flex-col justify-end p-5">
                  <span className="font-heading font-bold text-lg text-white leading-tight mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    {member.name}
                  </span>
                  <span className="font-mono text-xs text-[#a78bfa] font-semibold tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out">
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
