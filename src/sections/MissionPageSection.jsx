import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Utensils,
  HeartHandshake,
  Stethoscope,
  UsersRound,
  Leaf,
  Heart,
  Scale,
  Zap,
  Globe,
} from "lucide-react";

// ─── SplitText ────────────────────────────────────────────────────────────────
const SplitText = ({ text, delayStep = 0.03, className = "" }) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <h2
      aria-hidden="true"
      className={`inline-block overflow-hidden ${className}`}
      style={{ lineHeight: 1.05 }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 20 }}
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

// ─── Shared colors ─────────────────────────────────────────────────────────────
const C = {
  olive:   "#2D5A3D",
  oliveMd: "#4A7C59",
  gold:    "#C9A84C",
  cream1:  "#FDF8F0",
  cream2:  "#F5EDD8",
  cream3:  "#EDE4CE",
  sage:    "#E8F2EC",
  text:    "#4B5E53",
  subtle:  "#7A8F81",
};

// ─── Section heading helper ────────────────────────────────────────────────────
const SectionHeading = ({ text, sub }) => (
  <div className="text-center mb-14">
    <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
      <SplitText
        text={text}
        className="text-3xl md:text-4xl font-extrabold"
        style={{ color: C.olive }}
      />
    </div>
    {sub && (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-4 text-lg"
        style={{ color: C.text }}
      >
        {sub}
      </motion.p>
    )}
  </div>
);

// ─── Gold accent divider ───────────────────────────────────────────────────────
const GoldDivider = () => (
  <div className="mx-auto mt-5 mb-2 w-16 h-1 rounded-full"
    style={{ background: `linear-gradient(to right, ${C.olive}, ${C.gold})` }} />
);

