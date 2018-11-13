import { combineReducers } from 'redux';

import cars from './car';
import colors from './color';
import manufacturers from './manufacturer';

export default combineReducers({
  cars,
  colors,
  manufacturers,
});
