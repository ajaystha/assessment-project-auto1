import React from 'react';

import classes from './Pagination.module.scss';


const pagination = (props) => {
  const handleClick = (ev, value) => {
    ev.preventDefault();

    props.clicked(value);
  }


  return (
    <div className={classes.Pagination}>
      <button
        onClick={(ev) => handleClick(ev, 'first')}
        disabled={props.currentPage === 1}>First</button>
      <button
        onClick={(ev) => handleClick(ev, 'previous')}
        disabled={props.currentPage === 1}>Previous</button>

      <div>Page {props.currentPage} of {props.totalPageCount}</div>

      <button
        onClick={(ev) => handleClick(ev, 'next')}
        disabled={props.currentPage === props.totalPageCount}>Next</button>
      <button
        onClick={(ev) => handleClick(ev, 'last')}
        disabled={props.currentPage === props.totalPageCount}>Last</button>
    </div>
  );
};
export default pagination;
