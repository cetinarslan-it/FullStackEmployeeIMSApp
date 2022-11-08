import React, { Component } from 'react';
import "./Home.css";


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className="text-center" >
                <h1>Welcome to my Employee...</h1>
                <hr></hr>
                <br/>
                <button className="btn btn-home"> <a href="/employee" style={{ textDecoration: "none", color: "ghostwhite", fontWeight: "bold" }}>Click here <br></br> to visit  the employee </a></button>
            </div>
        );
    }
}