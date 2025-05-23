'use client';

import { FreelancerCard } from './FreelancerCard';
import { motion } from 'framer-motion';

// Sample data - replace with your actual data source
const sampleFreelancers = [
  {
    name: 'Sarah Johnson',
    title: 'Senior UI/UX Designer',
    image: '/images/freelancer1.jpg',
    rating: 4.8,
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
    hourlyRate: 75,
    isOnline: true,
  },
  {
    name: 'Michael Chen',
    title: 'Full Stack Developer',
    image: '/images/freelancer2.jpg',
    rating: 4.9,
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    hourlyRate: 85,
    isOnline: false,
  },
  {
    name: 'Emma Wilson',
    title: 'Content Writer',
    image: '/images/freelancer3.jpg',
    rating: 4.7,
    skills: ['Copywriting', 'SEO', 'Content Strategy'],
    hourlyRate: 45,
    isOnline: true,
  },
];

export const FreelancerGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">Top Freelancers</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover talented professionals ready to bring your projects to life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleFreelancers.map((freelancer, index) => (
          <motion.div
            key={freelancer.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FreelancerCard {...freelancer} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 