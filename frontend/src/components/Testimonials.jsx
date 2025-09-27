import React from 'react';
import { Quote, Star } from 'lucide-react';
import { portfolioData } from '../data/mock';

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-6">
      <Quote className="text-navy-400 mr-3" size={32} />
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="text-yellow-400 fill-current" size={16} />
        ))}
      </div>
    </div>
    
    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
      "{testimonial.text}"
    </blockquote>
    
    <div className="flex items-center">
      <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mr-4">
        <span className="text-navy-800 font-semibold">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div>
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-gray-600 text-sm">{testimonial.position}</div>
        <div className="text-gray-500 text-sm">{testimonial.company}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What People <span className="text-navy-800">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from colleagues and team members I've had the privilege to work with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {testimonials.slice(0, 2).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Additional Testimonials Row */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.slice(2).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Additional testimonial note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            "Leadership is not about being in charge. It's about taking care of those in your charge."
          </p>
          <p className="text-gray-500 text-sm mt-2">- My Leadership Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;