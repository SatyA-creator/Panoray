const MarqueeSection = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {[...Array(20)].map((_, i) => (
          <h2
            key={i}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase inline-block"
            style={{ color: '#49c2bf' }}
          >
            PANORAY
          </h2>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
