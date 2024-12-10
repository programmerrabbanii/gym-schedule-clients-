import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import AddSchedule from "../page/AddSchedule";
import AllSchedule from "../page/AllSchedule";
import Loging from "../page/Loging";
import Register from "../page/Register";
import OurGoal from "../page/OurGoal";
import OurMission from "../page/OurMission";
import OurVision from "../page/OurVision";
import Update from "../page/Update";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/addschedule",
                element:<AddSchedule></AddSchedule>
            },
            {
                path:"/allschedule",
                element:<AllSchedule></AllSchedule>,
                loader: ()=>fetch('http://localhost:5000/schedule')
            },
            {
                path:"/login",
                element:<Loging></Loging>
            },
            { 
                path:"/register",
                element:<Register></Register>
            },
            {
                path:'/goal',
                element:<OurGoal></OurGoal>
            },
            {
                path:"/mission",
                element:<OurMission></OurMission>
            },
            {
                path:'/vision',
                element:<OurVision></OurVision>
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/schedule/${params.id}`)
                
            }

        ]

    }
])

export default router