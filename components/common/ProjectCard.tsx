import { Project } from '@/types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden card-hover">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
