import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
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
      <div>
        <nav>
          <ul>
            <h1>
              <Link to="/">Home</Link>
              <Link to="/AboutUs">About Us</Link>
              <Link to="/ContactUs">Contact Us</Link>
            </h1>
           </ul>
        </nav>
      </div>

        <Switch>
         
          <Route path="/task-detail"> <TaskDetail/> </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
