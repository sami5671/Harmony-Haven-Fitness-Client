import Banner from "../Banner/Banner";
import OurAllServices from "../OurAllServices/OurAllServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <h2 className="mt-12 font-bold text-4xl lg:text-6xl text-center text-yellow-950">
        Our Services
        <hr />
      </h2>
      <OurAllServices></OurAllServices>
    </div>
  );
};

export default Home;
