'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import Footer from '../../components/Footer';
import { Menu } from 'lucide-react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      {/* Floating Hamburger */}
      <button
        className="fixed top-8 right-8 z-50 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors w-10 h-10"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="w-7 h-7" />
      </button>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-grow pt-32 transition-all duration-300">{children}</main>
      <Footer />
    </>
  );
} 