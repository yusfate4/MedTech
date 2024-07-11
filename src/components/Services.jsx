import React from 'react';

const Services = () => {
  return (
    <section id="services" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-md rounded-md">
          <h4 className="text-xl font-bold mb-2">Service One</h4>
          <p className="text-gray-700">Description of service one.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md">
          <h4 className="text-xl font-bold mb-2">Service Two</h4>
          <p className="text-gray-700">Description of service two.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md">
          <h4 className="text-xl font-bold mb-2">Service Three</h4>
          <p className="text-gray-700">Description of service three.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
