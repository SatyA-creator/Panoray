import ScrollReveal from "@/components/ScrollReveal";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";
import { User, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  { name: "Pathanjali Sharma", title: "Founder & CEO", image: "/t1.jpeg" },
  { name: "Mihir Londhe", title: "Co-Founder & COO", image: "/t2.jpeg" },
  { name: "Nishchal Gaba", title: "Head of Partnerships", image: "/t3.jpeg" },
];

const Team = () => {
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
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">Our People</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95]"
          >
            Our Team:<br /><span className="text-[#49c2bf]">Web3 Experts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            A passionate team of Web3 professionals dedicated to building the future of decentralized technology.
          </motion.p>
        </div>
      </section>

    <section className="pb-32 px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {teamMembers.map((member, i) => (
      <ScrollReveal key={member.name} delay={i * 0.12} scale>

        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35 }}
          className="group relative bg-white border border-border rounded-xl overflow-hidden cursor-default shadow-sm hover:shadow-md transition-all duration-300"
        >

          <div className="relative aspect-[3/2] bg-gradient-to-br from-teal-50 via-cyan-50/50 to-teal-100/30 flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(177_46%_53%_/_0.08),_transparent_60%)] group-hover:scale-150 transition-transform duration-1000" />

            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />

            <User className="fallback-icon hidden text-muted-foreground/20 group-hover:text-primary/30 transition-colors duration-700 absolute" size={70} />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-5 gap-3">

              <div className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Linkedin size={15} className="text-primary" />
              </div>

              <div className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Twitter size={15} className="text-primary" />
              </div>

            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-display font-semibold group-hover:text-primary transition-colors duration-300">
              {member.name}
            </h3>

            <p className="text-primary/70 text-sm mt-1 font-medium">
              {member.title}
            </p>
          </div>

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

export default Team;
