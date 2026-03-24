import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Utensils,
  HeartHandshake,
  Stethoscope,
  UsersRound,
  Leaf,
} from "lucide-react";

const SplitText = ({ text, delayStep = 0.03, className }) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <h2 className={`inline-block overflow-hidden ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * delayStep, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const whatWeDoData = [
  {
    title: "Education Support",
    desc: "Providing quality learning opportunities, materials, and mentorship.",
    icon: <GraduationCap size={32} strokeWidth={1.5} />,
    iconBg: "#E8F2EC",
    iconColor: "#2D5A3D",
    image: "/education.jpg",
  },
  {
    title: "Nutrition Programs",
    desc: "Delivering fresh meals and essential nutrition to vulnerable families.",
    icon: <Utensils size={32} strokeWidth={1.5} />,
    iconBg: "#FDF5E0",
    iconColor: "#C9A84C",
    image: "/8.png",
  },
  {
    title: "Women Empowerment",
    desc: "Skill development, financial literacy and leadership programs for women.",
    icon: <HeartHandshake size={32} strokeWidth={1.5} />,
    iconBg: "#E8F2EC",
    iconColor: "#4A7C59",
    image: "/women.jpg",
  },
  {
    title: "Healthcare Initiatives",
    desc: "Medical camps, health checkups, and emergency care support.",
    icon: <Stethoscope size={32} strokeWidth={1.5} />,
    iconBg: "#FDF5E0",
    iconColor: "#C9A84C",
    image: "/9.png",
  },
  {
    title: "Community Development",
    desc: "Building stronger communities with local leadership and resilience.",
    icon: <UsersRound size={32} strokeWidth={1.5} />,
    iconBg: "#E8F2EC",
    iconColor: "#2D5A3D",
    image: "/10.png",
  },
  {
    title: "Environmental Conservation",
    desc: "Protecting natural resources and promoting sustainable practices.",
    icon: <Leaf size={32} strokeWidth={1.5} />,
    iconBg: "#E8F2EC",
    iconColor: "#4A7C59",
    image: "/101.jpg",
  },
];

const WhatWeDo = () => {
  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "#C9A84C" }} />
      <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#4A7C59" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText
              text="What We Do"
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: "#2D5A3D" }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-4 text-lg"
            style={{ color: "#4B5E53" }}
          >
            Empowering communities through education, nourishment, healthcare,
            equality, and sustainable development.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {whatWeDoData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl flex flex-col"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              {/* Accent strip */}
              <div className="h-1.5 w-full"
                style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C)" }} />

              <div className="p-7 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.iconBg, color: item.iconColor }}>
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: "#2D5A3D" }}>
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "#4B5E53" }}>
                  {item.desc}
                </p>

                <div className="rounded-xl overflow-hidden mt-auto shadow-md">
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
