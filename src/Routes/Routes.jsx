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
import EditBioData from "../Pages/Dashboard/Pages/EditBiodata/EditBioData";
import ViewBioData from "../Pages/Dashboard/Pages/ViewBiodata/ViewBioData";
import GotMarried from "../Pages/Dashboard/Pages/GotMarried/GotMarried";
import AdminDashboard from "../Pages/Dashboard/Pages/AdminDashBoard/AdminDashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import Welcome from "../Shared/Welcome";
import AdminRoute from "./AdminRoute";

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

    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path:'/dashboard/editBiodata',
                element:<EditBioData></EditBioData>
            },
            {
                path:'/dashboard/viewBioData',
                element:<ViewBioData></ViewBioData>
            },
            {
              path:'/dashboard/gotmarried',
              element:<GotMarried></GotMarried>
            },
            {
               path: '/dashboard/admindashboard',
               element: <AdminDashboard></AdminDashboard>
            },
            {
                path: '/dashboard/manageusers',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
]);

export default router;