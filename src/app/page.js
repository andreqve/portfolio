// File: src/app/page.js
import Image from "next/image";
import StorySection from "@/components/StorySection";

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
  { title: "Digital Marketing Lead", company: "KaryaKarsa", year: "2021 – Present", place: "Jakarta", current: true },
  { title: "Solution Manager", company: "Epsilo.io", year: "2020", place: "Ho Chi Minh City" },
  { title: "App Marketing", company: "Yummycorp", year: "2019", place: "Tangerang" },
  { title: "Performance Marketing", company: "theAsianparent", year: "2018", place: "Jakarta" },
  { title: "Digital & Content", company: "LIGHThouse Indonesia", year: "2016", place: "Jakarta" },
  { title: "Content Producer", company: "Cermati", year: "2015", place: "Jakarta" },
];

const featuredTemplates = [
  {
    title: "Money Management Template",
    desc: "Manage your finances easily, track income, expenses, and savings. Used by 20K+ users!",
    images: ["/image/budget1.png", "/image/budget2.png", "/image/budget3.png"],
    link: "https://template.andre.id/koleksi/template-budgeting-google-sheet",
  },
  {
    title: "Project Management Template",
    desc: "Organize projects, track progress, and collaborate with your team seamlessly.",
    images: ["/image/project1.png", "/image/project2.png", "/image/project3.png"],
    link: "https://template.andre.id/koleksi/template-project-management",
  },
  {
    title: "Wedding Preparation Template",
    desc: "Everything you need to plan your wedding with less stress, from budgeting to checklists.",
    images: ["/image/wedding1.png", "/image/wedding2.png", "/image/wedding3.png"],
    link: "https://template.andre.id/koleksi/template-persiapan-pernikahan",
  },
];

const usefulLinks = [
  { title: "Monsy.app", desc: "Money management web app", href: "https://www.monsy.app" },
  { title: "Google Sheet Templates", desc: "30+ best template collections", href: "https://template.andre.id" },
  { title: "Personal Blog", desc: "Articles, insights, and tips", href: "https://andre.id/blog/marketing/" },
  { title: "Free Udemy Courses", desc: "Learn new skills for free", href: "https://go.andre.id/udemy" },
  { title: "Food Recommendation", desc: "Curated list of best eats & coffee", href: "https://go.andre.id/tempatmakan" },
  { title: "Weekend Timer", desc: "Countdown to your next weekend", href: "https://andre.id/go/weekend/" },
];

const host = (url) => new URL(url).host.replace(/^www\./, "") + new URL(url).pathname.replace(/\/$/, "");

