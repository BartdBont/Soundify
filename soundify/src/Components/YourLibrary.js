import React from 'react'
import YouTube from 'react-youtube'

function YourLibrary() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleReady = (e) => {
        e.target.pauseVideo();
    }

    return (
        <div>
            <h1>Your library</h1>
            <YouTube videoId="US23A1500072" opts={opts} onReady={handleReady} />
        </div>
    )
}

export default YourLibrary
