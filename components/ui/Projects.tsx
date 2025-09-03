import { projects } from '@/data/projects';
import ProjectCard from '@/components/common/ProjectCard';

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="section-padding container-width">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
