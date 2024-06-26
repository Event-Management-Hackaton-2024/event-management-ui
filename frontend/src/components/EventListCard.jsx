import React, { useEffect, useState } from "react";
import VisitorsComponent from "./VisitorsComponent";
import "./EventListCard.css";
import { getUsersForEvent } from "../services/EventService";

const EventListCard = ({ event }) => {
  const [joinEvent, setJoinEvent] = useState(false);
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = getUsersForEvent(event.id);
        console.log(response);
        setVisitors(response.data);
      } catch (error) {
        console.error("Error fetching visitors:", error);
      }
    };

    fetchVisitors();
  }, [event.id]);

  const currentDate = new Date();
  const eventDate = new Date(event.date);

  const upcomingEvent = currentDate < eventDate;

  return (
    <div className="custom-card mb-3">
      {" "}
      <div className="row g-0 p-5">
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="card-text">
              <strong>Location:</strong> {event.location}
            </p>
            {!joinEvent && upcomingEvent && (
              <button className="btn control mt-2 mb-4" onClick={() => setJoinEvent(true)}>
                Отбележете присъствието си тук!
              </button>
            )}
            {joinEvent && upcomingEvent && (
              <div className="row">
                <div className="col-md-6">
                  <p className="text">Ще се видим на събитието!</p>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-secondary" onClick={() => setJoinEvent(false)}>
                    Отменете
                  </button>
                </div>
              </div>
            )}
            {!upcomingEvent && <p className="mt-2">Събитието е завършило!</p>}
            <p className="card-text">{event.description}</p>
            {event.interests && (
              <p className="card-text text-muted col-md-9">
                <strong>Interests:</strong> {event.interests.join(", ")}
              </p>
            )}
          </div>
        </div>
        <div className="col-md-6 p-1">
          <img
            src="https://th.bing.com/th/id/OIP.zolbtShtE5P9mm0gs_YzTQAAAA?rs=1&pid=ImgDetMain"
            alt={event.title}
            className="img-fluid rounded p-3"
            style={{ maxHeight: "350px", maxWidth: "100%" }}
          />
          <p className="card-text m-3">
            <VisitorsComponent visitorsArray={visitors} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventListCard;
