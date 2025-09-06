import { experiences } from '@/data/experience';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse">
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline Line - Modernized */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full shadow-lg hidden md:block"></div>

          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="mb-16 flex flex-col md:flex-row items-center w-full group" // Added group for hover effects
            >
              {/* Left Side (Company & Period) */}
              <div
                className={`md:w-1/2 md:pr-12 text-center transition-all duration-300 ${
                  exp.id % 2 === 0 ? 'md:text-right md:order-1' : 'md:text-left md:order-3' // Alternate sides
                }`}
              >
                <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 group-hover:border-teal-500 transform group-hover:-translate-y-1 group-hover:scale-102 transition-all duration-300">
                  <p className="text-xl font-bold text-teal-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm italic">{exp.period}</p>
                </div>
              </div>
              
              {/* Timeline Dot - Modernized */}
              <div 
                className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center my-6 md:my-0 z-10 flex-shrink-0 
                           shadow-xl ring-4 ring-gray-900 group-hover:ring-teal-300 transform group-hover:scale-110 transition-all duration-300 md:order-2"
              >
                <Briefcase size={30} className="text-white" />
              </div>

              {/* Right Side (Role & Description) */}
              <div
                className={`md:w-1/2 md:pl-12 text-center transition-all duration-300 ${
                  exp.id % 2 === 0 ? 'md:text-left md:order-3' : 'md:text-right md:order-1' // Alternate sides
                }`}
              >
                <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 group-hover:border-blue-500 transform group-hover:-translate-y-1 group-hover:scale-102 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
