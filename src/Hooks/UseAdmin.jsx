import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";


const UseAdmin = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = useContext(AuthContext);
    const {data : isAdmin,isPending : isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled : !!user?.email,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/biodata/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin ,isAdminLoading]
};

export default UseAdmin;

