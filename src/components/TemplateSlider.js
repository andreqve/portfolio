// File: src/components/TemplateSlider.js
'use client';

import { useState } from "react";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import Image from 'next/image';

export default function TemplateSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
    loop: true,
    mode: "free-snap",
  });

  return (
    <div className="relative w-full max-w-[440px] mx-auto aspect-[1600/1700] rounded-2xl overflow-hidden shadow-lg">
      <div ref={sliderRef} className="keen-slider h-full">
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide flex items-center justify-center">
            <Image
              src={src}
              alt={`Template preview ${i + 1}`}
              width={800}
              height={900}
              className="w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              draggable="false"
              style={{
                maxHeight: "350px",
                minHeight: "300px",
                background: "#1a202c"
              }}
            />
          </div>
        ))}
      </div>
      {instanceRef.current && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-[#00b88c] ${current === i ? 'bg-[#00b88c]' : 'bg-zinc-700'} transition`}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}