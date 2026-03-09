import { Link } from "react-router-dom";
import { Mail, MapPin, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden" style={{ backgroundColor: '#49c2bfff' }}>
      {/* Ellipse image in right corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-20 pointer-events-none">
        <img 
          src="/ellipse-2.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-3xl font-display font-bold text-white">
              Panoray<span className="text-white/90">.</span>
            </span>
            <p className="mt-4 text-white/80 max-w-sm text-sm leading-relaxed">
              Your Gateway to  Success. We provide equity financing to startups and early-stage companies with high growth potential.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://x.com/panorayventures"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter size={16} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/panoray-ventures/mycompany/verification/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans font-semibold text-white mb-5 text-xs uppercase tracking-widest">Navigate</h4>
            <div className="space-y-3">
              {["Home", "Portfolio", "Partners", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-sans font-semibold text-white mb-5 text-xs uppercase tracking-widest">Contact</h4>
            <div className="space-y-4 text-sm text-white/80">
              <a href="mailto:contact@panoray.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail size={14} className="text-white" />
                </div>
                contact@panoray.com
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin size={14} className="text-white" />
                </div>
                Dubai, UAE
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Panoray Ventures. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Built for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
