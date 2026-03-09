import ScrollReveal from "@/components/ScrollReveal";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";
import { User, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Pathanjali Sharma",
    title: "Co-Founder and Managing Partner ",
    image: "/t1.jpeg",
    linkedin: "https://linkedin.com/in/pathanjali-sharma"
  },
  {
    name: "Mihir Londhe",
    title: "Senior Manager, Business Development and Operations",
    image: "/t2.jpeg",
    linkedin: "https://www.linkedin.com/in/mihir-londhe-143735169/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Nishchal Gaba",
    title: "Technical Advisor",
    image: "/t3.jpeg",
    linkedin: "https://www.linkedin.com/in/nishchal-gaba-295701a5/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <section className="relative pt-20 pb-10 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">Our People</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95]"
          >
            Our Team:<br /><span className="text-[#49c2bf]"> Experts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            A passionate team of professionals dedicated to building the future of decentralized technology.
          </motion.p>
        </div>
      </section>

    <section className="pb-12 px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {teamMembers.map((member, i) => (
      <ScrollReveal key={member.name} delay={i * 0.12} scale>

       <motion.div
  whileHover={{ y: -10 }}
  transition={{ duration: 0.35 }}
  className="group relative bg-white border border-border rounded-2xl overflow-hidden cursor-default shadow-sm hover:shadow-xl transition-all duration-300"
>

  {/* Image */}
  <div className="relative h-[320px] overflow-hidden">

    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-700"
    />

    {/* gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

    {/* social icon */}
    <div className="absolute bottom-4 right-4 flex gap-2">

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-primary hover:text-white transition"
      >
        <Linkedin size={16} />
      </a>

    </div>
  </div>

  {/* Content */}
  <div className="p-6 text-center">

    <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
      {member.name}
    </h3>

    <p className="text-muted-foreground text-base mt-1">
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
