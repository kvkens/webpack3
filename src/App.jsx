import React from "react";
import { Route,Router } from "mirrorx";
import Header from "components/Header";
import Home from "components/Home";
import User from "containers/User";

const App = () => (
  <Router>
    <div>
      <Route path="*" component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/xn" component={User} />
    </div>
  </Router>
)

export default App;
