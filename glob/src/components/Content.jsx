import React, { useState, useEffect } from "react";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const reqUrl =
  "http://localhost/wordpress/wp-json/wp/v2/trips?acf_format=standard&_fields=id,title,acf";

function Content() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const req = await fetch(reqUrl);
      const data = await req.json();
      setTrips(data);
    };

    fetchTrips();
  }, []);

  return (
    <div className="d-flex w-75 flex-column justify-content-center  pt-3">
      <div className="d-flex flex-row text-left ">
        <h4 className="font-italic">Oferta</h4>
      </div>
      <div className="d-flex flex-row flex-wrap text-center gap-2">
        {trips.map((trip) => (
          <div key={trip.id} className="">
            <Figure className="">
              <Link to={`/trips/${trip.id}`}>
                <Figure.Image
                  className=""
                  alt={trip.title.rendered}
                  src={trip.acf.large_image}
                />
              </Link>
              <Figure.Caption className="text-left">
                <h5>{trip.title.rendered}</h5>
              </Figure.Caption>
            </Figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
