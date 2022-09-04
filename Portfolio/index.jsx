import React from "react";
import "./index.css";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Search,
  WindowDesktop,
} from "react-bootstrap-icons";

function Portfolio() {
  return (
    <div className=" p-3" style={{ backgroundColor: "#e9edf1" }}>
      <div className="m-5 border border rounded bg-white">
        <p className="text-start m-2 p-2 fs-4">Portfolio Performance</p>
        <hr />
        <div className="row ">
          <div className="row  justify-content-evenly  ">
            <div
              className="col-md-1  align-self-center"
              style={{
                backgroundColor: "orange",
                borderRadius: "50%",
                color: "white",
                padding: " 15px",
                height: "70px",
                width: "70px",
                marginLeft: "50px",
              }}
            >
              <WindowDesktop className="fs-1  " />
            </div>
            <div className="col-md-2">
              <div className="col">
                <p> Cash Deposits</p>
                <p className="h1rating">
                  <b>1,7M</b>
                </p>
                <span className="text-danger">
                  <ChevronDown />
                  54.1%
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>less earnings </span>
              </div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div
              className="col-md-1 align-self-center"
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                color: "white",
                padding: " 15px",
                height: "70px",
                width: "70px",
                marginLeft: "10px",
              }}
            >
              <Briefcase className="fs-1 align-items-center " />
            </div>
            <div className="col-md-2">
              <div className="col">
                <p className="text-secondary"> Invested Dividents</p>
                <p className="h1rating">
                  <b>9M</b>
                </p>
                <span>Grow Rate : </span>
                <span className="text-primary">
                  {" "}
                  <ChevronDown />
                  14.1%
                </span>
              </div>
            </div>
            <div
              className="col-md-1 align-self-center"
              style={{
                backgroundColor: "green",
                borderRadius: "50%",
                color: "white",
                padding: " 15px",
                height: "70px",
                width: "70px",
              }}
            >
              <Lightbulb className="fs-1 align-items-center " />
            </div>
            <div className="col-md-2">
              <div className="col">
                <p> Capital Gains</p>
                <p className="h1rating text-success">
                  <b>$563</b>
                </p>
                <span>Increased by</span>
                <span className="text-danger">
                  <ChevronUp />
                  7.35%
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <button
            className="p-3 m-3 rounded text-light"
            style={{ backgroundColor: "#033c73" }}
          >
            View Complete Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
