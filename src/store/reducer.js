// import {
//   FETCH_COLORS,
//   FETCH_MANUFACTURERS,
// } from './actionTypes';


const initialState = {
  cars: [],
  colors: [],
  manufacturers: [],
  totalPageCount: 0,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COLORS_SUCCESS':
      return  { ...state, colors: action.colors};

    case 'FETCH_MANUFACTURERS_SUCCESS':
      return { ...state, manufacturers: action.manufacturers};

    case 'FETCH_CARS_SUCCESS':
      return { ...state, cars: action.cars, totalPageCount: action.totalPageCount};

    default:
      return state;
  }
};
export default reducer;
