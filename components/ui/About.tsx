import { skills } from '@/data/skills';
import SkillTag from '@/components/common/SkillTag';

const About = () => {
  return (
    <section id="about" className="section-padding container-width">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        About Me & Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            Hello! I'm a passionate Full-Stack Software Engineer with a knack for building robust and scalable web applications. I thrive on solving complex problems and continuously learning new technologies.
          </p>
          <p>
            My journey in software development has equipped me with a strong foundation in both front-end and back-end technologies. I enjoy crafting beautiful user interfaces as much as I love designing efficient server-side architectures.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
