import React, { Component } from 'react';
import Header from './components/Header/Header.view';
import LoginPage from './components/LoginPage/LoginPage.view';
import RegistretionPage from './components/RegistretionPage/RegistretionPage.view';
import ShoppingPage from './components/ShoppingPage/ShoppingPage.view';
import MyCartPage from './components/MyCartPage/MyCartPage.view';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import { uploadRegistretionDetails } from './components/RegistretionPage/RegisretionPage.actions';
import { checkAuthorization } from './components/LoginPage/LoginPage.actions';
import { signedOut, shopButtonClicked } from './components/Header/Header.actions';
import { xButtonClicked } from './components/ShoppingPage/ShoppingPage.actions';
import {filterList} from './components/ItemsList/ItemsList.actions';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  render() {
    const { uploadRegistretionDetails, checkAuthorization, currentUser,
      displayImg, unShowImg, signOut, resetImgDisplayerOnShoppingPage,filterList } = this.props;

    return (
      <div className="App">
        <Router>
          <Header title={this.props.title} isLoggedIn={currentUser.isLoggedIn} signOut={signOut}
            resetImgDisplayerOnShoppingPage={resetImgDisplayerOnShoppingPage}
          />
          <Switch>
            <Route path="/registretion/" render={(props) => <RegistretionPage
              {...props} uploadRegistretionDetails={uploadRegistretionDetails} />}
            />
            <Route path="/shopping/" render={(props) => <ShoppingPage {...props} displayImg={displayImg}
              unShowImg={unShowImg} filterList={filterList}/>}
            />
            <Route path="/my-cart/" render={(props) => <MyCartPage {...props}
              userName={currentUser.userName} />}
            />
            <Route render={() => {
              return (
                currentUser.isLoggedIn ? (<Redirect to="/shopping/" />) : (<LoginPage checkAuthorization={checkAuthorization} />)
              )
            }} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {

  const { currentUser, displayImg } = state;
  return {
    currentUser,
    displayImg
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadRegistretionDetails: (details) => dispatch(uploadRegistretionDetails(details)),
    checkAuthorization: (details) => dispatch(checkAuthorization(details)),
    unShowImg: () => dispatch(xButtonClicked()),
    signOut: () => dispatch(signedOut()),
    resetImgDisplayerOnShoppingPage: () => dispatch(shopButtonClicked()),
    filterList:(searchValue)=> dispatch(filterList(searchValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
