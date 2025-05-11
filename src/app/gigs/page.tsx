import { mockGigs } from '../../lib/mockData';
import GigCard from '../../components/GigCard';
import Notification from '../../components/Notification';

export default function Gigs() {
  const freelancerSkills = ['FrontendDev', 'React']; // Mock freelancer skills

  return (
    <section>
      <h2 className="text-4xl font-extrabold text-primary mb-8 text-center drop-shadow-[0_0_8px_#00e6ff]">Available Gigs</h2>
      <div className="mb-8">
        <Notification gigs={mockGigs} freelancerSkills={freelancerSkills} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockGigs.map((gig) => (
          <div key={gig.id} className="glass-card">
            <GigCard gig={gig} />
          </div>
        ))}
      </div>
    </section>
  );
}