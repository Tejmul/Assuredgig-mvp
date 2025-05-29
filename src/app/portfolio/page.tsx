'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink, Download, Star, ArrowRight, Code, Palette, Smartphone, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Send } from 'lucide-react';

// Base64 encoded avatar image (simple gray placeholder)
const AVATAR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxRjI5MzciLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4NSIgcj0iMzUiIGZpbGw9IiM0QjU1NjMiLz48cGF0aCBkPSJNMTAwIDEzNUMxMzMuMTM3IDEzNSAxNjAgMTYxLjg2MyAxNjAgMTk1VjIwMEg0MFYxOTVDNDAgMTYxLjg2MyA2Ni44NjI5IDEzNSAxMDAgMTM1WiIgZmlsbD0iIzRCNTU2MyIvPjwvc3ZnPg==';

// Background pattern URL (properly encoded)
const GRID_PATTERN = "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23374151' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E";

const skills = [
  { name: 'React/Next.js', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'TypeScript', level: 88, category: 'Language' },
  { name: 'UI/UX Design', level: 85, category: 'Design' },
  { name: 'MongoDB', level: 82, category: 'Database' },
  { name: 'AWS', level: 78, category: 'Cloud' }
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization, user management, and subscription billing.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    tech: ['React Native', 'Firebase', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Exceptional work quality and attention to detail. Delivered our project ahead of schedule and exceeded expectations.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCorp',
    content: 'Professional, communicative, and technically excellent. Would definitely work with again.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
  }
];

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Full-stack web applications using modern technologies like React, Next.js, and Node.js',
    price: 'From $2,000'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native and native iOS/Android development',
    price: 'From $3,000'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered design with prototyping, wireframing, and design systems',
    price: 'From $1,500'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'API Development',
    description: 'RESTful APIs, GraphQL, and microservices architecture with proper documentation',
    price: 'From $1,000'
  }
];

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              YourName
            </div>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex items-center space-x-8">
                {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-white",
                        activeSection === item.toLowerCase() ? "text-white" : "text-gray-400"
                      )}
                      onClick={() => scrollToSection(item.toLowerCase())}
                    >
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button 
              variant="default" 
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A]"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${GRID_PATTERN})`, opacity: 0.1 }}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-white to-gray-400 p-1">
              <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center">
                <Avatar className="w-full h-full">
                  <AvatarImage src={AVATAR_DATA_URL} alt="Profile" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              I craft exceptional digital experiences with modern technologies and clean, efficient code.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className="flex items-center text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                Available for new projects
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12"
          >
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => scrollToSection('contact')}
            >
              Let&apos;s Work Together <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center space-x-6"
          >
            {[
              { icon: <Github className="w-6 h-6" />, url: '#' },
              { icon: <Linkedin className="w-6 h-6" />, url: '#' },
              { icon: <Twitter className="w-6 h-6" />, url: '#' },
              { icon: <Mail className="w-6 h-6" />, url: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              With 5+ years of experience in full-stack development, I specialize in creating scalable, user-friendly applications that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Started as a self-taught developer, I&apos;ve worked with startups and established companies to deliver high-quality solutions. 
                I&apos;m passionate about clean code, user experience, and staying updated with the latest technologies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-2">5+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">{skill.name}</span>
                      <span className="text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-white to-gray-400 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions to bring your ideas to life with modern technology and best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all group">
                  <CardHeader>
                    <div className="text-white mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="text-white font-semibold">{service.price}</div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, featuring full-stack applications and creative solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="link" className="text-white hover:text-gray-400 p-0">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button variant="link" className="text-gray-400 hover:text-white p-0">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                  <div className="relative">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="text-white hover:text-gray-400">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What my clients say about working with me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <CardDescription className="text-gray-400 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex items-center">
                      <Avatar className="mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your project to life? Let&apos;s discuss how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-white mr-4" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-400">your.email@example.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-white mr-4" />
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-white mr-4" />
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-gray-400">Your City, Country</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, url: '#' },
                    { icon: <Linkedin className="w-5 h-5" />, url: '#' },
                    { icon: <Twitter className="w-5 h-5" />, url: '#' }
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white/20 focus:outline-none transition-colors text-white placeholder-gray-500"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white/20 focus:outline-none transition-colors text-white placeholder-gray-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white/20 focus:outline-none transition-colors text-white placeholder-gray-500"
                        placeholder="Project Discussion"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Message</label>
                      <textarea 
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white/20 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-white text-black hover:bg-gray-200"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-gray-400">
            © 2025 Your Name. All rights reserved. Built with React & Tailwind CSS.
          </div>
        </div>
      </footer>
    </main>
  );
}