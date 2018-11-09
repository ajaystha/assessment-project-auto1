import * as actionTypes from './actions';


const initialState = {
  cars: [],
  colors: [],
  manufacturers: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CARS:
      return {

      };

    case actionTypes.GET_COLORS:
      return {

      };

    case actionTypes.GET_MANUFACTURERS:
      return {

      };

    default:
      return state;
  }

};
export default reducer;
