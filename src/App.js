import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInitialData, hideSystemMessage } from './actions/app';
import RenderLoader from './components/RenderLoader/RenderLoader';
import SystemMessage from './components/SystemMessage/SystemMessage';
import Routes from './Routes';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      parent: PropTypes.string,
      position: PropTypes.number,
      filters: PropTypes.shape,
    })
  ),
  callFetchInitialData: PropTypes.func.isRequired,
}

const defaultProps = {
  departments: []
};


class App extends Component {
  componentDidMount(){
    const { isFetching, departments, callFetchInitialData } = this.props;
    if(!isFetching && departments.length === 0){
      callFetchInitialData();
    }
  }
  render() {
    const {
      isFetching,
      departments,
      callHideSystemMessage,
      isMessageVisible,
      systemMessageText,
      systemMessageType
    } = this.props;

    const loaderStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };
    return (
      !isFetching && departments.length === 0 ?
      <div style={loaderStyle}>
        <RenderLoader 
        size={'100px'}
        color = {'lightgrey'}
        />
      </div>
      : <>
          <SystemMessage
            text={systemMessageText}
            type={systemMessageType}
            onHide={callHideSystemMessage}
            isVisible={isMessageVisible}
          />
          <Routes />
        </>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = (state, ownProps) => {
  return {
    departments: state.app.department,
    isFetching: state.app.isFetching,
    isMesageVisible: state.app.systemMessage.isVisible,
    systemMessageText: state.app.systemMessage.text,
    systemMessageType: state.app.systemMessage.type
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    callFetchInitialData: () => {
      dispatch(fetchInitialData());
    },
    callHideSystemMessage: () => {
      dispatch(hideSystemMessage())
    }
  }
}
const C  = connect(mapStateToProps, mapDispatchToProps)(App);

export default props => <Route render={routeProps => <C {...routeProps} {...props} />}/>;