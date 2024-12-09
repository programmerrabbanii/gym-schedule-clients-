import React from "react";
import feature1 from "../assets/feature1.png.svg";
import feature2 from '../assets/feature-icon1-2.svg';
import feature3 from '../assets/feature-icon1-3.svg';

const Achive = () => {
  return (
    <div className="w-10/12 mx-auto bg-gray-50 mt-10 p-10 rounded-lg shadow-lg">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-black hover:text-red-600 transition duration-300">
          Our Achievements
        </h2>
        <p className="text-gray-600 mt-3">
          Unlock your potential with our proven methods and dedicated support.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 group">
          <img
            src={feature1}
            alt="Feature"
            className="w-20 mx-auto mb-4 group-hover:text-red-600 transition duration-300 filter group-hover:brightness-100 group-hover:grayscale-0"
            style={{ filter: "grayscale(100%) brightness(80%)" }}
          />
          <h4 className="uppercase text-black group-hover:text-red-600 font-semibold text-sm mb-2 transition duration-300">
            Healthier Life
          </h4>
          <h2 className="text-2xl font-semibold text-black group-hover:text-red-600 mb-4 transition duration-300">
            Achieve Your Goal
          </h2>
          <p className="text-gray-600 mb-6">
            We believe that with the right guidance, support, and mindset, you
            can accomplish anything you set your mind to.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition duration-300">
            View Class Schedule
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 group">
          <img
            src={feature2}
            alt="Feature"
            className="w-20 mx-auto mb-4 group-hover:text-red-600 transition duration-300 filter group-hover:brightness-100 group-hover:grayscale-0"
            style={{ filter: "grayscale(100%) brightness(80%)" }}
          />
          <h4 className="uppercase text-black group-hover:text-red-600 font-semibold text-sm mb-2 transition duration-300">
            Strength Training
          </h4>
          <h2 className="text-2xl font-semibold text-black group-hover:text-red-600 mb-4 transition duration-300">
            Build Your Strength
          </h2>
          <p className="text-gray-600 mb-6">
            Our expert trainers provide you with personalized training plans to
            achieve your fitness goals.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition duration-300">
            View Class Schedule
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 group">
          <img
            src={feature3}
            alt="Feature"
            className="w-20 mx-auto mb-4 group-hover:text-red-600 transition duration-300 filter group-hover:brightness-100 group-hover:grayscale-0"
            style={{ filter: "grayscale(100%) brightness(80%)" }}
          />
          <h4 className="uppercase text-black group-hover:text-red-600 font-semibold text-sm mb-2 transition duration-300">
            Group Fitness
          </h4>
          <h2 className="text-2xl font-semibold text-black group-hover:text-red-600 mb-4 transition duration-300">
            Train Together
          </h2>
          <p className="text-gray-600 mb-6">
            Experience the power of group training with motivating instructors
            and a supportive community.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition duration-300">
            View Class Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achive; 
