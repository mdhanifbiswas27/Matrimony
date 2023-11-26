import { useEffect } from "react";
import { useState } from "react";
import Cart from "../../Shared/Cart";


const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(()=>{
        fetch('member.json')
        .then(res=> res.json())
        .then(data => setMembers(data))
    },[])

    return (
        <div>
            <h1 className="text-center my-10 font-bold text-[50px]">Our Premium Members</h1>
            <div className="grid grid-cols-3">
                {
                  members.map(item => <Cart key={item.BiodataID} item={item}></Cart>)  
                }
            </div>
        </div>
    );
};

export default Members;