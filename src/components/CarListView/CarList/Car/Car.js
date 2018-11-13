import React from 'react';
import { Link } from 'react-router-dom';


const carList = (props) => (
  <div className="panel">

    <div className="panel--thumbnail">
      <img src={props.car.pictureUrl} alt={props.car.modelName} />
    </div>

    <div className="panel--details">
      <div className="panel--details--title">
        {props.car.manufacturerName} {props.car.modelName}
      </div>

      <p className="panel--details--info">
        Stock # {props.car.stockNumber} -&nbsp;
        {props.car.mileage.number}&nbsp;
        <span className="uppercase">{props.car.mileage.unit}</span> -&nbsp;
        <span className="capitalize">{props.car.fuelType}</span> -&nbsp;
        <span className="capitalize">{props.car.color}</span>
      </p>

      <Link to={`/cars/${props.car.stockNumber}`}
        className="link">View Details</Link>
    </div>
  </div>
);
export default carList;
