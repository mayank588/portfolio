import { motion } from 'motion/react';
import { Link } from 'react-router';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  aspectRatio: '3/4' | '16/9' | '1/1';
}

export function ProjectCard({ id, title, category, image, aspectRatio }: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        data-cursor-hover
        className="relative"
      >
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              filter: 'contrast(0.95) saturate(0.9)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            }}
          />
        </div>
        <div className="mt-4 font-['JetBrains_Mono'] text-[9pt] tracking-wide opacity-60">
          {category}
        </div>
        <div className="font-['Cormorant_Garamond'] text-2xl mt-1 tracking-tight">
          {title}
        </div>
      </motion.div>
    </Link>
  );
}
