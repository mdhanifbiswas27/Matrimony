import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/pngtree-wedding-logo-template-brand-branding-picture-image_8319025.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user,logOut}= useContext(AuthContext);
    // const userImg =user?.metadata?.photoURL;
   const navigate = useNavigate();
   const HandleLogout= ()=>{
      logOut()
      .then( ()=>{
         
         Swal.fire({
            title: "Log Out successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate('/')
      } )
      .catch(error=>{
        console.log(error);
        Swal.fire({
            title: "Something wrong try again",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
      })
   }


    const links = <>
        <li><Link>Home</Link></li>
        <li><Link to='/biodata'>Biodatas</Link></li>
        <li><Link>About Us</Link></li>
        <li><Link>Contact Us</Link></li>
        {user&& <li><Link to='/dashboard'>Dashboard</Link></li>}
        {
            user?<>
            <li className="cursor-pointer" onClick={HandleLogout}>LogOut</li>
            </>:<>
            <li><Link to='/login'>Login</Link></li>
            </>
        }
    </>
    return (


        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center  rtl:space-x-reverse">
                    <img src={logo} className="h-10 w-10 rounded-full" />
                    <span className="text-[#DBB256] self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PureBond</span>
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="user photo " />
                    </button>
                    
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                           {links}
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {links}
                    </ul>
                </div>
            </div>
        </nav>

    );

};

export default Navbar;