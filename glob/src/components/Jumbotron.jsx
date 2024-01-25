import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

function Jumbotron() {
  return (
    <div className="d-flex w-75  justify-content-between jumbotron ">
      <div className="d-flex align-items-start flex-column w-50 pt-5 jumbotron-font ">
        <p className="text-left  title">Biuro Podróży Glob</p>
        <p className="text-left ">Opole ul. Reymonta 30 tel. 77 454 33 89 </p>
      </div>
      <div class="d-flex align-items-end flex-column w-50 p-2  ">
        <img src={logo} width="auto" height="200" alt="logo" />
      </div>
    </div>
  );
}

export default Jumbotron;
