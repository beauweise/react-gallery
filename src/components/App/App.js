import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './App.css';

class App extends Component {
  state = {
    pictureList = []
  }
  getList = () => {
    console.log('in OnReady');

    axios({
      method: 'GET',
      url: '/pictures'
    }).then((response) => {
      console.log('response.data',response.data);
      console.log(this.state.pictureList);

      this.setState({
        pictureList: response.data
      })
    }).catch((error) => {
      console.log(error);
    });
  } 
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
