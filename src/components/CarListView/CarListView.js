import React from 'react';

import CarSort from '../Controls/CarSort/CarSort';
import CarList from '../CarList/CarList';
import Pagination from '../Pagination/Pagination';

import classes from './CarListView.module.scss';


const carListView = (props) => (
  <>
    <div className={classes.Header}>
      <div>
        <div className={classes.Title}>Available cars</div>
        <p>Showing</p>
      </div>

      <CarSort
        changed={(value) => props.sortUpdated(value)} />
    </div>

    <CarList cars={props.cars} />

    <Pagination totalPageCount={props.totalPageCount} />
  </>
);
export default carListView;
