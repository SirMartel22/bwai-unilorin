"use client";

const platinumSponsors = [
  { name: "msi", style: "font-serif italic font-bold text-3xl tracking-widest" },
  { name: "Braynr", style: "font-sans font-extrabold text-3xl tracking-tight" },
  { name: "Luxonis", style: "font-sans font-medium text-3xl tracking-wide" },
  { name: "replit", style: "font-mono font-bold text-3xl tracking-tighter" },
];

const silverSponsors = [
  { name: "GitHub", style: "font-sans font-semibold text-lg" },
  { name: "CORSAIR", style: "font-sans font-black text-lg tracking-widest" },
  { name: "elgato", style: "font-sans font-medium text-lg tracking-tight lowercase" },
  { name: "ENHANCE", style: "font-serif font-bold text-lg tracking-[0.2em]" },
];

const partners = [
  "ElevenLabs", "NordVPN", "M5STACK", "GALVANINA", "nexos.ai", "NordPass", "incogni", "Saily", "Toacker", "LTF", "Scotti", "Zio"
];

function CardBg() {
  return (
    <div 
      className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none rounded-2xl"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// export default function Sponsors() {
//   return (
//     <section id="sponsors" className="py-8 md:py-12 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto border-t border-gray-200 dark:border-white/5 relative z-10">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
//         {/* Left Column */}
//         <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-24 self-start">
//           <h3 className="font-heading text-[#7C3AED] text-xs font-bold tracking-[0.15em] uppercase mb-6">
//             Our Supporters
//           </h3>
          
//           <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
//             Backed by<br/>People Who<br/>Build
//           </h2>
          
//           <p className="font-body text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-sm">
//             Great events don't run on enthusiasm alone. These companies showed up with real hardware, real tools, and challenges actually worth solving — not just a logo on a banner.
//           </p>

//           <a 
//             href="#sponsor" 
//             className="flex items-center gap-3 text-gray-900 dark:text-white font-medium hover:text-[#7C3AED] dark:hover:text-[#a78bfa] transition-colors group mb-8"
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7C3AED]">
//               <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
//               <polyline points="3 7 12 13 21 7"></polyline>
//             </svg>
//             Become a sponsor
//           </a>

//           <a 
//             href="#supporters" 
//             className="font-mono text-xs text-[#7C3AED] hover:text-[#6d28d9] dark:hover:text-[#a78bfa] font-bold tracking-widest uppercase flex items-center gap-2 transition-colors mt-auto pt-10"
//           >
//             Meet all our supporters <span>→</span>
//           </a>
//         </div>

//         {/* Right Column */}
//         <div className="lg:col-span-8 flex flex-col gap-10">
          
//           {/* Sponsors Tier */}
//           <div>
//             <h3 className="font-heading text-gray-400 dark:text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
//               Sponsors
//             </h3>
            
//             {/* Platinum Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               {platinumSponsors.map((p) => (
//                 <div key={p.name} className="relative h-40 rounded-2xl bg-gradient-to-br from-[#1a1c23] to-black border-[0.7px] border-black dark:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden group">
//                   <CardBg />
//                   <div className="absolute top-3 right-3 bg-[#3b276b]/60 border border-[#7C3AED]/30 px-2 py-0.5 rounded text-[#a78bfa] text-[8px] font-bold tracking-widest uppercase z-10 backdrop-blur-sm">
//                     Platinum
//                   </div>
//                   <span className={`text-white z-10 transition-transform duration-500 group-hover:scale-105 ${p.style}`}>
//                     {p.name}
//                   </span>
//                 </div>
//               ))}
              
//               {/* Google - Wide Platinum Card */}
//               <div className="sm:col-span-2 relative h-40 rounded-2xl bg-gradient-to-br from-[#1a1c23] to-black border-[0.7px] border-black dark:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden group">
//                 <CardBg />
//                 <div className="absolute top-3 right-3 bg-[#3b276b]/60 border border-[#7C3AED]/30 px-2 py-0.5 rounded text-[#a78bfa] text-[8px] font-bold tracking-widest uppercase z-10 backdrop-blur-sm">
//                   Platinum
//                 </div>
//                 <span className="text-white/70 z-10 font-sans font-medium text-4xl tracking-tighter transition-transform duration-500 group-hover:scale-105">
//                   Google
//                 </span>
//               </div>
//             </div>

//             {/* Silver Cards */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               {silverSponsors.map((s) => (
//                 <div key={s.name} className="relative h-20 rounded-xl bg-gradient-to-br from-[#13151a] to-black border-[0.7px] border-black dark:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden group">
//                   <CardBg />
//                   <div className="absolute top-2 right-2 bg-gray-800/80 border border-gray-600/50 px-1.5 py-0.5 rounded text-gray-300 text-[7px] font-bold tracking-widest uppercase z-10 backdrop-blur-sm">
//                     Silver
//                   </div>
//                   <span className={`text-white/90 z-10 transition-transform duration-300 group-hover:scale-105 ${s.style}`}>
//                     {s.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Community Partners Marquee */}
//           <div className="pt-6">
//             <h3 className="font-heading text-gray-400 dark:text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
//               Community Partners
//             </h3>
            
//             <div className="relative flex overflow-x-hidden border-t items-center border-b border-gray-200 dark:border-white/5 py-8 mask-gradient">
//               <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
//                 {partners.concat(partners).map((partner, idx) => (
//                   <span key={idx} className="font-sans font-bold text-xl text-gray-400 dark:text-gray-600 opacity-60 hover:opacity-100 transition-opacity">
//                     {partner}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <style>{`
//               @keyframes marquee {
//                 from { transform: translateX(0); }
//                 to { transform: translateX(-50%); }
//               }
//               .animate-marquee {
//                 animation: marquee 35s linear infinite;
//               }
//               .mask-gradient {
//                 -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
//                 mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
//               }
//             `}</style>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
