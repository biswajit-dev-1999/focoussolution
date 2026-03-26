import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Award, Users } from "lucide-react";
import StoriesOfChange from "../components/StoriesOfChange";

// ─── SplitText (matches other page typography) ────────────────────────────────
const SplitText = ({ text, delayStep = 0.03, className = "", style = {} }) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <span
      aria-hidden="true"
      className={`inline-block overflow-hidden ${className}`}
      style={{ lineHeight: 1.1, ...style }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * delayStep, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

// ─── Data ────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    id: 1,
    name: "Anita Sharma",
    role: "Beneficiary – Education Program",
    location: "Bhubaneswar, Odisha",
    avatar: "AS",
    avatarBg: "linear-gradient(135deg, #2D5A3D, #4A7C59)",
    stars: 5,
    text: "Focus International Foundation changed my daughter's life completely. Thanks to their scholarship program, she is now pursuing engineering. I am forever grateful for the support and compassion shown by every team member.",
    tag: "Education",
    tagColor: "#2D5A3D",
  },
  {
    id: 2,
    name: "Rajesh Kumar Panda",
    role: "Community Leader",
    location: "Cuttack, Odisha",
    avatar: "RK",
    avatarBg: "linear-gradient(135deg, #C9A84C, #E8C96A)",
    stars: 5,
    text: "The health camp organised by Focus Foundation in our village was a blessing. Over 200 families received free medical check-ups and medicines. Their dedication to marginalised communities is truly inspiring.",
    tag: "Healthcare",
    tagColor: "#7C3D2D",
  },
  {
    id: 3,
    name: "Priya Mohapatra",
    role: "Livelihood Program Participant",
    location: "Puri, Odisha",
    avatar: "PM",
    avatarBg: "linear-gradient(135deg, #4A2D7C, #7A5AB3)",
    stars: 5,
    text: "I was a daily-wage worker with no savings. The skill development training helped me start my own tailoring unit. Now I employ three other women from my neighbourhood. Thank you Focus Foundation!",
    tag: "Livelihoods",
    tagColor: "#4A2D7C",
  },
  {
    id: 4,
    name: "Dr. Subhashree Das",
    role: "Partner – Utkal Hospital",
    location: "Bhubaneswar, Odisha",
    avatar: "SD",
    avatarBg: "linear-gradient(135deg, #2D5A6E, #4A8CA8)",
    stars: 5,
    text: "We have collaborated with Focus International Foundation for medical outreach camps across rural Odisha. Their professionalism, empathy, and on-ground coordination are exceptional. Highly recommend.",
    tag: "Healthcare",
    tagColor: "#2D5A6E",
  },
  {
    id: 5,
    name: "Mohammed Iqbal",
    role: "Disaster Relief Volunteer",
    location: "Balasore, Odisha",
    avatar: "MI",
    avatarBg: "linear-gradient(135deg, #5A2D2D, #A85A5A)",
    stars: 5,
    text: "During the Cyclone Yaas response, Focus Foundation was among the first to reach the affected villages with food, water, and medical supplies. Their rapid relief work saved countless lives in our district.",
    tag: "Disaster Relief",
    tagColor: "#5A2D2D",
  },
  {
    id: 6,
    name: "Sunita Behera",
    role: "Women's Empowerment SHG Leader",
    location: "Khordha, Odisha",
    avatar: "SB",
    avatarBg: "linear-gradient(135deg, #1E5A3D, #38876B)",
    stars: 5,
    text: "Our Self Help Group received micro-finance support and business training from Focus Foundation. Today our group generates ₹2 lakh monthly revenue. They didn't just give us funds — they gave us confidence.",
    tag: "Women Empowerment",
    tagColor: "#1E5A3D",
  },
];

const stats = [
  { icon: Users, value: "5,000+", label: "Lives Impacted" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate" },
  { icon: Award, value: "12+", label: "Years of Service" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={15} fill="#C9A84C" color="#C9A84C" />
    ))}
  </div>
);

const Avatar = ({ initials, bg }) => (
  <div
    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0"
    style={{ background: bg }}
  >
    {initials}
  </div>
);

const Tag = ({ label, color }) => (
  <span
    className="text-xs font-semibold px-3 py-1 rounded-full"
    style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
  >
    {label}
  </span>
);

const TestimonialCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: index * 0.08 }}
    viewport={{ once: true }}
    whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(45,90,61,0.13)" }}
    className="rounded-2xl p-6 flex flex-col gap-4 h-full"
    style={{
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(237,228,206,0.8)",
      boxShadow: "0 4px 24px rgba(45,90,61,0.07)",
      transition: "box-shadow 0.3s ease, transform 0.3s ease",
    }}
  >
    {/* Top */}
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <Avatar initials={item.avatar} bg={item.avatarBg} />
        <div>
          <p className="font-bold text-sm" style={{ color: "#1A3322" }}>{item.name}</p>
          <p className="text-xs font-medium" style={{ color: "#4B5E53" }}>{item.role}</p>
          <p className="text-xs mt-0.5" style={{ color: "#8A9E93" }}>{item.location}</p>
        </div>
      </div>
      <Quote size={28} style={{ color: "#C9A84C", opacity: 0.5, flexShrink: 0 }} />
    </div>

    {/* Stars */}
    <StarRating count={item.stars} />

    {/* Text */}
    <p className="text-sm leading-relaxed flex-1" style={{ color: "#3D5045" }}>
      "{item.text}"
    </p>

    {/* Tag */}
    <div className="pt-1">
      <Tag label={item.tag} color={item.tagColor} />
    </div>
  </motion.div>
);

