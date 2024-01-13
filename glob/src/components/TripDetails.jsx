import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Spinner from "./Spinner";

const TripDetails = () => {
  const [trip, setTrip] = useState(null);
  const { tripId } = useParams();

  useEffect(() => {
    // Asynchroniczna funkcja do pobrania szczegółów konkretnej wycieczki
    const fetchTripDetails = async () => {
      try {
        const res = await fetch(
          `http://localhost/wordpress/wp-json/wp/v2/trips/${tripId}?acf_format=standard&_fields=id,title,acf`
        );
        if (!res.ok) {
          throw new Error("Response not OK");
        }
        const data = await res.json();
        // Zakładamy, że otrzymane dane są pełnym obiektem wycieczki
        setTrip(data);
      } catch (err) {
        console.error("There was an error fetching trip details:", err);
      }
    };

    fetchTripDetails();
  }, [tripId]); // Wywołanie funkcji po zmianie wartości `tripId`

  if (!trip) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="d-flex w-75 justify-content-center flex-row glob px-5 pt-5 gap-3 flex-wrap ">
      <div className="d-flex">
        <Figure.Image src={trip.acf.large_image} />
      </div>
      <div className="d-flex flex-column">
        <h2>{trip.title.rendered}</h2>

        <p>{trip.acf.summary}</p>
      </div>
    </div>
  );
};

export default TripDetails;
