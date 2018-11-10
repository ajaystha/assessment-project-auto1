import React from 'react';

import classes from './CarSort.module.scss';

const sorts = [
  'None',
  'Mileage - Ascending',
  'Mileage - Descending'
]


const carSort = (props) => (
  <div className={classes.CarSort}>
    <label className="label">Sort by</label>

    <div className="select">
      <select>
        { sorts.map((item, index) => <option key={index}>{item}</option>) }
      </select>
    </div>

  </div>
);
export default carSort;
