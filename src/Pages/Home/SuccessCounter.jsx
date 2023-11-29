import { FaPeopleGroup ,FaDiagramSuccessor} from "react-icons/fa6";
import { MdBoy , MdGirl } from "react-icons/md";



const SuccessCounter = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-10 ">
            <div className="text-center mb-10">
                <h2 className="text-center font-extrabold text-[40px] ">Our Results</h2>
                <p className="mx-auto  text-[16px] font-mono max-w-[700px] text-center">Join us on the journey of love and commitment, where our marriage website has become a beacon of success, bringing together hearts that resonate with the harmony of lasting partnerships.</p>
            </div>
            <div className="flex justify-around gap-4 mt-5">
                <div className="bg-opacity-70 p-5 bg-[#ff9902] h-[130px] w-[250px] text-center ">
                   <p className="text-[25px] text-white flex justify-center"> <FaPeopleGroup></FaPeopleGroup></p>
                    <p className="text-[20px] font-bold text-white">Total Biodata</p>
                    <p className="text-[20px] font-bold text-white">50K+</p>
                </div>
                <div className="bg-opacity-70 p-5 bg-[#ff9902] h-[130px] w-[250px] text-center ">
                    <p className="text-[25px] text-white flex justify-center"><MdGirl ></MdGirl ></p>
                    <p className="text-[20px] font-bold text-white">Total Girls</p>
                    <p className="text-[20px] font-bold text-white">30K</p>
                </div>
                <div className="p-5 bg-opacity-70 bg-[#ff9902] h-[130px] w-[250px] text-center ">
                  <p className="text-[25px] text-white flex justify-center">  <MdBoy></MdBoy></p>
                    <p className="text-[20px] font-bold text-white">Total Boys</p>
                    <p className="text-[20px] font-bold text-white">200K+</p>
                </div>
                <div className="p-5 bg-opacity-70 bg-[#ff9902] h-[130px] w-[250px] text-center ">
                    <p className="text-[25px] text-white flex justify-center"><FaDiagramSuccessor></FaDiagramSuccessor></p>
                    <p className="text-[20px] font-bold text-white">Marriages completed</p>
                    <p className="text-[20px] font-bold text-white">30K+</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessCounter;