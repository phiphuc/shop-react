import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

import InitScroll from './components/InitScroll/InitScroll';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Layout = () => (
  <InitScroll>
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </InitScroll>
);


export default Layout;