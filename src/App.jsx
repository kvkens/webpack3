import React from "react"
import {Route} from "mirrorx"

import Header from "components/Header"
import Home from "components/Home"
import About from "components/About"
import Counter from "components/Counter"

const App = () => (
  <div>
    <Header/>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/counter" component={Counter}/>
    </div>
  </div>
)

export default App
