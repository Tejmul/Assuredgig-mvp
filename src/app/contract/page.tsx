"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, FileText, Shield, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from '@/components/layout/MainLayout';

const contractTypes = [
  {
    title: 'Fixed Price',
    description: 'Perfect for projects with well-defined scope and deliverables',
    features: [
      'Clear project scope',
      'Fixed budget',
      'Defined milestones',
      'Secure escrow payments'
    ],
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: 'Hourly Rate',
    description: 'Ideal for ongoing work or projects with evolving requirements',
    features: [
      'Flexible hours',
      'Weekly payments',
      'Time tracking',
      'Progress monitoring'
    ],
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: 'Retainer',
    description: 'Best for long-term partnerships and ongoing support',
    features: [
      'Monthly commitment',
      'Priority support',
      'Regular meetings',
      'Flexible scope'
    ],
    icon: <Shield className="w-6 h-6" />
  }
];

export default function ContractPage() {
  const [selectedType, setSelectedType] = useState('Fixed Price');

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Secure Your Work with Smart Contracts
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Choose the perfect contract type for your project and ensure a smooth collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer ${
                    selectedType === type.title ? 'ring-2 ring-white/20' : ''
                  }`}
                  onClick={() => setSelectedType(type.title)}
                >
                  <CardContent className="p-6">
                    <div className="text-white mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-400 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Form Section */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Create Your Contract</h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Title
                      </label>
                      <Input
                        placeholder="Enter project title"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Description
                      </label>
                      <Textarea
                        placeholder="Describe your project in detail"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[120px]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget
                        </label>
                        <Input
                          placeholder="Enter budget"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Timeline
                        </label>
                        <Input
                          placeholder="Enter timeline"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center text-gray-400">
                      <Shield className="w-5 h-5 mr-2" />
                      <span className="text-sm">Your contract will be protected by our escrow system</span>
                    </div>
                    <Button className="bg-white text-black hover:bg-gray-200">
                      Create Contract <Zap className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why Use Our Contracts?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We&apos;ve built the most secure and efficient contract system for freelancers and clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Secure Payments',
                description: 'All payments are held in escrow until work is completed and approved.',
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: 'Clear Terms',
                description: 'Well-defined scope, deliverables, and timelines for both parties.',
                icon: <FileText className="w-6 h-6" />
              },
              {
                title: 'Fast Processing',
                description: 'Contracts are processed and approved within 24 hours.',
                icon: <Zap className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="text-white mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}