function Arrow({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SecHead({ title, meta }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {meta && <span className="text-xs text-muted font-mono shrink-0">{meta}</span>}
    </div>
  );
}

const card = "bg-white border border-line rounded-[14px] shadow-card";
const btn =
  "btn-fx inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] border text-sm font-semibold whitespace-nowrap";
const btnPrimary = `${btn} btn-dark bg-ink text-white border-ink`;
const btnBrand = `${btn} btn-brand bg-acc text-white border-acc`;
const btnOutline = `${btn} bg-white text-ink border-line`;

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
        <div className="max-w-[960px] mx-auto px-5 h-14 flex items-center gap-6">
          <a href="#top" className="font-bold tracking-tight py-2">andre.id</a>
          <nav className="hidden sm:flex items-center gap-1 text-sm text-ink2 font-medium">
            <a href="#experience" className="px-2.5 py-2 rounded-lg hover:bg-white">Experience</a>
            <a href="#templates" className="px-2.5 py-2 rounded-lg hover:bg-white">Templates</a>
            <a href="#links" className="px-2.5 py-2 rounded-lg hover:bg-white">Links</a>
          </nav>
          <a href="https://template.andre.id" target="_blank" rel="noopener noreferrer" className={`${btnPrimary} ml-auto`}>
            Templates <Arrow />
          </a>
        </div>
      </header>

      <main id="top" className="max-w-[960px] mx-auto px-5">
        {/* Intro */}
        <section className="pt-12 pb-10 md:pt-16">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/image/andre.webp"
              alt="Andre"
              width={64}
              height={64}
              sizes="64px"
              className="w-16 h-16 rounded-full object-cover border border-line"
              priority
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] leading-tight">Andre</h1>
              <p className="text-ink2">Digital Marketer &amp; Google Sheets Templates Creator</p>
            </div>
          </div>

          <p className="inline-flex items-center gap-2 text-sm text-acc-d bg-acc-soft rounded-full px-3 py-1 mb-6 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-acc" aria-hidden="true" />
            Helping 35,000+ users be more productive
          </p>

          <div className="flex flex-wrap gap-2">
            <a href="https://template.andre.id" target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Browse templates <Arrow />
            </a>
            <a href="https://www.linkedin.com/in/petrusandre" target="_blank" rel="noopener noreferrer" className={btnOutline}>
              LinkedIn
            </a>
            <a href="https://x.com/andreqve" target="_blank" rel="noopener noreferrer" className={btnOutline}>
              X / Twitter
            </a>
          </div>
        </section>

        {/* About + skills */}
        <section className="grid md:grid-cols-2 gap-4 mb-14">
          <div className={`${card} p-6`}>
            <h2 className="text-sm font-semibold text-muted mb-3">About me</h2>
            <div className="space-y-3 text-ink2">
              <p>
                Hi! I&apos;m Andre, a digital marketer and Google Sheets creator passionate about helping others work
                smarter with technology and automation.
              </p>
              <p>
                With hands-on experience in campaign management, product strategy, and SaaS, I love creating simple and
                effective solutions for productivity.
              </p>
              <p>
                My Google Sheets templates have empowered over 35,000 users, while my marketing work spans analytics,
                content, and growth for startups and creative businesses.
              </p>
            </div>
          </div>
          <div className={`${card} p-6`}>
            <h2 className="text-sm font-semibold text-muted mb-3">Skills &amp; experience</h2>
            <ul className="divide-y divide-line2">
              {skills.map((s) => (
                <li key={s} className="flex gap-3 py-2 first:pt-0 last:pb-0 text-ink2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-1 shrink-0 text-acc">
                    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-14">
          <SecHead title="Professional journey" meta={`${experiences.length} roles · 2015 → now`} />
          <ol className={`${card} divide-y divide-line2`}>
            {experiences.map((exp) => (
              <li
                key={exp.title}
                className="grid grid-cols-[1fr_auto] sm:grid-cols-[130px_1fr_auto] gap-x-4 gap-y-0.5 items-baseline px-5 py-3.5"
              >
                <span className="font-mono text-[13px] text-muted order-3 sm:order-none col-span-2 sm:col-span-1">
                  {exp.year}
                </span>
                <div className="min-w-0">
                  <span className="font-semibold">{exp.title}</span>
                  <span className="text-muted block sm:inline"><span className="hidden sm:inline"> · </span>{exp.company}</span>
                </div>
                <span className="text-sm text-muted text-right whitespace-nowrap">
                  {exp.current ? (
                    <span className="text-xs font-semibold text-acc-d bg-acc-soft rounded-full px-2.5 py-0.5">Current</span>
                  ) : (
                    exp.place
                  )}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <StorySection />

        {/* Templates */}
        <section id="templates" className="mb-14">
          <SecHead title="Featured templates" meta="swipe for more previews" />
          <div className="grid md:grid-cols-3 gap-4">
            {featuredTemplates.map((tpl) => (
              <article key={tpl.title} className={`${card} lift overflow-hidden flex flex-col`}>
                <div className="strip flex overflow-x-auto border-b border-line bg-line2">
                  {tpl.images.map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`${tpl.title} preview ${i + 1}`}
                      width={800}
                      height={800}
                      sizes="(min-width: 768px) 300px, 100vw"
                      className="w-full shrink-0 aspect-square object-cover object-top"
                      draggable="false"
                    />
                  ))}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <h3 className="font-semibold tracking-tight">{tpl.title}</h3>
                    <span className="font-mono text-xs text-muted shrink-0">{tpl.images.length} img</span>
                  </div>
                  <p className="text-sm text-ink2 mb-4 flex-1">{tpl.desc}</p>
                  <a
                    href={tpl.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnBrand} self-start`}
                  >
                    View template <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Links */}
        <section id="links" className="mb-16">
          <SecHead title="Useful links" meta={`${usefulLinks.length} links`} />
          <p className="text-ink2 mb-4 -mt-2 text-sm">
            Explore my works, resources, tools, templates, and more handpicked to help you work smarter and grow faster.
          </p>
          <div className={`${card} grid sm:grid-cols-2 overflow-hidden`}>
            {usefulLinks.map((l, i) => (
              <a
                key={l.title}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 px-5 py-4 hover:bg-bg transition-colors border-line2
                  ${i > 0 ? "border-t" : ""} ${i === 1 ? "sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l" : ""}`}
              >
                <div className="min-w-0 flex-1">
                  <div className="font-semibold">{l.title}</div>
                  <div className="text-sm text-muted truncate">{l.desc}</div>
                  <div className="font-mono text-xs text-muted truncate mt-0.5">{host(l.href)}</div>
                </div>
                <Arrow className="text-muted group-hover:text-acc shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="max-w-[960px] mx-auto px-5 py-6 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-sm">
          <span className="text-muted">© {new Date().getFullYear()} Andre</span>
          <div className="flex gap-3 -mx-2 text-ink2 font-medium">
            <a href="https://www.linkedin.com/in/petrusandre" target="_blank" rel="noopener noreferrer" className="px-2 py-2 hover:text-ink">LinkedIn</a>
            <a href="https://x.com/andreqve" target="_blank" rel="noopener noreferrer" className="px-2 py-2 hover:text-ink">X</a>
          </div>
        </div>
      </footer>
    </>
  );
}
