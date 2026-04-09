// import React, { useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin, Phone, Mail, Building2, Briefcase, 
//   Users, Database, Home, GraduationCap,
//   Utensils, Smartphone, Award, Building, Quote, Navigation
// } from 'lucide-react';

// // ─── SplitText ────────────────────────────────────────────────────────────────
// const SplitText = ({ text, delayStep = 0.03, className = "", style = {}, Tag = "h2" }) => {
//   const letters = useMemo(() => text.split(""), [text]);
//   return (
//     <Tag className={`inline-block overflow-hidden ${className}`} style={{ lineHeight: 1.05, ...style }}>
//       {letters.map((char, i) => (
//         <motion.span
//           key={i}
//           style={{ display: "inline-block", whiteSpace: "pre" }}
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: i * delayStep, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.6 }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </Tag>
//   );
// };

// const FocusSolutionsSection = () => {
//   const THEME = {
//     gold: "#C9A84C",
//     green: "#2D5A3D",
//     bgLight: "#FDF8F0",
//     textDark: "#2D5A3D",
//     textMuted: "#4B5E53",
//   };

//   const services = [
//     { name: "Contract Staffing Solutions", icon: Users, color: "#2D5A3D", bg: "#E8F2EC" },
//     { name: "Data Transmission Services", icon: Database, color: "#C9A84C", bg: "#FDF5E0" },
//     { name: "Real Estate Consultancy", icon: Home, color: "#4A7C59", bg: "#E8F2EC" },
//     { name: "Education & Training", icon: GraduationCap, color: "#B8860B", bg: "#FDF5E0" },
//   ];

//   const projects = [
//     {
//       title: "FOSTAC",
//       desc: "Food safety training & certification (FSSAI). Assigned for Odisha & West Bengal by SKETCH the art to Create.",
//       icon: Utensils,
//       bg: "#FDF5E0", color: "#C9A84C"
//     },
//     {
//       title: "Airtel Payments Bank",
//       desc: "Distributorship assigned for the state of Odisha by Airtel Payments Bank Limited.",
//       icon: Smartphone,
//       bg: "#E8F2EC", color: "#2D5A3D"
//     },
//     {
//       title: "ZED Certification",
//       desc: "Quality Council of India (Zero Defect Zero Effect) MSME Sustainable scheme assigned for Odisha by RSI.",
//       icon: Award,
//       bg: "#FDF5E0", color: "#C9A84C"
//     },
//     {
//       title: "Vidya Bhawan Education",
//       desc: "Educational project for Odisha assigned by IIT Bhubaneswar, Research and Entrepreneurship Park.",
//       icon: GraduationCap,
//       bg: "#E8F2EC", color: "#4A7C59"
//     },
//     {
//       title: "Real Estate Consultancy",
//       desc: "Led consultancy initiatives and management operations for SALASS Infra Solutions.",
//       icon: Building,
//       bg: "#FDF5E0", color: "#B8860B"
//     }
//   ];

//   return (
//     <section className="w-full relative pb-32 overflow-hidden selection:bg-[#C9A84C] selection:text-white" style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)" }}>
      
//       {/* Decorative blobs */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 0.15, scale: 1 }}
//         transition={{ duration: 1.5 }}
//         viewport={{ once: true }}
//         className="absolute top-0 right-[-10%] w-[800px] h-[800px] rounded-full blur-[140px] pointer-events-none"
//         style={{ background: THEME.gold }}
//       />
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 0.08, scale: 1 }}
//         transition={{ duration: 1.8 }}
//         viewport={{ once: true }}
//         className="absolute top-96 left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
//         style={{ background: THEME.green }}
//       />

//       {/* ── 1. PREMIUM HERO ── */}
//       <div className="pt-32 pb-24 px-6 lg:px-10 text-center max-w-5xl mx-auto relative z-10">
//         <div className="mb-6 flex justify-center">
//           <img
//             src="/logo101.png"
//             alt="Focus Solutions Logo"
//             className="h-28 w-auto rounded-2xl shadow-xl border-2 border-[#C9A84C]"
//             style={{ backgroundColor: "#ffffff" }}
//           />
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 shadow-sm"
//           style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
//         >
//           <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: THEME.gold }} />
//           <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: THEME.gold }}>
//             A Support for Focus International Foundation
//           </span>
//         </motion.div>
        
