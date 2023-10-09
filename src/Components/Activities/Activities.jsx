import { useEffect, useState } from "react";
import ActivitiesCard from "./ActivitiesCard";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <>
      <section className="p-4 md:p-16 mx-auto mt-12 lg:mt-8">
        <h2 className="text-yellow-800 text-center text-6xl mb-6">
          Explore Our Activities
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((cards) => (
            <ActivitiesCard key={cards.id} cards={cards}></ActivitiesCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Activities;
