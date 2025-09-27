import React from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';

const ExperienceCard = ({ experience, index }) => (
  <div className="relative">
    {/* Timeline line */}
    {index !== portfolioData.experience.length - 1 && (
      <div className="absolute left-6 top-20 w-0.5 h-full bg-gray-300"></div>
    )}
    
    {/* Timeline dot */}
    <div className="absolute left-4 top-6 w-4 h-4 bg-navy-600 rounded-full border-4 border-white shadow-lg"></div>
    
    {/* Content */}
    <div className="ml-16">
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex flex-wrap justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{experience.position}</h3>
            <h4 className="text-lg text-navy-700 font-medium mb-2">{experience.company}</h4>
          </div>
          <div className="text-right">
            <div className="flex items-center text-gray-500 mb-1">
              <Calendar size={16} className="mr-1" />
              <span className="text-sm">{experience.duration}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {experience.description}
        </p>
        
        <div>
          <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
          <div className="grid gap-2">
            {experience.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <CheckCircle className="text-navy-600 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700 text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Work <span className="text-navy-800">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through my professional career, highlighting key roles and achievements in frontend engineering and leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h3>
          <div className="bg-gradient-to-br from-navy-50 to-gray-50 rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-navy-800 mb-2">
                Indian Institute of Technology, Patna
              </h4>
              <p className="text-lg text-gray-600 mb-4">Bachelor's Degree in Engineering</p>
              <p className="text-gray-500 mb-6">2015 - 2019</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-navy-600" size={16} />
                  <span>Strong CS foundation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-navy-600" size={16} />
                  <span>Coding competitions</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-navy-600" size={16} />
                  <span>Academic excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;