// File: src/components/StorySection.js

function Hl({ children }) {
  return <span className="font-semibold text-ink bg-acc-soft rounded px-0.5">{children}</span>;
}

const storyParagraphs = [
  <>
    My professional journey began in 2015, coming from a small town to Jakarta to{" "}
    <Hl>chase bigger work opportunities</Hl>. In my early years, my salary barely covered daily
    expenses. It forced me to rethink how to manage my limited money, hoping to save even a small
    portion each month.
  </>,
  <>
    By 2018, I started <Hl>tracking every little expense</Hl> in a rough Google Sheet. Year after
    year, this practice grew with my career, and as my income increased, so did my savings and my
    spreadsheet! Friends and colleagues started asking for my “template” when I shared money
    management tips on Twitter.
  </>,
  <>
    That messy sheet evolved into the <Hl>very first template I shared</Hl> with the public. Since
    then, I’ve kept creating and sharing templates to help others solve real problems, save time,
    and organize their work and life more easily.
  </>,
  <>
    Here are a few of the <Hl>templates people found most useful</Hl>, built from experience and
    real user feedback. Hope they help you as much as they helped me!
  </>,
];

export default function StorySection() {
  return (
    <section id="story" className="mb-14">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h2 className="text-lg font-semibold tracking-tight">How a Simple Habit Became 35,000+ Solutions</h2>
        <span className="text-xs text-muted font-mono shrink-0">2015 → now</span>
      </div>
      <div className="bg-white border border-line rounded-[14px] p-6 md:p-8 space-y-4 text-ink2 text-base leading-relaxed">
        {storyParagraphs.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </div>
    </section>
  );
}
