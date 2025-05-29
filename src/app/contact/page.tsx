"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Headphones } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from '@/components/layout/MainLayout';

const contactMethods = [
  {
    title: 'Email Us',
    description: 'Get in touch with our support team',
    icon: <Mail className="w-6 h-6" />,
    value: 'support@assuredgig.com'
  },
  {
    title: 'Call Us',
    description: 'Speak with our team directly',
    icon: <Phone className="w-6 h-6" />,
    value: '+1 (555) 123-4567'
  },
  {
    title: 'Visit Us',
    description: 'Our office location',
    icon: <MapPin className="w-6 h-6" />,
    value: '123 Tech Street, San Francisco, CA 94107'
  }
];

const faqs = [
  {
    question: 'How do I get started as a freelancer?',
    answer: 'Sign up for an account, complete your profile, and start browsing available gigs. You can also set up your portfolio to attract potential clients.'
  },
  {
    question: 'How does the payment system work?',
    answer: 'We use an escrow system where client payments are held securely until the work is completed and approved. This ensures both parties are protected.'
  },
  {
    question: 'What if I have a dispute with a client?',
    answer: 'Our support team is available 24/7 to help resolve any disputes. We review all cases carefully and work to find a fair solution for both parties.'
  }
];

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Have questions? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                  <CardContent className="p-6">
                    <div className="text-white mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-400 mb-2">{method.description}</p>
                    <p className="text-white">{method.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
                <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input
                        placeholder="Enter your first name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        placeholder="Enter your last name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      placeholder="Enter your email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="How can we help you?"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-gray-200">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MessageSquare className="w-6 h-6 text-white mr-4 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                        <p className="text-gray-400">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Headphones className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Need Immediate Support?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Start Live Chat
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}