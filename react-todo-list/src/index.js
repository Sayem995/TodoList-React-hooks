import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import TaskDetail from './components/TaskDetail';


import * as serviceWorker from './serviceWorker';

// const routing = (
//   <router>
//     <div>
//       <Route path="/" component={App} />
//       <Route path="/todo-list" component={TodoList} />
//       <Route path="/about-us" component={AboutUs} />

//     </div>
//   </router>
// )

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
        <Switch>
          <Link to="/">App</Link> 
          <Link to="/task-detail">TaskDetail</Link>
      

        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
