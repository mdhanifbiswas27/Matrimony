import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from '../../assets/pngtree-wedding-logo-template-brand-branding-picture-image_8319025.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar";
import UseAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {

  // get is admin vlue from backend
  const [isAdmin] = UseAdmin();

 console.log('check admin',isAdmin)
  const { logOut } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogut = () => {
    logOut()
      .then(() => {

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
      .catch(error => {
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
      <div className="min-w-[280px] min-h-screen bg-[#ff9902] py-5 px-5">
        <img className="h-[150px] w-[150px] bg-white rounded-full mx-auto" src={logo} alt="" />
        <h1 className="text-[30px] font-bold text-white  text-center ">PureBond</h1>
        <hr className="my-8"></hr>
        <ul className="text-[24px] font-semibold text-white ml-3">
          {
            isAdmin ? <>

              <Link to='/dashboard/admindashboard'><li className="my-3">Admin Dashboard</li></Link>
              <Link to='/dashboard/manageusers'><li className="my-3">Manage Users</li></Link>
              <Link><li className="my-3">Approved Premium</li></Link>
              <Link><li className="my-3">Approved Contact Request</li></Link>
              <li className="my-3 btn "><button onClick={handleLogut} className="px-4 py-1 rounded-md bg-white text-[#ff9902]">Logout</button></li>
            </>
              :
              <>
                <Link to='/dashboard/editBiodata'><li className="my-3">Edit Biodata</li></Link>
                <Link to='/dashboard/viewBioData'><li className="my-3">View Biodata</li></Link>
                <Link><li className="my-3">My Contact Request</li></Link>
                <Link><li className="my-3">Favourites Biodata</li></Link>
                <Link to='/dashboard/gotmarried'><li className="my-3">Got Married</li></Link>
                <li className="my-2 btn "><button onClick={handleLogut} className="px-4 py-1 rounded-md bg-white text-[#ff9902]">Logout</button></li>
              </>
          }
        </ul>
      </div>
      <div className="flex-1 py-24">
        <Navbar></Navbar>
        <Outlet>

        </Outlet>
      </div>
    </div>
  );
};

export default Dashboard;