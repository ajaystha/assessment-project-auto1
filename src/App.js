import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Router from './router/router';

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Router />
        </Layout>
      </>
    );
  }
}
export default App;
