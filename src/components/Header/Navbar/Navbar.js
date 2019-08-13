import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import './Navbar.scss';
import CompanyLogo from '../../CompanyLogo/CompanyLogo';
class Navbar extends Component {
    constructor(props){
        super();
        this.state = {
            menuOpened: false
        };
    }

    toogleMenu(){
        this.setState({menuOpened: !this.state.menuOpened});
    }


    render() {
        return (
            <div className="navbar">
                <div className="container navbar__top">
                    <div className="navbar__content">
                        <div className="navbar__menuSwitch">
                            <div className={this.state.menuOpened ? 'navBurger open' : 'nav'}
                                    onClick={this.toogleMenu.bind(this)}>
                                <span className="navBurger__line"></span>
                                <span className="navBurger__line"></span>
                                <span className="navBurger__line"></span>
                                <span className="navBurger__line"></span>
                            </div>
                        </div>
                        <div className="navbar__logo">
                        <NavLink to="/" className="navbar__logoLink">
                            <CompanyLogo fill="#000000" width="64" height="40"/>
                        </NavLink>
                        </div>
                        <ul className="navbar__rootMenu">
                            <li className="navbar__rootMenuEntry">
                                <NavLink to="/" className="navbar__rootMenuLink navbar__rootMenuLink_active">
                                    Men
                                </NavLink>
                            </li>
                            <li className="navbar__rootMenuEntry">
                                <NavLink to="/" className="navbar__rootMenuLink navbar__rootMenuLink_active">
                                    Women
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;