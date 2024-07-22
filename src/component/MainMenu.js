import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const MainMenu = () => {
    const location = useLocation();
    return (
        <div>
            <nav className="navbar-menu">
                <ul className='nav-menu-items'>
                    <li className='nav-menu-icon'><i className="fa-solid fa-gauge"></i></li>
                    <li className='nav-menu-text'>DASHBOARD</li>
                </ul>
                <ul className='nav-menu-items'>
                    <li className='nav-menu-icon'><i className="fa-solid fa-sliders"></i></li>
                    <li className='nav-menu-text'>QUICK CONTROLS</li>
                </ul>
                <Link 
                    to="/navigation"
                    className={`link ${location.pathname === '/navigation' ? 'active' : ''}`}
                >
                    <ul className='nav-menu-items'>
                        <li className='nav-menu-icon'><i className="fa-solid fa-location-dot"></i></li>
                        <li className='nav-menu-text'>NAVIGATION</li>
                    </ul>
                </Link>
                <ul className='nav-menu-items'>
                    <li className='nav-menu-icon'><i className="fa-solid fa-mobile-screen-button"></i></li>
                    <li className='nav-menu-text'>PHONE</li>
                </ul>
                <ul className='nav-menu-items'>
                    <li className='nav-menu-icon'><i className="fa-brands fa-youtube"></i></li>
                    <li className='nav-menu-text'>MEDIA</li>
                </ul>
                <Link 
                    to="/settings"
                    className={`link ${location.pathname === '/settings' ? 'active' : ''}`}
                >
                    <ul className='nav-menu-items'>
                        <li className='nav-menu-icon'><i className="fa-solid fa-car-side"></i></li>
                        <li className='nav-menu-text'>SETTINGS</li>
                    </ul>
                </Link>
            </nav>
        </div>
    );
}

export default MainMenu;
