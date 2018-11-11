import React, { Component } from 'react';

import classes from './FavoriteCar.module.scss';


class FavoriteCar extends Component {
  state = {
    isFav: false,
  };

  componentDidMount() {
    this.checkFavorites();
  }

  setItem(items) {
    localStorage.setItem('favCars', JSON.stringify(items));
  }

  getItem() {
    return JSON.parse(localStorage.getItem('favCars'));
  }

  checkFavorites() {
    const allFavCars = this.getItem();

    if (allFavCars && allFavCars.indexOf(this.props.carId) >= 0) {
      this.setState({ isFav: true });
    } else {
      this.setState({ isFav: false });
    }
  }

  setFavorite() {
    const allFavsCars = this.getItem();

    if (allFavsCars) {
      if (allFavsCars.indexOf(this.props.carId) === -1) {
        allFavsCars.push(this.props.carId);
        this.setItem(allFavsCars);
      }
    } else {
      this.setItem([this.props.carId]);
    }

    this.setState({ isFav: true });
  }

  removeFavorite() {
    const allFavsCars = this.getItem();
    const index = allFavsCars.indexOf(this.props.carId);

    if (index >= 0) {
      allFavsCars.splice(index, 1);
      this.setItem(allFavsCars);
    }

    this.setState({ isFav: false });
  }


  toggleFav = () => {
    if (this.state.isFav) { this.removeFavorite(); }
    else { this.setFavorite(); }
  }


  render() {
    return (
      <div className={classes.FavoriteCar}>
        <p>If you like this car, click the button and save it in your collection of favorite items.</p>

        <div className={classes.btn}>
          <button className="button"
            onClick={this.toggleFav}
          >{ this.state.isFav ? 'Unsave' : 'Save'}</button>
        </div>
      </div>
    );
  }

};
export default FavoriteCar;
