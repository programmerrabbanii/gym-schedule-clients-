import React from "react";
import Swal from "sweetalert2";


const AddSchedule = () => {
    const handleAddSchedule=e=>{
        e.preventDefault()
        const title=e.target.title.value;
        const day=e.target.day.value;
        const time=e.target.time.value;
        const date=e.target.date.value;
        const scheduleInfo={title,day,time,date}
         fetch('http://localhost:5000/schedule',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(scheduleInfo)
         })
         .then(res=>res.json())
         .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work schedule time added",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         })
    } 

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Add Gym Schedule</h1>
        <form onSubmit={handleAddSchedule}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           
            <div>
              <label className="block text-sm font-semibold mb-1">Title</label>
              <input
                name="title"
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold mb-1">Date</label>
              <input
                name="date"
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold mb-1">Day</label>
              <select
              name="day"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>
            </div>

            
            <div>
              <label className="block text-sm font-semibold mb-1">Time</label>
              <input
               name="time"
                type="time"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 focus:outline-none"
            >
              Add Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchedule;
