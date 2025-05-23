'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
      <div className="w-full max-w-5xl px-6">
        <div className="flex items-center justify-between rounded-2xl bg-dark-surface shadow-xl border-2 border-cyan-400 py-4 px-8 pointer-events-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center font-extrabold text-2xl select-none text-cyan-400">
            AssuredGig
          </Link>
          {/* Spacer */}
          <div className="flex-1" />
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-dark-surface font-semibold transition-colors">Login</button>
            <button className="px-4 py-2 rounded-lg bg-cyan-400 text-dark-surface font-semibold hover:bg-cyan-300 transition-colors">Signup</button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 