import React from 'react';
import Logo from '../assets/images/logo.png'
const Header = (props) => {
  return (
    <header data-test='header'>
        <div className="wrap">
            <div className="logo">
                <img src={Logo} alt="logo" data-test="logo" />
            </div>
        </div>
    </header>
  )
}

export default Header;