import "./Display.css"
import React from "react";
import LazyImage from "./LazyImage/LazyImage";

const Display = ({pageCounter, numberOfPhotosDisplayedCounter, ourPhotos}) => {


    return(
        <div className = "Photos">  
            {
                 ourPhotos.slice(pageCounter*numberOfPhotosDisplayedCounter,(pageCounter+1)*numberOfPhotosDisplayedCounter).map((ourPhoto)=>(
                        <LazyImage key= {ourPhoto.id} 
                        src= {"http://source.unsplash.com/"+ourPhoto.slug} alt={"error"} />
                    
                )
                )
            }
        </div>
        )
}

export default Display;