import React from 'react';
import { Code, Users, Wrench } from 'lucide-react';
import { portfolioData } from '../data/mock';

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{skill}</span>
      <span className="text-sm text-navy-600">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-gradient-to-r from-navy-600 to-navy-800 h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCard = ({ title, icon: Icon, items, isProgress = false }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-6">
      <div className="bg-navy-100 p-3 rounded-lg mr-4">
        <Icon className="text-navy-700" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    
    <div className="space-y-3">
      {isProgress ? (
        items.map((item, index) => (
          <SkillBar key={index} skill={item.name} level={item.level} />
        ))
      ) : (
        items.map((item, index) => (
          <div 
            key={index}
            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-navy-50 transition-colors duration-200"
          >
            <div className="w-2 h-2 bg-navy-600 rounded-full mr-3"></div>
            <span className="text-gray-700">{item}</span>
          </div>
        ))
      )}
    </div>
  </div>
);

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & <span className="text-navy-800">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, leadership capabilities, and the tools I use to deliver exceptional results.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <SkillCard
            title="Technical Skills"
            icon={Code}
            items={skills.technical}
            isProgress={true}
          />

          {/* Leadership Skills */}
          <SkillCard
            title="Leadership & Management"
            icon={Users}
            items={skills.leadership}
          />

          {/* Tools & Technologies */}
          <SkillCard
            title="Tools & Technologies"
            icon={Wrench}
            items={skills.tools}
          />
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I believe in staying current with the latest technologies and best practices. 
              Currently exploring AI/ML integration, advanced React patterns, and cloud architecture.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>• AI/ML Integration</span>
              <span>• Cloud Architecture</span>
              <span>• Performance Optimization</span>
              <span>• Team Scaling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;