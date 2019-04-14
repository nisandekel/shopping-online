import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RegistretionPage.css';


const RegistretionPage = () => {

    return (
        <div className="regitretion-form">
            <Form>
                <Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
            <Link to="/login/">Login</Link>
        </div>
    )
}

export default RegistretionPage;