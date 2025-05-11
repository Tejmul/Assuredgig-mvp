'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Star, Calendar, Download, Briefcase, MessageSquare } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

// Sample data structure that would come from the API
const sampleFreelancer = {
  name: "Tejmul",
  title: "Frontend Developer",
  avatar: "/api/placeholder/150/150",
  coverImage: "/api/placeholder/1200/400",
  rating: 4.8,
  bio: "Passionate frontend developer specializing in creating beautiful, responsive and user-friendly web applications with React and Next.js.",
  skills: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "UI/UX Design", level: 75 }
  ],
  services: [
    { name: "Web Development", price: "$50/hr", icon: "Code" },
    { name: "UI/UX Design", price: "$45/hr", icon: "Pen" },
    { name: "API Integration", price: "$55/hr", icon: "Database" },
    { name: "Performance Optimization", price: "$60/hr", icon: "Zap" }
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Built a responsive e-commerce platform with React, Next.js, and Tailwind CSS.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Designed a sleek portfolio for a client with modern animations and responsive layout.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "DesignHub",
      avatar: "/api/placeholder/60/60",
      text: "Tejmul delivered an outstanding website that exceeded our expectations. Great communication and attention to detail!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "TechStart",
      avatar: "/api/placeholder/60/60",
      text: "Working with Tejmul was a pleasure. Professional, prompt, and produced high-quality work.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      company: "EcoShop",
      avatar: "/api/placeholder/60/60",
      text: "Our e-commerce site has never looked better. Tejmul understood our vision and executed it perfectly.",
      rating: 4
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      institution: "University of Technology",
      year: "2018-2022"
    }
  ],
  certifications: [
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2023"
    },
    {
      name: "Frontend Expert",
      issuer: "FrontendMasters",
      year: "2022"
    }
  ],
  experience: [
    {
      position: "Frontend Developer",
      company: "TechCorp",
      duration: "2022-Present",
      description: "Developing responsive web applications using React and Next.js"
    },
    {
      position: "Web Design Intern",
      company: "DesignStudio",
      duration: "2021-2022",
      description: "Created UI designs and implemented them using HTML, CSS, and JavaScript"
    }
  ],
  social: {
    github: "https://github.com/tejmul",
    linkedin: "https://linkedin.com/in/tejmul",
    twitter: "https://twitter.com/tejmul",
    instagram: "https://instagram.com/tejmul"
  },
  availability: "Available for new projects",
  location: "San Francisco, CA",
  languages: ["English", "Hindi"],
  contactEmail: "tejmul@example.com"
};

// Colors for the charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function PortfolioPage() {
  const [freelancer] = useState(sampleFreelancer);
  const [activeTab, setActiveTab] = useState('projects');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading data from API
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    // In a real application, you would fetch the data from an API
  }, []);

  // Convert skills to chart data
  const skillsData = freelancer.skills.map((skill) => ({
    name: skill.name,
    value: skill.level,
  }));

  // Animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Tab options
  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with Cover Image */}
      <div 
        className="h-64 md:h-80 w-full bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${freelancer.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Profile Info Section */}
      <div className="container mx-auto px-2 sm:px-4 relative -mt-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mx-auto md:mx-0">
                <Image src={freelancer.avatar} alt={freelancer.name} width={96} height={96} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-grow w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
                {freelancer.name}
              </h1>
              <h2 className="text-lg sm:text-xl text-blue-300 mt-1">{freelancer.title}</h2>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start mt-3 gap-3 sm:gap-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="ml-1">{freelancer.rating}/5.0</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span className="ml-1">{freelancer.experience.length} years</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-green-400" />
                  <span className="ml-1">{freelancer.availability}</span>
                </div>
              </div>
              
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto md:mx-0">
                {freelancer.bio}
              </p>

              {/* Social Links */}
              <div className="flex mt-4 gap-2 sm:gap-3 justify-center md:justify-start">
                {freelancer.social.github && (
                  <a href={freelancer.social.github} target="_blank" rel="noopener noreferrer" 
                     className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {freelancer.social.linkedin && (
                  <a href={freelancer.social.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {freelancer.social.twitter && (
                  <a href={freelancer.social.twitter} target="_blank" rel="noopener noreferrer" 
                     className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {freelancer.social.instagram && (
                  <a href={freelancer.social.instagram} target="_blank" rel="noopener noreferrer" 
                     className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto mt-4 md:mt-0">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                <span className="flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Me
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-6 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                <span className="flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 bg-gray-800 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-700 text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        {activeTab === 'projects' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Past Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {freelancer.projects.map((project) => (
                <div key={project.id} className="bg-gray-700 rounded-lg p-4 flex flex-col">
                  <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-40 object-cover rounded mb-2 max-w-full" />
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-blue-600 text-xs px-2 py-1 rounded text-white">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-400 hover:underline text-sm mt-auto" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'about' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">About Me</h3>
            <div className="mb-4">
              <p className="text-gray-300">{freelancer.bio}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Experience</h4>
              <ul className="mb-4">
                {freelancer.experience.map((exp, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="font-bold">{exp.position}</span> at <span className="text-blue-300">{exp.company}</span> <span className="text-gray-400">({exp.duration})</span>
                    <div className="text-gray-400 text-sm">{exp.description}</div>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Education</h4>
              <ul>
                {freelancer.education.map((edu, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="font-bold">{edu.degree}</span> at <span className="text-blue-300">{edu.institution}</span> <span className="text-gray-400">({edu.year})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'skills' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <ul>
                  {freelancer.skills.map((skill, idx) => (
                    <li key={idx} className="mb-2 flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-blue-300">{skill.level}%</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={skillsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {skillsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'testimonials' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Testimonials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {freelancer.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} className="w-10 h-10 rounded-full mr-3 max-w-full" />
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-blue-300 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`} fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <div className="italic text-gray-300">&quot;{testimonial.text}&quot;</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Contact</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="mb-2">
                <Mail className="inline-block mr-2 text-blue-400" />
                <a href={`mailto:${freelancer.contactEmail}`} className="text-blue-300 hover:underline">{freelancer.contactEmail}</a>
              </div>
              <div className="mb-2">
                <Briefcase className="inline-block mr-2 text-blue-400" />
                {freelancer.availability}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Location:</span> {freelancer.location}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Languages:</span> {freelancer.languages.join(', ')}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {/* ... footer code unchanged ... */}
    </div>
  );
}