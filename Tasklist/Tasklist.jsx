import React from "react";
import Tasks from ".";
import Dropdown from "../Dropdown/Dropdown";

function Tasklist() {
  return (
    <div>
      <div className="row">
        <div
          className="col border border rounded m-3  bg-white"
          style={{ height: 550, width: 490 }}
        >
          <Dropdown />
        </div>
        <div
          className="col border border rounded m-3 "
          style={{ height: 550, width: 490 }}
        >
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default Tasklist;
