import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Banner from './../Banner/Banner.view';
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
        <div>
            <div className="login-page-banner">
                <Banner msg={props.banner.msg} show={props.banner.show} color={props.banner.color}/>
             </div>   
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
            <Link to="/registretion/" onClick={()=>props.unshowBanner()}>Register</Link>
        </div>
        </div>
    );
}

export default LoginPage;