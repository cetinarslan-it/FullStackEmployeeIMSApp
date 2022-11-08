import React, { useState } from "react";
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
import './NavMenu.css';

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div
        style={{
          display: "block",
          width: "100%",
          margin: "auto",
        }}      
      >
        <Navbar dark expand="md" style={{backgroundColor:"darkred" }} fixed="top">
          <NavbarBrand href="/">Employee Information Management System (EIMS)</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar >
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Employee
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                      <NavLink style={{color:"black"}} href="/employeeAdd">Add</NavLink>
                  </DropdownItem>
                  <DropdownItem >
                     <NavLink style={{color:"black"}} href="/employeeList">List</NavLink>
                  </DropdownItem>
                </DropdownMenu>                
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/login">Log out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
};