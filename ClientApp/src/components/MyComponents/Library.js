import axios from "axios";
import React, { useState } from "react";

export const Library = (props) => {

    const [libraryList, setLibraryList] = useState([]);

    const [searchParamName, setSearchParamName] = useState("");

    const searchNameHandler = (event) => {
        setSearchParamName(event.target.value.toString());
    }

    const searchItems = () => {
        let URL = searchParamName !== "" ? ("https://localhost:7261/api/Library/Search?name=" + searchParamName)
                                         : "https://localhost:7261/api/Library/GetAll";   
        axios.get(URL).then(response => {
            setLibraryList(response.data);
        })
    }

    const [newLibrary, setNewLibrary] = useState({ name: '', address: '', telephone: ''});
   
    const ChangeHandler = (event) => {
        const { name, value } = event.target;
        let newLibraryRef = { ...newLibrary, [name]: value }
        setNewLibrary(newLibraryRef);
    }

    const saveItem = () => {
        axios.post("https://localhost:7261/api/Library/AddNewLibrary", newLibrary).then(response => {
            let newLibraryRef = [...libraryList];
            newLibraryRef.push(response.data);
            setLibraryList(newLibraryRef);
            setNewLibrary({ name: '', address: '', telephone: '' });   
        });   
    }

    return (
        <div>
            <hr/>
            <h2>Library</h2> 
            <br/>
            <div className="row">
                <div className="col-md-4 mb-2">
                    <div className="card border border-secondary shadow-0">
                        <div className="card-header bg-secondary text-white"><b>Search</b> Library <span class="glyphicon glyphicon-envelope"></span></div>
                        <div className="card-body">
                             <div className="row">
                                  <div className="col-md-7">
                                      <label className="form-label">Name:</label>
                                    <input className="form-control" placeholder="Enter Name" name="name" type="text" value={searchParamName} onChange={searchNameHandler}/>
                                  </div>
                                  <div className="col-md-5">
                                      <label className="form-label">&nbsp;</label>
                                      <div className="btn-toolbar">
                                        <button type="button" className="btn-danger form-control" onClick={ searchItems }>Search</button>
                                      </div>
                                  </div>
                             </div>
                        </div>
                     </div>
                </div>
                <br/>
                <div className="col-md-8">
                     <div className="card border border-secondary shadow-0">
                         <div className="card-header bg-secondary text-white"><b>New</b> Library</div>
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-md-3">
                                    <label className="form-label">Name:</label>
                                    <input className="form-control" placeholder="Enter Name" name="name" type="text" value={newLibrary.name} onChange={ ChangeHandler }/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Address:</label>
                                    <input className="form-control" placeholder="Enter Address" name="address" type="text" value={newLibrary.address} onChange={ ChangeHandler } />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Telephone:</label>
                                    <input className="form-control" placeholder="Enter Telephone" name="telephone" type="text" value={newLibrary.telephone} onChange={ ChangeHandler } />
                                </div>
                                 <div className="col-md-2">
                                     <label className="form-label">&nbsp;</label>                                    
                                    <button type="button" className="btn-danger form-control" onClick={ saveItem }>Save</button>
                                 </div>
                             </div>
                         </div>
                      </div>
                </div>
            </div>
            <br />
            <div className="card border border-secondary shadow-0">
                <div className="card-header bg-secondary text-white"><b>Display</b> Libraries</div>
                <div className="card-body">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Telephone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {libraryList.map(library =>                    
                                <tr key={library.name}>
                                    <td>{library.name}</td>
                                    <td>{library.address}</td>
                                    <td>{library.telephone}</td>   
                                    <td>
                                        <div className="btn-toolbar">
                                            <button className="btn btn-info me-2">Edit</button>
                                            <button className="btn btn-success me-2">Save</button>
                                            <button className="btn btn-danger me-2">Delete</button>
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

