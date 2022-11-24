import React, { useContext, useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./NavMenu.css";
import SweetAlert from "react-bootstrap-sweetalert";
import loginContext from "../LoginContext";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

export const NavMenu = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const logoutHandler = (e) => {
    e.preventDefault();
    setLogoutSuccesfull(true);
    setIsLoggedIn(false);
    localStorage.removeItem("Token");
    localStorage.removeItem("Role");
    navigate("/");
  };

  const [logoutSuccesfull, setLogoutSuccesfull] = useState(false);
  const { setIsLoggedIn } = useContext(loginContext);

  const role = localStorage.getItem("Role");

  console.log(role + "   q1");
  

  return (
    <div
      style={{
        display: "block",
        width: "100%",
        margin: "auto",
      }}
    >
      <Navbar
        dark
        expand="md"
        style={{ backgroundColor: "darkred" }}
        fixed="top"
      >
        <NavbarBrand href="/">EIMSystem</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {localStorage.getItem("Token") !== null && (
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              {role === "admin" && (
                <NavItem>
                  <NavLink href="/admin">Admin</NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink href="/employee">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Employee
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink style={{ color: "black" }} href="/employeeAdd">
                      Add
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink style={{ color: "black" }} href="/employeeList">
                      List
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/" onClick={logoutHandler}>
                  Log out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        )}
      </Navbar>
      {logoutSuccesfull && (
        <SweetAlert
          success
          confirmBtnText="Ok"
          confirmBtnBsStyle="success"
          title="You logged out succesfully!"
          onConfirm={() => setLogoutSuccesfull(false)}
        >
          Please click "OK" to close
        </SweetAlert>
      )}
    </div>
  );
};
