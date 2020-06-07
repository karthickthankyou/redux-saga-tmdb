import React, { Component } from 'react';

import './App.css';

import { Provider } from 'react-redux';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';

import configureStore from './store';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <MovieGrid />
        </div>
      </Provider>
    );
  }
}

export default App;
