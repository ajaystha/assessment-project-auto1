import React from 'react';

import CarFilter from './CarFilter/CarFilter';
import classes from './CarFilters.module.scss';


const selectedFilters = {};


const carFilters = (props) => {

  const updateSelectedFilters = (type, value) => {
    selectedFilters[type] = (value === 'All manufacturers' || value === 'All car colors') ? undefined : value;
  }

  return (
    <div className={classes.CarFilters}>

      <CarFilter
        label="Color"
        options={props.colors.colors}
        changed={(value) => updateSelectedFilters('color', value)}
      />

      <CarFilter
        label="Manufacturer"
        options={props.brands.manufacturers}
        changed={(value) => updateSelectedFilters('manufacturer', value)}
      />

      <button type="button"
        className="button"
        onClick={() => props.filterUpdated(selectedFilters)}
      >Filter</button>
    </div>
  )
};
export default carFilters;
