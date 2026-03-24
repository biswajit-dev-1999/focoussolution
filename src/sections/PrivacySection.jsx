import React from "react";
import { motion } from "framer-motion";

const SectionBox = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="rounded-3xl p-8 shadow-xl"
    style={{ background: "#FFFFFF", border: "1px solid #EDE4CE" }}
  >
    <h3 className="text-xl font-bold mb-4" style={{ color: "#2D5A3D" }}>{title}</h3>
    <div className="leading-relaxed text-md" style={{ color: "#4B5E53" }}>{children}</div>
  </motion.div>
);

const PrivacySection = () => {
  return (
    <section
      className="w-full py-24 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom right, #FDF8F0, #F5EDD8, #EDE4CE)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-52 h-52 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "#C9A84C" }} />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#4A7C59" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "'Gloria Hallelujah', cursive", color: "#2D5A3D" }}
          >
            Privacy Policy
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto mt-4 text-lg"
            style={{ color: "#4B5E53" }}
          >
            Your privacy matters deeply to us. This page explains how Focus International
            Foundation collects, protects, and uses your information.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <SectionBox title="1. Information We Collect">
            <p>
              We collect basic personal information such as your name,
              email address, phone number, and donation details
              when you interact with our website, donate, volunteer,
              or subscribe to our updates.
            </p>
            <p className="mt-2">
              For analytics, we may collect anonymized browsing data like
              pages visited, device type, and interactions.
            </p>
          </SectionBox>

          <SectionBox title="2. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-2">
              <li>To process donations safely and securely</li>
              <li>To share impact updates and newsletters (only if you opt-in)</li>
              <li>To improve website experience and performance</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </SectionBox>

          <SectionBox title="3. Donation & Payment Security">
            <p>
              Focus International Foundation does NOT store your card details.
              All payments are processed through secure, PCI-compliant
              payment gateways. We use SSL encryption to protect all data
              transfers on our website.
            </p>
          </SectionBox>

          <SectionBox title="4. Cookies & Tracking">
            <p>
              We use cookies to improve website performance and for basic
              analytics. You can disable cookies anytime in your browser
              settings without affecting major website functionality.
            </p>
          </SectionBox>

          <SectionBox title="5. Your Rights">
            <ul className="list-disc pl-5 space-y-2">
              <li>Request access to the data we hold about you</li>
              <li>Ask for corrections or deletion of your data</li>
              <li>Opt out of newsletters or SMS campaigns anytime</li>
              <li>Request that we stop processing your information</li>
            </ul>
          </SectionBox>

          <SectionBox title="6. Third-Party Sharing">
            <p>
              We NEVER sell or rent your personal information.
              We only share data with trusted service providers
              such as payment gateways or analytics services
              that follow strict confidentiality and data protection policies.
            </p>
          </SectionBox>

          <SectionBox title="7. Policy Updates">
            <p>
              Our privacy policy may be updated occasionally.
              When updated, we will revise the "Last Updated" date
              at the bottom of this page.
            </p>
          </SectionBox>

          <SectionBox title="8. Contact Us">
            <p>
              If you have questions regarding this Privacy Policy,
              or want to request data changes, please contact:
            </p>
            <p className="mt-3 font-semibold" style={{ color: "#2D5A3D" }}>
              📧 support@focusinternational.org
              <br />
              📞 +91 98765 43210
            </p>
          </SectionBox>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-16 text-sm" style={{ color: "#7A8F81" }}>
          Last Updated: January 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacySection;
