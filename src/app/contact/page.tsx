"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  HelpCircle, 
  Send, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

// Sample testimonial data - would come from API in real implementation
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UI/UX Designer at Freelancer",
    avatar: "https://placehold.co/60x60",
    content: "AssuredGig has completely transformed how I work with clients. The milestone system ensures I get paid on time, and the built-in communication tools keep everything organized in one place.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Full Stack Developer",
    avatar: "https://placehold.co/60x60",
    content: "As a developer, I've tried many platforms, but AssuredGig offers the best balance of client quality and platform fees. The dispute resolution system has saved me multiple times.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Content Writer",
    avatar: "https://placehold.co/60x60",
    content: "I love how AssuredGig makes it easy to showcase my portfolio. The interface is intuitive, and I've gotten more high-quality leads here than on any other platform I've tried.",
    rating: 4
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "Marketing Consultant",
    avatar: "https://placehold.co/60x60",
    content: "The automated invoicing and payment system is a game-changer. I spend less time on admin and more time delivering results for my clients. Highly recommended!",
    rating: 5
  }
];

// FAQ data - would also come from API
const faqs = [
  {
    question: "How does payment protection work?",
    answer: "AssuredGig uses a milestone-based payment system. Clients fund the milestone before work begins, and the money is held in escrow. Once you complete the work and the client approves it, the funds are released to you. This protects both parties and ensures fair payment for completed work."
  },
  {
    question: "What fees does AssuredGig charge?",
    answer: "We charge a 10% service fee for freelancers and a 5% fee for clients. This covers platform maintenance, payment processing, dispute resolution, and ongoing platform improvements to help you find more work."
  },
  {
    question: "How do I withdraw my earnings?",
    answer: "You can withdraw your earnings via bank transfer, PayPal, or Stripe. Withdrawals are processed within 1-3 business days, depending on your payment method and location."
  },
  {
    question: "What happens if there's a dispute with a client?",
    answer: "If you and your client disagree about completed work, either party can open a dispute. Our support team will review the contract, communications, and submitted work to help reach a fair resolution."
  },
  {
    question: "Can I work with clients outside of AssuredGig?",
    answer: "Once you&apos;ve established a relationship with a client through our platform, you&apos;re welcome to continue working with them outside of AssuredGig after the initial project is complete. However, we encourage using our platform for the security and convenience it provides."
  }
];

// Support categories
const supportCategories = [
  {
    title: "Account Issues",
    icon: <HelpCircle />,
    description: "Help with login, profile setup, and account security"
  },
  {
    title: "Payment Problems",
    icon: <HelpCircle />,
    description: "Assistance with payments, withdrawals, and billing"
  },
  {
    title: "Project Support",
    icon: <HelpCircle />,
    description: "Help with contracts, client issues, and dispute resolution"
  },
  {
    title: "Platform Questions",
    icon: <HelpCircle />,
    description: "Learn how to use features and maximize opportunities"
  }
];

