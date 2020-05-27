import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Root({store, ...props}) {
  return (

    <Provider store={store}>
      <Router>
        <App {...props} />
      </Router>
    </Provider>
  );
}