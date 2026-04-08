import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Focus Solutions", href: "/focus-solutions" },
  { name: "Trustees", href: "/board-of-trustees" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b bg-[#FDF8F0]/95 border-[#EDE4CE]">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu (ONLY lg and above) */}
        <div className="hidden lg:flex items-center gap-6">

          {navLinks.map((link) => {
            const isFocusSolutions = link.name === "Focus Solutions";

            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `
                  transition-all duration-300
                  ${isFocusSolutions
                    ? "px-4 py-1.5 rounded-full text-sm font-bold bg-linear-to-r from-yellow-400 to-yellow-600 text-[#1E3D2F] shadow-md"
                    : "text-base font-medium"
                  }
                  ${isActive
                    ? "text-[#1A3322]"
                    : "text-[#4B5E53] hover:text-[#2D5A3D]"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            );
          })}

          {/* Donate Button */}
          {/* Donate Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0" // Prevents the container from squishing
          >
            <Link
              to="/donate"
              className="px-6 py-3 text-base rounded-xl font-semibold text-[#FDF8F0] bg-linear-to-r from-[#2D5A3D] to-[#4A7C59] hover:from-[#1E3D2F] hover:to-[#2D5A3D] shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap "
            >
              Donate Now
            </Link>
          </motion.div>
        </div>

        {/* Hamburger Button (VISIBLE on sm + md) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-[#2D5A3D]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile + Tablet Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#FDF8F0]/95 backdrop-blur-xl border-t border-[#EDE4CE]"
          >
            <div className="flex flex-col gap-4 px-6 py-6">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    text-center py-2 rounded-lg text-sm font-medium transition
                    ${isActive
                      ? "bg-emerald-100 text-[#1A3322]"
                      : "text-[#4B5E53]"
                    }
                  `
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Donate Button */}
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="
                  mt-3 py-3 rounded-xl text-center font-semibold text-sm
                  text-white
                  bg-linear-to-r from-[#2D5A3D] to-[#4A7C59]
                "
              >
                Donate Now
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;