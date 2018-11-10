import React from 'react';

import logo from '../../../assets/images/unnamed.jpg'


const carList = (props) => (
  <div className="panel">

    <div className="thumbnail">
      <img src={logo} alt="" />
    </div>

    <div>
      <div className="title">
        {props.car.manufacturerName} {props.car.modelName}
      </div>

      <p className="info">
        Stock # {props.car.stockNumber} -&nbsp;
        {props.car.mileage.number}&nbsp;
        <span className="upperCase">{props.car.mileage.unit}</span> -&nbsp;
        <span className="capitalize">{props.car.fuelType}</span> -&nbsp;
        <span className="capitalize">{props.car.color}</span>
      </p>

      <a href="/" className="link">View Details</a>
    </div>
  </div>
);
export default carList;