//         <div className="mb-8 drop-shadow-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
//           <SplitText
//             text="FOCUS"
//             className="text-6xl md:text-7xl lg:text-8xl tracking-tight"
//             style={{ color: THEME.textDark }}
//             Tag="h1"
//           />
//           <SplitText
//             text="SOLUTIONS"
//             delayStep={0.04}
//             className="text-6xl md:text-7xl lg:text-8xl tracking-tight"
//             style={{ color: THEME.gold }}
//             Tag="h1"
//           />
//         </div>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 0.7, duration: 0.8 }}
//           className="h-1.5 w-32 mx-auto rounded-full mb-8"
//           style={{ background: "linear-gradient(to right, transparent, #C9A84C, #2D5A3D, #C9A84C, transparent)" }}
//         />

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//           className="text-lg md:text-xl md:leading-relaxed font-medium max-w-3xl mx-auto"
//           style={{ color: THEME.textMuted }}
//         >
//           Committed to delivering <strong style={{ color: THEME.green }}>under-one-roof solutions</strong> to build a healthy society where people are placed at the center of ZERO DEFECT ZERO EFFECT (ZED).
//         </motion.p>
//       </div>

//       {/* ── 2. GLASSMORPHISM COMPANY INFO ── */}
//       <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-32 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="relative rounded-4xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 overflow-hidden"
//           style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
//         >
//           {/* Top accent line */}
//           <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C, #2D5A3D)" }} />
          
//           <div className="text-center md:text-left flex-1">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.gold }}>Proprietor / Legal Name</p>
//             <p className="text-xl md:text-2xl font-bold" style={{ color: THEME.textDark }}>Mr. Pradeep Kumar Mukherjee</p>
//           </div>
          
//           <div className="hidden md:block w-px h-16 opacity-30" style={{ background: THEME.gold }}></div>
          
//           <div className="text-center flex-1">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: THEME.gold }}>Registration (GSTIN)</p>
//             <span className="font-mono text-lg font-bold px-5 py-2 rounded-xl border" style={{ background: THEME.bgLight, color: THEME.textDark, borderColor: "#EDE4CE" }}>
//               21AKBPM8511H3ZH
//             </span>
//           </div>
          
//           <div className="hidden md:block w-px h-16 opacity-30" style={{ background: THEME.gold }}></div>
          
//           <div className="text-center md:text-right flex-1">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: THEME.gold }}>Constitution</p>
//             <p className="text-xl font-bold flex flex-col md:items-end" style={{ color: THEME.textMuted }}>
//               Proprietorship
//               <span className="text-sm font-semibold mt-1" style={{ color: "#7A8F81" }}>(Since Dec 2022)</span>
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* ── 3. CORE BUSINESS CARDS ── */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-32 relative z-10">
//         <div className="text-center mb-16">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4"
//             style={{ background: "#E8F2EC", color: THEME.green }}
//           >
//             Services
//           </motion.span>
//           <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
//             <SplitText text="Core Business Activities" className="text-3xl md:text-4xl font-extrabold" style={{ color: THEME.textDark }} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1, duration: 0.6 }}
//               whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(45,90,61,0.1)" }}
//               className="relative bg-white p-8 rounded-4xl shadow-lg border border-[#EDE4CE] text-center group transition-all duration-300 overflow-hidden"
//             >
//               {/* Bottom sweep line */}
//               <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 transition-all duration-500" style={{ background: service.color }} />
              
//               <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ background: service.bg }}>
//                 <service.icon size={28} strokeWidth={1.5} style={{ color: service.color }} />
//               </div>
//               <h3 className="font-bold text-lg leading-snug" style={{ color: THEME.textDark }}>{service.name}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── 4. FULL-WIDTH PREMIUM ELABORATION SECTION ── */}
//       <div className="w-full relative mt-16 md:mt-24 mb-24 py-20 lg:py-28 group">
        
