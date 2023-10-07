import { Link } from "react-router-dom";

const ServicesCard = ({ cards }) => {
  // destructure of cards
  const { id, name, image, price, description } = cards;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
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
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price} $</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/ServicesCard/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
