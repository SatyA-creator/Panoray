import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full absolute top-0 left-0 right-0 z-[100] transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16 sm:h-20">
          {/* Social Media Links - Right Aligned */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://x.com/panorayventures"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#49c2bf]/10 flex items-center justify-center hover:bg-[#49c2bf]/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={16} className="sm:w-[18px] sm:h-[18px] text-[#49c2bf]" />
            </a>

            <a
              href="https://www.linkedin.com/company/panoray-ventures/mycompany/verification/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#49c2bf]/10 flex items-center justify-center hover:bg-[#49c2bf]/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px] text-[#49c2bf]" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
