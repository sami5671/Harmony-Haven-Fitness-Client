import { useLoaderData, useParams } from "react-router-dom";
const ServiceDetails = () => {
  const services = useLoaderData();
  //   console.log(services);
  const { id } = useParams();
  const idInt = parseInt(id);
  //   console.log(idInt);
  const selectedService = services.find((parameter) => parameter.id === idInt);
  //   console.log(selectedService.price);

  // here i added Dynamic background
  const backgroundStyle = {
    backgroundImage: `url(${selectedService.image})`,
    backgroundBlendMode: "overlay",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "400px",
  };
  return (
    <>
      <div style={backgroundStyle}>
        <h2 className="text-3xl p-6 lg:text-5xl text-white text-center font-bold">
          <span className="text-5xl lg:text-6xl">{selectedService.name}</span>
        </h2>
      </div>
      <section className="container mx-auto p-4">
        {/* all details */}
        <div className="flex flex-col lg:flex-row mt-16 mb-24">
          <div>
            <h2 className="text-2xl">{selectedService.name}</h2>
            <p>
              <span>Price: $</span>
              {selectedService.price}
            </p>
            <p>{selectedService.description}</p>
            <button className="btn btn-ghost bg-lime-300 text-white mt-4 mb-4">
              Book Now
            </button>
          </div>
          <div>
            <img
              className="w-[500px] h-[300]"
              src={selectedService.image}
              alt="images"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
