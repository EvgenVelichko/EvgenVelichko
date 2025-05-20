import React from 'react';
import { Globe, Code, Server } from 'lucide-react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-amber-500 group">
      <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-amber-500 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom website development of any complexity with clean code and modern design principles.',
      icon: <Globe size={40} />
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive, intuitive user interfaces using modern JavaScript frameworks like React.',
      icon: <Code size={40} />
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs using Python and other technologies.',
      icon: <Server size={40} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            MY <span className="text-amber-500">SERVICES</span>
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I offer a range of services to help businesses and individuals create
            effective web solutions tailored to their specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};