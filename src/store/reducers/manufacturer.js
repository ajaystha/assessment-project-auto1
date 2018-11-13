const initialState = {
  manufacturers: [],
  isFetching: false,
  error: null,
};


const manufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MANUFACTURERS_BEGIN':
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case 'FETCH_MANUFACTURERS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        manufacturers: action.payload.manufacturers
      }

    case 'FETCH_MANUFACTURERS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        manufacturers: [],
      }

    default:
      return state;
  }
};
export default manufacturerReducer;
