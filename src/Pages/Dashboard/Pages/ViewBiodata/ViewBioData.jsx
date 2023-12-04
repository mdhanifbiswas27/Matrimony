import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";



const ViewBioData = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    const userEmail = user?.email;
    const [porfile, setProfile] = useState([1])

    console.log('loaded profile',porfile)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('biodata');
                console.log("Response:", response);

                // Assuming email is case-insensitive
                const filterData = response.data.filter(item => item.email && item.email.toLowerCase() === userEmail.toLowerCase());

                console.log("Filtered Data:", filterData);

                if (filterData.length > 0) {
                    setProfile([filterData[0]]);
                } else {
                    console.log("No matching data found for the user email.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [axiosSecure, userEmail]);
    return (

        <div className="px-10">

            <h2 className="text-[40px] text-center font-bold ">Your Bio Data </h2>
            <div className="py-10">
                <img className="mx-auto rounded-lg h-[250px] w-[250px]" src={user?.photoURL} alt="" />
                <p className="text-center mt-5 font-semibold text-[30px]">{user?.displayName}</p>
                <p>detials:{ }</p>
            </div>

            <div>


                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                porfile.map((porfile, index) => <span key={index}>
                                    <div>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Name
                </th>
                <td className="px-6 py-4">
                    {porfile.Name}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Email
                </th>
                <td className="px-6 py-4">
                    {porfile.email}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Age
                </th>
                <td className="px-6 py-4">
                    {porfile?.Age}
                </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Occupation
                </th>
                <td className="px-6 py-4">
                    {porfile?.occupation}
                </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Division
                </th>
                <td className="px-6 py-4">
                    {porfile?.Division}
                </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Fathers name
                </th>
                <td className="px-6 py-4">
                    {porfile?.FatherName}
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mothers name
                </th>
                <td className="px-6 py-4">
                    {porfile?.MotherName}
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Height
                </th>
                <td className="px-6 py-4">
                    {porfile?.height}
                </td>
            </tr>
        </div>


                                </span>)
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ViewBioData;