import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './component/NotFound';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/404" component={NotFound} />
  </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);
