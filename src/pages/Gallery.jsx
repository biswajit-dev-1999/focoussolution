import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Layout from "../layout/Layout";

// ─── Reusable SplitText (identical to AboutSection) ─────────────────────────
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
            transition={{ duration: 0.45, delay: i * delayStep, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {letter}
          </motion.span>
        );
      })}
    </h2>
  );
};

// ─── Gallery data ─────────────────────────────────────────────────────────────
const CATEGORIES = ["All", "Education", "Healthcare", "Community", "Women", "Environment", "Relief"];

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=900&auto=format&fit=crop",
    alt: "Community Outreach Program",
    title: "Community Outreach",
    category: "Community",
    desc: "Volunteers reaching out to underserved neighbourhoods with essential supplies.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop",
    alt: "Education Support",
    title: "Education Support",
    category: "Education",
    desc: "Providing books, stationery, and learning resources to rural children.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=900&auto=format&fit=crop",
    alt: "Healthcare Camp",
    title: "Free Healthcare Camps",
    category: "Healthcare",
    desc: "Free medical checkups and medicines distributed across villages.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=900&auto=format&fit=crop",
    alt: "Women Empowerment Workshop",
    title: "Women Empowerment",
    category: "Women",
    desc: "Skill training and financial literacy workshops for women.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=900&auto=format&fit=crop",
    alt: "Food Distribution",
    title: "Food Distribution Drive",
    category: "Relief",
    desc: "Distributing nutritious meals to families in need across Odisha.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=900&auto=format&fit=crop",
    alt: "Environmental Conservation",
    title: "Tree Plantation Drive",
    category: "Environment",
    desc: "Planting saplings to promote sustainability and green cover.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=900&auto=format&fit=crop",
    alt: "Youth Skill Development",
    title: "Youth Skill Development",
    category: "Education",
    desc: "Vocational training programs equipping youth with employable skills.",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1576765608622-067973a79f53?q=80&w=900&auto=format&fit=crop",
    alt: "Medical Awareness Camp",
    title: "Medical Awareness Camp",
    category: "Healthcare",
    desc: "Health awareness drives educating communities on preventive care.",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=900&auto=format&fit=crop",
    alt: "Community Building",
    title: "Community Building",
    category: "Community",
    desc: "Bringing neighbourhoods together to build shared futures.",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=900&auto=format&fit=crop",
    alt: "Women Leadership Program",
    title: "Women Leadership",
    category: "Women",
    desc: "Empowering women to take on leadership roles in their communities.",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&w=900&auto=format&fit=crop",
    alt: "Flood Relief Operations",
    title: "Flood Relief Operations",
    category: "Relief",
    desc: "Emergency relief supplies delivered to flood-affected families.",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900&auto=format&fit=crop",
    alt: "Nature Conservation",
    title: "Nature Conservation",
    category: "Environment",
    desc: "Protecting natural ecosystems through grass-roots conservation efforts.",
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({ item, onClose }) => (
  <AnimatePresence>
    {item && (
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(10,20,14,0.88)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top colour bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 z-10"
            style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C, #2D5A3D)" }} />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            style={{ background: "#2D5A3D", color: "#FDF8F0" }}
          >
            <X size={18} />
          </button>

          <img
            src={item.src}
            alt={item.alt}
            className="w-full max-h-[65vh] object-cover"
          />

          <div className="p-6">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: "#E8F2EC", color: "#2D5A3D" }}
            >
              {item.category}
            </span>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#2D5A3D" }}>
              {item.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#4B5E53" }}>
              {item.desc}
            </p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── Gallery Page ─────────────────────────────────────────────────────────────
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <Layout>
      {/* Lightbox */}
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />

      <section
        className="w-full py-20 md:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)",
          minHeight: "100vh",
        }}
      >
        {/* Decorative blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#C9A84C" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#4A7C59" }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          {/* ═══ HEADER ═══ */}
          <div className="text-center mb-14 pt-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ fontFamily: "'Gloria Hallelujah', cursive" }}
              className="w-full relative inline-block drop-shadow-sm"
            >
              <SplitText
                text="Our Gallery"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
                style={{ color: "#2D5A3D", letterSpacing: "-0.5px" }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1.5 w-40 mx-auto rounded-full mt-5 shadow-sm"
                style={{ background: "linear-gradient(to right, transparent, #C9A84C, #2D5A3D, #C9A84C, transparent)" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mt-5 text-lg leading-relaxed"
              style={{ color: "#4B5E53" }}
            >
              A visual journey through the lives we touch, the communities we serve, and the change we create together.
            </motion.p>
          </div>

          {/* ═══ CATEGORY FILTER ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #2D5A3D, #4A7C59)"
                      : "#FFFFFF",
                    color: isActive ? "#FDF8F0" : "#4B5E53",
                    border: isActive ? "1.5px solid transparent" : "1.5px solid #EDE4CE",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* ═══ MASONRY GRID ═══ */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(45,90,61,0.18)" }}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl"
                  style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
                  onClick={() => setLightboxItem(item)}
                >
                  {/* Top bar */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 z-10"
                    style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C)" }}
                  />

                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: "rgba(45,90,61,0.55)" }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{ background: "#FDF8F0", color: "#2D5A3D" }}
                      >
                        <ZoomIn size={22} />
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                      style={{ background: "#E8F2EC", color: "#2D5A3D" }}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold mb-1" style={{ color: "#2D5A3D" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4B5E53" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24" style={{ color: "#4B5E53" }}>
              <p className="text-lg">No photos in this category yet.</p>
            </div>
          )}

          {/* ═══ BOTTOM CTA ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 relative max-w-4xl mx-auto"
          >
            <div
              className="absolute -inset-1 rounded-3xl blur opacity-25"
              style={{ background: "linear-gradient(to right, #C9A84C, #2D5A3D, #C9A84C)" }}
            />
            <div
              className="relative rounded-3xl p-10 md:p-12 shadow-2xl text-center overflow-hidden"
              style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1.5"
                style={{ background: "linear-gradient(to right, #2D5A3D, #C9A84C, #2D5A3D)" }}
              />
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 shadow-inner"
                style={{ background: "#E8F2EC", border: "2px solid #EDE4CE" }}
              >
                📸
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#2D5A3D" }}>
                Be Part of the Story
              </h4>
              <p
                className="text-lg leading-relaxed max-w-2xl mx-auto mb-8"
                style={{ color: "#4B5E53" }}
              >
                Every image tells a story of hope. Support our mission and help us create more stories of change.
              </p>
              <a
                href="/donate"
                className="inline-block px-8 py-3.5 rounded-xl text-sm font-semibold shadow-md transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #2D5A3D, #4A7C59)",
                  color: "#FDF8F0",
                }}
              >
                Donate Now
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
