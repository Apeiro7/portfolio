import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';

const categories = ['All', 'Languages', 'Frameworks', 'Tools', 'Design'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useInView(0.1);

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Technical Skills</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 font-serif">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic projects, internships, and hands-on development experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass glass-hover rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <span className="text-primary font-bold text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-dark-lighter rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.1}s`,
                  }}
                />
              </div>
              <span className="text-xs text-slate-500 mt-2 block">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