//         {/* Straight Full-Width Background */}
//         <div 
//           className="absolute inset-0 z-0 origin-center" 
//           style={{ 
//             background: THEME.green
//           }}
//         >
//            {/* Dynamic Background Effects */}
//            <div className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 60%)" }} />
//            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full mix-blend-screen opacity-20 transform translate-x-1/3 -translate-y-1/3 pointer-events-none blur-[100px] transition-transform duration-1000 group-hover:scale-110" style={{ background: THEME.gold }} />
//            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-screen opacity-10 transform -translate-x-1/3 translate-y-1/3 pointer-events-none blur-[80px]" style={{ background: "#4A7C59" }} />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
             
//              {/* Left Text Content */}
//              <div className="flex-1 text-center lg:text-left py-12 lg:py-20">
//                <motion.div 
//                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
//                  className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full mb-8 border border-white/20 backdrop-blur-sm shadow-xl" 
//                  style={{ background: "rgba(255,255,255,0.05)" }}
//                >
//                  <Quote size={18} style={{ color: THEME.gold }} />
//                  <span className="text-sm font-bold uppercase tracking-[0.25em]" style={{ color: THEME.gold }}>The Focus Advantage</span>
//                </motion.div>
               
//                <motion.h3 
//                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
//                  className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight text-white drop-shadow-lg" 
//                  style={{ fontFamily: "'Gloria Hallelujah', cursive" }}
//                >
//                  A Holistic Ecosystem <br className="hidden lg:block"/> for Growth
//                </motion.h3>
               
//                <motion.div 
//                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
//                  className="h-1.5 w-24 rounded-full mb-8 lg:mx-0 mx-auto" 
//                  style={{ background: "linear-gradient(to right, #C9A84C, transparent)", transformOrigin: "left" }}
//                />
               
//                <motion.p 
//                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }}
//                  className="text-xl md:text-2xl leading-relaxed text-white/90 font-medium md:max-w-2xl mx-auto lg:mx-0"
//                >
//                  We don't just provide services; we build foundations. By synergizing our expertise across 
//                  <span className="font-bold underline decoration-2 underline-offset-4 mx-1" style={{ textDecorationColor: THEME.gold, color: "#fff" }}>Staffing</span>, 
//                  <span className="font-bold underline decoration-2 underline-offset-4 mx-1" style={{ textDecorationColor: THEME.gold, color: "#fff" }}>Data</span>, 
//                  <span className="font-bold underline decoration-2 underline-offset-4 mx-1" style={{ textDecorationColor: THEME.gold, color: "#fff" }}>Real Estate</span>, and 
//                  <span className="font-bold underline decoration-2 underline-offset-4 mx-1" style={{ textDecorationColor: THEME.gold, color: "#fff" }}>Education</span>, 
//                  we deliver unparalleled value that drives sustainable success for organizations and individuals alike.
//                </motion.p>
//              </div>
             
//              {/* Right Floating Cards Grid */}
//              <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 py-12 lg:py-20">
//                 {services.map((service, idx) => (
//                   <motion.div 
//                     key={idx} 
//                     initial={{ opacity: 0, y: 30 }} 
//                     whileInView={{ opacity: 1, y: 0 }} 
//                     viewport={{ once: true }} 
//                     transition={{ delay: 0.4 + (idx * 0.1), duration: 0.6 }}
//                     whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255,255,255,0.15)", rotate: idx % 2 === 0 ? -1 : 1 }}
//                     className="p-8 md:p-10 rounded-[2rem] border transition-all duration-300 backdrop-blur-md relative overflow-hidden group/card shadow-2xl" 
//                     style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}
//                   >
//                      {/* Glassmorphism highlight reflection */}
//                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)" }} />
                     
//                      {/* Hover sweep for internal card */}
//                      <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" style={{ background: THEME.gold }} />
                     
