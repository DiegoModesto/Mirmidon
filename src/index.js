import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SnackbarProvider } from 'notistack'

ReactDOM.render(<SnackbarProvider maxSnack={2}><App /></SnackbarProvider>, document.getElementById('root'));


/*
Links de Referência
--https://material-ui.com/pt/
--https://material-table.com/
--https://www.npmjs.com/package/react-google-recaptcha
--https://iamhosseindhv.com/notistack

--https://github.com/devias-io/react-material-dashboard
---https://react-material-dashboard.devias.io/dashboard?ref=github-readme
*/