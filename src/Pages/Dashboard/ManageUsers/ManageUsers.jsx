import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const ManageUsers = () => {

    const axiosSecure = UseAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['biodata'],
        queryFn: async () => {
            const res = await axiosSecure.get('/biodata');
            return res.data;
        }
    });

    const handleMakeAdmin = id => {
        axiosSecure.patch(`/biodata/admin/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "success!",
                        text: "Admin added successfully",
                        icon: "success"
                    });
                }
            })
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/biodata/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "BioData has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div className="ml-10">
            <div className="flex justify-between py-4 bg-gray-200 p-3">
                <div className=" flex-1"><h1 className="text-3xl font-semibold text-[#ff9902] text-end">All users</h1></div>
                <div className="flex-1"> <h1 className="text-3xl font-semibold text-[#ff9902] text-end">Total users:{users.length}</h1></div>
            </div>

            <div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map(item => <tr key={item._id} className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {item.Name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        { item.role === 'admin'? 'Admin':
                                            <button
                                                onClick={() => handleMakeAdmin(item._id)} >Make Admin
                                            </button>
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageUsers;