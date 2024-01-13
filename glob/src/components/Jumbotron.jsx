import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

function Jumbotron() {
  return (
    <div className="d-flex w-75 flex-row justify-content-between ">
      <div className="d-flex align-items-start flex-column w-50 pt-5 ">
        <p className="text-left  title">Biuro Podróży Glob</p>
        <p className="text-left ">Opole ul. Reymonta 30 </p>
      </div>
      <div class="d-flex align-items-end flex-column w-50 ">
        <img src={logo} width="auto" height="250" alt="logo" />
      </div>
    </div>
  );
}

export default Jumbotron;
