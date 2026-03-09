import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";

const portfolioCompanies = [
  { name: "Seeds Finance", category: "DeFi", desc: "A decentralized finance platform providing innovative yield farming and staking solutions for the Web3 ecosystem.", link: "#" },
  { name: "Okratech", category: "Infrastructure", desc: "Building next-generation blockchain infrastructure solutions for enterprise-grade decentralized applications.", link: "#" },
  { name: "AIO Exchange", category: "Exchange", desc: "A comprehensive cryptocurrency exchange platform offering seamless trading experiences across multiple blockchain networks.", link: "#" },
  { name: "Ecotrader", category: "Trading", desc: "An AI-powered trading platform that leverages machine learning for optimized cryptocurrency trading strategies.", link: "#" },
  
  { name: "Zenith", category: "Web3", desc: "A comprehensive Web3 platform offering tools and services for developers building decentralized applications.", link: "#" },
  { name: "Yom", category: "Gaming", desc: "A decentralized cloud gaming platform leveraging blockchain technology for next-generation gaming experiences.", link: "#" },
  { name: "Hebed AI", category: "AI", desc: "Advanced AI solutions transforming data into actionable insights for Web3 and decentralized ecosystems.", link: "#" },
  { name: "Bull Shot", category: "Trading", desc: "Next-generation trading platform combining AI-driven analytics with seamless user experience for crypto markets.", link: "#" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <section className="relative pt-20 pb-10 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">Portfolio</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95]"
          >
            Our Web3<br /><span className="text-[#49c2bf]">Success Stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            We invest in bold founders building the future of decentralized technology.
          </motion.p>
        </div>
      </section>

      <section className="pb-12 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioCompanies.map((company, i) => (
            <ScrollReveal key={company.name} delay={i * 0.08} scale>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-border rounded-2xl p-8 lg:p-10 h-full overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                      {company.category}
                    </span>
                    <ArrowUpRight className="text-muted-foreground/30 group-hover:text-primary group-hover:rotate-12 transition-all duration-500" size={22} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">{company.name}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{company.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
