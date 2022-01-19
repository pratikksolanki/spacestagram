import React, { useState } from "react";
import { FiHeart } from 'react-icons/fi'
import './LikeButton.css'


function LikeButton() {

    const unliked = 'heart unliked';
    const liked = 'heart liked';
 
    const [like, setLike] = useState(false);
    const [likeStatus, setLikeStatus] = useState(unliked);

    const handleClick = (event) => {
        event.preventDefault();
        if (like === false) {
          setLike(true);
          setLikeStatus(liked);
        } else {
          setLike(false);
          setLikeStatus(unliked);

        }
      }

    return (
        <div className="heartWrapper">
            <FiHeart  className={likeStatus} aria-label="Like" onClick={handleClick} />
        </div>
        
    )
}

export default LikeButton
