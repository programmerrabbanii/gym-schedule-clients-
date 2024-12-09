import React from 'react';
import { NavLink } from 'react-router-dom';

const OurMission = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        {/* Message */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Sorry, this page is currently under maintenance.
        </h3>
        <p className="text-gray-600 mb-6">
          We are working hard to bring updates soon. Thank you for your
          patience!
        </p>

        {/* Button */}
        <NavLink
          to="/"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition duration-300"
        >
          Go to Home
        </NavLink >
      </div>
    </div>
    );
};

export default OurMission;