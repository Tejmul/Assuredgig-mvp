'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Send, Paperclip, Smile } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import Image from 'next/image';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  sender: {
    name: string;
    avatar: string;
  };
  status: 'sent' | 'delivered' | 'read';
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample messages - replace with your actual chat data
  useEffect(() => {
    setMessages([
      {
        id: '1',
        content: "Hi! I'm interested in your project.",
        timestamp: '10:30 AM',
        isOwn: false,
        sender: {
          name: 'Sarah Johnson',
          avatar: '/images/freelancer1.jpg',
        },
        status: 'read',
      },
      {
        id: '2',
        content: 'Hello! Thanks for reaching out. What would you like to know?',
        timestamp: '10:31 AM',
        isOwn: true,
        sender: {
          name: 'You',
          avatar: '/images/avatar.jpg',
        },
        status: 'read',
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
      sender: {
        name: 'You',
        avatar: '/images/avatar.jpg',
      },
      status: 'sent',
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate message delivery and read status
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === message.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === message.id ? { ...msg, status: 'read' } : msg
        )
      );
    }, 2000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-dark-surface rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 p-4 border-b border-dark-card">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/images/freelancer1.jpg"
            alt="Sarah Johnson"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-white">Sarah Johnson</h3>
          <p className="text-sm text-gray-400">UI/UX Designer</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map(message => (
            <ChatMessage key={message.id} {...message} message={message.content} />
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-dark-card">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-primary transition-colors"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-dark-card text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-primary transition-colors"
          >
            <Smile className="w-5 h-5" />
          </button>
          <button
            type="submit"
            className="p-2 bg-primary text-black rounded-full hover:bg-primary/90 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}; 