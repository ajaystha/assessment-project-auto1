import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Router from './router/router';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Router />
        </Layout>
      </div>
    );
  }
}
export default App;
