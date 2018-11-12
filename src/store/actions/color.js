import axios from 'axios';

const getColors = () => {
  return axios.get('/colors')
    .then(response => response.data)
    .catch(handleErrors);
}


export const fetchColors = () => {
  return dispatch => {
    dispatch(fetchColorsBegin());
    return getColors()
      .then(response => {
        dispatch(fetchColorsSuccess(response.colors));
        return response;
      })
      .catch(err => dispatch(fetchColorsFailure(err)));
  }
}


function handleErrors(error) {
  return error.response;
}


export const fetchColorsBegin = () => ({
  type: 'FETCH_COLORS_BEGIN'
});

export const fetchColorsSuccess = colors => ({
  type: 'FETCH_COLORS_SUCCESS',
  payload: { colors }
});

export const fetchColorsFailure = error => ({
  type: 'FETCH_COLORS_FAILURE',
  payload: { error }
});
