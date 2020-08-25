import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="container text-center">
                <h1 className="display-3">Panda Buddy</h1>
                <img className="d-block mx-auto" src={logo} alt=""/>
                <h3>Get Connected With Your Buddies</h3>
            </div>
            <br/>
            <nav className="nav justify-content-center bg-primary">
                <a className="nav-link text-white h5" href="\home">Home</a>
                <a className="nav-link text-white h5" href="\profile">Profile</a>
                <a className="nav-link text-white h5" href="\buddies">Buddies</a>
            </nav>
        </div>
    );
};

export default Header;
