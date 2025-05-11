'use client';

import { Gig } from '../lib/mockData';
import { FaTag } from 'react-icons/fa';

interface Props {
  gig: Gig;
}

export default function GigCard({ gig }: Props) {
  return (
    <div className="bg-[#10151a] p-6 rounded-lg shadow-md hover:shadow-lg transition text-white">
      <h3 className="text-xl font-semibold text-cyan-700">{gig.title}</h3>
      <p className="text-gray-600 mt-2">{gig.description}</p>
      <p className="text-gray-800 font-bold mt-4">Budget: ${gig.budget}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {gig.hashtags.map((tag) => (
          <span key={tag} className="flex items-center bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-sm">
            <FaTag className="mr-1" /> {tag}
          </span>
        ))}
      </div>
      <button className="mt-4 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
        View Details
      </button>
    </div>
  );
}