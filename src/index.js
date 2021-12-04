
import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}> {/* the component Provider needs a props store  */}
    <BrowserRouter>
      <App />
  </BrowserRouter>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

