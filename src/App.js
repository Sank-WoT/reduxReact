import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Chat from './chat.js';
import reducer from './reducers';

const store = createStore(reducer);
// прокидка в виндов
window.store = store;

class App extends Component {
  render() {
      return (
	      <Provider store={store}>
          <div className="App">
              <p>Emacs for profi!!!</p>
	      <Chat />
	  </div> 
       </Provider>
    );
  }
}

export default App;
