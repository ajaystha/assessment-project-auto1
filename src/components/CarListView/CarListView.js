import React from 'react';

import CarSort from './Controls/CarSort/CarSort';
import CarList from './CarList/CarList';
import Pagination from './Pagination/Pagination';

import classes from './CarListView.module.scss';


const carListView = (props) => (
  <>
    <div className={classes.Header}>
      <div>
        <div className={classes.Title}>Available cars</div>
        <p>Showing {props.currentPage * 10} of {props.totalPageCount * 10} results</p>
      </div>

      <CarSort
        changed={(value) => props.sortUpdated(value)} />
    </div>

    <CarList cars={props.cars} />

    <Pagination
      currentPage={props.currentPage}
      totalPageCount={props.totalPageCount}
      clicked={(value) => props.pageUpdated(value)}/>
  </>
);
export default carListView;
