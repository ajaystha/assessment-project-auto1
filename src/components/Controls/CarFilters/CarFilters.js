import React from 'react';

import CarFilter from './CarFilter/CarFilter';
import classes from './CarFilters.module.scss';


const carFilters = (props) => (

  <div className={classes.CarFilters}>

    <CarFilter
      label="Color"
      options={props.colors}
    />

    <CarFilter
      label="Manufacturer"
      options={props.brands}
    />


    <button type="button" className="button">Filter</button>
  </div>
);
export default carFilters;
