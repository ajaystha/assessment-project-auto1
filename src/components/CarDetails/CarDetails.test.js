import React from 'react';
import { shallow } from 'enzyme';

import CarDetails from './CarDetails';

const props = {
  car: {
    "stockNumber": 61572,
    "manufacturerName": "Fiat",
    "modelName": "127",
    "color": "white",
    "mileage": {
      "number": 116832,
      "unit": "km"
    },
    "fuelType": "Diesel",
    "pictureUrl": "http://localhost:3001/car.svg"
  }
}

describe('CarDetails.js', () => {
  const wrapper = shallow(<CarDetails car={props.car} />);

  it('renders without crashing', () => {
    shallow(<CarDetails car={props.car} />)
  });

  it('renders props', () => {
    expect(wrapper.contains(props.car.manufacturerName)).toEqual(true);
    expect(wrapper.contains(props.car.modelName)).toEqual(true);
    expect(wrapper.contains(props.car.stockNumber)).toEqual(true);
    expect(wrapper.contains(props.car.mileage.number)).toEqual(true);
    expect(wrapper.contains(props.car.mileage.unit)).toEqual(true);
    expect(wrapper.contains(props.car.fuelType)).toEqual(true);
    expect(wrapper.contains(props.car.color)).toEqual(true);
  });

});
