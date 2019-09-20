import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import './Navbar.scss';
import './Navbar.css';
import CompanyLogo from '../../CompanyLogo/CompanyLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar__logoLink">
            <CompanyLogo fill="#000000" width="64" height="40"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Men</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Women</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <form className="form-inline my-2 my-lg-0">
              <NavLink to="/" className="nav-link">
                    <FontAwesomeIcon icon={faUser} className="icon-user " aria-hidden="true" />
              </NavLink>  
          </form>
          <form className="form-inline my-2 my-lg-0">
              <NavLink to="/" className="nav-link">
                    <FontAwesomeIcon icon={faShoppingCart} className="icon-cart " aria-hidden="true" />
              </NavLink>  
          </form>
        </div>
    </nav>
 
        );
    }
}

export default Navbar;