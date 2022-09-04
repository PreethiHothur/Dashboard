import React from "react";
import * as Icon from "react-bootstrap-icons";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import Tasklist from "../Tasklist/Tasklist";

import Technical from "../Technicalsupport";

function Agents() {
  return (
    <>
      <div className=" p-2" style={{ backgroundColor: "#e9edf1" }}>
        <div className="ms-5 me-5 mt-0 border border rounded bg-white">
          <p className="text-start m-2 p-2 fs-4">Company Agents Status</p>
          <hr />
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Avatar</th>
                <th scope="col">Name</th>
                <th scope="col">Company</th>
                <th scope="col">Status</th>
                <th scope="col">Due Date</th>
                <th scope="col">Target Achievement</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">#54</td>
                <td>
                  <img
                    src={img1}
                    className="rounded-circle "
                    style={{ height: "50px" }}
                  />
                </td>
                <td>Juan C. Cargill</td>
                <td>Micro Electronics </td>
                <td>
                  <button className="bg-danger border border-0 rounded-pill text-white">
                    <b>cancelled</b>
                  </button>
                </td>
                <td>12 Dec</td>
                <td>
                  <span className="fs-5 text-danger">
                    <b>75%</b>
                  </span>
                  &nbsp;
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger w-75"
                      role="progressbar"
                    ></div>
                  </div>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "#033c73", color: "white" }}
                  >
                    Hire
                  </button>
                  <button
                    style={{ backgroundColor: "#033c73", color: "white" }}
                  >
                    Fire
                  </button>
                </td>
              </tr>
              <tr>
                <td scope="row">#54</td>
                <td>
                  <img
                    src={img2}
                    className="rounded-circle "
                    style={{ height: "50px" }}
                  />
                </td>
                <td>Johnathan Phelan</td>
                <td>Hatchworks</td>
                <td>
                  <button className="bg-primary border border-0 rounded-pill text-white">
                    <b>onHold</b>
                  </button>
                </td>
                <td> 12 Dec</td>
                <td>
                  <span className="fs-5 text-danger">
                    <b>54%</b>
                  </span>
                  &nbsp;
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning w-50"
                      role="progressbar"
                    ></div>
                  </div>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "#033c73", color: "white" }}
                  >
                    Hire
                  </button>
                  <button
                    style={{ backgroundColor: "#033c73", color: "white" }}
                  >
                    Fire
                  </button>
                </td>
              </tr>
              <tr>
                <td scope="row">#54</td>
                <td>
                  <img
                    src={img3}
                    className="rounded-circle "
                    style={{ height: "50px" }}
                  />
                </td>
                <td>Darrell Lowe</td>
                <td>Riddle Electronics I</td>
                <td>
                  <button className="bg-warning border border-0 rounded-pill text-white">
                    <b>In Progress</b>
                  </button>
                </td>
                <td>12 Dec</td>
                <td>
                  <span className="fs-5 text-danger">
                    <b>97%</b>
                  </span>
                  &nbsp;
                  <div className="progress">
                    <div
                      className="progress-bar bg-success w-100"
                      role="progressbar"
                    ></div>
                  </div>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "#033c73", color: "white" }}
                  >
                    Hire
                  </button>
                  <button
                    style={{ backgroundColor: "#033c73", color: "white" }}
                  >
                    Fire
                  </button>
                </td>
              </tr>
              <tr>
                <td scope="row">#54</td>
                <td>
                  <img
                    src={img4}
                    className="rounded-circle "
                    style={{ height: "50px" }}
                  />
                </td>
                <td>George T. Cottrell</td>
                <td>Pixelcloud</td>
                <td>
                  <button className="bg-success border border-0 rounded-pill text-white">
                    <b>Completed</b>
                  </button>
                </td>
                <td>12 Dec</td>
                <td>
                  <span className="fs-5 text-danger">
                    <b>88%</b>
                  </span>
                  &nbsp;
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary w-75"
                      role="progressbar"
                    ></div>
                  </div>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "#033c73", color: "white" }}
                  >
                    Hire
                  </button>
                  <button
                    style={{ backgroundColor: "#033c73", color: "white" }}
                  >
                    Fire
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="m-3 p-3 rounded text-white"
            style={{ backgroundColor: "#343a40" }}
          >
            <Icon.Gear />
            &nbsp; View Complete Report
          </button>
        </div>
        <Technical />
        <Tasklist />
      </div>
    </>
  );
}

export default Agents;
