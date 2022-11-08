import React, {useEffect, useState} from 'react'
import axios from 'axios';
import SweetAlert from "react-bootstrap-sweetalert";

export const EmployeeList = () => {

     /* LIST LIBRARIES */
      const [employeeList, setEmployeeList] = useState([]); 

useEffect(() => {
    
    const getEmployees = () => {
        axios.get("https://localhost:7261/api/Employee/GetAll").then(response => {
            response.data.map(item => { item.isEditing = false; })
            setEmployeeList(response.data);
        }).catch(error => {
            setAlertErrorMessage(error.message);
            setShowAlertError(true);
        });
    };

    getEmployees();
 
  }, [])

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
        const [showAlertError, setShowAlertError] = useState(false);
        const [alertErrorMessage, setAlertErrorMessage] = useState('');

  return (
    <div>
       {/* DISPLAY LIBRARIES */}
       <div className="card border border-secondary shadow-0" style={{marginTop:"10vh"}}>
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
    </div>
  )
}

