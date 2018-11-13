import axios from 'axios';

const getManufacturers = () => {
  return axios.get('/manufacturers')
    .then(response => response.data)
    .catch(handleErrors);
}


export const fetchManufacturers = () => {
  return dispatch => {
    dispatch(fetchManufacturersBegin());
    return getManufacturers()
      .then(response => {
        dispatch(fetchManufacturersSuccess(response.manufacturers.map(item => item.name)));
        return response;
      })
      .catch(err => dispatch(fetchManufacturersFailure(err)));
  }
}


function handleErrors(error) {
  return error.response;
}


export const fetchManufacturersBegin = () => ({
  type: 'FETCH_MANUFACTURERS_BEGIN'
});

export const fetchManufacturersSuccess = manufacturers => ({
  type: 'FETCH_MANUFACTURERS_SUCCESS',
  payload: { manufacturers }
});

export const fetchManufacturersFailure = error => ({
  type: 'FETCH_MANUFACTURERS_FAILURE',
  payload: { error }
});
