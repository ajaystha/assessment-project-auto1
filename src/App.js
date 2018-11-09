import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import DisplayCars from './containers/DisplayCars/DisplayCars';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <DisplayCars></DisplayCars>
        </Layout>
      </div>
    );
  }
}
export default App;
