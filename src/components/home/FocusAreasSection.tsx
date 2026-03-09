import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Building2, Network, Globe, Brain, Shield, Leaf } from "lucide-react";

const focusAreas = [
  { title: "RWA", subtitle: "Real World Assets", desc: "Platforms for tokenizing real estate, allowing fractional ownership and increased liquidity.", icon: Building2 },
  { title: "DePIN", subtitle: "Decentralized Physical Infrastructure", desc: "Decentralized wireless network providers and blockchain-based distributed computing platforms.", icon: Network },
  { title: "Web3 Infrastructure", subtitle: "Core Building Blocks", desc: "Scalable Layer 2 blockchain solutions, cross-chain interoperability protocols, and decentralized storage networks.", icon: Globe },
  { title: "AI", subtitle: "Artificial Intelligence", desc: "AI systems that transform data into real-world decisions, automating complexity and unlocking scalable innovation.", icon: Brain },
  { title: "Quantum Computing", subtitle: "Next-Gen Security", desc: "Securing data, infrastructure, and digital assets against quantum-era threats.", icon: Shield },
  { title: "Renewable Energy", subtitle: "Sustainable Future", desc: "Renewable energy technologies that accelerate the global transition to a low-carbon, sustainable energy future.", icon: Leaf },
];

const FocusAreasSection = () => (
  <section className="py-32 lg:py-40 px-6 lg:px-8 relative bg-white">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">Our Focus Areas</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Focus <span className="text-gradient">Areas</span>
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {focusAreas.map((area, i) => {
          const Icon = area.icon;
          return (
            <ScrollReveal key={area.title} delay={i * 0.12} scale>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border-2 border-gray-200 overflow-hidden cursor-default shadow-sm hover:shadow-xl transition-all duration-300"
                style={{
                  borderRadius: '120px 120px 24px 24px'
                }}
              >
                {/* Numbered Badge */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: '#49c2bf' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 pt-24 pb-10 px-8 text-center">
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center relative"
                      style={{
                        background: 'linear-gradient(135deg, #a8d645 0%, #91c13a 100%)'
                      }}
                    >
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <Icon size={32} style={{ color: '#49c2bf' }} strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a1a1a' }}>
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default FocusAreasSection;
