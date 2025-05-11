'use client';

interface Project {
    title: string;
    description: string;
    image: string;
  }
  
  interface Props {
    project: Project;
  }
  
  export default function PortfolioCard({ project }: Props) {
    return (
      <div className="bg-cyan-50 p-4 rounded-lg shadow-md">
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
        <h4 className="text-lg font-semibold mt-2">{project.title}</h4>
        <p className="text-gray-600">{project.description}</p>
      </div>
    );
  }