import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Content from "../components/Content";
import HolidaysLabel from "../components/labels/HolidaysLabel";
import PilgrimagesLabel from "../components/labels/PilgrimagesLabel";
import Footer from "../components/Footer";
import TripsLabel from "../components/labels/TripsLabel";

function HomePage() {
  const location = useLocation();

  let mainContent = <Content />;

  if (location.pathname === "/trips") {
    mainContent = <TripsLabel />;
  }

  if (location.pathname === "/holidays") {
    mainContent = <HolidaysLabel />;
  }

  if (location.pathname === "/pilgrimages") {
    mainContent = <PilgrimagesLabel />;
  }

  return (
    <>
      <div className="d-flex w-100 justify-content-center ">
        <Navbar />
      </div>
      <div className="d-flex w-100 justify-content-center flex-row jumbotron ">
        <Jumbotron />
      </div>
      <div className="d-flex w-100  justify-content-center   ">
        {mainContent}
      </div>
      <div className="d-flex w-100 justify-content-center">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
