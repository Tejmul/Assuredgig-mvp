'use client';

import Image from 'next/image';

// Base64 encoded avatar image (simple gray placeholder)
const AVATAR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxRjI5MzciLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4NSIgcj0iMzUiIGZpbGw9IiM0QjU1NjMiLz48cGF0aCBkPSJNMTAwIDEzNUMxMzMuMTM3IDEzNSAxNjAgMTYxLjg2MyAxNjAgMTk1VjIwMEg0MFYxOTVDNDAgMTYxLjg2MyA2Ni44NjI5IDEzNSAxMDAgMTM1WiIgZmlsbD0iIzRCNTU2MyIvPjwvc3ZnPg==';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={AVATAR_DATA_URL}
              alt="User avatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Portfolio Page</h1>
            <p className="text-gray-400">Your professional portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}