import ScrollReveal from "@/components/ScrollReveal";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";

const partners = [
  { name: "Gate.io", logo: "https://cryptologos.cc/logos/gate-token-gt-logo.png?v=029" },
  { name: "Kommunitas", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/9145.png" },
  { name: "OrbitX", logo: "https://via.placeholder.com/200x200/1a1a1a/4A9FF5?text=OrbitX" },
  { name: "IBC Group", logo: "https://via.placeholder.com/200x200/1a1a1a/00FF00?text=IBC" },
  { name: "Ant Chain", logo: "https://via.placeholder.com/200x200/1a1a1a/FF6B00?text=AntChain" },
  { name: "Supra Oracles", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/27286.png" },
  { name: "Magic Square", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/22566.png" },
  { name: "Kgen", logo: "https://via.placeholder.com/200x200/1a1a1a/FFD700?text=KGEN" },
  { name: "Neurochain", logo: "https://via.placeholder.com/200x200/1a1a1a/9B59B6?text=Neurochain" },
  { name: "Agora", logo: "https://via.placeholder.com/200x200/1a1a1a/E74C3C?text=AGORA" },
  { name: "NODO", logo: "https://via.placeholder.com/200x200/1a1a1a/3498DB?text=NODO" },
  { name: "TBV", logo: "https://via.placeholder.com/200x200/1a1a1a/FF8C00?text=TBV" },
  { name: "Kaizen", logo: "https://via.placeholder.com/200x200/1a1a1a/2ECC71?text=KAIZEN" },
  { name: "Gala", logo: "https://cryptologos.cc/logos/gala-gala-logo.png?v=029" },
  { name: "Blocktides", logo: "https://via.placeholder.com/200x200/1a1a1a/1ABC9C?text=Blocktides" },
  { name: "Growfitter", logo: "https://via.placeholder.com/200x200/1a1a1a/E67E22?text=Growfitter" },
  { name: "Plumdale", logo: "https://via.placeholder.com/200x200/1a1a1a/9B59B6?text=Plumdale" },
  { name: "Levitate", logo: "https://via.placeholder.com/200x200/1a1a1a/3498DB?text=Levitate" },
  { name: "ICP Hub", logo: "https://cryptologos.cc/logos/internet-computer-icp-logo.png?v=029" },
  { name: "Solus", logo: "https://via.placeholder.com/200x200/1a1a1a/34495E?text=SOLUS" },
  { name: "Everstake", logo: "https://via.placeholder.com/200x200/1a1a1a/16A085?text=Everstake" },
  { name: "Tonlaunch", logo: "https://cryptologos.cc/logos/toncoin-ton-logo.png?v=029" },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">Ecosystem</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95]"
          >
            Our <span className="text-[#49c2bf]">Partners</span>
          </motion.h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">Network</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Strategic Partners & <span className="text-[#49c2bf]">Collaborators</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 0.03} scale>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center cursor-default overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Logo Container */}
                  <div className="relative z-10 flex items-center justify-center w-full h-32 mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Partner Name - Always Visible */}
                  <div className="relative z-10 w-full">
                    <h3 className="text-base font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 text-center">
                      {partner.name}
                    </h3>
                  </div>
                  
                  {/* Decorative bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Partners;
