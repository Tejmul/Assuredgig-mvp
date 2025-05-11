'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="backdrop-blur-lg bg-glass border-b-2 border-primary shadow-glass rounded-b-2xl px-8 py-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary drop-shadow-[0_0_8px_#00e6ff]">AssuredGig</h1>
        <ul className="flex space-x-8 text-lg font-medium">
          {[
            { href: '/', label: 'Home' },
            { href: '/gigs', label: 'Gigs' },
            { href: '/portfolio', label: 'Portfolio' },
            { href: '/dashboard', label: 'Dashboard' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative hover:text-accent transition-colors after:content-[''] after:block after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}