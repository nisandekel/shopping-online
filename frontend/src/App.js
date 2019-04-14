import React, { Component } from 'react';
import LoginPage from './components/LoginPage/LoginPage.view';
import RegistretionPage from './components/RegistretionPage/RegistretionPage.view';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header.view';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header title={this.props.title}/>
          <Route path="/login/" component={LoginPage} />
          <Route path="/registretion/" component={RegistretionPage} />
        </Router>
      </div>
    );
  }
}

export default App;
