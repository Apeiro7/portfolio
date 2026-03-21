import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Career Journey</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 font-serif">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Internships and leadership roles that have shaped my professional skills in cybersecurity and software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-0'
              } pl-20 md:pl-0`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark shadow-lg shadow-primary/30 z-10" />

              {/* Content Card */}
              <div className={`glass rounded-2xl p-6 sm:p-8 card-shine transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">{exp.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-primary-light font-medium mb-1">{exp.company}</p>
                <div className={`flex items-center gap-1 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <MapPin size={12} className="text-slate-500" />
                  <span className="text-xs text-slate-500">{exp.location}</span>
                </div>
                <p className="text-sm text-slate-400 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className={`flex items-start gap-2 text-sm text-slate-300 ${
                        index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                      }`}
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
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
