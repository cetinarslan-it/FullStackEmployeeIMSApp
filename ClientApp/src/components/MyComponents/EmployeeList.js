import React, { useEffect, useState } from "react";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import Unauthorized from "./Unauthorized";

export const EmployeeList = () => {
  /* LIST LIBRARIES */
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const getEmployees = () => {
      axios
        .get("https://localhost:7261/api/Employee/GetAll", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          response.data.map((item) => {
            item.isEditing = false;
          });
          setEmployeeList(response.data);
        })
        .catch((error) => {
          setAlertErrorMessage(error.message);
          setShowAlertError(true);
          alert(error.message);
        });
    };

    getEmployees();
  }, []);

  /* UPDATE */
  const handleEmployeeInputChange = (prEmployee, event) => {
    let employeesNewReference = [...employeeList];
    const index = employeesNewReference.findIndex(
      (item) => item.name == prEmployee.name
    );
    const { name, value } = event.target;
    employeesNewReference[index] = { ...prEmployee, [name]: value };
    setEmployeeList(employeesNewReference);
  };
  const updateEditingStatus = (prEmployee, prFlag) => {
    try {
      let employeesNewReference = [...employeeList];
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
        let employeesNewReference = [...employeeList];
        const index = employeesNewReference.findIndex(
          (item) => item.name == prEmployee.name
        );
        employeesNewReference[index] = prEmployee;
        employeesNewReference[index].isEditing = false;
        setEmployeeList(employeesNewReference);
        setShowAlertSaveEmployee(true);
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
        {data: prEmployee, 
         headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}}
      )
      .then(() => {
        let employeesNewReference = [...employeeList];
        const index = employeesNewReference.findIndex(
          (item) => item.name == prEmployee.name
        );
        employeesNewReference.splice(index, 1);
        setEmployeeList(employeesNewReference);
        setShowAlertDeleteEmployee(true);
      });
  };

  /* ALERTS */
  const [showAlertDeleteEmployee, setShowAlertDeleteEmployee] = useState(false);
  const [showAlertSaveEmployee, setShowAlertSaveEmployee] = useState(false);

  return (
    <div>
      {localStorage.getItem("token") === null ? (
        <Unauthorized />
      ) : (
        <div>
          {/* DISPLAY EMPLOYEES */}
          <div
            className="card border border-secondary shadow-0"
            style={{ marginTop: "10vh" }}
          >
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
          {showAlertSaveEmployee && (
            <SweetAlert
              success
              confirmBtnText="Ok"
              confirmBtnBsStyle="success"
              title="Employee successfully saved!"
              onConfirm={() => setShowAlertSaveEmployee(false)}
            >
              Please click "OK" to close
            </SweetAlert>
          )}
          {showAlertDeleteEmployee && (
            <SweetAlert
              success
              confirmBtnText="Ok"
              confirmBtnBsStyle="success"
              title="Employee successfully deleted!"
              onConfirm={() => setShowAlertDeleteEmployee(false)}
            >
              Please click "OK" to close
            </SweetAlert>
          )}
        </div>
      )}
    </div>
  );
};
