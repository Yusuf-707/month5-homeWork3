import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to='/'>Главная</Link>
            <Link to='/services'>Услуги</Link>
            <Link to='/contacts'>Контакты</Link>
        </div>
    );
}

export default Header;
