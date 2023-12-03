import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from '../../assets/pngtree-wedding-logo-template-brand-branding-picture-image_8319025.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Dashboard = () => {
    const {logOut} = useContext(AuthContext)
   const navigate = useNavigate();
    const handleLogut = ()=>{
        logOut()
        .then(()=>{
            
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
        })
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
              navigate('/');
        })
    }
    return (
        <div className="max-w-screen-xl mx-auto flex ">
            <div className="min-w-[280px] min-h-screen bg-[#ff9902] py-5">
                <img className="h-[150px] w-[150px] bg-white rounded-full mx-auto" src={logo} alt="" />
                <h1 className="text-[30px] font-bold text-white  text-center ">PureBond</h1>
                    <hr className="my-8"></hr>
                    <ul className="text-[24px] font-semibold text-white ml-10">
                       <Link to='/dashboard/editBiodata'><li className="my-2">Edit Biodata</li></Link>
                       <Link to='/dashboard/viewBioData'><li className="my-2">View Biodata</li></Link>
                       <Link><li className="my-2">My Contact Request.</li></Link>
                       <Link><li className="my-2">Favourites Biodata</li></Link>
                      <li className="my-2 btn "><button onClick={handleLogut} className="px-4 py-1 rounded-md bg-white text-[#ff9902]">Logout</button></li>
                    </ul>
            </div>
            <div className="flex-1 py-24">
              <h2>Welcome to dashboard</h2>
                <Outlet>
                    
                </Outlet>
            </div>
        </div>
    );
};

export default Dashboard;