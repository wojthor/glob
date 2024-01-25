import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="d-flex  w-100 justify-content-center pt-2">
      <ul className="d-flex gap-4 flex-row lista">
        <li>
          <Link
            to="/trips"
            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
          >
            <p className="lista">Wycieczki</p>
          </Link>
        </li>
        <li>
          <Link
            to="/holidays"
            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
          >
            <p>Wczasy</p>
          </Link>
        </li>
        <li>
          <Link
            to="/pilgrimages"
            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
          >
            <p>Pielgrzymki</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
