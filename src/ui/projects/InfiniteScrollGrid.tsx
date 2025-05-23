'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Clock, MapPin } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  duration: string;
  location: string;
  skills: string[];
}

// Sample data - replace with your actual data source
const generateProjects = (start: number, count: number): Project[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${start + i}`,
    title: `Project ${start + i}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    budget: Math.floor(Math.random() * 5000) + 1000,
    duration: `${Math.floor(Math.random() * 6) + 1} months`,
    location: ['Remote', 'On-site', 'Hybrid'][Math.floor(Math.random() * 3)],
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'].slice(0, Math.floor(Math.random() * 4) + 1),
  }));
};

export const InfiniteScrollGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProjectRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newProjects = generateProjects((page - 1) * 6, 6);
      setProjects(prev => [...prev, ...newProjects]);
      setHasMore(page < 5); // Limit to 5 pages for demo
      setLoading(false);
    };

    loadProjects();
  }, [page]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={index === projects.length - 1 ? lastProjectRef : null}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-surface rounded-xl p-6 hover:shadow-hover transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-dark-card rounded-lg text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-accent font-semibold">${project.budget}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-dark-card rounded-full text-sm text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {loading && (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}; 