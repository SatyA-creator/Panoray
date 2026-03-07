import { Lightbulb, TrendingUp, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const missionCards = [
  { icon: Lightbulb, title: "Innovation", desc: "We drive innovation through strategic partnerships and investments.", number: "01" },
  { icon: TrendingUp, title: "Growth", desc: "We focus on nurturing companies to reach their full potential.", number: "02" },
  { icon: Target, title: "Impact", desc: "Our investments aim for positive social and economic impact.", number: "03" },
];

const MissionSection = () => (
  <section className="py-32 lg:py-40 px-6 lg:px-8 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">

    <div className="max-w-7xl mx-auto">

      <ScrollReveal>
        <div className="max-w-3xl mb-24">
          <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 line-glow">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight">
            To empower innovative ventures and foster{" "}
            <span className="text-gradient">
              growth through strategic investments.
            </span>
          </h2>
        </div>
      </ScrollReveal>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

        {missionCards.map((card, i) => (

          <ScrollReveal key={card.title} delay={i * 0.15} scale>

            <motion.div
              whileHover={{ y: -12 }}
              transition={{ duration: 0.35 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-transparent to-primary/40"
            >

              {/* Card */}
              <div className="relative bg-white backdrop-blur-xl rounded-2xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-500 group-hover:shadow-2xl">

                {/* Background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />

                {/* Number */}
                <div className="absolute top-6 right-6 text-7xl font-display font-bold text-[#49c2bfff] select-none group-hover:scale-110 transition-transform duration-500">
                  {card.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary/20"
                >
                  <card.icon className="text-primary" size={24} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.desc}
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

export default MissionSection;