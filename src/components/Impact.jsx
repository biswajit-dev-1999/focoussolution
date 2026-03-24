import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Heart, School, Utensils } from "lucide-react";

// ─── Animated Counter ─────────────────────────────────────────────────────────
const useCounter = (target, duration = 2200, active = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
};

// ─── Stat Panel ───────────────────────────────────────────────────────────────
const StatPanel = ({ Icon, numericValue, formatFn, label, iconColor, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const raw = useCounter(numericValue, 2200, visible);
  const display = formatFn(raw);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center text-center px-6 py-10"
    >
      {/* Subtle vertical divider except first */}
      <div
        className="absolute top-6 right-0 h-16 w-px hidden lg:block"
        style={{ background: "rgba(201,168,76,0.15)" }}
      />

      {/* Glowing icon ring */}
      <div className="relative mb-6">
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-40 scale-150"
          style={{ background: iconColor }}
        />
        <div
          className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: `1.5px solid ${iconColor}55`,
            backdropFilter: "blur(8px)",
          }}
        >
          <Icon size={26} strokeWidth={1.6} style={{ color: iconColor }} />
        </div>
      </div>

      {/* Value */}
      <div
        className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight tabular-nums leading-none"
        style={{
          background: `linear-gradient(135deg, #FFFFFF 30%, ${iconColor})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {display}
      </div>

      {/* Label */}
      <p
        className="mt-3 text-sm font-semibold uppercase tracking-widest"
        style={{ color: "rgba(253,248,240,0.55)" }}
      >
        {label}
      </p>
    </motion.div>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { Icon: School,   numericValue: 12500,    formatFn: n => `${n.toLocaleString()}+`,  label: "Children Educated",  iconColor: "#C9A84C", delay: 0 },
  { Icon: Utensils, numericValue: 3800000,  formatFn: n => `${(n/1000000).toFixed(1)}M+`, label: "Meals Served",   iconColor: "#6FCF97", delay: 0.12 },
  { Icon: Heart,    numericValue: 4600,     formatFn: n => `${n.toLocaleString()}+`,  label: "Women Empowered",    iconColor: "#F2994A", delay: 0.24 },
  { Icon: Users,    numericValue: 1200,     formatFn: n => `${n.toLocaleString()}+`,  label: "Volunteers",         iconColor: "#56CCF2", delay: 0.36 },
];

// ─── Impact Section ───────────────────────────────────────────────────────────
const Impact = () => (
  <section
    className="relative w-full overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0D2018 0%, #142E20 50%, #0A1810 100%)" }}
  >
    {/* Grain texture overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: "200px",
      }}
    />

    {/* Large radial gold glow centre */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)" }}
    />

    {/* Top and bottom gold lines */}
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)" }} />
    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)" }} />

    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 relative z-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span
          className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-5"
          style={{
            background: "rgba(201,168,76,0.12)",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          Measuring Change
        </span>

        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-none"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #C9A84C 60%, #FDF8F0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Impact
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px w-32 mx-auto mt-6"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
        />

        <p
          className="mt-5 max-w-xl mx-auto text-base leading-relaxed"
          style={{ color: "rgba(253,248,240,0.55)" }}
        >
          Real numbers. Real lives. Real change — across communities in India.
        </p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
        {STATS.map((s, i) => (
          <StatPanel key={i} {...s} />
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p
          className="text-sm italic"
          style={{ color: "rgba(201,168,76,0.6)" }}
        >
          "Every number represents a life changed — a future made possible."
        </p>
      </motion.div>

    </div>
  </section>
);

export default Impact;
