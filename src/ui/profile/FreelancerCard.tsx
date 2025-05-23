'use client';

import { SpotlightCard } from './SpotlightCard';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FreelancerCardProps {
  name: string;
  title: string;
  image: string;
  rating: number;
  skills: string[];
  hourlyRate: number;
  isOnline?: boolean;
}

export const FreelancerCard = ({
  name,
  title,
  image,
  rating,
  skills,
  hourlyRate,
  isOnline = false,
}: FreelancerCardProps) => {
  return (
    <SpotlightCard className="w-full max-w-sm">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          {isOnline && (
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-success rounded-full border-2 border-dark-surface" />
          )}
        </div>

        <motion.h3 
          className="text-xl font-bold text-primary mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {name}
        </motion.h3>

        <motion.p 
          className="text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.p>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-warning' : 'text-gray-600'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="px-3 py-1 bg-dark-card rounded-full text-sm text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="text-xl font-bold text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ${hourlyRate}/hr
        </motion.div>
      </div>
    </SpotlightCard>
  );
}; 