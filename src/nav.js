import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const NavBar = () => (
    <div>
        <div>
            <NavLink exact to='/' className="blue">页面app</NavLink> | &nbsp;
            <NavLink to='/TestA' className="green">页面TestA</NavLink> | &nbsp;
            <NavLink to='/TestB' className="red">页面TestB</NavLink> | &nbsp;
            <NavLink to='/react' activeClassName='active'>404</NavLink> | &nbsp;
            <NavLink to='/redirect' activeClassName='active'>redirect</NavLink>
        </div>
        <div>
    </div>
    </div>
)
export default NavBar;