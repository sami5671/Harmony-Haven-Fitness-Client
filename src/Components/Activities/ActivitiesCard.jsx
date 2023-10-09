const ActivitiesCard = ({ cards }) => {
  const { id, title, image, status, description } = cards;
  return (
    <>
      <div></div>
      <div className="card bg-base-100 shadow-2xl">
        <figure>
          <img
            className="w-[400px] h-[200px]"
            src={image}
            alt="Shoes"
            data-aos="zoom-out-down"
          />
        </figure>

        <div className="card-body" data-aos="flip-right">
          <h2 className="card-title text-lime-500 text-2xl">{title}</h2>
          <p>
            <span className="text-amber-700 font-bold">Status:</span> {status}
          </p>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn mt-4 hover:bg-lime-400 hover:text-white hover:font-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActivitiesCard;
