import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Pagination.module.scss';


const pagination = (props) => (
  <div className={classes.Pagination}>
    <Link to="/" className="link">First</Link>
    <Link to="/" className="link">Previous</Link>
    <div>Page 2 of {props.totalPageCount}</div>
    <Link to="/" className="link">Next</Link>
    <Link to="/" className="link">Last</Link>
  </div>
);
export default pagination;
