import { mockProjects } from '../../lib/mockData';
import ProgressChart from '../../components/ProgressChart';
import WhiteboardMock from '../../components/WhiteboardMock';
import EscrowFlow from '../../components/EscrowFlow';

export default function Dashboard() {
  const project = mockProjects[0]; // Mock project

  return (
    <section>
      <h2 className="text-4xl font-extrabold text-primary mb-8 text-center drop-shadow-[0_0_8px_#00e6ff]">{project.title} Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold text-primary mb-4">Schedule a Meeting</h3>
          <p className="text-gray-300 mb-4">Join a Google Meet-like call to discuss the project.</p>
          <button className="neon-btn">Start Meeting</button>
        </div>
        <div className="glass-card p-8">
          <ProgressChart progress={project.progress} />
        </div>
      </div>
      <div className="glass-card p-8 mb-8">
        <h3 className="text-xl font-bold text-primary mb-4">Tasks</h3>
        <ul className="mt-2 space-y-2 text-gray-200">
          {project.tasks.map((task, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" checked={task.completed} readOnly className="mr-2" />
              {task.name}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold text-primary mt-6 mb-4">Milestones</h3>
        <ul className="mt-2 space-y-2 text-gray-200">
          {project.milestones.map((milestone, index) => (
            <li key={index}>{milestone.name} - {milestone.date}</li>
          ))}
        </ul>
      </div>
      <div className="glass-card p-8 mb-8">
        <WhiteboardMock />
      </div>
      <div className="glass-card p-8">
        <EscrowFlow />
      </div>
    </section>
  );
}