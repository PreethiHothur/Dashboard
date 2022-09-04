import React from "react";
import "./index.css";
import { Record2Fill } from "react-bootstrap-icons";

function Timeline() {
  return (
    <div className="m-2 ">
      <p className="text-muted fs-4 text-start">Timeline Example</p>
      <hr />
      <div className="row overflow-auto " style={{ height: 450 }}>
        <div className="col-md-1 ">
          <div className="vr">
            <p className="record-buttons">
              <Record2Fill className="fs-4" />
            </p>
            <p className="record-buttons ">
              <Record2Fill
                className="fs-4 text-danger"
                style={{ color: "red" }}
              />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-info" />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-success" />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 " />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-warning" />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-secondary" />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-danger" />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-info" />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-success" />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-warning" />
            </p>
            <p className="record-buttons">
              <Record2Fill className="fs-4 text-dark" />
            </p>
          </div>
        </div>
        <div className="col-md-10 text-start fs-6 mt-0">
          <p>All Hands meeting</p>
          <p className="text-muted">
            Yet, another one at <span className="text-success">15:00 pm</span>
          </p>
          <p>
            Build the production release
            <button className="badge bg-danger border-0 ms-3">NEW </button>
          </p>
          <p>Something not important</p>
          <p className="text-muted">
            Yet, another one at <span className="text-success">15:00 pm</span>
          </p>
          <p>
            Build the production release
            <button className="badge bg-danger border-0 ms-3">NEW</button>
          </p>
          <p>This dot has an info state</p>
          <p>This dot has a dark state</p>
          <p>All Hands Meetin</p>
          <p className="text-muted">
            Yet, another one at <span className="text-success">15:00 pm</span>
          </p>
          <p>
            Build the production release
            <button className="badge bg-danger border-0 ms-3">NEW</button>
          </p>
          <p>Something not important</p>
          <hr />
        </div>
      </div>
      <div className="text-center ">
        <button
          className=" border-0 rounded shadow p-2 text-white"
          style={{ backgroundColor: "#6610f2" }}
        >
          View all messages
        </button>
      </div>
    </div>
  );
}

export default Timeline;
