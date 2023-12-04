import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../../Provider/AuthProvider";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const EditBioData = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const handleUpdateBioData = async (event) => {
    event.preventDefault();
    const form = event.target;

    const BiodataType = form.BiodataType.value;
    const Name = form.Name.value;
    const ProfileImage = form.ProfileImage.value;
    const dateofbirth = form.dateofbirth.value;
    const height = form.height.value;
    const occupation = form.occupation.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const division = form.division.value;
    const partnerWeight = form.partnerWeight.value;
    const partnerAge = form.partnerAge.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const updateBioData = {
      BiodataType,
      Name,
      ProfileImage,
      dateofbirth,
      height,
      occupation,
      fatherName,
      motherName,
      division,
      partnerWeight,
      partnerAge,
      phone,
      email
    };

    
   

    try {
      const response = await axiosSecure.put(`/biodata/${userEmail}`, updateBioData);
      console.log('Data updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="px-10 ">
        <h1 className="text-[40px] text-center font-bold mb-6">Edit Your Bio Data</h1>

        <form onSubmit={handleUpdateBioData}>
            <div className="mx-auto">

                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Select Your Gender:</label>
                            <select name="BiodataType" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="Man">Man</option>
                                <option value="Women">Women</option>
                            </select>
                        </p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your name:</h1>
                        <input name="Name" className="w-[350px] rounded-md" type="text" />
                    </div>
                </div>

                {/* second input  */}

                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Give Photo URL:</h1>
                        <input name="ProfileImage" className="w-[350px] rounded-md" type="text" />
                    </div>



                    <div>
                        <p className=" mb-2 text-lg font-medium text-gray-900 dark:text-white">Input You Date of Birth</p>
                        <DatePicker name="dateofbirth" className="mr-[-45px] rounded-md w-[350px]" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>
                </div>
                {/* third section */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Height</label>
                            <select name="height" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[160px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="5">5"</option>
                                <option value="5.1">5"1</option>
                                <option value="5.2">5"2</option>
                                <option value="5.3">5"3</option>
                                <option value="5.4">5"4</option>
                                <option value="5.5">5"5</option>
                                <option value="5.6">5"6</option>
                                <option value="5.7">5"7</option>
                                <option value="5.8">5"8</option>
                                <option value="5.9">5"9</option>
                                <option value="5.10">5"10</option>
                                <option value="5.11">5"11</option>
                                <option value="6">6"</option>
                            </select>
                        </p>
                    </div>
                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Weight:</label>
                            <select name="weight" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[160px]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="42">42</option>
                                <option value="44">44</option>
                                <option value="46">46</option>
                                <option value="48">48</option>
                                <option value="42">42</option>
                                <option value="50">50</option>
                                <option value="52">52</option>
                                <option value="55">55</option>
                                <option value="57">57</option>
                                <option value="60">60</option>
                                <option value="62">62</option>
                                <option value="64">64</option>
                                <option value="66">66</option>
                                <option value="68">68</option>
                                <option value="70">70</option>
                                <option value="75">75</option>

                            </select>
                        </p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Age</h1>
                        <input name="Age" className="w-[350px] rounded-md" type="text" />
                    </div>
                </div>
                {/* forth section */}

                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Occupation</label>
                            <select name="occupation" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Business">Business</option>
                                <option value="Driver">Driver</option>
                                <option value="Job">Job</option>
                            </select>
                        </p>
                    </div>

                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your race</label>
                            <select name="race" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="Black">Black</option>
                                <option value="white">white</option>
                                <option value="Brown">Brown</option>
                            </select>
                        </p>
                    </div>
                </div>
                {/* fifth */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Father's name:</h1>
                        <input name="fatherName" className="w-[350px] rounded-md" type="text" />
                    </div>

                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Mothers's name:</h1>
                        <input name="motherName" className="w-[360px] mr-[-45px] rounded-md" type="text" />
                    </div>


                </div>
                {/* sixth section */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Permanent Division</label>
                            <select name="division" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="chattogram">chattogram</option>
                                <option value="sylhet">sylhet</option>
                                <option value="Rangpur">Rangpur</option>
                            </select>
                        </p>
                    </div>

                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Present Division</label>
                            <select name="psivision" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="chattogram">chattogram</option>
                                <option value="sylhet">sylhet</option>
                                <option value="Rangpur">Rangpur</option>
                            </select>
                        </p>
                    </div>
                </div>
                {/* seventh section */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Expected partner Weight:</label>
                            <select name="partnerWeight" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="42">42</option>
                                <option value="44">44</option>
                                <option value="46">46</option>
                                <option value="48">48</option>
                                <option value="42">42</option>
                                <option value="50">50</option>
                                <option value="52">52</option>
                                <option value="55">55</option>
                                <option value="57">57</option>
                                <option value="60">60</option>
                                <option value="62">62</option>
                                <option value="64">64</option>
                                <option value="66">66</option>
                                <option value="68">68</option>
                                <option value="70">70</option>
                                <option value="75">75</option>
                            </select>
                        </p>
                    </div>

                    <div className="ml-[-14px]">
                        <p className="px-4 py-3 ">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Expected partner Height</label>
                            <select name="pheight" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="5">5"</option>
                                <option value="5.1">5"1</option>
                                <option value="5.2">5"2</option>
                                <option value="5.3">5"3</option>
                                <option value="5.4">5"4</option>
                                <option value="5.5">5"5</option>
                                <option value="5.6">5"6</option>
                                <option value="5.7">5"7</option>
                                <option value="5.8">5"8</option>
                                <option value="5.9">5"9</option>
                                <option value="5.10">5"10</option>
                                <option value="5.11">5"11</option>

                            </select>
                        </p>
                    </div>
                </div>
                {/* eight section */}
                <div className="flex items-center justify-between gap-5 w-[700px] mx-auto">
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Expect partner Age:</h1>
                        <input name="partnerAge" className="w-[350px] rounded-md" type="text" />
                    </div>

                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Phone number:</h1>
                        <input name="phone" className="w-[350px] rounded-md mr-[-45px]" type="text" required />
                    </div>
                </div>
                {/* last section */}
                <div className="flex items-center  gap-5 w-[700px] mx-auto">
                    <div>
                        <h1 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Write Your Email:</h1>
                        <input name="email" className="w-[750px] rounded-md" type="email" required />
                    </div>
                </div>

                <div className="flex justify-center my-9"><button className="btn px-5 py-2 bg-[#ff9902] rounded-lg text-white text-center mx-auto">Update</button></div>

            </div>
        </form>

    </div>
);
};

export default EditBioData;



















