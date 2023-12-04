import { useEffect, useState } from "react";
import BiodataDetails from "../../Shared/BiodataDetails";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const BioData = () => {
    const [biodata, setBiodata] = useState([]);
    const axiosSecure = UseAxiosSecure();

   
    useEffect(() => {
       
        const fetchData = async () => {
          try {
            
            const response = await axiosSecure.get('biodata');
            
            setBiodata(response.data);
          } 
          catch{error => console.error(error)} 
        };
    
        
        fetchData();
      }, [axiosSecure]); 

    return (
        <div className="max-w-screen-xl mx-auto py-9">
            <div className="grid grid-cols-6 gap-3">
                <div className="col-span-2">
                <div className="border-2 ">
                    <div className="border-b-2 bg-slate-200 px-5 py-5">
                        <h2 className="text-[24px] font-bold">Find Your special someone</h2>
                    </div>
                    <div>
                        <p className="px-4 py-3">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">I'm looking for a</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="US">Man</option>
                                <option value="CA">Women</option>
                            </select>
                        </p>
                        <div className="flex items-center justify-start">
                            <p className="px-4 py-3">
                                <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Age(In year)</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="20">21</option>
                                    <option value="20">22</option>
                                    <option value="20">23</option>
                                    <option value="20">24</option>
                                    <option value="20">25</option>
                                    <option value="20">26</option>
                                    <option value="20">27</option>
                                    <option value="20">28</option>
                                    <option value="20">29</option>
                                    <option value="20">30</option>
                                    <option value="20">31</option>
                                    <option value="20">32</option>
                                    <option value="20">33</option>
                                    <option value="20">34</option>
                                    <option value="20">35</option>
                                    <option value="20">36</option>
                                    <option value="20">37</option>
                                    <option value="20">38</option>
                                    <option value="20">39</option>
                                    <option value="20">40</option>
                                    <option value="20">41</option>
                                    <option value="20">41</option>
                                    <option value="20">42</option>
                                    <option value="20">43</option>
                                    <option value="20">44</option>
                                    <option value="20">45</option>

                                </select>
                            </p>
                            <p className="text-[16px] font-medium mt-7">To</p>
                            <p className="px-4 py-3">
                                <select id="countries" className="w-[100px] bg-gray-50 border mt-9 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="20">34</option>
                                    <option selected>35</option>
                                    <option value="20">36</option>
                                    <option value="20">37</option>
                                    <option value="20">38</option>
                                    <option value="20">39</option>
                                    <option value="20">40</option>
                                    <option value="20">41</option>
                                    <option value="20">41</option>
                                    <option value="20">42</option>
                                    <option value="20">43</option>
                                    <option value="20">44</option>
                                    <option value="20">45</option>
                                    <option value="20">46</option>
                                    <option value="20">47</option>
                                    <option value="20">48</option>
                                    <option value="20">49</option>
                                    <option value="20">50</option>
                                    <option value="20">51</option>
                                    <option value="20">52</option>
                                    <option value="20">53</option>
                                    <option value="20">54</option>
                                    <option value="20">55</option>
                                    <option value="20">56</option>
                                    <option value="20">57</option>
                                    <option value="20">58</option>
                                    <option value="20">59</option>
                                    <option value="20">60</option>
                                </select>
                            </p>
                        </div>
                        <p className="px-4 py-3">
                            <label className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white">Division</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Dhaka</option>
                                <option value="US">Chattagram</option>
                                <option value="CA">Rangpur</option>
                                <option value="CA">Barisal</option>
                                <option value="CA">Sylhet</option>
                                <option value="CA">Maymansign</option>
                                <option value="CA">Khulna</option>
                                <option value="CA">Rajshahi</option>
                            </select>
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#ff9902] px-7 py-3 rounded-lg text-white font-medium text-[20px] my-4">Search</button>
                    </div>
                </div>
                </div>

                <div className="col-span-4 border-2 ">
                    <div className="border-b-2 bg-slate-200 px-5 py-5">
                        <h2 className="text-[24px] font-bold">Find Your special someone</h2>
                    </div>
                    
                    <div className="grid grid-cols-2 px-3">
                        {
                          biodata.map(item => <BiodataDetails key={item._id} item={item}></BiodataDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioData;