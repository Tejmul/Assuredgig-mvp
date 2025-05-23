'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ChatMessageProps {
  message: string;
  timestamp: string;
  isOwn: boolean;
  sender: {
    name: string;
    avatar: string;
  };
  status?: 'sent' | 'delivered' | 'read';
}

export const ChatMessage = ({
  message,
  timestamp,
  isOwn,
  sender,
  status = 'sent',
}: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : ''}`}
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={sender.avatar}
          alt={sender.name}
          fill
          className="object-cover"
        />
      </div>

      <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-gray-400">{sender.name}</span>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>

        <div
          className={`max-w-md rounded-2xl px-4 py-2 ${
            isOwn
              ? 'bg-primary text-black rounded-tr-none'
              : 'bg-dark-card text-white rounded-tl-none'
          }`}
        >
          {message}
        </div>

        {isOwn && (
          <div className="flex items-center gap-1 mt-1">
            {status === 'read' && (
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {status === 'delivered' && (
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}; 