import React from 'react';
import ReactDOM from 'react-dom';

//import { Router, Route, browserHistory, hashHistory } from 'react-router'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import Photos from './components/Photos/Photos';
import Photo from './components/Photo/Photo';
import Browser from './components/Browser/Browser';
import User from './components/User/User';

import './index.css';


ReactDOM.render(

  <Router history={hashHistory}>
    <Route path='/' component={Browser}>
      <IndexRedirect to="/photos/1" />
      <Route path='photos/:page' component={Photos} />
      <Route path='photo/:photoId' component={Photo} />
      <Route path='user/:userId' component={User} />
    </Route>
  </Router>,
  document.getElementById('root')
);
