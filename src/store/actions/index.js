import axios from 'axios';

import {
  FETCH_CARS,
  FETCH_COLORS,
  FETCH_MANUFACTURERS,
} from '../actionTypes';


export function fetchCars(filters) {
  return function (dispatch) {
    dispatch({
      type: FETCH_CARS,
    });

    return axios.get('/cars', { params: filters})
      .then(response => {
        dispatch({
          type: 'FETCH_CARS_SUCCESS',
          cars: response.data.cars,
          totalPageCount: response.data.totalPageCount,
        });
      })
  }
}


export function fetchColors() {
  return function(dispatch) {
    dispatch({
      type: FETCH_COLORS,
    });

    return axios.get('/colors')
      .then(response => {
        dispatch({
          type: 'FETCH_COLORS_SUCCESS',
          colors: response.data.colors,
        });
      })
  }
}


export function fetchManufacturers() {
  return function(dispatch) {
    dispatch({
      type: FETCH_MANUFACTURERS,
    });

    return axios.get('/manufacturers')
      .then(response => {
        dispatch({
          type: 'FETCH_MANUFACTURERS_SUCCESS',
          manufacturers: response.data.manufacturers.map(item => item.name),
        });
      })
  }
}
