import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Handshake,
  Users,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Partners", path: "/partners", icon: Handshake },
  { name: "Team", path: "/team", icon: Users },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 sm:top-6 sm:left-6 z-[60] text-[#49c2bf] p-2 sm:p-3"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[70px] sm:w-[90px] z-50 flex flex-col items-center transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >

        {/* Logo */}
        <div className="mt-6">
          <Link to="/">
            <img
              src="/logo_full.png"
              alt="Logo"
              className="w-14 sm:w-16 lg:w-20"
            />
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => {
              const Icon = link.icon;
              const active = location.pathname === link.path;

              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -50, rotateY: -90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`inline-flex items-center justify-center transition-all duration-300
                    ${
                      active
                        ? "text-[#49c2bf] scale-110"
                        : "text-[#49c2bf]/70 hover:text-[#49c2bf] hover:scale-105"
                    }`}
                  >
                    <Icon size={26} />
                  </Link>

                  {/* Tooltip */}
                  <span className="absolute left-12 sm:left-14 top-1/2 -translate-y-1/2 bg-[#49c2bf] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg whitespace-nowrap pointer-events-none">
                    {link.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </nav>

      </aside>

      {/* Spacer */}
      <div className="hidden lg:block w-[70px] sm:w-[90px]" />
    </>
  );
};

export default Sidebar;