import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const OurAllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("cards.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <>
      <section className="container p-4 md:p-16 mx-auto mt-12 lg:mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((cards) => (
            <ServicesCard key={cards.id} cards={cards}></ServicesCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurAllServices;
