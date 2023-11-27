import { Link } from "react-router-dom";


const Cart = ({ item }) => {
    const { Name, BiodataID, ProfileImage, PermanentDivision, Age, Occupation, BiodataType } = item;
    return (
        <div className="mb-7">


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[350px]" src={ProfileImage} alt="" />
                </a>
                <div className="p-5">


                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Name}</h5>
                    <p className="text-[16px] font-medium">BiodataType:{BiodataType}</p>
                    <p className="text-[16px] font-medium">Division:{PermanentDivision}</p>
                    <div className="flex gap-7">
                        <p className="text-[16px] font-medium">Age:{Age}</p>
                        <h1 className="text-[16px] font-medium">ID:{BiodataID}</h1>
                    </div>
                    <p className="text-[16px] font-medium">Profession:{Occupation}</p>
                    <p className="justify text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="flex justify-end">
                        <div>
                            <Link to='/details/:BiodataID'><a href="#" className=" justify-end inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#DBB256] rounded-lg hover:bg-[#DBB256] focus:ring-4 focus:outline-none ">
                                View Profile
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Cart;