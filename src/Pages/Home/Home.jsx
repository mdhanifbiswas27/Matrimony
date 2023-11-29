import Banner from "./Banner";
import Members from "./Members";
import SuccessCounter from "./SuccessCounter";




const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <div className="max-w-screen-xl mx-auto"><Members></Members></div>
        <SuccessCounter></SuccessCounter>
    </div>
  );
};

export default Home;