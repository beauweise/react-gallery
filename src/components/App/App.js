import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    pictureList: []
  };
componentDidMount= () => {
  console.log('app is mounted');
  this.getList();
};

getList = () => {
  console.log('in getList');
  axios({
    method: 'GET',
    url: '/gallery'
  }).then((response) => {
    console.log('response.data', response.data);
    console.log(this.state.pictureList);

    this.setState({
      pictureList: response.data
    })
  }).catch((error) => {
    console.log(error);
  });
}

likeBtn = (itemId) => {
  console.log('in put', itemId);

  axios({
    method: `PUT`,
    url: `/gallery/like/${itemId}`
  }).then((response) => {
    console.log('put', response.likes);
    this.getList();
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
      <br />
      <p>Gallery goes here</p>
      <GalleryList imgs = {this.state.pictureList} like = {this.likeBtn} />
      
    </div>
  );
}
}

export default App;



// getList={this.getList}


