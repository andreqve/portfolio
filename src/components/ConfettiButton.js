// File: src/components/ConfettiButton.js
'use client';

import { useRef } from 'react';

const BRAND = {
  teal: '#46bdc6',
  green: '#00b88c',
  yellow: '#fdd36a',
  pink: '#e96479',
};

export default function ConfettiButton() {
  const confettiTimeout = useRef(null);

  const handleConfetti = async () => {
    if (confettiTimeout.current) clearTimeout(confettiTimeout.current);
    try {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 },
        colors: [BRAND.teal, BRAND.green, BRAND.yellow, BRAND.pink],
        scalar: 1.2,
      });
      confettiTimeout.current = setTimeout(() => {
        confettiTimeout.current = null;
      }, 300);
    } catch (error) {
      console.error("Failed to load confetti", error);
    }
  };

  return (
    <span
      className="inline-block mt-2 mb-4 px-6 py-2 rounded-full font-semibold text-white text-base cursor-pointer select-none transition hover:scale-105 shadow"
      style={{ background: "linear-gradient(90deg, #46bdc6 0%, #00b88c 100%)" }}
      onClick={handleConfetti}
      onMouseEnter={handleConfetti}
      tabIndex={0}
      role="button"
      aria-label="Celebrate productivity"
    >
      Helping 35,000+ users be more productive
    </span>
  );
}