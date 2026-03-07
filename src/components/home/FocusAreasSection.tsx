import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
  { title: "RWA", subtitle: "Real World Assets", desc: "Platforms for tokenizing real estate, allowing fractional ownership and increased liquidity.", gradient: "from-primary/20 to-primary/5" },
  { title: "DePIN", subtitle: "Decentralized Physical Infrastructure", desc: "Decentralized wireless network providers and blockchain-based distributed computing platforms.", gradient: "from-accent/20 to-accent/5" },
  { title: "Web3 Infrastructure", subtitle: "Core Building Blocks", desc: "Scalable Layer 2 blockchain solutions, cross-chain interoperability protocols, and decentralized storage networks.", gradient: "from-primary/15 to-primary/5" },
  { title: "AI", subtitle: "Artificial Intelligence", desc: "AI systems that transform data into real-world decisions, automating complexity and unlocking scalable innovation.", gradient: "from-accent/15 to-accent/5" },
  { title: "Quantum Computing", subtitle: "Next-Gen Security", desc: "Securing data, infrastructure, and digital assets against quantum-era threats.", gradient: "from-primary/20 to-primary/5" },
  { title: "Renewable Energy", subtitle: "Sustainable Future", desc: "Renewable energy technologies that accelerate the global transition to a low-carbon, sustainable energy future.", gradient: "from-accent/20 to-accent/5" },
];

const FocusAreasSection = () => (
  <section className="py-32 lg:py-40 px-6 lg:px-8 relative bg-gradient-to-br from-teal-50/30 via-white to-cyan-50/30">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">Our Focus Areas</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Focus <span className="text-gradient">Areas</span>
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {focusAreas.map((area, i) => (
          <ScrollReveal key={area.title} delay={i * 0.12} scale>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-border rounded-2xl p-10 lg:p-12 h-full overflow-hidden cursor-default shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <p className="text-primary font-medium text-xs uppercase tracking-widest">{area.subtitle}</p>
                  <ArrowUpRight className="text-primary/0 group-hover:text-primary transition-all duration-500 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" size={20} />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-shimmer">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{area.desc}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreasSection;
