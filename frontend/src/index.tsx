/**
 *
 * index
 *
 * The entry file, first to be run.
 *
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// colors
import blue from '@material-ui/core/colors/blue';

// containers
import { BrowserRouter } from 'react-router-dom';
import Root from 'containers/Root';

// components
import CssBaseline from '@material-ui/core/CssBaseline';

// decorate
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f26b00',
    },
    secondary: blue,
  },
});

// initial render
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
