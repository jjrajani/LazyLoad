import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Nav } from "components/Nav";
import Routes from "./Routes";

// import _ from "lodash";
import { join } from "lodash";

// console.log(_);
// import( './async.js' ).then( ( data ) => {
//     console.log( data );
// } );

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}
