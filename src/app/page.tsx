'use client';

import React from 'react';
import { ArrowRight, Briefcase, User, Workflow, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MainLayout from '@/components/layout/MainLayout';
import { useRouter } from 'next/navigation';
import ThreeDMarqueeDemo from '@/components/ui/3d-marquee-demo';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
              The Future of
              <span className="block w-fit mx-auto bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent animate-gradient-x">
                Freelancing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A modern platform for clients and freelancers to connect, collaborate, and succeed.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Button 
                size="lg"
                className="bg-accent text-white hover:bg-accent-dark"
                onClick={() => router.push('/auth/signup')}
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-dark-border text-white hover:bg-accent/5 hover:text-accent"
                onClick={() => router.push('/auth/signin')}
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Marquee Section (crazy, modern, visually impressive) */}
      <section className="py-12 px-6">
        <ThreeDMarqueeDemo />
      </section>

      {/* Dashboard Preview Section (angled, minimal, animated) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl border border-dark-border bg-dark-surface p-0 overflow-hidden transform -rotate-6 scale-95 shadow-none">
              <Image
                src="https://assets.aceternity.com/macbook-scroll.png"
                alt="Dashboard Preview"
                width={480}
                height={300}
                className="w-[480px] h-auto object-cover"
                style={{ filter: 'brightness(0.95)' }}
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Modern, Intuitive Dashboards</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Manage your freelance projects, applications, and workflow with a dashboard experience inspired by the best in the industry. Everything is clear, fast, and beautiful.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• See all your jobs, applications, and project status at a glance</li>
              <li>• Switch between client and freelancer views instantly</li>
              <li>• Minimal, distraction-free interface</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why AssuredGig? Animated Tabs Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-accent-dark bg-clip-text text-transparent text-center">
            Why AssuredGig?
          </h2>
          <Tabs defaultValue="secure" className="w-full">
            <TabsList className="flex justify-center gap-4 bg-transparent border-b border-dark-border mb-8">
              <TabsTrigger value="secure" className="text-lg font-medium px-6 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent">Secure</TabsTrigger>
              <TabsTrigger value="fast" className="text-lg font-medium px-6 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent">Fast</TabsTrigger>
              <TabsTrigger value="transparent" className="text-lg font-medium px-6 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent">Transparent</TabsTrigger>
              <TabsTrigger value="modern" className="text-lg font-medium px-6 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent">Modern</TabsTrigger>
            </TabsList>
            <TabsContent value="secure">
              <div className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
                <span className="font-semibold text-accent">Secure</span> escrow payments, verified users, and privacy-first design keep your work and money safe.
              </div>
            </TabsContent>
            <TabsContent value="fast">
              <div className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
                <span className="font-semibold text-accent">Fast</span> onboarding, instant job matching, and real-time project updates for a seamless experience.
              </div>
            </TabsContent>
            <TabsContent value="transparent">
              <div className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
                <span className="font-semibold text-accent">Transparent</span> workflows, clear job status, and open communication at every step.
              </div>
            </TabsContent>
            <TabsContent value="modern">
              <div className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
                <span className="font-semibold text-accent">Modern</span> UI, mobile-friendly, and built with the latest tech for the best user experience.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features/How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent-dark bg-clip-text text-transparent">
              How AssuredGig Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, transparent, and built for the future of work.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="rounded-2xl border border-dark-border bg-dark-surface p-8 flex flex-col items-center text-center">
              <Briefcase className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Post a Job</h3>
              <p className="text-muted-foreground">Clients create jobs with title, description, budget, and deadline.</p>
            </Card>
            <Card className="rounded-2xl border border-dark-border bg-dark-surface p-8 flex flex-col items-center text-center">
              <User className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Apply to Jobs</h3>
              <p className="text-muted-foreground">Freelancers browse jobs and submit proposals with delivery date.</p>
            </Card>
            <Card className="rounded-2xl border border-dark-border bg-dark-surface p-8 flex flex-col items-center text-center">
              <Workflow className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Hire & Collaborate</h3>
              <p className="text-muted-foreground">Clients review applications, hire, and manage projects in real time.</p>
            </Card>
            <Card className="rounded-2xl border border-dark-border bg-dark-surface p-8 flex flex-col items-center text-center">
              <CheckCircle className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Track Progress</h3>
              <p className="text-muted-foreground">Both roles track project status from Open to Done, all in one place.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Status Lifecycle Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Job Status Lifecycle</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground text-lg">
              <span className="px-4 py-2 rounded-full border border-dark-border bg-dark-surface">Open</span>
              <span>→</span>
              <span className="px-4 py-2 rounded-full border border-dark-border bg-dark-surface">Applied</span>
              <span>→</span>
              <span className="px-4 py-2 rounded-full border border-dark-border bg-dark-surface">Hired</span>
              <span>→</span>
              <span className="px-4 py-2 rounded-full border border-dark-border bg-dark-surface">In Progress</span>
              <span>→</span>
              <span className="px-4 py-2 rounded-full border border-dark-border bg-dark-surface">Completed</span>
              <span>→</span>
              <span className="px-4 py-2 rounded-full border border-dark-border bg-dark-surface">Done</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role-based Flows Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="rounded-2xl border border-dark-border bg-dark-surface p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">Client Workflow</h3>
            <ul className="space-y-4 text-muted-foreground text-lg">
              <li>🔹 Post a Job</li>
              <li>🔹 View Applications</li>
              <li>🔹 Hire a Freelancer</li>
              <li>🔹 Manage Project</li>
            </ul>
          </Card>
          <Card className="rounded-2xl border border-dark-border bg-dark-surface p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">Freelancer Workflow</h3>
            <ul className="space-y-4 text-muted-foreground text-lg">
              <li>🔹 View Jobs</li>
              <li>🔹 Apply to Job</li>
              <li>🔹 Work on Project</li>
              <li>🔹 Mark as Completed</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-accent-dark bg-clip-text text-transparent">
            Ready to experience the future of freelancing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join AssuredGig and start your journey as a client or freelancer today.
          </p>
          <Button 
            size="lg"
            className="bg-accent text-white hover:bg-accent-dark"
            onClick={() => router.push('/auth/signup')}
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}