import React from 'react';
import './Header.css'
import PropTypes from 'prop-types';


function Header({text, bgColor, textColor}) {
    const headerStyles = { 
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <header className='header'>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Spacestagram',
    bgColor: 'rgba(29,29,29,0.04)',
    textColor: '#121212',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
}

export default Header;
