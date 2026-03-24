import React, { useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, BookOpen, Users, Utensils } from "lucide-react";

// ─── SplitText ────────────────────────────────────────────────────────────────
const SplitText = ({ text, delayStep = 0.04, className = "", style = {} }) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <h1
      className={`inline-block overflow-hidden ${className}`}
      style={{ lineHeight: 1.1, ...style }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + i * delayStep, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const SLIDES = [
  { img: "/201.png", label: "Empowering Communities" },
  { img: "/202.png", label: "Transforming Lives" },
  { img: "/203.png", label: "Building Futures" },
];

const STATS = [
  { icon: BookOpen, value: "12K+", label: "Children Educated" },
  { icon: Utensils,  value: "3.8M+", label: "Meals Distributed" },
  { icon: Users,    value: "4.6K+", label: "Women Empowered" },
  { icon: Heart,    value: "50K+", label: "Lives Impacted" },
];



// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* ── Background Slideshow ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[currentSlide].img})` }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* ── Layered Overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(20,46,32,0.80) 0%, rgba(30,61,47,0.60) 50%, rgba(15,35,25,0.82) 100%)",
        }}
      />
      {/* Gold accent at the base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(201,168,76,0.18) 0%, transparent 35%)",
        }}
      />



      {/* ── Main content ── */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 max-w-2xl text-center md:text-left">

            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-7"
              style={{
                background: "rgba(201,168,76,0.22)",
                color: "#F5E9C8",
                border: "1px solid rgba(201,168,76,0.45)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              Focus International Foundation · Est. 2018
            </motion.div>

            {/* Main headline */}
            <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
              <SplitText
                text="Building Hope, One Life at a Time"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl"
              />
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="h-1 w-24 rounded-full mt-5 mx-auto md:mx-0 origin-left"
              style={{ background: "linear-gradient(to right, #C9A84C, #E8C96A)" }}
            />

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-lg mt-6 leading-relaxed max-w-xl mx-auto md:mx-0"
              style={{ color: "rgba(253,248,240,0.88)" }}
            >
              Together, we create sustainable change by uplifting communities,
              empowering families, and bringing opportunities to those who need
              them most.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="flex flex-wrap gap-4 mt-9 justify-center md:justify-start"
            >
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                  color: "#1E3D2F",
                  boxShadow: "0 8px 32px rgba(201,168,76,0.45)",
                }}
              >
                Donate Now
                <Heart size={17} strokeWidth={2.5} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold border transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(253,248,240,0.12)",
                  color: "#FDF8F0",
                  border: "1.5px solid rgba(253,248,240,0.45)",
                  backdropFilter: "blur(6px)",
                }}
              >
                Our Mission
                <ArrowRight size={17} />
              </Link>
            </motion.div>


          </div>

          {/* ── RIGHT: Orbital Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
            className="hidden md:flex flex-1 justify-center items-center"
          >
            <div className="relative w-[480px] h-[480px] flex items-center justify-center">

              {/* Spinning dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                className="absolute w-[380px] h-[380px] rounded-full"
                style={{
                  border: "2px dashed rgba(201,168,76,0.5)",
                }}
              />

              {/* Static gold glow ring */}
              <div
                className="absolute w-[330px] h-[330px] rounded-full"
                style={{
                  border: "2px solid rgba(201,168,76,0.25)",
                  boxShadow: "0 0 50px rgba(201,168,76,0.2), inset 0 0 50px rgba(45,90,61,0.3)",
                }}
              />

              {/* Main circular image */}
              <div
                className="w-[260px] h-[260px] rounded-full overflow-hidden relative z-10"
                style={{
                  border: "4px solid rgba(201,168,76,0.65)",
                  boxShadow:
                    "0 0 80px rgba(20,46,32,0.8), 0 0 40px rgba(201,168,76,0.25)",
                }}
              >
                <img
                  src="/201.png"
                  alt="Focus International Foundation"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at center, transparent 50%, rgba(20,46,32,0.55) 100%)",
                  }}
                />
              </div>


            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{
          background: "rgba(10,28,20,0.75)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(201,168,76,0.25)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ icon: Icon, value, label }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.18)", color: "#C9A84C" }}
              >
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-white font-extrabold text-base leading-none">
                  {value}
                </div>
                <div className="text-xs mt-0.5 font-medium" style={{ color: "rgba(253,248,240,0.6)" }}>
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
