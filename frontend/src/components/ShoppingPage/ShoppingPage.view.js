import React from 'react';
import VisiableItemsList from './../../containers/VisiableItemsList';
import { Form } from 'react-bootstrap';
import './ShoppingPage.css';

const ShoppingPage = (props) => {

    const imgDisplayClasses = ["img-frame"];
    if (props.displayImg.showImg === false) {
        imgDisplayClasses.push("invisible")
    }

    const searchItemRef = React.createRef();

    return (
        <div>
            <Form.Group className="search-item-form">
                <Form.Label className="search-item-label">Search item:</Form.Label>
                <Form.Control ref={searchItemRef} className="search-item" type="text" placeholder="item name"
                    onKeyUp={() => props.filterList(searchItemRef.current.value)}
                />
            </Form.Group>
            <VisiableItemsList allItems={true} />
            <div className={imgDisplayClasses.join(" ")}>
                <img className="x-button" onClick={props.unShowImg} alt="exit" src="https://static.thenounproject.com/png/1600389-200.png" />
                <img className="item-display" alt="img-frame" src={props.displayImg.src} />
            </div>
        </div>

    );

}

export default ShoppingPage;