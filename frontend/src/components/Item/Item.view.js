import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Item.css';

const Item = (props) => {

    function addItem(){
        const item = {_id:props.id, name:props.name, price:props.price, img:props.img};
        props.addItem(item);
    }

    function deleteItem(){
        props.deleteItem(props.id);
    }

    const onClickFunc = props.allItems ? addItem : deleteItem;
    const buttonName = props.allItems ? "Add to cart" : "Remove from cart";


    return (
        <Card className="item-card" id={props.id}>
            <Card.Img className="item-img" variant="top" src={props.img} onClick={()=> props.displayImg(props.img)}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>price: {props.price}</Card.Text>
                <Button variant="primary" onClick={onClickFunc}>{buttonName}</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;