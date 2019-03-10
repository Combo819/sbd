import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import "./App.css";
import "typeface-roboto";

import Entry from "./components/entry";
import Celebration from "./components/celebration";
import Gallary from "./components/gallary"
import history from "./history";
import LiftTime from './components/lifeTime'
class App extends Component {
  render() {
    return (
      <Router history={history}>

          <div>
            <Route path="/" exact component={Entry} />
            <Route path="/celebration" component={Celebration} />
            <Route path="/gallary" component={Gallary} />
            <Route path="/lifetime" component={LiftTime} />
          </div>

      </Router>
    );
  }
}

export default App;
