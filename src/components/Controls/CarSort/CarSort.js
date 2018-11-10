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

        {sorts.map((x, y) => {
          console.log(x);

          return <option key={y}>{x}</option>}
        )}

      </select>
    </div>

  </div>
);
export default carSort;
