import React from 'react';

import classes from './Toolbar.module.scss';
import auto1Logo from '../../assets/images/logo.png';
import Navigation from './Navigation/Navigation';


const header = (props) => (
  <header className={classes.Header}>
    <div className={classes.logo}>
      <img src={auto1Logo} alt="Auto1" />
    </div>

    <nav>
      <Navigation />
    </nav>
  </header>
);
export default header;
