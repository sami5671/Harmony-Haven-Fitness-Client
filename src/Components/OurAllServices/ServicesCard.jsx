import { Link } from "react-router-dom";

const ServicesCard = ({ cards }) => {
  // destructure of cards
  const { id, name, image, price, description } = cards;
  return (
    <>
      <div className="card bg-base-100 shadow-2xl">
        <figure>
          <img
            className="w-[400px] h-[200px]"
            src={image}
            alt="Shoes"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </figure>
        <div className="card-body" data-aos="fade-up-right">
          <h2 className="card-title text-lime-500 text-2xl">{name}</h2>
          <p>
            <span className="text-lime-500 font-bold">Price:</span> {price} $
          </p>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <Link to={`/ServicesCard/${id}`}>
              <button className="btn mt-4 hover:bg-lime-400 hover:text-white hover:font-bold">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
