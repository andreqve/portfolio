// File: src/components/StorySection.js
'use client';

import { motion } from "framer-motion";

const storyParagraphs = [
  <>
    My professional journey began in 2015, coming from a small town to Jakarta to
    <span
      style={{
        background: "linear-gradient(90deg, #fef08a88 0%, #fdd36a88 100%)",
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
        background: "linear-gradient(90deg, #fef08a88 0%, #fdd36a88 100%)",
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
        background: "linear-gradient(90deg, #fef08a88 0%, #fdd36a88 100%)",
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
        background: "linear-gradient(90deg, #fef08a88 0%, #fdd36a88 100%)",
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
];

export default function StorySection() {
    return (
        <section className="max-w-3xl md:max-w-4xl mx-auto px-4 py-12 mb-14">
            <div className="flex items-center gap-3 mb-7">
                <span className="text-3xl md:text-4xl drop-shadow-md">📝</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#00b88c] leading-tight">
                    How a Simple Habit Became 35,000+ Solutions
                </h3>
            </div>
            <div className="relative rounded-3xl bg-zinc-900/70 border-2 border-dotted border-[#00b88c] px-6 md:px-14 py-9 shadow-xl backdrop-blur-md">
                {storyParagraphs.map((txt, i) => (
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
    );
}