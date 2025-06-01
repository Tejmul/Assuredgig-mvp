'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../layout/Navbar';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/40"></div>
      
      {/* Content */}
      <div className="relative">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8"
            >
              <Sparkles className="w-8 h-8 text-indigo-400" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Find Your Next
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"> Freelance Opportunity</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Connect with top clients and freelancers in a secure, premium environment. 
              Your success is our priority.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/gigs"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center"
              >
                Browse Gigs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contracts"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
              >
                View Contracts
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 