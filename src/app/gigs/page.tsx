'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MainLayout from '@/components/layout/MainLayout';
import { Gig3DCard } from '@/components/gigs/Gig3DCard';

const categories = [
  'All Categories',
  'Web Development',
  'Mobile Development',
  'Design',
  'Writing',
  'Marketing',
  'Data Science',
  'AI & Machine Learning'
];

const gigs = [
  {
    title: 'Senior React Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    description: 'Looking for an experienced React developer to join our team...',
    tags: ['React', 'TypeScript', 'Node.js'],
    posted: '2 days ago',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
  },
  {
    title: 'UI/UX Designer',
    company: 'DesignStudio',
    location: 'New York',
    type: 'Contract',
    salary: '$60k - $90k',
    description: 'Join our creative team as a UI/UX designer...',
    tags: ['Figma', 'Adobe XD', 'UI Design'],
    posted: '1 day ago',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop'
  },
  {
    title: 'Backend Developer',
    company: 'CloudTech',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Seeking a backend developer with strong Python skills...',
    tags: ['Python', 'Django', 'AWS'],
    posted: '3 days ago',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Mobile App Developer',
    company: 'AppWorks',
    location: 'San Francisco',
    type: 'Contract',
    salary: '$70k - $100k',
    description: 'Looking for a skilled mobile developer...',
    tags: ['React Native', 'iOS', 'Android'],
    posted: '1 week ago',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function GigsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Find Your Next Opportunity
          </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Browse through our curated list of high-quality gigs and find the perfect match for your skills.
          </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search gigs..."
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
      </div>
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px] bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gigs Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {gigs.map((gig, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Gig3DCard
                  title={gig.title}
                  description={gig.description}
                  image={gig.image}
                  company={gig.company}
                  tags={gig.tags}
                  location={gig.location}
                  salary={gig.salary}
                  posted={gig.posted}
                  rating={gig.rating}
                  primaryActionLabel="Apply Now"
                  onPrimaryAction={() => { /* handle apply */ }}
                  secondaryActionLabel="Details"
                  onSecondaryAction={() => { /* handle details */ }}
                />
              </motion.div>
            ))}
          </div>
      </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Load More Gigs
          </Button>
    </div>
      </section>
    </MainLayout>
  );
} 