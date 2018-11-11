import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Toolbar.module.scss';
import logo from '../../../assets/images/logo.png';
import Navigation from './Navigation/Navigation';


const header = (props) => (
  <header className={classes.Header}>
    <div className={classes.logo}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>

    <nav>
      <Navigation />
    </nav>
  </header>
);
export default header;
