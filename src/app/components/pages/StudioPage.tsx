import { motion } from 'motion/react';

export function StudioPage() {
  return (
    <div className="min-h-screen px-8 md:px-32 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <h1 className="font-['Cormorant_Garamond'] text-7xl md:text-8xl tracking-tight mb-16">
          Studio
        </h1>

        <div className="space-y-24">
          <section>
            <h2 className="font-['Cormorant_Garamond'] text-4xl mb-8 tracking-tight">
              Our Approach
            </h2>
            <div className="font-['Inter'] text-base leading-relaxed opacity-80 space-y-6" style={{ maxWidth: '65ch' }}>
              <p>
                We are a boutique design studio working exclusively within the hospitality sector. Our clients are restaurants, bakeries, wine shops, and cafés that understand the value of restraint.
              </p>
              <p>
                We reject trends in favor of timeless principles: proportion, materiality, and clarity. Every identity we create is rooted in physical materials—paper stocks, ink coverage, substrate texture—because we believe digital applications should feel like natural extensions of tactile objects.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond'] text-4xl mb-8 tracking-tight">
              The Process
            </h2>
            <div className="font-['Inter'] text-base leading-relaxed opacity-80 space-y-6" style={{ maxWidth: '65ch' }}>
              <p>
                <strong className="opacity-100">01 — Research</strong><br />
                We begin with material research and historical context. Understanding the provenance of a space, its neighborhood, and its culinary philosophy informs every decision.
              </p>
              <p>
                <strong className="opacity-100">02 — Concept Development</strong><br />
                Typography, color, and form are explored through physical mockups. We produce hand-drawn sketches, test prints on various substrates, and build material boards.
              </p>
              <p>
                <strong className="opacity-100">03 — Refinement</strong><br />
                Iterations are precise and intentional. We refine until every element feels inevitable—nothing added, nothing removed.
              </p>
              <p>
                <strong className="opacity-100">04 — Production</strong><br />
                We oversee printing, fabrication, and installation. Working with trusted craftspeople ensures the final output matches our exacting standards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond'] text-4xl mb-8 tracking-tight">
              Services
            </h2>
            <div className="font-['Inter'] text-base leading-relaxed opacity-80" style={{ maxWidth: '65ch' }}>
              <ul className="space-y-3">
                <li>Visual identity systems</li>
                <li>Logotype & custom letterforms</li>
                <li>Menu design & print production</li>
                <li>Environmental graphics & signage</li>
                <li>Packaging & labels</li>
                <li>Brand guidelines</li>
              </ul>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
