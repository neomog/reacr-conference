import React, { Component } from 'react';
import Header from './components/Header';
import Ticket from "./components/Ticket";
import Speakers from "./components/Speakers";


class App extends Component {
  render() {
  
    return (
      <div class="app-container">
        <Header />
        <Ticket />
        <Speakers />
      </div>
    )
  }
}

export default App

