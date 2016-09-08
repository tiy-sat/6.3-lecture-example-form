import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Main from './lib/main'
import Welcome from './lib/Welcome'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
    <Route path="/Welcome/:username" component={Welcome}/>
  </Router>
), document.getElementById('app'))
