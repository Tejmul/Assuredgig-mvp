'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, FileText, MessageSquare, X, Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const navLinks = [
  { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
  { name: 'Profile', href: '/portfolio', icon: <User className="w-5 h-5" /> },
  { name: 'Gigs', href: '/gigs', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'Contract', href: '/contract', icon: <FileText className="w-5 h-5" /> },
  { name: 'Messages', href: '/messages', icon: <MessageSquare className="w-5 h-5" /> },
  { name: 'Contact Us', href: '/contact', icon: <Mail className="w-5 h-5" /> },
];

export const Sidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-dark-surface shadow-2xl z-50 transition-transform duration-300 rounded-l-2xl border-l border-cyan-900/40
          ${open ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-95 opacity-0'}
        `}
        style={{ boxShadow: open ? '0 0 32px 4px #06e6ff55' : undefined }}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={onClose} aria-label="Close sidebar">
            <X className="w-6 h-6 text-cyan-400 hover:text-cyan-200" />
          </button>
        </div>
        {/* User Info */}
        <div className="flex flex-col items-center py-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-cyan-400 shadow-cyan-400/30 shadow-lg">
            <Image src="/images/avatar.jpg" alt="Sophia" width={64} height={64} className="object-cover" />
          </div>
          <div className="font-semibold text-lg text-white">Sophia</div>
          <div className="text-cyan-400 text-sm">Freelancer</div>
        </div>
        {/* Nav Links */}
        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base transition-colors
                  ${isActive ? 'bg-cyan-900/40 text-cyan-300 shadow-cyan-400/20 shadow' : 'text-gray-300 hover:bg-dark-card hover:text-cyan-200'}`}
              >
                {React.cloneElement(link.icon, { className: `w-5 h-5 ${isActive ? 'text-cyan-400 drop-shadow-[0_0_6px_#06e6ff]' : 'text-gray-400 group-hover:text-cyan-300'}` })}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}; 