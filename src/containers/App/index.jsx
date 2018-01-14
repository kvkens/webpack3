import React, { Component } from "react";
import Counter from "components/Counter"


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">计数器</h3>
                    </div>
                    <div className="panel-body">
                        <Counter />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
