import React from 'react';

import classes from './Layout.module.scss';

import Toolbar from '../Toolbar/Toolbar';
import Footer from '../Footer/Footer';


const layout = (props) => (
  <>
    <Toolbar />

    <main className={classes.Content}>
      { props.children }
    </main>

    <Footer />
  </>
);
export default layout;
