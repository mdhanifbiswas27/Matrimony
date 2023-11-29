import Banner from "./Banner";
import HowWork from "./HowWork";
import Members from "./Members";
import Review from "./Review";
import SuccessCounter from "./SuccessCounter";




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto"><Members></Members></div>
      <div className="bg-gray-200">
        <HowWork></HowWork>
      </div>
      <SuccessCounter></SuccessCounter>
      <div className="bg-[#ff9902] bg-opacity-10">
        <Review></Review>
      </div>

    </div>
  );
};

export default Home;