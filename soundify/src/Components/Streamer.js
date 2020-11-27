import React, { useEffect } from 'react'
import YouTube from 'react-youtube'
import { useStateProviderValue } from '../StateProvider';

var container = null;
function Streamer({ paused, muted, volume, id, loop}) {
    const [{song}, dispatch] = useStateProviderValue();
    console.log(song);
    console.log(paused, muted, volume, id);
    const opts = {
        height: '0',
        width: '0',
        playerVars: {
            autoplay: -1,
        },
    };

    useEffect(() => {
        if (container) {
            container.target.playVideo();
        }
        console.log("songchanged")
    }, [song])

    useEffect(() => {
        if (container) {
            paused ? container.target.pauseVideo()
                : container.target.playVideo() 
        }
    },
        [paused]
    );

    useEffect(() => {
        if (container) {
            muted ? container.target.mute()
                : container.target.unMute();
        }
    },
        [muted]
    );

    useEffect(() => {
        if(container){
            container.target.setVolume(volume);
        }        
    },
        [volume]
    );

    const _onReady = event => {
        // console.log("_onReady");
        container = event;
        // console.log(props.volume)
        event.target.setVolume(volume);
        // setIsPaused(!isPaused);
        // event.target.loadVideo();
        // props.isPaused(!props.isPaused);
        // props.isPaused = true;
        var state = paused;
        // props.isPaused(!state);
    };

    const _onStateChange = (e) => {
        //if ended
        if (e.data === 0 && loop) {
            e.target.seekTo(0);
        }
    };

    return (
        <YouTube
            videoId={id}
            opts={opts}
            onReady={_onReady}
            onStateChange={_onStateChange}
        />
    );
}

export default Streamer
