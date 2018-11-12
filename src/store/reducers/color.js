const initialState = {
  colors: [],
  isFetching: false,
  error: null,
};


const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COLORS_BEGIN':
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case 'FETCH_COLORS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        colors: action.payload.colors
      }

    case 'FETCH_COLORS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        colors: [],
      }

    default:
      return state;
  }
};
export default colorReducer;
