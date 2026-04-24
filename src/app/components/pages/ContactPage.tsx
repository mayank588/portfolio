import { motion } from 'motion/react';

export function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 md:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h1 className="font-['Cormorant_Garamond'] text-8xl md:text-9xl tracking-tight mb-12">
          Let's Work
        </h1>

        <a
          href="mailto:hello@studio.com"
          className="font-['Inter'] text-xl md:text-2xl hover:opacity-60 transition-opacity duration-300 inline-block mb-16"
        >
          hello@studio.com
        </a>

        <div className="font-['JetBrains_Mono'] text-[9pt] tracking-wide opacity-40 space-y-1">
          <div>Copenhagen / New York</div>
          <div>Est. 2024</div>
        </div>
      </motion.div>
    </div>
  );
}
