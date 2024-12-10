import React from "react";
import { useLoaderData } from "react-router-dom";

const AllSchedule = () => {
  const scheduleData = useLoaderData();
  console.log(scheduleData);

  return (
    <div className="p-4">
      
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-lg w-80 focus:ring-2 focus:ring-pink-500"
        /> 
      </div>

      
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Serial</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Day</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Time</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-4 py-2 text-center">
                No Data Found
              </td>
            </tr>
          ) : (
            scheduleData.map((schedule, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{schedule.title}</td>
                <td className="px-4 py-2">{schedule.day}</td>
                <td className="px-4 py-2">{schedule.date}</td>
                <td className="px-4 py-2">{schedule.time}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button className="bg-pink-500 text-white px-3 py-2 rounded-lg">🗑️</button>
                  <button className="bg-pink-500 text-white px-3 py-2 rounded-lg">✏️</button>
                  <button className="bg-pink-500 text-white px-3 py-2 rounded-lg">✔️</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllSchedule;
