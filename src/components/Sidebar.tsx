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
        className="lg:hidden fixed top-6 left-6 z-[60] bg-primary text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
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
        className={`fixed left-0 top-0 h-screen w-[90px] bg-white z-50 flex flex-col items-center shadow-2xl transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center h-24 border-b w-full group"
        >
          <img 
            src="/logo_full_colored.png" 
            alt="Nova Growth Capital" 
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Icons */}
        <nav className="flex flex-col items-center gap-6 mt-10">
          {navLinks.map((link, i) => {
            const Icon = link.icon;
            const active = location.pathname === link.path;

            return (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-center w-14 h-14 rounded-xl border-2 transition-all duration-300
                  ${
                    active
                      ? "border-[#49c2bf] bg-[#49c2bf] text-white shadow-lg"
                      : "border-[#49c2bf] text-gray-700 hover:bg-[#49c2bf] hover:text-white"
                  }`}
                >
                  <Icon size={22} />
                </Link>

                {/* Tooltip */}
                <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {link.name}
                </span>
              </motion.div>
            );
          })}
        </nav>
      </aside>

      {/* Spacer */}
      <div className="hidden lg:block w-[90px]" />
    </>
  );
};

export default Sidebar;