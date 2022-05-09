import './Photos.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swiper from "./Swiper/Swiper.js"

const getSlugsFromJSONs = (photos) => {
    let dataWithSlugs = photos.map((photo)=>{
        let slug = '';
        [...photo.url].forEach(letter => {
            if (letter!=='/'){
                slug += letter
            }
            if (letter === '/'){
                slug=''
            }
        }
        )
        photo.slug= slug
        return photo;
    })
    return dataWithSlugs
}

const Photos = () => {
    
    const url = "https://picsum.photos/v2/list";

    const [ourPhotos, setOurPhotos] = useState([]);
    const [pageCounter, setPageCounter] = useState(0);
    const [numberOfPhotosDisplayedCounter, setNumberOfPhotosDisplayedCounter]= useState(3);
    
    const fetchData = () => {
        axios
            .get(url)
            .then( (res) => {
                setOurPhotos(getSlugsFromJSONs(res.data))
            } )
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect( () => {
        fetchData();  
    }, [])

    console.log(ourPhotos)
    
    return(
        <div className='Workspace'>
            <div></div>
            <div className = "Photos">  
                    {
                        ourPhotos.slice(pageCounter*numberOfPhotosDisplayedCounter,(pageCounter+1)*numberOfPhotosDisplayedCounter).map((ourPhoto)=>(
                            <img key= {ourPhoto.id} className='Photo'
                            src= {"http://source.unsplash.com/"+ourPhoto.slug} alt="alternatetext"/>
                        )
                        )
                    }
            </div>
            <Swiper pageCounter={pageCounter} setPageCounter={setPageCounter} />
        </div>
    );
}

export default Photos; 