import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Toolbar.module.scss';
import auto1Logo from '../../../assets/images/logo.png';
import Navigation from './Navigation/Navigation';


const header = (props) => (
  <header className={classes.Header}>
    <div className={classes.logo}>
      <Link to="/">
        <img src={auto1Logo} alt="Auto1" />
      </Link>
    </div>

    <nav>
      <Navigation />
    </nav>
  </header>
);
export default header;
