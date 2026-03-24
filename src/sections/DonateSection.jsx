import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { QrCode, Banknote, CreditCard, Wallet, Heart, ArrowRight, Phone } from "lucide-react";

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
          transition={{ duration: 0.4, delay: i * delayStep, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const DonateSection = () => {
  const THEME = {
    gold: "#C9A84C",
    green: "#2D5A3D",
    bgLight: "#FDF8F0",
    textDark: "#2D5A3D",
    textMuted: "#4B5E53",
  };

  const [activeAmount, setActiveAmount] = useState("₹2500");

  return (
    <section className="w-full relative bg-[#FDF8F0] pb-32 overflow-hidden selection:bg-[#C9A84C] selection:text-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: THEME.gold }} />
      <div className="absolute top-96 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: THEME.green }} />

      {/* ========================= HERO SECTION ========================= */}
      <div className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div className="flex-1 text-center lg:text-left" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#EDE4CE] mb-8"
            >
              <Heart className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#C9A84C]">Make A Difference</span>
            </motion.div>

            <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }} className="mb-8">
              <SplitText
                text="Your Donation Creates Hope"
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                style={{ color: THEME.green }}
              />
            </div>

            <p className="text-xl leading-relaxed text-[#4B5E53] mb-8 font-medium">
              We appeal to you on behalf of <strong className="text-[#2D5A3D]">FOCUS INTERNATIONAL FOUNDATION</strong>. Join us in our mission to build a healthier, stronger society, and to celebrate the "Tears of Joy" in the people we help.
            </p>
            <p className="text-sm font-semibold text-[#7A8F81] leading-relaxed uppercase tracking-wider">
              * Official acknowledgements provided for all funds. Eligible for 80G tax exemption.
            </p>
          </motion.div>

          <motion.div className="flex-1 w-full max-w-lg" initial={{ opacity: 0, scale: 0.95, rotate: 2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A84C] to-[#2D5A3D] rounded-[3rem] transform rotate-3 blur-lg opacity-20"></div>
              <img
                src="/charity-money-jar-donation-campaign.jpg"
                className="relative z-10 w-full rounded-[3rem] shadow-2xl border-4 border-white object-cover aspect-[4/5]"
                alt="Charity Impact"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================= QR + DONATION FORM ========================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-32 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-[#EDE4CE] overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: QR Code Block */}
          <div className="flex-1 p-10 lg:p-16 bg-[#FDF8F0] border-r border-[#EDE4CE] flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl font-bold text-[#2D5A3D] mb-4">Scan & Donate</h3>
            <p className="text-[#4B5E53] mb-10 max-w-sm">Use any UPI app like Google Pay, PhonePe, or Paytm to make an instant impact.</p>
            
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-3xl shadow-lg border border-[#EDE4CE] mb-8">
              <img src="/qr.jpg" alt="UPI QR Code" className="w-56 h-56 rounded-2xl" />
            </motion.div>
            
            <div className="px-6 py-3 rounded-xl bg-white shadow-sm border border-[#EDE4CE] text-[#2D5A3D] font-mono font-bold text-lg inline-flex items-center gap-3">
              <QrCode className="text-[#C9A84C]" />
              focusinternational@sbi
            </div>
          </div>

          {/* Right: Quick Donate Form */}
          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#2D5A3D] mb-8">Quick Pledge</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-5 py-4 rounded-2xl bg-[#FDF8F0] border border-[#EDE4CE] focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 outline-none transition-all text-[#2D5A3D] font-medium placeholder-[#7A8F81]" />
                <input type="text" placeholder="Last Name" className="w-full px-5 py-4 rounded-2xl bg-[#FDF8F0] border border-[#EDE4CE] focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 outline-none transition-all text-[#2D5A3D] font-medium placeholder-[#7A8F81]" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-2xl bg-[#FDF8F0] border border-[#EDE4CE] focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 outline-none transition-all text-[#2D5A3D] font-medium placeholder-[#7A8F81]" />
              
              {/* <div className="pt-4 pb-2 border-t border-[#EDE4CE]">
                <p className="text-sm font-bold uppercase text-[#C9A84C] tracking-wider mb-4">Select Amount (₹)</p>
                <div className="flex flex-wrap gap-3">
                  {["₹500", "₹1000", "₹2500", "₹5000", "Custom"].map(amt => (
                    <button
                      key={amt}
                      onClick={() => setActiveAmount(amt)}
                      className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                        activeAmount === amt
                          ? "bg-[#2D5A3D] text-white shadow-lg shadow-[#2D5A3D]/30 scale-105"
                          : "bg-white text-[#4B5E53] border border-[#EDE4CE] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                      }`}
                    >
                      {amt}
                    </button>
                  ))}
                </div>
              </div> */}

              <button className="w-full mt-6 py-5 rounded-2xl text-xl font-bold text-white shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-95 group bg-[#2D5A3D] hover:bg-[#1e3e29]">
                Confirm Pledge <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= IMPACT BANNER ========================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-[#2D5A3D] rounded-[3rem] p-10 md:p-16 lg:p-20 overflow-hidden text-center md:text-left shadow-2xl"
        >
          {/* Subtle Background pattern/glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C9A84C] rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Your Donation Matters
              </h3>
              <p className="text-xl text-white/90 leading-relaxed font-medium mb-8">
                Your kindness becomes food for a hungry child, education for a hopeful student, medicine for a struggling family, and dignity for a mother rebuilding her life.
              </p>
              <div className="inline-block px-8 py-4 bg-[#C9A84C] text-white font-bold rounded-2xl text-lg shadow-lg">
                You are giving a family a future.
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-sm">
              <img src="/people-holding-rubber-heart.jpg" alt="Impact" className="w-full rounded-[2rem] shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================= OTHER WAYS TO GIVE ========================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">Other Ways to Give</h2>
          <div className="w-20 h-1 bg-[#C9A84C] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              Icon: CreditCard,
              title: "Bank Transfer",
              content: (
                <div className="space-y-3 mt-4 text-left bg-[#FDF8F0] p-6 rounded-2xl border border-[#EDE4CE]">
                  <p className="flex justify-between items-center"><span className="text-[#7A8F81] font-semibold text-xs uppercase tracking-wider">A/C Number</span> <span className="font-bold text-[#2D5A3D] font-mono break-all text-right">37702374646</span></p>
                  <p className="flex justify-between items-center"><span className="text-[#7A8F81] font-semibold text-xs uppercase tracking-wider">IFSC Code</span> <span className="font-bold text-[#2D5A3D] font-mono break-all text-right">SBIN0007499</span></p>
                  <p className="pt-3 border-t border-[#EDE4CE] text-[#2D5A3D] font-bold text-center mt-3 text-sm">Focus International Foundation</p>
                </div>
              ),
            },
            {
              Icon: Banknote,
              title: "Tax Exemption",
              content: (
                <p className="mt-4 leading-relaxed text-[#4B5E53] text-lg font-medium">
                  Donations are eligible for tax exemption under section <strong className="text-[#C9A84C]">80G & 12A</strong>. Official acknowledgement will be provided for all funds received.
                </p>
              ),
            },
            {
              Icon: Wallet,
              title: "Contact for Support",
              content: (
                <div className="mt-4 space-y-3 text-[#4B5E53]">
                  <p className="font-bold text-xl text-[#2D5A3D]">Mr. Pradeep Kumar Mukherjee</p>
                  <p className="text-[#C9A84C] font-bold uppercase tracking-widest text-xs mb-4">Chief Executive (FIF)</p>
                  <div className="flex flex-col gap-2 w-full mt-4">
                    <a href="tel:+917894992972" className="inline-flex items-center justify-center font-bold text-[#2D5A3D] bg-[#FDF8F0] px-4 py-3 rounded-xl border border-[#EDE4CE] hover:border-[#C9A84C] transition-colors gap-2 w-full shadow-sm text-sm">
                      <Phone className="w-4 h-4" /> +91 7894992972
                    </a>
                    <a href="tel:+919437439265" className="inline-flex items-center justify-center font-bold text-[#2D5A3D] bg-[#FDF8F0] px-4 py-3 rounded-xl border border-[#EDE4CE] hover:border-[#C9A84C] transition-colors gap-2 w-full shadow-sm text-sm">
                      <Phone className="w-4 h-4" /> +91 9437439265
                    </a>
                  </div>
                </div>
              ),
            },
          ].map(({ Icon, title, content }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EDE4CE] flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FDF8F0] flex items-center justify-center mb-6 border border-[#EDE4CE]">
                <Icon className="w-8 h-8 text-[#C9A84C]" />
              </div>
              <h4 className="text-2xl font-bold text-[#2D5A3D] text-center w-full pb-4 border-b border-[#EDE4CE]/50">{title}</h4>
              <div className="w-full mt-4 h-full flex flex-col text-center">
                {content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default DonateSection;
