import React from 'react';

import classes from './CarDetails.module.scss';


const carDetails = (props) =>  (
  <>
    <div className={classes.CarDetails}>
      <div className={classes.Title}>
        {props.car.manufacturerName} {props.car.modelName}
      </div>

      <p className={classes.SubTitle}>
        Stock # {props.car.stockNumber} -&nbsp;
        {props.car.mileage ? props.car.mileage.number : ''}&nbsp;
        <span className="uppercase">{props.car.mileage.unit}</span> -&nbsp;
        <span className="capitalize">{props.car.fuelType}</span> -&nbsp;
        <span className="capitalize">{props.car.color}</span>
      </p>

      <p className={classes.Info}>
        This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.
      </p>
    </div>
  </>
);
export default carDetails;
