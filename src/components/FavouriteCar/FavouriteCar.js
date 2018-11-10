import React from 'react';

import classes from './FavouriteCar.module.scss';


const carSort = (props) => (
  <div className={classes.FavouriteCar}>
    <p>If you like this car, click the button and save it in your collection of favourite items.</p>

    <div className={classes.btn}>
      <button className="button">Save</button>
    </div>
  </div>
);
export default carSort;
