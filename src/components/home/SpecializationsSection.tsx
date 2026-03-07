import { Building, Network, Megaphone, Compass, Search, Globe, BarChart3, Store, Coins } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const specializations = [
  { icon: Network, title: "Service Provider Network", desc: "We carefully select projects that complement our existing portfolio, creating a network of businesses that amplify each other's success." },
  { icon: Megaphone, title: "Marketing", desc: "Data-Driven Marketing and Expansion: Leveraging analytics for impactful market entry and growth. Influencer Marketing: Collaborating with influencers to amplify brand awareness and credibility. Public Relations (PR): Building and maintaining a positive brand image through strategic communication." },
  { icon: Compass, title: "Strategic Consultation", desc: "Expert guidance to align business goals with actionable strategies." },
  { icon: Search, title: "Market Research and Product R&D", desc: "Insight-driven analysis to shape innovative and market-relevant products." },
  { icon: Globe, title: "Ecosystem Integration", desc: "Seamless incorporation into industry ecosystems for enhanced value." },
  { icon: BarChart3, title: "Business Development & Partnerships", desc: "Comprehensive planning to steer growth and milestones. Driving growth through high-impact collaborations and opportunities." },
  { icon: Store, title: "Go-to-Market Strategy", desc: "Crafting a winning approach for product launches and market entry." },
  { icon: Coins, title: "Exchange Listing", desc: "Facilitating seamless onboarding to global exchange platforms." },
];

const SpecializationsSection = () => (
  <section className="py-32 lg:py-40 px-6 lg:px-8 relative overflow-hidden bg-white">

    <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-cyan-50/20 to-teal-50/30" />

    {/* Decorative circles */}
    <div className="absolute -right-40 top-1/3 w-80 h-80 rounded-full border border-primary/5 animate-float-slower" />
    <div className="absolute -left-20 bottom-1/4 w-60 h-60 rounded-full border border-primary/5 animate-float-slow" />

    <div className="max-w-7xl mx-auto relative z-10">

      <ScrollReveal>
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4">
            What We Do
          </p>

          <h2 className="text-4xl md:text-6xl font-display font-semibold">
            Our <span className="text-gradient">Specializations</span>
          </h2>
        </div>
      </ScrollReveal>


      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {specializations.map((spec, i) => (

          <ScrollReveal key={spec.title} delay={i * 0.06} scale>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-transparent to-primary/40 h-full"
            >

              {/* CARD */}
              <div className="relative bg-white backdrop-blur-xl rounded-2xl p-7 h-full min-h-[280px] overflow-hidden transition-all duration-500 group-hover:shadow-xl flex flex-col">

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />

                {/* ICON */}
                <div className="flex items-center gap-4 mb-4">

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20"
                  >
                    <spec.icon className="text-primary" size={20} />
                  </motion.div>

                  <h3 className="text-base font-display font-semibold group-hover:text-primary transition-colors duration-300">
                    {spec.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {spec.desc}
                </p>

                {/* Bottom animated line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 group-hover:w-full" />

              </div>

            </motion.div>

          </ScrollReveal>

        ))}

      </div>
    </div>
  </section>
);
export default SpecializationsSection;
