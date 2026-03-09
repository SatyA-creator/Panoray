import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      className={`w-full transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-end h-20 gap-4">
          {/* Right: Contact Us Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-300"
          >
            Contact Us
          </Link>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/panorayventures"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="Twitter"
            >
              <Twitter size={16} className="text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/company/panoray-ventures/mycompany/verification/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} className="text-primary" />
            </a>
          </div>
        </div>
      </div>


    </motion.nav>
  );
};

export default Navbar;
