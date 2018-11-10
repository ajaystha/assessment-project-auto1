import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCars, fetchColors, fetchManufacturers } from '../../store/actions/';

import classes from './MainView.module.scss';
import CarFilters from '../../components/Controls/CarFilters/CarFilters';
import CarListView from '../../components/CarListView/CarListView';


class MainView extends Component {

  componentDidMount() {
    this.props.fetchCars();
    this.props.fetchColors();
    this.props.fetchManufacturers();
  }


  render() {
    return (
      <div className={classes.MainView}>
        <div className={classes.Filters}>
          <CarFilters
            colors={this.props.colors}
            brands={this.props.manufacturers}
          />
        </div>


        <div className={classes.CarList}>
          <CarListView
            cars={this.props.cars}
            totalPageCount={this.props.totalPageCount} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalPageCount: state.totalPageCount,
    cars: state.cars,
    colors: state.colors,
    manufacturers: state.manufacturers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCars: function() {
      dispatch(fetchCars());
    },
    fetchColors: function() {
      dispatch(fetchColors());
    },
    fetchManufacturers: function() {
      dispatch(fetchManufacturers());
    },
  };
};

const connectedMainView = connect(mapStateToProps, mapDispatchToProps)(MainView)

export default connectedMainView;
