import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = (props) => {

    return (
        <Card id={props.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>price: {props.price}</Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;