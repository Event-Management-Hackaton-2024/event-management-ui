import React, { useEffect, useState } from "react";
import { getAllEvents } from "../services/EventService";
import EventListCard from "./EventListCard";

const EventListComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllEvents()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const currentDate = new Date();

  const upcomingEvents = data.filter((event) => new Date(event.date) >= currentDate);
  const completedEvents = data.filter((event) => new Date(event.date) < currentDate);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 row justify-content-center">Предстоящи Събития</h2>
      <div className="row justify-content-center">
        {upcomingEvents.map((event, index) => (
          <div className="col-md-10" key={index}>
            <EventListCard event={event} />
          </div>
        ))}
      </div>

      <h2 className="mb-4 row justify-content-center">Завършени Събития</h2>
      <div className="row justify-content-center">
        {completedEvents.map((event, index) => (
          <div className="col-md-10" key={index}>
            <EventListCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListComponent;
