import React from "react";

function Footer() {
  return (
    <div className="bg-light ">
      <div className="row m-2 p-2 ">
        <div className="col text-secondary text-start">
          Copyright 2019 - DashboardPack.com
        </div>
        <div className="col text-end me-5 p-2">
          <button
            className="p-1 rounded text-white"
            style={{ backgroundColor: "#033c73" }}
          >
            Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