export default function ContactPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState<'contact' | 'faq' | 'support'>('contact');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // For testimonial carousel
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // For form handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would connect to your API to submit the form
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-[#00e6ff]/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00e6ff] to-[#5efcff] text-transparent bg-clip-text"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            We&apos;re here to help! Reach out with questions, feedback, or support requests.
          </motion.p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'contact' 
                  ? 'bg-[#00e6ff] text-black' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'faq' 
                  ? 'bg-[#00e6ff] text-black' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'support' 
                  ? 'bg-[#00e6ff] text-black' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Support
            </button>
          </div>
        </div>

        {/* Contact Tab Content */}
        {activeTab === 'contact' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-[#00e6ff] focus:border-[#00e6ff] text-white"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-[#00e6ff] focus:border-[#00e6ff] text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-[#00e6ff] focus:border-[#00e6ff] text-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing Issue">Billing Issue</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Report a Bug">Report a Bug</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-[#00e6ff] focus:border-[#00e6ff] text-white"
                    placeholder="How can we help you today?"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center p-3 bg-gradient-to-r from-[#00e6ff] to-[#5efcff] text-black font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#00e6ff]/20 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-[#00e6ff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <a href="mailto:support@assuredgig.com" className="text-[#00e6ff] hover:underline">
                        support@assuredgig.com
                      </a>
                      <p className="text-gray-400 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#00e6ff]/20 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-[#00e6ff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Phone</h3>
                      <a href="tel:+1234567890" className="text-[#00e6ff] hover:underline">
                        +1 (234) 567-890
                      </a>
                      <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#00e6ff]/20 p-3 rounded-lg mr-4">
                      <MessageSquare className="h-6 w-6 text-[#00e6ff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Live Chat</h3>
                      <p className="text-gray-300">Available on our platform</p>
                      <p className="text-gray-400 text-sm mt-1">For premium users 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                <p className="text-gray-300 mb-4">Stay updated with our latest features and news</p>
                
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-[#00e6ff] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-[#5efcff] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-pink-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-[#001E29] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Tab Content */}
        {activeTab === 'faq' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">
                Find answers to common questions about AssuredGig
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden"
                >
                  <button 
                    className="flex items-center justify-between w-full p-6 text-left font-medium"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="p-6 pt-0 text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
              <p className="text-gray-300 mb-6">Our support team is ready to help you</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('contact')}
                className="px-8 py-3 bg-gradient-to-r from-[#00e6ff] to-[#5efcff] rounded-lg text-black font-medium"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Support Tab Content */}
        {activeTab === 'support' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Support Center</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get help with any aspect of using AssuredGig. Our support team is here to ensure your success.
              </p>
            </div>
            
            {/* Support Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-[#00e6ff]/10 transition-all cursor-pointer"
                >
                  <div className="bg-[#00e6ff]/20 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Support Resources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Knowledge Base</h3>
                <p className="text-gray-300 mb-6">
                  Browse our extensive collection of guides and tutorials to learn how to use AssuredGig effectively.
                </p>
                <div className="space-y-4">
                  <a href="#" className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <h4 className="font-medium">Getting Started Guide</h4>
                    <p className="text-gray-400 text-sm">Learn the basics of setting up your profile and finding work</p>
                  </a>
                  <a href="#" className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <h4 className="font-medium">Payment and Billing</h4>
                    <p className="text-gray-400 text-sm">Everything you need to know about payments and invoicing</p>
                  </a>
                  <a href="#" className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <h4 className="font-medium">Client Communication</h4>
                    <p className="text-gray-400 text-sm">Best practices for communicating with clients</p>
                  </a>
                </div>
                <button className="mt-6 text-[#00e6ff] hover:text-[#5efcff] flex items-center">
                  View all articles <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Video Tutorials</h3>
                <p className="text-gray-300 mb-6">
                  Watch step-by-step video guides on using key features of the platform.
                </p>
                <div className="space-y-4">
                  <a href="#" className="block relative">
                    <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                      <Image src="https://placehold.co/640x360" alt="Video tutorial" width={640} height={360} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#00e6ff]/80 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="mt-2 font-medium">How to Create the Perfect Portfolio</h4>
                  </a>
                  <a href="#" className="mt-4 text-[#00e6ff] hover:text-[#5efcff] flex items-center">
                    Browse video library <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Thousands of freelancers and clients have found success using AssuredGig
            </p>
          </div>
          
          <div className="relative">
            <div className="mx-auto max-w-4xl bg-gray-800 rounded-xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image 
                      src={testimonials[activeTestimonial].avatar} 
                      alt={testimonials[activeTestimonial].name} 
                      width={80} height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-center">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-[#00e6ff] text-sm text-center">{testimonials[activeTestimonial].role}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[activeTestimonial].rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <blockquote className="text-lg italic text-gray-300 mb-6">
                    &quot;{testimonials[activeTestimonial].content}&quot;
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-[#00e6ff] transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-[#00e6ff] transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeTestimonial ? 'bg-[#00e6ff]' : 'bg-gray-600'
                }`}
                onClick={() => setActiveTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-[#001E29]/30 to-[#00e6ff]/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of freelancers and clients already using AssuredGig to simplify their working relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#00e6ff] to-[#5efcff] rounded-lg text-black font-medium shadow-lg"
            >
              Sign Up Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-600 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ChevronDown component (custom, as provided)
const ChevronDown = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
);