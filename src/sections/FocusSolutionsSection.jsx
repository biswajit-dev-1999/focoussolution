import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Phone, Mail, Building2, Briefcase, 
  Users, Database, Home, GraduationCap,
  Utensils, Smartphone, Award, Building, Quote, Navigation
} from 'lucide-react';

// ─── SplitText ────────────────────────────────────────────────────────────────
const SplitText = ({ text, delayStep = 0.03, className = "", style = {}, Tag = "h2" }) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <Tag className={`inline-block overflow-hidden ${className}`} style={{ lineHeight: 1.05, ...style }}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * delayStep, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
};

const FocusSolutionsSection = () => {
  const THEME = {
    gold: "#C9A84C",
    green: "#2D5A3D",
    bgLight: "#FDF8F0",
    textDark: "#2D5A3D",
    textMuted: "#4B5E53",
  };

  const services = [
    { name: "Contract Staffing Solutions", icon: Users, color: "#2D5A3D", bg: "#E8F2EC" },
    { name: "Data Transmission Services", icon: Database, color: "#C9A84C", bg: "#FDF5E0" },
    { name: "Real Estate Consultancy", icon: Home, color: "#4A7C59", bg: "#E8F2EC" },
    { name: "Education & Training", icon: GraduationCap, color: "#B8860B", bg: "#FDF5E0" },
  ];

  const projects = [
    {
      title: "FOSTAC",
      desc: "Food safety training & certification (FSSAI). Assigned for Odisha & West Bengal by SKETCH the art to Create.",
      icon: Utensils,
      bg: "#FDF5E0", color: "#C9A84C"
    },
    {
      title: "Airtel Payments Bank",
      desc: "Distributorship assigned for the state of Odisha by Airtel Payments Bank Limited.",
      icon: Smartphone,
      bg: "#E8F2EC", color: "#2D5A3D"
    },
    {
      title: "ZED Certification",
      desc: "Quality Council of India (Zero Defect Zero Effect) MSME Sustainable scheme assigned for Odisha by RSI.",
      icon: Award,
      bg: "#FDF5E0", color: "#C9A84C"
    },
    {
      title: "Vidaya Bhaban Education",
      desc: "Educational project for Odisha assigned by IIT Bhubaneswar, Research and Entrepreneurship Park.",
      icon: GraduationCap,
      bg: "#E8F2EC", color: "#4A7C59"
    },
    {
      title: "Real Estate Consultancy",
      desc: "Consultancy and management assigned by SALASS Infra Solutions.",
      icon: Building,
      bg: "#FDF5E0", color: "#B8860B"
    }
  ];

  return (
    <section className="w-full relative pb-32 overflow-hidden selection:bg-[#C9A84C] selection:text-white" style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)" }}>
      
      {/* Decorative blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-0 right-[-10%] w-[800px] h-[800px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: THEME.gold }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
        className="absolute top-96 left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: THEME.green }}
      />

      {/* ── 1. PREMIUM HERO ── */}
      <div className="pt-32 pb-24 px-6 lg:px-10 text-center max-w-5xl mx-auto relative z-10">
        <div className="mb-6 flex justify-center">
          <img
            src="/logo101.png"
            alt="Focus Solutions Logo"
            className="h-28 w-auto rounded-2xl shadow-xl border-2 border-[#C9A84C]"
            style={{ backgroundColor: "#ffffff" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 shadow-sm"
          style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
        >
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: THEME.gold }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: THEME.gold }}>
            A Division of Focus International
          </span>
        </motion.div>
        
        <div className="mb-8 drop-shadow-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
          <SplitText
            text="FOCUS"
            className="text-6xl md:text-7xl lg:text-8xl tracking-tight"
            style={{ color: THEME.textDark }}
            Tag="h1"
          />
          <SplitText
            text="SOLUTIONS"
            delayStep={0.04}
            className="text-6xl md:text-7xl lg:text-8xl tracking-tight"
            style={{ color: THEME.gold }}
            Tag="h1"
          />
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="h-1.5 w-32 mx-auto rounded-full mb-8"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, #2D5A3D, #C9A84C, transparent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg md:text-xl md:leading-relaxed font-medium max-w-3xl mx-auto"
          style={{ color: THEME.textMuted }}
        >
          Committed to delivering <strong style={{ color: THEME.green }}>under-one-roof solutions</strong> to build a healthy society where people are placed at the center of ZERO DEFECT ZERO EFFECT (ZED).
        </motion.p>
      </div>

      {/* ── 2. GLASSMORPHISM COMPANY INFO ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-4xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 overflow-hidden"
          style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C, #2D5A3D)" }} />
          
          <div className="text-center md:text-left flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.gold }}>Proprietor / Legal Name</p>
            <p className="text-xl md:text-2xl font-bold" style={{ color: THEME.textDark }}>Mr. Pradeep Kumar Mukherjee</p>
          </div>
          
          <div className="hidden md:block w-px h-16 opacity-30" style={{ background: THEME.gold }}></div>
          
          <div className="text-center flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: THEME.gold }}>Registration (GSTIN)</p>
            <span className="font-mono text-lg font-bold px-5 py-2 rounded-xl border" style={{ background: THEME.bgLight, color: THEME.textDark, borderColor: "#EDE4CE" }}>
              21AKBPM8511H3ZH
            </span>
          </div>
          
          <div className="hidden md:block w-px h-16 opacity-30" style={{ background: THEME.gold }}></div>
          
          <div className="text-center md:text-right flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.gold }}>Constitution</p>
            <p className="text-xl font-bold flex flex-col md:items-end" style={{ color: THEME.textMuted }}>
              Proprietorship
              <span className="text-sm font-semibold mt-1" style={{ color: "#7A8F81" }}>(Since Dec 2022)</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── 3. CORE BUSINESS CARDS ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-32 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#E8F2EC", color: THEME.green }}
          >
            Services
          </motion.span>
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText text="Core Business Activities" className="text-3xl md:text-4xl font-extrabold" style={{ color: THEME.textDark }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(45,90,61,0.1)" }}
              className="relative bg-white p-8 rounded-4xl shadow-lg border border-[#EDE4CE] text-center group transition-all duration-300 overflow-hidden"
            >
              {/* Bottom sweep line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 transition-all duration-500" style={{ background: service.color }} />
              
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ background: service.bg }}>
                <service.icon size={28} strokeWidth={1.5} style={{ color: service.color }} />
              </div>
              <h3 className="font-bold text-lg leading-snug" style={{ color: THEME.textDark }}>{service.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 4. OFFICIAL APPEAL (Premium Quote) ── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl border border-[#EDE4CE] overflow-hidden text-center"
        >
          {/* Decorative Corner Brackets */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: THEME.gold, opacity: 0.5 }} />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 rounded-tr-xl" style={{ borderColor: THEME.gold, opacity: 0.5 }} />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 rounded-bl-xl" style={{ borderColor: THEME.gold, opacity: 0.5 }} />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: THEME.gold, opacity: 0.5 }} />

          <Quote className="absolute top-10 left-1/2 -translate-x-1/2 w-28 h-28 opacity-5 z-0" style={{ color: THEME.green }} />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase mb-8" style={{ color: THEME.gold }}>An Official Appeal</h3>
            
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic" style={{ color: THEME.textDark }}>
              "On behalf of FOCUS SOLUTIONS, may I draw your kind attention to be partnering with more opportunities, aiming to provide more services to build a healthy community and celebrate the <span className="font-bold border-b-2" style={{ color: THEME.gold, borderColor: THEME.gold }}>TEARS OF JOY</span>."
            </p>
            
            <p className="text-lg leading-relaxed mb-10 font-medium" style={{ color: THEME.textMuted }}>
              Keeping the above into consideration you may kindly consider extending support to FOCUS SOLUTIONS so as to enable us as a wide service provider, operating in sincerity and professionalism.
            </p>

            <div className="inline-flex flex-col items-center">
              <div className="w-16 h-1 rounded-full mb-5" style={{ background: THEME.green }}></div>
              <h4 className="text-xl font-bold" style={{ color: THEME.textDark }}>Mr. Pradeep Kumar Mukherjee</h4>
              <p className="text-sm font-semibold mt-1 uppercase tracking-widest" style={{ color: THEME.gold }}>Proprietor, Focus Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── 5. PROJECT EXPERIENCE (Row Layout) ── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 mb-32 relative z-10">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText text="Project Experience" className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: THEME.textDark }} />
          </div>
          <div className="w-24 h-1.5 mx-auto rounded-full" style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}></div>
        </div>

        <div className="space-y-5">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ x: 8 }}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              {/* Left Accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl" style={{ background: proj.color }} />

              <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: proj.bg, border: "1px solid #EDE4CE" }}>
                <proj.icon size={26} strokeWidth={1.5} style={{ color: proj.color }} />
              </div>

              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 transition-colors duration-300" style={{ color: THEME.textDark }}>
                  {proj.title}
                </h4>
                <p className="text-base leading-relaxed font-medium" style={{ color: THEME.textMuted }}>
                  {proj.desc}
                </p>
              </div>

              <div className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0" style={{ background: proj.bg }}>
                <Navigation size={18} style={{ color: proj.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 6. DARK GREEN OFFICES FOOTER ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl overflow-hidden"
          style={{ background: THEME.green }}
        >
          {/* Decorative radial glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full mix-blend-screen opacity-20 transform translate-x-1/3 -translate-y-1/3 pointer-events-none blur-[100px]" style={{ background: THEME.gold }}></div>
          
          <div className="relative z-10 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b pb-12" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
                Let's Connect
              </h2>
              <p className="text-white/80 text-xl leading-relaxed">We are always ready to collaborate and expand our services for the betterment of society.</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <a href="tel:+917894992972" className="group flex items-center gap-4 text-white transition-opacity hover:opacity-80">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Phone className="w-5 h-5" style={{ color: THEME.gold }} />
                </div>
                <div className="font-semibold text-lg">+91 7894992972 <br className="hidden md:block"/> / 9437439265</div>
              </a>
              <a href="mailto:focussolutions96@gmail.com" className="group flex items-center gap-4 text-white transition-opacity hover:opacity-80">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Mail className="w-5 h-5" style={{ color: THEME.gold }} />
                </div>
                <div className="font-semibold text-lg">focussolutions96@gmail.com</div>
              </a>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Registered Office", text: "N-3/368, IRC Village, Nayapalli, Bhubaneswar, Khurdha, Odisha - 751015" },
              { icon: Building2, title: "Admin Office", text: "RAY/74 Ekamar Villa, Behera-Sahi (Infront of Sekhar Royale Apartment), Nayapalli Bhubaneswar - 751015" },
              { icon: Briefcase, title: "Functional Office", text: "CSM campus, Niladrivihar omfed colony, Near Utkal Hospital, Bhubaneswar, 751016, Odisha." }
            ].map((office, i) => (
              <div key={i} className="p-8 rounded-3xl border transition-colors hover:bg-white/10" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm" style={{ background: THEME.gold }}>
                  <office.icon className="w-6 h-6" style={{ color: THEME.green }} />
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 opacity-90">{office.title}</h4>
                <p className="text-white/80 leading-relaxed font-medium">{office.text}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default FocusSolutionsSection;
