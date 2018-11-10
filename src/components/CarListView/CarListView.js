import React from 'react';

import CarSort from '../Controls/CarSort/CarSort';
import CarList from '../CarList/CarList';
import Pagination from '../Pagination/Pagination';

import classes from './CarListView.module.scss';


const carListView = (props) => (
  <>
    <div className={classes.Header}>
      <div>
        <div className="title">Available cars</div>
        <p>Showing</p>
      </div>
      <CarSort />
    </div>

    <CarList cars={props.cars} />

    <Pagination totalPageCount={props.totalPageCount} />
  </>
);
export default carListView;
