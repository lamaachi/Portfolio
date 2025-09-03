import { experiences } from '@/data/experience';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding container-width">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        Work Experience
      </h2>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700 hidden md:block"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 flex flex-col md:flex-row items-center w-full">
            <div className="md:w-1/2 md:pr-8 text-center md:text-right">
              <p className="text-lg font-semibold text-purple-300">{exp.company}</p>
              <p className="text-gray-400">{exp.period}</p>
            </div>
            
            {/* Timeline Dot */}
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center my-4 md:my-0 z-10 flex-shrink-0">
              <Briefcase size={24} />
            </div>

            <div className="md:w-1/2 md:pl-8 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
