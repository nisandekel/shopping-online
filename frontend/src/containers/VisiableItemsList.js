import { connect } from 'react-redux';
import ItemsList from './../components/ItemsList/ItemsList.view';
import {fetchItems} from './../components/ItemsList/ItemsList.actions';

const mapStateToProps = state => {

    const { itemsList } = state;
    return {
        itemsList
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchItems:()=>dispatch(fetchItems())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);