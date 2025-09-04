import { skills } from '@/data/skills';
import SkillTag from '@/components/common/SkillTag'; // Assuming SkillTag is already modern and uses Tailwind

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          About Me & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p className="p-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              Hello! I am a passionate <strong className="font-semibold text-purple-400">Full-Stack Software Engineer</strong> with a knack for building robust and scalable web applications. I thrive on solving complex problems and continuously learning new technologies.
            </p>
            <p className="p-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              My journey in software development has equipped me with a strong foundation in both front-end and back-end technologies. I enjoy crafting beautiful user interfaces as much as I love designing efficient server-side architectures.
            </p>
            <p className="p-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              When I am not coding, you can find me exploring new tech gadgets or enjoying a good book. I believe in clean code, elegant solutions, and user-centric design.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {skills.map((skill) => (
              <SkillTag key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;