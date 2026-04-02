import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
          transition={{ duration: 0.45, delay: i * delayStep, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const ContactSection = () => {
  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "#C9A84C" }} />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "#4A7C59" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText
              text="Get In Touch"
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: "#2D5A3D" }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-4 text-lg"
            style={{ color: "#4B5E53" }}
          >
            We would love to hear from you. Whether you want to volunteer, donate, or collaborate — reach out anytime.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl shadow-xl"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#2D5A3D" }}>
              Contact Information
            </h3>

            <div className="space-y-6" style={{ color: "#4B5E53" }}>
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl" style={{ background: "#E8F2EC" }}>
                  <Mail size={22} style={{ color: "#2D5A3D" }} />
                </div>
                <p className="text-lg">focusinternational2014@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl" style={{ background: "#E8F2EC" }}>
                  <Phone size={22} style={{ color: "#2D5A3D" }} />
                </div>
                <p className="text-lg">+91 7894992972, 9437439265</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl mt-0.5" style={{ background: "#FDF5E0" }}>
                  <MapPin size={22} style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <p className="text-base font-bold" style={{ color: "#2D5A3D" }}>Office Address</p>
                  <p className="text-base leading-relaxed">
                    Niladri Vihar Omfed Colony, (Near Utkal Hospital)<br/>
                    Post- Chandrasekharpur, Bhubaneswar, Odisha. Pin- 751021
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl mt-0.5" style={{ background: "#FDF5E0" }}>
                  <span style={{ fontSize: "1.25rem" }}>👤</span>
                </div>
                <div>
                  <p className="text-base font-bold" style={{ color: "#2D5A3D" }}>Chief Functionary</p>
                  <p className="text-base leading-relaxed">
                    Mr. Pradeep Kumar Mukherjee
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-md" style={{ border: "1px solid #EDE4CE" }}>
              <iframe
                title="Focus International Foundation Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3556.2959219145264!2d85.79751007523755!3d20.3243362811545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE5JzI3LjYiTiA4NcKwNDgnMDAuMyJF!5e1!3m2!1sen!2sin!4v1774681609828!5m2!1sen!2sin"
                className="w-full h-64 border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl shadow-xl"
            style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#2D5A3D" }}>
              Send Us a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-medium text-sm" style={{ color: "#4B5E53" }}>Full Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 rounded-xl outline-none transition"
                  style={{ border: "1.5px solid #EDE4CE", background: "#FDF8F0" }}
                  placeholder="Your Name"
                  onFocus={e => (e.target.style.borderColor = "#2D5A3D")}
                  onBlur={e => (e.target.style.borderColor = "#EDE4CE")}
                />
              </div>
              <div>
                <label className="font-medium text-sm" style={{ color: "#4B5E53" }}>Email</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 rounded-xl outline-none transition"
                  style={{ border: "1.5px solid #EDE4CE", background: "#FDF8F0" }}
                  placeholder="Your Email"
                  onFocus={e => (e.target.style.borderColor = "#2D5A3D")}
                  onBlur={e => (e.target.style.borderColor = "#EDE4CE")}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="font-medium text-sm" style={{ color: "#4B5E53" }}>Message</label>
              <textarea
                className="w-full mt-2 p-3 rounded-xl outline-none h-40 resize-none transition"
                style={{ border: "1.5px solid #EDE4CE", background: "#FDF8F0" }}
                placeholder="Write your message here..."
                onFocus={e => (e.target.style.borderColor = "#2D5A3D")}
                onBlur={e => (e.target.style.borderColor = "#EDE4CE")}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-lg shadow-md transition-all hover:opacity-90 text-white font-semibold"
              style={{ background: "linear-gradient(135deg, #2D5A3D, #4A7C59)" }}
            >
              Send Message <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
