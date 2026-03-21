import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { stats } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">B.Tech CS · Class of 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="block text-white">Hi, I'm</span>
            <span className="block gradient-text font-serif mt-2">Amit Bhardwaj</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Cybersecurity Enthusiast & CS Engineer
          </p>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Passionate about Deep Learning, Reinforcement Learning, and Cybersecurity.
            Building intelligent systems that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={18} className="animate-bounce" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass glass-hover text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Github, href: 'https://github.com/', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:amitbhardwajy7@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+918817015834', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' && label !== 'Phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full glass glass-hover text-slate-400 hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
