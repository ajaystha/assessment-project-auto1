import React from 'react';

import CarSort from './Controls/CarSort/CarSort';
import CarList from './CarList/CarList';
import Pagination from './Pagination/Pagination';

import CarPlaceholder from './CarList/CarPlaceholder/CarPlaceholder';

import classes from './CarListView.module.scss';


const carListView = (props) => (
  <>
    <div className={classes.Header}>
      <div>
        <div className={classes.Title}>Available cars</div>
        <p>Showing {props.currentPage * 10} of {(props.cars.totalPageCount || 0) * 10} results</p>
      </div>

      <CarSort
        changed={(value) => props.sortUpdated(value)} />
    </div>

    { props.cars.isFetching ?
      <CarPlaceholder />:
      <CarList cars={props.cars.cars} />
    }

    <Pagination
      currentPage={props.currentPage}
      totalPageCount={props.cars.totalPageCount}
      clicked={(value) => props.pageUpdated(value)}/>
  </>
);
export default carListView;
