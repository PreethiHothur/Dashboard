import React from "react";

function Orders() {
  return (
    <div>
      <div className=" m-1 border container-fluid border rounded">
        <div className="row border border p-2 text-start fs-5 text-secondary bg-white">
          <div className="col-md-2 ">
            <div className="col">
              <b>Total Orders</b>
            </div>
            <div className="col">Last year expences</div>
          </div>
          <div className="col-md-2 ">
            <h2 style={{ color: "rgb(151, 238, 20)" }}>
              <b>1896</b>
            </h2>
          </div>
          <div className="col-md-2">
            <div>
              <b>Followers</b>
            </div>
            <div>People Intrested</div>
          </div>
          <div className="col-md-2">
            <h2 className="text-danger">
              <b>45,9%</b>
            </h2>
          </div>
          <div className="col-md-2">
            <div>
              <b>Total Orders</b>
            </div>
            <div>Last year expences</div>
          </div>
          <div className="col-md-2 text-end">
            <h2 style={{ color: "rgb(151, 238, 20)" }}>
              <b>1896</b>
            </h2>
          </div>
        </div>
        <div className="row border border p-3 text-start fs-5 text-secondary bg-white">
          <div className="col-md-2 ">
            <div className="col">
              <b>Total Orders</b>
            </div>
            <div className="col">Last year expences</div>
          </div>
          <div className="col-md-2">
            <h2 style={{ color: "rgb(12, 30, 90)" }}>
              <b>$12.6k</b>
            </h2>
          </div>
          <div className="col-md-2">
            <div>
              <b>Followers</b>
            </div>
            <div>People Intrested</div>
          </div>
          <div className="col-md-2">
            <h2 className="text-warning">
              <b>$3M</b>
            </h2>
          </div>
          <div className="col-md-2">
            <div>
              <b>Total Orders</b>
            </div>
            <div>Last year expences</div>
          </div>
          <div className="col-md-2 text-end">
            <h2 style={{ color: "rgb(12, 30, 90)" }}>
              <b>$12.6k</b>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
