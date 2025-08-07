import { useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
const EventListings = () => {
  const { data, loading, error } = useFetch("https://bi-assignment-backend-gamma.vercel.app/events");
  // console.log(data);
  const [events, setEvents] = useState("Both");
  const [query,setQuery] = useState("");
  let filteredEvents =
    events === "Both"
      ? data
      : data?.filter((event) => event.eventType === events);
  if(query){
    filteredEvents = filteredEvents.filter((obj)=>obj.title.toLowerCase().includes(query.toLowerCase()))
  }
  return (
    <main className="container">
      <div
        className="d-flex align-items-center justify-content-between pb-3"
        style={{ height: "100px" }}
      >
        <img
          className="img-fluid"
          style={{ width: "100px", height: "auto" }}
          src="https://cdn.worldvectorlogo.com/logos/meetup-1.svg"
          alt="meetup-logo"
        />
        <div className="position-relative" style={{width: "200px"}}>
            
          <input
            type="text"
            className="form-control"
            placeholder="Search by title and tags"
            id="searchBox"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between mt-3">
        <div>
          <h1 className="fw-bolder">Meetup Events</h1>
        </div>
        <div>
          <label htmlFor="eventsDropdown">
            <select
              onChange={(event) => setEvents(event.target.value)}
              className="form-select"
              name="events"
              id="eventsDropdown"
            >
              <option value="Both">Select Event Type</option>
              <option value="Online Event">Online</option>
              <option value="Offline Event">Offline</option>
              <option value="Both">Both</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error while fetching the event details</p>
        ) : (
          <div className="row mt-3">
            {data && data.length > 0 ? (
              filteredEvents && filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div key={event._id} className="col-md-4 mb-3">
                    <div className="card mt-2">
                      <div className="position-relative">
                        <img
                          className="card-img-top"
                          src={event.eventImage}
                          alt="event"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <span
                          className="badge fw-light bg-white text-dark position-absolute"
                          style={{ top: "8px", left: "8px", fontSize: "12px" }}
                        >
                          {event.eventType}
                        </span>
                      </div>
                      <div className="px-2 py-2">
                        <p>
                          <small className="text-secondary">
                            {event.date} • {event.time}
                          </small>
                        </p>
                        <Link
                          to={`/events/${event._id}`}
                          style={{ textDecoration: "none" }}
                          className="pt-2 fs-5 fw-bold text-dark"
                        >
                          {event.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <p>No events found for the selected filter.</p>
                </div>
              )
            ) : (
              <div>
                <p>No Event Found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};
export default EventListings;
