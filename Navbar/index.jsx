import React from "react";
import * as Icon from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../images/img1.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";
function Navbare() {
  return (
    <Navbar
      // style={{ boxShadow: "1px 1px 5px 1px #888888 " }}
      expand="lg"
      variant="light"
      bg="white"
    >
      <div className="shadow  row w-100">
        <div
          className=" col-1 p-3 badge rounded-circle  ms-5"
          style={{ width: 50, backgroundColor: "#f3f5f9" }}
        >
          <Icon.Search className="text-start text-dark fs-4" />
        </div>

        <div className="col text-end me-0 ">
          <img
            src={img1}
            className="rounded-circle "
            style={{ width: "50px", margin: 10 }}
          />
        </div>
        <div class="col-1 dropdown text-end me-5 ">
          <button
            className="btn dropdown-toggle  "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            // aria-expanded="false"
          ></button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Menus</li>
            <li>Settings</li>
            <li>Header</li>
            <li>Actions</li>

            <li>Dividers</li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
}

export default Navbare;
