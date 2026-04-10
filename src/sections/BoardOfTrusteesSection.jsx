import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// SplitText component for fancy heading animation
const SplitText = ({ text, delayStep = 0.03, className, style }) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <h2 className={`inline-block overflow-hidden ${className}`} style={style}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: i * delayStep,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const teamMembers = [
  {
    name: "Mr.Pradeep Kumar Mukherjee",
    role: "Chief Executive",
    img: "/photo1.png",
    desc: "A leader with expertise in team management, social work, and business administration."
  },
  {
    name: "Mrs.Meenakshi Chakroborty",
    role: "Trustee",
    img: "/photo3.jpeg",
    desc: "An expert in counseling, team management, educational and real estate experience, supporting the foundation with full agility."

  },
  {
    name: "Adv. Debendra Nath Swain",
    role: "Trustee",
    img: "/photo2.png",
    desc: "A dynamic lawyer with a successful journey in the legal field and skilled in administration has been the pro active body of the foundation."
  },
  {
    name: "Ms. Abhilipsa Das",
    role: "Trustee",
    img: "/photo4.jpeg",
    desc: "A young and dynamic HR professional serving as a Trustee, with a strong passion for people and community development."
  },

];

const BoardOfTrusteesSection = () => {
  return (
    <section className="w-full relative bg-[#FDF8F0] overflow-hidden selection:bg-[#C9A84C] selection:text-white">

      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none" style={{ background: "#C9A84C" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: "#2D5A3D" }} />

      <div className="pt-32 pb-24 md:pb-32 px-6 lg:px-10 max-w-5xl mx-auto relative z-10 text-center">

        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#EDE4CE] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-[#C9A84C]">Leadership</span>
        </motion.div>

        {/* Heading */}
        <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }} className="mb-6">
          <SplitText
            text="Board of Trustees"
            className="text-5xl md:text-7xl lg:text-8xl font-black drop-shadow-sm"
            style={{ color: "#2D5A3D" }}
          />
        </div>

        {/* Quote line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 relative"
        >
          <Quote className="absolute -top-6 -left-8 w-16 h-16 text-[#C9A84C]/20 -z-10 transform -rotate-12" />
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-[#4B5E53]" style={{ fontFamily: "serif" }}>
            "Guiding the mission, shaping the vision — our trustees stand as pillars of hope,
            compassion, and leadership at Focus International Foundation."
          </p>
        </motion.div>

        {/* The Message Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-[#EDE4CE] relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#C9A84C] rounded-b-full"></div>

          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#2D5A3D]">
            Message from the Board
          </h3>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[#4B5E53]">
            <p>
              At Focus International Foundation, our purpose is deeply rooted in service, dignity, and compassion.
              We believe that every single act of kindness creates a powerful ripple effect, extending far beyond the immediate moment to touch thousands of lives.
            </p>
            <p className="font-medium text-[#2D5A3D]">
              Our Board of Trustees is unwaveringly committed to ensuring absolute transparency, accountability,
              and impact-driven action. We dedicate ourselves to not just short-term relief, but towards supporting sustainable, profound change for generations to come.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#EDE4CE] flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-[#FDF8F0] rounded-full flex items-center justify-center border border-[#C9A84C]/30 shadow-sm">
              <span className="text-[#C9A84C] font-bold text-xl">F</span>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-[#2D5A3D] text-lg">The Trustees</h4>
              <p className="text-sm font-semibold tracking-wider text-[#C9A84C] uppercase">Focus International Foundation</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── NEW: FOCUS INTERNATIONAL FOUNDATION TRUSTEES ── */}


      {/* Grid */}
      <div className="relative z-10 bg-[#FDF8F0] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-4 block">
              Leadership Team
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D5A3D]" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
              Focus International Foundation
            </h2>

            <div className="w-24 h-1.5 mx-auto rounded-full bg-[#C9A84C] mt-6"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-10 auto-rows-fr">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="w-full max-w-sm mx-auto h-full"
              >
                {/* Card */}
                <div className="h-full flex flex-col">

                  {/* Image Card */}
                  <div className="relative rounded-4xl overflow-hidden  bg-gray-100">

                    <img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-94 object-cover object-top "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="mt-5 text-center px-3 flex flex-col grow">

                    <h3 className="text-base md:text-lg font-bold text-[#2D5A3D] mb-1">
                      {member.name}
                    </h3>

                    <p className="text-[#C9A84C] text-xs uppercase tracking-wider mb-2">
                      {member.role}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {member.desc}
                    </p>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>


      {/* ── NEW: FOCUS SOLUTIONS TEAM ── */}
      <div className="relative z-10 bg-[#FDF8F0] py-24 lg:py-32 overflow-hidden border-t border-[#EDE4CE]">
        {/* Decorative Background for Team */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-[#C9A84C] rounded-full blur-[150px] opacity-[0.08] pointer-events-none transform translate-y-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-4 block">Our Dedicated Team</span>
            <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D5A3D]">Focus Solutions</h2>
            </div>
            <div className="w-24 h-1.5 mx-auto rounded-full bg-[#C9A84C] mt-6"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative aspect-video group"
          >
            {/* The single team image */}
            <img src="/101.jpg" alt="Focus Solutions Team" className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110" />

            {/* Overlay Gradient that stays crisp */}
            <div className="absolute inset-0 bg-linear-to-t from-[#2D5A3D]/80 via-[#2D5A3D]/20 to-transparent hidden md:block"></div>
            <div className="absolute inset-0 bg-[#2D5A3D]/40 md:hidden"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-16 md:left-16 md:right-16 transform translate-y-0 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 drop-shadow-xl" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
                United in Excellence
              </h3>
              <p className="text-white/95 text-lg md:text-xl font-medium drop-shadow-md max-w-2xl leading-relaxed mx-auto md:mx-0">
                Together we ideate, innovate, and implement dynamic solutions that empower communities and individuals alike to reach their highest potential.
              </p>
            </div>

            {/* Decorative Gold Frame inside */}
            <div className="absolute inset-4 md:inset-6 border border-white/20 rounded-[2.5rem] pointer-events-none mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default BoardOfTrusteesSection;
