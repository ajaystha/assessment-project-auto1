import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.scss';


const navigation = () => (
  <ul className={classes.Navigation}>
    <li><Link to="/">Purchase</Link></li>
    <li><Link to="/">My Orders</Link></li>
    <li><Link to="/">Sell</Link></li>
  </ul>
);
export default navigation;
