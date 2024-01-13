import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Content from "./Content";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <div className="d-flex w-100 justify-content-center ">
        <Navbar />
      </div>
      <div className="d-flex w-100 justify-content-center jumbotron">
        <Jumbotron />
      </div>
      <div className="d-flex w-100  justify-content-center   ">
        <Content />
      </div>

      <div className="d-flex w-100 justify-content-center">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
