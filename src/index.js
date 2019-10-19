import './style.scss';
import ReactDOM from "react-dom";
import asyncComponent from './AsyncComponent';
import LazyHome from './components/Home/LazyHome';

// const Home = asyncComponent(() => {
//   return new Promise((resolve => {
//     setTimeout(() => {
//       import(
//         /* webpackChunkName: "Home" */
//         /* webpackMode: "lazy" */
//         './components/Home'
//       ).then(module => resolve(module.default))
//     }, 1500)
//   }))
// });
const Users = asyncComponent(() => {
  return new Promise((resolve => {
    setTimeout(() => {
      import(
        /* webpackChunkName: "Users" */
        /* webpackMode: "lazy" */
        './components/Users/Users'
      ).then(module => resolve(module.default))
    }, 1500)
  }))
})

// import( './async.js' ).then( ( data ) => {
//     console.log( data );
// } );
//
// import( './green_beans.js' ).then( ( data ) => {
//     console.log( data );
// } );

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Single Level Lazy Load</Link>
            </li>
            <li>
              <Link to="/tri-level">Tri Level Lazy Load</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/tri-level" exact>
            <LazyHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.getElementById("root");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
});
