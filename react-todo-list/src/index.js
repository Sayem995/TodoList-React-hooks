import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import TaskDetail from './components/TaskDetail';


import * as serviceWorker from './serviceWorker';

const routing = (
  <router>
    <div>
      <Route path="/" component={App} />
      <Route path="/todo-list" component={TodoList} />
      <Route path="/about-us" component={AboutUs} />

    </div>
  </router>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
