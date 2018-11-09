import React, { Component } from 'react';

import classes from './DisplayCars.module.scss';
import CarFilters from '../../components/Controls/CarFilters/CarFilters';
console.log(classes.CarList);



class DisplayCars extends Component {
  render() {
    return (
      <div className={classes.DisplayCars}>
        <div className={classes.Filters}>
          <CarFilters />
        </div>

        <div className={classes.CarList}>
          Right - Car List
        </div>
      </div>
    );
  }
}
export default DisplayCars;
