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
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Streamer from './Streamer';

function Footer() {
    const [playing, setPlaying] = useState(false);
    const [paused, setPaused] = useState(true);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(30);

    const handlePlayPause = () => {
        setPlaying(!playing);
        setPaused(!paused);
    }

    const toggleMute = () => {
        setMuted(!muted);
    };

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
        if (newValue < 1) setMuted(true);
        else if (muted) setMuted(false);
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
                <RepeatIcon className="footer__green"/>
                <Streamer paused={paused} muted={muted} volume={volume} id="AaxFIY-cWH0"/>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        {!muted ? <VolumeDownIcon onClick={toggleMute} /> : <VolumeOffIcon onClick={toggleMute} />}
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
