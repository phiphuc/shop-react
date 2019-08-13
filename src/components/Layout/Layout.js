import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import './Layout.scss';

const propTypes = {
    children: PropTypes.node.isRequired
};

const Layout = ({children}) => {
    return (
        <div className="layout">
            <div className="layout__header">
            <Header /> 
            </div>
            <div className="layout__content">
                {children}
            </div>
            <div className="layout__footer">

            </div>
        </div>
    )
}

Layout.propTypes = propTypes;
export default Layout