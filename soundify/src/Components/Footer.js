import React, { useState } from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Streamer from './Streamer';

function Footer() {
    const [playing, setPlaying] = useState(false);
    const [paused, setPaused] = useState(true);
    const [muted, setMuted] = useState(false);
    const [loop, setLoop] = useState(false);
    const [volume, setVolume] = useState(30);

    const handlePlayPause = () => {
        setPlaying(!playing);
        setPaused(!paused);
    }

    const toggleMute = () => {
        setMuted(!muted);
    };

    const handleLoop = () => {
        setLoop(!loop);
    }

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
        if (newValue < 1) setMuted(true);
        else if (muted) toggleMute();
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg" alt=""/>
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                {!playing ? <PlayCircleOutlineIcon fontSize="large" className="footer__icon" onClick={handlePlayPause}/> : <PauseCircleOutlineIcon fontSize="large" className="footer__icon" onClick={handlePlayPause}/> }
                <SkipNextIcon className="footer__icon"/>
                {loop ? <RepeatIcon className="footer__green" onClick={handleLoop}/> : <RepeatIcon onClick={handleLoop}/>}
                <Streamer paused={paused} muted={muted} volume={volume} loop={loop} id="-GXGkHdK9CM"/>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        {muted ? <VolumeOffIcon onClick={toggleMute} /> : volume > 50 ? <VolumeUpIcon onClick={toggleMute} /> : <VolumeDownIcon onClick={toggleMute} />}
                    </Grid>
                    <Grid item xs>
                        <Slider value={volume} onChange={handleVolumeChange}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
