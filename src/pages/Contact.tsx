import { useState } from "react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <section className="relative pt-32 pb-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary text-xs font-semibold tracking-wide uppercase">Get in Touch</span>
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-10 leading-[0.95]"
              >
                Let's Build<br /><span className="text-[#49c2bf]">Together</span>
              </motion.h1>

              <ScrollReveal delay={0.3}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative group">
                    <Input
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-transparent glass border-0 focus:ring-1 focus:ring-primary h-14 rounded-xl px-5 text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="relative group">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-transparent glass border-0 focus:ring-1 focus:ring-primary h-14 rounded-xl px-5 text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="bg-white/80 border border-border focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 resize-none"
                  />
                  <Button type="submit" className="w-full h-14 gap-2 rounded-xl text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
                    Send Message <Send size={16} />
                  </Button>
                </form>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2} direction="left">
              <div className="lg:pt-32 space-y-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-display font-bold mb-5">Contact Information</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <a href="mailto:contact@panoray.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail size={16} className="text-primary" />
                      </div>
                      contact@panoray.com
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin size={16} className="text-primary" />
                      </div>
                      Dubai, UAE
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-border rounded-2xl p-8 overflow-hidden relative group shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-display font-bold">Looking to Partner?</h3>
                      <ArrowUpRight className="text-primary/0 group-hover:text-primary transition-all duration-300" size={18} />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Whether you're a startup seeking funding, a project looking for strategic guidance, or an investor interested in Web3 opportunities — we'd love to hear from you.
                    </p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Contact;
