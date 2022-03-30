import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import DefaultLayout from './layouts/default';

import Theme from './assets/theme';
import './assets/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <DefaultLayout />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
