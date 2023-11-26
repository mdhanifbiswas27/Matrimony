import Banner from "./Banner";
import Members from "./Members";




const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <div className="max-w-screen-xl mx-auto"><Members></Members></div>
    </div>
  );
};

export default Home;