'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, User, Briefcase, Tag } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  type: 'freelancer' | 'project' | 'skill';
  icon: React.ReactNode;
}

export const CommandDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Memoize search results so the array reference doesn't change on every render
  const searchResults: SearchResult[] = useMemo(() => [
    { id: '1', title: 'Sarah Johnson', type: 'freelancer' as const, icon: <User className="w-4 h-4" /> },
    { id: '2', title: 'Web Development Project', type: 'project' as const, icon: <Briefcase className="w-4 h-4" /> },
    { id: '3', title: 'React Development', type: 'skill' as const, icon: <Tag className="w-4 h-4" /> },
  ], []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = searchResults.filter((result): result is SearchResult => 
        result.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, searchResults]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 bg-dark-surface rounded-lg hover:bg-dark-card transition-colors"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="px-2 py-1 text-xs bg-dark-card rounded">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-2xl mx-auto mt-20 bg-dark-surface rounded-xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 p-4 border-b border-dark-card">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search freelancers, projects, or skills..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-dark-card rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {results.map(result => (
                  <motion.button
                    key={result.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full flex items-center gap-3 p-4 hover:bg-dark-card transition-colors text-left"
                    onClick={() => {
                      // Handle result selection
                      setIsOpen(false);
                    }}
                  >
                    <div className="p-2 bg-dark-card rounded-lg text-primary">
                      {result.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium">{result.title}</div>
                      <div className="text-sm text-gray-400 capitalize">{result.type}</div>
                    </div>
                  </motion.button>
                ))}

                {query && results.length === 0 && (
                  <div className="p-4 text-center text-gray-400">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 