
import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';




class GalleryList extends Component{
    render(){
        return(
            <>
            <p>Pictures of Jaxson</p> 
                {this.props.imgs.map((img)=>{
                    return <GalleryItem img ={img} key={img.id} like={this.props.like} />
                })}
            </>
            )
        }
    }
export default GalleryList;
