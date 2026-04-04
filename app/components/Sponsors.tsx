"use client";
import Image from "next/image";

const partners = [
  "/partners/Fetuils1.png",
  "/partners/KGK-orbit.png",
  "/partners/jwm.png",
  "/partners/logos.png"
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-12 md:py-16 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto border-t border-gray-200 dark:border-white/5 relative z-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* Heading Section */}
        <div className="flex-shrink-0 flex flex-col items-start">
          <h3 className="font-heading text-[#7C3AED] text-xs font-bold tracking-[0.15em] uppercase mb-4">
            Our Partners
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight whitespace-nowrap">
            Partnered with<br />People Who Build
          </h2>
        </div>

        {/* Marquee Section */}
        <div className="flex-grow w-full relative overflow-x-hidden pt-4 lg:pt-0">
          <div className="relative flex items-center py-6 mask-gradient">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-16">
              {partners.concat(partners).map((partner, idx) => (
                <div key={idx} className="relative w-48 h-32 md:w-40 md:h-20 bg-[#000000]/40 p-10 shadow-md rounded-lg grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner}
                    alt="Partner Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
