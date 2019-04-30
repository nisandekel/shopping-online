import { connect } from 'react-redux';
import ItemsList from './../components/ItemsList/ItemsList.view';
import { imgClicked } from './../components/ShoppingPage/ShoppingPage.actions';
import { fetchItems } from './../components/ItemsList/ItemsList.actions';
import { addItem, deleteItem } from './../components/MyCartPage/MyCartPage.actions';
import { showBanner, unshowBanner } from './../components/Banner/Banner.actions';

const mapStateToProps = state => {

  const { itemsList, myItemsList } = state;
  return {
    itemsList,
    myItemsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    displayImg: (imgSrc) => dispatch(imgClicked(imgSrc)),
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (itemID) => dispatch(deleteItem(itemID)),
    showBanner: (msg, color) => dispatch(showBanner(msg, color)),
    unshowBanner: () => dispatch(unshowBanner())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);