import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import TodoList from './components/TodoList/TodoList'
import rootReducer from './reducers';
import logger from './middlewares/logger';

import logo from './logo.svg';
import './App.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

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
