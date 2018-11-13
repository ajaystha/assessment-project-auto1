import React from 'react';

import Car from './Car/Car';


const carList = (props) => (
  <>
    { props.cars.map((item, index) => <Car key={index} car={item} />) }
  </>
);
export default carList;
