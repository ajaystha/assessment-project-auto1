import React from 'react';
import { shallow } from 'enzyme';

import App from './App';


describe('App.js', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
});
