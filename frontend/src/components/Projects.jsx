import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';
import { portfolioData } from '../data/mock';

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'bg-green-100 text-green-800';
      case 'Development':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Project Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
      </div>

      {/* Technologies */}
      <div className="p-6 border-b border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <Code size={16} className="mr-2 text-navy-600" />
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-navy-200 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="p-6 border-b border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <Database size={16} className="mr-2 text-navy-600" />
          Key Features
        </h4>
        <div className="grid gap-2">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="p-6">
        <div className="flex space-x-3">
          <button className="flex-1 bg-navy-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-navy-900 transition-colors duration-200 flex items-center justify-center">
            <ExternalLink size={16} className="mr-2" />
            View Project
          </button>
          <button className="flex-1 border-2 border-navy-800 text-navy-800 px-4 py-2 rounded-lg font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200 flex items-center justify-center">
            <Github size={16} className="mr-2" />
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-navy-800">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development, 
            scalable architecture, and user-centric design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new and exciting projects. Check back soon for updates, 
              or feel free to reach out if you'd like to collaborate on something innovative.
            </p>
            <div className="flex justify-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Smartphone className="mr-2" size={20} />
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center">
                <Code className="mr-2" size={20} />
                <span>Web Applications</span>
              </div>
              <div className="flex items-center">
                <Database className="mr-2" size={20} />
                <span>Backend Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;