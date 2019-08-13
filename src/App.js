import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './Routes';


class App extends Component {
  render() {
    return (
          <>
            <Routes />
          </>
    );
  }
}


export default App