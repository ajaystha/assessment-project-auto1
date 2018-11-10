import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.scss';


const navigation = () => (
  <ul className={classes.Navigation}>
    <li><Link to="/car-info">Purchase</Link></li>
    <li><Link to="/404">My Orders</Link></li>
    <li><Link to="/404">Sell</Link></li>
  </ul>
);
export default navigation;
