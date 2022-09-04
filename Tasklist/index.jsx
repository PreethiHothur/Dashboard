import React from "react";
import Orders from "../Orders";
import {
  ArrowBarRight,
  ChatRight,
  Check,
  DeviceHddFill,
  Grid3x3GapFill,
  TrashFill,
} from "react-bootstrap-icons";
import "./index.css";
function Tasks() {
  return (
    <>
      <div className="col ">
        <div className="row  ">
          <div
            className="col rounded text-secondary bg-white border border-success w-50 p-4 m-3 text-start"
            style={{ boxShadow: "1px 5px  2px green" }}
          >
            <h2>$874</h2>
            <p className="fs-5 text-secondary">sales last month</p>
          </div>
          <div
            className="col bg-white text-secondary rounded border border-primary w-50 m-3 p-4 text-start"
            style={{ boxShadow: "1px 5px  2px #033c73" }}
          >
            <h2>$1283</h2>
            <p className="fs-5 text-secondary">sales Income</p>
          </div>
        </div>
        <div className="row">
          <div
            className="col rounded text-secondary bg-white border border-warning w-50 p-4 m-3 text-start"
            style={{ boxShadow: "1px 5px  2px orange" }}
          >
            <h2>$1286</h2>
            <p className="fs-5 text-secondary">last month sales</p>
          </div>
          <div
            className="col text-secondary rounded bg-light border border-danger w-50 p-4 m-3 text-start"
            style={{ boxShadow: "1px 5px  2px red" }}
          >
            <h2>$564</h2>
            <p className="fs-5 text-secondary"> total revenue</p>
          </div>
        </div>
        <div className="row">
          <div
            className="col rounded text-secondary bg-white border border-primary w-50 p-4 m-3 text-start"
            style={{ boxShadow: "1px 5px  2px lightblue" }}
          >
            <h2>$1283</h2>
            <p className="fs-5 text-secondary">sales Income</p>
          </div>
          <div
            className="col rounded  text-secondary bg-white border border-warning w-50 p-4 m-3 text-start"
            style={{ boxShadow: "1px 5px  2px orange " }}
          >
            <h2>$874</h2>
            <p className="fs-5 text-secondary">sales last month</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;
