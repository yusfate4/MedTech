import React from 'react';

const Review = () => {
  return (
    <section id="review" className="bg-gray-100 py-20">
      {/* <div className="container mx-aut text-center"> */}
        <div>
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="text-gray-700 mb-2">"MedTech has revolutionized our healthcare system."</p>
            <p className="font-bold">- Client One</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="text-gray-700 mb-2">"Incredible service and support."</p>
            <p className="font-bold">- Client Two</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="text-gray-700 mb-2">"Highly recommend MedTech to everyone."</p>
            <p className="font-bold">- Client Three</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
