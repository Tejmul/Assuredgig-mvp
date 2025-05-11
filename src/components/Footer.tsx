'use client';

export default function Footer() {
  return (
    <footer className="glass-card border-t-2 border-primary shadow-glass mt-16 py-6 px-4 text-center">
      <p className="text-lg font-semibold tracking-wide text-primary drop-shadow-[0_0_8px_#00e6ff]">
        © {new Date().getFullYear()} AssuredGig. All rights reserved.
      </p>
    </footer>
  );
}