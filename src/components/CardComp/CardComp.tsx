import React from 'react';

import './CardComp.css';

const CardComp = () => {
  return (
    <div className="card-container mt-3 d-flex">
      <div className="Card1 d-flex">
        <div className="Card1-content d-flex flex-column align-items-center justify-content-center">
          <p className="Card1-title mb-0">Total Company</p>
          <div className="Card1-items d-flex justify-content-center">
            <p className="me-2">+1</p>
            <span>(09-08-2021)</span>
          </div>
        </div>
        <h1 className="head">100</h1>
      </div>

      <div className="Card2-container d-flex ms-2">
        <div className="Card2-content d-flex flex-column justify-content-center ms-4">
          <h1 className="head ms-2">250</h1>
          <p className="Card2-title mb-0 ms-2" style={{ color: '#009074' }}>
            Total Projects
          </p>
          <div className="Card2-items d-flex justify-content-start ms-2">
            <p className="me-2" style={{ color: '#5ee520' }}>
              +1
            </p>
            <span>(09-08-2021)</span>
          </div>
        </div>
        <div className="vl2"></div>
        <div className="Card2sub-content d-flex flex-column  justify-content-center ">
          <h1 className="card2sub-head" style={{ color: '#009074' }}>
            200
          </h1>
          <p className="Card2sub-title mb-0">Active Projects</p>
        </div>
        <div className="vl1"></div>
        <div className="Card2sub-content d-flex flex-column justify-content-center ">
          <h1 className="card2sub-head">50</h1>
          <p className="Card2sub-title mb-0">Closed Projects</p>
        </div>
        <div className="vl1"></div>
        <div className="Card2sub-content d-flex flex-column justify-content-center ">
          <h1 className="card2sub-head">400</h1>
          <p className="Card2sub-title mb-0">Total Employees</p>
        </div>
        <div className="vl1"></div>
        <div className="Card2sub-content d-flex flex-column  justify-content-center me-4 ">
          <h1 className="card2sub-head">500</h1>
          <p className="Card2sub-title mb-0">Total Raters </p>
        </div>
      </div>
      <div className="Card2-container d-flex ms-2">
        <div className="Card2-content d-flex flex-column justify-content-center ms-4">
          <h1 className="head ms-2">250</h1>
          <p className="Card2-title mb-0 ms-2" style={{ color: '#009074' }}>
            Total Projects
          </p>
          <div className="Card2-items d-flex justify-content-start ms-2">
            <p className="me-2" style={{ color: '#5ee520' }}>
              +1
            </p>
            <span>(09-08-2021)</span>
          </div>
        </div>
        <div className="vl2"></div>
        <div className="Card4-container d-flex flex-column ">
          <div className="Card2sub-content d-flex flex-column justify-content-center  ">
            <h5 className="card4sub-head" style={{ color: '#009074' }}>
              01
            </h5>
            <p className="Card2sub-title mb-0">New-tickets </p>
          </div>
          <hr />
          <div className="Card2sub-content d-flex flex-column  justify-content-center ">
            <h5 className="card4sub-head ">01</h5>
            <p className="Card2sub-title mb-0">New Review </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
