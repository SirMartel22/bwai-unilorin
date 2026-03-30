"use client";
import { useState } from "react";

const faqs = [
  { question: "Can we know the challenge beforehand?", answer: "The specific challenge topics will be revealed during the opening ceremony to ensure a fair playing field for everyone." },
  { question: "Can I participate even if I don't have a team?", answer: "Absolutely! We'll have a dedicated team-building session at the beginning of the event." },
  { question: "Is a pre-existing project required?", answer: "No, in fact we encourage building something fresh during the event to keep it fair." },
  { question: "How many spots are there?", answer: "Spots are limited, so we encourage applying as early as possible!" },
  { question: "Do I need to bring anything specific?", answer: "Your laptop, charger, valid ID, and a lot of energy. We provide power, internet, and food." },
  { question: "Is there anything before the hackathon?", answer: "There will be some pre-event workshops to get you familiar with Google tech!" },
  { question: "How are the results communicated?", answer: "Judging results and awards will be announced during our closing ceremony." },
  { question: "Are meals included?", answer: "Yes, we will provide meals, snacks, and plenty of coffee throughout the event." },
  { question: "Is the event free?", answer: "Yes, it is completely free to attend for all accepted participants." },
  { question: "Who can participate?", answer: "Students, professional developers, designers, and AI enthusiasts of all skill levels are welcome." },
  { question: "What are the judging criteria?", answer: "Projects are judged on technical execution, innovation, practical usefulness, and presentation." },
  { question: "Where is the venue and how do I get there?", answer: "Fetuils Hub, Unilorin. Detailed directions will be sent to accepted participants." },
  { question: "Is accommodation provided?", answer: "We do not provide overnight accommodations, but there will be dedicated lounge areas." },
  { question: "Is there a Code of Conduct?", answer: "Yes, all participants must agree to our strict Code of Conduct to ensure a safe and welcoming environment for everyone." },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto border-t border-gray-200 dark:border-white/5">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:w-[35%] shrink-0 flex flex-col items-start lg:sticky lg:top-24 self-start">
          <h3 className="font-heading text-[#7C3AED] text-xs font-bold tracking-[0.15em] uppercase mb-6">
            FAQ
          </h3>
          <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            FAQ
          </h2>
          <p className="font-body text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-sm">
            Hackathons throw curveballs. The challenge you didn't expect, the tool that breaks at 2 AM, the pivot that changes everything. <strong className="font-semibold text-gray-900 dark:text-white">"Here's what we wish someone had told us beforehand."</strong>
          </p>

          <a 
            href="mailto:contact@gdgunilorin.dev" 
            className="flex items-center gap-3 text-gray-900 dark:text-white font-medium hover:text-[#7C3AED] dark:hover:text-[#a78bfa] transition-colors group mb-8"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7C3AED]">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Ask a question
          </a>
        </div>

        {/* Right Column (Accordion) */}
        <div className="lg:w-[65%] w-full flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openId === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-gray-200 dark:border-white/10 group overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-base text-gray-900 dark:text-gray-100 group-hover:text-[#7C3AED] dark:group-hover:text-[#a78bfa] transition-colors pr-8">
                    {faq.question}
                  </span>
                  
                  <span className={`shrink-0 text-[#7C3AED] transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0 mb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed pr-8 md:pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
