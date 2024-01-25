import React from "react";
import TripDetails from "../components/TripDetails";
import Navbar from "../components/Navbar";

function TripPage() {
  return (
    <>
      <div className="d-flex  justify-content-center w-100 flex-row ">
        <Navbar />
      </div>

      <div className="d-flex w-100 justify-content-center jumbotron">
        <TripDetails />
      </div>
    </>
  );
}

export default TripPage;
