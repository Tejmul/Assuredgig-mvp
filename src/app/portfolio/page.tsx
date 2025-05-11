import { mockFreelancers } from '../../lib/mockData';
import PortfolioCard from '../../components/PortfolioCard';

export default function Portfolio() {
  const freelancer = mockFreelancers[0]; // Mock single freelancer

  return (
    <section>
      <h2 className="text-4xl font-extrabold text-primary mb-8 text-center drop-shadow-[0_0_8px_#00e6ff]">{freelancer.name}’s Portfolio</h2>
      <div className="glass-card p-8">
        <p className="text-gray-300 mb-2"><strong>Experience:</strong> {freelancer.experience}</p>
        <p className="text-gray-300 mb-6"><strong>Rating:</strong> {freelancer.rating}/5</p>
        <h3 className="text-2xl font-bold text-primary mb-4">Past Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {freelancer.projects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
        <button className="neon-btn mt-6">Apply for Gig</button>
      </div>
    </section>
  );
}