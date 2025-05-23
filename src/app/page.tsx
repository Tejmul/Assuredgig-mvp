'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown, Bell, User, Briefcase, Calendar, ClipboardList, BarChart2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const howItWorksSteps = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary mb-2" />, 
    title: 'Post a Gig',
    desc: 'Clients post a gig (e.g., logo design) in seconds.'
  },
  {
    icon: <Bell className="w-8 h-8 text-primary mb-2" />,
    title: 'Instant Notifications',
    desc: 'Freelancers with matching skills get notified instantly.'
  },
  {
    icon: <User className="w-8 h-8 text-primary mb-2" />,
    title: 'Submit Portfolios',
    desc: 'Freelancers submit their portfolios to apply.'
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary mb-2" />,
    title: 'Client Picks a Freelancer',
    desc: 'Clients review applicants and select the best fit.'
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary mb-2" />,
    title: 'Schedule a Meet',
    desc: 'Schedule a video call and brainstorm with a whiteboard.'
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary mb-2" />,
    title: 'Agree on Timeline',
    desc: 'Both parties agree on milestones and deadlines.'
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary mb-2" />,
    title: 'Real-Time Dashboard',
    desc: 'Freelancer updates progress daily in a shared dashboard.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary mb-2" />,
    title: 'Escrow Payment & Delivery',
    desc: 'Client pays via escrow. Files are delivered securely.'
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/grid-pattern.svg')] bg-cover bg-center flex flex-col items-center relative px-2 sm:px-4 py-8 sm:py-16 max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full min-h-[70vh] relative z-10">
        {/* Glow/gradient background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[600px] h-[300px] bg-cyan-400/10 blur-3xl rounded-full" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-center leading-tight mb-6 relative z-10"
        >
          <span className="block text-white drop-shadow-lg">The Future of</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
            Freelancing
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl text-center mb-10 z-10"
        >
          Connect with top talent and opportunities in our premium freelance marketplace.<br className="hidden sm:block" /> Be a client, freelancer, or both – the choice is yours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center z-10"
        >
          <Link
            href="/post-job"
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 text-black shadow-lg hover:from-cyan-300 hover:to-blue-300 transition-all duration-200 flex items-center justify-center text-lg"
          >
            Post a Job <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/find-work"
            className="px-8 py-4 rounded-xl font-semibold bg-dark-surface text-cyan-300 border border-cyan-400 shadow-lg hover:bg-cyan-950/30 hover:text-cyan-100 transition-all duration-200 flex items-center justify-center text-lg"
          >
            Find Work
          </Link>
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section className="w-full max-w-5xl mx-auto mt-12 mb-8 px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/60 rounded-xl p-6 flex flex-col items-center text-center shadow-lg border border-gray-800"
            >
              {step.icon}
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </div>
    </div>
  );
}