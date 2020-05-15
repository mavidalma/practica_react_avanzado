import React from 'react';
import App from '../App/App';
import ErrorLogin from '../ErrorLogin/ErrorLogin.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Root({store, ...props}) {
  return (
    <ErrorLogin>
    <Provider store={store}>
      <Router>
        <App {...props} />
      </Router>
    </Provider>
    </ErrorLogin>
  );
}