import React from 'react';
import { ChevronDown, Mail, Linkedin, MapPin, Code, Zap, Users } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const scrollToNext = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-navy-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-navy-100 p-4 rounded-full shadow-lg">
            <Code className="text-navy-700" size={32} />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float-delayed">
          <div className="bg-blue-100 p-4 rounded-full shadow-lg">
            <Zap className="text-navy-600" size={28} />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float-slow">
          <div className="bg-gray-200 p-4 rounded-full shadow-lg">
            <Users className="text-navy-800" size={30} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-8">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-navy-800 text-white rounded-full text-sm font-semibold animate-pulse shadow-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
            Available for New Opportunities
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="text-navy-800 relative animate-text-shimmer">
                {personalInfo.name.split(' ')[0]}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-navy-400 via-navy-600 to-navy-400 rounded-full animate-gradient"></div>
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-navy-700 font-semibold animate-fade-in-up">
              {personalInfo.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl font-bold text-navy-800">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl font-bold text-navy-800">50+</div>
              <div className="text-sm text-gray-600">Projects Led</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl font-bold text-navy-800">15+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
          </div>

          {/* Location with Enhanced Styling */}
          <div className="flex items-center justify-center text-gray-500 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mx-auto w-fit shadow-lg">
            <MapPin size={20} className="mr-2 text-navy-600" />
            <span className="text-lg font-medium">{personalInfo.location}</span>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-navy-800 text-navy-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-800 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-navy-800 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 pt-8">
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/80 backdrop-blur-sm p-4 rounded-full text-gray-600 hover:text-navy-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Linkedin size={28} className="group-hover:animate-bounce" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="group bg-white/80 backdrop-blur-sm p-4 rounded-full text-gray-600 hover:text-navy-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Mail size={28} className="group-hover:animate-bounce" />
            </a>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full text-gray-400 hover:text-navy-600 transition-all duration-300 animate-bounce shadow-lg hover:shadow-xl"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-navy-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-navy-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-br from-gray-200 to-navy-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
    </section>
  );
};

export default Hero;