import React from 'react';
import Item from './../Item/Item.view';
import './ItemsList.css';

class ItemsList extends React.Component {

    constructor(props) {
        super(props);
        this.items = [];
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {

        let itemsArr = this.props.allItems ? this.props.itemsList : this.props.myItemsList;

        this.items = itemsArr.map(item =>
            (<li key={item._id}>
                <Item id={item._id} name={item.name} img={item.img} price={item.price}
                    displayImg={this.props.displayImg} addItem={this.props.addItem} deleteItem={this.props.deleteItem} 
                    allItems={this.props.allItems}
                />
            </li>)
        );

        return (
            <ul className="items-container" type="none">
                {this.items}
            </ul>
        );
    }
}

export default ItemsList;