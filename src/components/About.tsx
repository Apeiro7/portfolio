import { Shield, Brain, Code2, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const highlights = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'VAPT experience from IIT Kanpur. Top 100 in national IFACET program.',
  },
  {
    icon: Brain,
    title: 'AI & Deep Learning',
    description: 'Building intelligent systems with TensorFlow, LSTM, CNN, and Q-Learning.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Dev',
    description: 'Proficient in Python, Django, Next.js, and modern web technologies.',
  },
  {
    icon: Globe,
    title: 'Problem Solver',
    description: 'Optimizing real-world systems like traffic management using RL and DL.',
  },
];

export default function About() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 font-serif">
            Driven by Curiosity,
            <br />
            <span className="gradient-text">Powered by Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Amit Bhardwaj</span>, a B.Tech Computer Science student at 
              Guru Ghasidas Vishwavidyalaya, Bilaspur, graduating in May 2025. My passion lies at the intersection of 
              <span className="text-primary"> Cybersecurity</span>, <span className="text-primary">Deep Learning</span>, and 
              <span className="text-primary"> Intelligent Systems</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I interned at <strong className="text-slate-300">C3i Hub, IIT Kanpur</strong> as a VAPT Intern, gaining hands-on 
              experience with embedded systems, penetration testing, and cybersecurity across multiple domains. As the 
              <strong className="text-slate-300"> Cybersecurity Team Lead</strong> at Google Developer Student Clubs, I spearheaded 
              campus-wide security awareness initiatives.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My projects focus on applying reinforcement learning and deep learning to real-world problems like 
              traffic management — achieving 15% faster travel times and 92% prediction accuracy. I secured a position 
              among the <strong className="text-slate-300">top 100 out of 10,000 students</strong> in IIT Kanpur's 
              Cyber Security Skilling Program.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Python', 'C/C++', 'TensorFlow', 'Django', 'Next.js', 'Cybersecurity'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-full glass text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass glass-hover rounded-2xl p-6 card-shine transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
