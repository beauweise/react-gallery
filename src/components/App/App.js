import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pictures of my Son</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryItem/>

      </div>
    );
  }
}

export default App;
