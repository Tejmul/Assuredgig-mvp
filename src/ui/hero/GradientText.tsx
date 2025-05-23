'use client';

import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
}

export const GradientText = ({ text, className = '' }: GradientTextProps) => {
  return (
    <motion.h1
      className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h1>
  );
}; 