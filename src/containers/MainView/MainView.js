import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCars, fetchColors, fetchManufacturers } from '../../store/actions/';

import classes from './MainView.module.scss';
import CarFilters from '../../components/Controls/CarFilters/CarFilters';
import CarListView from '../../components/CarListView/CarListView';


class MainView extends Component {
  state = {
    color: undefined,
    manufacturer: undefined,
    sort: undefined,
    page: '1'
  };

  componentDidMount() {
    this.props.fetchCars(this.state);
    this.props.fetchColors();
    this.props.fetchManufacturers();
  }


  updateFilterHandler = (selectedValue) => {
    this.setState({
      color: selectedValue.color || undefined,
      manufacturer: selectedValue.manufacturer || undefined,
    },
      () => {
        this.props.fetchCars(this.state);
      });
  }

    updateSortHandler = (value) => {
      this.setState({
        sort: (value === 'none') ? undefined : value
      },
        () => {
          this.props.fetchCars(this.state);
      });
    }


  render() {
    return (
      <div className={classes.MainView}>
        <div className={classes.Filters}>
          <CarFilters
            colors={this.props.colors}
            brands={this.props.manufacturers}
            filterUpdated={this.updateFilterHandler}
          />
        </div>

        <div className={classes.CarList}>
          <CarListView
            cars={this.props.cars}
            totalPageCount={this.props.totalPageCount}
            sortUpdated={this.updateSortHandler}
          />
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
    fetchCars: function(filters) {
      dispatch(fetchCars(filters));
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
