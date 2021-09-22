import { throws } from 'assert';
import React from 'react';
import { Table } from 'react-bootstrap';
import './Project.css';
import { list } from './list';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';

const Project = () => {
  return (
    <div className="project mt-3">
      <div className="Project-Container p-2">
        <div className="d-flex justify-content-between w-100 ms-2 p-2">
          <div>
            <h5>Recent Projects</h5>
            <p>Check all the current projects</p>
          </div>
          <DropdownButton
            id="dropdown-basic-button"
            title="All Projects"
            className="ms-4 p-1 border-1"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <Table striped bordered hover size="sm" className="tab">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Company </th>
              <th>Employees</th>
              <th>Raters</th>
              <th className="w-10">Participaton</th>
              <th>Expiry Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="list">
            {list.map((item, index) => {
              return (
                <tr className="tb" key={index}>
                  <td>{item.project_name}</td>
                  <td>{item.company}</td>
                  <td>{item.employees}</td>
                  <td>{item.raters}</td>
                  <td className="w-10">{item.participation}</td>
                  <td>{item.expiry_date}</td>
                  <td>{item.status}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Project;
