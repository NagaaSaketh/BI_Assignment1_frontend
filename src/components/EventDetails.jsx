import Header from "./Header";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
const EventDetails = () => {
  const { eventId } = useParams();
  console.log(eventId);
  const { data, loading, error } = useFetch(
    `https://bi-assignment-backend-gamma.vercel.app/events/${eventId}`
  );
  console.log(data);
  return (
    <div>
      <Header />
      <div>
        {loading ? (
  <p className="text-center">Loading...</p>
) : error ? (
  <p className="text-center">An error occurred while fetching event details</p>
) : data ? (
<div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="fw-bold">{data.title}</h2>
                <div className="py-2">
                  Hosted By:
                  <p className="fw-bold">{data.hostedBy}</p>
                </div>
                <div>
                  <img
                    style={{ height: "400px", width: "600px" }}
                    className="img-fluid"
                    src={data.eventImage}
                    alt="eventImage"
                  />
                  <h4 className=" fw-bold mt-4">Details:</h4>
                  <p>{data.details}</p>
                </div>
                <div>
                  <h4 className="fw-bold">Additional Information:</h4>
                  <p>
                    {" "}
                    <strong>Dress Code:</strong> {data.dressCode}{" "}
                  </p>
                  <p>
                    {" "}
                    <strong>Age Restrictions:</strong> {data.ageRestrictions}{" "}
                  </p>
                  <h4 className="fw-bold">Event Tags:</h4>
                  {data.eventTags.map((btn) => {
                    return (
                      <button className="btn btn-danger mr-2 mx-2 mb-3">
                        {btn}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                     {data.date} at {data.time} to{" "}
                     {data.date} at {data.endTime}
                    </p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> {data.location}</p>
                    <p>₹{data.eventFee}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="fw-bold">
                    Speakers: ({data.speakers.length})
                  </h4>
                  <div className="row">
                    {data.speakers.map((obj) => {
                      return (
                        <div className="col-md-6">
                          <div className="card text-center">
                            <img
                              style={{ width: "100px", height:"100px", padding: "20px",objectFit: "cover",objectPosition: "center" }}
                              className="rounded-circle mx-auto"
                              src={obj.photo}
                              alt="photo"
                            />
                            <p>
                              <strong>{obj.name}</strong>
                            </p>
                            <p>{obj.role}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
) : (
  <p>No Event Found.</p>
)}
          

      </div>
    </div>
  );
};

export default EventDetails;
