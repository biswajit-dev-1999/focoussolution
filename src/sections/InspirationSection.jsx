import React from "react";
import { motion } from "framer-motion";

const InspirationSection = () => {
  return (
    <section
      className="w-full py-16 md:py-12"
      style={{ background: "#FDF8F0" }}
    >
      <div className="w-full flex flex-col items-center">

        {/* HERO IMAGE */}
        <div className="w-full">
          <img
            src="/hero.png"
            alt="Happy Children — Focus International Foundation"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* MOTIVATIONAL TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mt-12 md:mt-6 px-6"
        >
          <h2
            className="text-3xl md:text-4xl font-bold leading-snug"
            style={{ color: "#2D5A3D" }}
          >
            "Every smile we create, every life we touch,
            brings us one step closer to a brighter world."
          </h2>

          <p className="text-lg md:text-xl mt-4" style={{ color: "#4B5E53" }}>
            Together, we can turn hope into action — and action into change.
          </p>

          {/* Gold divider */}
          <div className="mt-6 mx-auto w-20 h-1 rounded-full" style={{ background: "linear-gradient(to right, #C9A84C, #2D5A3D)" }} />
        </motion.div>

      </div>
    </section>
  );
};

export default InspirationSection;
