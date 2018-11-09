import React from 'react';

import classes from './CarFilter.module.scss';


const carFilter = (props) => (
  <div className={classes.CarFilter}>
    <label className="label">{props.label}</label>

    <select className="select">
      <option defaultValue>
        {props.label === 'Color' ? 'All car colors' : 'All manufacturers'}
      </option>
      {props.options.map((x, y) => <option key={y}>{x}</option>)}
    </select>

  </div>
);
export default carFilter;
