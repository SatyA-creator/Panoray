import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  scale?: boolean;
}

const directionMap = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up", scale = false }: ScrollRevealProps) => {
  const offset = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset, ...(scale ? { scale: 0.95 } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
