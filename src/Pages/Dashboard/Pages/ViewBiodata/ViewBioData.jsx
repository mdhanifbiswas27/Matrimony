import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";


const ViewBioData = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="px-10">
            <h2 className="text-[40px] text-center font-bold ">Your Bio Data </h2>
            <div className="py-10">
                <img className="mx-auto rounded-lg" src={user?.photoURL} alt="" />
                <p className="text-center mt-5 font-semibold text-[30px]">{user?.displayName}</p>
                <p>detials:{}</p>
            </div>
        </div>
    );
};

export default ViewBioData;