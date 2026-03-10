import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Briefcase, TrendingUp, Shield } from "lucide-react";

const benefits = [
  { icon: Lightbulb, title: "Market Insights", desc: "Duty or the obligation that business it will frequently occurs pleasure.", position: "left-top" },
  { icon: Zap, title: "Smart Funding", desc: "Duty or the obligation that business it will frequently occurs pleasure.", position: "top" },
  { icon: Briefcase, title: "Expert Guidance", desc: "Duty or the obligation that business it will frequently occurs pleasure.", position: "right-top" },
  { icon: TrendingUp, title: "Wealth Creation", desc: "Duty or the obligation that business it will frequently occurs pleasure.", position: "left-bottom" },
  { icon: Shield, title: "Risk Mitigation", desc: "Duty or the obligation that business it will frequently occurs pleasure.", position: "right-bottom" },
];

const BenefitsSection = () => (
  <section className="py-32 lg:py-40 px-6 lg:px-8 relative bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">WORK BENNIFITS</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight max-w-4xl mx-auto">
            Empowering Bold Ideas Through <span className="text-gradient">Smart Investment</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Icon/Image */}
        <div className="flex items-center justify-center mb-12">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%2349c2bf' d='M100 20 L140 60 L120 100 L140 140 L100 180 L60 140 L80 100 L60 60 Z' opacity='0.8'/%3E%3Cpath fill='%23c6d936' d='M100 40 L130 70 L115 100 L130 130 L100 160 L70 130 L85 100 L70 70 Z' opacity='0.6'/%3E%3C/svg%3E"
              alt="Smart Investment"
              className="w-48 h-48 relative z-10"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
