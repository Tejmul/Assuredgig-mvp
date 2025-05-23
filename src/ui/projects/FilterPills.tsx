'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Filter {
  id: string;
  label: string;
  category: 'type' | 'location' | 'duration' | 'budget';
}

interface FilterPillsProps {
  filters: Filter[];
  onFilterChange: (selectedFilters: string[]) => void;
}

export const FilterPills = ({ filters, onFilterChange }: FilterPillsProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterClick = (filterId: string) => {
    setSelectedFilters(prev => {
      const newFilters = prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId];
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(filter => (
        <motion.button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedFilters.includes(filter.id)
              ? 'bg-primary text-black'
              : 'bg-dark-card text-gray-400 hover:bg-dark-surface'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
}; 