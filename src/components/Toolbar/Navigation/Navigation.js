import React from 'react';

import classes from './Navigation.module.scss';


const navigation = () => (
  <ul className={classes.Navigation}>
    <li><a href="/">Purchase</a></li>
    <li><a href="/">My Orders</a></li>
    <li><a href="/">Sell</a></li>
  </ul>
);
export default navigation;
