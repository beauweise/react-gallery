import React, { Component } from 'react';

class GalleryItem extends Component {

state = {
    showInfo: true
}

clickPic = () => {
    console.log('clicked', this.state.showInfo);
    this.setState({
        showInfo: !this.state.showInfo
    });
}
renderToggle = ()=> {
    if (this.state.showInfo === true){
        return <img className = 'jaxbeingsilly' src = {this.props.img.path} 
                    alt = {this.props.description}
                    onClick = {this.clickPic}>
                </img>
            }
            else {
                return <div onClick = {this.clickPic}>{this.props.img.description}</div>
            }
}

    render() {
        return (
            <div className='jaxPics'>
                {this.renderToggle()}
                <button onClick = {()=>this.props.like(this.props.img.id)}>Like</button>
            <p>{this.props.img.likes}they like me</p>
            
            </div>
            
        )
    }
}
export default GalleryItem;
