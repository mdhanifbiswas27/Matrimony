import Banner from "./Banner";
import Members from "./Members";
import Review from "./Review";
import SuccessCounter from "./SuccessCounter";




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto"><Members></Members></div>
      <SuccessCounter></SuccessCounter>
      <div className="bg-[#ff9902] bg-opacity-10">
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;