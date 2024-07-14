import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h4 className="font-bold mb-2">What is MedTech?</h4>
          <p>MedTech is a solution that provides innovative healthcare services...</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h4 className="font-bold mb-2">How can I use MedTech?</h4>
          <p>You can start using MedTech by signing up on our website...</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h4 className="font-bold mb-2">What services does MedTech offer?</h4>
          <p>We offer a wide range of healthcare services including...</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
