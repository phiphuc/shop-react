import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route} from 'react-router-dom';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
    }).isRequired,
    children: PropTypes.node.isRequired
}

class InitScroll extends Component {
    state = {
        location: ''
    }

    componentDidMount() {
        const { location: { pathname, search }} = this.props;
        const { location } = this.state;
        const newLocation = `${pathname}${search}`;
        if(location !== newLocation){
            window.scrollTo(0,0);
            this.setState({location: newLocation});
        }
    }
    
    render() {
        const { children } = this.props;
        return  children;
    }
}
InitScroll.propTypes = propTypes;

export default props => <Route render={routeProps => <InitScroll {...routeProps} {...props} />}/> ;
