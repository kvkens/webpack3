import React, { Component } from 'react';
import {Switch,Route} from 'mirrorx';
import Home from 'components/Home';
import User from 'containers/User';


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user" component={User} />
            </Switch>
        );
    }
}

export default Routes;
