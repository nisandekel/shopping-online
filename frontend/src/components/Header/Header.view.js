import React from 'react';
import './Header.css';

const Header = (props) => {

    return (
        <h1 className="title">{props.title}
            <img className="cart-img" alt="shopping cart" src ="http://worldartsme.com/images/shopping-cart-clipart-1.jpg"/>
        </h1>
    );

}

export default Header;