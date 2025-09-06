'use client';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // This effect is desktop-only, which is fine. No changes needed.
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // REFACTORED: Changed padding to be responsive. Added flex-col and justify-center for better vertical alignment on all screens.
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-20 py-20 relative overflow-hidden">

      {/* Dynamic Backgrounds - No changes needed, they scale perfectly */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.15) 0%, rgba(147, 51, 234, 0.1) 25%, transparent 50%)`
        }}
      ></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 opacity-60"></div>
      <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-2000 opacity-60"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>

      {/* REFACTORED: Added text-center for mobile and text-left for larger screens */}
      <div className="max-w-7xl mx-auto relative z-10 w-full text-center lg:text-left">
        {/* REFACTORED: Adjusted gap for different screen sizes */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          {/* REFACTORED: Adjusted vertical spacing */}
          <div className={`order-2 lg:order-1 lg:col-span-7 space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <div className="space-y-6">
              <div className="space-y-4">
                {/* REFACTORED: Ensured the line is centered on mobile */}
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="text-cyan-400 font-semibold text-lg md:text-xl tracking-wide">Hi, I am</span>
                  <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent flex-1 max-w-xs"></div>
                </div>

                {/* Your responsive text is already great! No changes needed here. */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Youseef L.
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600 transform scale-x-0 origin-left animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
                  </span>
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light leading-relaxed">
                  <span className="font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Software Engineer</span>
                </p>

                {/* REFACTORED: Centered text on mobile */}
                <p className="text-slate-400 leading-relaxed max-w-xl text-lg font-light mx-auto lg:mx-0">
                  I specialize in building exceptional digital experiences with cutting-edge technologies.
                  From <span className="text-cyan-400 font-medium">AI integration</span> to
                  <span className="text-purple-400 font-medium"> full-stack development</span>,
                  I transform complex ideas into elegant solutions.
                </p>
              </div>
            </div>

            {/* REFACTORED: Centered on mobile, adjusted gap */}
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </div>

            {/* Your button stacking with sm:flex-row is perfect! Just centering it now. */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  View My Work
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="https://hzhqqukxzktdzqgvkgct.supabase.co/storage/v1/object/public/myresumes/LAMAACHI_YOUSSSEF_CV.pdf"
                download="LAMAACHI_YOUSSEF_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700/50 text-slate-300 font-semibold rounded-2xl hover:bg-slate-700/50 hover:border-cyan-400/50 hover:text-white transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download CV
                </span>
              </a>
            </div>

            {/* REFACTORED: Centered on mobile */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-6 border-t border-slate-800/50 justify-center lg:justify-start">
              <span className="text-slate-400 text-sm font-medium">Connect with me:</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <a key={href} href={href} className="group relative p-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* Right Image */}
          <div className={`order-1 lg:order-2 lg:col-span-5 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* THIS IS THE MODIFIED LINE 👇 */}
            <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-sm">

              {/* Animated Rings */}
              <div className="absolute inset-0 animate-spin-slow"><div className="w-full h-full border-2 border-dashed border-cyan-500/30 rounded-full"></div></div>
              <div className="absolute inset-4 animate-reverse-spin-slow"><div className="w-full h-full border border-dashed border-purple-500/30 rounded-full"></div></div>

              {/* Main Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>

              {/* Image Container with Glassmorphism */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-slate-700/50">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/me_aws.jpeg"
                    alt="Profile"
                    width={400}
                    height={533}
                    className="w-full h-auto object-cover aspect-[3/4] rounded-2xl hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <div className="absolute top-1/2 -left-4 lg:-left-8 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-float-delay">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 right-4 lg:right-8 w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg animate-float-slow">
                <span className="text-white font-bold">✨</span>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-6 left-4 lg:-bottom-8 lg:-left-8 px-4 py-2 sm:px-6 sm:py-3 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="relative"><div className="w-3 h-3 bg-green-500 rounded-full"></div><div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div></div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REFACTORED: Hide the scroll indicator on larger screens where it's less necessary */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 hidden lg:flex">
        <div className="flex flex-col items-center gap-1">
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"></div>
        </div>
        <div className="animate-bounce">
          <ChevronDown className="text-cyan-400" size={20} />
        </div>
      </div>

      {/* Your custom animations are great, no changes needed */}
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes float-delay { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes reverse-spin-slow { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes scaleX { to { transform: scaleX(1); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 5s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-reverse-spin-slow { animation: reverse-spin-slow 15s linear infinite; }
        .bg-grid-white\\/\\[0\\.02\\] { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='m0 .5h32m0 15.5h-32m32-14.5v32m-32-32v32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default Hero;
