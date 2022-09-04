import React from "react";
import { Trash, Check, List, Grid3x3GapFill } from "react-bootstrap-icons";
import "./index.css";
function Dropdown() {
  return (
    <div class="container ">
      <div className="text-start text-secondary">
        <h4>TaskList</h4>
        <h4>
          <Grid3x3GapFill />
        </h4>
      </div>
      <div
        class=" text-start overflow-auto  bg-white "
        style={{ width: 600, height: 420, overflowX: "hidden" }}
      >
        <div className="col bg-white ">
          <ul
            class="dropdown-menu shadow "
            aria-labelledby="dropdownMenuButton1"
            style={{ width: 280 }}
          >
            <li>
              <a class="dropdown-item" href="#">
                Menus
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Actions
              </a>
            </li>
            <hr />
            <div className="d-flex p-1 justify-content-end">
              <p>View details</p> &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn shadow"
                style={{ backgroundColor: "#0456a5" }}
              >
                Action
              </button>
            </div>
          </ul>
        </div>
        <hr />
        <div className="row">
          <div className="col-1  align-self-center">
            <input
              class="form-check-input align-self-center"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
          <div className="col">
            <span>
              <b>Wash the car</b>
              <spa className="bg-danger rounded  ms-3 text-white border-0">
                Rejected
              </spa>
            </span>
            <br />
            <span>
              <i>written by Bob</i>
            </span>
          </div>
          <div className="col text-end icons text-start justify-content-around">
            <Check className="text-success  m-2 check fs-3" />
            <Trash className="text-danger trash" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1  align-self-center">
            <input
              class="form-check-input align-self-center"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>

          <div className="col">
            <span>
              <b>Task with dropdown menu</b>
            </span>{" "}
            <br />
            <span>
              <i>by Johnny</i>&nbsp;&nbsp;
              <button className="bg-info rounded-pill text-white border-0">
                New
              </button>{" "}
            </span>
          </div>

          <div className="col text-end">
            <div class="dropdown ">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <List />
              </button>
              <dl
                class="dropdown-menu shadow p-1"
                aria-labelledby="dropdownMenuButton1"
                style={{ width: 300 }}
              >
                <dt>
                  <a class="dropdown-item" href="#">
                    Activity
                  </a>
                </dt>
                <dd>
                  Chat <span class="badge bg-primary">8</span>
                </dd>
                <dd>Recovery password</dd>
                <dt>
                  <a class="dropdown-item" href="#">
                    My Account
                  </a>
                </dt>
                <dd>
                  settings <span class="badge bg-success">New</span>
                </dd>
                <dd>
                  messages <span class="badge bg-danger">512</span>
                </dd>
                <dd>logs </dd>
                <div className="btn bg-danger">Cancel</div>
                <hr />
                <div className="d-flex p-1 justify-content-end">
                  <p>View details</p> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn shadow"
                    style={{ backgroundColor: "#0456a5" }}
                  >
                    Action
                  </button>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-1  align-self-center">
            <input
              class="form-check-input align-self-center"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
          <div className="col">
            <span>
              <b>Badge on the right task</b>
            </span>
            <br /> <span>This task has shown on hover actions! </span>
          </div>
          <div className="col icons text-end">
            <Check className="text-success check fs-3" />
            <span class="badge bg-success">Latest task</span>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-1  align-self-center">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
          <div className="col-md-1 align-self-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Lx9IMJLl-exYphkzB0m4HXPu4K74OhPoWw&usqp=CAU"
              alt="customer"
              className="rounded-circle"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="col-md-5">
            <span>
              <b>Go Grocery Shopping</b>
            </span>
            <p className="text-muted">A short description for this todo item</p>
          </div>

          <div className="col text-end icons justify-content-around">
            <Check className="text-success check fs-3" />
            <Trash className="text-danger trash" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1  align-self-center ">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
          <div className="col">
            <span>
              <b>Wash the car</b>
              <button className="bg-danger rounded ms-3 text-white border-0">
                Rejected
              </button>
            </span>
            <br />
            <span>
              <i>written by Bob</i>
            </span>
          </div>

          <div className="col text-end  icons justify-content-around">
            <Check className="text-success check fs-3" />
            <Trash className="text-danger trash" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1  align-self-center">
            <input
              class="form-check-input align-self-center"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>

          <div className="col">
            <span>
              <b>Task with dropdown menu</b>
            </span>
            <br />
            <span>
              <i>by Johnny</i>&nbsp;&nbsp;
              <button className="bg-info rounded-pill text-white border-0">
                New
              </button>
            </span>
          </div>
          <div className="col text-end">
            <div class="dropdown ">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <List />
              </button>
              <dl
                class="dropdown-menu shadow p-1"
                aria-labelledby="dropdownMenuButton1"
                style={{ width: 300 }}
              >
                <dt>
                  <a class="dropdown-item" href="#">
                    Activity
                  </a>
                </dt>
                <dd>
                  Chat <span class="badge bg-primary">8</span>
                </dd>
                <dd>Recovery password</dd>
                <dt>
                  <a class="dropdown-item" href="#">
                    My Account
                  </a>
                </dt>
                <dd>
                  settings <span class="badge bg-success">New</span>
                </dd>
                <dd>
                  messages <span class="badge bg-danger">512</span>
                </dd>
                <dd>logs </dd>
                <div className="btn bg-danger">Cancel</div>
                <hr />
                <div className="d-flex p-1 justify-content-end">
                  <p>View details</p> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn shadow"
                    style={{ backgroundColor: "#0456a5" }}
                  >
                    Action
                  </button>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-1  align-self-center">
            <input
              class="form-check-input align-self-center"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
          <div className="col-md-5">
            <span>
              <b>Badge on the right task</b>
            </span>
            <br />
            <span className="text-muted">
              This task has shown on hover actions
            </span>
          </div>
          <div className="col icons text-end">
            <Check className="fs-3 check text-success" />
            <span className="badge trash bg-success">Latest task</span>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-1  align-self-center">
            <input
              class="form-check-input align-self-center"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
          <div className="col-md-5">
            <span>
              <b>Development Task</b>
            </span>
            <br />
            <span className="text-muted">Finish Vue ToDoList App</span>
          </div>
          <div className="col icons text-end">
            <span className="badge bg-danger">69</span>
            <Check className="fs-3 check text-success" />
            <Trash className="text-danger trash" />
          </div>
        </div>
        <hr />
      </div>
      <div className="row mt-2">
        <div className="col d-flex justify-content-end">
          <p className="align-self-center">Cancel</p> &nbsp;&nbsp;
          <button className="btn bg-primary text-white ms-3">Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
