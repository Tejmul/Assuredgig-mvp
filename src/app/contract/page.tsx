"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  PieChart,
  MessageCircle,
  Video,
  ArrowUpRight,
  Check,
  Upload,
  Send,
  ClipboardList,
  PlusCircle
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartPieChart,
  Pie,
  Cell
} from 'recharts';

export default function ContractPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [timeRemaining, setTimeRemaining] = useState({
    days: 14,
    hours: 8,
    minutes: 35,
    seconds: 12
  });
  const [chatExpanded, setChatExpanded] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [milestoneExpanded, setMilestoneExpanded] = useState(false);
  
  // Mock data
  const contractTitle = "E-commerce Website Redesign";
  const client = {
    name: "TechSolutions Inc.",
    avatar: "https://placehold.co/40x40"
  };
  
  const completionRate = 62;
  
  const chatMessages = [
    { sender: 'client', message: "How's the homepage design coming along?", time: '2:35 PM' },
    { sender: 'me', message: 'Just finished the responsive version! Will upload mockups by EOD.', time: '2:41 PM' },
    { sender: 'client', message: 'Great! Looking forward to seeing it.', time: '2:45 PM' }
  ];
  
  const milestones = [
    { title: 'Research & Planning', completed: true, deadline: 'May 2, 2025', payment: '$800' },
    { title: 'UI Design & Wireframes', completed: true, deadline: 'May 8, 2025', payment: '$1,200' },
    { title: 'Homepage Implementation', completed: false, progress: 80, deadline: 'May 15, 2025', payment: '$1,500' },
    { title: 'Product Pages', completed: false, progress: 30, deadline: 'May 22, 2025', payment: '$1,800' },
    { title: 'Testing & Deployment', completed: false, progress: 0, deadline: 'May 28, 2025', payment: '$700' }
  ];
  
  const tasks = [
    { title: 'Revise color scheme as per feedback', completed: true },
    { title: 'Implement responsive navbar', completed: true },
    { title: 'Create product card components', completed: false },
    { title: 'Optimize hero section images', completed: false },
    { title: 'Fix checkout page layout issues', completed: false }
  ];
  
  const timeData = [
    { day: 'Mon', hours: 4.5 },
    { day: 'Tue', hours: 6.2 },
    { day: 'Wed', hours: 5.8 },
    { day: 'Thu', hours: 7.5 },
    { day: 'Fri', hours: 6.3 },
    { day: 'Sat', hours: 3.2 },
    { day: 'Sun', hours: 1.5 }
  ];
  
  const pieData = [
    { name: 'Complete', value: completionRate },
    { name: 'Remaining', value: 100 - completionRate }
  ];
  
  const COLORS = ['#00e6ff', '#292F3A'];
  
  useEffect(() => {
    // Countdown timer simulation
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real implementation, this would send the message to an API
      setNewMessage('');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold text-[#00e6ff]">{contractTitle}</h1>
            <span className="bg-[#001E29] text-[#00e6ff] px-2 py-1 rounded-md text-xs">Active</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
                <Image 
                  src={client.avatar} 
                  alt={client.name} 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm hidden md:inline">{client.name}</span>
            </div>
            
            <button className="bg-[#00e6ff] hover:bg-[#5efcff] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1">
              <Video size={16} />
              <span className="hidden sm:inline">Start Meeting</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Navigation Tabs */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            {['dashboard', 'milestones', 'files', 'messages', 'contract'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab 
                    ? 'text-[#00e6ff] border-b-2 border-[#00e6ff]' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-7 gap-6">
          {/* Left Column - Stats & Tasks */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Contract Value</h3>
                <p className="text-2xl font-bold">$6,000</p>
                <p className="text-xs text-[#00e6ff] mt-1">Fixed Price</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Time Logged</h3>
                <p className="text-2xl font-bold">35.0 hrs</p>
                <p className="text-xs text-[#00e6ff] mt-1">This week: 12.5 hrs</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Milestones</h3>
                <p className="text-2xl font-bold">2 / 5</p>
                <p className="text-xs text-[#00e6ff] mt-1">Completed</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="flex justify-between items-start">
                  <h3 className="text-gray-400 text-sm font-medium mb-2">Time Remaining</h3>
                  <Clock size={16} className="text-gray-400" />
                </div>
                <div className="text-2xl font-bold">
                  {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m
                </div>
                <p className="text-xs text-amber-400 mt-1">Deadline: May 28, 2025</p>
              </div>
            </div>
            
            {/* Progress Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Completion Pie Chart */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Project Completion</h2>
                  <PieChart size={18} className="text-gray-400" />
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-40 h-40 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartPieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={36}
                          outerRadius={50}
                          paddingAngle={0}
                          dataKey="value"
                          startAngle={90}
                          endAngle={-270}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                      </RechartPieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold">{completionRate}%</span>
                      <span className="text-xs text-gray-400">Complete</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-400">Tasks Completed</p>
                    <p className="text-lg font-bold">8/15</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-400">Hours Billed</p>
                    <p className="text-lg font-bold">35 hrs</p>
                  </div>
                </div>
              </div>
              
              {/* Time Tracking Chart */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Time Logged</h2>
                  <Clock size={18} className="text-gray-400" />
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timeData}>
                      <defs>
                        <linearGradient id="timeGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00e6ff" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#00e6ff" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        unit="h" 
                        width={40}
                      />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '0.375rem',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                          color: '#F9FAFB'
                        }}
                        itemStyle={{ color: '#00e6ff' }}
                        formatter={(value) => [`${value} hours`, 'Time Logged']}
                        labelStyle={{ color: '#9CA3AF' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="#00e6ff" 
                        fillOpacity={1} 
                        fill="url(#timeGradient)" 
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <button className="flex items-center space-x-2 text-[#00e6ff] text-sm font-medium">
                    <span>Log Time</span>
                    <PlusCircle size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Tasks List */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <ClipboardList size={18} className="mr-2" />
                  Current Tasks
                </h2>
                <button className="text-[#00e6ff] text-sm flex items-center">
                  <span>Add Task</span>
                  <PlusCircle size={16} className="ml-1" />
                </button>
              </div>
              
              <div className="space-y-3">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-750 rounded-lg border border-gray-700">
                    <div className={`w-5 h-5 rounded flex items-center justify-center mr-3 ${
                      task.completed ? 'bg-[#00e6ff] text-black' : 'border border-gray-500'
                    }`}>
                      {task.completed && <Check size={14} />}
                    </div>
                    <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-center">
                <button className="text-gray-400 text-sm flex items-center">
                  <span>View All Tasks</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
            </div>
            
            {/* Milestones Accordion */}
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div 
                className="p-5 flex justify-between items-center cursor-pointer"
                onClick={() => setMilestoneExpanded(!milestoneExpanded)}
              >
                <h2 className="text-lg font-semibold">Milestones & Payments</h2>
                {milestoneExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {milestoneExpanded && (
                <div className="px-5 pb-5">
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg p-4 bg-gray-750">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                              milestone.completed ? 'bg-[#00e6ff] text-black' : 'border border-gray-500'
                            }`}>
                              {milestone.completed && <Check size={14} />}
                            </div>
                            <div>
                              <h3 className="font-medium">{milestone.title}</h3>
                              <p className="text-sm text-gray-400">Due: {milestone.deadline}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold">{milestone.payment}</span>
                            {!milestone.completed && typeof milestone.progress === 'number' && milestone.progress > 0 && (
                              <div className="mt-1 w-24 bg-gray-700 rounded-full h-2 overflow-hidden">
                                <div 
                                  className="bg-[#00e6ff] h-full" 
                                  style={{ width: `${milestone.progress}%` }}
                                ></div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Chat */}
          <div className={`lg:col-span-2 ${chatExpanded ? 'fixed inset-0 z-20 bg-gray-900 p-4' : ''}`}>
            <div className="bg-gray-800 rounded-xl overflow-hidden h-full flex flex-col border border-gray-700">
              <div className="p-4 bg-gray-750 border-b border-gray-700 flex justify-between items-center">
                <h2 className="font-medium flex items-center">
                  <MessageCircle size={18} className="mr-2" />
                  Project Chat
                </h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setChatExpanded(!chatExpanded)} 
                    className="text-gray-400 hover:text-gray-200"
                  >
                    {chatExpanded ? <ChevronDown size={20} /> : <ArrowUpRight size={18} />}
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-xs rounded-2xl p-3 ${
                        msg.sender === 'me' 
                          ? 'bg-[#00e6ff] text-black rounded-br-none' 
                          : 'bg-gray-700 text-white rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs text-right mt-1 opacity-70">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-3 border-t border-gray-700">
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-200 p-2">
                    <Upload size={18} />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#00e6ff] focus:border-[#00e6ff]"
                    placeholder="Type a message..."
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="bg-[#00e6ff] hover:bg-[#5efcff] text-black rounded-full p-2"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}