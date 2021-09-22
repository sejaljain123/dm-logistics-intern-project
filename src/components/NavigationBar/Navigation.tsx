import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Navigation.css';

const NavigationBar = () => {
  return (
    <Navbar className="navbg" collapseOnSelect expand="lg" variant="dark">
      <div className="navContainer justify-content-between ">
        <div className="nav-left d-flex justify-content-around align-items-center ms-8">
          <Navbar.Brand>
            <img src="/assets/Group 9359.png" />
          </Navbar.Brand>
        </div>
        <div className="nav-right d-flex justify-content-between">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="#features" className="nav-item">
              <img src="/assets/menu.svg" />
              <p className="text-center ms-1 mb-0">Dashboard</p>
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              <img src="assets/buildings.svg" />
              <p className="text-center ms-1 mb-0">Company</p>
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              <img src="assets/Group 9357.svg" />
              <NavDropdown title="My Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Projects</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Templates</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              <img src="assets/report.svg" />
              <p className="text-center ms-1 mb-0">My Reports</p>
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              <img src="assets/doubt.svg" />
              <p className="text-center ms-1 me-4 mb-0">Help</p>
            </Nav.Link>

            <div className="vl"></div>

            <Nav.Link href="#pricing" className="nav-item">
              <img className="ms-4" src="assets/Group 9358.svg" />
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              <div className="profile">
                <p>IO</p>
              </div>
              <NavDropdown title="Irna Orbes" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Preferences</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Last Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
