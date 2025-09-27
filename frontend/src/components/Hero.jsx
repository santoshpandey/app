import React from 'react';
import { ChevronDown, Mail, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const scrollToNext = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="text-navy-800 relative">
                {personalInfo.name.split(' ')[0]}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-navy-400 rounded-full transform scale-x-0 animate-pulse"></span>
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-navy-700 font-semibold">
              {personalInfo.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center text-gray-500">
            <MapPin size={20} className="mr-2" />
            <span className="text-lg">{personalInfo.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-navy-800 text-navy-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-800 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-navy-800 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 hover:text-navy-800 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-navy-600 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-navy-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;