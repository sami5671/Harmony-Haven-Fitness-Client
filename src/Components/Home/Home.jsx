import Banner from "../Banner/Banner";
import OurAllServices from "../OurAllServices/OurAllServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-6xl text-center">Our Services</h2>
      <OurAllServices></OurAllServices>
    </div>
  );
};

export default Home;
