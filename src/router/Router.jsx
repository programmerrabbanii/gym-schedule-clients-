import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import AddSchedule from "../page/AddSchedule";
import AllSchedule from "../page/AllSchedule";
import Loging from "../page/Loging";
import Register from "../page/Register";

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
                element:<AllSchedule></AllSchedule>
            },
            {
                path:"/login",
                element:<Loging></Loging>
            },
            {
                path:"/register",
                element:<Register></Register>
            }

        ]

    }
])

export default router