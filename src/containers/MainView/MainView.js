import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import classes from './MainView.module.scss';
import CarFilters from '../../components/Controls/CarFilters/CarFilters';


class MainView extends Component {
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
      <div className={classes.MainView}>
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

const mapStateToProps = state => {
  return {
    colors: state.colors,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     abc
//   };
// };

export default MainView;
