import { FaArrowRight } from "react-icons/fa";


const HowWork = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <h1 className="text-[42px] font-extrabold py-7">How Our Website work?</h1>
            <div className="">

                <div className="flex items-center text-[20px] font-semibold my-3 gap-2">
                    <FaArrowRight className="text-[20px]"></FaArrowRight >
                    <p>First register for free to see other profile!</p>
                </div>

                <div className="flex items-center text-[20px] font-semibold my-3 gap-2">
                    <FaArrowRight className="text-[20px]"></FaArrowRight >
                    <p>Users are required to provide biodata, including personal details, during profile setup.</p>
                </div>

                <div className="flex items-center text-[20px] font-semibold my-3 gap-2">
                    <FaArrowRight className="text-[20px]"></FaArrowRight >
                    <p>Users can utilize search features to find biodata of others on the platform. </p>
                </div>
                <div className="flex items-center text-[20px] font-semibold my-3 gap-2">
                    <FaArrowRight className="text-[20px]"></FaArrowRight >
                    <p>The platform encourages users to prioritize biodata when seeking connections. </p>
                </div>

                <div className="flex items-center text-[20px] font-semibold my-3 gap-2">
                    <FaArrowRight className="text-[20px]"></FaArrowRight >
                    <p>Once biodata is reviewed and preferences align, users can initiate contact through the platform's communication channels. </p>
                </div>
                <div className="flex items-center text-[20px] font-semibold my-3 gap-2">
                    <FaArrowRight className="text-[20px]"></FaArrowRight >
                    <p>The platform collaboration among users, enabling them to share ideas  and experiences through comments and interactive features. </p>
                </div>
                <div className="flex items-center text-[20px] font-semibold my-3 gap-2">
                    <FaArrowRight className="text-[20px]"></FaArrowRight >
                    <p>Get married and make a happy family! </p>
                </div>

            </div>
        </div>
    );
};

export default HowWork;