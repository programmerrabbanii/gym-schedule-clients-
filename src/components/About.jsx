import { NavLink } from "react-router-dom";
import aboutimg from "../assets/about_1-1.png";
import abouticon from "../assets/about-icon.svg";

const About = () => {
  return (
    <div className="w-11/12 mx-auto mt-16">
      <div className="min-h-screen">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={aboutimg}
              alt="About Us"
              className="w-full lg:max-w-md rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Unlock Your Full Potential, <br /> Achieve Your Goals.
            </h1>
            <p className="text-gray-600 text-lg">
              Welcome to Fitmas, your ultimate destination for achieving your
              fitness goals. We understand the importance of leading a healthy
              lifestyle and provide a top-notch fitness facility to support you
              in your fitness journey.
            </p>

            {/* Navigation Links */}
            <div className="space-y-3">
              <div className="flex gap-6">
                <NavLink
                  to="/mission"
                  className="text-lg font-medium text-gray-700 hover:text-red-600 transition duration-300"
                >
                  Our Mission
                </NavLink>
                <NavLink
                  to="/goal"
                  className="text-lg font-medium text-gray-700 hover:text-red-600 transition duration-300"
                >
                  Our Goal
                </NavLink>
                <NavLink
                  to="/vision"
                  className="text-lg font-medium text-gray-700 hover:text-red-600 transition duration-300"
                >
                  Our Vision
                </NavLink>
              </div>
              <p className="border-b border-gray-300"></p>
            </div>

            {/* Info Card */}
            <div className="flex items-center gap-4 bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <img
                src={abouticon}
                alt="Icon"
                className="w-16 h-16 object-contain"
              />
              <p className="text-gray-600">
                Gyms play a vital role in promoting an active and healthy
                lifestyle. They provide a supportive and motivating environment
                for individuals to engage in regular physical activity.
              </p>
            </div>

            {/* Call to Action Button */}
            <div>
              <button className="btn bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
