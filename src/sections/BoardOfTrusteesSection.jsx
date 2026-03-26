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
      <div className="relative z-10 bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-4 block">Leadership Team</span>
            <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D5A3D]">Focus International Foundation</h2>
            </div>
            <div className="w-24 h-1.5 mx-auto rounded-full bg-[#C9A84C] mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {[1, 2, 3].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] mb-8 shadow-2xl border border-[#EDE4CE] bg-[#FDF8F0]">
                  <img src="/profiledemo.jpg" alt="Trustee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Premium overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A3D]/90 via-[#2D5A3D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Gold hover sweep border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                
                <div className="text-center px-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D5A3D] mb-2 drop-shadow-sm">Trustee Name {idx+1}</h3>
                  <p className="text-[#C9A84C] font-black uppercase tracking-[0.15em] text-sm">Managing Trustee</p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A3D]/80 via-[#2D5A3D]/20 to-transparent hidden md:block"></div>
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
