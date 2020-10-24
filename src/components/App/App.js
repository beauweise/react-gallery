import React, { Component } from 'react';
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
        <img class ="jaxbeingsilly" src="images/jaxbeingsilly.jpg"alt = 'jaxson wearing his moms shoes'/>
        <img class ="jaxbeingsilly" src="images/jaxbeinggoofy.jpg"alt ='jaxson with a toy on his nose'/>
        <img class ="jaxbeingsilly" src="images/jaxridingahorse.jpg"alt ='jaxson on a playground horse'/>
        <img class ="jaxbeingsilly" src="images/jaxsonsmiling.jpg"alt ='jaxson smiling'/>
        <img class ="jaxbeingsilly" src="images/jaxwithapony.jpg"alt ='jaxson with a ponytail'/>
        <img class ="jaxbeingsilly" src="images/jaxwithsnow.jpg"alt ='jaxson playing with snow'/>
        <img class ="jaxbeingsilly" src="images/mrcool.jpg"alt ='jaxson wearing sunglasses'/>
        <img class ="jaxbeingsilly" src="images/jaxatthefourthofjuly.jpg"alt ='jaxson with a 4th of july hat'/>

      </div>
    );
  }
}

export default App;
