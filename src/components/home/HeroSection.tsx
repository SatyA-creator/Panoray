import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-20 sm:pt-24 lg:pt-0">
      
      {/* Decorative dots/stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-1/4 w-2 h-2 bg-[#49c2bf] rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#49c2bf] rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-[#49c2bf] rounded-full opacity-50"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.8 }}
          className="absolute top-1/2 right-1/5 w-1 h-1 bg-[#49c2bf] rounded-full opacity-35"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10 py-12 lg:py-0">
        
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#49c2bf]"
          >
            Your Gateway to Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            We invest in the convergence of decentralized technologies, Digital Assets and sustainable energy backing visionary founders building the infrastructure for a resilient, decentralized, and carbon-neutral future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
          >
            {/* Contact Button */}
<Link
  to="/contact"
  className="inline-flex items-center justify-center gap-2 border border-[#49c2bf] text-[#49c2bf] px-7 sm:px-9 py-3 text-base sm:text-lg font-medium rounded-full hover:bg-[#49c2bf] hover:text-white transition-all duration-300"
>
  Contact Us <ArrowRight size={18} />
</Link>

{/* Portfolio Button */}
<Link
  to="/portfolio"
  className="inline-flex items-center justify-center gap-2 border border-[#49c2bf] text-[#49c2bf] px-7 sm:px-9 py-3 text-base sm:text-lg font-medium rounded-full hover:bg-[#49c2bf] hover:text-white transition-all duration-300"
>
  View Portfolio <ArrowRight size={18} />
</Link>
          </motion.div>
        </div>

        {/* Right Content - Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center order-first lg:order-last"
        >
          <motion.img
            src="/logo_icon.png"
            alt="Panoray Ventures Logo"
            className="w-full max-w-[180px] sm:max-w-[240px] lg:max-w-[300px] h-auto drop-shadow-2xl"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;