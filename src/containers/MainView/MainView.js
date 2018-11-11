import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCars, fetchColors, fetchManufacturers } from '../../store/actions/';

import classes from './MainView.module.scss';
import CarFilters from '../../components/CarListView/Controls/CarFilters/CarFilters';
import CarListView from '../../components/CarListView/CarListView';


class MainView extends Component {
  state = {
    color: undefined,
    manufacturer: undefined,
    sort: undefined,
    page: 1
  };

  componentDidMount() {
    this.props.fetchCars(this.state);
    this.props.fetchColors();
    this.props.fetchManufacturers();
  }


  // update filters value
  updateFilterHandler = (selectedValue) => {
    this.setState({
      color: selectedValue.color || undefined,
      manufacturer: selectedValue.manufacturer || undefined,
      page: 1,
    }, () => {
      this.props.fetchCars(this.state);
    });
  }

  // update sort value
  updateSortHandler = (value) => {
    this.setState({
      sort: (value === 'none') ? undefined : value
    }, () => {
      this.props.fetchCars(this.state);
    });
  }

  // update page
  updatePageHandler = (value) => {
    let currentPage = this.state.page;

    if (value === 'first') { currentPage = 1; }
    else if (value === 'previous') {  currentPage -= 1; }
    else if (value === 'next') { currentPage += 1; }
    else if (value === 'last') { currentPage = this.props.totalPageCount; }

    this.setState({
      page: currentPage
    }, () => {
      this.props.fetchCars(this.state);
      this.scrollUp();
    });
  }

  // page scroll to top function
  scrollUp = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 0) {
      window.scrollTo(0, top - 50);
      setTimeout(this.scrollUp, 10);
    }
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
            currentPage={this.state.page}
            totalPageCount={this.props.totalPageCount}
            sortUpdated={this.updateSortHandler}
            pageUpdated={this.updatePageHandler}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    cars: state.cars,
    colors: state.colors,
    manufacturers: state.manufacturers,
    totalPageCount: state.totalPageCount,
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
