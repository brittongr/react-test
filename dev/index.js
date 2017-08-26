import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import { Demo } from '../src/Demo';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-root')
  );
};

render(Demo);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../src/Demo', () => {
    render(Demo)
  });
}
