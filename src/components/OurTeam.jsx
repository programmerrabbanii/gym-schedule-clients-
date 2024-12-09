import React from "react";
import member1Image from "../assets/team-1.png"; 
import member2Image from "../assets/team-2.png";
import member3Image from "../assets/team-3.png";
import member4Image from "../assets/team-4.png";

const OurTeam = () => {
  return (
    <section className="py-16 bg-gray-50 text-white mt-10 ">
      <div className="container mx-auto text-center w-11/12 ">
        <h2 className="text-4xl font-bold text-black hover:text-red-500 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Team Member 1 */}
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl">
            <img
              src={member1Image}
              alt="John Doe"
              className="w-full h-56 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white hover:text-red-500">John Doe</h3>
              <p className="text-xl text-gray-400">CEO</p>
              <p className="text-gray-300 mt-4">
                John has over 20 years of experience in the industry and is passionate about building innovative products.
              </p>
            </div>
          </div>
           
          {/* Team Member 2 */}
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl">
            <img
              src={member2Image}
              alt="Jane Smith"
              className="w-full h-56 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white hover:text-red-500">Jane Smith</h3>
              <p className="text-xl text-gray-400">CTO</p>
              <p className="text-gray-300 mt-4">
                Jane is an expert in technology and leads our development team to create cutting-edge solutions.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl">
            <img
              src={member3Image}
              alt="Michael Brown"
              className="w-full h-56 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white hover:text-red-500">Michael Brown</h3>
              <p className="text-xl text-gray-400">Lead Developer</p>
              <p className="text-gray-300 mt-4">
                Michael is a talented developer who loves coding and solving complex problems.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl">
            <img
              src={member4Image}
              alt="Emily Johnson"
              className="w-full h-56 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white hover:text-red-500">Emily Johnson</h3>
              <p className="text-xl text-gray-400">Marketing Head</p>
              <p className="text-gray-300 mt-4">
                Emily is responsible for creating effective marketing strategies and building our brand presence.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
