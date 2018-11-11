import React from 'react';

import classes from './CarPlaceholder.module.scss';


const carPlaceholder = (props) => (
  <div className="panel">
    <div className="thumbnail"></div>

    <div className={classes.Blocks}>
      <div className={classes.FirstBlock}></div>
      <div className={classes.SecondBlock}></div>
      <div className={classes.ThirdBlock}></div>
    </div>
  </div>
);
export default carPlaceholder;
