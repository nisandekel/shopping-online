import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

    const buttonsClass = props.isLoggedIn ? "" : "invisible-take-up-space";
    const myCartButtonRef = React.createRef();
    const shopButtonRef = React.createRef();

    function selectMyCart() {
        myCartButtonRef.current.classList.add("selected");
        shopButtonRef.current.classList.remove("selected");
    }

    function selectShop() {
        props.resetImgDisplayerOnShoppingPage();
        myCartButtonRef.current.classList.remove("selected");
        shopButtonRef.current.classList.add("selected");
    }

    function handleSignOut() {
        myCartButtonRef.current.classList.remove("selected");
        shopButtonRef.current.classList.remove("selected");
        props.signOut();
    }


    return (
        <h1 className="title">
            <span className={buttonsClass}>
                <Link to="/my-cart">
                    <Button ref={myCartButtonRef} variant="outline-dark" onClick={selectMyCart}>My cart</Button>
                </Link>
                <Link to="/shopping">
                    <Button ref={shopButtonRef} variant="outline-dark" onClick={selectShop}>Shop</Button>
                </Link>
            </span>
            {props.title}
            <img className="cart-img" alt="shopping cart" src="http://worldartsme.com/images/shopping-cart-clipart-1.jpg" />
                <Link to="/login" id="signout-button" className={buttonsClass}>
                    <Button variant="outline-dark" onClick={handleSignOut}>Sign out</Button>
                </Link>
        </h1>
    );
}

export default Header;