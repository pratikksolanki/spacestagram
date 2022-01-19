import React from 'react';
import './Image.css'
import LikeButton from './LikeButton';

function Image({ image }) {

    return (
        <div className="imageCard">

            <img className='imageContent' src={image.url} alt={image.title} />
            <div className="imageTitleWrapper">
            <h3 className='imageTitle'>{image.title}</h3>
            </div>
            <div className='row'>
                <p className='imageDate'>{image.date}</p>

                <LikeButton />

            </div>
            
            <p className='imageCaption'>{image.explanation}</p>

        </div>

    )
}

export default Image;
