import React from 'react';

const Signup = () => {
  return (
    <section id="signup" className="container mx-auto py-20">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded-md">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
