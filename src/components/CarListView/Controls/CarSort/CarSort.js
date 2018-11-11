import React from 'react';

import classes from './CarSort.module.scss';

const sorts = [
  {
    label: 'None',
    type: 'none',
  },
  {
    label: 'Mileage - Ascending',
    type: 'asc'
  },
  {
    label: 'Mileage - Descending',
    type: 'des'
  }
];


const carSort = (props) => (
  <div className={classes.CarSort}>
    <label className="label">Sort by</label>

    <div className="select">
      <select
        onChange={(ev) => props.changed(ev.target.value)}>

        { sorts.map((item, index) => <option key={index} value={item.type}>{item.label}</option>) }

      </select>
    </div>

  </div>
);
export default carSort;
