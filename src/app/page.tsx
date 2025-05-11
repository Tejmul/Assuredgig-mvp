'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import GigCard from '@/components/GigCard';
import Notification from '@/components/Notification';
import PortfolioCard from '@/components/PortfolioCard';
import ProgressChart from '@/components/ProgressChart';
import EscrowFlow from '@/components/EscrowFlow';
import WhiteboardMock from '@/components/WhiteboardMock';
import { mockGigs, mockProjects, mockFreelancers } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/grid-pattern.svg')] bg-center flex flex-col justify-center items-center relative">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 text-center w-full max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          The Future of
          <span className="block text-primary">Freelancing</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-6 mb-10">
          Connect with top talent and opportunities in our premium freelance marketplace. Be a client, freelancer, or both - the choice is yours.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link 
            href="/post-job" 
            className="bg-primary text-black px-8 py-3 rounded-md flex items-center justify-center hover:bg-primary-light transition-colors font-semibold shadow-md"
          >
            Post a Job <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            href="/find-work" 
            className="bg-black text-white border border-gray-700 px-8 py-3 rounded-md hover:bg-gray-900 transition-colors font-semibold shadow-md"
          >
            Find Work
          </Link>
        </div>
      </div>
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <button className="text-gray-400 hover:text-white transition-colors animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}