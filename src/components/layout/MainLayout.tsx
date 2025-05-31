'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-surface text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-dark-border",
        isScrolled ? "bg-dark-surface/90 backdrop-blur-md" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-accent-dark bg-clip-text text-transparent select-none">
            AssuredGig
          </div>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex items-center space-x-8">
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <NavigationMenuLink
                      className={cn(
                        "text-sm font-medium transition-colors px-2 py-1 rounded-md",
                        "text-gray-400 hover:text-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      )}
                    >
                      Product
                    </NavigationMenuLink>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-2 w-[480px] bg-dark-surface border border-dark-border rounded-xl p-6 grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">Core Features</div>
                      <div className="mb-4">
                        <div className="font-semibold text-white">Plan</div>
                        <div className="text-sm text-muted-foreground">Set the product direction with projects and initiatives</div>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Build</div>
                        <div className="text-sm text-muted-foreground">Make progress with issue tracking and cycle planning</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">More</div>
                      <div className="mb-4">
                        <div className="font-semibold text-white">Customer requests</div>
                        <div className="text-sm text-muted-foreground">Manage user feedback</div>
                      </div>
                      <div className="mb-4">
                        <div className="font-semibold text-white">Integrations</div>
                        <div className="text-sm text-muted-foreground">Collaborate across tools</div>
                      </div>
                      <div className="mb-4">
                        <div className="font-semibold text-white">Insights</div>
                        <div className="text-sm text-muted-foreground">Realtime analytics</div>
                      </div>
                      <div className="mb-4">
                        <div className="font-semibold text-white">Mobile app</div>
                        <div className="text-sm text-muted-foreground">Linear in your pocket</div>
                      </div>
                      <div className="mb-4">
                        <div className="font-semibold text-white">Linear Asks</div>
                        <div className="text-sm text-muted-foreground">Workplace requests</div>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Linear for Agents</div>
                        <div className="text-sm text-muted-foreground">Collaborate with AI teammates</div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
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
                      "text-sm font-medium transition-colors px-2 py-1 rounded-md",
                      "text-gray-400 hover:text-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      // Optionally: highlight active link
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
              className="border-dark-border text-white hover:bg-accent/10 hover:text-accent"
              onClick={() => router.push('/auth/signin')}
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              className="bg-accent text-white hover:bg-accent-dark shadow-accent"
              onClick={() => router.push('/auth/signup')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-6">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-surface border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AssuredGig</h3>
            <p className="text-gray-400">Connecting talented freelancers with amazing opportunities.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent">How it Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-dark-border text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AssuredGig. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 