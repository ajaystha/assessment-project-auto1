import React, { Component } from 'react';
import axios from 'axios';

import classes from './DisplayCars.module.scss';
import CarFilters from '../../components/Controls/CarFilters/CarFilters';
// import CarFilter from '../../components/Controls/CarFilters/CarFilter/CarFilter';



class DisplayCars extends Component {
  state = {
    colors: [],
    brands: [],
    manufacturers: []
  }


  componentDidMount() {
    // Get colors
    axios.get('/colors')
      .then(response => {
        this.setState({ colors: response.data.colors });
      })
      .catch(err => {
        console.log(err);
      })


    // Get manufacturers
    axios.get('/manufacturers')
      .then(response => {
        this.setState({ manufacturers: response.data.manufacturers });
        return response.data.manufacturers;
      })
      .then(response => {
        const brands = response.map(item => item.name);
        this.setState({ brands: brands });
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className={classes.DisplayCars}>
        <div className={classes.Filters}>
          <CarFilters
            colors={this.state.colors}
            brands={this.state.brands}
          />
        </div>


        <div className={classes.CarList}>
          Right - Car List
        </div>
      </div>
    );
  }
}
export default DisplayCars;
