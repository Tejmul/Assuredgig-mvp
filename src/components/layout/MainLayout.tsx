'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Background pattern URL (properly encoded)
const GRID_PATTERN = "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23374151' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              AssuredGig
            </div>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex items-center space-x-8">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Gigs', href: '/gigs' },
                  { name: 'Contract', href: '/contract' },
                  { name: 'Contact', href: '/contact' }
                ].map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-white",
                        "text-gray-400"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Sign In
              </Button>
              <Button 
                variant="default" 
                className="bg-white text-black hover:bg-gray-200"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A]"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${GRID_PATTERN})`, opacity: 0.1 }}></div>
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                AssuredGig
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The modern platform for freelancers and clients to connect, collaborate, and create amazing projects together.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Github className="w-5 h-5" />, url: '#' },
                  { icon: <Linkedin className="w-5 h-5" />, url: '#' },
                  { icon: <Twitter className="w-5 h-5" />, url: '#' },
                  { icon: <Mail className="w-5 h-5" />, url: '#' }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="bg-white/5 hover:bg-white/10 text-white"
                    asChild
                  >
                    <a href={social.url}>{social.icon}</a>
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'How it Works', 'Success Stories'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            © 2024 AssuredGig. All rights reserved. Built with Next.js & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
} 