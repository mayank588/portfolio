import { useParams } from 'react-router';
import { motion } from 'motion/react';

const caseStudies = {
  '1': {
    title: 'Noma Redux',
    category: 'Restaurant Identity',
    hero: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80',
    description: 'A comprehensive visual identity for a Copenhagen-inspired fine dining establishment. Our approach centered on tactile minimalism—handset type, natural paper stocks, and a restrained color palette that echoes Nordic sensibility.',
    process: [
      {
        title: 'Research & Strategy',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
        text: 'We began with material exploration, sourcing uncoated papers and studying historical restaurant ephemera from the 1960s modernist movement.',
      },
      {
        title: 'Typography System',
        image: 'https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=800&q=80',
        text: 'Custom lettering developed for the logotype, paired with Suisse Works for menu typesetting—chosen for its utilitarian clarity.',
      },
      {
        title: 'Environmental Application',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
        text: 'Signage fabricated in brushed brass with a light patina. Interior typography hand-painted on raw plaster walls.',
      },
    ],
    details: [
      'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    ],
  },
};

export function CaseStudy() {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="px-8 md:px-32 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-['JetBrains_Mono'] text-[9pt] tracking-wide opacity-60 mb-4">
            {study.category}
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-7xl md:text-9xl tracking-tight mb-12">
            {study.title}
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-[70vh] mb-24"
      >
        <img
          src={study.hero}
          alt={study.title}
          className="w-full h-full object-cover"
          style={{
            filter: 'contrast(0.95) saturate(0.9)',
            boxShadow: '0 16px 64px rgba(0, 0, 0, 0.12)',
          }}
        />
      </motion.div>

      <div className="px-8 md:px-32 pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="font-['Inter'] text-lg leading-relaxed mb-32" style={{ maxWidth: '65ch' }}>
            {study.description}
          </p>

          <div className="space-y-32">
            {study.process.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-4xl mb-4 tracking-tight">
                      {section.title}
                    </h3>
                    <p className="font-['Inter'] text-sm leading-relaxed opacity-70">
                      {section.text}
                    </p>
                  </div>
                  <div
                    className="relative"
                    style={{
                      transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 1.5}deg)`,
                    }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full object-cover"
                      style={{
                        aspectRatio: '4/5',
                        filter: 'contrast(0.95) saturate(0.9)',
                        boxShadow: '0 12px 48px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.details.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Detail ${i + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full object-cover"
                style={{
                  aspectRatio: '1/1',
                  filter: 'contrast(0.95) saturate(0.9)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
