import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './LoginPage.css';

const LoginPage = (props) => {

    const usernameRef = React.createRef();
    const passRef = React.createRef();


    function handleLogin(){
        const userName = usernameRef.current.value;
        const password = passRef.current.value;
        const details = {userName, password}
        props.checkAuthorization(details);
        usernameRef.current.value="";
        passRef.current.value="";
    }

    return (
        <div className="login-form">
            <Form>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control ref={usernameRef} type="text" placeholder="Enter user name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>Submit</Button>
            </Form>
            <Link to="/registretion/">Register</Link>
        </div>


    );
}

export default LoginPage;