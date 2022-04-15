import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from './layouts/default';

import Theme from './components/theme';
import './assets/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <DefaultLayout />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
