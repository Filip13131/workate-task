import "./Display.css"
import React from "react";
import LazyImage from "./LazyImage/LazyImage";

const Display = ({pageCounter, numberOfPhotosDisplayedCounter, ourPhotos}) => {

    const sliced = () => {
        let start = pageCounter*numberOfPhotosDisplayedCounter
        let end = (pageCounter+1)*numberOfPhotosDisplayedCounter
        return (ourPhotos.slice(start, end))
    }
    
    return(
        <div className = "Photos">  
            {
                 sliced().map((ourPhoto)=>(
                        <LazyImage key= {ourPhoto.id} 
                                    src= {"http://source.unsplash.com/"+ourPhoto.slug} 
                                    alt={"error"} 
                                    />  
                    )
                )
            }
        </div>
    )
}

export default Display;