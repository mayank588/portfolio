import Masonry from 'react-responsive-masonry';
import { ProjectCard } from '../components/ProjectCard';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Noma Redux',
    category: 'Restaurant Identity',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    aspectRatio: '3/4' as const,
  },
  {
    id: 2,
    title: 'Flour & Stone',
    category: 'Bakery Branding',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    aspectRatio: '16/9' as const,
  },
  {
    id: 3,
    title: 'Cave Naturelle',
    category: 'Wine Shop',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    aspectRatio: '1/1' as const,
  },
  {
    id: 4,
    title: 'The Ledbury',
    category: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    aspectRatio: '3/4' as const,
  },
  {
    id: 5,
    title: 'Sourdough Library',
    category: 'Concept Café',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80',
    aspectRatio: '16/9' as const,
  },
  {
    id: 6,
    title: 'Petit Jardin',
    category: 'Bistro',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
    aspectRatio: '1/1' as const,
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen px-8 md:px-32 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-24"
      >
        <h1 className="font-['Cormorant_Garamond'] text-7xl md:text-8xl tracking-tight mb-4">
          Selected Work
        </h1>
        <p className="font-['Inter'] text-sm opacity-50 max-w-md">
          Crafting visual identities for hospitality spaces that value restraint, materiality, and enduring elegance.
        </p>
      </motion.div>

      <Masonry columnsCount={2} gutter="48px" className="md:!gap-x-24">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Masonry>
    </div>
  );
}
