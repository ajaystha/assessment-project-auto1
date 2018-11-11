import React from 'react';

import classes from './CarFilter.module.scss';


const carFilter = (props) => (
  <div className={classes.CarFilter}>
    <label className="label">{props.label}</label>

    <div className="select">
      <select
        onChange={(ev) => props.changed(ev.target.value)}>

        <option defaultValue>
          { props.label === 'Color' ? 'All car colors' : 'All manufacturers' }
        </option>

        { props.options.map((item, index) => <option key={index}>{item}</option>) }

      </select>
    </div>

  </div>
);
export default carFilter;
