import AnimatedCounter from "@/components/AnimatedCounter";

const StatsSection = () => (
  <section className="py-10 px-6 lg:px-8 border-y border-border relative bg-gradient-to-br from-teal-50 via-white to-cyan-50">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.05] to-transparent" />
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
      <AnimatedCounter end={15} suffix="+" label="Portfolio Companies" />
      <AnimatedCounter end={50} suffix="+" label="Strategic Partners" />
      <AnimatedCounter end={8} suffix="" label="Specializations" />
      <AnimatedCounter end={6} suffix="" label="Focus Areas" />
    </div>
  </section>
);

export default StatsSection;
