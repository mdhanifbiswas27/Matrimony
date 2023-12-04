import Swal from "sweetalert2";
import UseAxiosPublic from "../../../../Hooks/UseaxiosPublic";


const GotMarried = () => {
    const axiospublic = UseAxiosPublic();

    const handleSubmit = even => {
        even.preventDefault();
        const form = even.target;
        const photo = form.Photo.value;
        const successStoryText = form.successStoryText.value;
        const review ={photo, successStoryText};

        // send data to server
        axiospublic.post('review',review)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Review added successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })
    }
    return (
        <div className="ml-10">
            <p className="text-[35px] font-semibold text-center">Share Your Married Jour With Ous</p>

            <div className="flex justify-center mt-8">
                <div className="shadow-lg p-10 w-[500px] rounded-md">
                    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">


                        <div className="flex gap-4">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your BioData number</label>
                                <input name="YId" type="number" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partner bioData number</label>
                                <input name="pId" type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Couple photo URL</label>
                            <input name="Photo" type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Share Your Feelings</label>

                            <textarea name="successStoryText" className=" w-full rounded-md h-20"></textarea>
                        </div>
                        <button type="submit" className="text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-[#ff9902] ">Submit</button>
                    </form>
                </div>


            </div>

        </div>

    );
};

export default GotMarried;
