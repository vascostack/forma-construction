import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Jeda sebelum animasi mulai (ms), untuk efek berurutan */
  delay?: number;
  /** Lama animasi dalam detik (default 1.2) */
  duration?: number;
  /** Arah datangnya elemen */
  direction?: "up" | "down" | "left" | "right" | "none";
};

const offsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -48 },
  right: { x: 48 },
  none: {},
};

function Reveal({
  children,
  className,
  delay = 0,
  duration = 1.2,
  direction = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...(reduceMotion ? {} : offsets[direction]) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;