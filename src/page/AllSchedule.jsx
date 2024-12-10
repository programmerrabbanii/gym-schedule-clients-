import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllSchedule = () => {
  const scheduleData = useLoaderData();
  const [gymData,setGymData]=useState(scheduleData)
  const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
        fetch(`http://localhost:5000/schedule/${id}`,{
            method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
                const remaing=gymData.filter(data=> data._id !==id)
                setGymData(remaing)
            })
        
        }
      });

   
    console.log(id);
  }

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
          {gymData.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-4 py-2 text-center">
                No Data Found
              </td>
            </tr>
          ) : (
            gymData.map((schedule, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{schedule.title}</td>
                <td className="px-4 py-2">{schedule.day}</td>
                <td className="px-4 py-2">{schedule.date}</td>
                <td className="px-4 py-2">{schedule.time}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button onClick={()=>handleDelete(schedule._id)} className="bg-pink-500 text-white px-3 py-2 rounded-lg">🗑️</button>
                  <Link to={`/update/${schedule._id}`} className="bg-pink-500 text-white px-3 py-2 rounded-lg">✏️</Link>
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
