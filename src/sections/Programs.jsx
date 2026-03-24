import React from "react";
import * as motion from "motion/react-client";
import {
  BookOpenCheck,
  HandHeart,
  UtensilsCrossed,
  Leaf,
  HeartPulse,
  Lightbulb,
  ShieldAlert,
  Tent
} from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: <Lightbulb size={80} strokeWidth={1.5} />,
      title: "Awareness",
      desc: "Child abuse, Breast feeding, Child care, Health, Kitchen garden, Sanitation and hygiene, Youth & Women empowerment, Career counseling, Road safety, Food safety training and certification (Fos TaC), QCI Industrial certification and training, Legal, Domestic Violence.",
      img: "/1.png",
      colorA: "#C9A84C",
      colorB: "#E8C96A",
    },
    {
      icon: <BookOpenCheck size={80} strokeWidth={1.5} />,
      title: "Education",
      desc: "Adult literacy, Non-formal, VidyaVhan special Tuition classes from 5 to 10 std., Free Tuition classes from 1 to 4 std., Sponsorship for drop out student, Day care scholarship.",
      img: "/education.jpg",
      colorA: "#2D5A3D",
      colorB: "#4A7C59",
    },
    {
      icon: <HeartPulse size={80} strokeWidth={1.5} />,
      title: "Health",
      desc: "Medical health camp, De-worming and immunization, Special care and hospitalization for critical cases, Yoga classes, Leprosy care.",
      img: "/9.png",
      colorA: "#4A7C59",
      colorB: "#7A8F81",
    },
    {
      icon: <UtensilsCrossed size={80} strokeWidth={1.5} />,
      title: "Food and Nutrition",
      desc: "Day Care centre, Home sponsorship for mother and child, Special food for special occasion.",
      img: "/8.png",
      colorA: "#E8C96A",
      colorB: "#C9A84C",
    },
    {
      icon: <HandHeart size={80} strokeWidth={1.5} />,
      title: "Relief",
      desc: "Cloth distribution, Blanket distribution, Food distribution, Flood relief and rescued, Educational supplement distribution.",
      img: "/2.png",
      colorA: "#2D5A3D",
      colorB: "#4A7C59",
    },
    {
      icon: <ShieldAlert size={80} strokeWidth={1.5} />,
      title: "Rescue & Rehabilitation",
      desc: "Sponsored to poor and needy, Sponsored to orphan children, Restoration to orphan children, Shelter settlement to the victim family.",
      img: "/10.png",
      colorA: "#C9A84C",
      colorB: "#E8C96A",
    },
    {
      icon: <Tent size={80} strokeWidth={1.5} />,
      title: "Cultural Events",
      desc: "Game and sports, Hidden talent, Quiz competition, Annual sports day and function, Birthday celebration, Festival observation, National day observation.",
      img: "/3.png",
      colorA: "#4A7C59",
      colorB: "#7A8F81",
    },
    {
      icon: <Leaf size={80} strokeWidth={1.5} />,
      title: "Community Development",
      desc: "Plantation, Road cleaning, Resources mobilizing, Legal protection and human Rights, Revolving loan for income generation small business, Water facilities, Government liaising for several needs for community development.",
      img: "/101.jpg",
      colorA: "#E8C96A",
      colorB: "#C9A84C",
    },
  ];

  return (
    // <section className="relative w-full py-24 md:py-32 overflow-hidden">
    <section
      className="relative w-full py-24 md:py-32 overflow-hidden animate-bgGlow"
      style={{
        background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)",
      }}
    >
      {/* DOTTED BACKGROUND */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.22, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-[url('/dots.png')] bg-cover opacity-30"
      />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-14 leading-tight drop-shadow-sm"
        style={{ color: "#2D5A3D" }}
      >
        <span className="funky-text" style={{ color: "#C9A84C" }}>Our</span> Programs
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 px-6">
        {programs.map((p, i) => (
          <ProgramCard
            key={i}
            icon={p.icon}
            title={p.title}
            desc={p.desc}
            img={p.img}
            colorA={p.colorA}
            colorB={p.colorB}
            i={i}
          />
        ))}
      </div>
    </section>
  );
}



function ProgramCard({ title, desc, img, icon, colorA, colorB, i }) {
  const bg = `linear-gradient(306deg, ${colorA}, ${colorB})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6 }}
      style={{
        overflow: "hidden",
        position: "relative",
        paddingTop: 20,
        paddingBottom: 80,
      }}
    >
      {/* SPLASH BACKGROUND */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: bg,
          clipPath:
            "path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')",
          opacity: 0.35,
        }}
      />

      {/* ACTUAL CARD */}
      <motion.div
        variants={cardVariants}
        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center z-10 relative border"
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
          borderColor: "#EDE4CE"
        }}
      >
        <div className="mb-6" style={{ color: "#2D5A3D" }}>{icon}</div>

        <img
          src={img}
          className="w-full h-56 object-cover rounded-xl shadow-md mb-6"
        />

        <h3 className="text-2xl font-bold funky-text mb-3" style={{ color: "#2D5A3D" }}>
          {title}
        </h3>

        <p className="text-md leading-relaxed" style={{ color: "#4B5E53" }}>{desc}</p>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
    rotate: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    rotate: -8,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.9,
    },
  },
};
