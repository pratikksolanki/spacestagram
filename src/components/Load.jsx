import React from 'react';
import './Load.css'

function Load() {
    return(
        <div className="loadingWrapper">
            <div className='space-gradient'>
                <h2>🚀 Retrieving views from space! 🛰️</h2>
                <p>Brought to you by NASA's APOD API...</p>
            </div>
        </div>

    )
}

export default Load;
