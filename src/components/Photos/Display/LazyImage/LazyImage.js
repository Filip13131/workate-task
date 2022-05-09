import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BarWave from "react-cssfx-loading/lib/BarWave";
import "./LazyImage.css"

const LazyImage = ({src, key, alt }) => (
    <div>
      <LazyLoadImage
        className='Photo'
        alt={alt}
        key={key}
        src={src}
        placeholder={<BarWave/>} 
        />
    </div>
  );
  
  export default LazyImage;