//                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20" style={{ background: service.color }}>
//                        <service.icon size={28} className="text-white" strokeWidth={2} />
//                      </div>
//                      <span className="text-xl md:text-2xl font-bold text-white leading-snug block drop-shadow-md">
//                        {service.name.split(" ")[0]} <br/> {service.name.split(" ").slice(1).join(" ")}
//                      </span>
//                   </motion.div>
//                 ))}
//              </div>
             
//         </div>
//       </div>


//       {/* ── 5. PROJECT EXPERIENCE (Row Layout) ── */}
//       <div className="max-w-5xl mx-auto px-6 lg:px-10 mb-32 relative z-10">
//         <div className="text-center mb-16">
//           <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
//             <SplitText text="Project Experience" className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: THEME.textDark }} />
//           </div>
//           <div className="w-24 h-1.5 mx-auto rounded-full" style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}></div>
//         </div>

//         <div className="space-y-5">
//           {projects.map((proj, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1, duration: 0.6 }}
//               whileHover={{ x: 8 }}
//               className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
//               style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
//             >
//               {/* Left Accent line on hover */}
//               <div className="absolute left-0 top-0 bottom-0 w-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl" style={{ background: proj.color }} />

//               <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: proj.bg, border: "1px solid #EDE4CE" }}>
//                 <proj.icon size={26} strokeWidth={1.5} style={{ color: proj.color }} />
//               </div>

//               <div className="flex-1">
//                 <h4 className="text-2xl font-bold mb-2 transition-colors duration-300" style={{ color: THEME.textDark }}>
//                   {proj.title}
//                 </h4>
//                 <p className="text-base leading-relaxed font-medium" style={{ color: THEME.textMuted }}>
//                   {proj.desc}
//                 </p>
//               </div>

//               <div className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0" style={{ background: proj.bg }}>
//                 <Navigation size={18} style={{ color: proj.color }} />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── 6. DARK GREEN OFFICES FOOTER ── */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl overflow-hidden"
//           style={{ background: THEME.green }}
//         >
//           {/* Decorative radial glows */}
//           <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full mix-blend-screen opacity-20 transform translate-x-1/3 -translate-y-1/3 pointer-events-none blur-[100px]" style={{ background: THEME.gold }}></div>
          
//           <div className="relative z-10 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b pb-12" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
//             <div className="max-w-2xl">
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
//                 Let's Connect
//               </h2>
//               <p className="text-white/80 text-xl leading-relaxed">We are always ready to collaborate and expand our services for the betterment of society.</p>
//             </div>
            
//             <div className="flex flex-col gap-4">
//               <a href="tel:+917894992972" className="group flex items-center gap-4 text-white transition-opacity hover:opacity-80">
//                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors" style={{ background: "rgba(255,255,255,0.05)" }}>
//                   <Phone className="w-5 h-5" style={{ color: THEME.gold }} />
//                 </div>
//                 <div className="font-semibold text-lg">+91 7894992972 <br className="hidden md:block"/> / 9437439265</div>
//               </a>
//               <a href="mailto:focussolutions96@gmail.com" className="group flex items-center gap-4 text-white transition-opacity hover:opacity-80">
//                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors" style={{ background: "rgba(255,255,255,0.05)" }}>
//                   <Mail className="w-5 h-5" style={{ color: THEME.gold }} />
//                 </div>
//                 <div className="font-semibold text-lg">focussolutions96@gmail.com</div>
//               </a>
//             </div>
//           </div>

//           <div className="relative z-10  gap-8">
//             {[
             
//               { icon: Briefcase, title: "Functional Office", text: "CSM campus, Niladrivihar omfed colony, Near Utkal Hospital, Bhubaneswar, 751016, Odisha." }
//             ].map((office, i) => (
//               <div key={i} className="p-8 rounded-3xl border transition-colors hover:bg-white/10" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm" style={{ background: THEME.gold }}>
//                   <office.icon className="w-6 h-6" style={{ color: THEME.green }} />
//                 </div>
//                 <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 opacity-90">{office.title}</h4>
//                 <p className="text-white/80 leading-relaxed font-medium">{office.text}</p>
//               </div>
//             ))}
//           </div>

//         </motion.div>
//       </div>

//     </section>
//   );
// };

// export default FocusSolutionsSection;
