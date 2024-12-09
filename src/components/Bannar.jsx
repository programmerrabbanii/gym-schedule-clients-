import React from 'react';
import bannarImg from '../assets/hero_bg_1_2.png';

const Bannar = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bannarImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h4 className="text-lg md:text-xl font-medium text-gray-200 mb-2">
          Welcome to Our Company
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          The Best Fitness Studio in Town
        </h2>
        <button className="bg-red-500 hover:bg-black text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-2xl transition duration-300">
          Make Appointment
        </button>
      </div>

      
    </div>
  );
};
 
export default Bannar;
