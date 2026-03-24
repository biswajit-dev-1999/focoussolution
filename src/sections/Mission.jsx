import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpenCheck,
  Utensils,
  HeartHandshake,
  Leaf,
  Target,
  Eye,
  ArrowUpRight,
} from "lucide-react";

// ─── SplitText ────────────────────────────────────────────────────────────────
const SplitText = ({ text, delayStep = 0.03, className = "", style = {} }) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <h2
      aria-hidden="true"
      className={`inline-block overflow-hidden ${className}`}
      style={{ lineHeight: 1.05, fontFamily: "'Gloria Hallelujah', cursive", ...style }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * delayStep, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

// ─── Mission / Vision card ────────────────────────────────────────────────────
const MVCard = ({ Icon, title, text, accentColor, bg, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.75, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(45,90,61,0.13)" }}
    className="group relative rounded-3xl p-9 overflow-hidden shadow-lg"
    style={{
      background: "#FFFFFF",
      border: "1px solid #EDE4CE",
      transition: "box-shadow 0.3s, transform 0.3s",
    }}
  >
    {/* Left accent bar */}
    <div
      className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
      style={{ background: accentColor }}
    />

    {/* Corner glow */}
    <div
      className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-15 pointer-events-none transition-opacity group-hover:opacity-30"
      style={{ background: accentColor }}
    />

    {/* Icon */}
    <div
      className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm"
      style={{ background: bg }}
    >
      <Icon size={24} strokeWidth={1.5} style={{ color: accentColor }} />
    </div>

    <h3 className="text-xl font-bold mb-3" style={{ color: "#2D5A3D" }}>{title}</h3>
    <p className="text-sm leading-relaxed" style={{ color: "#4B5E53" }}>{text}</p>
  </motion.div>
);

// ─── Program Card ─────────────────────────────────────────────────────────────
const ProgramCard = ({ Icon, title, desc, image, accentColor, bg, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(45,90,61,0.14)" }}
    className="group relative rounded-3xl overflow-hidden shadow-xl"
    style={{ background: "#FFFFFF", border: "1px solid #EDE4CE", transition: "box-shadow 0.3s" }}
  >
    {/* Top accent bar */}
    <div className="h-1.5 w-full" style={{ background: accentColor }} />

    {/* Image */}
    <div className="relative overflow-hidden h-48">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
        style={{ transition: "transform 0.7s ease" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(45,90,61,0.45), transparent)" }}
      />
      {/* Icon badge */}
      <div
        className="absolute bottom-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
        style={{ background: bg }}
      >
        <Icon size={18} strokeWidth={1.6} style={{ color: accentColor }} />
      </div>
    </div>

    {/* Body */}
    <div className="p-5">
      <h3 className="text-base font-bold mb-1.5" style={{ color: "#2D5A3D" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#4B5E53" }}>{desc}</p>

      <div className="flex items-center justify-between mt-4">
        <a
          href="/donate"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide transition-opacity hover:opacity-70"
          style={{ color: accentColor }}
        >
          Support <ArrowUpRight size={13} />
        </a>
      </div>
    </div>

    {/* Bottom sweep line */}
    <div
      className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500"
      style={{ background: accentColor }}
    />
  </motion.div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROGRAMS = [
  { Icon: BookOpenCheck, title: "Empower Education",    desc: "Scholarships, classrooms & mentors — because every child deserves a bright future.", image: "/educationgif.gif", accentColor: "#2D5A3D", bg: "#E8F2EC",  delay: 0    },
  { Icon: Utensils,      title: "Nourish & Thrive",     desc: "Balanced nutrition programs for children and families facing food insecurity.",       image: "/nutrition.gif",   accentColor: "#C9A84C", bg: "#FDF5E0",  delay: 0.1  },
  { Icon: HeartHandshake,title: "Women-Led Change",     desc: "Skill training, micro-grants and leadership programs that empower women.",            image: "/issue-4.gif",     accentColor: "#4A7C59", bg: "#E8F2EC",  delay: 0.2  },
  { Icon: Leaf,          title: "Community Resilience", desc: "Healthcare, disaster relief & sustainable livelihoods for vulnerable communities.",   image: "/community.gif",   accentColor: "#B8860B", bg: "#FDF5E0",  delay: 0.3  },
];

// ─── Mission Section ──────────────────────────────────────────────────────────
export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)" }}
    >
      {/* Decorative blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.18, scale: 1 } : {}}
        transition={{ duration: 1.3 }}
        className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#C9A84C" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#4A7C59" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── HEADER ── */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6"
            style={{ background: "#E8F2EC", color: "#2D5A3D" }}
          >
            Our Purpose
          </motion.span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Two-line headline */}
            <div>
              <SplitText
                text="Our Mission"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold block"
                style={{ color: "#2D5A3D" }}
              />
              <SplitText
                text="& Vision"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold block mt-1"
                delayStep={0.04}
                style={{ color: "rgba(45,90,61,0.22)" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md text-base leading-relaxed lg:text-right"
              style={{ color: "#4B5E53" }}
            >
              Rooted in compassion, driven by purpose — transforming communities through
              education, health, and lasting empowerment.
            </motion.p>
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="mt-8 h-px origin-left"
            style={{ background: "linear-gradient(to right, #C9A84C, rgba(201,168,76,0.08))" }}
          />
        </div>

        {/* ── MISSION + VISION CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-20">
          <MVCard
            Icon={Target}
            title="Our Mission"
            text="To ensure social justice, economic and educational enhancement to the disadvantaged sections of the society, focusing on Women, youth and children through developing mechanisms aiming at service delivery and capacity building."
            accentColor="#2D5A3D"
            bg="#E8F2EC"
            delay={0}
          />
          <MVCard
            Icon={Eye}
            title="Our Vision"
            text="To create a society where people are placed at the centre of all development initiative — ensuring social justice and human rights for every individual, irrespective of caste, creed, religion, region, or gender."
            accentColor="#C9A84C"
            bg="#FDF5E0"
            delay={0.12}
          />
        </div>

        {/* ── PROGRAMS ── */}
        <div className="mb-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.25em] mb-3"
                style={{ color: "#C9A84C" }}
              >
                What We Do
              </span>
              <h3
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "#2D5A3D", fontFamily: "'Gloria Hallelujah', cursive" }}
              >
                Programs in Action
              </h3>
            </div>
            <a
              href="/about"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
              style={{ color: "#2D5A3D" }}
            >
              View All <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((p, i) => (
              <ProgramCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* ── INCLUSIVITY STRIP (corner brackets) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden px-10 py-12 text-center"
          style={{ background: "#FFFFFF", border: "1px solid #EDE4CE", boxShadow: "0 8px 32px rgba(45,90,61,0.08)" }}
        >
          {/* Top colour bar */}
          <div
            className="absolute top-0 left-0 w-full h-1.5"
            style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C, #2D5A3D)" }}
          />

          {/* Corner bracket accents */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: "#C9A84C" }} />
          <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 rounded-tr-xl" style={{ borderColor: "#C9A84C" }} />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 rounded-bl-xl" style={{ borderColor: "#C9A84C" }} />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: "#C9A84C" }} />

          <span className="text-3xl mb-5 block">🤝</span>
          <p
            className="text-lg md:text-xl font-semibold italic max-w-3xl mx-auto"
            style={{ color: "#4B5E53" }}
          >
            "Our work benefits all — irrespective of caste, creed, language, religion, region, or sex."
          </p>
          <span
            className="block mt-4 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: "#C9A84C" }}
          >
            — Unwavering Inclusivity
          </span>
        </motion.div>

      </div>
    </section>
  );
}
