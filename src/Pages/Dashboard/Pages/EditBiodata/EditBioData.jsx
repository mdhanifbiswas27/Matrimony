import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EditBioData = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="px-10 ">
            <h1 className="text-[40px] text-center font-bold mb-6">Create OR Update Your Bio Data</h1>

            <div className="mx-auto">

                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Select Your Gender:</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="US">Man</option>
                                <option value="CA">Women</option>
                            </select>
                        </p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your name:</h1>
                        <input className="w-[350px] rounded-md" type="text" />
                    </div>
                </div>

                {/* second input  */}

                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your name:</h1>
                        <input className="w-[350px] rounded-md" type="text" />
                    </div>

                    <div>
                        <p className=" mb-2 text-lg font-medium text-gray-900 dark:text-white">Input You Date of Birth</p>
                        <DatePicker className="mr-[-45px] rounded-md w-[350px]" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>
                </div>
{/* third section */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Height</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[160px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="CA">5"</option>
                                <option value="US">5"1</option>
                                <option value="US">5"2</option>
                                <option value="US">5"3</option>
                                <option value="US">5"4</option>
                                <option value="US">5"5</option>
                                <option value="US">5"6</option>
                                <option value="US">5"7</option>
                                <option value="US">5"8</option>
                                <option value="US">5"9</option>
                                <option value="US">5"10</option>
                                <option value="US">5"11</option>
                                <option value="US">6"</option>
                            </select>
                        </p>
                    </div>
                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Weight:</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[160px]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>39</option>
                                <option value="US">40</option>
                                <option value="CA">42</option>
                                <option value="CA">44</option>
                                <option value="CA">46</option>
                                <option value="CA">48</option>
                                <option value="CA">42</option>
                                <option value="CA">50</option>
                                <option value="CA">52</option>
                                <option value="CA">55</option>
                                <option value="CA">57</option>
                                <option value="CA">60</option>
                                <option value="CA">62</option>
                                <option value="CA">64</option>
                                <option value="CA">66</option>
                                <option value="CA">68</option>
                                <option value="CA">70</option>
                                <option value="CA">75</option>
                                <option value="CA">80</option>
                                <option value="CA">85</option>
                                <option value="CA">90</option>
                                <option value="CA">95</option>
                                <option value="CA">100</option>
                            </select>
                        </p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Age</h1>
                        <input className="w-[350px] rounded-md" type="text" />
                    </div>
                </div>
                {/* forth section */}

                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Occupation</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="US">Doctor</option>
                                <option value="CA">Nurse</option>
                                <option value="CA">Business</option>
                                <option value="CA">Driver</option>
                                <option value="CA">Job</option>
                            </select>
                        </p>
                    </div>

                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your race</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="US">Black</option>
                                <option value="CA">white</option>
                                <option value="CA">Brown</option>
                            </select>
                        </p>
                    </div>
                </div>
                {/* fifth */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Father's name:</h1>
                        <input className="w-[350px] rounded-md" type="text" />
                    </div>

                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Mothers's name:</h1>
                        <input className="w-[360px] mr-[-45px] rounded-md" type="text" />
                    </div>

                    
                </div>
                {/* sixth section */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Permanent Division</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="US">Dhaka</option>
                                <option value="CA">Khulna</option>
                                <option value="CA">Rajshahi</option>
                                <option value="CA">chattogram</option>
                                <option value="CA">sylhet</option>
                                <option value="CA">Rangpur</option>
                            </select>
                        </p>
                    </div>

                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Present Division</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                                <option value="US">Dhaka</option>
                                <option value="CA">Khulna</option>
                                <option value="CA">Rajshahi</option>
                                <option value="CA">chattogram</option>
                                <option value="CA">sylhet</option>
                                <option value="CA">Rangpur</option>
                            </select>
                        </p>
                    </div>
                </div>
                {/* seventh section */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Expected partner Weight:</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                                <option selected>39</option>
                                <option value="US">40</option>
                                <option value="CA">42</option>
                                <option value="CA">44</option>
                                <option value="CA">46</option>
                                <option value="CA">48</option>
                                <option value="CA">42</option>
                                <option value="CA">50</option>
                                <option value="CA">52</option>
                                <option value="CA">55</option>
                                <option value="CA">57</option>
                                <option value="CA">60</option>
                                <option value="CA">62</option>
                                <option value="CA">64</option>
                                <option value="CA">66</option>
                                <option value="CA">68</option>
                                <option value="CA">70</option>
                                <option value="CA">75</option>
                                <option value="CA">80</option>
                                <option value="CA">85</option>
                                <option value="CA">90</option>
                                <option value="CA">95</option>
                                <option value="CA">100</option>
                            </select>
                        </p>
                    </div>

                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Expected partner Height</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="CA">5"</option>
                                <option value="US">5"1</option>
                                <option value="US">5"2</option>
                                <option value="US">5"3</option>
                                <option value="US">5"4</option>
                                <option value="US">5"5</option>
                                <option value="US">5"6</option>
                                <option value="US">5"7</option>
                                <option value="US">5"8</option>
                                <option value="US">5"9</option>
                                <option value="US">5"10</option>
                                <option value="US">5"11</option>
                                <option value="US">6"</option>
                            </select>
                        </p>
                    </div>
                </div>
                {/* eight section */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Expect partner Age:</h1>
                        <input className="w-[350px] rounded-md" type="text" />
                    </div>

                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Phone number:</h1>
                        <input className="w-[350px] rounded-md mr-[-45px]" type="text" required/>
                    </div>
                </div>
                {/* last section */}
                <div className="flex items-center  gap-5 w-[700px] mx-auto">
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Email:</h1>
                        <input className="w-[750px] rounded-md" type="email" required />
                    </div>
                </div>

                <div className="flex justify-center my-9"><button className="btn px-5 py-2 bg-[#ff9902] rounded-lg text-white text-center mx-auto">Update</button></div>

            </div>

        </div>
    );
};

export default EditBioData;