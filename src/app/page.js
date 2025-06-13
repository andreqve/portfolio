'use client';
import { useRef } from "react";
import 'keen-slider/keen-slider.min.css';
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import Image from 'next/image';
import {
  FaMoneyBillWave, FaHashtag, FaMobileAlt, FaBullhorn, FaRegFileAlt,
  FaChartLine, FaRegNewspaper, FaProjectDiagram,
  FaGraduationCap, FaTable, FaUtensils, FaClock
} from "react-icons/fa";

const BRAND = {
  teal: '#46bdc6',
  green: '#00b88c',
  yellow: '#fdd36a',
  pink: '#e96479',
};

const skills = [
  "10+ years in digital & performance marketing",
  "Strong background in content marketing and automation",
  "Google Ads, SEO, and content strategy expertise",
  "SaaS, creator economy, analytics, SME growth",
  "Experience leading multi-channel campaigns and driving product adoption",
  "Proven track record in app marketing, user growth, and engagement strategy",
  "Built a SaaS solution for financial tracking",
];

const experiences = [
  {
    title: "Digital Marketing Lead",
    company: "KaryaKarsa",
    year: "2021-Present, Jakarta",
    color: "#29bbae",
    icon: <FaBullhorn />
  },
  {
    title: "Solution Manager",
    company: "Epsilo.io",
    year: "2020, Ho Chi Minh City",
    color: "#61b47d",
    icon: <FaProjectDiagram />
  },
  {
    title: "App Marketing",
    company: "Yummycorp",
    year: "2019, Tangerang",
    color: "#90a753",
    icon: <FaMobileAlt />
  },
  {
    title: "Performance Marketing",
    company: "theAsianparent",
    year: "2018, Jakarta",
    color: "#bb9440",
    icon: <FaChartLine />
  },
  {
    title: "Digital & Content",
    company: "LIGHThouse Indonesia",
    year: "2016, Jakarta",
    color: "#dc7b50",
    icon: <FaHashtag />
  },
  {
    title: "Content Producer",
    company: "Cermati",
    year: "2015, Jakarta",
    color: "#e96479",
    icon: <FaRegFileAlt />
  },
];


const featuredTemplates = [
  {
    title: "Money Management Template",
    desc: "Manage your finances easily, track income, expenses, and savings. Used by 20K+ users!",
    images: ["/image/budget1.png", "/image/budget2.png", "/image/budget3.png"],
    link: "https://template.andre.id/koleksi/template-budgeting-google-sheet"
  },
  {
    title: "Project Management Template",
    desc: "Organize projects, track progress, and collaborate with your team seamlessly.",
    images: ["/image/project1.png", "/image/project2.png", "/image/project3.png"],
    link: "https://template.andre.id/koleksi/template-project-management"
  },
  {
    title: "Wedding Preparation Template",
    desc: "Everything you need to plan your wedding with less stress, from budgeting to checklists.",
    images: ["/image/wedding1.png", "/image/wedding2.png", "/image/wedding3.png"],
    link: "https://template.andre.id/koleksi/template-persiapan-pernikahan"
  }
];


const usefulLinks = [
  {
    icon: <FaMoneyBillWave size={28} className="text-[#00b88c]" />,
    title: "Unreleased SaaS",
    desc: "Money managament web app",
    href: "https://x.com/andreqve/status/1926575381143761246"
  },
  {
    icon: <FaGraduationCap size={28} className="text-[#892de1]" />,
    title: "Free Udemy Courses",
    desc: "Learn new skills for free",
    href: "https://go.andre.id/udemy"
  },
  {
    icon: <FaUtensils size={28} className="text-[#fdd36a]" />,
    title: "Food Recommendation",
    desc: "Curated list of best eats & coffee",
    href: "https://go.andre.id/tempatmakan"
  },
  {
    icon: <FaRegNewspaper size={28} className="text-[#58b1da]" />,
    title: "Personal Blog",
    desc: "Articles, insights, and tips",
    href: "https://andre.id/blog/marketing/"
  },
  {
    icon: <FaClock size={28} className="text-[#e96479]" />,
    title: "Weekend Timer",
    desc: "Countdown to your next weekend",
    href: "https://andre.id/go/weekend/"
  },
  {
    icon: <FaTable size={28} className="text-[#34a853]" />,
    title: "Google Sheet Templates",
    desc: "30+ best template collections",
    href: "https://template.andre.id/koleksi"
  },
];

function TemplateSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
    loop: true,
    mode: "free-snap",
  });

  return (
    <div className="w-full max-w-[440px] mx-auto keen-slider aspect-[1600/1700] rounded-2xl overflow-hidden shadow-lg">
      <div ref={sliderRef} className="keen-slider">
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
      {/* Navigation dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-2 border-[#00b88c] ${current === i ? 'bg-[#00b88c]' : 'bg-zinc-700'} transition`}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}



export default function Home() {
  const confettiTimeout = useRef(null);

  const handleConfetti = async () => {
    if (confettiTimeout.current) clearTimeout(confettiTimeout.current);
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
  };

  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-zinc-950 to-zinc-800 relative text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-full h-44 bg-gradient-to-b from-[#232829]/60 to-transparent" />
        <div className="absolute top-[300px] left-1/2 -translate-x-1/2 w-[80vw] h-1 rounded-full blur-xl opacity-60"
          style={{ background: "linear-gradient(90deg, #46bdc6 0%, #00b88c 60%, #fdd36a 90%, #e96479 100%)" }} />
      </div>

      <section className="relative z-10 flex flex-col items-center pt-14 pb-8 mb-16">
        <Image
          src="/image/andre.webp"
          alt="Andre Avatar"
          width={128}
          height={128}
          className="rounded-full border-4 border-white shadow-xl mb-4 w-32 h-32 object-cover"
          priority
        />
        <h1 className="text-5xl font-bold mb-2 text-center">Andre</h1>
        <p className="text-lg mb-2 text-gray-200 text-center">
          Digital Marketer & Google Sheets Templates Creator
        </p>
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
        <a
          href="https://x.com/andreqve"
          target="_blank"
          rel="noopener noreferrer"
          title="X / Twitter"
          className="mt-2 hover:scale-110 transition"
        >
          <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 40 40">
            <path d="M31.6,10.2H36l-10.7,12.2L37.1,33H27.5l-6.8-8l-7.8,8H4.5l11.3-13L3.1,7h10.2l6.1,7l6.7-7h5.5ZM29.7,30.6h2.3L12,9.1H9.5l20.2,21.5Z" />
          </svg>
        </a>
      </section>

      <section className="z-10 relative max-w-5xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-2 justify-between mb-16">
        <div className="flex-1 min-w-[280px]">
          <h2 className="text-2xl font-bold mb-3 text-white">About Me</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Hi! I&apos;m Andre, a digital marketer and Google Sheets creator passionate about helping others work smarter with technology and automation.<br /><br />
            With hands-on experience in campaign management, product strategy, and SaaS, I love creating simple and effective solutions for productivity.<br /><br />
            My Google Sheets templates have empowered over 35,000 users, while my marketing work spans analytics, content, and growth for startups and creative businesses.
          </p>
        </div>
        <div className="flex-1 min-w-[280px]">
          <h2 className="text-2xl font-bold mb-3 text-white">Skills & Experience</h2>
          <ul className="text-gray-200 text-lg pl-0 space-y-1">
            {skills.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-[#00b88c]">✓</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section: Professional Journey */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-8 mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Journey</h2>

        {/* Mobile Timeline */}
        <div className="flex flex-col md:hidden relative pl-0">
          {experiences.map((exp, idx) => {
            const isRecent = idx === 0;
            return (
              <div key={exp.title} className="flex items-start min-h-[98px]">
                <div className="flex flex-col items-center">
                  <span
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center shadow-lg"
                    style={{
                      background: isRecent ? "#232829" : "#181A1B",
                      borderColor: exp.color,
                      color: exp.color,
                      zIndex: 2,
                      marginTop: idx === 0 ? "0" : "-4px",
                      fontSize: "2.45rem"
                    }}
                  >
                    {exp.icon}
                  </span>
                  {/* Timeline Line */}
                  {idx !== experiences.length - 1 && (
                    <div
                      className="w-1"
                      style={{
                        background: "#454545",
                        minHeight: "68px",
                        marginTop: "-2px",
                        marginBottom: "-2px",
                      }}
                    />
                  )}
                </div>
                {/* Info */}
                <div className="ml-7 flex-1 py-1">
                  <div
                    className="font-bold text-[1.3rem] mb-1 leading-tight"
                    style={{ color: isRecent ? exp.color : "#fff" }}
                  >
                    {exp.title}
                  </div>
                  <div className="text-[#adb5bd] text-[1.08rem] leading-snug">{exp.company}</div>
                  <div className="text-[#72787e] text-[0.97rem] leading-tight">{exp.year}</div>
                </div>
              </div>
            );
          })}
        </div>



        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-12 md:gap-x-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="flex flex-col items-center justify-center bg-zinc-900/80 rounded-2xl shadow-xl border border-zinc-700 hover:border-[#00b88c] transition-all hover:scale-105 group p-7"
            >
              <div className="mb-3">
                <span
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full shadow-lg group-hover:shadow-2xl"
                  style={{
                    background: `radial-gradient(circle at 60% 40%, ${exp.color}55 60%, #181A1B 100%)`,
                    border: `2.5px solid ${exp.color}`,
                    color: exp.color
                  }}
                >
                  <span className="text-3xl">{exp.icon}</span>
                </span>
              </div>
              <div className="text-xl font-bold text-white text-center group-hover:text-[#00b88c] transition">{exp.title}</div>
              <div className="text-md text-[#adb5bd] text-center">{exp.company}</div>
              <div className="text-sm text-[#72787e] text-center">{exp.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Story 35.000 */}
      <section className="max-w-3xl md:max-w-4xl mx-auto px-4 py-12 mb-14">
        <div className="flex items-center gap-3 mb-7">
          <span className="text-3xl md:text-4xl drop-shadow-md">📝</span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#00b88c] leading-tight">
            How a Simple Habit Became 35,000+ Solutions
          </h3>
        </div>
        <div className="relative rounded-3xl bg-zinc-900/70 border-2 border-dotted border-[#00b88c] px-6 md:px-14 py-9 shadow-xl backdrop-blur-md">
          {[
            <>
              My professional journey began in 2015, coming from a small town to Jakarta to
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #fef08a88 0%, #fdd36a88 100%)",
                  borderRadius: "0.4em",
                  padding: "0 0.16em",
                  display: "inline",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
                className="font-semibold"
              >
                chase bigger work opportunities
              </span>
              . In my early years, my salary barely covered daily expenses. It forced me to rethink how to manage my limited money, hoping to save even a small portion each month.
            </>,
            <>
              By 2018, I started
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #fef08a88 0%, #fdd36a88 100%)",
                  borderRadius: "0.4em",
                  padding: "0 0.16em",
                  display: "inline",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
                className="font-semibold"
              >
                tracking every little expense
              </span>
              in a rough Google Sheet. Year after year, this practice grew with my career, and as my income increased, so did my savings and my spreadsheet! Friends and colleagues started asking for my “template” when I shared money management tips on Twitter.
            </>,
            <>
              That messy sheet evolved into the
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #fef08a88 0%, #fdd36a88 100%)",
                  borderRadius: "0.4em",
                  padding: "0 0.16em",
                  display: "inline",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
                className="font-semibold"
              >
                very first template I shared
              </span>
              with the public. Since then, I’ve kept creating and sharing templates to help others solve real problems, save time, and organize their work and life more easily.
            </>,
            <>
              Here are a few of the
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #fef08a88 0%, #fdd36a88 100%)",
                  borderRadius: "0.4em",
                  padding: "0 0.16em",
                  display: "inline",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
                className="font-semibold"
              >
                templates people found most useful
              </span>
              , built from experience and real user feedback. Hope they help you as much as they helped me!
            </>
          ].map((txt, i) => (
            <motion.p
              key={i}
              className="text-gray-200 text-lg md:text-xl leading-relaxed mb-7 last:mb-0"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.62, ease: "easeOut" }}
            >
              {txt}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Section: Featured Templates */}
      <section className="max-w-6xl mx-auto mb-16 px-2 md:px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 max-w-5xl mx-auto">
          {featuredTemplates.map((tpl, idx) => (
            <div
              key={tpl.title}
              className="bg-zinc-900/90 rounded-3xl shadow-xl border border-zinc-600 hover:border-[#ffffff] transition-all duration-200 flex flex-col items-center px-3 py-6 md:py-7 min-h-[460px] group"
            >
              {/* Slider */}
              <TemplateSlider images={tpl.images} />

              <h3 className="font-semibold text-xl md:text-2xl mt-6 mb-2 text-white text-center">{tpl.title}</h3>
              <p className="text-gray-400 text-base mb-6 text-center flex-1">{tpl.desc}</p>
              <a
                href={tpl.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#46bdc6] to-[#00b88c] px-6 py-3 rounded-full text-base text-white font-bold shadow-lg hover:scale-105 transition focus-visible:outline-none"
              >
                View Template
                {/* Panah miring ke atas */}
                <svg width="21" height="21" fill="none" viewBox="0 0 24 24" className="ml-1">
                  <path d="M5 19L19 5M19 5V17M19 5H7" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          ))}
        </div>
      </section>

      {/* Section: Useful Links */}
      <section className="max-w-5xl mx-auto px-4 pb-16 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Useful Links</h2>
        <p className="text-gray-300 text-center mb-8 text-lg">
          Explore my works, resources, tools, templates, and more handpicked to help you work smarter and grow faster.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {usefulLinks.map((l, i) => (
            <a
              key={l.title}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#232829] rounded-xl shadow-lg flex flex-col items-center py-7 px-5 hover:scale-105 transition border border-zinc-600 hover:border-[#fff] min-h-[180px]"
            >
              <div>{l.icon}</div>
              <div className="font-bold mt-3 mb-1 text-lg text-white">{l.title}</div>
              <div className="text-gray-400 text-base">{l.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <hr className="border-t border-zinc-700 max-w-5xl mx-auto mb-2" />
      <footer className="py-8 flex flex-col items-center gap-2 text-center">
        <div className="flex flex-wrap gap-4 items-center justify-center mb-1 text-base font-semibold">
          <a
            href="mailto:hai@andre.id"
            className="hover:underline text-white/90 transition"
          >
            Send Email
          </a>
          <span className="text-zinc-400 select-none">•</span>
          <a
            href="https://www.linkedin.com/in/petrusandre"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white/90 transition"
          >
            Connect LinkedIn
          </a>
        </div>
        <div className="text-gray-500 text-xs mt-1">
          © {new Date().getFullYear()} Andre. Made with Next.js & ❤️
        </div>
      </footer>

    </main>
  );
}
