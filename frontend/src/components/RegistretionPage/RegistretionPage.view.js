import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RegistretionPage.css';


const RegistretionPage = (props) => {

    const userNameRef = React.createRef();
    const emailRef = React.createRef();
    const firstPassRef = React.createRef();
    const secondPassRef = React.createRef();

    function handleRegister(){
        const firstPass = firstPassRef.current.value;
        const secondPass = firstPassRef.current.value;
        if(firstPass!==secondPass){
            alert("second password doesnt match to first password");
        }
        else{
            const userName = userNameRef.current.value;
            const email = emailRef.current.value;
            const  details =  {userName, email, password: firstPass};
            props.uploadRegistretionDetails(details); 
            firstPassRef.current.value="";
            secondPassRef.current.value="";
            userNameRef.current.value="";
            emailRef.current.value="";
        }
    }

    return (
        <div className="regitretion-form">
            <Form>
                <Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Form.Control ref={userNameRef} type="text" placeholder="Enter user name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={firstPassRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control ref={secondPassRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={handleRegister}>Submit</Button>
            </Form>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default RegistretionPage;