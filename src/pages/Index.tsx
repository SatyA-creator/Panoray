import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Lightbulb, TrendingUp, Target, Building, Network, Megaphone, Compass, Search, Globe, BarChart3, Store, Coins } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingOrbs from "@/components/FloatingOrbs";
import AnimatedCounter from "@/components/AnimatedCounter";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import StudioFundSection from "@/components/home/StudioFundSection";
import SpecializationsSection from "@/components/home/SpecializationsSection";
import FocusAreasSection from "@/components/home/FocusAreasSection";
import StatsSection from "@/components/home/StatsSection";
// import MarqueeSection from "@/components/home/MarqueeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <HeroSection />
        {/* <MarqueeSection /> */}
        <StatsSection />
        <MissionSection />
        <StudioFundSection />
        <SpecializationsSection />
        <FocusAreasSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
