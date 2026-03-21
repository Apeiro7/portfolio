import { GraduationCap, MapPin, BookOpen, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { education, achievements } from '../data/portfolio';

export default function Education() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Education & Achievements</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 font-serif">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My educational journey and notable accomplishments that have shaped my career.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className="glass glass-hover rounded-2xl p-8 card-shine transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 border border-slate-700/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{edu.institution}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin size={14} className="text-slate-500" />
                    <span className="text-sm text-slate-500">{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" />
                  <span className="text-slate-300 font-medium">{edu.degree}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">{edu.period}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                    {edu.gpa}
                  </span>
                </div>
              </div>

              {edu.coursework.length > 0 && (
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-serif">
            Notable <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((ach, index) => (
              <div
                key={ach.title}
                className="glass glass-hover rounded-2xl p-6 text-center card-shine transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 border border-slate-700/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{ach.icon}</div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Award size={20} className="text-primary" />
                </div>
                <h4 className="text-white font-semibold mb-2 leading-tight">{ach.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
