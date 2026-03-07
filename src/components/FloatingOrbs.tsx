import { motion } from "framer-motion";

const orbs = [
  { size: 300, x: "10%", y: "20%", delay: 0, duration: 20 },
  { size: 200, x: "70%", y: "60%", delay: 2, duration: 25 },
  { size: 400, x: "80%", y: "10%", delay: 4, duration: 30 },
  { size: 150, x: "30%", y: "70%", delay: 1, duration: 18 },
  { size: 250, x: "50%", y: "40%", delay: 3, duration: 22 },
];

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: orb.size,
          height: orb.size,
          left: orb.x,
          top: orb.y,
          background: `radial-gradient(circle, hsl(177 46% 53% / 0.06) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          y: [0, -30, 15, -10, 0],
          x: [0, 15, -10, 20, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: orb.duration,
          repeat: Infinity,
          delay: orb.delay,
          ease: "easeInOut",
        }}
      />
    ))}
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(177 46% 53% / 0.4) 1px, transparent 1px),
          linear-gradient(90deg, hsl(177 46% 53% / 0.4) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  </div>
);

export default FloatingOrbs;
