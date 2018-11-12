import axios from 'axios';

const getCars = filters => {
  return axios.get('/cars', { params: filters })
    .then(response => response.data)
    .catch(handleErrors);
}


export const fetchCars = filters => {
  return dispatch => {
    dispatch(fetchCarsBegin());
    return getCars(filters)
      .then(response => {
        dispatch(fetchCarsSuccess(response.cars, response.totalPageCount));
        return response;
      })
      .catch(err => dispatch(fetchCarsFailure(err)));
  }
}


function handleErrors(error) {
  return error.response;
}


export const fetchCarsBegin = () => ({
  type: 'FETCH_CARS_BEGIN'
});

export const fetchCarsSuccess = (cars, totalPageCount) => ({
  type: 'FETCH_CARS_SUCCESS',
  payload: { cars, totalPageCount }
});

export const fetchCarsFailure = error => ({
  type: 'FETCH_CARS_FAILURE',
  payload: { error }
});
