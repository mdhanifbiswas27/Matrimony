import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProfileDetails from "../Pages/ProfileDetails/ProfileDetails";
import BioData from "../Pages/BioData/BioData";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Shared/details";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
               path:'/login' ,
               element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/ProfileDetails/:_id',
                element:<PrivateRoutes><ProfileDetails></ProfileDetails></PrivateRoutes>,
                loader:({params})=> fetch(`http://localhost:5000/user/${params._id}`),
            },
            {
                path:'/biodata',
                element:<PrivateRoutes><BioData></BioData></PrivateRoutes>,
            },
            {
                path:'/biodataDetails/:_id',
                element:<PrivateRoutes><Details></Details></PrivateRoutes>,
                loader:({params})=> fetch(`http://localhost:5000/biodata/${params._id}`)
            },
            {
                path:'/dashboard',
                element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
            }
            
        ]

    }
]);

export default router;