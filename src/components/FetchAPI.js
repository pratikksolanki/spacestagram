import React, { useState, useEffect } from 'react';
import './FetchAPI.css'
import Load from './Load';
import Image from './Image';

let rndInt = Math.floor(Math.random() * 20) + 50


const API_KEY = process.env.REACT_APP_API_KEY;

const nasaAPIURL = 'https://api.nasa.gov/planetary/apod?api_key='+API_KEY+'&count='+rndInt

function FetchAPI() {
    const [images, setImages] = useState(); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(nasaAPIURL)
        .then(res => res.json())
            .then(data => {
                setImages(data);
                setLoading(true);
            })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }, []);

    return (
        loading ? <div className="imagesWrapper">
            <div>
            
                {images.map((image, index) => {
                        if (image.media_type === 'image') {
                            return <Image image={image} key={index}/>
                        }
                    })}

            </div>
        </div> : <Load />

    )

}

export default FetchAPI;

