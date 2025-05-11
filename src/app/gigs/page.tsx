'use client';
import { useState, useEffect } from 'react';
import { Bell, Search } from 'lucide-react';
import GigCard from './components/GigCard';
import GigFilters from './components/GigFilters';
import type { Gig } from './types/gig';

// Sample gig data
const INITIAL_GIGS: Gig[] = [
  {
    id: 1,
    title: "Build a React Website",
    description: "Need a modern website built with React and Tailwind CSS.",
    budget: 500,
    duration: "2 weeks",
    location: "Remote",
    skills: ["FrontendDev", "React", "Tailwind"],
    postedDate: "2025-05-08",
    difficulty: "Intermediate",
    category: "Web Development",
    featured: true,
    verified: true,
    applicants: 7,
    client: {
      name: "TechSolutions Inc.",
      rating: 4.8,
      projectsPosted: 12
    }
  },
  {
    id: 2,
    title: "Logo Design",
    description: "Create a unique logo for a startup.",
    budget: 200,
    duration: "1 week",
    location: "Remote",
    skills: ["GraphicDesign", "Logo"],
    postedDate: "2025-05-10",
    difficulty: "Beginner",
    category: "Design",
    featured: false,
    verified: true,
    applicants: 12,
    client: {
      name: "StartupBrand",
      rating: 4.2,
      projectsPosted: 3
    }
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Develop a cross-platform mobile app using React Native.",
    budget: 2000,
    duration: "1 month",
    location: "Remote",
    skills: ["MobileDev", "ReactNative", "Firebase"],
    postedDate: "2025-05-05",
    difficulty: "Advanced",
    category: "Mobile Development",
    featured: true,
    verified: true,
    applicants: 5,
    client: {
      name: "AppWorks Ltd.",
      rating: 4.9,
      projectsPosted: 27
    }
  },
  {
    id: 4,
    title: "WordPress Site Migration",
    description: "Migrate existing WordPress site to a new host with performance optimization.",
    budget: 300,
    duration: "3 days",
    location: "Remote",
    skills: ["WordPress", "DevOps", "Optimization"],
    postedDate: "2025-05-09",
    difficulty: "Intermediate",
    category: "Web Development",
    featured: false,
    verified: false,
    applicants: 9,
    client: {
      name: "BlogMaster",
      rating: 3.7,
      projectsPosted: 5
    }
  },
  {
    id: 5,
    title: "Content Writing for Tech Blog",
    description: "Create engaging content for a technology blog with SEO optimization.",
    budget: 150,
    duration: "1 week",
    location: "Remote",
    skills: ["ContentWriting", "SEO", "TechKnowledge"],
    postedDate: "2025-05-11",
    difficulty: "Beginner",
    category: "Content",
    featured: false,
    verified: true,
    applicants: 18,
    client: {
      name: "TechInsights",
      rating: 4.3,
      projectsPosted: 31
    }
  },
  {
    id: 6,
    title: "E-commerce UI/UX Redesign",
    description: "Redesign the user interface for an existing e-commerce platform.",
    budget: 800,
    duration: "2 weeks",
    location: "Remote",
    skills: ["UI/UX", "Figma", "E-commerce"],
    postedDate: "2025-05-07",
    difficulty: "Intermediate",
    category: "Design",
    featured: true,
    verified: true,
    applicants: 11,
    client: {
      name: "ShopNow",
      rating: 4.6,
      projectsPosted: 8
    }
  }
];

// Available filters
const CATEGORIES = ["All Categories", "Web Development", "Design", "Mobile Development", "Content", "Marketing", "Data Science"];
const DIFFICULTY_LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const BUDGET_RANGES = ["Any Budget", "$0-$100", "$100-$500", "$500-$1000", "$1000-$5000", "$5000+"];
const DURATION_RANGES = ["Any Duration", "Less than 1 week", "1-2 weeks", "2-4 weeks", "1-3 months", "3+ months"];

