import React, { Component } from 'react';
import {Switch,Route} from 'mirrorx';
// import Home from 'components/Home';
// import User from 'containers/User';
import asyncComponent from 'components/AsyncComponent';
const AsyncHome = asyncComponent(() => import('components/Home'));

const AsyncUser = asyncComponent(() => import('containers/User'));
const AsyncDemo1 = asyncComponent(() => import('components/Demo1'));
const AsyncDemo2 = asyncComponent(() => import('components/Demo2'));
const AsyncDemo3 = asyncComponent(() => import('components/Demo3'));


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={AsyncHome} />
                <Route exact path="/user" component={AsyncUser} />
                <Route exact path="/demo1" component={AsyncDemo1} />
                <Route exact path="/demo2" component={AsyncDemo2} />
                <Route exact path="/demo3" component={AsyncDemo3} />
            </Switch>
        );
    }
}

export default Routes;
