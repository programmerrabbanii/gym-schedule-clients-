import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const updateData=useLoaderData()
    const {title,date, day,time,_id}=updateData
    const handleUpdate=(e,id)=>{
      e.preventDefault()
      
      console.log(id);
        fetch(`http://localhost:5000/schedule/${id}`,{
            method:"PATCH",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire(
                'Data updated successfully!'
            )
        })

    }
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Update Gym Schedule
        </h1>
        <form  onSubmit={(e)=>handleUpdate(e,_id)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Title</label>
              <input
                defaultValue={title}
                name="title"
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Date</label>
              <input
                defaultValue={date}
                name="date"
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Day</label>
              <select
                defaultValue={day}
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
                defaultValue={time}
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
              Update Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
