import React from 'react';
import './Stats.css';
import { PieChart, Pie, Cell } from 'recharts';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';

const Stats = () => {
  const data = [
    { name: 'Not Completed Survey', survey: 65, color: '#fedd84' },
    { name: 'Completed Survey', survey: 35, color: '#febe13' },
  ];
  const active = 0;

  return (
    <div className="stats mt-3 ">
      <div className="stats__container p-2">
        <div className="statshead d-flex ">
          <div className="statshead-item me-5">
            <h5>Employees</h5>
            <p>Check emp participation</p>
          </div>
          <div className="statshead-item me-5">
            <h5>Raters</h5>
            <p>Check raters participation</p>
          </div>
          <div className="statshead-item me-5">
            <h5>Project Management</h5>
            <p>Check stats on projects’ management</p>
          </div>
        </div>
        <hr className="mt-0" />
        <div className="statsbody d-flex justify-content-around mt-0">
          <PieChart width={400} height={400} className="ms-5">
            <Pie
              cx="50%"
              cy="50%"
              activeIndex={active}
              activeShape={(props) => {
                const RADIAN = Math.PI / 180;
                const {
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  startAngle,
                  endAngle,
                  fill,
                  payload,
                  percent,
                  value,
                } = props;
                const sin = Math.sin(-RADIAN * midAngle);
                const cos = Math.cos(-RADIAN * midAngle);
                const sx = cx + (outerRadius + 10) * cos;
                const sy = cy + (outerRadius + 10) * sin;
                const mx = cx + (outerRadius + 30) * cos;
                const my = cy + (outerRadius + 30) * sin;
                const ex = mx + (cos >= 0 ? 1 : -1) * 22;
                const ey = my;
                return (
                  <g>
                    <text textAnchor="middle" fill="#000000" x={cx} y={cy} dy={8}>
                      35%
                    </text>
                  </g>
                );
              }}
              data={data}
              dataKey="survey"
              outerRadius={150}
              innerRadius={100}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
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
        <div className="d-flex justify-content-around w-100">
          <div className="d-flex w-50">
            <div className="dot1 me-3"></div>
            <p>Not Completed Survey</p>
          </div>
          <div className="d-flex">
            <p className="dot2 me-3"></p>
            <p>Completed Survey</p>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex w-70 foot">
            <img width="15px" height="15px" src="/assets/tint.svg" />
            <p className="ms-2">
              You can share this graphical representation with the above listed data
            </p>
          </div>
          <Button variant="outline-secondary">
            <div className="d-flex align-items-center justify-content-center">
              <img width="15px" height="15px" src="/assets/Share.svg" />
              <p className="ms-1 mb-0 p-0 share">Share</p>
            </div>
          </Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default Stats;
