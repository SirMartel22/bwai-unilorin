"use client";
import React from "react";

export const Brackets = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Left Bracket */}
    <path 
      d="M30 10 H20 V110 H30 M20 60 H10" 
      stroke="currentColor" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M70 10 H80 V110 H70 M80 60 H90" 
      stroke="currentColor" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Specifically the hand-drawn-style brackets from the flier
export const BrandBrackets = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M35 5 C15 5 5 15 5 35 V85 C5 105 15 115 35 115" 
      stroke="#000" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M35 12 C20 12 12 20 12 35 V85 C12 100 20 108 35 108" 
      fill="#FEE69C" 
    />
  </svg>
);

export const Heart = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#34A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const CloudLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 40" fill="none" stroke="#000" strokeWidth="1.5" className={className}>
    <path d="M10 30 Q25 10 40 30 Q55 50 70 30 Q85 10 95 30" strokeLinecap="round" />
  </svg>
);

export const GridShape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="9" y1="4" x2="9" y2="20" />
    <line x1="15" y1="4" x2="15" y2="20" />
  </svg>
);

export const GlobeShape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const ArrowShape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 20" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" className={className}>
    <path d="M5 10H55M55 10L45 5M55 10L45 15" />
  </svg>
);

export const WavyLoop = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 40" fill="none" stroke="#000" strokeWidth="1.5" className={className}>
    <path d="M10 20 C10 5, 30 5, 30 20 C30 35, 50 35, 50 20 C50 5, 70 5, 70 20 C70 35, 90 35, 90 20 C90 5, 110 5, 110 20" strokeLinecap="round" />
  </svg>
);
