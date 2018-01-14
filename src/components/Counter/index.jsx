import React, { Component } from "react";
import mirror,{actions,connect} from "mirrorx";
import "./index.less";

mirror.model({
    name: 'app',
    initialState: 0,
    reducers: {
      increment(state) {
        return state + 1
      },
      decrement(state) {
        return state - 1
      }
    },
    effects: {
      async incrementAsync() {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 1000)
        })
        actions.app.increment()
      }
    }
  });
  
  const Counter = props => {
    return (
      <div>
        <h1>{props.count}</h1>
        <div className="btn-group btn-group-lg">
          <button className="btn btn-primary" onClick={() => actions.app.decrement()}>-</button>
          <button className="btn btn-primary" onClick={() => actions.app.increment()}>+</button>
          <button className="btn btn-primary" style={{width: 100}} onClick={() => actions.app.incrementAsync()}>+ Async</button>
        </div>
      </div>
    )
  }
  
  export default connect(state => {
    return {count: state.app}
  })(Counter)
