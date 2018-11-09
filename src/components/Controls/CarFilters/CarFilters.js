import React from 'react';

import CarFilter from './CarFilter/CarFilter';
import classes from './CarFilters.module.scss';

const filters = [
  {
    label: 'Color',
    options: ['Red', 'Blue', 'Green']
  },
  {
    label: 'Manufacturer',
    options: ['Ferrari', 'BMW', 'Renault', 'Fiat']
  },
];


const carFilters = (props) => (
  <div class={classes.CarFilters}>
    {filters.map(filter => (
      <CarFilter key={filter.label}
        label={filter.label}
        options={filter.options}
      />
    ))}

    <button type="button" className="button">Filter</button>
  </div>
);
export default carFilters;
