import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Medal, Award, GraduationCap, Trophy } from "lucide-react";

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
          transition={{ duration: 0.4, delay: i * delayStep }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const AwardsSection = () => {
  const awards = [
    {
      Icon: Award,
      title: "Best Community Impact Award",
      desc: "Recognized for delivering high-impact community development actions in rural and urban regions.",
      img: "/4.png",
      accent: "linear-gradient(135deg, #E8F2EC, #C9A84C22)",
      iconBg: "#E8F2EC",
    },
    {
      Icon: GraduationCap,
      title: "FIF Merit Scholarship",
      desc: "Supporting students from underprivileged backgrounds to continue higher education.",
      img: "/5.png",
      accent: "linear-gradient(135deg, #F5EDD8, #4A7C5922)",
      iconBg: "#FDF5E0",
    },
    {
      Icon: Trophy,
      title: "Excellence in Social Service Award",
      desc: "Awarded for exceptional dedication towards uplifting vulnerable communities.",
      img: "/6.png",
      accent: "linear-gradient(135deg, #E8F2EC, #2D5A3D22)",
      iconBg: "#E8F2EC",
    },
    {
      Icon: Medal,
      title: "Youth Talent Scholarship",
      desc: "Funding programs encouraging young individuals to pursue sports, arts, and skill development.",
      img: "/7.png",
      accent: "linear-gradient(135deg, #FDF5E0, #C9A84C22)",
      iconBg: "#FDF5E0",
    },
  ];

  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)" }}
    >
      {/* Blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "#C9A84C" }} />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "#4A7C59" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText
              text="Awards & Scholarships"
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: "#2D5A3D" }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-4 text-lg"
            style={{ color: "#4B5E53" }}
          >
            We celebrate excellence, empower talent, and support future leaders
            through impactful awards and transformative scholarship programs.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {awards.map((a, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              {/* Accent strip */}
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C)" }} />

              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: a.iconBg }}>
                  <a.Icon size={28} style={{ color: "#2D5A3D" }} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold mb-3" style={{ color: "#2D5A3D" }}>
                  {a.title}
                </h3>

                <p className="leading-relaxed mb-5" style={{ color: "#4B5E53" }}>
                  {a.desc}
                </p>

                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-52 object-cover rounded-xl shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image + Text section */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/11.png"
            alt="Focus International Foundation Charity Work"
            className="w-full h-[380px] object-cover rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#2D5A3D" }}>
              Recognizing Excellence.
              <br /> Inspiring the Next Generation.
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: "#4B5E53" }}>
              Our awards celebrate the individuals and teams who go above and beyond
              to uplift communities. Their dedication inspires thousands and strengthens
              our commitment to serve with compassion and impact.
            </p>
          </motion.div>
        </div>

        {/* Bold CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-12 shadow-xl text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2D5A3D, #1E3D2F)" }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
            style={{ background: "#C9A84C" }} />
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
            "Every Award Is a Promise to Do Better."
          </h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed relative z-10"
            style={{ color: "rgba(253,248,240,0.88)" }}>
            Behind every recognition lies hours of service, unwavering commitment,
            and the belief that every life can be transformed.
            <br /><br />
            These awards are not just achievements —{" "}
            <strong style={{ color: "#C9A84C" }}>they are milestones in our journey to create lasting impact.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