export default function GigsPage() {
  const [filteredGigs, setFilteredGigs] = useState<Gig[]>(INITIAL_GIGS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");
  const [selectedBudget, setSelectedBudget] = useState("Any Budget");
  const [selectedDuration, setSelectedDuration] = useState("Any Duration");
  const [showFilters, setShowFilters] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const sortBy = "newest";
  const [viewMode, setViewMode] = useState<"card" | "list">("card");
  const [savedGigs, setSavedGigs] = useState<number[]>([]);
  
  // Filter gigs based on selected filters
  useEffect(() => {
    let results = [...INITIAL_GIGS];
    
    // Search filter
    if (searchTerm) {
      results = results.filter(gig => 
        gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gig.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gig.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Category filter
    if (selectedCategory !== "All Categories") {
      results = results.filter(gig => gig.category === selectedCategory);
    }
    
    // Difficulty filter
    if (selectedDifficulty !== "All Levels") {
      results = results.filter(gig => gig.difficulty === selectedDifficulty);
    }
    
    // Budget filter
    if (selectedBudget !== "Any Budget") {
      const budgetRange = selectedBudget.replace("$", "").split("-").map(b => parseInt(b.replace("+", "")));
      
      if (budgetRange.length === 2) {
        results = results.filter(gig => 
          gig.budget >= budgetRange[0] && 
          (budgetRange[1] ? gig.budget <= budgetRange[1] : true)
        );
      }
    }
    
    // Duration filter
    if (selectedDuration !== "Any Duration") {
      if (selectedDuration.includes("Less than")) {
        results = results.filter(gig => gig.duration.includes("day") || 
          (gig.duration.includes("week") && parseInt(gig.duration) < 1));
      } else if (selectedDuration.includes("week")) {
        results = results.filter(gig => gig.duration.includes("week"));
      } else if (selectedDuration.includes("month")) {
        results = results.filter(gig => gig.duration.includes("month"));
      }
    }
    
    // Sort results
    if (sortBy === "newest") {
      results.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
    } else if (sortBy === "budget-high") {
      results.sort((a, b) => b.budget - a.budget);
    } else if (sortBy === "budget-low") {
      results.sort((a, b) => a.budget - b.budget);
    } else if (sortBy === "featured") {
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    setFilteredGigs(results);
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedBudget, selectedDuration]);

  const toggleSaveGig = (gigId: number) => {
    if (savedGigs.includes(gigId)) {
      setSavedGigs(savedGigs.filter(id => id !== gigId));
    } else {
      setSavedGigs([...savedGigs, gigId]);
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedDifficulty("All Levels");
    setSelectedBudget("Any Budget");
    setSelectedDuration("Any Duration");
    setShowAdvancedFilters(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header with Glow Effect */}
      <div className="relative py-12 mb-6 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-center mb-2 text-cyan-400">
            Available Gigs
          </h1>
          <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto">
            Find the perfect gig that matches your skills and expertise from our curated marketplace
          </p>
        </div>
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl opacity-30"></div>
      </div>

      {/* Notification Bar */}
      <div className="bg-gray-800/60 backdrop-blur-sm py-3 mb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell size={18} className="text-cyan-400" />
              <h2 className="text-lg font-medium">Notifications</h2>
            </div>
            <div className="bg-gray-700/70 rounded-full px-3 py-1 text-sm text-gray-300">
              5 new gigs match your skills
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Filters */}
        <GigFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedBudget={selectedBudget}
          setSelectedBudget={setSelectedBudget}
          selectedDuration={selectedDuration}
          setSelectedDuration={setSelectedDuration}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          showAdvancedFilters={showAdvancedFilters}
          setShowAdvancedFilters={setShowAdvancedFilters}
          resetFilters={resetFilters}
          categories={CATEGORIES}
          difficultyLevels={DIFFICULTY_LEVELS}
          budgetRanges={BUDGET_RANGES}
          durationRanges={DURATION_RANGES}
        />
        
        {/* Results Count & View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-300">
            Showing <span className="font-semibold text-white">{filteredGigs.length}</span> results
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setViewMode("card")}
              className={`p-2 rounded-md ${viewMode === "card" ? "bg-gray-700 text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${viewMode === "list" ? "bg-gray-700 text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="18" x2="3" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Gig Cards */}
        {filteredGigs.length === 0 ? (
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-12 text-center">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-gray-700 rounded-full mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No gigs found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search filters or browse all categories</p>
            <button 
              onClick={resetFilters}
              className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${viewMode === "card" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {filteredGigs.map((gig) => (
              <GigCard
                key={gig.id}
                gig={gig}
                viewMode={viewMode}
                onSave={toggleSaveGig}
                isSaved={savedGigs.includes(gig.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 