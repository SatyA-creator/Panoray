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
  <section className="py-12 lg:py-14 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">



    {/* Decorative circles */}
    <div className="absolute -right-40 top-1/3 w-80 h-80 rounded-full border border-primary/5 animate-float-slower" />
    <div className="absolute -left-20 bottom-1/4 w-60 h-60 rounded-full border border-primary/5 animate-float-slow" />

    <div className="max-w-7xl mx-auto relative z-10">

      <ScrollReveal>
        <div className="text-center mb-8">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            What We Do
          </p>

          <h2 className="text-5xl md:text-7xl font-display font-semibold">
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

                {/* Number Badge with Line */}
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a8d645] to-[#91c13a] flex items-center justify-center shadow-md">
                    <span className="text-lg font-bold text-gray-800">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-300 to-transparent" />
                </div>

                {/* ICON */}
                <div className="flex items-center gap-4 mb-4">

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20"
                  >
                    <spec.icon className="text-primary" size={20} />
                  </motion.div>

                  <h3 className="text-lg font-display font-semibold group-hover:text-primary transition-colors duration-300">
                    {spec.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground text-base leading-relaxed flex-1">
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
