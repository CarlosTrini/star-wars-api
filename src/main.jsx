import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import App from './App';
import store from '@features/redux/store';

import '@styles/index.scss';
import 'sweetalert2/src/sweetalert2.scss';



ReactDOM.render(
  <BrowserRouter >
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
