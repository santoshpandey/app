import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Contact = () => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-navy-800">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and leadership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking for a technical leader, want to discuss a project, 
                or just want to connect with a fellow developer, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-navy-50 transition-colors duration-200 transform hover:scale-105"
                >
                  <div className="bg-navy-100 p-3 rounded-lg mr-4">
                    <method.icon className="text-navy-700" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{method.label}</div>
                    <div className="text-gray-600">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-navy-50 to-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Response Promise</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-800">&lt; 24h</div>
                  <div className="text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-800">100%</div>
                  <div className="text-gray-600">Reply Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-600">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500 transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;