// ─── Initiative pill badge ─────────────────────────────────────────────────────
const InitiativeBadge = ({ num, bg }) => (
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm"
    style={{ background: bg, color: C.olive }}
  >
    {num}
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────────
const MissionPageSection = () => {
  const pillarData = [
    { Icon: Heart,    label: "Compassion",   desc: "We believe kindness is the first step toward real societal transformation.", bg: C.sage },
    { Icon: Scale,    label: "Equality",     desc: "A fair society begins when opportunities reach those who need them most.", bg: "#FDF5E0" },
    { Icon: Zap,      label: "Empowerment",  desc: "Empowering individuals ensures sustainable and long-lasting progress.", bg: C.sage },
    { Icon: Globe,    label: "Unity",        desc: "We unite communities across differences to build shared futures.", bg: "#FDF5E0" },
  ];

  const programs = [
    { Icon: BookOpenCheck, title: "Education Support",       desc: "Providing books, school kits, and classroom support to underprivileged children.", img: "/7.png",        bg: C.sage  },
    { Icon: Utensils,      title: "Healthy Meals",           desc: "Ensuring children and families receive nutritious meals every week.",              img: "/8.png",        bg: "#FDF5E0" },
    { Icon: Stethoscope,   title: "Medical Camps",           desc: "Offering free health checkups, medicines, and awareness drives.",                  img: "/9.png",        bg: C.sage  },
    { Icon: HeartHandshake,title: "Women Empowerment",       desc: "Skill development, financial literacy and leadership programs for women.",         img: "/women.jpg",    bg: "#FDF5E0" },
    { Icon: UsersRound,    title: "Community Development",   desc: "Building stronger communities with local leadership and resilience.",              img: "/10.png",       bg: C.sage  },
    { Icon: Leaf,          title: "Environmental Conservation", desc: "Protecting natural resources and promoting sustainable practices.",              img: "/101.jpg",      bg: "#FDF5E0" },
  ];

  const primaryObjects = [
    {
      num: "i",
      title: "Education & Development",
      desc: "To undertake and support relief or assistance of any kind relating to education, literary excellence, sports, people engaged in farming, public health including the creation or upgradation of facilities, funding activities or any other type of support.",
      cardBg: C.sage,
    },
    {
      num: "ii",
      title: "Financial Assistance",
      desc: "To render financial assistance, provide grants or payment of money or take such other steps as may be deemed necessary by the Board of Trustees including assistance to charitable organizations with charitable objectives.",
      cardBg: "#FDF5E0",
    },
    {
      num: "iii",
      title: "Aligned Activities",
      desc: "To undertake any other activity which is not inconsistent with the above objectives, ensuring all efforts contribute to the greater good of society.",
      cardBg: C.sage,
    },
  ];

  const initiatives = [
    { num: "1", bg: C.sage,    title: "Regional Development Schemes",   desc: "Schemes spreading across different blocks of Odisha, specifically the 15 blocks of Keonjhar District and Bonth and Bhandari Pokahri Blocks of Bhadrak District." },
    { num: "2", bg: "#FDF5E0", title: "Academic Excellence Awards",     desc: "Cash prizes for exam toppers in different streams clearing Board and University level exams, decided by a committee formed by the Chairman." },
    { num: "3", bg: C.sage,    title: "Manoj Das Sahitya Award",         desc: "Cash prize award for eminent writers to be decided by a committee formed by the Chairman of the Trust." },
    { num: "4", bg: "#FDF5E0", title: "Student Financial Support",      desc: "Monthly financial assistance to meritorious and underprivileged students in Engineering, Medical, Diploma Engineering, Bachelor's, Post Graduation, and Nursing streams." },
    { num: "5", bg: C.sage,    title: "Best Cultivator Awards",         desc: "Cash prize awards for the best cultivator in all 30 districts of Odisha, promoting agricultural excellence." },
    { num: "6", bg: "#FDF5E0", title: "Sports Excellence Recognition",  desc: "Cash prize awards to Odia Medal Winners of National and International sports, celebrating athletic achievement." },
    { num: "7", bg: C.sage,    title: "Charitable Organization Support",desc: "Annual cash prize awards to KMBB and Ama Odissa for pursuing their charitable objectives." },
    { num: "8", bg: "#FDF5E0", title: "Direct Benefit Programs",        desc: "Direct benefits to particular programmes, institutions, or persons aligned with the above objectives." },
  ];

  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: `linear-gradient(to bottom right, ${C.cream1}, ${C.cream2}, ${C.cream3})` }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: C.gold }} />
      <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: C.oliveMd }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ═══════════════ MAIN HEADING ═══════════════ */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: C.sage, color: C.olive }}
          >
            Our Mission
          </motion.span>
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText
              text="Our Mission — Empower Change"
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: C.olive }}
            />
          </div>
          <GoldDivider />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 max-w-2xl mx-auto text-lg"
            style={{ color: C.text }}
          >
            Every action we take is driven by our commitment to uplift those in need and build a sustainable, just society.
          </motion.p>
        </div>

        {/* ═══════════════ CORE MISSION / WHAT WE DO / VISION GRID ═══════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Our Core Mission",
              text: "To ensure social justice, economic and educational enhancement to the disadvantage sections of the society, focusing on Women, youth and children through developing mechanism aiming at service delivery and capacity building.",
              accent: C.sage,
            },
            {
              title: "What We Work On",
              isList: true,
              items: ["📘 Awareness & Education", "🥗 Food & Nutrition", "👩 Women Empowerment", "🚑 Health & Relief", "🌱 Community Development & Rescue"],
              accent: "#FDF5E0",
            },
            {
              title: "Our Long-Term Vision",
              text: "To create a society where people are placed at the centre of all development initiative ensuring Social justice and human rights.",
              accent: C.sage,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 shadow-xl overflow-hidden"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              <div className="w-full h-1.5 -mx-8 -mt-8 mb-6 rounded-t-3xl"
                style={{ background: `linear-gradient(to right, ${C.olive}, ${C.gold})`, width: "calc(100% + 4rem)" }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: C.olive }}>{item.title}</h3>
              {item.isList ? (
                <ul className="space-y-2" style={{ color: C.text }}>
                  {item.items.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              ) : (
                <p className="leading-relaxed" style={{ color: C.text }}>{item.text}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* ═══════════════ IMPACT QUOTE BANNER ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-28 rounded-3xl p-10 shadow-xl text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${C.olive}, #1E3D2F)` }}
        >
          <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-20"
            style={{ background: C.gold }} />
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
            "Impact begins with you."
          </h3>
          <p className="text-lg max-w-3xl mx-auto relative z-10" style={{ color: "rgba(253,248,240,0.88)" }}>
            Every contribution — big or small — becomes a stepping stone
            toward a brighter future for those who need it most.
          </p>
        </motion.div>

        {/* ═══════════════ TOUCHING LIVES THROUGH ACTION ═══════════════ */}
        <SectionHeading
          text="Touching Lives Through Action"
          sub="Real programs, real people, real change."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {programs.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              <img src={p.img} className="w-full h-48 object-cover" alt={p.title} />
              <div className="p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: p.bg, color: C.olive }}>
                  <p.Icon size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: C.olive }}>{p.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: C.text }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════ PILLARS OF CHANGE ═══════════════ */}
        <SectionHeading text="Our Pillars of Change" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-28">
          {pillarData.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl shadow-xl text-center"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: p.bg, color: C.olive }}>
                <p.Icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ color: C.olive }}>{p.label}</h4>
              <p className="text-sm leading-relaxed" style={{ color: C.text }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════ OUR OBJECTIVES ═══════════════ */}
        <SectionHeading
          text="Our Objectives"
          sub="The mission of Focus International Foundation is built on purpose-driven objectives designed to empower communities and create lasting impact."
        />

        {/* Primary Objects */}
        <h4 className="text-2xl font-bold mb-8" style={{ color: C.olive }}>Primary Objects</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {primaryObjects.map((obj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 shadow-xl"
              style={{ background: obj.cardBg, border: "1px solid #EDE4CE" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: `linear-gradient(135deg, ${C.olive}, ${C.oliveMd})` }}>
                  {obj.num}
                </div>
                <h5 className="text-lg font-bold" style={{ color: C.olive }}>{obj.title}</h5>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: C.text }}>{obj.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Initiatives */}
        <h4 className="text-2xl font-bold mb-8" style={{ color: C.olive }}>Trust Initiatives & Programs</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              <div className="flex gap-4">
                <InitiativeBadge num={item.num} bg={item.bg} />
                <div>
                  <h6 className="font-bold mb-2" style={{ color: C.olive }}>{item.title}</h6>
                  <p className="text-sm leading-relaxed" style={{ color: C.text }}>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════ INCLUSIVITY CARD ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          {/* Gold glow border */}
          <div className="absolute -inset-1 rounded-3xl blur opacity-30"
            style={{ background: `linear-gradient(to right, ${C.gold}, ${C.olive}, ${C.gold})` }} />

          <div className="relative rounded-3xl p-10 md:p-12 shadow-2xl text-center overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}>
            {/* accent top strip */}
            <div className="absolute top-0 left-0 w-full h-1.5"
              style={{ background: `linear-gradient(to right, ${C.olive}, ${C.gold}, ${C.olive})` }} />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-30"
              style={{ background: C.sage }} />
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ background: "#FDF5E0" }} />

            <div className="mb-5 flex justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-inner"
                style={{ background: C.sage, border: "2px solid #EDE4CE" }}>
                🤝
              </div>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: C.olive }}>
              Unwavering Inclusivity
            </h4>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto italic relative z-10"
              style={{ color: C.text }}>
              "The benefit of the Objects would be available to the general public irrespective
              of caste, creed, language, religion, region, sex."
            </p>
          </div>
        </motion.div>

        {/* ═══════════════ FUTURE COMMITMENT ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 shadow-xl text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${C.olive}, #1E3D2F)` }}
        >
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-20"
            style={{ background: C.gold }} />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-15"
            style={{ background: C.gold }} />
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
            "Together, we shape a future filled with dignity."
          </h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed relative z-10"
            style={{ color: "rgba(253,248,240,0.88)" }}>
            Our mission stretches far beyond temporary help.
            We work to create systems, support, and opportunities
            that transform lives for generations to come.
            <br /><br />
            <strong style={{ color: C.gold }}>
              Every smile, every future, every empowered life — begins with you.
            </strong>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionPageSection;
