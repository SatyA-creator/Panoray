import { Link } from "react-router-dom";
import { Mail, MapPin, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-gradient-to-br from-teal-50/30 via-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-3xl font-display font-bold text-foreground">
              Panoray<span className="text-primary">.</span>
            </span>
            <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
              Your Gateway to Web3 Success. We provide equity financing to startups and early-stage companies with high growth potential.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://x.com/panorayventures"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center hover:bg-primary/10 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/panoray-ventures/mycompany/verification/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center hover:bg-primary/10 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans font-semibold text-foreground mb-5 text-xs uppercase tracking-widest">Navigate</h4>
            <div className="space-y-3">
              {["Home", "Portfolio", "Partners", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-sans font-semibold text-foreground mb-5 text-xs uppercase tracking-widest">Contact</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <a href="mailto:contact@panoray.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                contact@panoray.com
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={14} className="text-primary" />
                </div>
                Dubai, UAE
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Panoray Ventures. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Built for the future of Web3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
