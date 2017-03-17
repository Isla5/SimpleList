import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {AppContainer} from 'react-hot-loader';

require ('./index.html');

const container = document.getElementById('app-container');

ReactDOM.render(
  <AppContainer>
      <App/>
  </AppContainer>,
  container
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextRootContainer = require('./components/App').default
    ReactDOM.render(
      <AppContainer>
        <NextRootContainer/>
      </AppContainer>,
      container
    );
  });
}
