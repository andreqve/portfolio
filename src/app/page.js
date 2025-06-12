'use client';
import { useRef } from "react";
import Image from 'next/image';
import {
  FaMoneyBillWave, FaHashtag, FaMobileAlt, FaBullhorn, FaRegFileAlt,
  FaChartLine, FaBlogger, FaProjectDiagram,
  FaGraduationCap, FaGoogleDrive, FaUtensils, FaClock
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
  { title: "Digital Marketing Lead", company: "KaryaKarsa", year: "2021-Present, Jakarta", color: BRAND.teal, icon: <FaBullhorn /> },
  { title: "Solution Manager", company: "Epsilo.io", year: "2020, Ho Chi Minh City", color: BRAND.pink, icon: <FaProjectDiagram /> },
  { title: "App Marketing", company: "Yummycorp", year: "2019, Tangerang", color: BRAND.green, icon: <FaMobileAlt /> },
  { title: "Performance Marketing", company: "theAsianparent", year: "2018, Jakarta", color: BRAND.yellow, icon: <FaChartLine /> },
  { title: "Digital & Content", company: "LIGHThouse Indonesia", year: "2016, Jakarta", color: BRAND.teal, icon: <FaHashtag /> },
  { title: "Content Producer", company: "Cermati", year: "2015, Jakarta", color: BRAND.pink, icon: <FaRegFileAlt /> },
];

const featuredTemplates = [
  {
    title: "Money Management Template",
    desc: "Manage your finances easily, track income, expenses, and savings. Used by 20K+ users!",
    icon: "/image/template1.webp",
    link: "https://template.andre.id/koleksi/template-budgeting-google-sheet"
  },
  {
    title: "Project Management Template",
    desc: "Organize projects, track progress, and collaborate with your team seamlessly.",
    icon: "/image/template2.webp",
    link: "https://template.andre.id/koleksi/template-project-management"
  },
  {
    title: "Wedding Preparation Template",
    desc: "Everything you need to plan your wedding with less stress, from budgeting to checklists.",
    icon: "/image/template3.webp",
    link: "https://template.andre.id/koleksi/template-persiapan-pernikahan"
  }
];

const usefulLinks = [
  {
    icon: <FaMoneyBillWave size={28} className="text-[#e96479]" />,
    title: "Unreleased SaaS",
    desc: "Money managament web app",
    href: "https://x.com/andreqve/status/1926575381143761246"
  },
  {
    icon: <FaBlogger size={28} className="text-[#46bdc6]" />,
    title: "Personal Blog",
    desc: "Articles, insights, and tips",
    href: "https://andre.id/blog/marketing/"
  },
  {
    icon: <FaGraduationCap size={28} className="text-[#fdd36a]" />,
    title: "Free Udemy Courses",
    desc: "Learn new skills for free",
    href: "https://go.andre.id/udemy"
  },
  {
    icon: <FaGoogleDrive size={28} className="text-[#00b88c]" />,
    title: "Google Sheet Templates",
    desc: "30+ best template collections",
    href: "https://template.andre.id/koleksi"
  },
  {
    icon: <FaUtensils size={28} className="text-[#fdd36a]" />,
    title: "Food Recommendation",
    desc: "Curated list of best eats & coffee",
    href: "https://go.andre.id/tempatmakan"
  },
  {
    icon: <FaClock size={28} className="text-[#e96479]" />,
    title: "Weekend Timer",
    desc: "Countdown to your next weekend",
    href: "https://andre.id/go/weekend/"
  },
];

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

      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-8 mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-12 md:gap-x-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="flex flex-col items-center justify-center">
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full shadow-lg"
                  style={{
                    background: `radial-gradient(circle at 60% 40%, ${exp.color}55 60%, #181A1B 100%)`,
                    border: `2.5px solid ${exp.color}`
                  }}>
                  <span className="text-3xl">{exp.icon}</span>
                </span>
              </div>
              <div className="text-xl font-bold text-white text-center">{exp.title}</div>
              <div className="text-md text-[#adb5bd] text-center">{exp.company}</div>
              <div className="text-sm text-[#72787e] text-center">{exp.year}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-2 md:px-4 py-8 md:py-12 mb-12">
        <div className="relative bg-zinc-900/70 rounded-3xl shadow-2xl border-l-4 md:border-l-6 border-[#46bdc6] px-5 md:px-12 py-8 md:py-12">
          <span className="absolute -left-5 top-6 text-2xl md:text-4xl select-none pointer-events-none hidden md:block">📝</span>
          <h3 className="font-handwriting text-2xl md:text-4xl font-bold text-[#46bdc6] mb-4 tracking-tight">
            How a Simple Habit Became 35,000+ Solutions
          </h3>
          <div className="text-gray-200 text-lg leading-relaxed">
            <p>
              My professional journey began in 2015, coming from a small town to Jakarta to chase bigger work opportunities. In my early years, my salary barely covered daily expenses. It forced me to rethink how to manage my limited money, hoping to save even a small portion each month.
            </p>
            <br />
            <p>
              By 2018, I started tracking every little expense in a rough Google Sheet. Year after year, this practice grew with my career, and as my income increased, so did my savings and my spreadsheet! Friends and colleagues started asking for my “template” when I shared money management tips on Twitter.
            </p>
            <br />
            <p>
              That messy sheet evolved into the very first template I shared with the public. Since then, I’ve kept creating and sharing templates to help others solve real problems, save time, and organize their work and life more easily.
            </p>
            <br />
            <p>
              Here are a few of the templates people found most useful, built from experience and real user feedback. Hope they help you as much as they helped me!
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16 px-2 md:px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Templates</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredTemplates.map((tpl, i) => (
            <a
              href={tpl.link}
              target="_blank"
              rel="noopener noreferrer"
              key={tpl.title}
              className="bg-[#232829] rounded-2xl shadow-lg hover:scale-105 transition p-4 md:p-6 flex flex-col items-center text-center border border-white hover:border-[#00b88c] min-h-[310px] w-full"
            >
              <Image
                src={tpl.icon}
                alt={tpl.title}
                width={64}
                height={64}
                className="w-14 h-14 md:w-16 md:h-16 mb-4 object-contain rounded-xl shadow-md bg-zinc-900"
                style={{ border: "2px solid #181A1B" }}
                loading="lazy"
              />
              <h3 className="font-semibold text-lg mb-2 text-white">{tpl.title}</h3>
              <p className="text-gray-400 text-base mb-5 flex-1">{tpl.desc}</p>
              <span className="inline-block bg-gradient-to-r from-[#46bdc6] to-[#00b88c] px-5 py-2 rounded-full text-sm text-white font-semibold shadow hover:opacity-90 transition">
                View Template
              </span>
            </a>
          ))}
        </div>
      </section>

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
              className="bg-[#232829] rounded-xl shadow-lg flex flex-col items-center py-7 px-5 hover:scale-105 transition border border-white hover:border-[#46bdc6] min-h-[180px]"
            >
              <div>{l.icon}</div>
              <div className="font-bold mt-3 mb-1 text-lg text-white">{l.title}</div>
              <div className="text-gray-400 text-base">{l.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <hr className="border-t border-zinc-700 max-w-5xl mx-auto mb-8" />
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Andre. Made with Next.js & ❤️
      </footer>
    </main>
  );
}
