import { useEffect } from "react";
import { useState } from "react";
import Cart from "../../Shared/Cart";


const Members = () => {
    const [members, setMembers] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/user')
    //     .then(res=> res.json())
    //     .then(data => setMembers(data))
    // },[])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('http://localhost:5000/user');
                const data = await response.json();
                console.log('Fetched data:', data);
                const sortedCards = [...data].sort((a, b) => b.Age - a.Age);
                setMembers(sortedCards);
            } catch(error){
                console.log(error);
            }
        };

         fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-center my-10 font-bold text-[50px]">Our Premium Members</h1>
            <div className="grid grid-cols-3">
                {
                    members.map(item => <Cart key={item._id} item={item}></Cart>)
                }
            </div>
        </div>
    );
};

export default Members;


