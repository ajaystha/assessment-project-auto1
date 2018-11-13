import { combineReducers } from 'redux';

import cars from './reducers/car';
import colors from './reducers/color';
import manufacturers from './reducers/manufacturer';

export default combineReducers({
  cars,
  colors,
  manufacturers,
});
