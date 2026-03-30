"use client";

function CardBg() {
  return (
    <div 
      className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none rounded-[2rem]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export default function UsefulStuff() {
  const primaryCards = [
    { id: "ai-studio", name: "Google AI Studio", link: "#", logo: <><span className="font-bold">Google</span> AI Studio</> },
    { id: "antigravity", name: "Google Antigravity", link: "#", logo: <><span className="text-blue-500">A</span> <span className="font-bold">Google</span> Antigravity</> },
    { id: "cloud", name: "Google Cloud", link: "#", logo: <><span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span> Cloud</> },
  ];

  return (
    <section id="useful-stuff" className="py-24 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-12 tracking-tight">
        Useful Stuff
      </h2>

      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {primaryCards.map((card) => (
          <div key={card.id} className="flex flex-col flex-1 items-center">
            {/* Card Graphic */}
            <div className="relative w-full aspect-[4/2] rounded-[2rem] bg-gradient-to-br from-[#1a122e] via-[#0d071b] to-black border border-gray-200 dark:border-white/5 flex items-center justify-center overflow-hidden mb-5 shadow-lg group cursor-pointer transition-transform hover:-translate-y-1">
              <CardBg />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-white z-10 font-sans text-xl sm:text-2xl tracking-tight relative drop-shadow-md">
                {card.logo}
              </span>
            </div>
            
            {/* Legend */}
            <h4 className="font-heading font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">
              {card.name}
            </h4>
            <a href={card.link} className="font-body font-bold text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
              <span>→</span> Link
            </a>
          </div>
        ))}
      </div>

      {/* Road to Hack */}
      <div>
        <h3 className="font-heading text-[#7C3AED] text-xs font-bold tracking-[0.15em] uppercase mb-6">
          ROAD TO HACK
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-[2rem] bg-black text-white p-8 border border-white/10 shadow-lg flex flex-col items-start hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
            <CardBg />
            <div className="relative z-10 w-full">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#7C3AED] uppercase block mb-4">
                Apr 11
              </span>
              <h4 className="font-heading font-bold text-xl leading-snug mb-3">
                Build with AI Unilorin
              </h4>
              <p className="font-body text-xs text-white/60 mb-8 max-w-[200px]">
                In-Person • Fetuils Hub, Unilorin
              </p>
              <a href="#" className="font-body text-xs text-[#7C3AED] hover:text-[#a78bfa] font-semibold transition-colors mt-auto inline-flex items-center gap-1">
                View on Meetup →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2rem] bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-white/5 p-8 flex flex-col items-start min-h-[220px]">
            <span className="font-mono text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-4">
              May 2026
            </span>
            <h4 className="font-heading font-bold text-xl text-gray-900 dark:text-gray-100 leading-snug mb-2">
              Upcoming Career Fest
            </h4>
            <p className="font-body text-sm font-medium text-gray-400 dark:text-gray-500 italic mt-auto">
              Coming Soon
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2rem] bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-white/5 p-8 flex flex-col items-start min-h-[220px]">
            <span className="font-mono text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-600 uppercase block mb-4">
              TBA
            </span>
            <h4 className="font-heading font-bold text-xl text-gray-900 dark:text-gray-100 leading-snug mb-2">
              Other Important Events
            </h4>
             <p className="font-body text-sm font-medium text-gray-400 dark:text-gray-500 italic mt-auto">
              Coming Soon
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
