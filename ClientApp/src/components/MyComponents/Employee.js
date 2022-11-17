import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import "./Login.css";
import Unauthorized from "./Unauthorized";

export const Employee = (props) => {
  /* LIST LIBRARIES */
  const [employeeList, setEmployeeList] = useState([]);

  /* SEARCH */
  const [searchName, setSearchName] = useState("");

  const handleInputChange = (event) => {
    setSearchName(event.target.value.toString());
  };

  const searchItems = () => {
    let URL =
      searchName !== ""
        ? "https://localhost:7261/api/Employee/Search?name=" + searchName
        : "https://localhost:7261/api/Employee/GetAll";
    setSearchName("");
    axios
      .get(URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        response.data.map((item) => {
          item.isEditing = false;
        });
        setEmployeeList(response.data);

        console.log(localStorage.getItem("token"));
        response.data.length == 0 && setShowAlertNoEmployee(true);
      })
      .catch((error) => {
        setAlertErrorMessage(error.message);
        setShowAlertError(true);
      });
  };

  /* UPDATE */
  const handleEmployeeInputChange = (prEmployee, event) => {
    let employeesNewReference = [...employeeList]; // Create a copy of the object with new reference (new space in memory)
    const index = employeesNewReference.findIndex(
      (item) => item.name == prEmployee.name
    );
    const { name, value } = event.target; // Get the NAME and VALUE of the property changed
    employeesNewReference[index] = { ...prEmployee, [name]: value }; // Update just the specific property keeping the others
    setEmployeeList(employeesNewReference);
  };
  const updateEditingStatus = (prEmployee, prFlag) => {
    try {
      let employeesNewReference = [...employeeList]; // Create a copy of the object with new reference (new space in memory)
      const index = employeesNewReference.findIndex(
        (item) => item.name == prEmployee.name
      );
      employeesNewReference[index].isEditing = prFlag;
      setEmployeeList(employeesNewReference);
    } catch (error) {
      setAlertErrorMessage(error.message);
      setShowAlertError(true);
    }
  };
  const confirmUpdate = (prEmployee) => {
    axios
      .put("https://localhost:7261/api/Employee/UpdateEmployee", prEmployee, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        let employeesNewReference = [...employeeList]; // Create a copy of the object with new reference (new space in memory)
        const index = employeesNewReference.findIndex(
          (item) => item.name == prEmployee.name
        );
        employeesNewReference[index] = prEmployee;
        employeesNewReference[index].isEditing = false;
        setEmployeeList(employeesNewReference);
      })
      .catch((error) => {
        setAlertErrorMessage(error.message);
        setShowAlertError(true);
      });
  };

  /* DELETE */
  const deleteEmployee = (prEmployee) => {
    axios
      .delete(
        "https://localhost:7261/api/Employee/DeleteEmployee",
        { data: prEmployee },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        let employeesNewReference = [...employeeList];
        const index = employeesNewReference.findIndex(
          (item) => item.name == prEmployee.name
        );
        employeesNewReference.splice(index, 1); // Remove item from list
        setEmployeeList(employeesNewReference);
      });
  };

  /* ALERTS */
  const [showAlertNoEmployee, setShowAlertNoEmployee] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [alertErrorMessage, setAlertErrorMessage] = useState("");

  return (
    <div>
      {localStorage.getItem("token") === null ? (
        <Unauthorized />
      ) : (
        <div style={{ marginTop: "10vh" }}>
          <div className="row">
            {/* SEARCH LIBRARY */}
            <div className="col-md-12 search-lib">
              <div className="card border border-secondary shadow-0">
                <div className="card-header text-white bg-primary">
                  <b>Search</b> Employee
                  <span className="glyphicon glyphicon-search"></span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-10">
                      <label className="form-label">Name</label>
                      <input
                        className="form-control"
                        placeholder="Enter Name"
                        name="name"
                        type="text"
                        value={searchName}
                        onChange={handleInputChange.bind(this)}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">&nbsp;</label>
                      <div className="btn-toolbar">
                        <button
                          type="button"
                          className="btn btn-primary form-control"
                          onClick={searchItems.bind(this)}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* DISPLAY LIBRARIES */}
          <div className="card border border-secondary shadow-0">
            <div className="card-header text-white bg-primary">
              <b>Display</b> Employees
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Telephone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {employeeList.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <input
                          className="form-control"
                          value={item.name}
                          onChange={handleEmployeeInputChange.bind(this, item)}
                          name="name"
                          disabled={!item.isEditing}
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          value={item.address}
                          onChange={handleEmployeeInputChange.bind(this, item)}
                          name="address"
                          disabled={!item.isEditing}
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          value={item.telephone}
                          onChange={handleEmployeeInputChange.bind(this, item)}
                          name="telephone"
                          disabled={!item.isEditing}
                        />
                      </td>
                      <td>
                        <div className="btn-toolbar">
                          <button
                            type="button"
                            className="btn btn-info mr-2"
                            onClick={updateEditingStatus.bind(this, item, true)}
                            style={{
                              display: item.isEditing ? "none" : "block",
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning mr-2"
                            onClick={updateEditingStatus.bind(
                              this,
                              item,
                              false
                            )}
                            style={{
                              display: item.isEditing ? "block" : "none",
                            }}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn btn-success mr-2"
                            onClick={confirmUpdate.bind(this, item)}
                            style={{
                              display: item.isEditing ? "block" : "none",
                            }}
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger mr-2"
                            onClick={deleteEmployee.bind(this, item)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* ALERT LIBRARY ADDED */}
          {showAlertNoEmployee && (
            <SweetAlert
              danger
              confirmBtnText="Ok"
              confirmBtnBsStyle="success"
              title="Opps! There is no employee registered yet!"
              onConfirm={() => setShowAlertNoEmployee(false)}
            >
              Please click "OK" to close
            </SweetAlert>
          )}
          {/* ALERT ERROR */}
          {showAlertError && (
            <SweetAlert
              danger
              confirmBtnText="Ok"
              confirmBtnBsStyle="success"
              title="Something wrong happened..."
              onConfirm={() => setShowAlertError(false)}
            >
              {alertErrorMessage}
            </SweetAlert>
          )}
        </div>
      )}
    </div>
  );
};
