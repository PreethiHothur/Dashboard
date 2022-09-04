import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import Timeline from "../Timeline";
ChartJs.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Technical() {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "First Dataset",
        data: [65, 59, 80, 81, 46, 55, 38, 59],
        backgroundColor: "#fbdec6",
        borderColor: "orange",
        tension: 0.5,
        fill: true,
        pointStyle: "circle",
        pointBorderColor: "white",
      },
    ],
  });
  return (
    <div style={{ backgroundColor: "#e9edf1" }}>
      <div className="row  ">
        <div
          className="col border border  m-5 bg-white"
          style={{ width: "750px", height: "580px" }}
        >
          <div>
            <p className="mt-3 text-start fs-4 text-secondary">
              Technical Support
            </p>
            <hr />
            <h5 className="text-start ms-5 text-secondary">HELPDEST TICKETS</h5>
            <h1 className="text-start ms-5 text-danger">
              <b>34</b> <span className="text-muted fs-5">5%</span>
              <span className="fs-5 text-dark">increase</span>
            </h1>
            <Line
              data={data}
              className="h-25 w-75 ms-5"
              style={{ width: "500px" }}
            >
              Graph
            </Line>
            <p className="fs-5 text-secondary text-start">SALES PROGRESS</p>
            <hr />
            <div className="row">
              <div className="col text-secondary text-start">
                <h5>Total Orders</h5>
                <p>Last year expenses</p>
              </div>
              <div className="col">
                <h1 className="text-success text-end">$1896</h1>
              </div>
              <div className="progress">
                <div
                  className="progress-bar w-50"
                  role="progressbar"
                  style={{ backgroundColor: "#033c73" }}
                ></div>
              </div>
              <div className="col text-start fs-5 text-secondary">
                <p>YoY Growth</p>
              </div>
              <div className="col text-end fs-5 text-secondary">
                <p>100%</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col border border m-5 bg-white"
          style={{ width: "400px", height: "580px" }}
        >
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Technical;
