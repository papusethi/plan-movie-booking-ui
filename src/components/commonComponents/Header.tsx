import React from 'react';
import './Header.css';
import movieTicketLogo from '../assets/svg/movie-ticket-logo.svg';
import searchIcon from '../assets/svg/search.svg';
import menuIcon from '../assets/svg/menu.svg';

const Header: React.FC = () => {
    return (
        <header className='header__section'>
            <div className='header__container'>
                {/* Logo */}
                <div className='logo__container'>
                    <img src={movieTicketLogo} alt='Logo' />
                </div>

                {/* Seaarch Box  */}
                <div className='search__container'>
                    <img src={searchIcon} alt='Search Icon' />
                    <input type='search' placeholder='Search for movie' className='search__input' />
                </div>

                {/* Hamburger Menu */}
                <div className='menu__container'>
                    <button className='btn-icon'>
                        <img src={menuIcon} alt='Menu' />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
