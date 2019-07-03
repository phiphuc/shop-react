import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InitScroll from './components/InitScroll/InitScroll';
import Homepage from './pages/Homepage/Homepage'
const Layout = () => (
    <InitScroll>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
    </InitScroll>
)
export default Layout