import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './pages/home';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Link to="/" exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
