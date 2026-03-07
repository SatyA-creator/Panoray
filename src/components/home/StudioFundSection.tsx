import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const studioBlocks = [
  { title: "Build with Serial Founders & Operators", desc: "We apply our hard-earned knowledge and proven playbooks to de-risk your venture and maximize your chances of success.", number: "01" },
  { title: "Fast-Track to Product/Market Fit", desc: "Collaborate with our dedicated team of designers, marketers, and engineers to validate concepts, build your MVP, and acquire your first customers.", number: "02" },
  { title: "Co-Create Innovative Solutions", desc: "We don't just invest – we co-create. Our Venture Studio partners with visionary entrepreneurs to transform incredible ideas into high-growth companies.", number: "03" },
];

const fundBlocks = [
  { title: "Raise Capital & Build Your Company", desc: "We don't just provide funding, we help you recruit key talent and evolve from just an idea to an operational powerhouse.", number: "01" },
  { title: "Comprehensive Support", desc: "Our entrepreneurs receive pre-seed capital, dedicated team support, access to our extensive corporate partner network, and membership in our global founder community.", number: "02" },
];

const BlockItem = ({ block, index }: { block: typeof studioBlocks[0]; index: number }) => (
  <ScrollReveal delay={index * 0.15}>
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ duration: 0.3 }}
      className="group flex gap-6 py-6 border-b border-border last:border-b-0 cursor-default"
    >
      <span className="text-[#49c2bfff] font-display font-bold text-sm mt-1 shrink-0">{block.number}</span>
      <div>
        <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors duration-300">
          {block.title}
          <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" size={16} />
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{block.desc}</p>
      </div>
    </motion.div>
  </ScrollReveal>
);

const StudioFundSection = () => (
  <>
    {/* Venture Studio */}
    <section className="py-32 lg:py-40 px-6 lg:px-8 relative bg-gradient-to-br from-teal-50/50 via-white to-cyan-50/50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 line-glow">Venture Studio</p>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                We Help Build<br />
                <span className="text-gradient">Companies</span>
              </h2>
              <div className="mt-8 w-24 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
          </ScrollReveal>
          <div>
            {studioBlocks.map((block, i) => (
              <BlockItem key={block.title} block={block} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Venture Fund */}
    <section className="py-32 lg:py-40 px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 line-glow">Venture Fund</p>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                We Invest in<br />
                <span className="text-gradient">Great Ideas</span>
              </h2>
              <div className="mt-8 w-24 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
          </ScrollReveal>
          <div>
            {fundBlocks.map((block, i) => (
              <BlockItem key={block.title} block={block} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default StudioFundSection;
