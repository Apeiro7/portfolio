import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, isVisible } = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amitbhardwajy7@gmail.com',
      href: 'mailto:amitbhardwajy7@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 xxxxxxxxxx',
      href: 'tel:+91xxxxxxxxxx',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bilaspur, Chhattisgarh',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 font-serif">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm open to internship opportunities, collaborations, and exciting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 glass glass-hover rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Extra decoration */}
            <div className="glass rounded-2xl p-6 mt-8">
              <h3 className="text-white font-semibold mb-3">Let's Build Something Great</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I'm always eager to discuss new projects, innovative ideas, 
                and opportunities in cybersecurity, AI/ML, or full-stack development. 
                Don't hesitate to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-lighter border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-lighter border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-lighter border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-lighter border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? 'bg-emerald-500 cursor-default'
                    : 'bg-primary hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
