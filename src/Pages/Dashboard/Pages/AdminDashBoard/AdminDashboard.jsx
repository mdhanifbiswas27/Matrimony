import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";


const AdminDashboard = () => {
    const axiosSecure = UseAxiosSecure();
    const [totalUsers, setTotalUsers] = useState(0);
    const [womenUsers, setWomenUsers] = useState([0]);
    const [menUsers, setMenUsers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axiosSecure.get('biodata')
                const users = response.data;


                const women = users.filter(user => user.BiodataType === 'Female');
                const men = users.filter(user => user.BiodataType === 'Male');

                setTotalUsers(users);
                setWomenUsers(women);
                setMenUsers(men);
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };

        fetchData();
    }, [axiosSecure]);


    return (
        <div className="ml-10">
            <div className="py-3 text-center bg-gray-200 my-7"><p>Total BioData and separately Men and Women BioData</p></div>


            <div
                className="py-3 text-center bg-gray-200 flex justify-around">
                    <p>Total BioData</p> 
                    <p>{totalUsers.length}</p>
            </div>

            <div
                className="py-3 text-center  flex justify-around">
                    <p className="text-left">Total Male Biodata</p> 
                    <p>{menUsers.length}</p>
            </div>
            <div
                className="py-3 text-center bg-gray-200 flex justify-around">
                    <p className="text-left">Total Female Biodata</p> 
                    <p>{womenUsers.length}</p>
            </div>
            <div
                className="py-3 text-center  flex justify-around">
                    <p className="text-left">Total Premium Biodata</p> 
                    <p>6</p>
            </div>
            <div
                className="py-3 text-center bg-gray-200 flex justify-around">
                    <p className="text-left">Total Revenue</p> 
                    <p>5000$</p>
            </div>
           
           





            {/* <p> </p>
            <p>women:{womenUsers.length}</p>
            <p>{menUsers.length}</p> */}
        </div>
    );
};

export default AdminDashboard;