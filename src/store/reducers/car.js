const initialState = {
  cars: [],
  totalPageCount: 0,
  isFetching: false,
  error: null,
};


const carReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_CARS_BEGIN':
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case 'FETCH_CARS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        cars: action.payload.cars,
        totalPageCount: action.payload.totalPageCount
      }

    case 'FETCH_CARS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.paylad.error,
        cars: [],
        totalPageCount: 0
      }

    default:
      return state;
  }
};
export default carReducer;
