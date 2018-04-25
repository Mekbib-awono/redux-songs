import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';
import SongList from './components/SongList';
import Favorites from './components/Favorites';
import PlayHistory from './components/PlayHistory';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SongList /><br />
          <div style={{ width: '100%' }}>
            <div style={{ width: '45%', dispaly: 'inline-block', float: 'left' }}>
              <Favorites />
            </div>
            <div style={{ width: '45%', dispaly: 'inline-block', float: 'right' }}>
              <PlayHistory />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
