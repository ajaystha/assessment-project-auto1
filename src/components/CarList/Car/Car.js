import React from 'react';

import logo from '../../../assets/images/unnamed.jpg'


const carList = (props) => (
    <div className="panel">

      <div className="thumbnail">
        <img src={logo} alt="" />
      </div>

      <div>
        <div className="title">Test</div>
        <p className="info">description</p>
        <a href="/" className="link">View Details</a>
      </div>
    </div>
  );
export default carList;
