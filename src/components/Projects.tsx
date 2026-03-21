import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';

export default function Projects() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 font-serif">
            University <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Research-driven projects applying Deep Learning and Reinforcement Learning to solve real-world traffic management challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass rounded-2xl overflow-hidden card-shine transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 border ${project.borderColor}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Image/Emoji Area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{project.image}</span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 bg-primary rounded-full text-white hover:bg-primary-dark transition-colors"
                    aria-label="View live"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                    aria-label="View code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={14} className="text-primary" />
                  <span className="text-xs text-primary font-medium">{project.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
