import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './LoginPage.css';

const LoginPage = (props) => {
    return (
        <div className="login-form">
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
            <Link to="/registretion/">Register</Link>
        </div>


    );
}

export default LoginPage;