'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('/');

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/gigs', label: 'Gigs' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contract', label: 'Contract' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="backdrop-blur-lg bg-glass border-b-2 border-primary shadow-glass rounded-b-2xl px-8 py-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-primary"
        >
          AssuredGig
        </motion.h1>
        <ul className="flex space-x-8 text-lg font-medium">
          {navItems.map(({ href, label }) => (
            <motion.li 
              key={href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={href}
                onClick={() => setActiveTab(href)}
                className={`relative transition-colors duration-300 ${
                  activeTab === href ? 'text-accent' : 'text-primary hover:text-accent'
                }`}
              >
                {label}
                {activeTab === href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}