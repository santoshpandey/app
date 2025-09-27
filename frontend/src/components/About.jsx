import React from 'react';
import { CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-navy-800">Me</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {about.summary}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Highlights</h3>
              <div className="grid gap-3">
                {about.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-200"
                  >
                    <CheckCircle className="text-navy-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-900 transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-100 to-gray-100 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy-800">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy-800">50+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy-800">15+</div>
                    <div className="text-gray-600">Team Members Led</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy-800">100K+</div>
                    <div className="text-gray-600">Users Impacted</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white/50 rounded-lg p-6 text-center">
                  <blockquote className="text-gray-700 italic">
                    "Passionate about creating scalable solutions and mentoring the next generation of developers."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-navy-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;