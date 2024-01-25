import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex w-75 flex-row justify-content-between ">
      <nav className="d-flex gap-3 align-items-start navbar">
        <Link to="/">
          <img src={logo} width="auto" height="41" alt="logo" />
        </Link>
      </nav>
      <ul className="d-flex gap-4 flex-row align-items-center lista">
        <li className="d-flex pt-3">
          <Link
            to="/information"
            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
          >
            <p>O firmie </p>
          </Link>
        </li>
        <li className="d-flex pt-3">
          <Link
            to="/contact"
            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
          >
            <p>Kontakt</p>
          </Link>
        </li>
        <li className="d-flex pt-3">
          <Link
            to="/documents"
            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
          >
            <p>Dokumenty</p>
          </Link>
        </li>
      </ul>
      <nav className="d-flex text-dark text-light gap-3 align-items-end  navbar ">
        <h4>
          <RiInstagramFill />
        </h4>
        <h4>
          <SiFacebook />
        </h4>
      </nav>
    </div>
  );
}

export default Navbar;
