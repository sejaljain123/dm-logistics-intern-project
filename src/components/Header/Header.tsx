import React, { useState } from 'react';
import './Header.css';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <div className="mt-2 header w-100">
        <div className="header-Container  d-flex justify-content-between">
          <div className="header-left ms-8">
            <h2>DASHBOARD</h2>
            <h4>Check your overall statistics</h4>
          </div>
          <div className="header-right d-flex justify-content-evenly align-items-center ">
            <input type="date" className="date-picker border-1 p-1" />
            <DropdownButton
              id="dropdown-basic-button"
              title="All Day"
              className="ms-4 p-1 border-1"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <Dropdown>
              <Dropdown.Toggle className="dropmenu ms-4 border-1" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="hr"> </div>
      </div>
    </>
  );
};

export default Header;
