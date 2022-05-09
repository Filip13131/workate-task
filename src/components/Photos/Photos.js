import './Photos.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swiper from "./Swiper/Swiper.js"
import Guide from "./Guide/Guide.js"
import Display from './Display/Display';

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
    const [numberOfPages, setNumberOfPages]= useState(10)

    const fetchData = () => {
        axios
            .get(url)
            .then( (res) => {
                setOurPhotos(getSlugsFromJSONs(res.data))
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect( () => {
        fetchData();  
    }, [])

    useEffect( () => {
        setNumberOfPages(Math.ceil(ourPhotos.length/numberOfPhotosDisplayedCounter))
    },[pageCounter, numberOfPhotosDisplayedCounter, ourPhotos])
    
    return(
        <div className='Workspace'>
            <Guide pageCounter={pageCounter} numberOfPages={numberOfPages}/>
            <Display pageCounter={pageCounter} numberOfPhotosDisplayedCounter={numberOfPhotosDisplayedCounter} ourPhotos={ourPhotos}/>
            <Swiper pageCounter={pageCounter} setPageCounter={setPageCounter} numberOfPages={numberOfPages}/>
        </div>
    );
}

export default Photos; 