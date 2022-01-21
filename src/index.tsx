import '@pagopa/selfcare-common-frontend/common-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@pagopa/mui-italia/theme';
import { CONFIG } from '@pagopa/selfcare-common-frontend/config/env';
import App from './App';
import { ENV } from './utils/env';

// eslint-disable-next-line functional/immutable-data
CONFIG.URL_FE.LOGOUT = ENV.URL_FE.LOGOUT;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
