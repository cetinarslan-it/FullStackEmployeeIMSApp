import React, { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import "../Home.css";

export const Employee = (props) => {

    /* LIST LIBRARIES */
    const [employeeList, setEmployeeList] = useState([]);

    /* SEARCH */
    const [searchName, setSearchName] = useState('');
    const handleInputChange = (event) => {
        setSearchName(event.target.value.toString());
    }
    const searchItems = () => {
        let URL = searchName !== "" ? ("https://localhost:7261/api/Employee/Search?name=" + searchName)
                                            : "https://localhost:7261/api/Employee/GetAll";
        setSearchName("");
        axios.get(URL).then(response => {
            response.data.map(item => { item.isEditing = false; })
            setEmployeeList(response.data);
        }).catch(error => {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        });
    }

    /* UPDATE */
    const handleEmployeeInputChange = (prEmployee, event) => {
        let employeesNewReference = [...employeeList]; // Create a copy of the object with new reference (new space in memory)
        const index = employeesNewReference.findIndex((item) => item.name == prEmployee.name);
        const { name, value } = event.target; // Get the NAME and VALUE of the property changed
        employeesNewReference[index] = { ...prEmployee, [name]: value }; // Update just the specific property keeping the others
        setEmployeeList(employeesNewReference);
    }
    const updateEditingStatus = (prEmployee, prFlag) => {
        try {
            let employeesNewReference = [...employeeList]; // Create a copy of the object with new reference (new space in memory)
            const index = employeesNewReference.findIndex((item) => item.name == prEmployee.name);
            employeesNewReference[index].isEditing = prFlag;
            setEmployeeList(employeesNewReference);
        }
        catch (error) {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        }
    }
    const confirmUpdate = (prEmployee) => {
        axios.put("https://localhost:7261/api/Employee/UpdateEmployee", prEmployee).then(response => {
            let employeesNewReference = [...employeeList]; // Create a copy of the object with new reference (new space in memory)
            const index = employeesNewReference.findIndex((item) => item.name == prEmployee.name);
            employeesNewReference[index] = prEmployee;
            employeesNewReference[index].isEditing = false;
            setEmployeeList(employeesNewReference);
        }).catch(error => {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        });
    }

    /* INSERT */
    const [newEmployee, setNewEmployee] = useState({ name: '', address: '', telephone: '' });
    const newEmployeeHandler = (event) => {
        const { name, value } = event.target;
        let newEmployeeRef = { ...newEmployee, [name]: value };
        setNewEmployee(newEmployeeRef);
    }
    const confirmNewEmployee = () => {
        axios.post("https://localhost:7261/api/Employee/AddNewEmployee", newEmployee).then(response => {
            let employeesNewReference = [...employeeList];
            employeesNewReference.push(response.data);
            setEmployeeList(employeesNewReference);
            setNewEmployee({ name: '', address: '', telephone: '' }); // Clear the state
            setShowAlertNewEmployee(true);
        }).catch(error => {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        });
    }

    /* DELETE */
    const deleteEmployee = (prEmployee) => {
        axios.delete("https://localhost:7261/api/Employee/DeleteEmployee", { data: prEmployee }).then(() => {
            let employeesNewReference = [...employeeList];
            const index = employeesNewReference.findIndex((item) => item.name == prEmployee.name);
            employeesNewReference.splice(index, 1); // Remove item from list
            setEmployeeList(employeesNewReference);
        })
    }

    /* ALERTS */
    const [showAlertNewEmployee, setShowAlertNewEmployee] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);
    const [alertErrorMessage, setAlertErrorMessage] = useState('');

    return (
        <div>
            <hr />
            <h2>Employee Information Management System (EIMS)</h2>
            <br />
            <div className="row">
                {/* SEARCH LIBRARY */}
                <div className="col-md-12 search-lib">
                    <div className="card border border-secondary shadow-0">
                        <div className="card-header text-white"><b>Search</b> Employee<span className="glyphicon glyphicon-search"></span></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-10">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" placeholder="Enter Name" name="name" type="text" value={searchName} onChange={handleInputChange.bind(this)} />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">&nbsp;</label>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-primary form-control" onClick={searchItems.bind(this)}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NEW LIBRARY */}
                <div className="col-md-12 new-lib">
                    <div className="card border border-secondary shadow-0">
                        <div className="card-header text-white"><b>New</b> Employee</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" placeholder="Enter Name" name="name" value={newEmployee.name} onChange={newEmployeeHandler.bind(this)} type="text" />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Address</label>
                                    <input className="form-control" placeholder="Enter Address" name="address" value={newEmployee.address} onChange={newEmployeeHandler.bind(this)} type="text" />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Telephone-1</label>
                                    <input className="form-control" placeholder="Enter Telephone-1" name="telephone" value={newEmployee.telephone} onChange={newEmployeeHandler.bind(this)} type="text" />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Telephone-2</label>
                                    <input className="form-control" placeholder="Enter Telephone-2" name="telephone" value={newEmployee.telephone} onChange={newEmployeeHandler.bind(this)} type="text" />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">&nbsp;</label>
                                    <button type="button" className="btn btn-success form-control" onClick={confirmNewEmployee.bind(this)}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* DISPLAY LIBRARIES */}
            <div className="card border border-secondary shadow-0">
                <div className="card-header text-white"><b>Display</b> Employees</div>
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
                            {employeeList.map(item =>
                                <tr key={item.name}>
                                    <td><input className="form-control" value={item.name} onChange={handleEmployeeInputChange.bind(this, item)} name="name" disabled={!item.isEditing} /></td>
                                    <td><input className="form-control" value={item.address} onChange={handleEmployeeInputChange.bind(this, item)} name="address" disabled={!item.isEditing} /></td>
                                    <td><input className="form-control" value={item.telephone} onChange={handleEmployeeInputChange.bind(this, item)} name="telephone" disabled={!item.isEditing} /></td>
                                    <td>
                                        <div className="btn-toolbar">
                                            <button type="button" className="btn btn-info mr-2" onClick={updateEditingStatus.bind(this, item, true)} style={{ display: item.isEditing ? 'none' : 'block' }}>Edit</button>
                                            <button type="button" className="btn btn-warning mr-2" onClick={updateEditingStatus.bind(this, item, false)} style={{ display: item.isEditing ? 'block' : 'none' }}>Cancel</button>
                                            <button type="button" className="btn btn-success mr-2" onClick={confirmUpdate.bind(this, item)} style={{ display: item.isEditing ? 'block' : 'none' }}>Save</button>
                                            <button type="button" className="btn btn-danger mr-2" onClick={deleteEmployee.bind(this, item)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ALERT LIBRARY ADDED */}
            {showAlertNewEmployee &&
                <SweetAlert success
                    confirmBtnText="Ok"
                    confirmBtnBsStyle="success"
                    title="Item successfully added!"
                    onConfirm={() => setShowAlertNewEmployee(false)} >
                    Please click "OK" to close
                </SweetAlert>
            }

            {/* ALERT ERROR */}
            {showAlertError &&
                <SweetAlert danger
                    confirmBtnText="Ok"
                    confirmBtnBsStyle="success"
                    title="Something wrong happened..."
                    onConfirm={() => setShowAlertError(false)} >
                    {alertErrorMessage}
                </SweetAlert>
            }

        </div>
    )

}