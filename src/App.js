import React, { Component } from 'react'
import Routes from './Routes'
import validate from 'validate.js'
import { Router } from 'react-router-dom'
import { Chart } from 'react-chartjs-2';
import { createBrowserHistory } from 'history'
import { ThemeProvider } from '@material-ui/styles'

import { chartjs } from './helpers'
import theme from './theme'
import validators from './common/validators';



import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

const browserHistory = createBrowserHistory()

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
})

validate.validators = {
  ...validate.validators,
  ...validators
}

export default class App extends Component{
  render(){
    return(
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    )
  }
}