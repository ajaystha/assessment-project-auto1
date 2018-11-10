import React from 'react';

// const inlineStyle
import image from '../../assets/images/unnamed.jpg';
import classes from './CarDetails.module.scss';
import FavouriteCar from '../FavouriteCar/FavouriteCar';


const carDetails = (props) => {
  var imageStyle = {
    backgroundColor: '#EDEDED',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '400px'
  };

  return (
    <>
      <div style={imageStyle}></div>

      <div className={classes.ContentWrapper}>

        <div className={classes.Description}>
          <div className={classes.Title}>Chrysler Crossfire</div>
          <p className={classes.SubTitle}>Stock # 61184 - 152.263 KM - Petrol - Yellow</p>
          <p className={classes.Info}>This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.</p>
        </div>

        <div>
          <FavouriteCar />
        </div>


      </div>

    </>
  )
};
export default carDetails;
