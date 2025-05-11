import Link from 'next/link';
import { ArrowRight, ChevronDown, Bell, User, Briefcase, Calendar, ClipboardList, BarChart2, ShieldCheck } from 'lucide-react';

const howItWorksSteps = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary mb-2" />, 
    title: 'Post a Gig',
    desc: 'Clients post a gig (e.g., logo design) in seconds.'
  },
  {
    icon: <Bell className="w-8 h-8 text-primary mb-2" />,
    title: 'Instant Notifications',
    desc: 'Freelancers with matching skills get notified instantly.'
  },
  {
    icon: <User className="w-8 h-8 text-primary mb-2" />,
    title: 'Submit Portfolios',
    desc: 'Freelancers submit their portfolios to apply.'
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary mb-2" />,
    title: 'Client Picks a Freelancer',
    desc: 'Clients review applicants and select the best fit.'
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary mb-2" />,
    title: 'Schedule a Meet',
    desc: 'Schedule a video call and brainstorm with a whiteboard.'
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary mb-2" />,
    title: 'Agree on Timeline',
    desc: 'Both parties agree on milestones and deadlines.'
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary mb-2" />,
    title: 'Real-Time Dashboard',
    desc: 'Freelancer updates progress daily in a shared dashboard.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary mb-2" />,
    title: 'Escrow Payment & Delivery',
    desc: 'Client pays via escrow. Files are delivered securely.'
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/grid-pattern.svg')] bg-cover bg-center flex flex-col justify-center items-center relative px-2 sm:px-4 py-8 sm:py-16 max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-2 sm:px-6 text-center w-full max-w-full sm:max-w-2xl md:max-w-3xl mx-auto gap-y-8">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight break-words">
          The Future of
          <span className="block text-primary">Freelancing</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-4 mb-8">
          Connect with top talent and opportunities in our premium freelance marketplace. Be a client, freelancer, or both - the choice is yours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center mb-8">
          <Link 
            href="/post-job" 
            className="w-full max-w-xs sm:max-w-none sm:w-auto bg-primary text-black px-4 sm:px-8 py-3 rounded-md flex items-center justify-center hover:bg-primary-light transition-colors font-semibold shadow-md"
          >
            Post a Job <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            href="/find-work" 
            className="w-full max-w-xs sm:max-w-none sm:w-auto bg-black text-white border border-gray-700 px-4 sm:px-8 py-3 rounded-md hover:bg-gray-900 transition-colors font-semibold shadow-md"
          >
            Find Work
          </Link>
        </div>
      </div>

      {/* How it Works Section */}
      <section className="w-full max-w-5xl mx-auto mt-12 mb-8 px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step, idx) => (
            <div key={idx} className="bg-black/60 rounded-xl p-6 flex flex-col items-center text-center shadow-lg border border-gray-800">
              {step.icon}
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center">
        <button className="text-gray-400 hover:text-white transition-colors animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}