// ─── Featured / Carousel ──────────────────────────────────────────────────────

const FeaturedCarousel = () => {
  const [current, setCurrent] = useState(0);
  const item = testimonials[current];

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <div
      className="relative rounded-3xl overflow-hidden p-8 sm:p-12"
      style={{
        background: "linear-gradient(135deg, #1E3D2F 0%, #2D5A3D 60%, #1A3322 100%)",
        boxShadow: "0 32px 64px rgba(30,61,47,0.35)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-16 -right-16 w-60 h-60 rounded-full opacity-10"
        style={{ background: "#C9A84C" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: "#C9A84C" }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {/* Large quote */}
          <Quote size={48} style={{ color: "#C9A84C", opacity: 0.4 }} className="mb-6" />

          {/* Text */}
          <p
            className="text-lg sm:text-2xl font-medium leading-relaxed mb-8"
            style={{ color: "rgba(253,248,240,0.93)" }}
          >
            "{item.text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
              style={{ background: "rgba(201,168,76,0.25)", border: "2px solid rgba(201,168,76,0.5)" }}
            >
              {item.avatar}
            </div>
            <div>
              <p className="font-bold text-white text-base">{item.name}</p>
              <p className="text-sm" style={{ color: "rgba(253,248,240,0.65)" }}>
                {item.role} · {item.location}
              </p>
              <div className="mt-1">
                <StarRating count={item.stars} />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="relative z-10 flex items-center gap-3 mt-8">
        <button
          onClick={prev}
          className="p-2.5 rounded-full border transition-all"
          style={{
            borderColor: "rgba(201,168,76,0.4)",
            color: "#C9A84C",
            background: "rgba(201,168,76,0.1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.25)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.1)")}
        >
          <ChevronLeft size={18} />
        </button>
        {/* Dots */}
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "#C9A84C" : "rgba(201,168,76,0.35)",
              }}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2.5 rounded-full border transition-all"
          style={{
            borderColor: "rgba(201,168,76,0.4)",
            color: "#C9A84C",
            background: "rgba(201,168,76,0.1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.25)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.1)")}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

const TestimonialsSection = () => {
  return (
    <section
      className="w-full"
      style={{ background: "linear-gradient(180deg, #FDF8F0 0%, #F5EDD8 50%, #FDF8F0 100%)" }}
    >
      {/* ── Hero Banner ── */}
      <div
        className="w-full py-28 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1A3322 0%, #2D5A3D 50%, #1E3D2F 100%)",
        }}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #C9A84C 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #C9A84C 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(201,168,76,0.18)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.4)" }}
          >
            Voices of Impact
          </span>
          <div
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight drop-shadow-sm"
            style={{ fontFamily: "'Gloria Hallelujah', cursive", color: "#FDF8F0" }}
          >
            <SplitText text="Stories That Inspire" delayStep={0.035} style={{ color: "#FDF8F0" }} />
          </div>
          {/* Animated underline — matches other pages */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
            className="h-1.5 w-64 mx-auto rounded-full mb-6 shadow-sm"
            style={{
              background: "linear-gradient(to right, transparent, #C9A84C, #FDF8F0, #C9A84C, transparent)",
              transformOrigin: "center",
            }}
          />
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "rgba(253,248,240,0.75)" }}
          >
            Hear directly from the communities, partners, and beneficiaries whose lives have been transformed through the work of Focus International Foundation.
          </p>
        </motion.div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 rounded-2xl overflow-hidden shadow-xl"
          style={{ background: "linear-gradient(135deg, #2D5A3D, #1E3D2F)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-6 px-4 text-center"
              style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(201,168,76,0.2)" : "none" }}
            >
              <s.icon size={22} style={{ color: "#C9A84C" }} className="mb-2" />
              <span className="text-2xl font-black text-white">{s.value}</span>
              <span className="text-xs mt-0.5" style={{ color: "rgba(253,248,240,0.6)" }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Featured Carousel ── */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center mb-8">
            <span
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#C9A84C" }}
            >
              Featured Review
            </span>
            <h2 className="text-3xl font-black" style={{ color: "#1A3322" }}>
              A Story Worth Sharing
            </h2>
          </div>
          <FeaturedCarousel />
        </motion.div>
      </div>

      {/* ── All Reviews Grid ── */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pb-20">
        <div className="flex flex-col items-center text-center mb-12">
          <span
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            All Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#1A3322" }}>
            What Our Community Says
          </h2>
          <p className="text-sm mt-3 max-w-xl" style={{ color: "#4B5E53" }}>
            Every review represents a real life changed. Here are the words directly from the people we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* ── Stories of Change ── */}
      <div className="w-full relative z-20 bg-white py-16 mb-20 shadow-sm shadow-[#2D5A3D]/5 border-y border-[#EDE4CE] mt-4">
        <div className="max-w-7xl mx-auto">
          <StoriesOfChange />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="pb-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-3xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #1E3D2F, #2D5A3D)",
            boxShadow: "0 20px 60px rgba(30,61,47,0.25)",
          }}
        >
          <Quote size={36} style={{ color: "#C9A84C", opacity: 0.5 }} className="mx-auto mb-5" />
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Have a Story to Share?
          </h3>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(253,248,240,0.72)" }}>
            If you or someone you know has been positively impacted by Focus International Foundation, we'd love to hear from you. Your story can inspire thousands more.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#1A3322" }}
          >
            Share Your Story →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
