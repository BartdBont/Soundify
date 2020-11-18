import React, { useEffect } from 'react'
import YouTube from 'react-youtube'

var cElement = null;
function Streamer({ paused, muted, volume, id}) {
    console.log(paused, muted, volume, id);
    const opts = {
        height: '0',
        width: '0',
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        if (cElement) {
            paused
                ? cElement.target.pauseVideo()
                : cElement.target.playVideo() 
                // && cElement.target.setVolume(90);

        }
    },
        [paused]
    );

    useEffect(() => {
        if (cElement) {
            muted
                ? cElement.target.mute()
                : cElement.target.unMute();
        }
    },
        [muted]
    );

    useEffect(() => {
        if(cElement){
            cElement.target.setVolume(volume);
        }        
    },
        [volume]
    );

    const _onReady = event => {
        // console.log("_onReady");
        cElement = event;
        event.target.pauseVideo();
        // console.log(props.volume)
        event.target.setVolume(volume);
        // setIsPaused(!isPaused);
        // event.target.loadVideo();
        // props.isPaused(!props.isPaused);
        // props.isPaused = true;
        var state = paused;
        console.log(state);
        // props.isPaused(!state);
    };

    const _onStateChange = event => {
        // event.target.pauseVideo();
    };

    return (
        <YouTube
            videoId={id}
            opts={opts}
            onReady={_onReady}
            // onStateChange={_onStateChange}
        />
    );
}

export default Streamer
