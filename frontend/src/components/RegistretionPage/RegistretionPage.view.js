import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import Banner from './../Banner/Banner.view';
import './RegistretionPage.css';


const RegistretionPage = (props) => {

    const userNameRef = React.createRef();
    const emailRef = React.createRef();
    const firstPassRef = React.createRef();
    const secondPassRef = React.createRef();

    function handleRegister() {

        const userName = userNameRef.current;
        const email = emailRef.current;
        const firstPass = firstPassRef.current;
        const secondPass = secondPassRef.current;

        if (userName.classList.contains("red") || userName.value === "") {
            props.showBanner("user name has to be at least 5 characters long and need to contain at least 1 letter", "warning");
            setTimeout(props.unshowBanner, 3000);
            return;
        }

        if (email.classList.contains("red") || email.value === "") {
            props.showBanner("invalid email", "warning");
            setTimeout(props.unshowBanner, 3000);
            return;
        }

        if (firstPass.classList.contains("red") || firstPass.value === "") {
            props.showBanner("password has to be at least 8 characters long and need to contain at least 1 letter", "warning");
            setTimeout(props.unshowBanner, 3000);
            return;
        }

        if (firstPass.value !== secondPass.value) {
            props.showBanner("second password doesnt match to first password", "warning");
            setTimeout(props.unshowBanner, 3000);
            return;
        }

        const details = { userName: userName.value, email: email.value, password: firstPass.value };
        props.uploadRegistretionDetails(details);
        firstPassRef.current.value = "";
        secondPassRef.current.value = "";
        userNameRef.current.value = "";
        emailRef.current.value = "";
    }

    function userNameValidator() {
        const userName = userNameRef.current;
        if ((!isStringLongerThanLength(userName.value, 5) || !isStirngIncludeLetters(userName.value)) && userName.value !== "") {
            userName.classList.add("red");
            userName.title = "user name has to be at least 5 characters long and need to contain at least 1 letter";
        }
        else {
            userName.classList.remove("red");
            userName.title = "";
        }
    }

    function emailValidator() {
        const email = emailRef.current;
        if (!EmailValidator.validate(email.value) && email.value !== "") {
            email.classList.add("red");
        }
        else {
            email.classList.remove("red");
        }
    }

    function passWordValidator(currentPass) {
        const password = currentPass;
        if ((!isStringLongerThanLength(password.value, 8) || !isStirngIncludeLetters(password.value)) && password.value !== "") {
            password.classList.add("red");
            password.title = "password has to be at least 8 characters long and need to contain at least 1 letter";
        }
        else {
            password.classList.remove("red");
            password.title = "";
        }
    }

    return (
        <div>
            <div className="registertion-page-banner">
                <Banner msg={props.banner.msg} show={props.banner.show} color={props.banner.color} />
            </div>
            <div className="regitretion-form">
                <Form>
                    <Form.Group>
                        <Form.Label>User name</Form.Label>
                        <Form.Control ref={userNameRef} type="text" onKeyUp={userNameValidator} placeholder="Enter user name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" onKeyUp={emailValidator} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={firstPassRef} type="password" onKeyUp={() => passWordValidator(firstPassRef.current)} placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control ref={secondPassRef} type="password" onKeyUp={() => passWordValidator(secondPassRef.current)} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={handleRegister}>Submit</Button>
                </Form>
                <Link to="/login" onClick={() => props.unshowBanner()}>Login</Link>
            </div>
        </div>
    )
}

const isStringLongerThanLength = (string, length) => {
    if (string.length < length) {
        return false
    }
    return true;
}

const isStirngIncludeLetters = (string) => {

    for (let char of string) {
        for (let i = 65; i <= 90; i++) {
            if (char.charCodeAt() === i) {
                return true;
            }
        }

        for (let i = 97; i <= 122; i++) {
            if (char.charCodeAt() === i) {
                return true;
            }
        }
    }
    return false;
}

export default RegistretionPage;