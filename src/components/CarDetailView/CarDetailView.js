import React, { Component } from 'react';
import axios from 'axios';

import classes from './CarDetailView.module.scss';
import CarDetails from './CarDetails/CarDetails';
import FavoriteCar from './FavoriteCar/FavoriteCar';
import PageNotFound from '../PageNotFound/PageNotFound';


class CarDetailView extends Component {
  state = {
    car: {},
    isLoading: true,
    notFound: false,
  };

  componentDidMount() {
    this.fetchCarById();
  }

  fetchCarById() {
    this.setState({ isLoading: true });
    axios.get(`/cars/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ car: response.data.car });
      })
      .catch(err => {
        this.setState({ error: err.response })
        if (err.response.status === 404) {
          this.setState({ notFound: true });
        }
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  }


  render() {
    const imageStyle = {
      backgroundColor: '#EDEDED',
      backgroundSize: 'cover',
      width: '100%',
      height: '400px'
    };

    if (this.state.isLoading) {
      return <div className="loader"></div>;
    } else if (!this.state.loading && !this.state.notFound) {
      imageStyle.backgroundImage = `url(${this.state.car.pictureUrl})`;

      return (
        <>
          <div style={imageStyle}></div>

          <div className={classes.ContentWrapper}>
            <CarDetails car={this.state.car} />

            <div>
              <FavoriteCar carId={this.state.car.stockNumber} />
            </div>
          </div>
        </>
      );
    } else if (!this.state.loading && this.state.notFound) {
      return <PageNotFound />;
    }
  }
};
export default CarDetailView;
