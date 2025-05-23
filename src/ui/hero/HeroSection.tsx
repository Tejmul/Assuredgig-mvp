'use client';

import { AnimatedGridBackground } from './AnimatedGridBackground';
import { GradientText } from './GradientText';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGridBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          <GradientText 
            text="Connect with Top Freelancers"
            className="mb-4"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Find the perfect freelancer for your project or showcase your skills to potential clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <button className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Find Work
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
              Hire Talent
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 