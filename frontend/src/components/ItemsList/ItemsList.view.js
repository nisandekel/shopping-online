import React from 'react';
import Item from './../Item/Item.view';

class ItemsList extends React.Component {
    
    constructor(props){
        super(props);
        this.items=[];
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {

        this.items = this.props.itemsList.map(item =>
            (<Item key={item._id} id={item._id} name={item.name} img={item.img} price={item.price} />)
        );

        return (
            <div>
                {this.items}
            </div>
        );
    }
}

export default ItemsList;