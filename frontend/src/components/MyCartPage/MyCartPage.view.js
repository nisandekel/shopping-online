import React from 'react';
import VisiableItemsList from './../../containers/VisiableItemsList';

const MyCartPage = (props) => {

    return (
        <div>
            <h3 className>Hello {props.userName}</h3>
            <VisiableItemsList/>
        </div>
    );
}

export default MyCartPage;