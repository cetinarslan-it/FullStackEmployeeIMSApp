import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

export const EmployeeAdd = () => {

  /* LIST LIBRARIES */
  const [employeeList, setEmployeeList] = useState([]);

  /*INSERT*/
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    address: "",
    telephone: "",
  });
  const newEmployeeHandler = (event) => {
    const { name, value } = event.target;
    let newEmployeeRef = { ...newEmployee, [name]: value };
    setNewEmployee(newEmployeeRef);
  };
  const confirmNewEmployee = () => {
    axios
      .post("https://localhost:7261/api/Employee/AddNewEmployee", newEmployee)
      .then((response) => {
        let employeesNewReference = [...employeeList];
        employeesNewReference.push(response.data);
        setEmployeeList(employeesNewReference);
        setNewEmployee({ name: "", address: "", telephone: "" }); // Clear the state
        setShowAlertNewEmployee(true);
      })
      .catch((error) => {
        setAlertErrorMessage(error.message);
        setShowAlertError(true);
      });
  };

    /* ALERTS */
    const [showAlertNewEmployee, setShowAlertNewEmployee] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);
    const [alertErrorMessage, setAlertErrorMessage] = useState('');

  return (
    <div>
      <div style={{marginTop:"10vh"}}>
        <div className="col-md-12 new-lib">
          <div className="card border border-secondary shadow-0">
            <div className="card-header text-white">
              <b>New</b> Employee
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={newEmployee.name}
                    onChange={newEmployeeHandler.bind(this)}
                    type="text"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Address</label>
                  <input
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    value={newEmployee.address}
                    onChange={newEmployeeHandler.bind(this)}
                    type="text"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Telephone-1</label>
                  <input
                    className="form-control"
                    placeholder="Enter Telephone-1"
                    name="telephone"
                    value={newEmployee.telephone}
                    onChange={newEmployeeHandler.bind(this)}
                    type="text"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Telephone-2</label>
                  <input
                    className="form-control"
                    placeholder="Enter Telephone-2"
                    name="telephone"
                    value={newEmployee.telephone}
                    onChange={newEmployeeHandler.bind(this)}
                    type="text"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">&nbsp;</label>
                  <button
                    type="button"
                    className="btn btn-success form-control"
                    onClick={confirmNewEmployee.bind(this)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ALERT LIBRARY ADDED */}
      {showAlertNewEmployee && (
        <SweetAlert
          success
          confirmBtnText="Ok"
          confirmBtnBsStyle="success"
          title="Item successfully added!"
          onConfirm={() => setShowAlertNewEmployee(false)}
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
  );
};
