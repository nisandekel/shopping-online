import React, { Component } from 'react';
import LoginPage from './components/LoginPage/LoginPage.view';
import RegistretionPage from './components/RegistretionPage/RegistretionPage.view';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import Header from './components/Header/Header.view';
import { uploadRegistretionDetails } from './components/RegistretionPage/RegisretionPage.actions';
import { checkAuthorization } from './components/LoginPage/LoginPage.actions';
import ShoppingPage from './components/ShoppingPage/ShoppingPage.view';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  render() {

    const { uploadRegistretionDetails, checkAuthorization, isLoggedIn } = this.props;
    return (
      <div className="App">
        <Router>
          <Header title={this.props.title} />
          <Switch>
            <Route path="/registretion/" render={(props) => <RegistretionPage {...props} uploadRegistretionDetails={uploadRegistretionDetails} />} />
            <Route path="/shopping/" render={(props) => <ShoppingPage {...props} />} />
            <Route render={() => {
              return (
                isLoggedIn ? (<Redirect to="/shopping/" />) : (<LoginPage checkAuthorization={checkAuthorization} />)
              )
            }} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {

  const { isLoggedIn } = state;
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadRegistretionDetails: (details) => dispatch(uploadRegistretionDetails(details)),
    checkAuthorization: (details) => dispatch(checkAuthorization(details))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
