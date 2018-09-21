import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import TodoList from './components/TodoList/TodoList'
import rootReducer from './reducers';

import logo from './logo.svg';
import './App.css';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
