import React, { useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, BookOpen, Users, Utensils } from "lucide-react";

// ─── SplitText ─────────────────────────────────────────
const SplitText = ({ text, delayStep = 0.04, className = "", style = {} }) => {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <h1
      className={`inline-block ${className}`}
      style={{ lineHeight: 1.1, ...style }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * delayStep,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

// ─── Data ──────────────────────────────────────────────
const SLIDES = [
  { img: "/201.png" },
  { img: "/202.png" },
  { img: "/203.png" },
];

const STATS = [
  { icon: BookOpen, value: "12K+", label: "Children Educated" },
  { icon: Utensils, value: "3.8M+", label: "Meals Distributed" },
  { icon: Users, value: "4.6K+", label: "Women Empowered" },
  { icon: Heart, value: "50K+", label: "Lives Impacted" },
];

// ─── Hero ──────────────────────────────────────────────
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[currentSlide].img})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(20,46,32,0.80) 0%, rgba(30,61,47,0.60) 50%, rgba(15,35,25,0.82) 100%)", }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(201,168,76,0.18) 0%, transparent 35%)", }} />
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20 flex flex-col md:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="flex-1 text-center md:text-left">

            {/* Headline */}
            <div className="flex justify-center md:justify-start">
              <div
                className="max-w-[90%] sm:max-w-md md:max-w-2xl lg:max-w-3xl"
                style={{ fontFamily: "'Gloria Hallelujah', cursive" }}
              >
                <SplitText
                  text="Building Hope, One Life at a Time"
                  className="
                    text-2xl 
                    sm:text-3xl 
                    md:text-4xl 
                    lg:text-5xl 
                    xl:text-6xl
                    text-white
                    font-extrabold
                    text-center md:text-left
                    leading-snug
                    drop-shadow-2xl
                  "
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-1 w-20 bg-yellow-500 mt-5 mx-auto md:mx-0 rounded-full" />

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg mt-6 text-gray-200 max-w-md mx-auto md:mx-0">
              Together, we create sustainable change by uplifting communities,
              empowering families, and bringing opportunities to those who need
              them most.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <Link
                to="/donate"
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg flex items-center gap-2 hover:scale-105 transition"
              >
                Donate Now <Heart size={16} />
              </Link>

              <Link
                to="/about"
                className="px-6 py-3 border border-white text-white rounded-lg flex items-center gap-2 hover:scale-105 transition"
              >
                Our Mission <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl">
              <img
                src="/201.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{
          background: "rgba(10,28,20,0.75)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(201,168,76,0.25)",
        }} >
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ icon: Icon, value, label }, idx) => (<div key={idx} className="flex items-center gap-3 justify-center md:justify-start" >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.18)", color: "#C9A84C" }} >
              <Icon size={18}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <div className="text-white font-extrabold text-base leading-none"> {value} </div>
              <div className="text-xs mt-0.5 font-medium"
                style={{ color: "rgba(253,248,240,0.6)" }}> {label}
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