import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface FloatingIconProps {
  src: string;
  alt: string;
  delay?: number;
}

export function FloatingIcon({ src, alt, delay = 0 }: FloatingIconProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
      });
    }, 2000 + delay * 1000);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      whileHover={{ scale: 1.2, rotate: 5 }}
      className="relative group"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: delay * 0.2,
          ease: "easeInOut",
        }}
        className="w-16 h-16 md:w-20 md:h-20 bg-gray-800/50 rounded-2xl p-3 md:p-4 border border-gray-700 hover:border-cyan-500/50 transition-all backdrop-blur-sm shadow-lg hover:shadow-cyan-500/30"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </motion.div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <span className="text-xs text-cyan-400 font-semibold">{alt}</span>
      </div>
    </motion.div>
  );
}
