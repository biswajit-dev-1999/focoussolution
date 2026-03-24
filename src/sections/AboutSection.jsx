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

// Split text letter-by-letter
const SplitText = ({ text, delayStep = 0.03, className = "", style = {} }) => {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <h2
      aria-hidden="true"
      className={`inline-block overflow-hidden ${className}`}
      style={{ lineHeight: 1.05, ...style }}
    >
      {letters.map((char, i) => {
        const letter = char === " " ? "\u00A0" : char;
        return (
          <motion.span
            key={i}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: i * delayStep,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {letter}
          </motion.span>
        );
      })}
    </h2>
  );
};

// ─── Section heading helper ────────────────────────────────────────────────────
const SectionHeading = ({ text, sub }) => (
  <div className="text-center mb-14">
    <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
      <SplitText
        text={text}
        className="text-3xl md:text-4xl font-extrabold"
        style={{ color: "#2D5A3D" }}
      />
    </div>
    {sub && (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-4 text-lg"
        style={{ color: "#4B5E53" }}
      >
        {sub}
      </motion.p>
    )}
  </div>
);

const AboutSection = () => {
  const pillarData = [
    { Icon: Heart, label: "Compassion", desc: "We believe kindness is the first step toward real societal transformation.", bg: "#E8F2EC" },
    { Icon: Scale, label: "Equality", desc: "A fair society begins when opportunities reach those who need them most.", bg: "#FDF5E0" },
    { Icon: Zap, label: "Empowerment", desc: "Empowering individuals ensures sustainable and long-lasting progress.", bg: "#E8F2EC" },
    { Icon: Globe, label: "Unity", desc: "We unite communities across differences to build shared futures.", bg: "#FDF5E0" },
  ];

  const programs = [
    { Icon: BookOpenCheck, title: "Education Support", desc: "Providing books, school kits, and classroom support to underprivileged children.", img: "/7.png", bg: "#E8F2EC" },
    { Icon: Utensils, title: "Healthy Meals", desc: "Ensuring children and families receive nutritious meals every week.", img: "/8.png", bg: "#FDF5E0" },
    { Icon: Stethoscope, title: "Medical Camps", desc: "Offering free health checkups, medicines, and awareness drives.", img: "/9.png", bg: "#E8F2EC" },
    { Icon: HeartHandshake, title: "Women Empowerment", desc: "Skill development, financial literacy and leadership programs for women.", img: "/women.jpg", bg: "#FDF5E0" },
    { Icon: UsersRound, title: "Community Development", desc: "Building stronger communities with local leadership and resilience.", img: "/10.png", bg: "#E8F2EC" },
    { Icon: Leaf, title: "Environmental Conservation", desc: "Protecting natural resources and promoting sustainable practices.", img: "/101.jpg", bg: "#FDF5E0" },
  ];

  return (
    <section
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)",
      }}
    >
      {/* Soft blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#C9A84C" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#4A7C59" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* ══════════════ HEADER ══════════════ */}
        <div className="text-center mb-16 pt-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: "'Gloria Hallelujah', cursive" }} 
            className="w-full relative inline-block drop-shadow-sm"
          >
            <SplitText
              text="About Focus International Foundation"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.2rem] font-extrabold leading-tight"
              style={{ color: "#2D5A3D", letterSpacing: "-0.5px" }}
            />
            {/* Decorative stylish underline */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1.5 w-64 mx-auto rounded-full mt-5 shadow-sm" 
              style={{ background: "linear-gradient(to right, transparent, #C9A84C, #2D5A3D, #C9A84C, transparent)" }} 
            />
          </motion.div>
        </div>

        {/* ══════════════ HERO SPLIT ══════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20 lg:mb-32">
          
          {/* Left - Visual / Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ border: "2px solid #EDE4CE" }}>
              <img src="/education.jpg" alt="Foundation Work" className="w-full h-[450px] md:h-[550px] object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(45,90,61,0.85), transparent)" }} />
              <div className="absolute bottom-10 left-8 right-8 text-white">
                <div style={{ fontFamily: "'Gloria Hallelujah', cursive", fontSize: '2.2rem', lineHeight: '1.2' }} className="mb-3">
                  Building a Healthy Society
                </div>
                <p className="opacity-95 text-lg font-medium leading-relaxed max-w-sm">
                  Empowering lives through health, education, and livelihood.
                </p>
              </div>
            </div>
            
            {/* Decorative Floating Element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-4 md:-right-8 w-36 h-36 rounded-full border-[6px] border-white flex items-center justify-center p-2 shadow-xl z-20"
              style={{ background: "#C9A84C" }}
            >
              <div className="w-full h-full rounded-full flex flex-col items-center justify-center text-center leading-tight border border-white/40"
                style={{ color: "#FFFFFF" }}>
                <span className="text-sm font-semibold tracking-wider uppercase mb-1 opacity-90">Estd.</span>
                <span className="text-3xl font-extrabold tracking-tight">2018</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <div className="flex flex-col justify-center pt-4 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5 text-lg leading-relaxed relative"
              style={{ color: "#4B5E53" }}
            >
              <div className="absolute -left-6 top-2 bottom-2 w-1 rounded-full opacity-30" style={{ background: "linear-gradient(to bottom, #2D5A3D, #C9A84C)" }} />
              
              <p>
                <strong style={{ color: "#2D5A3D" }}>Focus International Foundation</strong> is a non-profitable philanthropy charitable organization. It is working to empower and development of marginalized communities in health, education, livelihoods, disaster relief, social justice, rescue & restoration, focusing on building sustainable community capacity and improving access to resources for vulnerable populations.
              </p>
              <p>
                A key aspect of our work is to guide and support the economically weaker sector and marginalized people to become skilled and educated for small enterprises and develop to secure their livelihoods. We believe this creates a healthy society where people are placed at the centre of all development.
              </p>
              
              <div className="p-6 rounded-2xl mt-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow" 
                style={{ background: "#FDF5E0", border: "1px solid #EDE4CE" }}>
                <div className="absolute top-0 left-0 w-1.5 h-full" style={{ background: "#C9A84C" }} />
                <p className="text-base font-semibold italic relative z-10" style={{ color: "#2D5A3D" }}>
                  "We also work beyond our thematic agenda on water & sanitation, awareness programs, and youth mobilization to sensitize individuals about their identity, tradition, history, and culture to create awareness for nationalism."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════════ QUICK FACTS (BENTO GRID) ══════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 mb-24">
          {/* Target Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 shadow-xl"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl"
              style={{ background: "#E8F2EC" }}>🎯</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D5A3D" }}>
              Our Focus
            </h3>
            <p className="mb-2" style={{ color: "#4B5E53" }}><strong>Target Areas:</strong> Odisha and West Bengal</p>
            <p style={{ color: "#4B5E53" }}><strong>Target Group:</strong> Youth, Women, Children and Senior Citizens</p>
          </motion.div>

          {/* CHIEF FUNCTIONARY BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 shadow-xl text-center"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
          >
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md mb-4 flex items-center justify-center text-4xl"
              style={{ background: "#FDF5E0", border: "3px solid #C9A84C", color: "#C9A84C" }}>
              👤
            </div>
            <h3 className="text-xl font-bold" style={{ color: "#2D5A3D" }}>
              Mr. Pradeep Kumar Mukherjee
            </h3>
            <p className="text-sm font-semibold mt-2" style={{ color: "#C9A84C" }}>
              Chief Functionary & Executive
            </p>
          </motion.div>

          {/* Legal Status */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 shadow-xl"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl"
              style={{ background: "#FDF5E0" }}>⚖️</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D5A3D" }}>
              Legal Status
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "#4B5E53" }}>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#2D5A3D" }} />
                Registered as Trust UNDER INDIA TRUST ACT OF 1882. (Dated 16th March 2018)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#2D5A3D" }} />
                Income Tax Exemption 80G & 12A
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#2D5A3D" }} />
                Darpan Registered
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ══════════════ CORE MISSION / VISION GRID ══════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Our Core Mission",
              text: "To ensure social justice, economic and educational enhancement to the disadvantage sections of the society, focusing on Women, youth and children through developing mechanism aiming at service delivery and capacity building.",
              accent: "#E8F2EC",
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
              accent: "#E8F2EC",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 shadow-xl overflow-hidden relative"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5"
                style={{ background: `linear-gradient(to right, #2D5A3D, #C9A84C)` }} />
              <h3 className="text-xl font-bold mb-4 mt-2" style={{ color: "#2D5A3D" }}>{item.title}</h3>
              {item.isList ? (
                <ul className="space-y-2" style={{ color: "#4B5E53" }}>
                  {item.items.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              ) : (
                <p className="leading-relaxed" style={{ color: "#4B5E53" }}>{item.text}</p>
              )}
            </motion.div>
          ))}
        </div>

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
                  style={{ background: p.bg, color: "#2D5A3D" }}>
                  <p.Icon size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: "#2D5A3D" }}>{p.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#4B5E53" }}>{p.desc}</p>
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
                style={{ background: p.bg, color: "#2D5A3D" }}>
                <p.Icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ color: "#2D5A3D" }}>{p.label}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#4B5E53" }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════ INCLUSIVITY CARD ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-24 max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 rounded-3xl blur opacity-30"
            style={{ background: `linear-gradient(to right, #C9A84C, #2D5A3D, #C9A84C)` }} />

          <div className="relative rounded-3xl p-10 md:p-12 shadow-2xl text-center overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}>
            <div className="absolute top-0 left-0 w-full h-1.5"
              style={{ background: `linear-gradient(to right, #2D5A3D, #C9A84C, #2D5A3D)` }} />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-30"
              style={{ background: "#E8F2EC" }} />
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ background: "#FDF5E0" }} />

            <div className="mb-5 flex justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-inner"
                style={{ background: "#E8F2EC", border: "2px solid #EDE4CE" }}>
                🤝
              </div>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "#2D5A3D" }}>
              Unwavering Inclusivity
            </h4>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto italic relative z-10"
              style={{ color: "#4B5E53" }}>
              "The benefit of the Objects would be available to the general public irrespective
              of caste, creed, language, religion, region, sex."
            </p>
          </div>
        </motion.div>

        {/* ══════════════ ORGANIZATIONAL OBJECTIVES ══════════════ */}
        <div className="mt-28 mb-20 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h3 className="text-3xl md:text-4xl font-bold" style={{ color: "#2D5A3D" }}>
              Organizational Objectives
            </h3>
            <p className="max-w-2xl mx-auto mt-3 text-lg" style={{ color: "#4B5E53" }}>
              Our comprehensive roadmap for building a healthy, equitable society:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-left">
            {[
              "To promote national integration, communal Harmony, Universal Brotherhood and Global peace.",
              "To open up soft-skill and capacity development centre through India.",
              "To establish a professional training institute and educational institutions in rural and urban areas.",
              "To take up programs of protect civil, economic and political rights of dalit and adivasi/ indigenous/ aboriginal communities.",
              "To establish old age centre, orphanage, adult literacy.",
              "To establish various vocational training institute to eradicate the employment crisis.",
              "To conduct and organize various kind of event management for the better awareness.",
              "To train downtrodden people in general human resource development in view of the emerging needs such as database development, resource survey methodologies, computer, environmental studies, health, and education.",
              "To undertake and promote the publication and translation of journal, research papers and books and to develop the audiovisual program to disseminate knowledge.",
              "To start and assist the natural relief measures in natural calamities like famine, fire, flood, earthquakes etc.",
              "To communicate and coordinate with the Govt. local and public authorities on issues related to women trafficking, child abuse, domestic violence, child labor and against child marriage.",
              "To promote and protect Indian Traditional music, dance, handicraft, handlooms, Arts, modern art, literature and other development skills.",
              "To establish an award for the deserving people in the field of Art grass root level social service, communal harmony, brotherhood and peace.",
              "To Promote media management and advertisement.",
              "To run and open the schools for all and uplift the needy children.",
              "To publish books, magazines, charts, issue related IEC and other periodical illustration.",
              "To establish, build or manage Hostels, Short stay Homes, Rehabilitation centers, Shelters, and Crèches.",
              "To establish counseling centers and help line centers for women, children, old age person, and drug addicts.",
              "Integrated support for street and working children.",
              "And generally to do in all public, charitable purposes for public benefit without any discrimination of Caste, Creed, Color, Gender, Religion, Faith, race, or any nationality."
            ].map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (Math.random() * 0.15) }}
                viewport={{ once: true }}
                className="flex items-start gap-5 py-4 border-b transition-colors group hover:bg-[#FDF5E0] px-3 rounded-lg -mx-3"
                style={{ borderColor: "rgba(237, 228, 206, 0.6)" }}
              >
                <div 
                  className="font-extrabold text-xl mt-0 transition-all duration-300 group-hover:scale-110 tracking-tight"
                  style={{ color: "#C9A84C", textShadow: "0 2px 4px rgba(201,168,76,0.15)" }}
                >
                  {String(i + 1).padStart(2, '0')}.
                </div>
                <p className="text-[15px] leading-relaxed font-medium transition-colors" 
                   style={{ color: "#4B5E53" }}>
                  {obj}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
