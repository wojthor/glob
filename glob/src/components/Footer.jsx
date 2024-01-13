import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-white w-100">
      <div className="d-flex flex-row bg-dark justify-content-center gap-3 text-center p-4 ">
        © 2024
        <p className="text-white">Biuro Podróży Glob</p>
      </div>
    </MDBFooter>
  );
}
