import React, {Component} from 'react';
state = {
    showInfo: false
}
class GalleryItem extends Component{

    clickPic = ()=>{
        console.log('clicked',this.state.showInfo);
        this.setState({
                showInfo:!this.state.showInfo
        })
        
    }
    
        render(){
            return(
                <div className = 'jaxPics'>
                    <button onClick={this.clickPic}><img className ="jaxbeingsilly" src="images/jaxbeingsilly.jpg"alt = 'jaxson wearing his moms shoes'/></button>
                    <button onClick={this.clickPic}><img className ="jaxbeingsilly" src="images/jaxbeinggoofy.jpg"alt ='jaxson with a toy on his nose'/></button>
                    <button onClick={this.clickPic}><img className ="jaxbeingsilly" src="images/jaxridingahorse.jpg"alt ='jaxson on a playground horse'/></button>
                    <button onClick={this.clickPic}><img className ="jaxbeingsilly" src="images/jaxsonsmiling.jpg"alt ='jaxson smiling'/></button>
                    <button onClick={this.clickPic}><img className ="jaxbeingsilly" src="images/jaxwithapony.jpg"alt ='jaxson with a ponytail'/></button>
                    <button onClick={this.clickPic}><img className ="jaxbeingsilly" src="images/jaxwithsnow.jpg"alt ='jaxson playing with snow'/></button>
                    <button onClick={this.clickPic}><img className ="jaxbeingsilly" src="images/mrcool.jpg"alt ='jaxson wearing sunglasses'/></button>
                    <button onClick={this.clickPic}><img className ="jaxbeingsilly" src="images/jaxatthefourthofjuly.jpg"alt ='jaxson with a 4th of july hat'/></button>
 
                </div>
            )
        }
    }
export default GalleryItem;
