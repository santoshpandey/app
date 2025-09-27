import React from 'react';
import { Mail, Linkedin, MapPin, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              {personalInfo.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Frontend Engineering Leader passionate about building scalable solutions 
              and mentoring the next generation of developers.
            </p>
            <div className="flex items-center text-gray-300">
              <MapPin size={16} className="mr-2" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={18} className="mr-3" />
                <span>Email Me</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={18} className="mr-3" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-navy-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-700 transition-colors duration-200 w-full transform hover:scale-105"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart size={14} className="mx-2 text-red-400 fill-current" />
              <span>and React</span>
            </div>
            
            <div className="mt-4 sm:mt-0 text-gray-400 text-sm">
              <span>Open to new opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-navy-600 text-white p-3 rounded-full shadow-lg hover:bg-navy-700 transition-colors duration-200 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;