import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    name: "Rina",
    story: "Received education support and is now the first girl in her village to attend college.",
    img: "/story1.jpg",
  },
  {
    name: "Arjun",
    story: "Got nutrition support and overcame severe malnutrition.",
    img: "/story2.jpg",
  },
  {
    name: "Meena",
    story: "Joined our women empowerment program and now runs her own tailoring business.",
    img: "/story3.jpg",
  },
];

const StoriesOfChange = () => {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(to bottom right, #F5EDD8, #EDE4CE)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center" style={{ color: "#2D5A3D" }}>
          Stories of Change
        </h2>
        <p className="text-lg max-w-2xl text-center mx-auto mt-2" style={{ color: "#4B5E53" }}>
          Real lives. Real impact. Heart-touching transformations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14">
          {stories.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 shadow-xl"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              <img
                src={s.img}
                className="rounded-2xl w-full h-56 object-cover mb-5"
                alt={s.name}
              />
              {/* Gold accent line */}
              <div className="w-12 h-1 rounded-full mb-3" style={{ background: "#C9A84C" }} />
              <h3 className="text-xl font-bold" style={{ color: "#2D5A3D" }}>{s.name}</h3>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "#4B5E53" }}>
                {s.story}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesOfChange;
