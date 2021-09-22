import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="mt-5 pt-2 footer">
      <div className="footer__container d-flex justifiy-content-between w-100 pt-3">
        <p className="ms-1 w-100">Copyright © 2021 GrowMetrix PTY LTD. All Rights Reserved.</p>
        <div className="d-flex  ms-5 w-100 justify-content-end">
          <p className="me-5">TERMS & CONDITIONS</p>
          <p className="me-5">COOKIE POLICY</p>
          <p className="me-5">PRIVACY POLICY</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
