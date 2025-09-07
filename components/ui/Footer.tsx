import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 py-8">
      <div className="container-width flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Lamaachi Youssef. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/lamaachi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/youssef-lamaachi-231137212/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
